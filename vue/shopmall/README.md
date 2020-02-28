- 组件延迟加载
    考点， 性能优化， 首页不需要加载那么多组件 返回引入组件的函数吧
- alias
    vue 相对地址查找的时候 复杂的项目 架构， 目录结构有一定的意义  
    alias 来自于webpack build 配置, 
    @   src 
    ~   src/asserts
    api src/api   接口
    &   src/components/common
    build/webpack.config.js
    alias: 加一个

- 仿应用.... 
    难点， 讲出来，  githubpage  gh-pages
    能力   vue 全家桶, 写出来 vue  电商项目
    难点,  
    /goodsDetail  大的  一个组件就好长， 不便于维护 
    分成几个组件父子组件
    目录  components/goodsDetail  目录 
    componenets/ 层级关系没有 
    build gh-phage  上线 
    