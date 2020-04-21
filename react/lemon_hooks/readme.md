react + ts + hooks
react + redux + react-router   react hooks 带来了
很大的改变
1. sourcemap
2. --inline
3. polyfill
4. css 处理
5. ract 新特性带来的fragment

react/vue 开发， /dist 目录 给后端， 或自己docker nginx 服务代理

js 的责任 babel  补丁
yarn add @babel/cli @babel/core @babel/preset-env @babel/polyfill -D
fill 填充， poly 一些特性
es6 + 789   低端浏览器可以被支持的呢？ 
两部分的功劳  1. babel-preset-env + babel-core 降级处理
const let var ()=> {}  function() {}
2. polyfill 会把一些无法降级  Promise  Array map reduce
手工实现一下  垫片 ,  手动的添加了script  src = polyfill.js
浏览器从不具备这个功能  到拥有了
    if (typeof Object.create !== "function") { }
    在实现polyfill 做判断， 不是要给所有的浏览器都做同样的打补丁
    打补丁之前 先判断下浏览器是否拥有此功能
    polyfill.js 打包到 bundle.js 之中， babel  preset  target

inline hot 区别
webpack-dev-server --mode development --line --hot --open
inline hot 都是改变后 刷新内容   inline 强制刷新， 弊端是mvvm 状态会丢失
hot hmr hot module reload  不会丢失状态  
 --line --hot  如果是hmr部分有更新 hot  
如果不是hmr 部分， inline 强制刷新 

css 
    1. style -> .css 输出
    2. 编译时 css 压缩
    3. 如何调试刚刚的bug p color
    定位p color 错误， style 代码很多, 你也忘了他在哪里
    webpack 帮我们定位错误 点一下就能跳到错误所在行