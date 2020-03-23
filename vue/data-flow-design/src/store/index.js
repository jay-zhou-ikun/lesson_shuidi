import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //rootState
    login: false, //是否登录了
    userInfo: null, // 头像 昵称
    products: {},
    cartList: [] //购物车 vuex 小型应用

    //下单页面， 发表评论， vue-router
    // user,
    // cart,
    // products
  },
  mutations: {
  },
  actions: {
  },
  // modules: {
  //   cart
  // }
})
