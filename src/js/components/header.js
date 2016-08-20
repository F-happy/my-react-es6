/**
 * Created by fuhuixiang on 16/6/27.
 */
'use strict';
import React from 'react';
import {Link, hashHistory} from 'react-router';

export default class DBheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '许愿夺宝',
            rightBtn: false,
            leftBtn: ''
        }
    }

    componentDidMount() {
        let _title = this.props.title;
        let [leftBtn, rightBtn] = ['', ''];
        switch (this.props.left) {
            case 'goBack':
                leftBtn = 'goBack';
                break;
            case 'setting':
                break;
            default:
                break
        }
        switch (this.props.right) {
            case 'setting':
                rightBtn = 'setting';
                break;
            default:
                break
        }
        this.setState({leftBtn: leftBtn, rightBtn: rightBtn});
        if (!!_title) {
            this.setState({title: _title});
        }
    }

    handleBack() {
        hashHistory.goBack(-1);
    }

    render() {
        let goBackBtn  = <div className="header-left" onClick={this.handleBack.bind(this)}>&#xe605;</div>,
            settingBtn = <Link to={`/settings/`} className="header-right">&#xe61e;</Link>;
        return (
            <header className="header-components">
                {(this.state.leftBtn == 'goBack') ? goBackBtn : <div className="header-left"></div>}
                <div>{this.state.title}</div>
                {(this.state.rightBtn == 'setting') ? settingBtn : <div className="header-right"></div>}
            </header>
        )
    }
}
