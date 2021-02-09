<template>
<div>
<div>
        <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add Products Form</h1>
          </div>
          <div class="col-sm-6">
              <div class="breadcrumb float-sm-right">
                    <router-link to="products" class="btn btn-primary"> All Products</router-link>
              </div>
        
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

      <!-- Main content -->
    <section class="content ">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Product</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="productInsert" enctype="multipart/form-data">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Product Title</label>
                    <input type="text" class="form-control" placeholder="Enter Product Title" v-model="form.title">
                    <small class="text-danger" v-if="errors.title" > {{ errors.title[0] }}</small>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Product Description</label>
                           <vue-editor v-model="form.description"></vue-editor>
                          <small class="text-danger" v-if="errors.description" > {{ errors.description[0] }}</small>
                  </div>
        
                  <div class="form-group">
                    <label for="exampleInputEmail1">Product Price</label>
                    <input  class="form-control" placeholder="Enter Product price" v-model="form.price">
                    <small class="text-danger" v-if="errors.price" > {{ errors.price[0] }}</small>
                  </div>

                <div class="form-group">
                    <label for="exampleInputFile">Product Image</label>
                   <input type="file" class="form-control" @change="onImageselected">
                    <small class="text-danger" v-if="errors.image" > {{ errors.image[0] }}</small>
                    <div class="col-md-6 mt-2">
                        <img :src="form.image" style="height:80px;width: 100px;">
                    </div>
                  </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
</div>
</div>
</template>

<script>
import { VueEditor } from "vue2-editor"

export default {
 
created(){
    if(!this.$User.loggedIn()) {
      this.$router.push({name : 'login'})
    }
  },
    data(){
        return {
            form: {
                title: null,
                description: null,
                price: null,
                image: null,
            },
            errors: {},
        }
    },

    methods:{
        onImageselected(event){
            let file=event.target.files[0];
            if(file.size > 2048770  ){
                 this.$Toast.fire({
                icon: 'error',
                title: 'Image should not be greater than 2MB!!'
                })
            }else{
                let reader = new FileReader();
                reader.onload = event => {
                    this.form.image = event.target.result
                };
                reader.readAsDataURL(file);
            }
        },
        productInsert(){
            this.$axios.post('http://192.168.0.104:8088/api/products/',this.form)
            .then(() => {
                this.$router.push({ name: 'products'})
                this.$Toast.fire({
                icon: 'success',
                title: 'Products Added Successfully!!'
                })
            })
            .catch(error => this.errors = error.response.data.errors)
        },
    },
    components: {
      VueEditor
    },
}


</script>

<style>

</style>