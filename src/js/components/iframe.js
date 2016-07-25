/**
 * Created by fuhuixiang on 16-7-25.
 */
'use strict';
import React from 'react';
import DBheader from '../components/header';
import globData from '../utils/globalData';

export default class iFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '#home',
            title: '许愿夺宝'
        }
    }

    componentDidMount() {
        let frameName = this.props.params.frame;
        if (!!globData[frameName]) {
            this.setState({
                src: globData[frameName].src,
                title: globData[frameName].name
            });
        }
    }

    render() {
        return (
            <article style={{marginTop: '2.5rem'}}>
                <DBheader title={this.state.title} link="home"/>
                <iframe src={this.state.src} frameborder="0"
                        style={{padding: 0, width: '100%', height: '1000px', border: 'none'}}></iframe>
            </article>
        )
    }
}
