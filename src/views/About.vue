<template lang='pug'>
  #about
    Header
    HelloWorld(msg="About")
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from '@/components/Header.vue';

export default {
  name: "about",
  components: {
    HelloWorld,
    Header
  }
};
</script>
