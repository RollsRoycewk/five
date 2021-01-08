<template>
  <div>
    <!-- 头部区域 -->
    <header class="header-container">
      <nav class="header-nav">
        <ul class="header-nav-allitem">
          <li>
            <a href="" class="iconfont icon-shouye"></a>
          </li>
          <li>
            <a href="https://you.ctrip.com/place/" class="active">目的地攻略</a>
          </li>
          <li><a href="https://you.ctrip.com/travels/"> 游记</a></li>
          <li><a href="https://you.ctrip.com/asks/">问答</a></li>
          <li>
            <a
              href="https://vacations.ctrip.com/tour/static/page/guide/introduction.html"
              >当地向导</a
            >
          </li>
          <li><a href="">口碑榜</a></li>
          <li><a href="https://piao.ctrip.com/">当地玩乐</a></li>
          <li><a href="">我的主页</a></li>
        </ul>
        <button class="header-write">写游记</button>
      </nav>
    </header>

    <!-- 中间组件 -->
    <div class="outer-container" @click.stop="handleAllClick">
      <div class="core-wrap">
        <!-- 搜索框 -->
        <div class="search">
          <div class="fixed-position" @click.stop="isHostCity = !isHostCity">
            <div>{{ area }}</div>
            <div>切换城市></div>
            <div
              class="city_searchBox"
              :style="{ display: isHostCity === false ? 'none' : 'block' }"
            >
              <div @click="hostCityValue">
                <div class="hotCity">
                  <p>热门出发城市</p>
                  <div class="hotCity-list">
                    <a href="">北京</a>
                    <a href="">上海</a>
                    <a href="">南京</a>
                    <a href="">杭州</a>
                    <a href="">深圳</a>
                    <a href="">广州 </a>
                    <a href="">天津</a>
                    <a href="">成都 </a>
                    <a href="">青岛</a>
                    <a href="">厦门</a>
                    <a href="">武汉</a>
                    <a href="">沈阳</a>
                  </div>
                </div>
                <div class="hotCity-list-item">
                  <div
                    class="hotCity-list-selsect"
                    v-for="item in 14"
                    :key="item"
                  >
                    <p>A</p>
                    <ul class="selsect-item">
                      <li>北京</li>
                      <li>上海</li>
                      <li>广州</li>
                      <li>深圳</li>
                      <li>拉萨</li>
                      <li>西藏</li>
                      <li>阿里</li>
                      <li>美国</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="searchArea">
            <input
              type="text"
              placeholder="wangkai.zone 美妆==>口红区已更新,欢迎选购"
              class="search-input"
              @input="handleInput"
            />
            <button class="search-button">搜索</button>
            <ul
              class="searchValue"
              v-show="searchValAll.length !== 0 && inputVaule"
            >
              <li v-for="(sval, index) in searchValAll" :key="index">
                {{ sval.word }}
              </li>
            </ul>
          </div>
        </div>
        <!-- banner -->
        <div class="banner-area">
          <div class="side-nav">
            <ul>
              <li v-for="item in 9" :key="item">
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">安</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>{{ Math.random() }}</h1>
                </div>
              </li>
              <!-- <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>
                    上海啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊从
                  </h1>
                </div>
              </li>
              <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>深圳 周边旅游了解一下?</h1>
                </div>
              </li>
              <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>北京北京北京</h1>
                </div>
              </li>
              <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>
                    上海啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊从
                  </h1>
                </div>
              </li>
              <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>深圳 周边旅游了解一下?</h1>
                </div>
              </li>
              <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>北京北京北京</h1>
                </div>
              </li>
              <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>
                    上海啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊从
                  </h1>
                </div>
              </li>
              <li>
                <div class="side-nav-item">
                  <div class="side-nav-iconfont">稳</div>
                  <div class="side-nav-con">
                    <div class="side-nav-con-show">
                      <div><a href="">深圳周边旅游</a></div>
                      <div>></div>
                    </div>
                    <div><a href="">粤港澳地区</a></div>
                  </div>
                </div>
                <div class="side-nav-item-position">
                  <h1>深圳 周边旅游了解一下?</h1>
                </div>
              </li> -->
            </ul>
          </div>
          <div class="banner">
            <div class="banner-top">
              <el-carousel height="414px">
                <el-carousel-item v-for="item in banner" :key="item.id">
                  <!-- <h3 class="small">{{ item }}</h3> -->
                  <img v-lazy="item.url" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="swiper">
              <el-carousel height="197px">
                <el-carousel-item
                  v-for="smallimg in banner1"
                  :key="smallimg.id"
                >
                  <div v-for="(url, index) in smallimg.urlList" :key="index">
                    <img :src="url" alt="" />
                  </div>
                </el-carousel-item>
                <!-- <el-carousel-item>
                  <img
                    src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/baa26b15ba14d443feeb78df47160524.jpg"
                    alt=""
                  />
                  <img
                    src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/16409e68ea41d91b14aff95ec52105d1.jpg"
                    alt=""
                  />
                  <img
                    src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/16409e68ea41d91b14aff95ec52105d1.jpg"
                    alt=""
                  />
                </el-carousel-item> -->
              </el-carousel>
            </div>
          </div>
          <div class="banner-data">
            <ul>
              <li>
                <div class="icon">静</div>
                <div>117,030,273位会员</div>
              </li>
              <li>
                <div class="icon">静</div>
                <div>117,030,273位会员</div>
              </li>
              <li>
                <div class="icon">静</div>
                <div>117,030,273位会员</div>
              </li>
              <li>
                <div class="icon">静</div>
                <div>117,030,273位会员</div>
              </li>
              <li>
                <div class="icon">静</div>
                <div>117,030,273位会员</div>
              </li>
            </ul>
            <div class="banner-phone">
              <img
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3819437132,3014012228&fm=26&gp=0.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 推荐评论区域 -->
        <div class="recommended-outer">
          <div class="recommended-container">
            <!-- 推荐店铺 -->
            <div>
              <div class="recommendedshops">
                <div class="recommendedshops-title">
                  <div class="">智慧旅游旗舰店</div>
                  <a href="">更多</a>
                </div>
                <ul class="recommended-nav">
                  <li
                    :class="{ active: isShop === index }"
                    v-for="(shop, index) in district"
                    :key="index"
                    @click="handleShopIndex(index)"
                  >
                    <a href="javascript:;">{{ shop }}</a>
                  </li>
                </ul>
              </div>
              <div class="recommendedshops-con">
                <div
                  class="recommendedshops-con-item"
                  v-for="(shopDetailitem, index) in shopDetail[isShop]"
                  :key="index"
                >
                  <!-- <img :src="shopDetailitem.indexUrl" alt="" /> -->
                  <img v-lazy="shopDetailitem.indexUrl" alt="" />
                  <div class="item-footer">
                    <!-- <img :src="shopDetailitem.smallUrl" alt="" /> -->
                    <img v-lazy="shopDetailitem.smallUrl" alt="" />
                    <div>
                      <strong>{{ shopDetailitem.name }}</strong>
                      <span>{{ shopDetailitem.describe }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 推荐游记 -->
            <div class="amuse-oneself">
              <div class="amuse-oneself-title">
                <div class="">推荐游记</div>
                <a href="">更多</a>
              </div>
              <div class="recommended-nav">
                <a href="">什么是优质游记？申请必入！</a>
                <ul>
                  <li class="active">头条</li>
                  <li>推荐</li>
                  <li>最新</li>
                </ul>
              </div>
            </div>
            <!-- 文章 -->
            <div class="recommended-list">
              <div
                class="recommended-list-item"
                v-for="item in recommendedArticles"
                :key="item.imgUrl"
              >
                <img v-lazy="item.imgUrl" alt="" />
                <div>
                  <div>{{ item.title }}</div>
                  <div>{{ item.time }}</div>
                  <div>{{ item.content }}</div>
                  <div>{{ item.num }}</div>
                </div>
              </div>
              <img
                v-show="isnewInfo"
                src="../../assets/images/newInfo.gif"
                width="100%"
                height="80px"
              />

              <!-- 底部导航 -->
              <!-- @size-change="handleSizeChange"
                @current-change="handleCurrentChange" -->
              <el-pagination
                :current-page="recommendedArticles.length"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="recommendedArticles.length"
                layout="  prev, pager, next, jumper,total,sizes"
                :total="recommendedArticles.length"
              >
              </el-pagination>
            </div>
          </div>
          <!-- 评论区域 -->
          <div class="comment-container">
            <div class="">
              <div class="comment-title">
                <h3>最新点评</h3>
                <div class="radio">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <ul class="comment-list" v-for="item in 4" :key="item">
                <li>来越南旅游，看完下面7个景点已经够了</li>
                <li>性价比高，总体超赞，有趣好玩，景色不错，</li>
                <li>古风古巷！漫步其中，悠然自得！</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 底部导航 -->
        <div class="footer-nav">
          <div class="footer-nav-title">
            <div>国内旅游攻略</div>
            <div>+ 更多</div>
          </div>
          <ul class="footer-nav-item">
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
          </ul>
        </div>

        <div class="footer-nav">
          <div class="footer-nav-title">
            <div>国际旅游攻略</div>
            <div>+ 更多</div>
          </div>
          <ul class="footer-nav-item">
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>香港</li>
            <li>厦门</li>
            <li>海南</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
            <li>海南</li>
            <li>北京</li>
            <li>上海</li>
            <li>澳门</li>
          </ul>
        </div>

        <div class="footer-nav">
          <div class="footer-nav-title">
            <div>国际旅游攻略</div>
            <div>+ 更多</div>
          </div>
          <ul class="footer-nav-item">
            <li>常州旅游攻略</li>
            <li>林州旅游攻略</li>
            <li>冲绳县旅游攻略</li>
            <li>北海旅游攻略</li>
            <li>塘栖旅游攻略</li>
            <li>凤凰城旅游攻略</li>
            <li>长兴岛旅游攻略</li>
            <li>佛冈旅游攻略</li>
            <li>哈尔施塔特旅游攻略</li>
            <li>兰纳旅游攻略</li>
            <li>多伦旅游攻略</li>
            <li>安庆旅游攻略</li>
            <li>芽庄旅游攻略</li>
            <li>常州旅游攻略</li>
            <li>林州旅游攻略</li>
            <li>冲绳县旅游攻略</li>
            <li>北海旅游攻略</li>
            <li>塘栖旅游攻略</li>
            <li>凤凰城旅游攻略</li>
            <li>长兴岛旅游攻略</li>
            <li>佛冈旅游攻略</li>
            <li>哈尔施塔特旅游攻略</li>
            <li>兰纳旅游攻略</li>
            <li>多伦旅游攻略</li>
            <li>安庆旅游攻略</li>
            <li>芽庄旅游攻略</li>
            <li>常州旅游攻略</li>
            <li>林州旅游攻略</li>
            <li>冲绳县旅游攻略</li>
            <li>北海旅游攻略</li>
            <li>塘栖旅游攻略</li>
            <li>凤凰城旅游攻略</li>
            <li>长兴岛旅游攻略</li>
            <li>佛冈旅游攻略</li>
            <li>哈尔施塔特旅游攻略</li>
            <li>兰纳旅游攻略</li>
            <li>多伦旅游攻略</li>
            <li>安庆旅游攻略</li>
            <li>芽庄旅游攻略</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <footer class="footer-all">
      <div class="footer-core">
        <dl>
          <dt>社区必读</dt>
          <dd>用户协议</dd>
          <dd>社区指南</dd>
          <dd>经验与等级</dd>
          <dd>新手导航</dd>
          <dd>网络信息侵权保障</dd>
        </dl>
        <dl>
          <dt>社区必读</dt>
          <dd>用户协议</dd>
          <dd>社区指南</dd>
          <dd>经验与等级</dd>
          <dd>新手导航</dd>
          <dd>网络信息侵权保障</dd>
        </dl>
        <dl>
          <dt>社区必读</dt>
          <dd>用户协议</dd>
          <dd>社区指南</dd>
          <dd>经验与等级</dd>
          <dd>新手导航</dd>
          <dd>网络信息侵权保障</dd>
        </dl>
        <dl>
          <dt>社区必读</dt>
          <dd>用户协议</dd>
          <dd>社区指南</dd>
          <dd>经验与等级</dd>
          <dd>新手导航</dd>
          <dd>网络信息侵权保障</dd>
        </dl>
        <dl>
          <dt>关注携程不迷路</dt>
          <dd>
            <img
              src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/baa26b15ba14d443feeb78df47160524.jpg"
              alt=""
            />
            <i>
              <span>查攻略</span>
              <span>查签证</span>
              <span>查机票酒店</span>
              <span>免费旅行</span>
              <span>免费酒店</span>
              <span>免费门票</span>
            </i>
          </dd>
        </dl>
      </div>
    </footer>

    <!-- 返回按钮 -->
    <div id="fixdbtn" @click="handleTop">TOP</div>
  </div>
</template>
   
<script>
import aixos from "axios";
import axios from "axios";
export default {
  name: "strategy",
  data() {
    return {
      isHostCity: false,
      activeName: "first",
      banner: [],
      banner1: [],
      district: [],
      shopDetail: [],
      isShop: 0,
      // 文章推荐列表
      recommendedArticles: [],
      // 无限滚动
      // 是否更新中
      flag: true,

      // newInfo
      isnewInfo: false,
      // 地区
      area: "西藏",
      // 输入框的值
      inputVaule: "",
      searchValAll: [],
    };
  },
  watch: {
    inputVaule(val) {
      axios({
        url:
          "https://m.ctrip.com/restapi/h5api/globalsearch/search?action=online&source=globalonline&keyword=" +
          val,
        method: "POST",
      })
        .then((res) => {
          this.searchValAll = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    handleInput(event) {
      this.inputVaule = event.target.value;
      // console.log();
    },
    handleClick() {},
    handleShopIndex(index) {
      this.isShop = index;
    },
    handleTop() {
      window.scrollTo(0, 0);
    },
    handleAllClick(event) {
      if (
        event.target.parentNode.className === "search" ||
        event.target.parentNode.className === "fixed-position"
      ) {
        // console.log(event.target);
        this.isHostCity = true;
      } else {
        this.isHostCity = false;
      }
    },
    hostCityValue(event) {
      // console.log();
      // this.area = event.target.innerText;
      if (event.target.localName === "li" || event.target.localName === "a") {
        this.area = event.target.innerText;
      }
    },
    // 请求列表添加数据
    async getrecommendedArticles() {
      const res = await aixos({
        url: "http://wangkai.zone:8082/ctrip",
        method: "GET",
      });
      // 文章推荐列表
      if (this.recommendedArticles.length === 0) {
        this.isnewInfo = true;
        setTimeout(() => {
          this.recommendedArticles = res.data[0].recommendedArticles.slice(
            0,
            5
          );
          this.isnewInfo = false;
          this.flag = true;
        }, 1500);
      } else {
        if (this.recommendedArticles.length > 100) {
          this.isnewInfo = false;
          return;
        } else {
          this.isnewInfo = true;
          setTimeout(() => {
            this.recommendedArticles.push(
              ...res.data[0].recommendedArticles.slice(5, 10)
            );
            this.flag = true;
            this.isnewInfo = false;
          }, 2000);
        }
      }
    },
  },
  async mounted() {
    const res = await aixos({
      url: "http://wangkai.zone:8082/ctrip",
      method: "GET",
    });
    // console.log(res.d  ata);
    this.district = res.data[0].district;
    this.shopDetail = res.data[0].shopDetail;
    this.banner = res.data[0].banner;
    this.banner1 = res.data[0].banner1;
    // 文章推荐列表
    // this.recommendedArticles = res.data[0].recommendedArticles.slice(0, 5);
    this.getrecommendedArticles();
    // 无限滚动功能实现
    document.onscroll = () => {
      let { clientHeight, offsetHeight } = document.documentElement;
      // console.log("计算啊", offsetHeight - clientHeight - window.pageYOffset);
      if (offsetHeight - clientHeight - window.pageYOffset < 627 && this.flag) {
        this.flag = false;
        this.getrecommendedArticles();
      }
    };
  },
};
</script>

<style lang="less">
// 头部区域
.header-container {
  width: 100%;
  height: 60px;
  // background-color: orangered;
  .header-nav {
    margin-top: 10px;
    padding-top: 7px;
    width: 1180px;
    margin: 0 auto;
    // font-size: 0;
    display: flex;
    justify-content: space-between;
    height: 42px;
    .header-nav-allitem {
      vertical-align: middle;
      display: flex;
      font-size: 18px;
      li {
        height: 37px;
        margin-right: 20px;

        a {
          display: inline-block;
          width: 100%;
          height: 36px;
          color: #656565;
          &.icon-shouye {
            color: #00a7e1;
            font-size: 19px;
          }
          &.active {
            border-bottom: 1px solid #00a7e1;
          }
        }
      }
    }
    .header-write {
      width: 95px;
      height: 30px;
      background-color: orange;
      color: white;
      outline: none;
      border: none;
      border-radius: 4px;
    }
    .header-write:hover {
      background-color: tomato;
    }
  }
}

// 外层容器
.outer-container {
  margin-top: -19px;
  background-color: #f2f2f2;
  // height: 100%;
  // 1180px
  .core-wrap {
    width: 1180px;
    // background-color: olive;
    margin: 0 auto;
    .search {
      display: flex;
      height: 60px;
      // background-color: orange;
      padding-top: 20px;
      justify-content: left;
      align-items: center;
      .fixed-position {
        .city_searchBox {
          padding: 14px;
          position: absolute;
          top: 39px;
          left: -1px;
          width: 350px;
          height: 567px;
          border: 1px solid #999;
          background-color: #fff;
          z-index: 10;
          .hotCity {
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 10px;
          }
          .hotCity-list-item {
            .hotCity-list-selsect {
              margin: 10px 0;
              display: flex;
              p {
                width: 34px;
                height: 22px;
                color: white;
                background-color: #00a7e1;
                text-align: center;
                margin-right: 8px;
              }
              .selsect-item {
                display: flex;
                align-items: center;
                li {
                  margin-right: 8px;
                }
              }
            }
          }
        }
        position: relative;
        padding: 0 10px;
        display: flex;
        width: 230px;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;
        border: 1px solid #999;
        height: 40px;
        background-color: #fff;
        :nth-child(1) {
          font-size: 16px;
          color: #00a7e1;
        }
        :nth-child(2) {
          font-size: 12px;
          color: #999;
        }
      }
      .searchArea {
        position: relative;
        .searchValue {
          position: absolute;
          height: 500px;
          width: 500px;
          background-color: #fff;
          border: 1px solid #00a7e1;
          z-index: 10;
          padding: 20px;
          li {
            line-height: 30px;
          }
        }
      }
      .search-input {
        width: 546px;
        height: 40px;
        // background-color: #00a7e1;
        outline: none;
        border: 2px solid #ff9913;
        text-indent: 20px;
      }
      .search-button {
        height: 40px;
        width: 134px;
        background-color: #ff9913;
        border: none;
        outline: none;
        color: #f2f2f2;
        font-size: 16px;
      }
    }
    // banner
    .banner-area {
      display: flex;
      justify-content: space-between;
      // justify-content: space-evenly;
      height: 622px;
      margin-top: 20px;
      height: 100%;
      position: relative;
      .side-nav {
        // background-color: cadetblue;
        height: 622px;
        ul li {
          width: 230px;
          border: 1px solid #e6e6e6;
          border-top: none;
          background-color: #fff;
          height: 69px;
          .side-nav-item {
            height: 100%;
            display: flex;
            align-items: center;
            padding-right: 20px;
            .side-nav-iconfont {
              width: 32px;
              height: 32px;
              text-align: center;
              line-height: 32px;
              background-color: #00a7e1;
              border-radius: 50%;
              margin: 0 13px;
            }
            & a {
              color: black;
            }
            & a:hover {
              color: #00a7e1;
            }
            .side-nav-con {
              width: 171px;
              display: flex;
              flex-direction: column;
            }
            .side-nav-con-show {
              display: flex;
              justify-content: space-between;
            }
          }
          &:hover .side-nav-item {
            border: 1px solid #00a7e1;
            border-right: none;
          }
          &:hover .side-nav-item-position {
            display: block;
            width: 693px;
            height: 621px;
            transition: all 0.5 linear;
          }
          .side-nav-item-position {
            position: absolute;
            border: 1px solid #e6e6e6;
            border-left: none;
            top: 0px;
            left: 230px;
            background-color: #fff;
            z-index: 5;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;
          }
        }
        ul li:first-child {
          border-top: 1px solid #e6e6e6;
        }
      }
      .banner {
        width: 680px;
        height: 622px;

        .banner-top {
          .el-carousel__container img {
            height: 100%;
          }
        }
        .swiper {
          margin-top: 10px;
          .el-carousel__container .el-carousel__item {
            display: flex;
            img {
              width: 226px;
              height: 197px;
            }
          }
        }
      }
      .banner-data {
        display: flex;
        flex-direction: column;
        width: 248px;
        border: 1px solid #e6e6e6;
        background-color: #fff;
        // background-color: cornflowerblue;
        height: 622px;
        ul {
          padding: 10px;
        }
        li {
          :nth-child(1) {
            width: 35px;
            height: 35px;
            background-color: blue;
            border-radius: 50%;
            text-align: center;
            line-height: 35px;
            margin-right: 10px;
          }

          padding-left: 10px;
          width: 230px;
          height: 55px;
          display: flex;
          border-bottom: 1px solid #e6e6e6;
          // justify-content: center;
          align-items: center;
          &:last-of-type {
            border-bottom: none;
          }
        }
        .banner-phone {
          flex-grow: 1;
          img {
            height: 100%;
          }
        }
      }
    }
    // 推荐区域 评论区域
    .recommended-outer {
      // height: 1000px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      padding-bottom: 30px;
      .recommended-container {
        width: 928px;
        height: 100%;
        // background-color: seagreen;
        .recommendedshops-con {
          background-color: #fff;
          height: 239px;
          border-top: 1px solid #00a7e1;
          display: flex;
          .recommendedshops-con-item {
            width: 208px;
            margin: 20px 0 0 20px;
            img {
              width: 208px;
              height: 160px;
            }
            .item-footer {
              margin-top: 15px;
              display: flex;
              img {
                width: 39px;
                height: 39px;
                border: 1px solid #e6e6e6;
              }
              div {
                width: 208px;
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                span {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
        .recommendedshops {
          display: flex;
          justify-content: space-between;
          .recommendedshops-title {
            display: flex;
            justify-content: center;
            :nth-child(1) {
              font-size: 22px;
              color: #666;
            }
            a {
              display: inline-block;
              padding-left: 20px;
              // transform: translateY(20%);
              line-height: 30px;
            }
          }
          .recommended-nav {
            display: flex;
            border: 1px solid #e6e6e6;
            border-bottom: none;
            background-color: #fff;
            li {
              // width: 54px;
              height: 38px;
              // text-align: center;
              line-height: 38px;
              a {
                border-right: 1px solid #e6e6e6;
                padding: 0 15px;
                color: black;
                font-size: 12px;
              }
              &.active {
                border-left: 1px solid #00a7e1;
                border-right: 1px solid #00a7e1;
                border-top: 3px solid #00a7e1;
                border-radius: 3px 3px 0 0;
              }
              &:last-of-type a {
                border-right: none;
              }
            }
          }
        }
        .amuse-oneself {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          .amuse-oneself-title {
            display: flex;
            justify-content: center;
            :nth-child(1) {
              font-size: 22px;
              color: #666;
            }
            a {
              display: inline-block;
              padding-left: 20px;
              // transform: translateY(20%);
              line-height: 30px;
            }
          }
          .recommended-nav {
            display: flex;
            align-items: center;
            a {
              padding-right: 20px;
            }
            ul {
              display: flex;

              li {
                width: 54px;
                height: 30px;
                border: 1px solid #e6e6e6;
                text-align: center;
                line-height: 30px;
                background-color: #fff;
                border-right: none;
                &.active {
                  border: 1px solid #00a7e1;
                }
                &:last-of-type {
                  border-right: 1px solid #e6e6e6;
                }
              }
            }
            //   border: 1px solid #e6e6e6;
            //   border-bottom: none;
            //   background-color: #fff;
            //   li {
            //     // width: 54px;
            //     height: 38px;
            //     // text-align: center;
            //     line-height: 38px;
            //     a {
            //       border-right: 1px solid #e6e6e6;
            //       padding: 0 15px;
            //       color: black;
            //       font-size: 12px;
            //     }
            //     &.active {
            //       border-left: 1px solid #00a7e1;
            //       border-right: 1px solid #00a7e1;
            //       border-top: 3px solid #00a7e1;
            //       border-radius: 3px 3px 0 0;
            //     }
            //     &:last-of-type a {
            //       border-right: none;
            //     }
            //   }
          }
        }
        .recommended-list {
          background-color: #fff;
          // height: 800px;
          padding: 20px;
          border: 1px solid #e6e6e6;
          margin-top: 20px;
          .recommended-list-item {
            margin-top: 20px;
            display: flex;
            width: 890px;
            // height: 160px;
            // background-color: royalblue;
            padding-bottom: 20px;
            border-bottom: 1px solid #e6e6e6;
            img {
              width: 230px;
              height: 160px;
            }
            div {
              margin-left: 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
            }
          }
          .el-pagination {
            margin: 20px auto;
            width: 114px;
          }
        }
      }
      .comment-container {
        width: 230px;
        height: 100%;
        // background-color: blueviolet;
        .comment-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h3 {
            font-size: 28px;
            color: #666;
          }
          .radio {
            display: flex;

            div {
              margin-right: 10px;
              width: 10px;
              height: 10px;
              background-color: #ccc;
              border-radius: 50%;
            }
          }
        }
        .comment-list {
          li {
            margin: 20px 0;
            padding: 20px 0;
            width: 230px;
            // height: 90px;
            // background-color: aquamarine;
            border-bottom: 1px solid #ccc;
          }
        }
      }
    }
    // 底部导航区域
    .footer-nav {
      // display: flex;
      // flex-direction: column;
      .footer-nav-title {
        display: flex;
        justify-content: space-between;
        // flex-direction: column;
        padding-bottom: 3px;
      }
      .footer-nav-item {
        border-top: 1px solid #ccc;
        padding-top: 5px;
        padding-bottom: 30px;
        display: flex;
        flex-wrap: wrap;
        li {
          padding-right: 14px;
        }
      }
    }
  }
}

// footer
.footer-all {
  background-color: #666;
  padding: 30px 0;
  .footer-core {
    display: flex;
    width: 1180px;
    // background-color: blue;
    margin: 0 auto;
    color: #fff;
    dl {
      width: 210px;
      dt {
        padding-bottom: 24px;
        font-size: 18px;
      }
    }
    dl:last-of-type {
      flex-grow: 1;
      dd {
        display: flex;
      }
      img {
        width: 100px;
        height: 100px;
      }
      i {
        padding-left: 10px;
        display: flex;
        align-items: center;
      }
    }
  }
}

// 返回按钮
#fixdbtn {
  position: fixed;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  // border-top: 50px solid transparent;
  // border-left: none;
  // border-right: none;
  border-top: none;
  border-bottom: 50px solid #00a7e1;
  width: 50px;
  height: 50px;
  // background-color: #00a7e1;
  bottom: 10px;
  right: 10px;
  line-height: 67px;
  text-align: center;
  text-indent: -13px;
}
</style>