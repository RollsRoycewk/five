<template>
  <div class="aouter" @click="hadelblur">
    <img
      class="aouter-img"
      src="http://dimg02.c-ctrip.com/images/10031e000001fq0hcB1E3.jpg_.webp"
      alt=""
    />
    <div class="seach">
      <em class="seach-em">订酒店.用携程.</em>
      <div class="seach-div">
        <div class="seach-list">
          <div class="seach-place" @click="chuanghadel">
            <label for="hotels">目的地/酒店名称</label>
            <input
              type="text"
              autocomplete="off"
              placeholder="城市、机场、区域、地标或酒店名称"
              id="hotels"
              @blur="isShow = false"
              ref="focus"
              @focus="isShow = true"
            />
            <div class="seach-city" v-show="isShow">
              <div class="seach-hot">
                <h4>国内热门城市</h4>
                <ul class="city">
                  <li>北京</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>重庆</li>
                  <li>大连</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>天津</li>
                  <li>重庆</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="seach-day">
            <div
              class="left"
              data-left="left1"
              ref="left"
              @click="calendarShow"
            >
              <label data-left="left1" for="hotels-destination">入住时间</label>
              <h4 data-left="left1">2月11日(周四)</h4>
            </div>
            <p class="day-center">1晚</p>
            <div
              class="right"
              data-right="right1"
              ref="right"
              @click="calendarShow"
            >
              <label for="hotels-destination" data-right="right1"
                >退房时间</label
              >
              <h4 data-right="right1">2月11日(周四)</h4>
            </div>
            <div
              class="seach-date"
              @click.stop="calendarReveal"
              v-show="calendar"
            >
              <Calendar />
            </div>
          </div>
          <div class="seach-number" data-number="number1" @click="destination">
            <div>
              <label for="hotels-destination">住房及住客</label>
              <h4>1间，1位</h4>
            </div>
            <span class="iconfont icon-jiantoushang" v-if="hotels"></span>
            <span class="iconfont icon-ai-arrow-down" v-else></span>
            <div
              class="seach-number-room"
              @click.stop="destinationRoom"
              v-if="hotels"
            >
              <ul>
                <li>
                  <i>房间</i>
                  <div><span>—</span> <i>1</i> <b>十</b></div>
                </li>
                <li>
                  <div>
                    <i>成人</i>
                    <label>18岁及以上</label>
                  </div>
                  <div><span>—</span> <i>1</i> <b>十</b></div>
                </li>
                <li>
                  <div>
                    <i>儿童</i>
                    <label>0-17岁</label>
                  </div>
                  <div><span>—</span> <i>1</i> <b>十</b></div>
                </li>
              </ul>
              <a>确定</a>
            </div>
          </div>
          <div class="seach-keyword" @click="chuangFocus">
            <label for="keyword"> 关键词（选填）</label>
            <form autocomplete="off">
              <input
                type="text"
                autocomplete="new-password"
                placeholder="机场、火车站、酒店名称或区域"
                ref="Focus"
              />
            </form>
          </div>
          <div class="search-search">
            <p class="iconfont icon-sousuo1"></p>
          </div>
        </div>
        <div class="seach-star">
          <ul ref="star">
            <li class="seach-star-li">星级</li>
            <li>
              <i>≤</i>
              <i>2</i>
              <i class="iconfont icon-ai64"></i>
            </li>
            <li>
              <i>3</i>
              <i class="iconfont icon-ai64"></i>
            </li>
            <li>
              <i>4</i>
              <i class="iconfont icon-ai64"></i>
            </li>
            <li>
              <i>5</i>
              <i class="iconfont icon-ai64"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <el-carousel
      height="200px"
      class="slideshow"
      :interval="2500"
      autoplay
      arrow="never"
      loop
    >
      <el-carousel-item name="day1">
        <img
          src="https://dimg04.c-ctrip.com/images/0zg3a120008cebajbAB24.jpg"
          alt=""
        />
      </el-carousel-item>
      <el-carousel-item name="day2">
        <img
          src="https://dimg04.c-ctrip.com/images/0zg31120008cpatit1D8A.jpg"
          alt=""
        />
      </el-carousel-item>
      <el-carousel-item name="day3">
        <img
          src="https://dimg04.c-ctrip.com/images/0zg3a120008cebajbAB24.jpg"
          alt=""
        />
      </el-carousel-item>
      <el-carousel-item name="day4">
        <img
          src="https://dimg04.c-ctrip.com/images/0zg31120008cpatit1D8A.jpg"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
    <div class="service">
      <h3>酒店业务服务升级</h3>
      <ul>
        <li>
          <span class="iconfont icon-service"></span>
          <p class="desc">确认后变更，最高赔付首晚房费的3倍</p>
        </li>
        <li>
          <span class="iconfont icon-kongbaiye"></span>
          <p class="desc">确认后变更，最高赔付首晚房费的3倍</p>
        </li>
        <li>
          <span class="iconfont icon-chuang"></span>
          <p class="desc">确认后变更，最高赔付首晚房费的3倍</p>
        </li>
      </ul>
    </div>
    <p class="more">更多<i>&gt;</i></p>
    <div class="scenic-spot">
      <div class="scenic-list" v-for="index in 3" :key="index">
        <div class="list-title">
          <div class="list-title-img">
            <img
              src="http://pic.c-ctrip.com/htlpic/flagship/store/accor/logoform-s62_v2.png"
              alt=""
            />
            <div class="list-title-h4">
              <h4>雅高酒店官方旗舰店</h4>
              <span>官方</span>
            </div>
          </div>
          <p>进入店铺</p>
        </div>
        <img
          class="scenic-list-img"
          src="https://pic.c-ctrip.com/htlpic/flagship/store/accor/banner_accor_572_144_v2.png"
          alt=""
        />
      </div>
    </div>
    <div class="recommend">
      <h4>酒店推荐</h4>
      <div class="recommend-btn">
        <button><span>上海</span></button>
        <button><span>北京</span></button>
        <button><span>广州</span></button>
        <button><span>上海</span></button>
        <button><span>北京</span></button>
        <button><span>广州</span></button>
        <button><span>上海</span></button>
        <button class="recommend-btn-iconfont" @click="recommendBtn">
          <i class="iconfont icon-jiantoushang"></i>
          <ul class="recommend-btn-list" v-if="recommend">
            <li>上海</li>
            <li>北京</li>
            <li>广州</li>
            <li>上海</li>
            <li>北京</li>
            <li>广州</li>
            <li>上海</li>
            <li>北京</li>
            <li>广州</li>
            <li>上海</li>
            <li>北京</li>
            <li>广州</li>
            <li>上海</li>
            <li>北京</li>
            <li>广州</li>
            <li>上海</li>
            <li>北京</li>
            <li>广州</li>
          </ul>
        </button>
      </div>
      <div class="recommend-flex">
        <div class="recommend-introducer" v-for="index in 4" :key="index">
          <img
            src="https://dimg04.c-ctrip.com/images/200n1e000001fncozACA2_R_300_225_R5_Q70_D.jpg"
            alt=""
          />
          <div class="recommend-introducer-list">
            <strong>上海虹桥枢纽国展中心亚朵酒店</strong>
            <p class="recommend-introducer-iconfont">
              <i class="iconfont icon-zuanshi"></i>
              <i class="iconfont icon-zuanshi"></i>
              <i class="iconfont icon-zuanshi"></i>
            </p>
            <p class="recommend-introducer-comment">
              <span>4.8<i>/5</i></span
              ><a>棒</a>
              <b> 5439点评</b>
            </p>
            <strong class="recommend-introducer-money"> ￥502 </strong>
          </div>
        </div>
      </div>
    </div>
    <div class="official">
      <div class="official-website">
        <h4>携程酒店官网提供酒店预订及价格查询</h4>
        <p>
          携程酒店官网为您提供国内1300个城市酒店预订及价格查询，包括全球200多个国家，5万个城市的酒店预订服务，国内外超过25万家的酒店、宾馆、旅社、客栈、经济连锁、酒店公寓、青年旅社等住宿信息，覆盖酒店图片、房间照片、酒店电话、酒店地址以及真实用户的酒店点评等。网上预订携程神秘特价酒店，还可体验不可思议低价惊喜。
        </p>
        <ul class="official-list">
          <li>
            <strong>热门城市</strong>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
          </li>
          <li>
            <strong>热门景点</strong>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
          </li>
          <li>
            <strong>热门酒店</strong>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
          </li>
          <li>
            <strong>热门推荐</strong>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
          </li>
          <li>
            <strong>热门入口</strong>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
            <p>携程酒店</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="foter">
      <div class="foter-buttom"></div>
    </div>
  </div>
