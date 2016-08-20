/**
 * Created by fuhuixiang on 16-6-27.
 */
'use strict';
import React from 'react';
import ReactSwipe from 'react-swipe';

export default class Swipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let imgList = [];
        this.props.imgLists.forEach((value, index)=> {
            imgList.push(
                <div key={index}>
                    {value}
                </div>
            );
        });
        return (
            <ReactSwipe swipeOptions={{
                startSlide: 0,
                speed: 400,
                auto: 3000,
                continuous: true,
                disableScroll: false,
                stopPropagation: false,
                callback: function(index, elem) {},
                transitionEnd: function(index, elem) {}
            }} key={imgList.length}>
                {imgList}
            </ReactSwipe>
        );
    }
}
