<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "@/style/element-ui-motify.styl";
export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="stylus" scoped>
#app {
  overflow-y: hidden;
}
</style>

