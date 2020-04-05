import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index'

Vue.use(Vuex)
// 单一状态树 单一？  树？
export default new Vuex.Store({
  state: {
    users: [
      {
        "address": {
          "city": "Los Angeles",
          "state": 'California',
          "pincode": "123"
        },
        "tags": [
          "music",
          "blogs",
          "cricket"
        ],
        "name": "Tom Benzamin"
      },
        {
        "address": {
          "city": "赣州",
          "state": '江西',
          "pincode": "332200"
        },
        "tags": [
          "coding",
          "run",
          "swim"
        ],
        "name": "周末"
      },
        {
        "address": {
          "city": "九江",
          "state": '江西',
          "pincode": "123456"
        },
        "tags": [
          "study",
          "go hiking"
        ],
        "name": "周小米"
      },
        {
        "address": {
          "city": "南昌",
          "state": '江西',
          "pincode": "88888888"
        },
        "tags": [
          "music",
          "blogs",
          "cricket"
        ],
        "name": "周小莫"
      },
     ] 
  },
  mutations: {
    setUsers(state,payload) { //写操作  唯一地方
      state.users = payload
    }
  },
  actions: { //写入状态的第一步
    // 跟api 通信的地方
      fetchUsers(context) {
        api
        .fetchUsers((users) => {
          console.log(users);
          // 写入state,  严格一些 写一个条子 流程来
          context.commit('setUsers', users)
        })
      },
      queryTag(context, evt) {
        console.log(arguments);
        const tag = evt.target.value;
        // console.log(tag);
        api 
          .fetchUsersByTag(tag, (users) => {
            context.commit('setUsers', users)
          })
      }
  },
  getters: { // state computed 函数
    getUsers(state) { // vuex 会给getters  state 读操作
      return state.users.map((user, index) => {
        user.id = user.address.pincode + index
        return user
      })
    }
  },
  modules: {
  }
})
