/**
 * Created by fuhuixiang on 2/17/16.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';

import HomePages from './pages/HomePages';
import DetailPages from './pages/DetailPages';
import DetailInfoPages from './pages/DetailInfoPages';


require("../scss/index.scss");
require("../index.html");

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" >
            <Route path="/home" component={HomePages}/>
            <Route path="/detail/:id" component={DetailPages}/>
            <Route path="/detailinfo/:id" component={DetailInfoPages}/>
        </Route>
    </Router>
), document.getElementById('app'));
