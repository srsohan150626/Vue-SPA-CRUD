<template>
<div>
<div class="hold-transition register-page">
 
  <div class="register-box">
  <div class="card">
    <div class="card-body register-card-body">
      <p class="login-box-msg">Register a new membership</p>

      <form @submit.prevent="signup">
        <small class="text-danger" v-if="errors.name" > {{ errors.name[0] }}</small>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Full name" v-model="form.name">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <small class="text-danger" v-if="errors.email" > {{ errors.email[0] }}</small>
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" v-model="form.email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
         <small class="text-danger" v-if="errors.password" > {{ errors.password[0] }}</small>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" v-model="form.password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Retype password" v-model="form.password_confirmation">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
      
          <!-- /.col -->
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Register</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
        <router-link to="/login" class="text-center">I already have a membership</router-link>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
<!-- /.register-box -->
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
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {},
        }
    },
    methods:{
        signup(){
            this.$axios.post('http://192.168.0.104:8088/api/auth/signup',this.form)
            .then(res => {
             this.$User.responseAfterLogin(res)
              this.$Toast.fire({
              icon: 'success',
              title: 'Your Registration is Successfull!'
              })
              this.$router.push({ name: 'products'})
            })

            .catch(error => this.errors = error.response.data.errors
              )
        }
    }
}
</script>

<style>

</style>