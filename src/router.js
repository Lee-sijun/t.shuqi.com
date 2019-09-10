import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import shudan from './views/shudan.vue'
import eat from './views/eat.vue'
import Detail from './views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/shudan',
      name: 'shudan',
      component: shudan
    },
    {
      path: '/eat',
      name: 'eat',
      component: eat
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
