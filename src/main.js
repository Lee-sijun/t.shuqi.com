import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'

import './assets/js/flexble'

import { Sticky } from 'vant'

import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.use(Sticky)


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
