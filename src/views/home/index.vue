<template>
  <div>
    <Header></Header>
    <Strategy></Strategy>
  </div>
</template>

<script>
import Header from "@components/Header";
import Strategy from "@views/strategy";
export default {
  name: "Home",
  components: {
    Strategy,
    Header,
  },
};
</script>

<style>
</style>