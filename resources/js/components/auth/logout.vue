<template>

</template>

<script>
export default {
    created(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        Toast.fire({
            type: 'info',
            title: 'Successfully Log Out!'
        })
    this.$router.push({ name: '/'})
    }
}
</script>

<style>

</style>