</template>

<script>
import Calendar from "@components/calendar";
export default {
  name: "Hotel",
  data() {
    return {
      isShow: false, // 选择城市
      calendar: false, // 入住时间
      hotels: false, // 住房人数
      star: false, //星级
      recommend: false, //酒店推荐
    };
  },
  methods: {
    // 选择城市
    chuanghadel() {
      this.isShow = true;
      this.calendar = false;
      this.hotels = false;
      this.$refs.focus.focus();
    },
    // 入住时间
    calendarShow(event) {
      // console.log(this.$refs.left.dataset.left);
      // console.log(this.$refs.right.dataset.right);
      // console.log(event.target.dataset);
      let { left, right } = event.target.dataset;
      if (left === "left1" || right === "right1") {
        this.calendar = true;
        this.hotels = false;
      }
    },
    calendarReveal() {
      this.calendar = true;
    },
    // 住房人数
    destinationRoom() {
      this.hotels = true;
    },
    // 住房人数
    destination() {
      this.hotels = !this.hotels;
      this.calendar = false;
    },
    // 关键词
    chuangFocus() {
      this.calendar = false;
      this.hotels = false;
      this.$refs.Focus.focus();
    },
    recommendBtn() {
      this.recommend = !this.recommend;
    },
    hadelblur(event) {
      let { left, right, center, number } = event.target.dataset;
      console.log(left, right, center, number);
      if (
        !(
          left === "left1" ||
          right === "right1" ||
          center === "center1" ||
          number === "number1"
        )
      ) {
        this.calendar = false;
        this.hotels = false;
      }
    },
  },
  components: {
    Calendar,
  },
};
</script>

