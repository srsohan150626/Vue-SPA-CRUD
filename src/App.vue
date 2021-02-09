<template>
   <div id="app" class="container">
        <nav class="navbar navbar-expand-sm bg-light" v-show="$route.path === '/login' 
  || $route.path === '/register'  ? false :true ">
      <ul class="navbar-nav">
        <li class="nav-item pull-right">
          <router-link :to="{ name: 'logout' }" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>       
    </div>
</template>

<script>

export default {
  created(){
     if(!this.$User.loggedIn()) {
      this.$router.push({name : 'login'})
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>