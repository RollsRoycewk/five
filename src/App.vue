<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {
    this.$message.success("你好啊");
  },
};
</script>

<style>
</style>
