/**
 * Created by fuhuixiang on 16-6-6.
 */
'use strict';
import React from 'react';
import Utils from '../utils/Utils';

export default class Rules extends React.Component {
    constructor(props) {
        super(props);
        this.isDuoBao = Utils.isDuoBao();
        this.calLink = 'http://tool.panxiecan.cn/';
        this.openLink = 'http://caipiao.163.com/t/award/cqssc/';
    }

    look(){
        if(this.isDuoBao){
            window.location = 'duobao://native/open?type=0&link=' + window.encodeURIComponent(this.openLink);
        } else {
            window.location = this.openLink;
        }
    }

    calculate(){
        if(this.isDuoBao){
            window.location = 'duobao://native/open?type=0&link=' + window.encodeURIComponent(this.calLink);
        } else {
            window.location = this.calLink;
        }
    }

    render() {
        document.title = '许愿规则介绍';
        return (
            <div className="rules-view">
                <header/>
                <section className="number-a"/>
                <section className="number-b">
                    <button onClick={this.look.bind(this)}>查看时时彩开奖></button>
                </section>
                <footer className="how">
                    <button onClick={this.calculate.bind(this)}>余数计算器></button>
                </footer>
            </div>
        )
    }
}
