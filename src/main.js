import Vue from 'vue'
//import axios from './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem_scaler'


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
