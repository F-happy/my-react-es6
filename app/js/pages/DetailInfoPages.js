/**
 * Created by fuhuixiang on 16/3/24.
 */
'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';

import Loading from '../components/Loading';
import Header from '../components/Header';

import API from '../utils/APIUtils';

export default class DetailInfoPages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            goodinfo: {}
        }
    }

    componentDidMount() {
        let gid = this.props.params.id;
        this.loadGoods(gid);
    }

    // 读取首页商品
    loadGoods(gid) {
        API.get('goods/detail', {
            gid: gid
        }, (data)=> {
            this.setState({
                'goodinfo': data.d.detail
            });
        });
    }

    render(){

        let right = {icon: 'icon-user', link: '/info'};
        return (
            <DocumentTitle title="零钱夺宝">
                <section className="main-panel">
                    <Loading ref="Loading"/>
                    <Header title="奖品详情" right={right}/>
                    <div className="detail-info" dangerouslySetInnerHTML={{__html: this.state.goodinfo}} ></div>
                </section>
            </DocumentTitle>
        );
    }
}
