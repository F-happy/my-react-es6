/**
 * Created by fuhuixiang on 16-8-1.
 */
'use strict';
class Toast {
    constructor() {
        this.toast = document.createElement('div');
        this.timeOut = 0;
    }

    render(message = '欢迎来到许愿夺宝') {
        this.toast.innerHTML = `<section class="message-box">${message}</section>`;
        this.toast.className = 'toast-view toast-anim-down';
        document.body.appendChild(this.toast);
    }

    print(msg){
        this.render(msg);
        this.timeOut = setTimeout(()=>{
            window.clearTimeout(this.timeOut);
            document.body.removeChild(this.toast);
        }, 1500);
    }
}
export default new Toast();
