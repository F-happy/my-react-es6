/**
 * Created by fuhuixiang on 16/3/18.
 */
'use strict';
import React from 'react';
// import {render} from 'react-dom';
import {Link} from 'react-router';

export default class Header extends React.Component {
    render() {
        let left = <i className="icon"></i>;
        let right = <i className="icon"></i>;

        // have left
        if (this.props.left) {
            let icon = 'icon mr12';
            if (this.props.left.icon) {
                icon = 'icon mr12 ' + this.props.left.icon;
            }
            if (this.props.left.link) {
                left =
                    <Link to={this.props.left.link} query={this.props.left.query} params={this.props.params}>
                        <i className={icon}></i>
                    </Link>
            } else {
                if (this.props.left.back) {
                    left =
                        <i className={icon} onTouchEnd={this.back}></i>
                }
                else {
                    left =
                        <i className={icon}></i>
                }
            }
        }

        // have right
        if (this.props.right) {
            var icon = 'icon mr12';
            if (this.props.right.icon) {
                icon = 'icon mr12 ' + this.props.right.icon;
            }
            if (this.props.right.link) {
                right =
                    <Link to={this.props.right.link} query={this.props.right.query} param={this.props.right.param}>
                        <i className={icon}></i>
                    </Link>
            }
            else {
                if (this.props.right.listen) {
                    right =
                        <i className={icon} onTouchEnd={this.clickEvent.bind(this, this.props.right.listen)}>{this.props.right.text}</i>
                }
                else if(this.props.right.click) {
                    right =
                        <i className={icon} onTouchEnd={this.props.right.click}></i>
                }
                else {
                    right =
                        <i className={icon}></i>
                }
            }
        }

        return (
            <header className="index-header">
                {left}
                <h2 className="header-title">{this.props.title}</h2>
                {right}
            </header>
        )
    }
}
