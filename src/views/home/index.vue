<template>
  <div>
    <Header></Header>
    <Strategy></Strategy>
    <button @click="toTour">toTour</button>
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
  methods: {
    toTour() {
      this.$router.push("/tour");
    },
  },
};
</script>

<style>
</style>