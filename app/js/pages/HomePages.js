/**
 * Created by fuhuixiang on 16/3/18.
 */
'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';

import ReactSwipe from '../components/Swipe';
import Header from '../components/Header';
import Tab from '../components/Tab';
import Top from '../components/Top';
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
            goodLists: [],
            currentSid: 0,
            bannersLists: [],
            user: {},
            loadNum: 0,
            loadStatus: 0, // 0 可以滚动，1正在加载数据　2 没有下一页数据
            loadText: '点击加载更多'
        };
        document.body.classList.add('home-page');
    }

    componentDidMount() {
        this.loadGoods();
        this.loadBanners();
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
        API.get('goods/list', {
            start: this.state.currentSid
        }, (data)=> {
            this.setState({
                'currentSid': (data.d[data.d.length-1]).sid,
                'goodLists': data.d
            });
        });

        // NProgress.start();
    }

    loadBanners(){
        API.get('goods/banners', '', (data)=> {
            console.log(data.d);
            this.setState({
                'bannersLists': data.d
            });
        });
    }

    addGoods(){

    }

    render() {
        var right = {icon: 'icon-user', link: '/info'};

        return (
            <DocumentTitle title="零钱夺宝">
                <section className="main-panel">
                    <Loading ref="Loading"/>
                    <Header title="零钱夺宝" right={right}/>
                    <Tab tabs={this.state.tabs}></Tab>
                    <Banner bannerLists={this.state.bannersLists}></Banner>
                    <GoodList goodLists={this.state.goodLists}></GoodList>
                    <Top/>
                    <p onClick={this.addGoods.bind(this)}>点击加载更多</p>
                </section>
            </DocumentTitle>
        );
    }
}

// 商品列表
class GoodList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let goodList = [];


        this.props.goodLists.forEach((value, index)=> {
            goodList.push(
                <section className="item">
                    <Link to={'/detail/' + value.sid}>
                        <img className="item-icon" src={value.icon} alt={value.description}/>
                        <h2 className="item-title">{value.title}</h2>
                        <div className="item-content">
                            <p className="progress">
                                <span className="progress-new"
                                      style={{width: (value.purchase / value.total)*100+'%'}}></span>
                            </p>
                            <p className="item-text-left">总需{value.total}</p>
                            <p className="item-text-right">剩余
                                <span className="color-active">{value.total - value.purchase}</span>
                            </p>
                        </div>
                    </Link>
                    <icon className="icon-uni8D2D"></icon>
                </section>
            );
        });

        return (
            <article>
                {goodList}
            </article>
        );
    }
}

// 轮播banner
class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let bannerList = [];

        this.props.bannerLists.forEach((value, index)=> {
            bannerList.push(
                <a href={value.url}>
                    <img className="banner-img" src={value.img}></img>
                </a>
            );
        });

        return (
            <ReactSwipe imgLists={bannerList}></ReactSwipe>
        );
    }
}
