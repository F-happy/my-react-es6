/**
 * Created by fuhuixiang on 16-6-7.
 */
'use strict';

import utils from './Utils';

class AddQQ {
    constructor() {
        this.driver = utils.isDriver();
    }

    addqq() {
        let code = '';
        if (this.driver == 'android' && Utils.isDuoBao) {
            code = encodeURI('key=LaKuxCG2xgHRhhySS-oNEbzKhbvCG_JR&qq=84502921');
        } else if (this.driver == 'ios' && Utils.isDuoBao) {
            code = encodeURI('key=e5a221ca4faccc3eba94dc4391e37cfd91d05d448d240e4a086d3f029cb76aca&uin=84502921');
        } else {
            location.href = 'http://shang.qq.com/wpa/qunwpa?idkey=17c3198213b3143c197e616f82402dd42052dc2dbbf4aaa6615a811890a95eb0';
            return;
        }
        location.href = 'duobao://native/addQQGroup?' + code;
        return null;
    }
}
export default new AddQQ();
