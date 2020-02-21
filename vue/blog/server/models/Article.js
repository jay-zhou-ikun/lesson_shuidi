// 建表 collection 
// 1. Schema  表设计
// 2. 模型对象  返回

const mongoose = require('mongoose')

 //是我们得以设计表的模型类
const Schema = new mongoose.Schema({
    uid: { 
        type: mongoose.SchemaTypes.ObjectId, ref: 'User'
    },
    title: { type: String },
    isTop: { type: Boolean },//置顶
    summary: { type: String }, // 列表里的介绍
    body: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}]
})

// 类 表名就叫aticles
module.exports = mongoose.model('Article', schema, 'articles');