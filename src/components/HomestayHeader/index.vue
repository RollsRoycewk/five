<template>
  <div class="header" v-if="this.header">
    <div class="header-title">
      <a href="">携程民宿</a>
      <h2>{{ this.header[0] }}{{ this.header[1] }}</h2>
    </div>
    <div class="header-nav">
      <a href="">民宿首页</a>
      <span>{{ this.header[0] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomestayHeader",
  props: ["header"],
};
</script>

<style lang="less" scoped>
.header {
  width: 1180px;
  height: 67px;
  padding: 17px 0;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  .header-title {
    a {
      display: inline-block;
      font-size: 30px;
      line-height: 38px;
      color: #0066cc;
    }
    a::after {
      content: ".";
      position: relative;
      top: -8px;
      margin-left: 5px;
      margin-right: 5px;
      display: inline-block;
      width: 30px;
      text-align: center;
      font-size: 40px;
      line-height: 30px;
    }
    h2 {
      display: inline-block;
      font-size: 30px;
      line-height: 38px;
      color: #666666;
    }
  }
  .header-nav {
    margin-top: 12px;
    font-size: 12px;
    a {
      color: #007bff;
    }
    span {
      color: #666666;
    }
    span::before {
      content: ">";
    }
  }
}
</style>
