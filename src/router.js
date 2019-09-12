import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Male from './views/Male.vue'
import Female from './views/Female.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/female/:id/:stamps',
      name: 'female',
      component: Female
    },
    {
      path: '/male/:id/:stamps',
      name: 'male',
      component: Male
    }
  ]
})