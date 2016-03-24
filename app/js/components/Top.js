/**
 * Created by fuhuixiang on 16/3/22.
 */
'use strict';

import React from 'react';

export default class Top extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'hidden': 1
        };
    }

    goTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount(){

    }

    render() {

        let topStyle = {
        };

        return (
            <a style={topStyle} className="top icon icon-uni4E0A" onClick={this.goTop.bind(this)}></a>
        );
    }
}
