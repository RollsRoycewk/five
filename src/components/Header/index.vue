<template>
  <div class="headerContainer">
    <!-- 头部 -->
    <div class="header">
      <div class="content">
        <div class="left">
          <span>让旅游更幸福</span>
          <div>语言</div>
        </div>
        <div class="right">
          <span>您好，请登录</span>
          <ul>
            <li>
              <span>免费注册</span>
            </li>
            <li>
              <span>消息</span>
            </li>
            <li>
              <span @click="toPersonal">我的携程</span>
            </li>
            <li>
              <span>我的订单</span>
            </li>
            <li>
              <span>客服中心</span>
            </li>
          </ul>
          <span>手机</span>
          <span>微信</span>
        </div>
      </div>
    </div>
    <!-- 搜索栏 -->
    <div class="searchContainer">
      <div class="left">
        <div class="logoContainer">
          <router-link to="/" class="logo" href=""></router-link>
        </div>
        <div class="search">
          <input
            v-model="searchMessage"
            type="text"
            placeholder="搜索旅行地/酒店/旅游/景点门票/交通"
          />
          <button></button>
          <div
            class="showResult"
            v-show="searchResult.length !== 0 && searchMessage"
          >
            <a
              v-for="(item, index) in searchResult"
              :key="index"
              class="showItem"
              :url="item.url ? item.url : '#'"
              >{{ item.word }}</a
            >
          </div>
        </div>
      </div>
      <div class="phone">境内：95010</div>
    </div>
    <!-- 导航栏 -->
    <div class="nav">
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/hotel">酒店</a></li>
        <li><router-link to="/tour">旅游</router-link></li>
        <li><a href="#">跟团游</a></li>
        <li><a href="#">自由行</a></li>
        <li><a href="#">机票</a></li>
        <li><a href="#">火车</a></li>
        <li><a href="#">汽车·船</a></li>
        <li><a href="#">用车</a></li>
        <li><a href="#">门票</a></li>
        <li><router-link to="/strategy">攻略</router-link></li>
        <li><a href="#">全球购</a></li>
        <li><a href="#">礼品卡</a></li>
        <li><a href="#">商旅</a></li>
        <li><a href="#">邮轮</a></li>
        <li><a href="#">目的地</a></li>
        <li><a href="#">金融</a></li>
        <li><a href="#">更多</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      searchMessage: "",
      searchResult: [],
    };
  },
  watch: {
    searchMessage() {
      axios
        .get(
          `https://m.ctrip.com/restapi/h5api/globalsearch/search?action=online&source=globalonline&keyword=${this.searchMessage}`
        )
        .then((result) => {
          this.searchResult = result.data.data;
        });
    },
  },
  methods: {
    toPersonal() {
      this.$router.push("/personal");
    },
  },
};
</script>

<style lang="less">
html {
  position: relative;
}
// 头
.headerContainer .header {
  background-color: #f4f4f4;
  width: 100%;
  height: 36px;
  .content {
    font-size: 12px;
    width: 1180px;
    line-height: 36px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      span {
        margin: 0 10px;
      }
    }
    .right {
      display: flex;
      span {
        padding: 0 20px;
      }

      ul {
        display: flex;
        li {
          span {
            border-right: 1px solid black;
          }
        }
      }
    }
  }
}
// 搜索
.searchContainer {
  width: 1180px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: inline-flex;
    align-items: center;
    .logoContainer {
      width: 203px;
      height: 34px;
      margin-right: 80px;
      .logo {
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url(../../assets/logo.png);
        background-size: 100% 100%;
      }
    }
    .search {
      position: relative;
      input {
        width: 350px;
        height: 30px;
        border-radius: 5px 0 0 5px;
        border: 1px solid #2577e3;
        border-right: 0;
      }
      button {
        height: 30px;
        width: 40px;
        border: 1px solid #2577e3;
        background: url(https://pic.c-ctrip.com/platform/online/home/un_header_footer20160610.png)
          50px 0px #2577e3 no-repeat;
        border-radius: 0 5px 5px 0;
      }
      .showResult {
        position: absolute;
        z-index: 100;
        width: 350px;
        border: 1px solid #333;
        background-color: #fff;
        .showItem {
          display: block;
          line-height: 30px;
          padding: 5px 20px 5px 34px;
        }
      }
    }
  }
}
// 导航栏
.nav {
  position: sticky;
  top: 10px;
  width: 100%;
  height: 40px;
  min-width: 1180px;
  background-color: #2577e3;
  ul {
    width: 1180px;
    line-height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      color: white;
    }
  }
}
</style>
