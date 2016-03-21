/**
 * express server main
 * @authors fuhuixiang
 * @date    2016-02-25
 * @version 0.0.1
 */

'use strict';

const express = require('express'),
      app     = express();

app.use(express.static('build'));

//app.get('/', (req, res)=>{
//    res.send('hello world');
//});

const server = app.listen(8080, ()=>{

    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
