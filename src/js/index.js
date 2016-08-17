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

import IFrame from './components/iframe';
import DetailInfo from './views/detailinfo';
import Caldetail from './views/caldetail';
import CSC from './views/csc';
import queryPhoto from './views/queryphoto';
import queryJDCards from './views/queryjdCards';
import Index from './views/index';
import ShareView from './views/shareview';
import Published from './views/published';
import Me from './views/me';
import ShopCart from './views/shopcart';
import GoodsInfo from './views/goodsinfo';
import PkView from './views/pkview';
import RedPack from './views/redpack';
import MoneyList from './views/moneylist';

require("../scss/main.scss");
require("../index.html");

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Index}/>
            <Route path="/home" component={Index}/>
            <Route path="/detailinfo/:id" component={DetailInfo}/>
            <Route path="/caldetail/:sid" component={Caldetail}/>
            <Route path="/csc" component={CSC}/>
            <Route path="/queryphoto" component={queryPhoto}/>
            <Route path="/querycards" component={queryJDCards}/>
            <Route path="/shareview" component={ShareView}/>
            <Route path="/published" component={Published}/>
            <Route path="/me" component={Me}/>
            <Route path="/shopcart" component={ShopCart}/>
            <Route path="/iframe/:frame" component={IFrame}/>
            <Route path="/goodsinfo/:sid" component={GoodsInfo}/>
            <Route path="/pkview" component={PkView}/>
            <Route path="/redpack" component={RedPack}/>
            <Route path="/moneylist" component={MoneyList}/>
        </Route>
    </Router>
), document.getElementById('duobao'));

(function (window) {
    var lastTime = 0;
    window.requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            var currTime   = new Date().getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id         = setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
})(window);
