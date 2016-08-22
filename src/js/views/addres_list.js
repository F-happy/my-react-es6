/**
 * Created by fuhuixiang on 16-8-22.
 */
import React from 'react';
import {Link, hashHistory} from 'react-router';
import apiUtil from '../utils/api_utils';
import util from '../utils/utils_box';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class AddressList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
    }

    goEditView() {
        hashHistory.push(`/edit_address/${'add'}`);
    }

    render() {
        return (
            <article className="address-list-view">
                <DBheader title="确认号码" left={'goBack'} right="add"/>
                <section className="address-reality">
                    <div className="address-header">
                        <div className="header-left console-color"><i>&#xe602;</i>收货地址<span
                            className="def-tag">默认</span></div>
                        <div className="header-right" onClick={this.goEditView.bind(this)}>编辑</div>
                    </div>
                    <div className="address-body">
                        <div className="box-left">
                            <p>收货人:</p><p>联系方式:</p><p>收货地址:</p>
                        </div>
                        <div className="user-address">
                            <p>付会翔</p><p>18642636963</p><p>广州大学城广东广州大学城广东广州大学城广东</p>
                        </div>
                    </div>
                </section>
                <section className="address-virtual">
                    <div className="address-header">
                        <div className="header-left main-color"><i>&#xe629;</i>充值号码</div>
                        <div className="header-right" onClick={this.goEditView.bind(this)}>编辑</div>
                    </div>
                    <div className="address-body">
                        <div className="box-left">
                            <p>手机号码:</p><p>QQ号码:</p>
                        </div>
                        <div className="user-address">
                            <p>18642636963</p><p>644612679</p>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}
