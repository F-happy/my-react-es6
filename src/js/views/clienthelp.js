/**
 * Created by fuhuixiang on 16-6-7.
 */
'use strict';
import React from 'react';

export default class ClientHelp extends React.Component {
    constructor(props) {
        super(props);
    }

    actTop(e) {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        if (e.target.id != 'help') {
            document.querySelector('.one').style.display = 'block';
            document.querySelector('.two').style.display = 'none';
        } else {
            document.querySelector('.two').style.display = 'block';
            document.querySelector('.one').style.display = 'none';
        }
    }

    changeBody(e) {
        if (e.target.nodeName == 'H2') {
            let next  = e.target.parentNode.children[1],
                texts = document.querySelectorAll('.text'),
                pre   = document.querySelector('.pre-rotating');
            if (next.style.display == 'block') {
                next.style.display = 'none';
                e.target.children[0].className = 'pre';
            } else {
                for (let i = 0; i < texts.length; i++) {
                    texts[i].style.display = 'none';
                }
                if (!!pre) {
                    pre.className = 'pre';
                }
                next.style.display = 'block';
                e.target.children[0].className = 'pre-rotating';
            }
        }

        if (e.target.nodeName == 'SPAN') {
            let next  = e.target.parentNode.parentNode.children[1],
                texts = document.querySelectorAll('.text'),
                pre   = document.querySelector('.pre-rotating');
            if (next.style.display == 'block') {
                next.style.display = 'none';
                e.target.className = 'pre';
            } else {
                for (let i = 0; i < texts.length; i++) {
                    texts[i].style.display = 'none';
                }
                if (!!pre) {
                    pre.className = 'pre';
                }
                next.style.display = 'block';
                e.target.className = 'pre-rotating';
            }
        }
    }

