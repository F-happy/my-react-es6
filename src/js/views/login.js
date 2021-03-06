/**
 * Created by fuhuixiang on 16-8-22.
 */
import React from 'react';
import {Link, hashHistory} from 'react-router';
import apiUtils from '../utils/api_utils';
import util from '../utils/utils_box';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['登录', '注册'],
            active: 0,
            registerView: <section className="register-box">
                <div className="user-input-box">
                    <div className="login-title">手机号</div>
                    <input type="text" className="login-input" placeholder="请输入手机号"/>
                    <div className="push-code">获取验证码</div>
                </div>
                <div className="user-input-box">
                    <div className="login-title">密码</div>
                    <input type="password" className="login-input" placeholder="请输入密码"/>
                </div>
                <div className="user-input-box">
                    <div className="login-title">验证码</div>
                    <input type="password" className="login-input" placeholder="请输入验证码"/>
                </div>
                <div className="read-server">
                    <div className="ok-box">&#xe600;</div>
                    <p>已阅读并同意《许愿夺宝服务协议》</p>
                </div>
                <button className="login-btn">注册</button>
            </section>,
            loginView: <section className="login-box">
                <div className="user-input-box">
                    <div className="login-title">账号</div>
                    <input type="text" className="login-input" placeholder="请输入账号"/>
                </div>
                <div className="user-input-box">
                    <div className="login-title">密码</div>
                    <input type="password" className="login-input" placeholder="请输入密码"/>
                </div>
                <button className="login-btn">登录</button>
                <p className="forget-password">忘记密码?</p>
            </section>
        }
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
    }

    handleSwitch(index) {
        this.setState({active: index});
    }

    render() {
        return (
            <article className="login-view">
                <DBheader title="注册/登录" left={'goBack'}/>
                <ul className="login-controller">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`login-result${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
                {this.state.active == 0 ? this.state.loginView : this.state.registerView}
            </article>
        )
    }
}
