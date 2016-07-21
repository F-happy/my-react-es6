/**
 * Created by fuhuixiang on 16/6/6.
 */
'use strict';
import React from 'react';
import utils from '../utils/Utils';

export default class Caldetail extends React.Component {
    constructor(props) {
        super(props);
        this.isDuoBao = utils.isDuoBao();
        this.state = {
            href: '#/caldetail',
            numA: '系统繁忙，请稍后重试',
            numB: '系统繁忙，请稍后重试',
            query: '开奖查询',
            results: '请重新打开许愿夺宝',
            purList: []
        };
    }

    componentDidMount() {
        document.title = '计算详情';
        document.body.style.background = '#eee';
        let sid = utils.getURL('sid');
        if (this.isDuoBao && !!sid) {
            utils.jsonp('caldetail/info', 'sid=' + sid, (data)=> {
                if (data.status == 1) {
                    let salesList = data.d.sales;

                    //特殊活动编码 0: 表示正常| 1: 春节老时时彩不开奖
                    if (data.d.special_action_code == 1) {
                        this.setState({
                            numB: '00000',
                            query: '"老时时彩" 官方公告',
                            results: '计算结果：' + salesList.code
                        });
                        document.querySelector('#announcement').style.display = 'block';
                        document.querySelector('.result-state').style.display = 'none';
                    } else {
                        //根据status值进行状态判断
                        switch (salesList.status) {
                            case 0:
                                this.setState({
                                    numB: salesList.codeb + '(第' + salesList.lottery_period + '期)',
                                    results: '计算结果：' + salesList.code
                                });
                                break;
                            case 2:
                                this.setState({
                                    numB: '等待开奖(第' + salesList.lottery_period + '期)',
                                    results: '计算结果：等待揭晓'
                                });
                                break;
                            case -2:
                                this.setState({
                                    numB: '等待开奖(第' + salesList.lottery_period + '期)',
                                    results: '计算结果：等待揭晓'
                                });
                                break;
                            default :
                                return;
                        }
                    }
                    this.setState({
                        href: data.d.query_url,
                        numA: salesList.codea
                    });

                    if (data.d.purs.length > 0) {
                        let pur = [];
                        data.d.purs.forEach((v, index)=> {
                            pur.push(
                                <p className="list" key={index}>
                                <span className="times">{v.time}
                                    <span className="num">→{v.number}</span>
                                </span>
                                    <span className="user-name">{v.username}</span>
                                </p>
                            )
                        });
                        this.setState({
                            purList: pur
                        });
                        let open = document.querySelector('#open');
                        open.addEventListener('click', ()=> {
                            let users = document.querySelector('.users');
                            if (open.className == 'pre') {
                                users.style.display = 'block';
                                open.className = 'pre-rotating';
                            } else {
                                users.style.display = 'none';
                                open.className = 'pre';
                            }
                        });
                    }
                } else {
                    document.querySelector('#open').className = 'pre-bad';
                    document.querySelector('#query').className = 'query-bad';
                }
            });
        } else {
            document.querySelector('#open').className = 'pre-bad';
            document.querySelector('#query').className = 'query-bad';
        }

    }

    render() {
        return (
            <div className="caldetail-view">
                <header>
                    <div className="head-result">幸运<br/>号码</div>
                    <span className="symbol"> = </span>
                    <div className="head-calculate">
                        <p className="numbers">数值<span className="title">A</span> + 数值<span className="title">B</span></p>
                        <p className="totals">商品总需人次</p>
                    </div>
                    <span className="symbol"> + </span>
                    <div className="head-number">10000001</div>
                </header>
                <section className="result">
                    <div className="texts">
                        <p className="title">A</p>
                        <span className="symbol"> =</span>
                        <div className="text">截止该奖品开奖时间点前本站全部奖品的最后50个参与时间所代表数值之和</div>
                    </div>
                    <div className="number">
                        <span className="symbol">=</span>
                        <p className="text-result">{this.state.numA}</p>
                        <span className="pre" id="open"/>
                    </div>
                </section>
                <section className="users">
                    <div className="users-title">
                        <span className="join-time">参与时间</span>
                        <span className="fr">用户</span>
                    </div>
                    <div className="user-lists">{this.state.purList}</div>
                </section>
                <section className="result">
                    <div className="texts">
                        <p className="title">B</p>
                        <span className="symbol"> =</span>
                        <div className="text">最近一期中国福利彩票 “ 老时时彩 ” 的开奖结果</div>
                    </div>
                    <div className="number">
                        <span className="symbol">=</span>
                        <p className="text-result-b">{this.state.numB}</p>
                        <a className="query" href={this.state.href} id="query">{this.state.query}</a>
                    </div>
                </section>
                <section id="announcement"/>
                <section className="results">{this.state.results}</section>
                <section className="result-state">
                    注：最后一个许愿号认购时间距离“老时时彩”最近下一期开奖大于24小时，默认“老时时彩”开奖结果为00000；如遇福彩中心通讯故障，无法获取“老时时彩”开奖结果，最后一个号码分配时间距离故障时间大于24小时，亦默认“老时时彩”开奖结果为00000。
                </section>
            </div>
        )
    }
}
