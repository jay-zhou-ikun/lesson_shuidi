# react ts
一周后， 徐琪等同学的简历 阿里
react + ts 是必问的 

webpack-dev-server webpack 编译 同时  启动live-server  http服务
start dev 
webpack 编译 nginx docker 阿里云 build  node

1. --inline --hot 
    热更新 让我们的页面做到 局部更新 不用丢失组件状态 MVVM 
    vue mounted data 
2. hash 是什么
    文件版本， app.dasdjkjashdk.js demo.asdasdjlaj.[hash].css
    静态文件会缓存， app.[hash].js?123213123    old  更新下本地缓存  new  
3. babelrc  presets env modules 干嘛？
4. entry 多入口作用是?
    entry 从某个文件 require import webpack __require__   
    单点入口  组织起来一个依赖关系  业务经常改变  hash需要
    通知客户端更新
    把几个月， 也许永远不更新的文件作为独立的入口， 
    entyr 可以有多个打包的入口吗？为什么？
    vendor 库  vue.js  vuex  vue-router
    提升了编译速度， 同时保障及改善了用户的浏览体验， 利用缓存