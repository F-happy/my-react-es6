/**
 * Created by fuhuixiang on 2/17/16.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Hello from './pages/hello';
import Good from './pages/hello2';

require("../scss/index.scss");
require("../index.html");

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Hello}/>
        {/* add the routes here */}
        <Route path="/hello" component={Hello}/>
        <Route path="/good" component={Good}/>
    </Router>
), document.getElementById('app'));
