/**
 * Created by fuhuixiang on 16/6/27.
 */
'use strict';
import React from 'react';

export default class DBheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '许愿夺宝',
            left: false,
            right: 0
        }
    }

    componentDidMount() {
        let _title = this.props.title;
        if (!!_title) {
            this.setState({title: _title});
        }
    }

    render() {
        let left = <div></div>;
        let right = <div></div>;
        return (
            <header className="index-header">
                {left}
                {this.state.title}
                {right}
            </header>
        )
    }
}
