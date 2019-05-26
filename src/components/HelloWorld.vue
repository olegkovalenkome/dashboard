<template lang='pug'>
  #about
    h1 {{ msg }}
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>

@import '../global-styles/colors.styl'
@import '../global-styles/typography.styl'

</style>
