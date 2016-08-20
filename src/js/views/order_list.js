/**
 * Created by fuhuixiang on 16-8-2.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';
import API from '../utils/API';
import util from '../utils/Utils';
import DBheader from '../components/header';
import DBFooter from '../components/footer';
import ReactSwipe from '../components/swipe';
import toast from '../components/toast';

export default class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            items: ['全部', '进行中', '已揭晓']
        };
    }

    componentDidMount(){}

    render(){
        return (
            <article className="order-list-view">
                <DBheader title="订单记录" left={'goBack'}/>
                <ul className="order-lists">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`order-list${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
            </article>
        )
    }
}
