/**
 * Created by fuhuixiang on 16-8-22.
 */
import React from 'react';
import apiUtils from '../utils/api_utils';
import util from '../utils/utils_box';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class PushOrder extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
        let sid = this.props.params.sid;
    }

    render() {
        return (
            <article className="push-order-view">
                <DBheader title="发布晒单" left={'goBack'}/>
                <section className="push-header">
                    <section className="input-content">
                        <textarea className="user-input" id="userInput" placeholder="丰富的图文晒单更能增长好运哦~（晒单由工作人员审核通过，文字建议不少于30字，图片建议拍实物）"/>
                    </section>
                    <section className="image-box">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="push-img"/>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="push-img"/>
                        <div className="push-btn">&#xe617;</div>
                    </section>
                </section>
                <button className="push-save-btn">确认</button>
            </article>
        )
    }
}
