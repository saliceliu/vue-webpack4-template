import Vue from 'vue'
import router from './router'
import App from './App'

import 'assets/css/app.styl'

// app.js
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

const axiosConfig = {
  baseURL: 'https://27017-e3ee3f23-59c0-4415-89c5-153c5ea9c859.ws-eu01.gitpod.io/api'
}
Vue.prototype.$axios = axios.create(axiosConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
