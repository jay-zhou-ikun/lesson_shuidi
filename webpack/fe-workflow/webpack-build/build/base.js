const { findSync } = require('../lib');
const Config = require('webpack-chain'); // 配置
const config = new Config(); //配置实例
const path = require('path');
const resolve = src => {
    return path.join(process.cwd(), src)
}
const files = findSync('config');
console.log(files, '++++++')

module.exports = () => {
    // console.log('在这里做基本配置吧');

    // config
    //     .entry('app')
    //     .add(resolve('src/main.js'))
    //     .end()
    //     .set('mode', process.env.NODE_ENV)
    //     .output.path(resolve('dist'))
    //     .filename('[name].bundle.js');

    // files 都 webapck config 化？
    // 可拔插
    const map = new Map(); //es6 Map  json 区别  key 不限类型
    // 重新组织files
    files.map(file => {
        const name = file.split('/').pop().replace('js', '');
        // console.log(name, '------') 
        // path babelLoader.js require 引入  闭包函数
        // console.log(require(file).toString(), '|||||||');
        return map.set(name, require(file)(config, resolve));
    })
    // console.log(map, 'map--------')
    // webpack modules 
    // 分模块配置就上去了
    map.forEach(v=> v()) // 运行了配置

    return config;
}