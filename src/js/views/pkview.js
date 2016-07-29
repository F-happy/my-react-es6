/**
 * Created by fuhuixiang on 16-7-29.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';
import DBheader from '../components/header';
import API from '../utils/API';

export default class PkView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
    }

    render() {
        return (
            <article className="pk-view">
                <DBheader title="PK专区" goBack={true}/>
                <section className="top-banner">
                    <div className="banner-img"></div>
                    <div className="result">专区规则></div>
                </section>
                <ul className="tab">
                    <li className="active">两人PK</li>
                    <li>三人PK</li>
                    <li>五人PK</li>
                </ul>
                <section className="pk-good-lists">
                    <div className="goods">
                        <div className="good-img"
                             style={{backgroundImage: 'url(http://dummyimage.com/260x260/4A7BF7)'}}></div>
                        <div className="good-title">设计哈哈哈哈哈哈哈哈哈哈哈哈</div>
                        <div className="good-info">
                            <p className="progress">
                                <span className="new" style={{width: '66.6%'}}/>
                                <span className="tag" style={{left: `${(100 / 3)}%`}}/>
                                <span className="tag" style={{left: `${(100 / 3) * 2}%`}}/>
                            </p>
                            <p className="text-box">
                                <span>总需20</span>
                                <span className="right"><span className="main-color">1人</span>参与</span>
                            </p>
                            <button className="add-shop">&#xe622;</button>
                        </div>
                        <Link to={`/goodsinfo/${50}`} className="join-shop">剩余1名额</Link>
                    </div>
                </section>
                <footer className="pk-footer">暂无更多商品~</footer>
            </article>
        )
    }
}
