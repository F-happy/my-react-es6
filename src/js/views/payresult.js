/**
 * Created by fuhuixiang on 16-6-6.
 */
'use strict';
import React from 'react';

export default class payResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        document.title = '支付成功';
        document.body.style.color = '#555';
        return (
            <div className="pay-result-view">
                <h3>恭喜您支付成功！</h3>
                <p>现在切换到许愿夺宝客户端即可查看许愿记录～</p>
            </div>
        )
    }
}
