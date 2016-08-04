/**
 * Created by fuhuixiang on 16-6-27.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';
import API from '../utils/API';
import util from '../utils/Utils';
import DBheader from '../components/header';
import DBFooter from '../components/footer';
import ReactSwipe from '../components/swipe';
import toast from '../components/toast';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodLists: [],
            bannersLists: [],
            active: 0,
            items: ['最热', '最快', '最新', '高价', '低价']
        };
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#fff';
        this.loadBanners();
        this.loadGoodInfo(this.state.active);
    }

    loadBanners() {
        API.get('banner', '', (data)=> {
            this.setState({
                'bannersLists': data.img_list
            });
        });
    }

    loadGoodInfo(type) {
        API.get('goods', {type: type}, (data)=> {
            this.setState({
                'goodLists': data.good_lists
            });
        });
    }

    handleSwitch(index) {
        this.setState({active: index});
        this.loadGoodInfo(this.state.active);
    }

    render() {
        return (
            <div className="index-view">
                <DBheader/>
                <Banner bannerLists={this.state.bannersLists}/>
                <section className="controller-list">
                    <Link to="/pkview" className="box">
                        <div className="controller-img pk-img"></div>
                        <p className="controller-title">PK专区</p>
                    </Link>
                    <Link to="/csc" className="box">
                        <div className="controller-img about-img"></div>
                        <p className="controller-title">客服中心</p>
                    </Link>
                    <Link to="/iframe/helpframe" className="box">
                        <div className="controller-img formula-img"></div>
                        <p className="controller-title">公式详解</p>
                    </Link>
                    <div className="box">
                        <div className="controller-img service-img"></div>
                        <p className="controller-title">运营活动</p>
                    </div>
                </section>
                <ul className="rank-controller">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`rank-result${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
                <GoodList goodLists={this.state.goodLists}/>
                <DBFooter/>
            </div>
        )
    }
}

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let bannerList = [];
        this.props.bannerLists.forEach((value, index)=> {
            bannerList.push(
                <Link key={index} to={'/detailinfo/' + value.url}>
                    <img className="banner-img" src={value.img}/>
                </Link>
            );
        });
        return (
            <ReactSwipe imgLists={bannerList}/>
        );
    }
}

class GoodList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAddShopCart(sid) {
        if (util.addShopCart(sid, 5)) {
            toast.print('添加购物车成功!');
        } else {
            toast.print('添加购物车失败!');
        }
    }

    render() {
        let _goodList = [];
        this.props.goodLists.forEach((value, index)=> {
            _goodList.push(
                <section className="good" key={index}>
                    <Link to={'/goodsinfo/' + value.sid}>
                        <img className="good-icon" src={value.icon} alt={value.description}/>
                        <h2 className="good-title">{value.title}</h2>
                        <div className="good-content">
                            <p className="good-total">总需{value.total}</p>
                            <p className="progress">
                                <span className="progress-new"
                                      style={{width: (value.remain / value.total) * 100 + '%'}}/>
                            </p>
                            <p className="good-remain">剩余
                                <span className="color-active">{value.remain}</span>
                            </p>
                        </div>
                    </Link>
                    <button className="icon-add-shop" onClick={this.handleAddShopCart.bind(this, value.sid)}>&#xe622;</button>
                </section>
            )
        });
        return (
            <article className="good-lists">
                {_goodList}
            </article>
        );
    }
}
