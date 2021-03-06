/**
 * Created by fuhuixiang on 16-7-20.
 */
'use strict';
import React from 'react';
import DBheader from '../components/header';
import DBFooter from '../components/footer';
import apiUtils from '../utils/api_utils';
import countdown from '../utils/countdown';

export default class Published extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domList: []
        };
        this.times = 0;
        this.timeLock = true;
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
        apiUtils.get('openlist', '', (data)=> {
            this.createDom(data.new_lists);
        });
    }

    componentDidUpdate(){
        if (this.timeLock){
            this.timeLock = false;
            countdown.timeAnimation(this.times, ()=>{
                console.log('over');
            });
        }
    }

    createDom(list) {
        let _domList = [];
        list.forEach((v, index)=> {
            if (v.type == 1) {
                this.times = v.time;
                _domList.push(
                    <section className="publish-body" key={index}>
                        <img className="good-img" src={v.icon}/>
                        <div className="good-info">
                            <div className="good-title">{v.title}</div>
                            <div className="good-money">商品价值: ￥{v.total}</div>
                            <div className="times">
                                <i className="time-icon">&#xe620;</i>
                                <span className="time-text">正在揭晓</span><span className="time-now" id="time1">{v.time}</span>
                            </div>
                        </div>
                    </section>
                );
            } else if (v.type == 2) {
                _domList.push(
                    <section className="publish-body" key={index}>
                        <img className="good-img" src={v.icon}/>
                        <div className="good-info">
                            <div className="good-title">{v.title}</div>
                            <div className="good-money">商品价值: ￥{v.total}</div>
                            <div className="times-error">福彩故障,距离开奖还有2小时。</div>
                        </div>
                    </section>
                );
            } else if (v.type == 3) {
                _domList.push(
                    <section className="publish-body" key={index}>
                        <img className="good-img" src={v.icon}/>
                        <div className="user-info">
                            <div className="user-name">获奖者: <span className="console-color">{v.user_name}</span></div>
                            <div className="good-money">商品价值: ￥{v.total}</div>
                            <div className="user-join">本期夺宝: <span className="console-color">{v.remain}人次</span></div>
                            <div className="luck-num">幸运号码: <span className="main-color">{v.luck_code}</span></div>
                            <div className="join-time">揭晓时间: {v.time}</div>
                            <div className="user-icon"><img src={v.user_icon}/></div>
                        </div>
                    </section>
                );
            }
            this.setState({domList: _domList});
        });
    }

    render() {
        return (
            <div className="publish-view">
                <DBheader title="最新揭晓"/>
                <article className="publish-lists">
                    {this.state.domList}
                </article>
                <DBFooter act="publish"/>
            </div>
        )
    }
}
