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