// blog 分类的Schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: { type: String }
})
// model -> mongodb 存储到底做了什么事情？ mongoose做了
module.exports = mongoose.model('Category', schema, 'categories')