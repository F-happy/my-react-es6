/**
 * Created by fuhuixiang on 16/3/21.
 */
'use strict';
class DataUtils {

    // 构造函数
    constructor() {
    }

    /**
     * 判断是否纯粹的对象
     * @param obj
     * @returns {boolean}
     */
    isPlainObject(obj) {
        //判断是否非window和DOM对象的对象，
        if (!obj || obj.toString() !== '[object Object]' || obj.nodeType || obj.setInterval) {
            return false;
        }

        /**
         * constructor是对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数
         * 判断obj是否具有isPrototypeOf属性，isPrototypeOf是挂在Object.prototype上的。
         * 通过字面量或自定义类（构造器）创建的对象都会继承该属性方法
         */
        if (
            obj.constructor && !obj.hasOwnProperty('constructor') && !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')
        ) {
            return false;
        }

        let key;
        for (key in obj) {
        }

        return key === undefined || obj.hasOwnProperty(key);
    }

    /**
     * 数据本地存储, localstorage
     * @param key
     * @param value
     * @returns {boolean}
     */
    setLocal(key, value) {
        if (object.prototype.toString.call(value) === '[object Array]' || this.isPlainObject(value)) {
            value = JSON.stringify(value);
        }

        try {
            window.localStorage.setItem(key, value);
            return true
        } catch (err) {
            return false;
        }
    }

    getLocal(key, value) {
        let back = window.localStorage.getItem(key);

        if (object.prototype.toString.call(value) === '[object Array]' || this.isPlainObject(value)) {
            value = JSON.stringify(value);
        }

        return value ? JSON.parse(back) : back;
    }
}
let dataUtil = new DataUtils();
export default dataUtil;
