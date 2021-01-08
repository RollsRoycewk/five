<template>
  <div class="productContainer">
    <!-- 周边当地游 -->
    <div class="around_product" v-for="citys in citysList" :key="citys.catgoryID">
      <div class="tab_warp">
        <h2>{{citys.catgoryName}}</h2>
        <ul>
          <li
            class="current"
            :class="currentIndex === index ? 'checked':''"
            v-for="(tab,index) in citys.tabList"
            :key="tab.tabID"
            @click="hangdleIndex(index)"
          >
            <span>{{tab.name}}</span>
            <b></b>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="product_container" ref="fix">
        <div class="product_wrap" :class="active?'active':''" >
          <div class="theme_box" v-for="(img,index) in citys.imgList" :key="index">
            <a target="_blank" :href="img.linkUrl">
              <img v-lazy="img.imgUrl" />
            </a>
          </div>
          <div class="product_list">
            <ul>
              <li v-for="(product,index) in citys.tabList[currentIndex].products" :key="index">
                <a target="_blank" :href="product.href">
                  <img v-lazy="product.img" />
                </a>
                <h3>
                  <a target="_blank" :href="product.href" :title="product.name">{{product.name}}</a>
                </h3>
                <a href="javascript:;" class="price">
                  <span>￥</span>
                  {{product.price}}
                  <em>起</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 境内旅游 -->
    <div class="country_product">
      <div class="tab_warp">
        <h2>境内旅游</h2>
        <ul>
          <li>
            <span>精选</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>上海</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>广州</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>西藏</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>西藏</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>西藏</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>西藏</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>西藏</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>西藏</span>
            <b></b>
            <i></i>
          </li>
          <li>
            <span>西藏</span>
            <b></b>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="product_wrap">
        <div class="theme_box">
          <a
            target="_blank"
            href="https://vacations.ctrip.com/list/whole/sc.html/?ctm_ref=vactang_2_3986&from=do&st=%E4%BA%B2%E5%AD%90%E5%9B%BD%E5%86%85&sv=%E4%BA%B2%E5%AD%90%E5%9B%BD%E5%86%85&startcity=2"
          >
            <img src="https://dimg04.c-ctrip.com/images/0304q12000213x7bfF2B1.jpg" alt />
          </a>
          <a target="_blank" href="https://vacations.ctrip.com/around?startcity=2">
            <img src="https://dimg04.c-ctrip.com/images/0300y120002142q57C057.jpg" alt />
          </a>
        </div>
        <div class="product_list">
          <ul>
            <li class="big_pic">
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2">
                <img
                  src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                  alt
                />
              </a>
              <h3>
                <a
                  href="https://vacations.ctrip.com/travel/detail/p3566821/?city=2"
                  title="浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                >浙江普陀山2日1晚跟团游·疫情过后·佛岛祈福登佛顶山，拜…</a>
              </h3>
              <a href="javascript:;" class="price">
                <span>￥</span> 335
                <em>起</em>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 目的景区及景区合作 -->
    <div class="tb_cooperation">
      <div class="hd">
        <h2>目的景区及景区合作</h2>
        <a class="more" target="_blank" href="https://dst.ctrip.com/">更多目的地及景区合作>></a>
      </div>
      <div class="bd">
        <ul class="basefix">
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
        </ul>
        <ul class="basefix">
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
          <li>
            <a href="https://dst.ctrip.com/" target="_black">
              <img src="https://dimg04.c-ctrip.com/images/0304k120003g062ciBA65.png" alt />
            </a>
            <p>希腊</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      currentIndex: 0,

      active: false,
    };
  },
  computed: {
    ...mapState({
      citysList: state => state.tour.citysList
    })
  },
  methods: {
    ...mapActions(["getCitysList"]),
    hangdleIndex(index) {
      this.currentIndex = index;
    },
    handleToTop() {
    //   const scrollTop = document.documentElement.scrollTop;
        const scrollTop = this.$refs.fix[0].getBoundingClientRect().top;
        console.log(scrollTop)
      //   console.log(this.$refs.fix[0].scrollTop);
      if (scrollTop <= 0) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  },
  async mounted() {
    await this.getCitysList();
    //console.log(this);
    window.addEventListener("scroll", this.handleToTop);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleToTop);
  }
};
</script>

