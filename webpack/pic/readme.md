# webpack 打包一切静态资源， loader

css stylus png fonts postcss
不一定调的出来
webpack loader 手写

## webpack 为web  应用工作
- 入口核心文件.js 文件   放在底部加载
    dev webpack 是把工作放在内存中
    express web server dist.js static_server
1. css-loader style-loader 的区别吗？
    js 引入 css
    webpack 建立依赖关系的过程
    import require   path  extension
    ext => loader 对应的
    package.json 分析， 报错
2. use 定制性 webpack 不是用来学的， 是用来用的，
    用来修的  webpack 考点多半出自你是否会修它
    loader
    js 处理 css
    web 应用而来   style  行内样式  <style></style>
    css 文件   引入 <link>
    css-loader  为css 后缀解析， 以及css 内的@import 外部资源
    style-loader 样式插入到dom中
- pic 有web 应用的需要， webpack为之奋斗
    base64 何时启动 减少了请求的数量
    js 体积暴增  上限