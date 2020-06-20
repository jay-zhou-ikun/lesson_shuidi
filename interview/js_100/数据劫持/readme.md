vue 的响应式原理中 object.defineProperty 有什么缺陷？


- proxy 代理整个对象  defineProperty 每个属性单独代理 需要去遍历去递归
- 在vue 2.0 中， defineProperty 并没有对 数组提供完全的数据劫持
    有一个前端性能的坑 n empty object 数组
    push pop 常用的方法  

1. object.defineProperty 无法监控到数组下标的变化(Vue对push 常用操作支持， defineProperty)  不能实时响应
2. Object.defineProperty 只能劫持对象的属性， proxy 可以代理(劫持) 整个对象， 并返回一个新的对象
3. Proxy不仅可以代理对象， 还可以代理数组

- vue 2.0 数组没用支持下标变化，  push pop ?
