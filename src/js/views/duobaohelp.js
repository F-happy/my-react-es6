/**
 * Created by fuhuixiang on 16/6/6.
 */
'use strict';
import React from 'react';
import utils from '../utils/Utils';
import AddQQ from '../utils/addQQ';

export default class duoBaoHelp extends React.Component {
    constructor(props) {
        super(props);
        this.isDuoBao = utils.isDuoBao();
        this.driver = utils.isDriver();
    }

    addqq(){
        AddQQ.addqq();
    }

    render() {
        document.title = '联系客服';
        document.body.className = 'duobao-help-back';
        return (
            <div className="duobao-help-view">
                <article className="context">
                    <header/>
                    <section>
                        <h4 className="head-title">Q:中奖了，什么时候发货？</h4>
                        <p>中奖后请确认收货地址（我-->中奖记录-->点击确认收货地址），我们会在您确认地址后的<span className="light">5个工作日内</span>发货。发货会有短信通知，请您留意。</p>
                    </section>
                    <section>
                        <h4 className="head-title">Q:确认地址后5个工作日还没有收到短信通知？</h4>
                        <p>某些奖品若出现库存不足等问题，发货时间会有所延迟。超过<span className="light">7个工作日</span>无货会有客服联系您处理，请您留意电话通知~</p>
                    </section>
                    <section>
                        <h4 className="head-title">Q:收到发货短信后怎么查物流？</h4>
                        <p>我-->中奖记录-->查看宝贝-->物流追踪</p>
                        <p>可以查看<span className="light">发货快递公司</span>和<span className="light">快递单号</span></p>
                    </section>
                    <section>
                        <h4 className="head-title">Q:收到发货短信后查不到物流？</h4>
                        <p>物流信息的录入与发货时间存在一定的时滞，一般在<span className="light">2个工作日</span>内物流会更新，请耐心等待</p>
                    </section>
                    <section>
                        <h4 className="head-title">Q:Q币和话费如何充值？</h4>
                        <p>我-->中奖记录-->确认地址-->填写想要充值的账号</p>
                        <p className="light">注：Q币和话费为自动充值，一旦确认地址无法修改，请谨慎填写</p>
                    </section>
                    <section>
                        <h4 className="head-title">Q:中了京东卡／天猫卡怎么用？</h4>
                        <p>（1）我-->中奖记录-->确认地址-->填写想要充值的手机账号</p>
                        <p>（2）在首页滚动页输入注册账号和密码自助查询卡密</p>
                        <p className="light">注：仅支持注册账号与充值号码一致的卡密查询，若不一致请用充值号码注册许愿夺宝后再进行查询</p>
                    </section>
                    <section>
                        <h4 className="head-title">Q:发票问题</h4>
                        <p>许愿夺宝是用户购买电商优惠券的商业促销活动，因此用户获得的宝贝，<span className="light">许愿夺宝不提供相关发票</span>。</p>
                    </section>
                    <section>
                        <h4 className="head-title">Q:怎么联系许愿夺宝客服？</h4>
                        <p>可加许愿夺宝官方群84502921联系客服</p>
                        <p>或直接加官方客服芯芯的QQ353803582</p>
                        <p>客服工作时间为：<span className="light">09:00-18:00</span>，请在客服工作时间联系客服，感谢您的配合。如客服暂时未在线，请直接留言，客服上线后会回复您。</p>
                    </section>
                </article>
                <section className="btn" onClick={this.addqq.bind(this)}/>
            </div>
        )
    }
}
