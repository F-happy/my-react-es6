/**
 * Created by fuhuixiang on 16/6/27.
 */
'use strict';
import React from 'react';
import {Link, hashHistory} from 'react-router';

export default class DBheader extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {}

    handleBack() {
        hashHistory.goBack(-1);
    }

    render() {
        let [leftBtn, rightBtn] = [<div className="header-left"/>, <div className="header-right"/>];
        let goBackBtn   = <div className="header-left" onClick={this.handleBack.bind(this)}>&#xe605;</div>,
            settingBtn  = <Link to={`/settings/`} className="header-right">&#xe61e;</Link>,
            addBtn      = <Link to={`/edit_address/add`} className="header-right">&#xe62a;</Link>,
            messageBtn  = <Link to={`/message_system/`} className="header-right">&#xe624;</Link>,
            listBtn  = <Link to={`/moneylist/`} className="header-right">&#xe61c;</Link>,
            searchBtn   = <Link to={`/type_list/`} className="header-left">&#xe627;</Link>,
            shopCartBtn = <Link to={`/shopcart/`} className="header-right">&#xe60b;</Link>;

        switch (this.props.left) {
            case 'goBack':
                leftBtn = goBackBtn;
                break;
            case 'search':
                leftBtn = searchBtn;
                break;
            default:
                break
        }
        switch (this.props.right) {
            case 'setting':
                rightBtn = settingBtn;
                break;
            case 'shopcart':
                rightBtn = shopCartBtn;
                break;
            case 'add':
                rightBtn = addBtn;
                break;
            case 'message':
                rightBtn = messageBtn;
                break;
            case 'list':
                rightBtn = listBtn;
                break;
            default:
                break
        }
        return (
            <header className="header-components">
                {leftBtn}
                <div>{(!!this.props.title) ? this.props.title : '许愿夺宝'}</div>
                {rightBtn}
            </header>
        )
    }
}
