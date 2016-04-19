/**
 * Created by fuhuixiang on 16/3/23.
 */
'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';

import Loading from '../components/Loading';
import Header from '../components/Header';

import API from '../utils/APIUtils';
import dateUtil from '../utils/dataUtils';

export default class DetailPages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goodinfo: {}
        }
    }

    componentDidMount() {
        let sid = this.props.params.id;
        this.loadGoods(sid);
    }

    // 读取首页商品
    loadGoods(sid) {
        API.get('prize/info', {
            sid: sid
        }, (data)=> {
            this.setState({
                'goodinfo': data.d
            });
        });
    }

    render() {

        let right = {icon: 'icon-user', link: '/info'};
        return (
            <DocumentTitle title="零钱夺宝">
                <section className="main-panel">
                    <Loading ref="Loading"/>
                    <Header title="零钱夺宝" right={right}/>
                    <GoodImg goodinfo={this.state.goodinfo}/>
                    <GoodInfo goodinfo={this.state.goodinfo}/>
                    <Link className="old-item" to="">
                        <span className="icon icon-uni65F6 color-old-item"></span>
                        往期揭晓
                        <span className="icon icon-uni53F3 icon-right"></span>
                    </Link>
                    <p className="good-tips">（重要说明：中奖者拥有该商品10年的使用权）</p>
                    <JoinList sid={this.props.params.id}></JoinList>
                    <GoodFooter/>
                </section>
            </DocumentTitle>
        );
    }
}

class GoodImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let goodURL = '/detailinfo/' + this.props.goodinfo.gid;

        return (
            <Link to={goodURL}>
                <img className="good-img" src={this.props.goodinfo.icon}></img>
                <p className="good-img-title">点击查看图文详情</p>
            </Link>
        );
    }
}

class GoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1,          // 商品状态
            goodTitle: '',      // 商品标题
            total: 0,           // 商品总价
            purchase: 0,        // 售出数量
            period: 0,          // 开奖期数
            userBuy: 0,         // 用户购买数量
            sid: 0
        }
    }

    componentDidMount() {
        this.setState({
            'sid': this.props.goodinfo.sid,
            'status': this.props.goodinfo.status,
            'goodTitle': this.props.goodinfo.title,
            'total': this.props.goodinfo.total,
            'purchase': this.props.goodinfo.purchase,
            'period': this.props.goodinfo.period,
            'userBuy': this.props.goodinfo.buy,
        });
    }

    closeDig(e){
        let Loading = this.refs.Loading;
        Loading.hideLoading();
        e.preventDefault();
        e.stopPropagation();
    }

    showNums(){
        API.get('purchase/getcode', {
            sid: this.state.sid,
            uid: this.props.goodinfo.prize.uid
        }, (data)=> {

            let modal = <div className="dialog">
                            <h1 className="dialog-title">夺宝号</h1>
                            <h2 className="dialog-subtitle">
                                本期参与<span className="dialog-active">{this.state.userBuy}</span>人次
                            </h2>
                            <div className="dialog-codes-warp"></div>
                            <div className="dialog-close" onClick={this.closeDig.bind(this)}>确定</div>
                        </div>;
            Loading.showLoading(modal);
        });
    }

    render() {

        let labelState = '';
        let goodState = [];
        let userJoin = {};

        if (this.state.status == 0) {
            labelState = '已揭晓';
            let prize = this.props.goodinfo.prize;
            let prizeTime = dateUtil.formatTime(this.props.goodinfo.prize_time + '000', 'yyyy-MM-dd');
            goodState = <div className="rewards-wrap">
                            <Link to={'/users/' + prize.uid}>
                                <img src={prize.headimg} className="user-avatar"></img>
                            </Link>
                            <ul className="rewards-info">
                                <li>中奖者:{prize.username}</li>
                                <li>手机号码:{prize.phone}</li>
                                <li>用户地址:{prize.ip_address}</li>
                                <li>本期参与:{prize.buy} 人次</li>
                                <li>揭晓时间:{prizeTime}</li>
                            </ul>
                            <div className="rewards-results">
                                中奖号码: <span className="rewards-special">{prize.code}</span>
                                <Link to={'/calculation/' + prize.sid}>计算详情></Link>
                            </div>
                        </div>
        } else if (this.state.status == 2) {
            labelState = '揭晓中';
            goodState = <div className="waiting-warp">
                            <div className="ewards-results">
                                <span className="icon icon-uni65F6 special"></span>
                                <span className="ewards-special">{prize.code}</span>
                                <Link to={'/calculation/' + prize.sid}>计算详情></Link>
                            </div>
                        </div>
        } else if (this.state.status == 1) {
            labelState = '进行中';
            goodState.push(
                <p className="progress">
                    <span className="progress-new" style={{width: (this.state.purchase / this.state.totle)*100 + '%' }}></span>
                </p>
            );
            goodState.push(
                <p className="remark-text-left">总需:{this.state.total}</p>
            );
            goodState.push(
                <p className="remark-text-right">
                    剩余<span className="active-color">{this.state.total - this.state.purchase}</span>
                </p>
            );
        }

        if (this.state.userBuy > 0) {
            userJoin = <div className="remark-text">
                            已参与<span className="remark-text-join">{this.state.userBuy}</span>人次
                            <span className="remark-text-right now-color" cnClick={this.showNums.bind(this)}>查看夺宝号></span>
                        </div>
        } else {
            userJoin = <div className="remark-text">您还没有参加，赶紧参加吧</div>
        }

        return (
            <div className="good-wrap">
                <Loading ref="Loading" skin="2"/>
                <h2 className="good-title">
                    <span className="good-title-label">{labelState}</span>
                    (第{this.state.period}期){this.state.title}
                </h2>
                {goodState}
                {userJoin}
            </div>
        );
    }
}

