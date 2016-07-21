/**
 * Created by fuhuixiang on 16-6-6.
 */
'use strict';
import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        document.title = '许愿夺宝帮助';
        return (
            <div className="setting-about-view">
                <header>
                    <div className="header-img"></div>
                    <p className="header-text">
                        许愿夺宝平台上提供各种奖品每个奖品分配对应数量的许愿号码，每个号码价值1个许愿币，当一件奖品所有号码售出后，
                        根据即定的规则计算出一个幸运号码，持有该幸运号码的用户，直接获得该奖品。
                    </p>
                </header>
                <section className="setting-about-title">
                    <div className="title-warp">
                        <div className="title-img pic1"></div>
                        <div className="title-text">公平公正</div>
                    </div>
                    <div className="title-warp">
                        <div className="title-img pic2"></div>
                        <div className="title-text">正品保证</div>
                    </div>
                    <div className="title-warp">
                        <div className="title-img pic3"></div>
                        <div className="title-text">全国包邮</div>
                    </div>
                </section>
                <section className="down">
                    <div className="down-title">下载许愿</div>
                    <div className="down-img"></div>
                </section>
                <section className="about">
                    <div className="about-title">关于我们</div>
                    <div className="about-me">新浪微博:@许愿夺宝</div>
                    <div className="about-me">百度贴吧:许愿夺宝</div>
                    <div className="about-me">微信公众号:许愿夺宝</div>
                </section>
            </div>
        )
    }
}
