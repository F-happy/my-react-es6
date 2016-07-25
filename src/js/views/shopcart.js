/**
 * Created by fuhuixiang on 16-7-22.
 */
'use strict';

import React from 'react';
import DBheader from '../components/header';
import DBFooter from '../components/footer';

export default class ShopCart extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {}
    }

    componentDidMount() {
    }

    isNoneView() {
        let noneShopView = <section className="none-shop">
            <div className="none-cart"></div>
            <div className="none-title">购物车空空如也~</div>
            <button className="shop-btn">逛一逛</button>
        </section>;

        let youLikeView = <section className="you-like">
            <div className="like-title">
                <i className="you-love-icon"/>
                猜你喜欢
            </div>
            <div className="like-goods">
                <div className="like-good">
                    <div className="good-img"></div>
                    <div className="good-name">商品名称撒大声大声道大大的爱的傲世阿萨德啊</div>
                    <div className="progress">
                        <span className="progress-new" style={{width: (20 / 100) * 100 + '%'}}/>
                    </div>
                </div>
                <div className="like-good">
                    <div className="good-img"></div>
                    <div className="good-name">商品名称撒大声大声道大大的爱的傲世阿萨德啊</div>
                    <div className="progress">
                        <span className="progress-new" style={{width: (20 / 100) * 100 + '%'}}/>
                    </div>
                </div>
                <div className="like-good">
                    <div className="good-img"></div>
                    <div className="good-name">商品名称撒大声大声道大大的爱的傲世阿萨德啊</div>
                    <div className="progress">
                        <span className="progress-new" style={{width: (20 / 100) * 100 + '%'}}/>
                    </div>
                </div>
            </div>
        </section>;
    }

    render() {
        document.querySelector('html').style.background = '#eee';
        return (
            <div className="shop-cart-view">
                <DBheader title="购物车"/>
                <article className="shop-lists">
                    <section className="shop-good">
                        <div className="good-title">
                            <span className="text">(第100期)三星飒飒大达大厦的的爱的大大大</span>
                            <span className="good-del">删除</span>
                        </div>
                        <div className="good-body">
                            <div className="shop-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                            <div className="shop-info">
                                <div className="shop-info-title">
                                    <span className="title-text">总需4998人次</span>
                                    <span className="title-text">剩余 <span className="main-color">3</span> 人次</span>
                                </div>
                                <div className="shop-num">
                                    <button className="shop-minus-box">-</button>
                                    <div className="shop-input">
                                        <input type="number" value={10}/>
                                    </div>
                                    <button className="shop-add-box">+</button>
                                </div>
                                <div className="shop-message main-color">十元专区商品参与人次为10的倍数</div>
                            </div>
                            <button className="shop-join-btn">包尾</button>
                        </div>
                    </section>
                    <section className="shop-good">
                        <div className="good-title">
                            <span className="text">(第100期)三星飒飒大达大厦的的爱的大大大</span>
                            <span className="good-del">删除</span>
                        </div>
                        <div className="good-body">
                            <div className="shop-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                            <div className="shop-info">
                                <div className="shop-info-title">
                                    <span className="title-text">总需4998人次</span>
                                    <span className="title-text">剩余 <span className="main-color">3</span> 人次</span>
                                </div>
                                <div className="shop-num">
                                    <button className="shop-minus-box">-</button>
                                    <div className="shop-input">
                                        <input type="number"/>
                                    </div>
                                    <button className="shop-add-box">+</button>
                                </div>
                                <div>最新一期商品火热进行中</div>
                            </div>
                            <button className="shop-join-btn">包尾</button>
                        </div>
                    </section>
                </article>
                <article className="add-shop-banner">
                    <section className="shop-total">
                        <div>总计: 20 夺宝币</div>
                        <div className="shop-good-num">共五件商品</div>
                    </section>
                    <button className="go-shop">去结算></button>
                </article>
                <DBFooter act="list"/>
            </div>
        )
    }
}
