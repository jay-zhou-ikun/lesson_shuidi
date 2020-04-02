- es6 node babel loader  
- 前端生产工艺  CI CD 
- src 开发目录 
   入口文件  main.js 
   煮火锅， 挺香的
   webpack  bundle 
- js 与其他类型的文件并不是水火不相容的
   1. 文本 
   2. { } 

- webpack 如何让js 理解css
- webpack4  devDependencies
- webpack 用到哪些依赖呢？
- webpack 登场 bundler
   静态资源 css js styl png gif 
   1. cross-env NODE_ENV = development
      可以屏蔽windows linux mac 的环境变量设置差异
   2. 最小执行单元
      entry output mode 
      webpack webpack.config.js 配置，
   3. rimraf 删除目录 
   4. loader
   webpack 工厂流水线
   工人， 不能理解的文件css  .styl .vue
   loader 能理解的地方, 去处理
   .vue js component 
- loader 概念通过 css-loader!
   !加loader
- bundle.js 编译后的代码 分析一下
   1. bundle 是一个立即执行函数
   将所有的模块main.js 入口文件， buex, store, router, APP.vue
   .....vue  element-ui css
   函数有优势 第一行， 执行到最后一行
   webpack 形参每个模块， 作为对象注入
   
   css 通过 css-loader! js css in js!!!
   []
   静态资源通过字符串来达到认同
   - bundle.js webpack 打包生成的代码
      立即执行函数，
      将入口， 分析出来的依赖， 做成一个json 传给
      bundle 函数去执行
      main.js 他依赖于 index.css 
      先做
      main.js 依赖的文件名作为key: 内容作为value
      webpack 大型工程， 首先解决的是模块间 的依赖
      main.js a
      index.css b
      index.css import base.css c
      entry a
      c -> b -> a
      文件依赖关系组成一个json object
      __webpack_require__是require 的升级版