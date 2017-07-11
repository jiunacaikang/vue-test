// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/rem.js'
import hintPop from "./plugin/hintPop/index"
import api from "./common/api"
console.log(hintPop)
Vue.prototype.hintPop = hintPop;
Vue.prototype.API = api;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
