// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './common/rem.js'
import hintPop from "./plugin/hintPop/index"
import api from "./common/api"
import 'mint-ui/lib/style.css'
//import { Swipe, SwipeItem } from 'mint-ui';
//Vue.component(Swipe.name, Swipe);
//Vue.component(SwipeItem.name, SwipeItem);

Vue.prototype.hintPop = hintPop;
Vue.prototype.API = api;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
