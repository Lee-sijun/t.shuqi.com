import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'


import './assets/js/flexble'

import axios from 'axios'
Vue.prototype.$axios = axios

import { Sticky } from 'vant'

Vue.use(Sticky)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
