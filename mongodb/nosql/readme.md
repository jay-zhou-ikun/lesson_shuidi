- NOSQL
  mysql 是关系型数据库， 
  database->table->fields
  NOSQL 不需要写sql 
  JSON object {} .save()
  find({})
  碎片化的， 结构性并不是和良好的数据存储
  Mongodb  云开发数据库就是线上版的Mongodb

-     mysql                        mongodb
  关系型数据库                  nosql  facebook  文档型
   show databases;              show dbs;
                     use db;
    tables                       collections;
    sql                           js  语法的面向对象API

- 连接mongodb 
  url  mongodb://
- db.createCollection('site'， function(err, res) {
    // err 出错
    // 异步的， 耗时的， 
    js里执行的代码不会阻塞，
    db.close();
})
    代码顺序 
    1.  createCollection
    2. db.close()  在外面
    执行顺序 
    1. create  ->  去到mongodb -> create   -> 回来跟我说
    2. 接着往后执行 

- 数据库， 后端开发框架
  express 
  node, 后端就是app
  app.get('/', （req, res) => res.send('hello world'))   //定义路由
  app.listen(3000, )
