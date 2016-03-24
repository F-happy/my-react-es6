/**
 * Created by fuhuixiang on 16/3/23.
 */
'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';

import Loading from '../components/Loading';
import Header from '../components/Header';
import Tab from '../components/Tab';
import Top from '../components/Top';

import API from '../utils/APIUtils';

export default class DetailPages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            goodinfo: {}
        }
    }

    componentDidMount() {
        let sid = this.props.params.id;
        this.loadGoods(sid);
    }

    // 读取首页商品
    loadGoods(sid) {
        API.get('prize/info', {
            sid: sid
        }, (data)=> {
            console.log(data.d);
            this.setState({
                'goodinfo': data.d
            });
        });
    }

    render(){

        let right = {icon: 'icon-user', link: '/info'};
        return (
            <DocumentTitle title="零钱夺宝">
                <section className="main-panel">
                    <Loading ref="Loading"/>
                    <Header title="零钱夺宝" right={right}/>
                    <GoodImg goodinfo={this.state.goodinfo}/>
                    <GoodInfo />
                    <GoodOld/>
                    <GoodFooter/>
                </section>
            </DocumentTitle>
        );
    }
}

class GoodImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){

        let goodURL = '/detailinfo/' + this.props.goodinfo.gid;

        return (
            <Link to={goodURL}>
                <img className="good-img" src={this.props.goodinfo.icon}></img>
                <p className="good-img-title">点击查看图文详情</p>
            </Link>
        );
    }
}

class GoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1,
            goodTitle: ''
        }
    }

    componentDidMount(){
        this.setState({
            'status': this.props.goodinfo.status,
            'goodTitle': this.props.goodinfo.title
        });
    }

    render(){

        let labelState = '';
        let goodState = [];

        if (this.state.status == 0) {
            labelState = '已揭晓';
        } else if (this.state.status == 2) {
            labelState = '揭晓中';
        } else if (this.state.status == 1) {
            labelState = '进行中';
            goodState.push(
                <p className="progress">
                    <span className="progress-new"></span>
                </p>
            );
        }



        return (
            <div className="good-wrap" >
                <h2 className="good-title">
                    <span className="good-title-label">{labelState}</span>
                </h2>
                {goodState}
            </div>
        );
    }
}

class GoodOld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){

        let bgStyle = {
            // backgroundImage: 'url(' + this.props.goodinfo.img + ')'
        }

        return (
            <div className="good-img" style={bgStyle}></div>
        );
    }
}

class GoodFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){

        let bgStyle = {
            // backgroundImage: 'url(' + this.props.goodinfo.img + ')'
        }

        return (
            <div className="good-img" style={bgStyle}>
                <a href="#" className="good-img-title">点击查看图文详情</a>
            </div>
        );
    }
}
