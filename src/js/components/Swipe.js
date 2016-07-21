/**
 * Created by fuhuixiang on 16-6-27.
 */
'use strict';
import React from 'react';
import slider from 'swipe-js';

export default class Swipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let element = document.getElementById('slider');
        window.mySwipe = slider(element, {
            startSlide: 0,
            auto: 1000,
            autoRestart: false,
            continuous: true,
            disableScroll: true,
            stopPropagation: false,
            callback: function (index, elem) {
            },
            transitionEnd: function (index, elem) {
            }
        });

        this.refs.slider.style.width = '100%';
    }

    render() {
        let swipe = {
            overflow: 'hidden',
            visibility: 'hidden',
            height: 8.75 + 'rem',
            width: 100 + '%',
            position: 'relative',
            marginTop: '2.5rem'
        };
        let swipeWrap = {
            overflow: 'hidden',
            position: 'relative',
            width: 100 + '%',
            height: 8.75 + 'rem'
        };
        let imgList = [];
        this.props.imgLists.forEach((value, index)=> {
            imgList.push(
                <div style={{
                    float: 'left',
                    width:100 + '%',
                    height: 8.75 + 'rem',
                    position: 'absolute',
                    backgroundColor: '#fff'
                }} key={index}>
                    {value}
                </div>
            );
        });
        return (
            <div id="slider" style={swipe}>
                <div style={swipeWrap} ref="slider">
                    {imgList}
                </div>
            </div>
        );
    }
}
