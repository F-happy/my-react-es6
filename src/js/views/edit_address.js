/**
 * Created by fuhuixiang on 16-8-22.
 */
import React from 'react';
import {Link} from 'react-router';
import apiUtils from '../utils/api_utils';
import util from '../utils/utils_box';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class EditAddress extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
        let type = this.props.params.type;
    }

    render() {
        return (
            <article className="edit-address-list">
                <DBheader title="编辑地址" left={'goBack'}/>
                {/*<section className="edit-body">*/}
                    {/*<div className="edit-title">手机号码</div>*/}
                    {/*<input type="number" className="virtual-input" value={'18642636963'} placeholder="请输入手机号码"/>*/}
                {/*</section>*/}
                {/*<section className="edit-body">*/}
                    {/*<div className="edit-title">QQ号码</div>*/}
                    {/*<input type="number" className="virtual-input" placeholder="请输入QQ号码"/>*/}
                {/*</section>*/}

                <section className="edit-body">
                    <div className="edit-title">收货人</div>
                    <input type="text" className="virtual-input" placeholder="请输入收货人姓名"/>
                </section>
                <section className="edit-body">
                    <div className="edit-title">联系方式</div>
                    <input type="number" className="virtual-input" placeholder="请输入手机号码"/>
                </section>
                <section className="edit-body">
                    <div className="edit-title">地区</div>
                    <input type="text" className="virtual-input" placeholder="请选择"/>
                </section>
                <section className="edit-body">
                    <div className="edit-title">详细地址</div>
                    <input type="text" className="virtual-input" placeholder="请填写详细地址"/>
                </section>

                <p className="text">(充值号码填写用于手机话费、Q等虚拟商品中奖后的充值,最多添加1个)</p>
                <button className="save-btn">保存</button>
                <button className="delete-btn">删除</button>
            </article>
        )
    }
}
