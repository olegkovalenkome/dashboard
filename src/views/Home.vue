<template lang='pug'>
  #home
    Header
    HelloWorld(msg="Home")
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from '@/components/Header.vue';

export default {
  name: "home",
  components: {
    HelloWorld,
    Header
  }
};
</script>
