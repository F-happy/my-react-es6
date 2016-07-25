/**
 * Created by fuhuixiang on 16-6-6.
 */
'use strict';

class Utils {
    // 构造函数
    constructor() {
        this.root = 'http://api.wishbao.com/';
        // this.root = 'http://127.0.0.1:3000/';
    }

    /**
     * Created by fuhuixiang on 16-5-26.
     * jsonp请求数据的接口
     * @param  {String}   url       请求的url地址
     * @param  {String}   params    请求的参数
     * @param  {function} callback  回调函数
     * @param error
     */
    jsonp(url, params, callback, error) {
        let script = document.createElement('script'),
            id     = 'doubao_jsonp_' + Math.round(100 * Math.random());

        if (window[id]) {
            id += Math.round(100 * Math.random());
        }
        script.id = id;
        window[id] = (data)=> {
            delete window[id];
            script.parentNode.removeChild(script);
            if (typeof callback === 'function') {
                callback(data);
            }
        };
        script.onerror = (data)=> {
            script.parentNode.removeChild(script);
            delete window[id];
            if (typeof error === 'function') {
                error(data);
            }
        };
        url = this.root + url;
        url += '?' + params + '&callback=' + id;
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    /**
     * Created by fuhuixiang on 16-5-26.
     * @desc    获取url中search部分的值
     * @return  string
     * @param   key
     */
    getURL(key) {
        let results = new RegExp(key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)").exec(window.location.hash.substr(1));
        return (results) ? (results[1]) : '';
    }

    /**
     * 判断当前设备平台
     */
    isDriver() {
        let ua = navigator.userAgent;
        if (/android/i.test(ua)) {
            return 'android';
        } else if (/like Mac/i.test(ua)) {
            return 'ios';
        } else {
            return 'no';
        }
    }

    /**
     * 判断是否在客户端内
     */
    isDuoBao() {
        return navigator.userAgent.match("XUYUAN") ? true : false;
    }

    /**
     * 当用户在客户端外打开时触发的事件
     */
    downLoadClient(){
        alert('此页面请在客户端内打开~');
        window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.quickarrow.xuyuan';
    }
}
export default new Utils();
