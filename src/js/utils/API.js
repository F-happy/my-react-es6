/**
 * Created by fuhuixiang on 16-6-27.
 */
'use strict';
import request from 'superagent';

class APIUtils {

    // 构造函数
    constructor() {
        this.root = 'http://127.0.0.1:3000/h5/';
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
     * @param par
     * @param callback
     */
    get(path, par, callback) {
        request.get(this.root + path)
        // .withCredentials()
            .query(par)
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
}
export default new APIUtils();
