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
import DetailInfo from './views/detail_info';
import Caldetail from './views/cal_detail';
import CSC from './views/client_server_core';
import queryPhoto from './views/queryphoto';
import queryJDCards from './views/queryjdCards';
import Index from './views/index';
import ShareView from './views/share_view';
import Published from './views/published';
import Me from './views/me';
import ShopCart from './views/shopcart';
import GoodsInfo from './views/goods_info';
import PkView from './views/pk_view';
import RedPack from './views/red_pack';
import MoneyList from './views/money_list';
import PayView from './views/pay_view';
import OldOrderList from './views/old_order_list';
import Settings from './views/settings';
import PrizeList from './views/prize_list';
import MyInfo from './views/my_info';
import PrizeInfo from './views/prize_info';
import GoodsModule from './views/goods_module';
import TypeList from './views/type_list';
import AddressList from './views/addres_list';
import EditAddress from './views/edit_address';
import LoginView from './views/login';
import MessageSystem from './views/message_system';
import ReaCharge from './views/recharge';
// import PushOrder from './views/push_order';

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
            <Route path="/payview" component={PayView}/>
            <Route path="/oldorderlist/:gid" component={OldOrderList}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/prize_list" component={PrizeList}/>
            <Route path="/my_info" component={MyInfo}/>
            <Route path="/prize_info/:sid" component={PrizeInfo}/>
            <Route path="/goods_module/:type" component={GoodsModule}/>
            <Route path="/type_list" component={TypeList}/>
            <Route path="/address_list" component={AddressList}/>
            <Route path="/edit_address/:type" component={EditAddress}/>
            <Route path="/login" component={LoginView}/>
            <Route path="/message_system" component={MessageSystem}/>
            <Route path="/recharge" component={ReaCharge}/>
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
