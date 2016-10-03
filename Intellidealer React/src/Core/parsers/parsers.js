let parsers = {
    function retrieveDataDefault(type, data, counter)
{
    var displayElements = [];
    $.each(data.fileData, function (name, fData) {
        if (data.supportData.svrProps.css) {
            data.supportData [name].svrProps.css = data.supportData.svrProps.css;
        }

        if (typeof (fData) === "object" && !data.supportData[name].svrProps.combination) {

            var recData = {
                "fileData": fData,
                "supportData": data.supportData [name]
            };
            var parseElement = ObjectParser(type, recData, counter);
            displayElements = displayElements.concat(parseElement);
        } else {
            var valueData = fData;
            if (data.supportData[name].svrProps.combination) {
                switch (data.supportData[name].svrProps.type) {
                    case "string":
                        valueData = "";
                }
                data.supportData[name].svrProps.combination.values.forEach(function (combName, index) {
                    switch (data.supportData[name].svrProps.combination.action) {
                        case "concat":
                            valueData += "" + data.fileData[name][combName];
                            break;
                        default :
                        //newData = fData[name];
                    }
                });
            }

            displayElements.push(React.createElement(type, {
                "name": name,
                "data": fData,
                "value": valueData,
                "supportData": data.supportData[name]
            })); //, "key":name+counter.count+"Object"}
        }
    });
    return displayElements;

}
function retrieveData(baseData, path) {

    var valueData = baseData.fileData[path[0]][path[1]];
    if (baseData.supportData[path[0]][path[1]].svrProps.combination) {
        switch (baseData.supportData[path[0]][path[1]].svrProps.type) {
            case "string":
                valueData = "";
        }
        baseData.supportData[path[0]][path[1]].svrProps.combination.values.forEach(function (combName, index) {
            switch (baseData.supportData[path[0]][path[1]].svrProps.combination.action) {
                case "concat":
                    valueData += "" + baseData.fileData[path[0]][path[1]][combName];
                    break;
                default :
                //newData = fData[name];
            }
        });
    }

    return {
        "name": name,
        "data": baseData.fileData[path[0]][path[1]],
        "value": valueData,
        "supportData": baseData.supportData[path[0]][path[1]]
    }; //, "key":name+counter.count+"Object"}

}


function ListParser(data, list, type, order) {
    var displayElements = []
    list.forEach(function (value, index) {
        displayElements.push(React.createElement(type, {
            "data": {
                "fileData": value,
                "supportData": data,
                "key": "line" + index
            }
        }))
    }.bind(this));
    return displayElements
}
//})

function ObjectParser(type, data, order, counterStart) {
    var displayElements = []
    var counter = counterStart || {count: 0};
    console.log(data.supportData.svrProps.order);
    if (order) {
        order.forEach(function (value) {
            displayElements.push(React.createElement(type, retrieveData(data, value)))
        });
    } else {
        displayElements = retrieveDataDefault(type, data);
    }
    return displayElements;
}
}