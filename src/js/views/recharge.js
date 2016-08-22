/**
 * Created by fuhuixiang on 16-8-22.
 */
import React from 'react';
import {Link} from 'react-router';
import API from '../utils/API';
import util from '../utils/Utils';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class ReaCharge extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            moneyBox: [10, 20, 50, 100, 200, '其他金额'],
            active: 0
        }
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
    }

    handleSwitch(index) {
        this.setState({active: index});
    }

    render(){
        return (
            <article className="recharge-view">
                <DBheader title="充值" left={'goBack'} right="list"/>
                <section className="recharge-text">
                    充值金额用于购买许愿夺宝提供的电商优惠券(1元等于1张优惠卷),同时获得相应个数的许愿币,可以用于许愿夺宝,充值的款项将无法退回。
                </section>
                <section className="recharge-money">
                    <div className="money-header">选择充值金额</div>
                    <ul className="change-controller">
                        {
                            this.state.moneyBox.map((v, index)=> {
                                let _li = <li className={`change-result${(this.state.active == index) ? ' active' : ''}`}
                                             key={index}
                                             onClick={this.handleSwitch.bind(this, index)}>{v}</li>;
                                if (index == 5){
                                    _li = <li className={`change-result${(this.state.active == index) ? ' active' : ''}`}
                                              key={index}
                                              onClick={this.handleSwitch.bind(this, index)}>
                                        <input type="number" placeholder={v}/></li>;
                                }
                                return _li
                            })
                        }
                    </ul>
                </section>
                <section className="pay-method">
                    <div className="method-title">其他支付方式</div>
                    <ul className="method-lists">
                        <li>
                            <div className="pay-left-box">
                                <img className="pay-logo" src="http://dummyimage.com/200x200/4A7BF7"/>
                                <div className="method-text">
                                    <div className="method-name">支付宝</div>
                                    <div className="method-info">推荐拥有支付宝的用户使用</div>
                                </div>
                            </div>
                            <div className="radio-box">
                                <div className="radio"></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <footer className="pay-go">
                    <button className="pay-btn">马上充值</button>
                </footer>
            </article>
        )
    }
}
