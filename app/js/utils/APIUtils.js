/**
 * Created by fuhuixiang on 16/3/19.
 */
'use strict';
import request from 'superagent';

class APIUtils {

    // 构造函数
    constructor() {
        this.root = 'http://172.16.4.71:9999/';
    }

    /**
     * post请求
     * @param path
     * @param par
     * @param callback
     */
    post(path, par, callback) {
        request.post(this.root + path)
            .withCredentials()
            .send(par)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .end((err, res) => {
                if (err || !res.ok) {
                    callback(err.toString());
                } else {
                    callback(JSON.parse(res.text));
                }
            });
    }

    /**
     * get请求
     * @param path
     * @param callback
     */
    get(path, callback) {
        request.get(this.root + path)
            // .withCredentials()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .end((err, res) => {
                if (err || !res.ok) {
                    callback(err.toString());
                } else {
                    callback(JSON.parse(res.text));
                }
            });
    }

    /**
     * 获取URL参数
     * @param key
     * @returns {undefined}
     */
    getRequest(key) {
        let search  = window.location.search.substr(1),
            regex   = new RegExp(key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)"),
            results = regex.exec(search);
        return (results) ? (results[1]) : undefined;
    }

}

let API = new APIUtils();
export default API;
