/**
 * client
 * @authors jonnyf
 * @date    2016-06-01
 * @version 1.0
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Iframe from './components/iframe';
import DetailInfo from './views/detailinfo';
import Caldetail from './views/caldetail';
import payResult from './views/payresult';
import duoBaoHelp from './views/duobaohelp';
import Rules from './views/rules';
import About from './views/settingAbout';
import ServerText from './views/settingServer';
import Certification from './views/certification';
import ClientHelp from './views/clienthelp';
import CSC from './views/csc';
import queryPhoto from './views/queryphoto';
import queryJDCards from './views/queryjdCards';
import Index from './views/index';
import ShareView from './views/shareview';
import Published from './views/published';
import Me from './views/me';
import ShopCart from './views/shopcart';
import GoodsInfo from './views/goodsinfo';

require("../scss/main.scss");
require("../index.html");

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Index}/>
            <Route path="/home" component={Index}/>
            <Route path="/detailinfo/:id" component={DetailInfo}/>
            <Route path="/caldetail/:sid" component={Caldetail}/>
            <Route path="/payresult" component={payResult}/>
            <Route path="/duobaohelp" component={duoBaoHelp}/>
            <Route path="/rules" component={Rules}/>
            <Route path="/settings/about" component={About}/>
            <Route path="/settings/server" component={ServerText}/>
            <Route path="/certification" component={Certification}/>
            <Route path="/clienthelp" component={ClientHelp}/>
            <Route path="/csc" component={CSC}/>
            <Route path="/queryphoto" component={queryPhoto}/>
            <Route path="/querycards" component={queryJDCards}/>
            <Route path="/shareview" component={ShareView}/>
            <Route path="/published" component={Published}/>
            <Route path="/me" component={Me}/>
            <Route path="/shopcart" component={ShopCart}/>
            <Route path="/iframe/:frame" component={Iframe}/>
            <Route path="/goodsinfo/:sid" component={GoodsInfo}/>
        </Route>
    </Router>
), document.getElementById('duobao'));
