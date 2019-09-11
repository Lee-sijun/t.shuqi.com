import Vue from 'vue'
import Router from 'vue-router'
import Paihang from '../views/Paihang.vue'

import Details from '../views/Details.vue'
import Xiazai from '../views/Xiazai.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/paihang',
      name: 'paihang',
      component: Paihang
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/xiazai',
      name: 'xiazai',
      component: Xiazai
    }
  ]
})
