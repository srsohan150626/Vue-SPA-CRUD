<template>
  <div>
    <div class="hold-transition login-page">
  <div class="login-box">
  <div class="login-logo">
    <a href="#"><b>Simple CRUD</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form @submit.prevent="login" >
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" required v-model="form.email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" required v-model="form.password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
        
        </div>
        <div class="row">
              <!-- /.col -->
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <p class="mb-1">
         <router-link to="/forget" class="text-center">I forgot my password</router-link>
      </p>
      <p class="mb-0">
          <router-link to="/register" class="text-center">Register a new membership</router-link>
        </p>
        </div>
        <!-- /.login-card-body -->
    </div>
    </div>
    <!-- /.login-box -->
      </div>
  </div>
</template>

<script> 
export default {
  created(){
    if(User.loggedIn()) {
      this.$router.push({name : 'home'})
    }
  },
    data(){
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    methods:{
        login(){
            axios.post('/api/auth/login',this.form)
            .then(res => {
              User.responseAfterLogin(res)
              Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
              })
              this.$router.push({ name: 'home'})
            })

            .catch(error =>
             Toast.fire({
              icon: 'warning',
              title: error.response.data.error
              })
              )
        }
    }
}
</script>

<style>

</style>