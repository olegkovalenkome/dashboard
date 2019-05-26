<template lang='pug'>
  #signin
    .container(:class="{'light-bakcground' : !isDarkMode, 'dark-bakcground' : isDarkMode}")
        .request(:class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}") Don't have an account?&nbsp
            router-link(to='/request') Request an account
        .login
            img(src='@/assets/DCHQ.svg', v-show='isDarkMode')
            img(src='@/assets/DCHQ-dark.svg', v-show='!isDarkMode')
            h4(:class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}") Sign into Design+Code HQ 
            input(type='email', placeholder='Email', :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}")
            input(type='password', placeholder='Password', :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}")
            button Sign In
            router-link(to='/recover', :class="{'light-a' : isDarkMode, 'dark-a' : !isDarkMode}") Forgot password?
            button(@click='toggleDarkMode') Toggle
</template>

<script>

export default {
  name: "signin",
  components: {
    
  },
  data() {
      return {
        isDarkMode: true
      } 
  },
  methods: {
      toggleDarkMode() {

          this.isDarkMode = !this.isDarkMode
          document.body.style.background = this.isDarkMode ? '#212c4f' : '#f0f3f5'
      }
  }
};
</script>

<style lang="stylus" scoped>

.light-background
    background-color light-gray

.dark-background
    background-color dark-blue

.light-text
    color white 

.dark-text
    color black

.light-field
    background: rgba(255, 255, 255, 0.2)
    border 1px solid rgba(255, 255, 255, 0.2)
    color white

    &::placeholder
        color rgba(255, 255, 255, 0.3)

.dark-field
    background: rgba(198, 208, 235, 0.2)
    border 1px solid rgba(0, 0, 0, 0.2)
    color black

    &::placeholder
        color rgba(0, 0, 0, 0.3)

.container
    display flex
    justify-content center
    align-items center

    min-height 100vh

.login
    width 400px

.request
    position absolute
    top 40px
    right 40px

.light-request
    color rgba(255, 255, 255, 0.3)
    a 
        color white
    
.dark-request
    color rgba(0, 0, 0, 0.3)
    a 
        color black

h4
    margin 0
    font-size: 24px;
    line-height: 34px;
    text-align center
    color white

input 
    background: rgba(255, 255, 255, 0.2)
    border 1px solid rgba(255, 255, 255, 0.2)
    box-sizing border-box
    border-radius 4px

    height 60px
    width 100%

    font-size 20px
    color white

    padding 20px
    margin-top 20px

    &::placeholder
        color rgba(255, 255, 255, 0.3)

button 
    background: #56CCF2;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border none

    height 60px
    width 100%

    font-size 20px
    color white

    margin-top 20px
    margin-bottom 40px

a
    font-size: 16px
    line-height: 25px
    text-align: center
    text-decoration none

.light-a
    color rgba(255, 255, 255, 0.3)
    
.dark-a
    color rgba(0, 0, 0, 0.3)
    

</style>
