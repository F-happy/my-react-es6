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
            goBack: false,
            right: false
        }
    }

    componentDidMount() {
        let _title = this.props.title;
        if (!!_title) {
            this.setState({title: _title});
        }
        if (this.props.goBack) {
            this.setState({goBack: true});
        }
    }

    handleBack() {
        hashHistory.goBack(-1);
    }

    render() {
        let left  = <div className="header-left" onClick={this.handleBack.bind(this)}>&#xe605;</div>,
            right = <Link to={`/${this.state.right}`} className="header-right">&#xe605;</Link>;
        return (
            <header className="index-header">
                {(this.state.goBack) ? left : <div className="header-left"></div>}
                <div>{this.state.title}</div>
                {(this.state.right) ? right : <div className="header-right"></div>}
            </header>
        )
    }
}
