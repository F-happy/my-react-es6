/**
 * Created by fuhuixiang on 16/3/18.
 */
'use strict';

import React from 'react';
// import {render} from 'react-dom';
import DocumentTitle from 'react-document-title';
import Header from '../components/Header';
import Tab from '../components/Tab';
import Loading from '../components/Loading';
import NProgress from '../utils/nprogress';

import API from '../utils/APIUtils';

export default class HomePages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {name: '首页', link: 'Home', active: true},
                {name: '揭晓', link: 'Publish', active: false}
            ],
            onSales: [],
            currentSid: 0,
            banners: [],
            user: {},
            loadNum: 0,
            loadStatus: 0, // 0 可以滚动，1正在加载数据　2 没有下一页数据
            loadText: '点击加载更多'
        };
        document.body.classList.add('home-page');
    }

    componentDidMount() {
        // this.loadGoods();
        // this.listenTo(MainStore, function (err, result) {
        //     if (!err) {
        //         if (result['action'] == 'clickBanner') { // 处理banner点击
        //             console.log(result);
        //             this.transitionTo('Detail', {id: result['menu']['sid']})
        //         }
        //     }
        // });
    }

    // 读取首页商品
    loadGoods() {
        let loadImg = this.refs.Loading;
        let loadNum = this.state.loadNum;

        console.log(API.getRequest('name'));

        API.get('goods/list', (data)=>{
            console.log(data);
        });

        NProgress.start();
    }

    render() {
        var right = {icon: 'icon-user', link: '/info'};
        return (
            <DocumentTitle title="零钱夺宝">
                <section className="index-panel">
                    <Loading ref="Loading"/>
                    <Header title="零钱夺宝" right={right}/>
                    <Tab tabs={this.state.tabs}></Tab>
                    <button onClick={this.loadGoods.bind(this)}>点我测试</button>
                </section>
            </DocumentTitle>
        );
    }
}
