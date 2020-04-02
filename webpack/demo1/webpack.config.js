// console.log(process.env.NODE_ENV)
// 1. 开发的时候， vue-clientInformation, webpack 内存中编译
// 2. 上线时， 压缩， 优化， 代码分离
const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist'); //删除目录的 编译之前先删除已有的目录

// 链式webpack 配置
const Config = require('webpack-chain'); //写webpack 配置的新方案
const config = new Config(); //实例化
const resolve = (src) => {
    // console.log(path.join(process.cwd(), src), '_______')
    return path.join(process.cwd(), src)
}
config
    .entry('./src/index')
    .add(resolve('./src/index.js'))
    .end()
    .set('mode', process.env.NODE_ENV)
    .output
    .path(resolve('dist'))
    .filename('[name].bundle.js') // entry main.js  name main  bundle.js

config.module
    .rule('css')
    .test(/\.css$/)
    .use('css')
    .loader('css-loader!')
module.export = config.toConfig();


// module.exports = {
//     entry: './src/main', //入口文件 index.css loader
//     mode: process.env.NODE_ENV, // 以什么模式 deveploment production
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }