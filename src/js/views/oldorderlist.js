/**
 * Created by fuhuixiang on 16-8-19.
 */
import React from 'react';
import { Link } from 'react-router';
import API from '../utils/API';
import util from '../utils/Utils';
import DBheader from '../components/header';

export default class OldOrderList extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
        let gid = this.props.params.gid;
        console.log(gid);
    }

    render(){
        return (
            <article className="old-order-list">
                <DBheader title="往期揭晓" left={'goBack'}/>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon">&#xe607;</i>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon">&#xe607;</i>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon">&#xe607;</i>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon">&#xe607;</i>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon">&#xe607;</i>
                    </div>
                </section>
                <section className="order-list">
                    <div className="list-header">第100期(揭晓时间: 2小时前)</div>
                    <div className="list-body">
                        <div className="list-img"><img src="http://dummyimage.com/200x200/4A7BF7"/></div>
                        <div className="user-info">
                            <div className="user-name">中奖者: <span className="name">用户名用户名</span></div>
                            <div className="user-number">幸运号码: <span className="main-color">10000093</span></div>
                            <div className="join-number">本期参与: 100人次</div>
                        </div>
                        <i className="right-icon">&#xe607;</i>
                    </div>
                </section>
            </article>
        )
    }
}
