/**
 * Created by fuhuixiang on 16-7-21.
 */
'use strict';
import React from 'react';
import DBheader from '../components/header';
import DBFooter from '../components/footer';
import API from '../utils/API';

export default class Me extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="me-view">
                <DBheader title="我"/>
                <section className="user-info">
                    <div className="user-header">
                        <div className="user-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-content">
                            <div className="user-name">哈哈哈哈哈哈</div>
                            <div className="user-id">唯一ID: <span className="console-color">1000548</span></div>
                        </div>
                        <icon className="right-icon"></icon>
                    </div>
                    <div className="user-body">
                        <div className="user-redpack">
                            <icon className="redpack-icon"></icon>
                            <p className="user-font">我的红包</p>
                            <p className="text">3个可用</p>
                        </div>
                        <div className="line"></div>
                        <div className="user-money">
                            <icon className="money-icon"></icon>
                            <p className="user-font">许愿币充值</p>
                            <p className="text">余额:<span className="main-color">100</span></p>
                        </div>
                        <div className="line"></div>
                        <div className="user-luck-dou">
                            <icon className="luck-icon"></icon>
                            <p className="user-font">幸运豆</p>
                            <p className="text">1500</p>
                        </div>
                    </div>
                </section>
                <ul className="record-lists">
                    <li>
                        <icon className="record-icon"></icon>
                        <span className="list-content">许愿记录</span>
                        <icon className="right-icon"></icon>
                    </li>
                    <li>
                        <icon className="gift-list-icon"></icon>
                        <span className="list-content">中奖记录</span>
                        <icon className="right-icon"></icon>
                    </li>
                    <li>
                        <icon className="share-list-icon"></icon>
                        <span className="list-content">晒单记录</span>
                        <icon className="right-icon"></icon>
                    </li>
                </ul>
                <ul className="other-list">
                    <li>
                        <icon className="addr-list-icon"></icon>
                        <span className="list-content">我的收货地址</span>
                        <icon className="right-icon"></icon>
                    </li>
                    <li>
                        <icon className="code-list-icon"></icon>
                        <span className="list-content">二维码分享</span>
                        <icon className="right-icon"></icon>
                    </li>
                </ul>
                <DBFooter act="me"/>
            </div>
        )
    }
}
