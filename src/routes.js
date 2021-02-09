//auth component

import register from './components/auth/register.vue';
import login from './components/auth/login.vue';
import logout from './components/auth/logout.vue';

//product component
import products from './components/products/index.vue';
import addproduct from './components/products/create.vue';
import editproduct from './components/products/edit.vue';


  export const routes = [
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: 'register',
        path: '/register',
        component: register
    },
    {
        name: 'logout',
        path: '/logout',
        component: logout
    },
    {
      name: 'products',
      path: '/products',
      component: products
  },
    {
      name: 'addproduct',
      path: '/addproduct',
      component: addproduct
  },
  {
    name: 'editproduct',
    path: '/editproduct',
    component: editproduct
},
  ];