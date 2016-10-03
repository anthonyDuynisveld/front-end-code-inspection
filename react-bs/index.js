import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Configuration from './modules/Configuration'
import WorkInProgress from './modules/WorkInProgress'
import Login from './modules/Location'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/:company/:division/:branch/" >
            <IndexRoute component={Home}/>
            <Route path="configurations/"  component={Configuration}>
                <Route path="workinprogress/" component={WorkInProgress}/>
            </Route>
        </Route>
    </Route>
  </Router>
), document.getElementById('app'))
