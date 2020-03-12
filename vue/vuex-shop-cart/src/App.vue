<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 数据晚一步考虑 -->
    <div v-for="(product, index) in products" :key="index">
      {{product.title}}
    </div>
    <!-- 数据收归中央管理 -->
    <!-- <div v-for="(product, index) in $store.state.products" :key="index">
      {{product.title}} -->
    <!-- </div> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Api from '@/api/shop.js';
// 方法， 怎么把vuex store state products
// import { mapGetters } from 'vuex';
// 怎么通过mapGetters 将products 数据流向组件

export default {
  name: 'App',
  data() {
    return {
      products: []
    }
  },
  components: {
    // HelloWorld
  },
  mounted() {
    // cb 看懂了吗？ 老套路
    Api.getProducts((_products) => {
      console.log(_products)
      this.product = _products
    });
    // console.log(this.$store, '--------')
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
