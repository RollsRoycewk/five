<template>
  <div class="innhome-comtariner" @click="isDisplay = 'none'">
    <div class="con-bodyer">
      <!-- // 头部背景图和搜索功能 -->
      <div class="innhome-banner">
        <img src="./images/i01-0000.png" alt="" />
        <div class="innhome-search">
          <div class="search-site">
            <i></i>
            <input
              type="text"
              placeholder="城市目的地"
              @focus="isDisplay = 'block'"
              @click.stop=""
              v-model="cityText"
            />
            <div
              class="box"
              @click.stop="isDisplay = 'block'"
              :style="{ display: isDisplay }"
            >
              <div class="herder">
                <div
                  v-for="(ipu, index) in ipuCity"
                  :class="index === ipuIndex ? 'active' : ''"
                  :key="ipu.id"
                  @click="handleIpu(index, ipu.cityName)"
                >
                  {{ ipu.cityName }}
                </div>
              </div>
              <div class="cententIf" v-if="isBoxShow">
                <div
                  v-for="(rm, index) in rmCity"
                  :key="index"
                  @click.stop="searchText(rm)"
                >
                  {{ rm }}
                </div>
              </div>
              <div class="cententElse" v-else>
                <div
                  class="letterCity"
                  v-for="(item, index) in ABCDCity"
                  :key="index"
                >
                  <h3>{{ item.cityStart }}</h3>
                  <div
                    v-for="cityA in item.cityNameList"
                    :key="cityA.id"
                    @click.stop="searchText(cityA.cityName)"
                  >
                    {{ cityA.cityName }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="search-time">
            <i></i>
            <div class="block">
              <el-date-picker
                class="picker"
                v-model="value"
                type="daterange"
                format="yyyy-MM-dd"
                :range-separator="'共' + dayCount + '天'"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                @change="detaChange"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="search-detail">
            <i></i>
            <input type="text" placeholder="关键字/位置/民宿名" />
          </div>
          <div class="search-submit" @click="handleToCityList">搜索民宿</div>
        </div>
        <!-- <Calendar /> -->
      </div>
      <!-- 历史浏览记录 -->
      <div class="history-record">
        <div class="record-swi-out">
          <div class="record-swi">
            历史记录
            <i
              class="el-icon-caret-bottom"
              v-if="isHistoryShow"
              @click="isHistoryShow = false"
            ></i>
            <i
              class="el-icon-caret-top"
              v-else
              @click="isHistoryShow = true"
            ></i>
          </div>
        </div>
        <!-- swiper -->
        <!-- 要把箭头放在外面就得再一层swiper-father -->
        <div class="swiper-father">
          <div class="swiper-container" ref="swiper" v-show="isHistoryShow">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/202002280234264195_700_467.jpeg" alt="" />
                <div class="text">
                  <div class="tit">西城六十豪华房(大床)</div>
                  <div>
                    <span>5分</span>
                    <span>15条点评</span>
                  </div>
                  <div>￥333</div>
                </div>
              </div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              <div class="swiper-slide">Slide 4</div>
              <div class="swiper-slide">Slide 5</div>
              <div class="swiper-slide">Slide 6</div>
              <div class="swiper-slide">Slide 7</div>
              <div class="swiper-slide">Slide 8</div>
              <div class="swiper-slide">Slide 9</div>
              <div class="swiper-slide">Slide 10</div>
            </div>

            <!-- Add Pagination -->
            <!-- <div class="swiper-pagination"></div> -->
          </div>
          <div class="swiper-button-next sty"></div>
          <div class="swiper-button-prev sty"></div>
        </div>
      </div>
      <!-- 三个宣传图片 -->
      <div class="innhome-icon">
        <div class="out">
          <div class="left">
            <span class="img"></span>
            <div class="left-text">
              <p class="right-text h2">安心入住</p>
              <p class="right-text">多重保障安心住</p>
            </div>
          </div>
          <div class="left center">
            <span class="img"></span>
            <div class="left-text">
              <h2 class="right-text h2">安心入住</h2>
              <p class="right-text">多重保障安心住</p>
            </div>
          </div>
          <div class="left right">
            <span class="img"></span>
            <div class="left-text">
              <h2 class="right-text h2">安心入住</h2>
              <p class="right-text">多重保障安心住</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 选择城市 -->
      <div class="publicity">
        <div class="centent-out">
          <div class="title">热门目的地</div>
          <div class="city">
            <div class="left">
              <div @click="handleToCityDetile">
                <img src="./images/i01-0202.png" alt="" />
                <span>
                  <a href="" class="one">北京</a>
                </span>
              </div>
              <div>
                <img src="./images/i01-0202.png" alt="" />
                <span>
                  <a href="" class="one">上海</a>
                </span>
              </div>
              <div>
                <img src="./images/i01-0202.png" alt="" />
                <span>
                  <a href="" class="one">深圳</a>
                </span>
              </div>
              <div>
                <img src="./images/i01-0202.png" alt="" />
                <span>
                  <a href="" class="one">客路</a>
                </span>
              </div>
            </div>
            <div class="center">
              <img src="./images/i01-0204.png" alt="" />
              <div class="right-text">
                <a href="" class="text-title">香港</a>
                <div class="text-centent">
                  繁华是她，拥挤是她，自由也是她。是曾经辉煌的香港电影，是街上随处可见的百年老店，亦或是久负盛名的购物天堂
                </div>
              </div>
            </div>
            <div class="right">
              <img src="./images/i01-0204.png" alt="" />
              <div class="right-text">
                <a href="" class="text-title">三亚</a>
                <div class="text-centent">
                  水清沙白的海滩，枝繁叶茂的雨林，物美价廉的海鲜，享有“东方夏威夷”的美誉，是中国最著名的海滨度假胜地
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 优选PRO -->
      <div class="selected-pro">
        <div class="con">
          <div class="title">
            <div class="pro">优选<i>P</i>RO.</div>
          </div>
          <div class="nav">
            <div
              class="nav-itme"
              :class="index === cityIndex ? 'active' : ''"
              v-for="(nav, index) in navCityLists[0]"
              :key="nav.id"
              @click="handleIndex(index, nav.cityName)"
            >
              {{ nav.cityName }}
            </div>
          </div>
          <div class="centent">
            <div class="left">
              <img src="./images/i01-0100.png" alt="" />
            </div>
            <div class="right">
              <div class="swiper-father">
                <div class="swiper-container" ref="swiper">
                  <div class="swiper-wrapper" v-if="cityDetile">
                    <div
                      class="swiper-slide"
                      v-for="(city, index) in cityDetile[0]"
                      :key="index"
                    >
                      <div>
                        <img :src="city.defaultPicture" alt="" />
                      </div>
                      <div>
                        <p>{{ city.theHouseType }}·1室 1床·宜住2人</p>
                        <p>{{ city.houseName }}</p>
                        <p>￥{{ city.finalPrice }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-next swiper-pro-next"></div>
                <div class="swiper-button-prev swiper-pro-prev"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  resCityList,
  navCityList,
  resInpAllCity,
  resRmCity,
  resABCDCity,
} from "@api/minsu";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Minsu",
  data() {
    return {
      MinsuHomeList: {},
      isHistoryShow: true,
      value: [new Date(2020, 0, 6, 1), new Date(2020, 0, 7, 1)],
      cityDetile: {},
      navCityLists: {},
      cityIndex: 0,
      ipuIndex: 0,
      isDisplay: "none",
      ipuCity: [],
      rmCity: [],
      ABCDCity: [],
      isBoxShow: true,
      cityText: "北京",
      dayCount: 0,
    };
  },
  methods: {
    // swiper轮播图
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    // 跳转页面
    handleToCityDetile() {
      this.$router.push("/cityDetile");
    },
    // 发送下部导航部分的城市数据
    async getCityList(city) {
      let result = await resCityList(city);
      this.cityDetile = result;
    },
    // 切换城市，请求不同的数据
    handleIndex(index, city) {
      if (city === "上海") {
        this.getCityList("shanghai");
      }
      if (city === "北京") {
        this.getCityList("beijin");
      }
      this.cityIndex = index;
    },
    // search中切換城市显示不同数据
    handleIpu(index, style) {
      this.ipuIndex = index;
      if (style === "热门城市") {
        this.isBoxShow = true;
      }
      if (style === "ABCD") {
        this.isBoxShow = false;
      }
    },
    // search框中点击获取内容
    searchText(text) {
      this.cityText = text;
      this.isDisplay = "none";
    },
    // 日历选中时的天数是多少
    detaChange(date) {
      let dayCount = +new Date(date[1] + "") - +new Date(date[0] + "");
      this.dayCount = dayCount / 1000 / 3600 / 24;
    },
    handleToCityList() {
      console.log(this.cityText);
      console.log(111);
      this.$router.push({
        path: "/cityDetile",
        query: { city: this.cityText },
      });
    },
  },
  watch: {
    cityDetile() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  async mounted() {
    this.getCityList("beijin");
    let result = await navCityList();
    this.navCityLists = result;
    let ipuCity = await resInpAllCity();
    this.ipuCity = ipuCity[0];
    let rmCity = await resRmCity();
    this.rmCity = rmCity[0][0].allCityList;
    let ABCDCity = await resABCDCity();
    this.ABCDCity = ABCDCity[0][0].allCityList;

    // this.initSwiper(this.$refs.swiper);
    // this.initSwiper(this.$refs.swiper1);
  },
  components: {
    // Calendar,
  },
};
</script>

<style lang="less" scoped>
.innhome-comtariner {
  position: relative;
  height: 3000px;
  background-color: #f5f5f5;
}
// 头部背景图和搜索功能
.innhome-search {
  display: flex;
  line-height: 60px;
  position: absolute;
  left: 250px;
  top: 200px;
  background-color: #fff;
  .search-site {
    width: 200px;
    height: 60px;
    padding-left: 56px;
    .box {
      width: 600px;
      padding: 30px;
      height: 383px;
      background: #ffffff;
      position: relative;
      top: -1px;
      left: -56px;
      z-index: 10;
      .herder {
        display: flex;
        div {
          height: 45px;
          color: #666;
          padding: 0 14px 13px;
          // position: relative;
          cursor: pointer;
          font-size: 12px;
          width: 86px;
        }
        .active {
          border-bottom: #ff6a50 1px solid;
        }
      }
      .cententIf {
        display: flex;
        flex-wrap: wrap;
        div {
          width: 50px;
        }
      }
      .cententElse {
        .letterCity {
          display: flex;
          div {
            margin: 0 20px;
          }
          h3 {
            line-height: 60px;
            margin-right: 20px;
            color: #ff6a50;
          }
        }
      }
    }
    i {
      position: absolute;
      left: 20px;
      top: 16px;
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
      height: 60px;
      border: 0;
      margin-bottom: 1px;
    }
  }
  .search-time {
    width: 460px;
    height: 60px;
    padding-left: 56px;
    i {
      position: absolute;
      left: 220px;
      top: 16px;
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
    height: 60px;
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
      top: 16px;
    }
    input {
      height: 60px;
      border: 0;
    }
  }
  .search-submit {
    font-size: 16px;
    width: 140px;
    line-height: 60px;
    background-image: linear-gradient(-90deg, #ff8440 2%, #ff6a50 100%);
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
}
// 历史浏览记录
.history-record {
  .record-swi-out {
    padding: 34px 0;
  }
  .record-swi {
    width: 1170px;
    height: 36px;
    margin: 0 auto;
    font-size: 24px;
    font-weight: 400;
  }
  .swiper-father {
    width: 1160px;
    position: relative;
    margin-left: 190px;
  }
  .swiper-container {
    width: 1130px;
    height: 108px;
    padding: 0 30px 0px 30px;
    overflow: hidden;
    z-index: 0;
    .swiper-slide {
      display: flex;
    }
    .sty {
      color: #a0a0a0;
      font-size: 12px;
    }
    img {
      width: 108px;
      height: 108px;
    }
    .text {
      width: 143px;
      height: 73px;
      margin: 14px 20px 12px;
      .tit {
        font-size: 16px;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    div {
      margin-bottom: 5px;
    }
  }
  .swiper-slide {
    width: 288px;
    height: 108px;
    background-color: #fff;
  }
}
// swiper箭头大小
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 20px;
}
.swiper-button-prev:after {
  right: -7px;
}
.swiper-button-next:after {
  left: -7px;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: -7px;
  right: auto;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: -7px;
  left: auto;
}
// 三个广告栏
.innhome-icon {
  margin-top: 36px;
  height: 200px;
  background-color: #fff;
  .out {
    display: flex;
    align-items: center;
    width: 1200px;
    height: 200px;
    margin: 0 auto;
    padding-left: 100px;
    .left {
      display: flex;
      //   justify-content: center;
      width: 212px;
      height: 76px;
      margin: 0px 60px;
      .img {
        background-image: url(./images/i01.v1.png);
        background-size: 480px 412px;
        background-repeat: no-repeat;
        background-position: -340px -136px;
        width: 76px;
        height: 76px;
        z-index: 1;
      }
      .left-text {
        margin-left: 23px;
        position: relative;
        top: -8px;
        right: -5px;
      }
      .h2 {
        font-size: 20px;
      }
      .right-text {
        width: 112px;
      }
    }
    .center {
      .img {
        background-size: 480px 412px;
        background-repeat: no-repeat;
        background-position: -340px -214px;
        width: 76px;
        height: 76px;
      }
    }
    .right {
      .img {
        background-size: 480px 412px;
        background-repeat: no-repeat;
        background-position: -340px -58px;
        width: 76px;
        height: 76px;
      }
    }
  }
}
// 选中城市
.publicity {
  height: 676px;
  background-color: #f5f5f5;
  .centent-out {
    width: 1200px;
    height: 474px;
    margin: 0 auto;
    .title {
      font-weight: 400px;
      font-size: 36px;
      //   height: 54px;
      line-height: 54px;
      text-align: center;
      padding: 60px 0;
    }
    .city {
      display: flex;
      height: 470px;
      justify-content: space-between;
      .left {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 470px;
        height: 470px;
        span {
          position: absolute;
        }
        a {
          position: relative;
        }
        .one {
          left: -181px;
          top: 192px;
          z-index: 2;
          color: #fff;
        }

        img {
          width: 205px;
          height: 205px;
          margin: 30px 0 0 30px;
        }
      }
      .center {
        width: 330px;
        height: 440px;
        margin-top: 30px;
      }
      .right {
        width: 330px;
        height: 440px;
        margin-top: 30px;
      }
      .right-text {
        position: relative;
        top: -94px;
        left: 7px;
        .text-title {
          font-size: 20px;
          color: #fff;
        }
        .text-centent {
          font-size: 12px;
          color: #fff;
          width: 290px;
          height: 48px;
        }
      }
    }
  }
}
// 优选PRO
.selected-pro {
  height: 676px;
  background-color: white;
  .con {
    width: 1200px;
    margin: 0 auto;
    .title {
      padding: 60px 0 20px 0;
      .pro {
        font-size: 36px;
        text-align: center;
        i {
          color: red;
        }
      }
    }
    .nav {
      height: 43px;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      .nav-itme {
        font-size: 16px;
        color: #666;
        min-width: 48px;
        text-align: center;
        line-height: 24px;
        padding: 10px 8px 9px;
        margin-left: 20px;
      }
      .active {
        font-size: 900;
        border-bottom: 2px solid red;
      }
    }
    .centent {
      display: flex;
      height: 388px;
      justify-content: space-between;
      left {
        width: 249px;
      }
      .right {
        height: 100%;
        .swiper-father {
          width: 910px;
          position: relative;
          .swiper-container {
            width: 800px;
          }
        }

        .swiper-slide {
          width: 260px;
          height: 362px;
          .border::before {
            content: "";
            border-left: solid 1px red;
            margin: 0px 2px;
            // .swiper-pro-prev {
            //   left: 100px;
            // }
          }
          div {
            p:nth-of-type(1) {
              padding-top: 10px;
              font-size: 14px;
              color: #8d3134;
            }
            p:nth-of-type(2) {
              font-size: 18px;
              line-height: 26px;
              color: #3c3c3c;
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 2;
              white-space: normal;
              min-height: 52px;
              margin-top: 5px;
            }
            p:nth-of-type(3) {
              font-size: 20px;
              line-height: 32px;
              color: #ff6a50;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.el-date-editor .el-range-separator {
  padding: 0 5px;
  line-height: 32px;
  width: 15%;
  color: #303133;
  font-size: 12px;
}
</style>
