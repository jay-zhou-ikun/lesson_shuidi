# 2020春招名企就业
- 三端正 vue + node + mongodb 全网最佳github 项目
    感谢大家， 感谢三元老师
    三生三世桃花开  vue 前端
    vue 面试准备课程 
    vue语法  组件化  写开源项目 ？
    面试大厂的 
    三  vue 单页应用   node 写Api    后台开发 (admin)   
    整站开发  宏观视野  全栈能力   
    32.2k  vue   应用给大家

    后台。
    element-ui  后台开发框架   iview
    1. 登录
    后台是给编辑 特效 讨好 体验
    vue false true

    transition vue 的面试初期考题 
    为了方便的加特效  
    1. 不会在DOM里出现 
    2. 子元素上会有进与出  v-if v-show 结合
    3. 四个类两个场景 动态的向子元素加类名
    4. 冯 显示 隐  transition-name-enter(一帧) -> transition-name-enter-active   子元素原来的样式  transition-name-enter未进入的样式 transition-name-enter-active  设置transtion-time all 1s
    退  在 -> 不在  transition-name-leave-active 

- 打通后台  与  node 后端

有些奇怪的地方  跨项目   
1. 用户名， 密码 node 做
    后台(user_name, password 8080 vue.config.js proxy) -> node
    (3000  model routes, controller )
    status api 开发经验 约定好数据接口
    {
        status： 1|0 ； 1用户名密码正确   0  有误
        message： '用户名和密码有误|500'
    }       url(可以变)  data(不变)  response(约定)
    mock.js    没有后端的支持的时候， 可以模拟一下数据

alias  webpack.config.js    vue-cli2.0  build
@  src/
~  assets/
作业： vue-cli3.0   配置alias

1. 代码的封装 
admin 模块化 vue export default  { }  +  import from 
main.js   es6  模块化
api require(' ') + module.exports common.js
模块化穿越了
- 为什么？  vue es6 单页应用， 前端，  babel+webpack  前卫
node 后端， 稳定为主 版本更新没那么块  common.js (原生)
- 有可能统一下吗？
    ？ 可以的  向先进的一方靠拢 

- 三个项目
    项目要上线， 服务器 是怎么一个方式
    build -> dist -> express, static
    
    ele  dist/  web/   
    ele-admin   dist/   admin/ 
    一定是在node 项目中  api 
     express static 
web 将作为项目的  /
admin  后台    /admin
api  服务  没有页面    
localhost:3000  才是所有人 (用户|编辑)  统一入口
localhost:3000/  web   前台
loclhost:3000/admin  
localhosthost:3000/api/admin/login