import $ from 'jquery';
import axios from 'axios';
import * as cookieDeferred from "jquery";

module.exports = {
    getPartition(){
    var pos1;
    var pos2 = LANSA.action;

    // unique id
    pos1 = pos2.indexOf('+');
    pos2 = pos2.substring(pos1 + 1, pos2.length);

    // partition
    pos1 = pos2.indexOf('+');
    pos2 = pos2.substring(pos1 + 1, pos2.length);
    pos1 = pos2.indexOf('+');
    if(pos1 == -1)
        return pos2;
    else
        return pos2.substring(0, pos1);
    },

// hit keepAlive endpoint every 17.5 minutes
 startKeepAlive(){
    setInterval(function() {
        $resource(appConfigurationService.basePath + '/rest/session/keepAlive').get().$promise;
    }, 1050000);
},


 loginSuccess(){
    this.startKeepAlive();
    // cookieDeferred.resolve();
},

 // cookieDeferred : $q.defer(),
 cookiePromise : cookieDeferred.promise,

// if running on localhost, assume the cookie already exists
        connect(){
            if (window.location.hostname == 'localhost') {
                this.loginSuccess();
            } else if (typeof LANSA !== 'undefined' && LANSA != null) {
                // force any potential http-only cookie to be cleared first
                axios.get({
                    url: appConfigurationService.basePath + '/logout',
                    method: 'GET',
                    dataType: 'json',
                })
                    .success(function () {
                        return $http({
                            url: $location.protocol() + '://' + $location.host() + ':' + $location.port() +
                            '/cgi-bin/lansaweb?wam=F5LOGINJ&webrtn=GET_JSID' +
                            '&part=' + getPartition(),
                            method: 'POST',
                            data: $.param({web_sid: LANSA.web_sid}),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        })
                            .success(function (data) {
                                document.cookie =
                                    'JSESSIONID=' + data.webroutine.fields.WEB_JSID.value +
                                    '; path=' + appConfigurationService.versionSuffix + '/;';
                                loginSuccess();
                            })
                            // don't resolve the promise in case of an error
                            .error(function () {
                                console.log('Failed to obtain backend session id.')
                            });
                    })
                    // don't resolve the promise in case of an error
                    .error(function () {
                        console.log('Failed to log out.')
                    })
            } else {
                console.log('No LANSA object.');
            }
        }

// return function() {
//     var resourceArguments = arguments;
//     function resourceOperation(name) {
//         return function() {
//             var fnArguments = arguments;
//             return cookiePromise.then(function() {
//                 return $resource.apply(this, resourceArguments)[name].apply(this, fnArguments).$promise;
//             })}
//     }
//     return {
//         get: resourceOperation('get'),
//         put: resourceOperation('put'),
//         remove: resourceOperation('remove'),
//         delete: resourceOperation('delete'),
//         create: resourceOperation('create'),
//         update: resourceOperation('update'),
//         http: cookiePromise.then(function() {
//             return $http;
//         })

}