## 前端工作流  fe workflow  webpack 

- webpack 配置看坤哥的文章， 凯凯文章
    6个知识点
    二线面试需求
- webpack 又学 架构
    1. 源头 package.json
    webpack 不直接出厂？  架构， dev build
    cross-env  服务器无差别环境变量配置  node  npm 都用哪些？
    并行同时考虑工作流架构
    将编译工作(工作流) 通过目录 开发架构的一项
    2. webpack 重要性
    写代码， 养孩子是一样的 每天运营项目，
    改了一点点， webpack build
    3. base.js  同时服侍 dev.js  build.js
    模块化  把基础配置做好   向外输出
    4. webpack 其他的module及插件处理呢？
        config.js
    5. lib 把module 放在config 目录 一个文件一件事
      findSync 所有的js 文件 组成一个数组输出出来
    6. 可拔插的webpack 
    打包器 
    - babel
        js ts
    - css 压缩 stylus -> css
        postcss?
    - htmltemplate

    webpack 通过module 将编译的事务 可拔插的load 进相应的模块进行处理
    webpack + 其他模块的生态链， 占据了工作流的生态位
    webpack module 配置模块
    在每个模块之中有配置的流程
    1. test  /.js$/
    2. loader
    3. 配置项
    webpack-chain js
    ts 和 js 是一家的，ts 是 js 超集， 不用学就可以用了， 用的感觉
    ts 有类型声明的js  降低js 出错率
    