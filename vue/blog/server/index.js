const express = require('express');
const app = express();
// 将db.js 引入？ 
// import es6 模块化    node里普遍支持es5的require
require('./db/db')(app);// 数据库的连接

//静态服务
// 后端等着你把vue 打包好的静态文件
app.use('/', express.static(__dirname + '/web'))



app.listen('3000', async(req, res) => {
    console.log('http://localhost:3000');
})


// 1. vue 写完了后 build 生成一包静态文件  indexedDB.html  app.js
// 2. 静态文件包放到服务器目录下， 阿里云服务器上node
// 3. 把vue 网站发布？ 