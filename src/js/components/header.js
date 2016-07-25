/**
 * Created by fuhuixiang on 16/6/27.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';

export default class DBheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '许愿夺宝',
            link: false,
            right: false
        }
    }

    componentDidMount() {
        let _title = this.props.title,
            _link  = this.props.link;
        if (!!_title) {
            this.setState({title: _title});
        }
        if (!!_link) {
            this.setState({link: _link});
        }
    }

    render() {
        let left  = <Link to={`/${this.state.link}`} className="header-left">&#xe605;</Link>,
            right = <Link to={`/${this.state.right}`} className="header-right">&#xe605;</Link>;
        return (
            <header className="index-header">
                {(this.state.link) ? left : <div className="header-left"></div>}
                <div>{this.state.title}</div>
                {(this.state.right) ? right : <div className="header-right"></div>}
            </header>
        )
    }
}
