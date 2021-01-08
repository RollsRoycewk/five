<template>
  <div class="detileItemContainer">
    <!-- 头部 -->
    <HomestayHeader />
    <!-- 民宿标签 -->
    <div class="homestayTitle clearfix">
      <div class="left">
        <p>雅阁】迪士尼15分钟车程/整套复式公寓</p>
        <div class="label">
          <div>闪订</div>
          <div>闪订</div>
          <div>闪订</div>
        </div>
        <p><i class="el-icon-location-outline"></i> 川沙新镇 S2(沪芦高速)</p>
      </div>
      <div class="right">
        <p>￥278<s>￥278</s></p>
        <p>5.0 超棒</p>
      </div>
    </div>
    <!-- 名宿图片轮播图 -->
    <div class="homestaySwiper">
      <div class="bigImg">
        <img
          :src="imgPath ? imgPath : this.$route.query.city.imageUrl"
          alt=""
        />
      </div>
      <div class="swiperImg">
        <!-- Swiper -->
        <div class="swiper-father">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                @click="handleClickImg(swi.imageUrl, swi[0])"
                v-for="swi in swiperList"
                :key="swi.id"
              >
                <img :src="swi.imageUrl" alt="" />
              </div>
            </div>

            <!-- Add Pagination -->
            <!-- <div class="swiper-pagination"></div> -->
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <!-- 住房规则、评论 -->
    <div class="homestayRule">
      <div class="active">房屋详情</div>
      <div>房屋点评(</div>
      <div>入住须知</div>
      <div>退订规则</div>
    </div>
    <!-- 评论区 -->
    <RemarkOn />
    <!-- 右側绝对定位 -->
    <div class="fandonTop"></div>
    <div class="fandonBotton">
      <div class="images">
        <img src="./images/i01-0202.png" alt="" />
      </div>
      <div>婧玲</div>
      <div>个人房东</div>
    </div>
  </div>
</template>

<script>
import { swiperItem } from "../../api/minsu";
import RemarkOn from "./RemarkOn";
import HomestayHeader from "@components/HomestayHeader";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "DetileItem",
  data() {
    return {
      swiperList: [],
      imgPath: "",
    };
  },
  components: {
    HomestayHeader,
    RemarkOn,
  },
  methods: {
    handleClickImg(url) {
      this.imgPath = url;
    },
    handleSwiper() {
      var swiper = new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  async mounted() {
    let result = await swiperItem(`${this.$route.query.id}`);
    this.swiperList = result[0].data;
  },
  watch: {
    swiperList() {
      this.$nextTick(() => {
        this.handleSwiper();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.detileItemContainer {
  width: 1200px;
  height: 2000px;
  padding: 0 10px;
  margin: 0 auto;
  //   <!-- 民宿标签 -->
  .homestayTitle {
    padding-top: 13px;
    padding-bottom: 17px;
    .left {
      float: left;
      p:nth-of-type(1) {
        font-size: 28px;
        color: #3c3c3c;
        padding-bottom: 7px;
        font-weight: 700;
      }
      p:nth-of-type(2) {
        font-size: 14px;
        color: #999;
        margin-top: 14.5px;
        display: inline-block;
      }
      .label {
        display: flex;
        div {
          font-size: 12px;
          color: #617888;
          margin: 1px 4px;
          background: #edf4f8;
          border-radius: 2px;
          min-width: 50px;
          text-align: center;
        }
      }
    }
    .right {
      float: right;
      font-size: 30px;
      color: #ff6a50;
      font-weight: 700;
      s {
        font-size: 16px;
        color: #999;
        margin-left: 8px;
      }
      p:nth-of-type(2) {
        font-size: 16px;
        color: #2dbeb0;
        font-weight: 700;
      }
    }
  }
  // 名宿图片轮播图
  .homestaySwiper {
    position: relative;
    width: 860px;
    height: 537px;
    .bigImg {
      width: 716px;
      height: 537px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .swiperImg {
      position: absolute;
      top: 0;
      right: 0;

      .swiper-wrapper {
        width: 136px;
        height: 538px;
        .swiper-slide {
          width: 136px;
          height: 102px;
          // margin-top: -17px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .homestayRule {
    padding-top: 18px;
    padding-bottom: 28px;
    div {
      display: inline-block;
      padding: 8.5px 12px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
    div:nth-of-type(n + 2) {
      margin-left: 8px;
    }
    .active {
      color: #ff6a50;
      border-bottom: 1px solid #ff6a50;
    }
  }
  .fandonTop {
    width: 260px;
    height: 163px;
    border: 2px solid #dddddd;
    position: fixed;
    right: 230px;
    top: 200px;
  }
  .fandonBotton {
    width: 260px;
    height: 163px;
    border: 2px solid #dddddd;
    position: fixed;
    right: 230px;
    top: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .images {
      margin-top: 10px;
    }
    div {
      margin-bottom: 15px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  // swiper箭头
  .swiper-button-prev {
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    top: -524px;
    height: 30px;
    width: 100%;
    left: 0px;
  }
  .swiper-button-next {
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    left: 0px;
    width: 100%;
    height: 30px;
    top: -8px;
  }
  .swiper-button-next:after,
  .swiper-container-rtl .swiper-button-prev:after {
    content: "next";
    font-size: 18px;
    width: 16px;
    height: 20px;
    transform: rotate(90deg);
  }
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    content: "prev";
    font-size: 18px;
    width: 16px;
    height: 20px;
    transform: rotate(90deg);
  }
}
</style>
<style lang="less">
</style>
