import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//sweet alert
import Swal from 'sweetalert2'
Vue.prototype.$Swal= Swal

//import User Helper class
import User from './Helpers/User'
Vue.prototype.$User = User

Vue.use(VueRouter);
Vue.prototype.$axios = axios

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Vue.prototype.$Toast = Toast

//striphtml for description
Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

//import router 
import {routes} from './routes' 

import App from './App.vue'

Vue.config.productionTip = false

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
