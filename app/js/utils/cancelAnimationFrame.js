/**
 * Created by fuhuixiang on 16/3/21.
 */
'use strict';

module.exports = global.cancelAnimationFrame ||
    global.webkitCancelAnimationFrame ||
    global.webkitCancelRequestAnimationFrame ||
    global.mozCancelAnimationFrame ||
    global.clearTimeout;
