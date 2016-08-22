/**
 * Created by fuhuixiang on 16-8-21.
 */
import React from 'react';
import {Link} from 'react-router';
import apiUtils from '../utils/api_utils';
import util from '../utils/utils_box';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class GoodsModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
        let sid = this.props.params.type;
    }

    handleAddShopCart(sid) {
        if (util.addShopCart(sid, 5)) {
            toast.print('添加购物车成功!');
        } else {
            toast.print('添加购物车失败!');
        }
    }

    render() {
        return (
            <article className="goods-module-view">
                <DBheader title="十元专区" left={'goBack'} right="shopcart"/>
                <section className="goods-box">
                    <Link to={'/goodsinfo/100'}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="goods-img"/>
                    </Link>
                    <div className="goods-info">
                        <p className="good-name">Apple iPad Air 平板电脑</p>
                        <p className="progress">
                            <span className="progress-new" style={{width: '50%'}}/>
                        </p>
                        <p className="good-money">
                            <span className="good-total">总需:3188</span>
                            <span className="good-remain">剩余:<span className="main-color">590</span></span>
                        </p>
                    </div>
                    <button className="icon-add-shop"
                            onClick={this.handleAddShopCart.bind(this, 1)}>&#xe622;</button>
                </section>
                <section className="goods-box">
                    <Link to={'/goodsinfo/100'}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="goods-img"/>
                    </Link>
                    <div className="goods-info">
                        <p className="good-name">Apple iPad Air 平板电脑</p>
                        <p className="progress">
                            <span className="progress-new" style={{width: '50%'}}/>
                        </p>
                        <p className="good-money">
                            <span>总需:3188</span>
                            <span>剩余:<span className="main-color">590</span></span>
                        </p>
                    </div>
                    <button className="icon-add-shop"
                            onClick={this.handleAddShopCart.bind(this, 1)}>&#xe622;</button>
                </section>
                <section className="goods-box">
                    <Link to={'/goodsinfo/100'}>
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="goods-img"/>
                    </Link>
                    <div className="goods-info">
                        <p className="good-name">Apple iPad Air 平板电脑</p>
                        <p className="progress">
                            <span className="progress-new" style={{width: '50%'}}/>
                        </p>
                        <p className="good-money">
                            <span className="good-total">总需:3188</span>
                            <span className="good-remain">剩余:<span className="main-color">590</span></span>
                        </p>
                    </div>
                    <button className="icon-add-shop"
                            onClick={this.handleAddShopCart.bind(this, 1)}>&#xe622;</button>
                </section>
            </article>
        )
    }
}
