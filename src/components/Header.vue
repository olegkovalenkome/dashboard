<template lang='pug'>
    #nav
        router-link(to='/') Home
        router-link(to='/about') About
        router-link(to='/signin') Sign In
        router-link(to='/recover') Recover
        router-link(to='/reset') Reset
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang='styl' scoped>

</style>