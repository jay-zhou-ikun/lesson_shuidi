const mongoose = require('mongoose'), //数据库驱动
    Schema = mongoose.Schema;
// 数据结构 
const articleSchema = new Schema({
    title: String,
    date: Date,
    content: String
});
const linkSchema = new Schema({
    name: String,
    href: String,
    newPage: Boolean
})
const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    emailCode: String,
    createdTime: Number,
    articles: [articleSchema],
    links: [linkSchema]
})

// //对数据库物理层 对象抽象  ORM    对象 数据库结构的映射
// // 操作数据库更容易 
const User = mongoose.model('User', userSchema); 
// 最耗性能的  IO开销的
mongoose.connect('mongodb://192.168.31.128:27017/test');
let db = mongoose.connection;
db.on('error', function() {
    console.log('数据库连接失败');
});
db.once('open', function() {
    console.log('db oppned');
});

//  model  mvc
// new USer({
//     name: '周末',
//     password: '000000',
//     email: '543882743@qq.com',
//     emailCode: '12345',
//     createdTime: Date.now(),
//     articles: []
// }).save(function(err) {

// });

// User.findOne({name: '周末'},
// function(err, doc) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log(doc);
// });

// User.findOne({name: '周末'}, function(err, doc) {
//     if (doc) {
//         const article = {
//             title: '小黄书',
//             date: new Date(),
//             content: '一本好书'
//         };
//         doc.articles.push(article);
//         doc.save(function(err) {
//             if (err) return console.log(err)
//             console.log('ok');
//         })
//     }
// })

User.findOne({name: '周末'},  function(err, doc) {
    if (err) {
        return console.log(err);
    } else if (doc) {
        const link = {
            name: '百度',
            href: 'www.baidu.com',
            newPage: true
        }
        doc.links = [];
        doc.links.push(link);
        doc.save(function(err) {
            if (err) return console.log(err);
            console.log('ok', doc);
        })
    }
})