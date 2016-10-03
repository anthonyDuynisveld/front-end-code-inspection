import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import h from '../src/Javascript/jquery-1.11.3.js';
import NotFound from '../src/Core/NotFound';
import WorkInProgress from '../src/Intellidealer/workInProgress';

var IntellidealerScope = (
    <Router history={createHistory()}>
        <Route path="/" component={WorkInProgress}/>
        <Route path="*" component={NotFound}/>
    </Router>
)

ReactDOM.render(IntellidealerScope, document.querySelector('#main'));
