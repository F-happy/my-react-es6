/**
 * Created by fuhuixiang on 2/17/16.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';

import HomePages from './pages/HomePages';

require("../scss/index.scss");
require("../index.html");

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={HomePages}>
        </Route>
    </Router>
), document.getElementById('app'));
