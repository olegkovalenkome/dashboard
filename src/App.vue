<template lang='pug'>
  #app
    router-view
</template>

<style lang='stylus'>

body
  background-color: dark-blue

h1 
  heading-1(white)

p
  medium-text(white)

#app 
  font-family: system-font-family
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: white

#nav 
  padding: 30px

#nav a 
  font-weight: bold
  color: #2c3e50

#nav a.router-link-exact-active 
  color: #42b983

</style>
