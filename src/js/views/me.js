/**
 * Created by fuhuixiang on 16-7-21.
 */
'use strict';
import React from 'react';
import DBheader from '../components/header';
import DBFooter from '../components/footer';
import API from '../utils/API';

export default class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qcode: false,
            invite: false
        };
    }

    componentDidMount() {}

    handleInvitedHidden(msg){
        if (msg == 'hidden'){
            this.setState({invite: false})
        }
    }

    render() {
        return (
            <div className="me-view">
                <DBheader title="我"/>
                <UserInfo/>
                <RecordList/>
                <OtherList/>
                {this.state.qcode ? <CodeDigLog/> : ''}
                {this.state.invite ? <InvitedDigLog handleInvited={this.handleInvitedHidden.bind(this)}/> : ''}
                <DBFooter act="me"/>
            </div>
        )
    }
}

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="user-info">
                <div className="user-header">
                    <div className="user-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                    <div className="user-content">
                        <div className="user-name">哈哈哈哈哈哈</div>
                        <div className="user-id">唯一ID: <span className="console-color">1000548</span></div>
                    </div>
                    <i className="right-icon">&#xe607;</i>
                </div>
                <div className="user-body">
                    <div className="user-redpack">
                        <i className="redpack-icon"/>
                        <p className="user-font">我的红包</p>
                        <p className="text">3个可用</p>
                    </div>
                    <div className="line"></div>
                    <div className="user-money">
                        <i className="money-icon"/>
                        <p className="user-font">许愿币充值</p>
                        <p className="text">余额:<span className="main-color">100</span></p>
                    </div>
                    <div className="line"></div>
                    <div className="user-luck-dou">
                        <i className="luck-icon"/>
                        <p className="user-font">幸运豆</p>
                        <p className="text">1500</p>
                    </div>
                </div>
            </section>
        )
    }
}

class RecordList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul className="record-lists">
                <li>
                    <i className="me-icon">&#xe616;</i>
                    <span className="list-content">许愿记录</span>
                    <i className="right-icon">&#xe607;</i>
                </li>
                <li>
                    <i className="me-icon">&#xe612;</i>
                    <span className="list-content">中奖记录</span>
                    <i className="right-icon">&#xe607;</i>
                </li>
                <li>
                    <i className="me-icon">&#xe61d;</i>
                    <span className="list-content">晒单记录</span>
                    <i className="right-icon">&#xe607;</i>
                </li>
            </ul>
        )
    }
}

class OtherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul className="other-list">
                <li>
                    <i className="me-icon">&#xe614;</i>
                    <span className="list-content">我的收货地址</span>
                    <i className="right-icon">&#xe607;</i>
                </li>
                <li>
                    <i className="me-icon">&#xe60c;</i>
                    <span className="list-content">二维码分享</span>
                    <i className="right-icon">&#xe607;</i>
                </li>
            </ul>
        )
    }
}

class CodeDigLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <article className="dig-log">
                <section className="qcode-alert-box">
                    <i className="close-icon">&#xe601;</i>
                    <div className="qcode-title">分享许愿夺宝给更多好友</div>
                    <div className="qcode-share"></div>
                    <div className="code-footer">
                        <div className="footer-box">
                            <div className="wechat-icon-big"></div>
                            微信好友
                        </div>
                        <div className="footer-box">
                            <div className="friend-icon-big"></div>
                            朋友圈
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}

class InvitedDigLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        };
    }

    componentDidMount() {}

    hiddenBody(){
        this.props.handleInvited('hidden');
    }

    render (){
        return (
            <article className="dig-log">
                <section className="invited-alert-box">
                    <div className="invite-header"></div>
                    <div className="invite-input">
                        <input type="number" placeholder="请输入邀请码"/>
                    </div>
                    <div className="input-title">填写邀请码额外获得好友红包</div>
                    <div className="btn-box">
                        <button className="invite-none" onClick={this.hiddenBody.bind(this)}>无邀请码</button>
                        <button className="invite-ok">确认</button>
                    </div>
                </section>
            </article>
        )
    }
}
