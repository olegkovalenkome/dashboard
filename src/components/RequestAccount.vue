<template lang="pug">
    transition(name="slide-in-right", enter-active-class="animated slideInRight")
        .request(:class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}", v-if="show") Don't have an account?&nbsp
            router-link(to='/request') Request an account
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="stylus" scoped>
.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: black;
  }
}
</style>