class JoinList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            userList: [],
            userStr: ''
        }
    }

    componentDidMount() {
        // console.log(this.props.sid);
        let sid = this.props.gid;
        this.loadUser(sid);
    }

    /**
     * 读取用户列表
     *
     * @method loadUser
     *
     * @param  {number} sid [商品sid]
     */
    loadUser(sid){
        API.get('purchase/record', {
            sid: sid,
            start: this.state.start
        }, (data)=> {
            console.log(data);
            if (!!data.d) {
                this.setState({
                    'userList': data.d
                });
            }
            this.createList();
        });
    }

    createList(){
        console.log('sss'+typeof this.state.userList);

        let userListHeader = '';
        let userListBody = '';
        let lastTime = '';
        let userListStr = [];

        Array.from(this.state.userList).forEach((v, k)=>{
            console.log(v);

            let date = new Date(v.buy_time * 1000);
            let buyTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

            if (v.buy_date == lastTime) {
                userListStr.push(
                    <div className="users">
                        <img src={v.headimg} className="user-img"/>
                        <div className="user-info">

                        </div>
                    </div>
                );
                userListHeader += '';
                userListBody += '<div class="users"><img src=' + v.headimg + ' class="user-img"><div class="user-info">' +
                    '<p class="username">' + v.username + '</p><p class="addres">' + v.ip_address + '  IP: ' + v.ip + '</p>' +
                    '<p class="user-text">参与 <span class="user-join">' + v.buy + '</span> 人次 ' +
                    '<span class="join-time">' + buyTime + '</span></p></div></div>';
                userListStr = userListHeader + userListBody;
            } else {
                lastTime = v.buy_date;
                userListHeader += '<p class="list-title-time">' + v.buy_date + '</p>';
                userListBody += '<div class="users"><img src=' + v.headimg + ' class="user-img"><div class="user-info">' +
                    '<p class="username">' + v.username + '</p><p class="addres">' + v.ip_address + '  IP: ' + v.ip + '</p>' +
                    '<p class="user-text">参与 <span class="user-join">' + v.buy + '</span> 人次 ' +
                    '<span class="join-time">' + buyTime + '</span></p></div></div>';
                userListStr = userListHeader + userListBody;
            }
        });

        return userListStr;
    }

    render() {

        let joinLists = [];

        return (
            <ul className="good-join-list">
                <li className="user-list">
                    {joinLists}
                </li>
            </ul>
        );
    }
}

class GoodFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let bgStyle = {
            // backgroundImage: 'url(' + this.props.goodinfo.img + ')'
        }

        return (
            <div className="good-img" style={bgStyle}>
                <a href="#" className="good-img-title">点击查看图文详情</a>
            </div>
        );
    }
}
