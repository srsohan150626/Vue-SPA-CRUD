<template>
  <div>
      <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
    
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12 mt-2">
            <div class="info-box">
              <span class="info-box-icon bg-warning"><i class="far fa-copy"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Total Products</span>
                <span class="info-box-number">{{ productsCount }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
    
        </div>
        <!-- /.row -->

       
      </div>
    </section>
  </div>
</template>

<script>
    export default {
    created(){
        if(!User.loggedIn()) {
        this.$router.push({name : '/'})
        }
      this.allProducts()
        
    },
    data(){
      return {
        products :[],
      }
    },
    methods:{
      allProducts(){
      axios.get('/api/products')
        .then(({data})  => (this.products = data))
    }
    },
    computed: {
      productsCount () {
        return Object.keys(this.products).length 
    }

    }
  }
</script>
