import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'

import './assets/js/flexble'
import '../node_modules/vant/lib/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