<style lang="less" scoped>
.productContainer {
  width: 1200px;
  margin: 0 auto;
}
// 周边旅游
.around_product {
  padding-top: 20px;
  width: 1200px;
  .tab_warp {
    border-width: 0 0 3px;
    border-style: solid;
    border-color: #64a065;
    &::after {
      content: " ";
      display: block;
      clear: both;
      overflow: hidden;
    }
    ul {
      li {
        float: left;
        cursor: pointer;
        padding: 13px 0px;
        &:hover {
          text-decoration: underline;
          color: #64a065;
        }
        span {
          display: block;
          border-left: 1px solid #ccc;
          padding: 0 18px;
          height: 14px;
          line-height: 14px;
        }
        &.checked {
          font-weight: 800;
          color: #64a065;
        }
      }
    }
    h2 {
      background-image: url("../images/tourSprite.png");
      background-repeat: no-repeat;
      background-position: -225px 0;
      width: 185px;
      overflow: hidden;
      height: 0;
      padding-top: 40px;
      background-color: #fff;
      margin-right: 25px;
      float: left;
    }
  }
  .product_container {
    position: relative;
    height: 350px;
    .product_wrap {
      position: absolute;
      &.active {
        position: fixed;
        z-index: 99;
        top: 0;
        background: #fff;
      }
      .theme_box {
        float: left;
        width: 210px;
      }
      .product_list {
        float: left;
        height: 393px;
        ul {
          padding: 3px 0 0 2px;
          width: 968px;
          li {
            float: left;
            padding: 6px 9px 4px;
            border: 2px solid #fff;
            width: 230px;
            margin: 4px 0 0 10px;
            border: 2px solid #fff;
            &:hover {
              border: 2px solid #ffd986;
              background-color: #fffcf4;
            }
            img {
              display: block;
              width: 210px;
              height: 98px;
            }
            h3 {
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              height: 40px;
              overflow: hidden;
              overflow-wrap: break-word;
              &:hover {
                text-decoration: underline;
              }
            }
            .price {
              color: #f60;
              height: 20px;
              line-height: 20px;
              font-size: 18px;
              span {
                vertical-align: 4px;
                padding-right: 2px;
                font-size: 12px;
              }
              em {
                font-size: 14px;
              }
            }
          }
        }
      }
      &::after {
        content: " ";
        display: block;
        clear: both;
        overflow: hidden;
      }
    }
  }
}
// 境内旅游
.country_product {
  padding-top: 20px;
  .tab_warp {
    border-width: 0 0 3px;
    border-style: solid;
    border-color: #f9af46;
    &::after {
      content: " ";
      display: block;
      clear: both;
      overflow: hidden;
    }
    h2 {
      background-image: url("../images/tourSprite.png");
      background-repeat: no-repeat;
      background-position: -225px -42px;
      width: 185px;
      overflow: hidden;
      height: 0;
      padding-top: 40px;
      background-color: #fff;
      margin-right: 25px;
      float: left;
    }
    ul {
      li {
        float: left;
        cursor: pointer;
        padding: 13px 0px;
        &:hover {
          text-decoration: underline;
          color: #64a065;
        }
        span {
          display: block;
          border-left: 1px solid #ccc;
          padding: 0 18px;
          height: 14px;
          line-height: 14px;
        }
      }
    }
  }
  .product_wrap {
    .theme_box {
      float: left;
      width: 210px;
    }
    .product_list {
      float: left;
      height: 393px;
      ul {
        padding: 3px 0 0 2px;
        width: 968px;
        .big_pic {
          width: 470px;
          padding: 6px 9px 0;
          a img {
            display: block;
            width: 500px;
            height: 280px;
            // margin-left: ;
          }
        }
        li {
          float: left;
          padding: 6px 9px 4px;
          border: 2px solid #fff;
          width: 230px;
          margin: 4px 0 0 10px;
          border: 2px solid #fff;
          &:hover {
            border: 2px solid #ffd986;
            background-color: #fffcf4;
          }
          img {
            display: block;
            width: 210px;
            height: 98px;
          }
          h3 {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            height: 40px;
            overflow: hidden;
            overflow-wrap: break-word;
            &:hover {
              text-decoration: underline;
            }
          }
          .price {
            color: #f60;
            height: 20px;
            line-height: 20px;
            font-size: 18px;
            span {
              vertical-align: 4px;
              padding-right: 2px;
              font-size: 12px;
            }
            em {
              font-size: 14px;
            }
          }
        }
      }
    }
    &::after {
      content: " ";
      display: block;
      clear: both;
      overflow: hidden;
    }
  }
}
// 品牌旅游地
.tb_cooperation {
  margin-top: 50px;
  .hd {
    height: 30px;
    position: relative;
    margin-bottom: 20px;
    h2 {
      font-size: 28px;
    }
    .more {
      position: absolute;
      right: 0;
      bottom: -5px;
      color: #000;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .bd {
    border: 1px solid #f0f3f5;
    background: #fafafa;
    padding: 15px 0 20px 34px;
    ul {
      margin: 10px 0;
      li {
        float: left;
        width: 110px;
        margin-right: 33px;
        text-align: center;
        p {
          font-size: 14px;
          color: #7f7f7f;
          padding-top: 5px;
          padding-bottom: 10px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
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
}
</style>
