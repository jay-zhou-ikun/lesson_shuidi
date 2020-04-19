// 在base config 之后插上babel 处理
// webpack-chain 
// 曾经有一次我手搭起 工作流程

module.exports = (config, resolve) => {

    // babel 的 js 化
    // webpack 使用module 生产模块单元
    // 基本原则
    // ts -> js -> env js 

    const baseRule = config.module.rule('js').test(/.js|.ts$/);
    const babelPath = resolve('babel.js') // .babelrc的原因
    // console.log(babelPath, '+++++++++++++++++++++++')
    const babelConf = require(babelPath); //  js
    // babel js 灵魂对对碰的时候
    // console.log(babelConf,'-----------------');
    // 理解
    const version = require(resolve('node_modules/@babel/core/package.json')).version; // 得到 babel 的版本
    // console.log(version, '+++++++');
    
    return () => {
        console.log(babelConf({ version }), 'babelConf--------');
        baseRule
        .use('babel') // 开启 babel
        // 将 js 文件
        .loader(require.resolve('babel-loader')) // 加载 babel-loader
        .options(babelConf({
          version
        })) // 运行函数拿到 bebel 的配置项 -> JSON Object
    }
  }