    render() {
        document.title = '许愿夺宝帮助';
        document.body.style.background = '#f2f1f3';
        return (
            <div className="client-help-view">
                <header>
                    <div className="top active" onTouchStart={this.actTop.bind(this)}>消费者保障说明</div>
                    <div id="help" className="top" onTouchStart={this.actTop.bind(this)}>了解帮助</div>
                </header>
                <article onTouchStart={this.changeBody.bind(this)}>
                    <article className="one">
                        <section>
                            <h2>公平保障<span className="pre"/></h2>
                            <div className="text">
                                <p>许愿夺宝作为一个平台，保证所有参与夺宝的用户行为，都享受同样的权利与义务。</p>
                            </div>
                        </section>
                        <section>
                            <h2>公正保障<span className="pre"/></h2>
                            <div className="text">
                                <p>引进第三方数据，计算出来的幸运号码完全是随机的，保证开奖结果的随机性，保证绝对公正性。
                                    计算公式为：本期中奖号=（50个时间求和+老时时彩开奖号码）%该商品总需人次+原始数10000001</p>
                                <p>- 奖品的最后一个号码分配完毕后，将公示该分配时间点前本站全部奖品的最后50个参与时间；</p>
                                <p>- 将这50个时间的数值进行求和（得出数值A）（每个时间按时、分、秒、毫秒的顺序组合，如20:15:25.362则为201525362）；</p>
                                <p>- 为保证公平公正公开，系统还会等待一小段时间，取最近下一期中国福利彩票“老时时彩”的开奖结果（一个五位数值B）；</p>
                                <p>- （数值A+数值B）除以该奖品总需人次得到的余数 + 原始数 10000001，得到最终幸运号码，拥有该幸运号码者，直接获得该奖品。</p>
                                <p>注：最后一个号码认购时间距离“老时时彩”最近下一期开奖大于24小时，默认“老时时彩”开奖结果为00000；如遇福彩中心通讯故障，
                                    无法获取“老时时彩”开奖结果，最后一个号码分配时间距离故障时间大于24小时，亦默认“老时时彩”开奖结果为00000。</p>
                            </div>
                        </section>
                        <section>
                            <h2>公开保障<span className="pre"/></h2>
                            <div className="text">
                                <p>许愿夺宝使用过程是完全透明的，您可以随时查看每个奖品的参与人数、参与次数、参与名单及中奖信息等记录。引进第三方数据，
                                    计算出来的幸运号码完全是随机的，保证开奖结果的随机性，保证绝对透明性。无任何暗箱操作。有任何疑问都联系客服。</p>
                            </div>
                        </section>
                    </article>
                    <article className="two">
                        <section>
                            <h2>了解许愿夺宝<span className="pre"/></h2>
                            <div className="text">
                                <p>许愿夺宝以“众筹”为概念的购物App，采用全新的众筹购物方式，打造最时尚、最个性的消费模式和购物体验。</p>
                                <p>许愿夺宝把每件商品平分成若干“等份”出售，每份1元，当一件商品所有“等份”售出后，将根据老时时彩的开奖数据并配合透明、
                                    固定的计算规则计算出一名幸运者的许愿号码，该幸运者即可获得此商品。</p>
                                <p>许愿夺宝采用第三方数据，投入巨资，力求打造行业内最透明最公开的众筹购物APP。许愿夺宝，真诚你看得见！</p>
                            </div>
                        </section>
                        <section>
                            <h2>夺宝规则<span className="pre"/></h2>
                            <div className="text">
                                <p>一个商品M元，则有M个许愿号，许愿号随机分配给用户。用户1元即可获得1个许愿号，同个商品同个期数，用户购买N元，即获得N个许愿号。</p>
                                <p>计算公式为：本期中奖号=（50个时间求和+老时时彩开奖号码）%该商品总需人次+原始数10000001</p>
                                <p>- 奖品的最后一个号码分配完毕后，将公示该分配时间点前本站全部奖品的最后50个参与时间；</p>
                                <p>- 将这50个时间的数值进行求和（得出数值A）（每个时间按时、分、秒、毫秒的顺序组合，如20:15:25.362则为201525362）；</p>
                                <p>- 为保证公平公正公开，系统还会等待一小段时间，取最近下一期中国福利彩票“老时时彩”的开奖结果（一个五位数值B）；</p>
                                <p>- （数值A+数值B）除以该奖品总需人次得到的余数 + 原始数 10000001，得到最终幸运号码，拥有该幸运号码者，直接获得该奖品。</p>
                                <p>注：最后一个号码认购时间距离“老时时彩”最近下一期开奖大于24小时，默认“老时时彩”开奖结果为00000；如遇福彩中心通讯故障，
                                    无法获取“老时时彩”开奖结果，最后一个号码分配时间距离故障时间大于24小时，亦默认“老时时彩”开奖结果为00000。</p>
                                <p>关于老时时彩</p>
                                <p>1.“老时时彩”是由中国福彩中心发行的一种彩票，许愿夺宝仅取其结果作为抗干扰数据源，以示公平公正公开，和“老时时彩”本身没有任何关系；</p>
                                <p>2．“老时时彩”每天10:00-22:00-02:00进行开奖，白天72期，10分钟开奖，夜间48期，5分钟开奖，停开时间以福彩中心公布信息为准；</p>
                                <p>3．了解更多“老时时彩”信息，可自行至彩点查询。</p>
                            </div>
                        </section>
                        <section>
                            <h2>使用流程<span className="pre"/></h2>
                            <div className="text">
                                <p>1、挑选商品。在“许愿夺宝”内浏览挑选心意商品，挑选完成后点击“立即参与”。</p>
                                <p>2、在线支付。通过支付宝、微信支付等在线支付方式进行，支付1元即购买1人次，获得1个“许愿号码”。
                                    多次购买或者一次购买多份即可获得多个“许愿号码”。</p>
                                <p>3、揭晓获奖。当一件商品达到总参与人数，即抽出一名商品获奖者。许愿夺宝会通过推送消息通知您领取商品。</p>
                                <p>4、晒单分享。晒出您收到的商品实物图片甚至您的靓照，说出您的夺宝心得，让大家一起分享您的快乐。在您收到商品后，
                                    您只需登录App完成晒单，您的晒单即可出现在许愿夺宝的“晒单”区，让大家一起分享你的喜悦。</p>
                            </div>
                        </section>
                        <section>
                            <h2>常见问题<span className="pre"/></h2>
                            <div className="text">
                                <p>1、幸运号码的计算规则是怎么样的，结果可信吗？</p>
                                <p>本期中奖号=（50个时间求和+老时时彩开奖号码）%该商品总需人次+原始数10000001
                                    由于使用了“老时时彩”开奖结果作为参数，因此幸运号码肯定是未知的；您可以绝对相信计算结果真实、可信。</p>
                                <p>2、为什么要加入“老时时彩”开奖结果？</p>
                                <p>引入“老时时彩”开奖结果是为了保证幸运号码计算结果的绝对公平公正。</p>
                                <p>3、怎样查看我参与的商品有没有中奖？</p>
                                <p>每件商品开奖结果公布之后，登录许愿夺宝，进入“我”中查看“我的中奖记录”，即可查询中奖情况。如果您中奖了，
                                    我们也会通过推送信息通知您，所以在填写个人信息的时候请务必正确填写真实有效的联系电话、收货地址以便在您中奖时能及时与您取得联系。</p>
                                <p>4、如何领奖？</p>
                                <p>（1）在您获得商品后，我们会通过推送消息通知您。</p>
                                <p>（2）收到通知后，您可在个人中心中奖记录里查看获得的商品-->需在“我“中的“我的收获地址”中正确填写、真实的收货地址，
                                    完善或确认您的个人信息，点击确认收货地址</p>
                                <p>5、许愿夺宝的商品是正品吗?</p>
                                <p>许愿夺宝所有商品均从正规渠道采购，100%正品，请放心夺宝。</p>
                                <p>6、获得的商品有发票吗？ </p>
                                <p>因为用户获得的是奖品性质的商品，所以许愿夺宝不提供相关发票。</p>
                                <p>7、我收到的奖品可以换货或者退货吗？</p>
                                <p>如果不是质量问题，那么就不属于在三包范围内，不给予退换货。</p>
                                <p>8、如何晒单分享？</p>
                                <p>在您收到奖品后，登录许愿夺宝App，点击"晒单"，发布晒单信息。您的晒单即可出现在许愿许愿夺宝的“晒单”区，让大家一起分享你的喜悦。</p>
                                <p>9、如果一件奖品很久都没达到总需人次怎么办？</p>
                                <p>若某件奖品的许愿号码从开始分配之日起90天未分配完毕，则深圳快箭科技有限公司有权取消该件奖品的夺宝活动，
                                    并向用户退还款项，所退还支付金额将在3个工作日内退还至用户账户中。</p>
                            </div>
                        </section>
                    </article>
                </article>
            </div>
        )
    }
}
