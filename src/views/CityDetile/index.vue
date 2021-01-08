<template>
  <div class="cityContainer">
    <!-- 头部标题和导航 -->
    <!-- <div class="header">
      <div class="header-title">
        <a href="">携程民宿</a>
        <h2>上海民宿精选</h2>
      </div>
      <div class="header-nav">
        <a href="">民宿首页</a>
        <span>上海民宿</span>
      </div>
    </div> -->
    <HomestayHeader :header="this.cityList.highLights" />
    <!-- 时间赛选部分 -->
    <div class="detaSearch">
      <div class="innhome-search">
        <div class="search-site">
          <i></i>
          <input type="text" placeholder="城市目的地" />
        </div>
        <div class="search-time">
          <i></i>
          <div class="block">
            <el-date-picker
              class="picker"
              type="daterange"
              range-separator="1"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="search-detail">
          <i></i>
          <input type="text" placeholder="关键字/位置/民宿名" />
        </div>
        <div class="search-submit">搜索民宿</div>
      </div>
    </div>
    <!-- CategoryList -->
    <CategoryList />
    <!-- DetileList -->
    <DetileList :cityList="this.cityList.data" />
    <!-- 分页器 -->
    <div class="pagination">
      <div class="com">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          prev-text="上一页"
          next-text="下一页"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import HomestayHeader from "@components/HomestayHeader";
import CategoryList from "@views/CityDetile/CategoryList";
import DetileList from "@views/CityDetile/DetileList";
import { resBjDelicacyCity } from "../../api/minsu";

export default {
  name: "CityDetile",
  components: {
    CategoryList,
    DetileList,
    HomestayHeader,
  },
  data() {
    return {
      cityList: [],
    };
  },
  methods: {
    async getcityList() {
      let city;
      if (this.$route.query.city === "北京") {
        city = "bjDelicacyCity";
      }
      if (this.$route.query.city === "深圳") {
        city = "szDelicacyCity";
      }
      let result = await resBjDelicacyCity(city);
      this.cityList = result[0];
    },
  },
  mounted() {
    this.getcityList();
  },
};
</script>

<style lang="less" scoped>
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.cityContainer {
  width: 1200px;
  height: 2000px;
  margin: 0 auto;
  padding: 0 10px;
  // 头部样式
  // .header {
  //   width: 1180px;
  //   height: 67px;
  //   padding: 17px 0;
  //   margin-bottom: 40px;
  //   font-weight: 400;
  //   line-height: 1.5;
  //   color: #212529;
  //   text-align: left;
  //   .header-title {
  //     a {
  //       display: inline-block;
  //       font-size: 30px;
  //       line-height: 38px;
  //       color: #0066cc;
  //     }
  //     a::after {
  //       content: ".";
  //       position: absolute;
  //       top: 5px;
  //     }
  //     h2 {
  //       display: inline-block;
  //       font-size: 30px;
  //       line-height: 38px;
  //       color: #666666;
  //     }
  //   }
  //   .header-nav {
  //     margin-top: 12px;
  //     font-size: 12px;
  //     a {
  //       color: #007bff;
  //     }
  //     span {
  //       color: #666666;
  //     }
  //     span::before {
  //       content: ">";
  //     }
  //   }
  // }
  // 时间赛选部分
  .detaSearch {
    height: 60px;
    background: #d0dfe7;
    padding: 10px 20px;
    .innhome-search {
      display: flex;
      line-height: 40px;
      position: absolute;
      left: 250px;
      top: 118px;
      background-color: #fff;
      .search-site {
        width: 200px;
        height: 40px;
        padding-left: 56px;
        i {
          position: absolute;
          left: 20px;
          top: 7px;
          font-size: 20px;
          background-image: url(//pic.c-ctrip.com/h5/bnb/pci/i01.v1.png?v=3);
          background-size: 480px 412px;
          background-repeat: no-repeat;
          background-position: -452px -136px;
          width: 28px;
          height: 28px;
        }
        input {
          width: 194px;
          height: 40px;
          border: 0;
          margin-bottom: 1px;
        }
      }
      .search-time {
        width: 460px;
        height: 40px;
        padding-left: 56px;
        i {
          position: absolute;
          left: 220px;
          top: 7px;
          font-size: 20px;
          background-image: url(//pic.c-ctrip.com/h5/bnb/pci/i01.v1.png?v=3);
          background-size: 480px 412px;
          background-repeat: no-repeat;
          background-position: -452px -248px;
          width: 28px;
          height: 28px;
        }
        .picker {
          width: 360px;
          font-size: 18px;
          .el-range-separator {
            width: 100px;
          }
        }
      }
      .search-detail {
        height: 40px;
        i {
          position: absolute;
          left: 630px;
          font-size: 20px;
          background-image: url(//pic.c-ctrip.com/h5/bnb/pci/i01.v1.png?v=3);
          background-size: 480px 412px;
          background-repeat: no-repeat;
          background-position: -452px -214px;
          width: 28px;
          height: 28px;
          top: 7px;
        }
        input {
          height: 40px;
          border: 0;
        }
      }
      .search-submit {
        margin-left: 10px;
        font-size: 16px;
        width: 140px;
        line-height: 40px;
        background-image: linear-gradient(-90deg, #ff8440 2%, #ff6a50 100%);
        color: #fff;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .pagination {
    .com {
      width: 700px;
      margin-left: 370px;
    }
  }
}
</style>
<style lang="less">
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6a50;
  color: #fff;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  margin: 0 5px;
  background-color: #ffffff;
  border: 1px solid #999;
  min-width: 30px;
  border-radius: 2px;
}
</style>
