import Vue from 'vue'
import App from './App.vue'
import ikunui from '../packages'
Vue.use(ikunui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
