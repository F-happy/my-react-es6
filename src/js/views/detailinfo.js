/**
 * Created by fuhuixiang on 16-6-6.
 */
'use strict';
import React from 'react';
import utils from '../utils/Utils';

export default class DetailInfo extends React.Component {
    constructor(props) {
        super(props);
        this.isDuoBao = utils.isDuoBao();
        this.state = {
            imgArry: []
        };
    }

    componentDidMount() {
        document.title = '商品详情';
        // document.body.style.background = '#eee';
        // let gid = utils.getURL('gid');
        let gid = this.props.params.id;
        if (!!gid) {
            utils.jsonp('goods/detail', 'gid=' + gid, (data)=> {
                if (data.c == 0) {
                    let detail = data.d.detail.split(',');
                    let imgArry = [];
                    detail.forEach((v, index)=> {
                        imgArry.push(v);
                    });
                    this.setState({
                        imgArry: imgArry
                    });
                }
            });
        }
    }

    render() {
        let images = [];
        let errorPage = <div className="error">
                            <h1>网络不给力</h1>
                            <p>点击刷新或进行网络设置</p>
                            <button onclick="javascript: window.location.reload();">刷新</button>
                        </div>;
        this.state.imgArry.forEach((v, index)=> {
            images.push(<img src={v} key={index}/>);
        });
        let imagePage = images.length > 0 ? images : errorPage;
        return (
            <div className="detail-view">
                {imagePage}
            </div>
        );
    }
}
