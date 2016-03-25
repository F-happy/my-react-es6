/**
 * Created by fuhuixiang on 16/3/21.
 */
'use strict';
class DataUtils {

    // 构造函数
    constructor(timeStr) {}

    /**
     * 判断是否纯粹的对象
     *
     * @method isPlainObject
     *
     * @param  {object}      obj [需要判断的对象]
     *
     * @return {Boolean}         [是否为一个对象]
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
     * 数据本地存储
     *
     * @method setLocal
     *
     * @param  {String} key   [需要存储的key值]
     * @param  {String} value [需要存储的内容]
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

    /**
     * 读取本地数据
     *
     * @method getLocal
     *
     * @param  {String} key   [需要读取的key值]
     * @param  {String} value [是否转为字符串]
     *
     * @return {Json}         [返回一个json对象]
     */
    getLocal(key, value) {
        let back = window.localStorage.getItem(key);

        if (object.prototype.toString.call(value) === '[object Array]' || this.isPlainObject(value)) {
            value = JSON.stringify(value);
        }

        return value ? JSON.parse(back) : back;
    }

    /**
     * 格式化时间
     *
     * @method formatTime
     *
     * @param  {String}   fmt [需要格式化的时间戳]
     *
     * @return {String}       [格式化后的时间]
     */
    formatTime(timeStr, fmt){
        let time = new Date(parseInt(timeStr));
        var o = {
            "M+": time.getMonth() + 1,                 //月份
            "d+": time.getDate(),                    //日
            "h+": time.getHours(),                   //小时
            "m+": time.getMinutes(),                 //分
            "s+": time.getSeconds(),                 //秒
            "q+": Math.floor((time.getMonth() + 3) / 3), //季度
            "S": time.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

}
let dataUtil = new DataUtils();
export default dataUtil;
