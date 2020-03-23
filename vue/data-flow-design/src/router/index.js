import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Goods from '../views/Goods'
import GoodsDetail from '../views/GoodsDetail'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'goods',
        component: Goods
      },
      {
        path: 'goodsDetails',
        component: GoodsDetail
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: press.env.BASE_URL,
  routes
})
// 路由钩子
router.beforeEach(function(to, from, next) {
  console.log('路由在变化')
  console.log(to, from)
  next();
})

export default router
