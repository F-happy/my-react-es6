/**
 * Created by fuhuixiang on 2/17/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './pages/hello';
require("./../scss/index.scss");

ReactDOM.render(<Hello name="fuhuixiang" />, document.getElementById('app'));