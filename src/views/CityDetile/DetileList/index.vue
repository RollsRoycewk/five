<template>
  <div class="detileListComtainer">
    <div class="detileListSort clearfix">
      <div class="left">
        <div><a href="" class="active">排序优先</a></div>
        <div><a href="">好评优先</a></div>
        <div><a href="">点评数多→少</a></div>
        <div><a href="">低价优先</a></div>
        <div><a href="">高价优先</a></div>
      </div>
      <div class="right">39322套房屋符合条件</div>
    </div>
    <div class="detileLists">
      <div
        class="detileListsItem"
        v-for="(city, index) in cityList"
        :key="index"
        @click="handleHistory(city, city.id)"
      >
        <div class="detileImg">
          <img :src="city.imageUrl" alt="" />
        </div>
        <div class="describe">
          <p>另需清洁费¥9/套</p>
          <p>{{ city.address }}</p>
          <p>
            <span>5.0</span>
            <span>/111条点评</span>
            <span>1室4人2床</span>
            <span>近迪士尼地铁站</span>
          </p>
          <p>${{ city.price }}<span>额外费用</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { addHistory } from "../../../api/minsu";

export default {
  name: "DetileList",
  props: ["cityList"],
  data() {
    return {};
  },
  methods: {
    async handleHistory(city, id) {
      console.log(id);
      this.$router.push({
        path: "/detileItem",
        query: {
          city: city,
          id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.detileListSort {
  margin: 18px 0;
  padding: 0 20px;
  font-size: 14px;
  line-height: 1.5;
  .left {
    display: flex;
    float: left;
    div {
      padding: 8.5px 12px;
      a {
        color: #666;
      }
    }
    .active {
      color: #ff6a50;
      font-weight: 700;
    }
  }
  .right {
    margin-top: 10px;
    float: right;
  }
}
.detileLists {
  width: 1170px;
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detileListsItem {
    width: 360px;
    height: 410px;
    .detileImg {
      height: 270px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .describe {
      p:nth-of-type(1) {
        font-weight: 700;
        float: right;
        font-size: 14px;
        color: #ff6a50;
      }
      p:nth-of-type(2) {
        font-size: 20px;
        line-height: 1.5;
        margin-top: 9px;
        color: #3c3c3c;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 360px;
      }
      p:nth-of-type(3) {
        margin-top: 3.5px;
        span:nth-of-type(1) {
          color: #2dbeb0;
          font-weight: 700;
        }
        span:nth-of-type(n + 2) {
          font-size: 14px;
          line-height: 1.5;
          margin-top: 3.5px;
          color: #3f3f3f;
        }
        span:nth-of-type(2)::after,
        span:nth-of-type(3)::after {
          content: ".";
          position: relative;
          top: -5px;
          margin-left: 4px;
          margin-right: 4px;
        }
      }
      p:nth-of-type(4) {
        font-size: 24px;
        color: #ff6a50;
        font-weight: 700;
        span {
          font-size: 12px;
          color: cornflowerblue;
        }
        span::after {
          content: "";
          display: inline-block;
          position: relative;
          right: -4px;
          top: 2px;
          background-image: url(//pic.c-ctrip.com/h5/bnb/pci/i02.v1.png?v2);
          background-size: 233px 228px;
          background-repeat: no-repeat;
          background-position: -50px -146px;
          width: 14px;
          height: 14px;
        }
      }
      p:nth-of-type(n + 2) {
        clear: both;
      }
    }
  }
}
</style>
