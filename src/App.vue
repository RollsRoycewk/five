<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Home from "@views/home";

export default {
  name: "app",
  components: {
    Home,
  },
  mounted() {
    this.$message.success("你好啊");
  },
};
</script>

<style>
</style>
