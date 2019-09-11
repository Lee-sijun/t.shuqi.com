import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import shudan from './views/shudan.vue'
import eat from './views/eat.vue'
import Detail from './views/Details.vue'

import Header from '../components/Header.vue'

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
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
