
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import router 
import {routes} from './routes' 

//import User Helper class
import User from './Helpers/User'
window.User = User

//sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal

//Notification
import Notification from './Helpers/Notification'
window.Notification = Notification


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

window.Toast = Toast

Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

const router = new VueRouter({
    routes ,
    mode: 'history'
  })

const app = new Vue({
    el: '#app',
    router
});
