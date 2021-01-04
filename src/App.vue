<template>
  <div id="app">
    <!-- <Home msg="Welcome to Your Vue.js App" /> -->
    <Hotel />
  </div>
</template>

<script>
// import Home from "@views/home";
import Hotel from "@views/hotel";

export default {
  name: "app",
  components: {
    // Home,
    Hotel,
  },
  mounted() {
    this.$message.success("你好啊");
  },
};
</script>

<style>
</style>
