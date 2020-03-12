// 卖什么？
// vuex 大型应用
// 物流独立开来？ 京东  2019 
// 武汉仓库， 南昌仓库

// vue 页面 店， 前台 
// 数据驱动 {{ }}
// 仓库 vuex
//backend :3000/api/products
// 假数据
const _products = [
    {"id": 1, "title": "iPad4 Mini", "price": 500.01, 
    "inventory":2}, //根据设计稿
    {"id": 2, "title": " H&M", "price": 10.91, 
    "inventory":12},
    {"id": 3, "title": " charli xcx -cd", "price": 19.99, 
    "inventory":2}
];
// :8080/ proxyTable
export default {
    // backend 
    getProducts(cb) {
        // 模拟ajax过程
        // console.log(cb)
        setTimeout(() => cb(_products)
        , 1000)
        // return new Promise((resolve, reject) => {

        // })
        console.log('+++++++')
    }
}