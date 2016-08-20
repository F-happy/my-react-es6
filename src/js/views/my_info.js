/**
 * Created by fuhuixiang on 16-8-20.
 */
import React from 'react';
import { Link } from 'react-router';
import API from '../utils/API';
import util from '../utils/Utils';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class MyInfo extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
    }

    render(){
        return (
            <article className="my-info-view">
                <DBheader title="个人信息" left={'goBack'}/>
                <section className="user-img-box">
                    <div>头像</div>
                    <div className="right-box">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="user-img"/>
                        <i>&#xe607;</i>
                    </div>
                </section>
                <section className="user-name-box">
                    <div>昵称</div>
                    <div className="right-box">
                        <div className="my-name">叫什么好呢</div>
                        <i>&#xe607;</i>
                    </div>
                </section>
                <section className="my-money-box">
                    <div>我的多宝币</div>
                    <div className="right-box">
                        <div className="main-color">100</div>
                        <i>&#xe607;</i>
                    </div>
                </section>
            </article>
        )
    }
}
