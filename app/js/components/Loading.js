/**
 * Created by fuhuixiang on 16/3/18.
 */
'use strict';

import React from 'react';

export default class Loading extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'status': ' remove',
            'skin': this.props.skin || 1
        };
    }

    showLoading(dom) {
        this.setState({
            'status': ' add',
            'dom': dom
        });
    }

    hideLoading() {
        this.setState({
            'status': ' remove',
            'dom': {}
        });
    }

    touchend(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        return (
            <div onTouchEnd={this.touchend.bind(this)}
                 className={"modal-loading box bac bpc" + this.state.status + ' modal-loading-' + this.state.skin}>
                {this.state.dom}
            </div>
        );
    }
}
