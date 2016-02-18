/**
 * webpack
 * @authors fuhuixiang
 * @date    2016-02-18
 * @version 0.0.2
 */

'use strict';

module.exports = require("./main-webpack-config")({
    build: false,
    version: '0.0.5',
    CDNPath: 'http://www.iduobao.net',
    cssPath: 'css',
    fontPath: 'fonts',
    imagesPath: 'images',
    jsPath: 'js',
    mainJsPath: './app/js/index.js',
    outJsName: 'main.js',
    outStyleName: 'style.css'
});