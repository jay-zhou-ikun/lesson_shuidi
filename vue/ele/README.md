# vue 31k的超人气项目， 

1. 入手  快速入手的视野
2. 注意细节 vue 大型项目的细节点执行

- rem
  css 相对单位
  html fontSize 所有项目自适应
  vue 单页应用中， 你怎么去做rem 适配， 不能写死， 16rem = 100%(动态宽度的1;00%)
  16 栅格系统  8:8 6:10  4:4:4
  html fontSize 计算  
  引入一个rem 生成框架   阿里 flexible？ 
- 设计组件 header 组件
  1. head 组件 css
  common.styl  reset
  mixin.styl   css  模块化， 功能化， 封装成 mixin 
  2. 满足各种需求的组件， head 
  3. slot 让组件更能八面玲珑 适应各种场景