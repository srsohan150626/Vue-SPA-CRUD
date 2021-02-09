<template>
    <div>
        
    </div>
</template>

<script>
export default {
    created(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.$Toast.fire({
              icon: 'success',
              title: 'You are Sign out!'
              })

      this.$router.push({ name: 'login'})
    }
}
</script>

<style>

</style>