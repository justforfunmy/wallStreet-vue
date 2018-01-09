// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style.css'
import './assets/animate.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
Vue.use(MintUI)

import VueDND from 'awe-dnd'
Vue.use(VueDND)

Vue.config.productionTip = false
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
