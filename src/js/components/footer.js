/**
 * Created by fuhuixiang on 16/6/27.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';

export default class DBFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: [
                {className: '&#xe60d;', act: false, name: '首页', link: 'home'},
                {className: '&#xe603;', act: false, name: '最新揭晓', link: 'published'},
                {className: '&#xe61d;', act: false, name: '晒单', link: 'shareview'},
                {className: '&#xe60b;', act: false, name: '清单', link: 'shopcart'},
                {className: '&#xe619;', act: false, name: '我的', link: 'me'}
            ]
        }
    }

    componentDidMount() {
        let act     = this.props.act,
            iconObj = this.state.icon;
        switch (act) {
            case 'index':
                iconObj[0].act = true;
                break;
            case 'publish':
                iconObj[1].act = true;
                break;
            case 'share':
                iconObj[2].act = true;
                break;
            case 'list':
                iconObj[3].act = true;
                break;
            case 'me':
                iconObj[4].act = true;
                break;
            default :
                iconObj[0].act = true;
                break;
        }
        this.setState({
            icon: iconObj
        });
    }

    render() {
        let iconDom = [];
        this.state.icon.forEach((v, i)=> {
            iconDom.push(
                <div className={`footer-box${(v.act) ? ' main-color' : ''}`} key={i}>
                    <Link to={`/${v.link}/`}>
                        <i className='footer-icon' dangerouslySetInnerHTML={{__html: v.className}}/>{v.name}
                    </Link>
                </div>
            );
        });
        return (
            <footer className="footer-components">
                {iconDom}
            </footer>
        )
    }
}
