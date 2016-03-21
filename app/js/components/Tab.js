/**
 * Created by fuhuixiang on 16/3/18.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';

export default class Tab extends React.Component {
    render() {
        let tabs = this.props.tabs.map((item)=> {
            let active = item.active ? ' active flex1': 'flex1';
            return (
                <li className={active}>
                    <Link to={item.link}>
                        {item.name}
                    </Link>
                </li>
            )
        });

        return (
            <ul className="ui-tab box bac bpc">
                {tabs}
            </ul>
        );
    }
}