<style lang="less" scoped>
.aouter-img {
  width: 100vw;
  height: 280px;
  border-radius: 0px 0px 1000px 1000px/0px 0px 150px 150px;
  position: relative;
}
.seach {
  width: 1200px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  .seach-em {
    width: 1160px;
    margin: 20px;
    font-size: 40px;
    font-weight: 700;
    color: aliceblue;
    opacity: 0.8;
  }
  .seach-div {
    margin: 20px;
    height: 168px;
    padding: 24px;
    background: #fff;
    box-shadow: 0 0 20px 0px #ccc;
    .seach-list {
      display: flex;
      label {
        font-size: 14px;
        color: #8592a6;
        user-select: none;
        width: 19px;
      }
      input {
        width: 100%;
        border: none;
        font-weight: bold;
        font-size: 15px;
      }
      .seach-place {
        width: 270px;
        height: 76px;
        padding: 20px;
        border: 1px solid #8592a6;
        position: relative;
        .seach-city {
          border: 1px solid #8592a6;
          border-top: none;
          position: absolute;
          top: 75px;
          left: -1px;
          width: 545px;
          background: white;
          z-index: 3;
          h4 {
            height: 30px;
            line-height: 30px;
            padding: 0 5px;
            background: rgba(236, 234, 234, 0.5);
          }
          .city {
            display: flex;
            flex-wrap: wrap;
            li {
              width: 98px;
              line-height: 30px;
              height: 30px;
              margin: 5px;
              padding: 0 0 0 5px;
            }
            li:hover {
              background: blue;
            }
          }
        }
      }
      .seach-day {
        display: flex;
        height: 76px;
        border: 1px solid #8592a6;
        border-left: none;
        position: relative;
        .left {
          padding: 20px 30px 0 30px;
        }
        .right {
          padding: 20px 30px 0 30px;
          text-align: right;
        }
        .seach-date {
          position: absolute;
          top: 75px;
          left: 0px;
          border: 1px solid rgb(233, 230, 230);
          border-top: none;
          padding: 20px;
          width: 570px;
          background: white;
        }
        .day-center {
          text-align: center;
          padding: 30px 10px;
        }
      }
      .seach-number {
        padding: 18px 10px 8px;
        border: 1px solid #8592a6;
        border-left: none;
        width: 174px;
        position: relative;
        display: flex;
        justify-content: space-between;
        span {
          line-height: 3;
        }
      }
      .seach-number-room {
        position: absolute;
        top: 75px;
        left: 0px;
        padding: 20px;
        border: 1px solid #8592a6;
        background: white;
        border-top: none;
        li {
          width: 266px;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          span {
            padding: 5px;
            background: antiquewhite;
            border-radius: 50%;
          }
          b {
            border: 1px solid #333;
            padding: 4px;
            font-weight: 400;
            border-radius: 50%;
          }
          i {
            padding: 0 10px;
          }
          label {
            margin-left: 7px;
            font-size: 12px;
          }
        }
        a {
          float: right;
          font-weight: 500;
          font-size: 16px;
        }
      }
      .seach-keyword {
        border: 1px solid #8592a6;
        border-left: none;
        padding: 18px 10px 8px;
        width: 250px;
      }
      .search-search {
        width: 76px;
        height: 76px;
        line-height: 76px;
        text-align: center;
        background: #007aff;
        color: white;
        font-size: 20px;
      }
    }
    .seach-star ul {
      height: 24px;
      margin-top: 20px;
      display: flex;
      .seach-star-li {
        background: white;
      }
      .seach-star-li:hover {
        color: #000;
      }
      .Nubel {
        background: rgb(233, 212, 173);
        color: white;
      }
      .Nubel:hover {
        color: white;
      }
      li {
        display: flex;
        margin-right: 8px;
        width: 55px;
        background: #f0f2f5;
        justify-content: center;
        align-items: center;
      }
      li:hover {
        color: #007aff;
      }
    }
  }
}
/deep/.slideshow {
  width: 1160px;
  margin: 70px auto;
  position: relative;
  z-index: -1;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  // position: relative;
  // z-index: 1;
}
.service {
  width: 1160px;
  margin: 0 auto;
  // border: 1px solid;
  h3 {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
  }
  ul {
    width: 100%;
    text-align: center;
  }
  li {
    display: inline-block;
    width: 33.33%;
    text-align: center;
    .iconfont {
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      display: block;
      margin: 0 auto;
      color: rgb(54, 127, 211);
    }
    .desc {
      font-size: 14px;
      color: #455873;
      text-align: center;
      line-height: 18px;
      margin-top: 8px;
      font-weight: 500px;
    }
  }
}
.more {
  width: 1160px;
  margin: 16px auto;
  text-align: right;
  color: #287dfa;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  i {
    margin-left: 5px;
  }
}
.scenic-spot {
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .scenic-list {
    width: 32%;
    .scenic-list-img {
      width: 100%;
      height: 144px;
    }
    .list-title {
      width: 100%;
      padding: 16px;
      height: 94px;
      background: whitesmoke;
      .list-title-img {
        width: 60%;
        float: left;
        img {
          margin-right: 10px;
          float: left;
        }
        .list-title-h4 {
          float: left;
          margin: 10px 0;
          span {
            background: #7be;
            color: white;
            border-radius: 2px;
            padding: 2px 3px;
          }
        }
      }
      p {
        float: right;
        margin: 15px 0;
        padding: 4px 8px;
        color: white;
        background: #007aff;
        border-radius: 3px;
      }
    }
  }
}
.recommend {
  width: 1160px;
  margin: 0 auto;
  h4 {
    margin: 64px 0 20px;
    text-align: center;
    font-size: 28px;
  }
  .recommend-btn {
    margin-bottom: 24px;
    height: 32px;
    text-align: center;
    button {
      width: 62px;
      height: 32px;
      margin: 0 6px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid #dadfe6;
      border-radius: 2px;
      outline: 0;
      span {
        display: block;
        width: 28px;
      }
    }
    button:hover {
      border: 1px solid #007aff;
    }
    .recommend-btn-iconfont {
      position: relative;
    }
    .recommend-btn-list {
      width: 522px;
      height: 365px;
      background: white;
      padding: 24px 16px 8px;
      border: 1px solid red;
      position: absolute;
      top: 38px;
      right: 0px;
      text-align: left;
      li {
        display: inline-block;
        width: 95px;
        margin: 0 1px 8px 0;
        padding: 4px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
      }
      li:hover {
        background: #ebedf0;
      }
    }
  }
  .recommend-flex {
    display: flex;
    justify-content: space-between;
  }
  .recommend-introducer {
    width: 278px;
  }
  .recommend-introducer img {
    width: 100%;
    height: 197px;
  }
  .recommend-introducer-list {
    width: 100%;
    padding: 8px 0 0;
    strong {
      font-size: 16px;
    }
    .recommend-introducer-iconfont {
      margin: 2px 0 0;
      color: rgb(240, 152, 81);
      i {
        margin: 0 1px;
      }
    }
    .recommend-introducer-comment {
      margin: 2px 0 0;
      span {
        color: white;
        font-size: 16px;
        margin: 0 5px 0 0;
        padding: 1px 4px;
        background: #4978ce;
        border-radius: 3px;
        i {
          color: #a8ccff;
          font-size: 12px;
        }
        a {
          font-weight: bold;
        }
      }
      b {
        font-size: 14px;
        color: #8592a6;
      }
    }
    .recommend-introducer-money {
      display: block;
      margin: 10px 0 0;
      color: #568df1;
    }
  }
}
.official {
  width: 1160px;
  margin: 30px auto;
  .official-website {
    width: 100%;
    padding: 10px 15px;
    border: 2px solid #999999;
    h4 {
      color: #666666;
      height: 24px;
      line-height: 24px;
    }
    p {
      text-align: left;
      color: #999999;
      font-size: 12px;
      margin: 0 0 10px;
    }
    .official-list {
      li {
        display: flex;
        border-bottom: 1px dotted;
        margin: 5px 0;
        strong {
          font-size: 12px;
          margin-right: 30px;
        }
        p {
          width: 84px;
          height: 24px;
          margin: 0 5px 0 0;
        }
      }
    }
  }
}
.foter {
  background: rgba(247, 247, 245, 0.5);
  .foter-buttom {
    height: 200px;
    width: 980px;
    border: 1px solid;
    margin: 0 auto;
  }
}
</style>

