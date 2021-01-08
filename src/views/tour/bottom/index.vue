<template>
  <div class="Bottom">
    <div class="index_bottom">
      <!-- 底部图片广告 -->
      <ul class="zone_wrap">
        <li>
          <div class="box">
            <div class="boxImg">
              <div class="text">
                <span>广告</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="boxImg">
              <div class="text">
                <span>广告</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="boxImg">
              <div class="text">
                <span>广告</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="boxImg">
              <div class="text">
                <span>广告</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="bottom_seo">
        <dl>
          <p>
            携程旅游为您提供以下索引:
            <a target="_blank" href="https://vacations.ctrip.com/tours">境内旅游城市</a>
            <a target="_blank" href="https://vacations.ctrip.com/tours">出境旅游城市</a>
            <a target="_blank" href="https://pages.ctrip.com/public/sitemap/dj.html">旅游索引</a>
          </p>
        </dl>
        <dl>
          <dt>热门省份旅游</dt>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
        </dl>
        <dl>
          <dt>热门目的地旅游</dt>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
        </dl>
        <dl>
          <dt>热门国家旅游</dt>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
        </dl>
        <dl>
          <dt>热门出境城市旅游</dt>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
          <dd>
            <a href="javascript:;">云南</a>
          </dd>
          <dd>
            <a href="javascript:;">海南</a>
          </dd>
          <dd>
            <a href="javascript:;">西藏</a>
          </dd>
        </dl>
        <dl>
          <p>
            友情链接:
            <a target="_blank" href="https://vacations.ctrip.com/tours">酒店大全</a>
            <a target="_blank" href="https://vacations.ctrip.com/tours">出境旅游城市</a>
            <a target="_blank" href="https://pages.ctrip.com/public/sitemap/dj.html">旅游索引</a>
          </p>
        </dl>
      </div>
      <ul class="side_function">
        <li>
          <a class="QRcode" href="javascript:;">
            <i></i>
            扫码领券
          </a>
          <div class="img_qr">
            <div class="content_qr">
              <img
                class="qr_bg"
                src="http://pic.c-ctrip.com/VacationOnlinePic/vacation_v2/detail/erweima11.png"
              />
              <p class="qr_img">
                <img
                  src="http://pic.c-ctrip.com/VacationOnlinePic/vacation_v2/detail/erweima22.png"
                />
              </p>
              <p class="qr_text">扫码关注领券</p>
              <p class="qr_text">
                最高立减
                <span class="qr_price">900</span>
                元
              </p>
            </div>
          </div>
        </li>
        <li v-if="flag" @click="toTop">
          <a class="top" href="javascript:;">
            <i class="to_top"></i>
            回到顶部
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {
      flag: false,
      scrollTop: ""
    };
  },
  methods: {
    handleScroll() {
      let h = document.documentElement;
      this.scrollTop =
        window.pageYOffset || (h && h.scrollTop) || document.body.scrollTop;
      if (this.scrollTop > 500) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    // 回到顶部
    toTop() {
      /* let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16); */
      document.documentElement.scrollTop = scrollTo(0,0)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
.Bottom {
  width: 100%;
  margin: 0 auto;
  background-color: #fafafa;
  margin-top: 30px;
  border-top: 1px solid #f0f3f5;
}
.index_bottom {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  .zone_wrap {
    padding-bottom: 30px;
    li {
      float: left;
      width: 266px;
      height: 130px;
      margin-right: 32px;
      position: relative;
      .box {
        width: 100%;
        height: 100%;
        background-image: url("https://dimg04.c-ctrip.com/images/zg0w15000000yq0fg71F8.jpg");
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .text {
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgb(0, 0, 0);
          opacity: 0.3;
          z-index: 20;
          border-radius: 0 8px 0 0;
          width: 32px;
          span {
            opacity: 0.9;
            color: rgb(255, 255, 255);
          }
        }
      }
    }
    &::after {
      content: " ";
      display: block;
      clear: both;
    }
  }
  .bottom_seo {
    border-top: 1px solid #eee;
    padding: 10px 0;
    dl {
      padding: 15px 0;
      p {
        color: #aaa;
      }
      a {
        color: #aaa;
        margin-right: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
      dd {
        float: left;
      }
    }
  }
  .side_function {
    position: fixed;
    bottom: 15%;
    right: 0;
    z-index: 99;
    li {
      position: relative;
      width: 61px;
      height: 62px;
      &:hover .img_qr {
        display: block;
      }
      .QRcode {
        width: 60px;
        height: 60px;
        text-align: center;
        background: #fff;
        border: 1px solid #ececec;
        color: #999;
        display: block;
        font-size: 12px;
        i {
          background-image: url("http://pic.c-ctrip.com/VacationOnlinePic/vacation_v2/searchresult/qr01.png");
          background-repeat: no-repeat;
          background-position: 0 0;
          width: 32px;
          height: 32px;
          display: block;
          margin: 6px auto 2px;
        }
      }
      .img_qr {
        position: absolute;
        right: 55px;
        top: -50px;
        display: block;
        width: 173px;
        height: 266px;
        display: none;
        .content_qr {
          position: relative;
          width: 173px;
          height: 266px;
          .qr_bg {
            position: absolute;
            width: 173px;
            height: 266px;
            top: 0;
            left: 0;
          }
          .qr_img {
            position: relative;
            padding: 83px 0 13px 0;
            z-index: 2;
            text-align: center;
          }
          .qr_text {
            text-align: center;
            font-size: 16px;
            color: #fff;
            z-index: 2;
            position: relative;
          }
          .qr_price {
            font-size: 20px;
            color: #fff64a;
          }
        }
      }
    }
    .top {
      width: 60px;
      height: 60px;
      text-align: center;
      background: #fff;
      border: 1px solid #ececec;
      color: #999;
      display: block;
      font-size: 12px;
      .to_top {
        background-image: url("http://pic.c-ctrip.com/VacationOnlinePic/vacation_v2/detail/revision_sidebar.png?20180620.png");
        background-repeat: no-repeat;
        background-position: -151px 0;
        width: 31px;
        height: 32px;
        display: block;
        margin: 6px auto 2px;
      }
    }
  }
}
</style>
