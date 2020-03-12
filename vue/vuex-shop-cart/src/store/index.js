// 数据管理的地方部门
import Vue from 'vue';
import Vuex from 'vuex'; // 请财务
// import Api from '@/api/shop.js';
Vue.use(Vuex);
// 11 
// const products = [];
// Api.getProducts((products) => {
//   // console.log(_products);
//   products = _products;
// })
export default new Vuex.Store({
  state: { //data  react redux
    products: [
      {"id": 1, "title": "iPad4 Mini", "price": 500.01, 
    "inventory":2},
    {"id": 1, "title": "iPad4 Mini", "price": 500.01, 
    "inventory":2},
    {"id": 1, "title": "iPad4 Mini", "price": 500.01, 
    "inventory":2}
    ]
  },//data
  // products: products,
  // getters: {

  // }
})