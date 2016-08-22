/**
 * Created by fuhuixiang on 16-8-8.
 */
'use strict';

import React from 'react';
import DBheader from '../components/header';
import apiUtils from '../utils/api_utils';
import util from '../utils/utils_box';

export default class RedPack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            items: ['未使用', '已使用/过期'],
            redList: [],
            redListOld: [],
            page: 0
        };
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
        // this.loadRedPack(this.state.page):
    }

    /**
     * 加载红包
     * @param page
     */
    loadRedPack(page) {
        apiUtils.get('user/redpack/list', {limit: 10, start_id: page}, (data)=> {
            let redList = [], oldRedList = [];
            data.d.forEach((v)=> {
                if (v.enable == 1) {
                    redList.push(
                        <div className="red-pack" key={v.id}>
                            <div className="red-left-box">
                                <div className="money"><span>¥</span><span className="money-num">{v.price}</span></div>
                                <div className="line">·</div>
                                <div className="result">满{v.restrict_money}元可用</div>
                            </div>
                            <div className="red-right-box">
                                <h3 className={`red-title${(v.is_valid == 1) ? ' has' : ' not'}`}>{v.title}</h3>
                                <div className="text">{v.description}</div>
                                <div className="time-text">生效时间: {util.formatDate(v.start_time)}</div>
                                <div className="time-text">截止时间: {util.formatDate(v.expire_time)}</div>
                            </div>
                            <i className="right-icon">&#xe607;</i>
                        </div>
                    );
                } else {
                    oldRedList.push(
                        <div className="red-pack none-view" key={v.id}>
                            <div className="red-left-box none-view">
                                <div className="money"><span>¥</span><span className="money-num">{v.price}</span></div>
                                <div className="line">·</div>
                                <div className="result">满{v.restrict_money}元可用</div>
                            </div>
                            <div className="red-right-box">
                                <h3 className={`red-title${(v.is_valid == 1) ? ' has' : ' not'}`}>{v.title}</h3>
                                <div className="text">{v.description}</div>
                                <div className="time-text">生效时间: {util.formatDate(v.start_time)}</div>
                                <div className="time-text">截止时间: {util.formatDate(v.expire_time)}</div>
                            </div>
                            <i className="right-icon">&#xe607;</i>
                        </div>
                    );
                }
            });
        });
    }

    handleSwitch(index) {
        this.setState({active: index});
    }

    render() {
        let viewList = [],
            noneView = <section className="none-box">
                <div className="none-icon">&#xe625;</div>
                <h3 className="none-title">没有可使用的红包</h3>
            </section>;
        if (this.state.active == 0) {
            viewList = (this.state.redList.length > 0) ? this.state.redList : noneView;
        } else {
            viewList = (this.state.redListOld.length > 0) ? this.state.redListOld : noneView;
        }
        return (
            <article className="red-pack-view">
                <DBheader title="我的红包" left={'goBack'}/>
                <ul className="red-pack-controller">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`red-pack-result${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
                <section className="red-pack-lists">
                    {viewList}
                </section>
            </article>
        );
    }
}
