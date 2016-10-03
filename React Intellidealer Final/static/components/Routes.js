import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Home from './LoginProcess/Home'
import Configuration from './Configurations/Configuration'
import WorkInProgress from './Configurations/WorkInProgress/WorkInProgress'
import CashCode from './Configurations/CashCode/CashCode'
import PartGroupBranch from './Configurations/PartGroupBranch/PartGroupBranch'

import Login from './LoginProcess/Login'
import Location from './LoginProcess/Location'

// const rootRoute = {
//     childRoutes: [{
//         path : '/',
//         component: require('modules/App'),
//         childRoutes: [
//             require('modules/Home'),
//
//         ]
//     }]
// }

export default (

    <Router history={browserHistory} breadcrumbIgnore >
        <Route  component={App} breadcrumbIgnore>
            <Route name="IntelliDealer" path="/" >
                <IndexRoute name="Location" component={Location}/>
                <Route name="Home" breadcrumbName="Home" path=":company/:division/:branch" component={Home}>
                    <Route name="Configurations" path="configurations" component={Configuration}>
                        <Route name="Work In Progress" path="workinprogress" component={WorkInProgress}/>
                        <Route name="Part Group Branch" path="partgroupbranch" component={PartGroupBranch}/>
                        <Route name="Cash Codes" path="cashcodes" component={CashCode}/>
                    </Route>
                </Route>
            </Route>
        </Route>
    </Router>
)
