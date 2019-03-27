import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.prototype.$http = axios

import Menu1 from './views/Menu1'
import Menu2 from './views/Menu2'

const routes = [
  {
    path: '/menu1',
    component: Menu1
  },
  {
    path: '/menu2',
    component: Menu2
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
