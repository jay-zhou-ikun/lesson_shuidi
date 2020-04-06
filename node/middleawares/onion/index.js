const Koa = require('koa');
const app = new Koa();
//中间件
app.use(async (ctx, next) => {
    console.log(1)
    await next();
    console.log(2)
});

app.use(async (ctx, next) => {
    console.log(3)
    await next();
    console.log(4)
});

app.use(async (ctx, next) => {
    console.log(5)
    await next();
    console.log(6)
});

app.listen(3000)
// 中间件 node express koa web 服务的模型
// req 中间 res 

// 1. 串联执行
// 2. next() 向后面的中间件传递 叠加使用
    // 无限可能
// 发表文章
    // session + route + bodyparser + error 
// 浏览文章
    // route + 404
// app.js index.js + nodemon
    // 全部摆到那里
// 3. 顺序
// 4. 异步 数据库 模板编译

// - 如何实现中间件的串联先后执行
// - next
// - 