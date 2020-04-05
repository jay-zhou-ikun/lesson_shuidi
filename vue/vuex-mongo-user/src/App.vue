<template>
  <div id="app">
    <select @change="queryTag">
      <option value="">请选择</option>
      <option value="poem">诗歌</option>
      <option value="coding">编程</option>
      <option value="music">音乐</option>
    </select>
    <!-- <div v-for="(user,index) in $store.state.users" :key="index"> -->
       <div v-for="(user,index) in getUsers" :key="index">
      {{user.name}} {{user.id}}
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex';
// 从本地借 map 要什么都可以 $store.state  读操作
export default {
  name: 'App',
  // 自己做主 跟别的组件不搭嘎  私有
  // 兄弟， 没有任何关系 数据就不一致
  data() {
    return {
      //组件 做不了主， 数据驱动界面 template 
      // 不利于数据的管理 请了财务
      // vuex 两部分  UI  用户界面工程师 地方 申请
      //  数据流管理 vuex  中央  发放
      //用户列表
      /* users: [
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
       ] */
    }
  },
  // 中央数据的到来
  computed: {
    ...mapGetters(['getUsers'])
  },

  components: {
    // HelloWorld
  },
  methods: {
    // 抽象一点 UI
    ...mapActions(['fetchUsers', 'queryTag']),
    // queryTag(evt) {
    //   // mapActions 有需要
    //   let tag = evt.target.value;
    //   console.log(tag, 'component');
    // }
    // queryTag() {
    //   this.$store.dispatch('queryTag', evt)
    // }
    //根据tag, 把相应的用户找出来，
    // 1. tag change value
    // 2. users computed mapGetters
    //   action  api   发出新的请求   vuex  store 
    // 3. api/
    // 3. node router   /tag/:tag 回流api
    // queryTag() {

    // }
  },
  mounted() {
    this.fetchUsers();
    // ajax 两层  TCP 三次握手安全
    // 派发动作
    this.$store.dispatch('fetchUsers')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
