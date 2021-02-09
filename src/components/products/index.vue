<template>
    <div>
        <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>All Products</h1>
          </div>
          <div class="col-sm-6">
              <div class="breadcrumb float-sm-right">
                    <router-link to="/addproduct" class="btn btn-primary"> Add Products</router-link>
              </div>
        
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content">
      
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Listing of All Products</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <label for="search">Search</label>
                <input type="text" v-model="searchKey" class="form-control float-right mb-2" style="width:300px" placeholder="search by product Title"> <br>
                <table class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product Title</th>
                    <th>Product Image</th>
                    <th>Product Price</th>
                    <th>Product Description</th>
                    <th>Action</th>
                  
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="product in filtersearch" :key="product.id">
                    <td>{{ product.id }}</td>
                    
                    <td>{{ product.title }}</td> 
                    <td><img v-bind:src="`${backendServer}/${product.image}`" id="pro_img"></td>
                    <td>{{ product.price }}</td>
                    <td> {{ product.description | striphtml }}</td>
                    <td>
                       <router-link :to="{name: 'editproduct', params:{id: product.id}}" class="btn btn-warning">Edit</router-link> &nbsp;
                      <a @click="deleteProduct(product.id)" class="btn btn-danger">Delete</a>
                    </td>
                  </tr>
                    
                  </tbody>
           
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
    </section>

    </div>
</template>
<script>
export default {
    created(){
    if(!this.$User.loggedIn()) {
      this.$router.push({name : '/'})
    }
    this.allProducts()
  },
    data(){
      return {
        products :[],
        searchKey:''
      }
    },
     computed:{
        filtersearch(){
            return this.products.filter(product => {
                return product.title.match(this.searchKey)
            })
        },
        backendServer () {
        let url= 'http://192.168.0.104:8088'
        return url;
        }
    },
    methods:{
      allProducts(){
        this.$http.get('api/products')
        .then(({data})  => (this.products = data))
      },
      deleteProduct(id){
        this.$Swal.fire({
        title: 'Are you sure?',
        text : "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if(result.value) {
            this.$http.delete('api/products/'+id)
            .then(()=>{
                this.products = this.products.filter(product =>{
                    return product.id !=id
                })
            })
            .catch(()=>{
                this.$router.push({name: 'products'})
            })
            this.$Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
        })
      }
    },
     
}
</script>
<style>
  #pro_img{
    height: 50px;
    width: 60px;
  }
</style>