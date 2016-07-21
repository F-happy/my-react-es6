/**
 * Created by fuhuixiang on 16-6-7.
 */
'use strict';
import React from 'react';

export default class Certification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        document.title = '许愿认证体系';
        return (
            <div className="certification-view">
                <section className="contents">
                    <div className="title-cation">一、认证信息</div>
                    <div className="title2">品牌宝安全联盟企业认证和实名认证</div>
                    <div className="content-cation">
                        <div className="key">简介：</div>
                        <div className="text">品牌宝为知名互联网公司和互联网产品提供专业、权威、高效的审核服务。
                            拥有丰富的验证审核经验，在网址验证审核、电话号码验证审核和APP验证审核等方向为多家互联网公司提供服务。
                            在行业内拥有非常高的知名度和良好的口碑，获得了合作伙伴和验证用户的高度认可。
                        </div>
                    </div>
                    <div className="content-cation">
                        <div className="key">官方网址：</div>
                        <div className="value">
                            <a href="http://www.pinpaibao.com.cn/">http://www.pinpaibao.com.cn/</a>
                        </div>
                    </div>
                    <div className="title2">中国电子商务诚信单位认证</div>
                    <div className="content-cation">
                        <div className="key">简介：</div>
                        <div className="text">诚通在线一直致力于促进我国电子商务信用体系建设，建立科学、合理、权威、公正的信用监督和失信惩戒机制，
                            逐步形成符合我国电子商务的发展现实、并与国际接轨的电子商务信用服务体系，
                            倡导并促进企业和民众对电子商务诚信的尊崇和相关行为规范的共识，
                            从而营造和谐电子商务诚信的社会氛围，推动我国电子商务的健康发展。
                        </div>
                    </div>
                    <div className="content-cation">
                        <div className="key">官方网址：</div>
                        <div className="value">
                            <a href="http://www.ectrustprc.org.cn/index.php">
                                http://www.ectrustprc.org.cn/index.php</a>
                        </div>
                    </div>
                    <div className="title2">中文官方网站认证中心认证</div>
                    <div className="content-cation">
                        <div className="key">简介：</div>
                        <div className="text">中文官方网站认证中心（Chinese Official Website Certification Centre，简称COWCC）督促企业完善网站资质，
                            推进网站亮证经营，颁发《官方网站认证证书》、授予“官方网站认证标志”，让官网看得见、摸得着、信得过，
                            方便网民识别、信任、认可官方网站。监测官网，为网民和政府提供官网认证信息的第三方专业权威认证机构。
                        </div>
                    </div>
                    <div className="content-cation">
                        <div className="key">官方网址：</div>
                        <div className="value">
                            <a href="http://www.cowcc.com/index.html">
                                http://www.cowcc.com/index.html</a>
                        </div>
                    </div>
                    <div className="title2">深圳市众信电子商务交易保障促进中心认证</div>
                    <div className="content-cation">
                        <div className="key">简介：</div>
                        <div className="text">“深圳市众信电子商务交易保障促进中心”（简称“众信中心”）是经政府依法授权和委托，
                            承担电子商务可信交易环境建设的第三方公共服务机构，在政府指导下，兼具公信力与市场灵活性。
                            众信中心为电子商务市场提供公益性基础服务，其性质是服务的服务，第三方的第三方。
                        </div>
                    </div>
                    <div className="content-cation">
                        <div className="key">官方网址：</div>
                        <div className="value">
                            <a href="http://www.ebs.org.cn/">http://www.ebs.org.cn/</a>
                        </div>
                    </div>
                    <div className="title2">深圳电子商务服务监管网认证</div>
                    <div className="content-cation">
                        <div className="key">简介：</div>
                        <div className="text">深圳电子商务服务监管网于2012年3月19日经由深圳市政府批准成立，
                            隶属于深圳市对外经济贸易服务中心，是深圳市促进电子商务发展、承接政府外延职能的第三方服务平台，
                            是深圳市电子商务发展过程中政企对接、产业联合协作的公共服务场所。
                        </div>
                    </div>
                    <div className="content-cation">
                        <div className="key">官方网址：</div>
                        <div className="value">
                            <a href="http://sz.ebs.org.cn/">http://sz.ebs.org.cn/</a>
                        </div>
                    </div>
                </section>
                <section className="contents">
                    <div className="title-cation">二、三个服务保证</div>
                    <p><span>100%公平公正：</span>整个过程完全透明，可随时查看每件商品所有参与信息及揭晓记录。</p>
                    <p><span>100%正品保证：</span>许愿夺宝精心挑选优质服务品牌商家，保障全场商品100%品牌正品。</p>
                    <p><span>全国免运费：</span>许愿夺宝承诺全场商品全国免费快递。（港澳台地区除外）</p>
                </section>
                <section className="contents">
                    <div className="title-cation">三、企业信用信息查询</div>
                    <img src="images/certification-pic1.jpg" />
                    <img src="images/certification-pic2.png" />
                    <div className="url">查询地址：
                        <a href="http://www.jsgsj.gov.cn:58888/province/">http://www.jsgsj.gov.cn:58888/province/</a>
                    </div>
                </section>
                <section className="contents">
                    <div className="title-cation">四、网站备案信息</div>
                    <p>什么是网站备案信息？</p>
                    <p>网站备案是根据国家法律法规需要网站的所有者向国家有关部门申请的备案，主要有ICP备案和公安局备案。
                        非经营性网站[1]备案（Internet foot Provider Registration Record）， 指中华人民共和国境内信息服务互联网站所需进行的备案登记作业。
                        2005年2月8日，中华人民共和国信息产业部部长王绪东签发《非经营性互联网信息服务备案管理办法》，并于3月20日正式实施。
                        该办法要求从事非经营性互联网信息服务的网站进行备案登记，否则将予以关站、罚款等处理。
                        为配合这一需要，信息产业部建立了统一的备案工作网站，接受符合办法规定的网站负责人的备案登记。
                        网站备案所需资料，企业网站备案需要准备:1份(营业执照)副本彩色扫描件或复印件;1份网站负责人的身份证彩色扫描件或复印件等。</p>
                    <p>查询网址：</p>
                    <div className="link br">
                        <a href="http://gsxt.gdgs.gov.cn/aiccips/">http://gsxt.gdgs.gov.cn/aiccips/</a>
                    </div>
                    <p>查询方法：打开网址后，点击左上角“备案信息查询”，出现右侧界面，输入网站首页网址和验证码即可查询。</p>
                </section>
                <img src="images/certification-pic3.png" className="foot-cation"/>
            </div>
        )
    }
}
