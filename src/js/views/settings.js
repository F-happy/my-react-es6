/**
 * Created by fuhuixiang on 16-8-19.
 */
import React from 'react';
import API from '../utils/API';
import util from '../utils/Utils';
import DBheader from '../components/header';
import LineBlock from '../components/inline_block_link';

export default class Settings extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.querySelector('html').style.background = '#eee';
    }

    render(){
        return (
            <article className="setting-view">
                <DBheader title="设置" left={'goBack'}/>
                <LineBlock toContent="帮助中心" toLink="home"/>
                <LineBlock toContent="服务协议" toLink="home"/>
                <LineBlock toContent="关于我们" toLink="home"/>
                <LineBlock toContent="夺宝认证体系" toLink="home"/>
                <button className="setting-btn">退出登录</button>
            </article>
        )
    }
}
