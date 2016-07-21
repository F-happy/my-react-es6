/**
 * Created by fuhuixiang on 16-6-27.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';
import API from '../utils/API';
import DBheader from '../components/header';
import DBFooter from '../components/footer';
import ReactSwipe from '../components/Swipe';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodLists: [],
            bannersLists: []
        };
    }

    componentDidMount() {
        this.loadBanners();
        this.loadGoodInfo();
    }

    loadBanners() {
        API.get('banner', '', (data)=> {
            this.setState({
                'bannersLists': data.img_list
            });
        });
    }

    loadGoodInfo(){
        API.get('goods', '', (data)=> {
            this.setState({
                'goodLists': data.good_lists
            });
        });
    }

    render() {
        return (
            <div>
                <DBheader/>
                <Banner bannerLists={this.state.bannersLists}></Banner>
                <section className="controller-list">
                    <div className="box">
                        <div className="controller-img pk-img"></div>
                        <p className="controller-title">PK专区</p>
                    </div>
                    <Link to="/csc" className="box">
                        <div className="controller-img about-img"></div>
                        <p className="controller-title">客服中心</p>
                    </Link>
                    <div className="box">
                        <div className="controller-img formula-img"></div>
                        <p className="controller-title">公式详解</p>
                    </div>
                    <div className="box">
                        <div className="controller-img service-img"></div>
                        <p className="controller-title">运营活动</p>
                    </div>
                </section>
                <ul className="rank-controller">
                    <li className="rank-result active">最热</li>
                    <li className="rank-result">最快</li>
                    <li className="rank-result">最新</li>
                    <li className="rank-result">高价</li>
                    <li className="rank-result">低价</li>
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
                    <img className="banner-img" src={value.img}></img>
                </Link>
            );
        });

        return (
            <ReactSwipe imgLists={bannerList}></ReactSwipe>
        );
    }
}

class GoodList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let _goodList = [];
        this.props.goodLists.forEach((value, index)=> {
            _goodList.push(
                <section className="good" key={index}>
                    <Link to={'/detailinfo/' + value.sid}>
                        <img className="good-icon" src={value.icon} alt={value.description}/>
                        <h2 className="good-title">{value.title}</h2>
                        <div className="good-content">
                            <p className="good-total">总需{value.total}</p>
                            <p className="progress">
                                <span className="progress-new" style={{width: (value.remain / value.total)*100+'%'}}></span>
                            </p>
                            <p className="good-remain">剩余
                                <span className="color-active">{value.remain}</span>
                            </p>
                        </div>
                    </Link>
                    <icon className="icon-add-shop"></icon>
                </section>
            );
        });
        return (
            <article className="good-lists">
                {_goodList}
            </article>
        );
    }
}
