<template>
  <div>
    <div v-for="pic in picList" :key="pic.id">
      <img v-lazy="pic.picUrl" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import vueLazyLoad from 'vue-lazyload';
// import Vue from 'vue';
// Vue.use(vueLazyLoad);

export default {
  name: "Test",
  data() {
    return {
      picList: [],
      flag: true,
    };
  },
  watch: {
    scroll() {
      console.log(10);
    },
  },
  methods: {
    getList() {
      axios
        .get("http://8.129.66.189:3000/personalized?limit=5")
        .then((result) => {
          if (this.picList.length === 0) {
            this.picList = result.data.result;
          } else {
            this.picList.push(...result.data.result);
          }
          this.flag = true;
        });
    },
  },
  mounted() {
    this.getList();
    document.onscroll = () => {
      const { clientHeight, offsetHeight } = document.documentElement;
      console.log(offsetHeight - clientHeight - window.pageYOffset);
      if (offsetHeight - clientHeight - window.pageYOffset === 0 && this.flag) {
        this.flag = false;
        this.getList();
      }
    };
  },
};
</script>

<style lang="less" scoped>
img  {
  width: 200px;
  height: 200px;
}
</style>



