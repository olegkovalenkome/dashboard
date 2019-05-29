/* eslint-disable */
<template lang='pug'>
  #signin
    .container(:class="{'light-bakcground' : !isDarkMode, 'dark-bakcground' : isDarkMode}")
        RequestAccount
        .login
            img(src='@/assets/DCHQ.svg', v-show='isDarkMode')
            img(src='@/assets/DCHQ-dark.svg', v-show='!isDarkMode')
            h4(:class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}") Sign into Design+Code HQ 
            input(type='email', placeholder='Email', :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}")
            input(type='password', placeholder='Password', :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}")
            button Sign In
            router-link(to='/recover', :class="{'light-a' : isDarkMode, 'dark-a' : !isDarkMode}") Forgot password?
            ThemeSwitch
</template>

<script>
import { returnStatement } from "babel-types";
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
