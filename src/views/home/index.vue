<template>
  <div>
    <button @click="toTour">toTour</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    toTour() {
      this.$router.push("/tour");
    }
  }
};
</script>

<style>
</style>