/**
 * Created by fuhuixiang on 16-7-28.
 */
'use strict';

class CountDown {
    constructor() {
    }

    /**
     * 小时级倒计时动画
     * @private
     */
    timeAnimation(times, callback) {
        var endingTime     = times,
            timeTemp       = (endingTime - Date.now()),
            remain_sec     = 0,
            remain_minute  = 0,
            remain_hour    = 0,
            timeTag        = Date.now(),
            hour           = 0,
            min            = 0,
            sec            = 0,
            remain_secTemp = 0,
            headTime       = document.querySelector('#time1');

        console.log('num');

        if (Date.now() > endingTime) { //  1449936000000 1469690950885
            headTime.innerHTML = '活动结束';
        } else {
            timeTemp = parseInt(timeTemp / 1000);
            // 秒数
            remain_sec = timeTemp % 60;
            timeTemp = parseInt(timeTemp / 60);
            // 分数
            remain_minute = timeTemp % 60;
            timeTemp = parseInt(timeTemp / 60);
            // 小时数
            remain_hour = timeTemp % 24;
            timeTemp = parseInt(timeTemp / 24);

            window.requestAnimationFrame(begin);
        }

        function begin() {
            remain_secTemp = Date.now() - timeTag;
            if (remain_secTemp >= 1000) {

                timeTemp = parseInt((endingTime - Date.now()) / 1000);
                // 秒数
                remain_sec = timeTemp % 60;
                timeTemp = parseInt(timeTemp / 60);
                // 分数
                remain_minute = timeTemp % 60;
                timeTemp = parseInt(timeTemp / 60);
                // 小时数
                remain_hour = timeTemp % 24;
                timeTemp = parseInt(timeTemp / 24);

                if ((remain_minute <= 0) && (remain_sec <= 0) && (remain_hour <= 0)) {
                    callback();
                    return;
                }
                timeTag = Date.now();
            }
            if (remain_hour < 10) {
                hour = '0' + remain_hour;
            } else {
                hour = remain_hour;
            }
            if (remain_minute < 10) {
                min = '0' + remain_minute;
            } else {
                min = remain_minute;
            }
            if (remain_sec < 10) {
                sec = '0' + remain_sec;
            } else {
                sec = remain_sec;
            }
            headTime.innerText = hour + ':' + min + ':' + sec;
            window.requestAnimationFrame(begin);
        }
    }
}
export default new CountDown();
