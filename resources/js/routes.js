//auth component
let login= require('./components/auth/login.vue').default;
let register= require('./components/auth/register.vue').default;
let forget= require('./components/auth/forget.vue').default;
let logout= require('./components/auth/logout.vue').default;

let home= require('./components/home.vue').default;

//products component
let products_add= require('./components/products/create.vue').default;
let products= require('./components/products/index.vue').default;
let product_edit= require('./components/products/edit.vue').default;

export const routes = [
    { path: '/', component: login , name:'/'},
    { path: '/register', component: register },
    { path: '/forget', component: forget },
    { path: '/home', component: home , name:'home' },
    { path: '/logout', component: logout , name:'logout' },

    { path: '/add-products', component: products_add , name:'products_add' },
    { path: '/products', component: products , name:'products' },
    { path: '/edit-product/:id', component: product_edit , name:'edit-product' },
  ]