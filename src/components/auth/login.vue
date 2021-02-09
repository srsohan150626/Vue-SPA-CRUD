<template>
  <div>
    <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg mb-2">Sign in to start your session</p>
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
              <label for="remember" class="ml-2">
                  Remember Me
              </label>
            </div>
          </div>
        
        </div>
          <div class="row">
          <div class="col-6">
           <router-link :to="{ name: 'register' }" class="text-center">Register a new membership</router-link>
          </div>
        
        </div>
        <div class="row mt-2" style="margin-left: 40%;">
              <!-- /.col -->
          <div class="col-3 ">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
    </div>
  </div>
</template>

<script> 
export default {
  created(){
   if(this.$User.loggedIn()) {
      this.$router.push({name : 'products'})
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
            this.$axios.post('http://192.168.0.104:8088/api/auth/login/',this.form)
            .then(res => {
             this.$User.responseAfterLogin(res)
             this.$Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
              })
                // this.s("You are Sign Out!")
              this.$router.push({ name: 'products'})
            })

           .catch(error =>
             this.$Toast.fire({
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