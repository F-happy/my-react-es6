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
            right: false,
            leftBtn: ''
        }
    }

    componentDidMount() {
        let _title = this.props.title;
        let leftBtn = '';
        switch (this.props.left) {
            case 'goBack':
                leftBtn = 'goBack';
                break;
            case 'setting':
                break;
            default:
                break
        }
        this.setState({leftBtn: leftBtn});
        if (!!_title) {
            this.setState({title: _title});
        }
    }

    handleBack() {
        hashHistory.goBack(-1);
    }

    render() {
        let goBackBtn = <div className="header-left" onClick={this.handleBack.bind(this)}>&#xe605;</div>,
            right     = <Link to={`/${this.state.right}`} className="header-right">&#xe605;</Link>;
        return (
            <header className="index-header">
                {(this.state.leftBtn == 'goBack') ? goBackBtn : <div className="header-left"></div>}
                <div>{this.state.title}</div>
                {(this.state.right) ? right : <div className="header-right"></div>}
            </header>
        )
    }
}
