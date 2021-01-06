<template>
  <div>
    <div class="contentContainer">
      <!-- 轮播图 -->
      <div class="bunnerContainer">
        <el-carousel trigger="click" :interval="5000" height="340px">
          <el-carousel-item v-for="bunner in bunnerList" :key="bunner._id">
            <img :src="bunner.imgesUrl" :alt="bunner.imgesName" />
          </el-carousel-item>
        </el-carousel>
        <!-- 搜索框 -->
        <div class="searchContainer">
          <div class="search">
            <div class="left">
              <ul class="check">
                <li class="checked">酒店</li>
                <li>机票</li>
                <li>旅游</li>
                <li>跟游团</li>
                <li>打包订</li>
                <li>火车</li>
                <li>用车</li>
              </ul>
            </div>
            <div class="right">
              <el-tabs v-model="activeName">
                <el-tab-pane label="国内酒店" name="first">
                  <!-- 表单 -->
                  <el-form
                    :inline="true"
                    class="formContainer"
                    label-width="70px"
                  >
                    <!-- 目的地 -->
                    <el-form-item label="目的地">
                      <el-input
                        v-model="hotelSearch.destination"
                        placeholder="拼音/中文"
                        style="width: 358px"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="入住日期">
                      <el-date-picker
                        v-model="hotelSearch.stayInDate"
                        type="date"
                        placeholder="选择日期"
                        style="width: 140px"
                      ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="退房日期">
                      <el-date-picker
                        v-model="hotelSearch.checkOutDate"
                        type="date"
                        placeholder="选择日期"
                        style="width: 140px"
                      ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="房间数">
                      <el-select
                        style="width: 140px"
                        v-model="hotelSearch.Rooms"
                      >
                        <el-option label="1间" value="1">1间</el-option>
                        <el-option label="2间" value="2">2间</el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="住客数">
                      <el-select
                        style="width: 140px"
                        v-model="hotelSearch.peoples"
                      >
                        <el-option label="1人" value="1">1人</el-option>
                        <el-option label="2人" value="2">2人</el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="酒店级别">
                      <el-select
                        style="width: 140px"
                        v-model="hotelSearch.stars"
                      >
                        <el-option label="1星级" value="1">1星级</el-option>
                        <el-option label="2星级" value="2">2星级</el-option>
                        <el-option label="3星级" value="3">3星级</el-option>
                        <el-option label="4星级" value="4">4星级</el-option>
                        <el-option label="5星级" value="5">5星级</el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="primary"
                        style="marginleft: 70px; width: 100px"
                        >搜索</el-button
                      >
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="海外酒店" name="2">配置管理</el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
      <!-- 旅游 -->
      <div class="travel">
        <el-tabs v-model="travelName">
          <el-tab-pane class="hot" label="热门" name="first">
            <ul>
              <li v-for="(destCity, index) in traveInfo.destCitys" :key="index">
                {{ destCity.nme }}
              </li>
            </ul>
            <div class="hotList">
              <div class="hotItem">
                <div
                  v-for="(tabContent, index) in traveInfo.tabContentLst.slice(
                    0,
                    8
                  )"
                  :key="index"
                >
                  <img :src="tabContent.img" alt="" />
                  <div class="mask">
                    <span>{{ tabContent.prdNme }}</span>
                    <span>￥{{ tabContent.price.amt }}/人起</span>
                  </div>
                </div>
              </div>
              <div class="recommend">
                <img src="../../assets/images/recommend.jpg" alt="" />
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="周边游" name="second">周边游</el-tab-pane>
          <el-tab-pane label="门票" name="third">门票</el-tab-pane>
          <el-tab-pane label="出境游" name="fourth">出境游</el-tab-pane>
          <el-tab-pane label="境内游" name="five">境内游</el-tab-pane>
          <el-tab-pane label="邮轮" name="six">邮轮</el-tab-pane>
          <el-tab-pane label="当地玩乐" name="seven">当地玩乐</el-tab-pane>
          <el-tab-pane label="主题游" name="eight">主题游</el-tab-pane>
          <el-tab-pane label="高端游" name="nine">高端游</el-tab-pane>
        </el-tabs>
      </div>
      <!-- 酒店 -->
      <div class="hotelContainer">
        <el-tabs v-model="hotelName">
          <el-tab-pane class="foreignHotel" label="海外酒店" name="first">
            <!-- 左边的文章列表 -->
            <div class="left">
              <div v-if="hotelInfo.tagUp">
                <h3>{{ hotelInfo.tagUp.nme }}</h3>
                <ul>
                  <li
                    v-for="(item, index) in hotelInfo.tagUp.itemLst"
                    :key="index"
                  >
                    <a :href="item.lnk">{{ item.nme }}</a>
                  </li>
                </ul>
              </div>
              <div v-if="hotelInfo.tagDown">
                <h3>{{ hotelInfo.tagDown.nme }}</h3>
                <ul>
                  <li
                    v-for="(item, index) in hotelInfo.tagDown.itemLst"
                    :key="index"
                  >
                    <a :href="item.lnk">{{ item.nme }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="list">
                <div class="item">
                  <div v-for="(item, index) in hotelInfo.prdLst" :key="index">
                    <a :href="item.lnk">
                      <img :src="item.img" alt="" />
                      <div class="mask">
                        <span>{{ item.nme }}</span>
                        <span>￥{{ item.price.amt }}/人起</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="recommend">
                  <img
                    :src="hotelInfo.adLst ? hotelInfo.adLst[0].img : ''"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="海外民宿+短租" name="second">周边游</el-tab-pane>
          <el-tab-pane label="国内酒店" name="third">门票</el-tab-pane>
        </el-tabs>
      </div>
      <!-- 机票 -->
      <div class="ticketContainer">
        <el-tabs v-model="ticketName">
          <el-tab-pane
            class="international"
            label="国际•港澳台特价机票"
            name="first"
          >
            <ul>
              <li
                :class="index === curentIndex ? 'checked' : ''"
                v-for="(item, index) in ticketInfo.tabLst"
                :key="index"
                @click="getTicket(index, item.tabNme)"
              >
                {{ item.tabNme }}
              </li>
            </ul>
            <div class="list">
              <div
                class="item"
                v-for="(item, index) in ticketInfo.caleLst"
                :key="index"
              >
                <p class="itemName">{{ item.dcNme }}到{{ item.acNme }}</p>
                <p class="date">{{ item.dateTxt }}</p>
                <p class="itemInfo">
                  <span
                    >$ <strong>{{ item.price.amt }}</strong> 元起</span
                  >
                  <span class="button">立抢</span>
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="国内特价机票" name="second"
            >国内特价机票</el-tab-pane
          >
        </el-tabs>
      </div>
      <!-- 底部导航 -->
      <div class="footNav">
        <div class="advantage">
          <h3>为什么选择携程</h3>
          <div>
            <div class="advanImg"><img src="" alt="" /></div>
            <div class="server">
              <p class="advanTitle">放心的服务</p>
              <p>领先的服务标准 独创的保障体系</p>
            </div>
          </div>
          <div>
            <div class="advanImg"><img src="" alt="" /></div>
            <div class="price">
              <p class="advanTitle">放心的价格</p>
              <p>具竞争力的价格 无任何隐形费用</p>
            </div>
          </div>
        </div>
        <div class="travelInfo">
          <h3>旅游资讯</h3>
          <ul>
            <li>宾馆索引</li>
            <li>攻略索引</li>
            <li>机票索引</li>
            <li>旅游索引</li>
            <li>邮轮索引</li>
            <li>用车索引</li>
            <li>攻略索引</li>
            <li>网站导航</li>
            <li>火车票索引</li>
          </ul>
        </div>
        <div class="joinIn">
          <h3>加盟合作</h3>
          <ul>
            <li>分销联盟</li>
            <li>广告业务</li>
            <li>保险代理</li>
            <li>酒店加盟</li>
            <li>智慧旅游</li>
            <li>友情链接</li>
            <li>企业礼品卡采购</li>
            <li>代理合作</li>
            <li>目的地</li>
            <li>更多加盟合作</li>
          </ul>
        </div>
        <div class="aboutInfo">
          <h3>关于携程</h3>
          <ul>
            <li>关于携程</li>
            <li>联系我们</li>
            <li>旅游度假资质</li>
            <li>用户协议</li>
            <li>营业执照</li>
            <li>携程信用卡</li>
            <li>携程热点</li>
            <li>诚聘英才</li>
            <li>企业公民</li>
            <li>隐私政策</li>
          </ul>
        </div>
        <div class="wechatCode">
          <p>微信公众号</p>
          <div class="code">
            <img src="../../assets/images/code.jpg" alt="" />
            <p>扫一扫</p>
            <p>了解爆款旅行好货</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getBunnerPic,
  getTravelList,
  getHotelList,
  getHotTicket,
} from '../../api/home.js';
// import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first',
      travelName: 'first',
      hotelName: 'first',
      ticketName: 'first',
      carName: 'first',
      // 轮播图列表
      bunnerList: [],
      // 旅游列表
      traveInfo: {
        destCitys: [],
        tabContentLst: [],
      },
      // 酒店列表
      hotelInfo: {},
      // 机票列表详情
      curentIndex: 0,
      ticketInfo: {},
      // 酒店搜索表单
      hotelSearch: {
        destination: '',
        stayInDate: new Date(),
        checkOutDate: '',
        Rooms: '1',
        peoples: '1',
        stars: '1',
      },
    };
  },
  computed: {},
  methods: {
    // 获取轮播图数据
    getBunnerInfo() {
      getBunnerPic('http://8.129.66.189:8081/home/bunnerList').then(
        (result) => {
          this.bunnerList = result;
        }
      );
    },
    // 获取旅游数据
    getTravelInfo() {
      getTravelList('http://8.129.66.189:8081/home/travelList').then(
        (result) => {
          this.traveInfo = result[0].travelist;
        }
      );
    },
    // 获取酒店数据
    getHotelInfo() {
      getHotelList('http://8.129.66.189:8081/home/hotelList').then((result) => {
        this.hotelInfo = result[0];
      });
    },
    // 获取机票数据
    getHotTicketInfo(name) {
      getHotTicket(`http://8.129.66.189:8081/home/hotTicket?name=${name}`).then(
        (result) => {
          this.ticketInfo = result[0];
        }
      );
    },
    // 切换机票数据
    getTicket(index, name) {
      this.curentIndex = index;
      this.getHotTicketInfo(name);
    },
  },
  components: {},
  mounted() {
    this.getBunnerInfo();
    this.getTravelInfo();
    this.getHotelInfo();
    this.getHotTicketInfo('热门往返');
  },
};
</script>

<style lang="less" scope>
.el-tabs__header {
  margin: 0;
}
.contentContainer {
  min-width: 1180px;
  background-color: rgb(246, 246, 246);
  margin-top: 50px;
  padding-bottom: 50px;
  // 轮播图
  .bunnerContainer {
    margin: 0 auto;
    width: 100%;
    min-width: 1180px;
    height: 340px;
    img {
      width: 100%;
      height: 100%;
    }
    .el-carousel__indicators {
      margin-left: 300px;
    }
    // 搜索框
    .searchContainer {
      height: 340px;
      width: 1180px;
      margin: 0 auto;
      position: relative;
      top: -340px;
      z-index: 10;
      display: flex;
      align-items: center;
      .search {
        background-color: white;
        width: 580px;
        height: 300px;
        display: flex;
        .check {
          width: 90px;
          height: 300px;
          font-size: 16px;
          background-color: #2577e3;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          li {
            flex-grow: 1;
            line-height: 42px;
            border-left: 4px solid #2577e3;
            color: white;
            padding-left: 10px;
            &:hover,
            &.checked {
              border-left: 4px solid #ff9915;
              background-color: white;
              color: #2577e3;
              cursor: pointer;
            }
          }
        }
        .right {
          width: 451px;
          height: 300px;
          margin: 0 auto;
          .el-tabs__ite {
            font-size: 14px;
          }
          .formContainer {
            padding-top: 15px;
          }
        }
      }
    }
  }
  // 旅游
  .travel {
    width: 1180px;
    height: 430px;
    margin: 50px auto;
    font-size: 16px;
    background-color: #fff;
    .el-tabs__header {
      margin-bottom: 15px;
    }
    .hot {
      ul {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        li {
          width: 50px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          border-radius: 5px;
          color: #3983e5;
          font-size: 12px;
          margin-right: 10px;
          &.checked,
          &:hover {
            color: #fff;
            background-color: #3983e5;
          }
        }
      }
      .hotList {
        width: 1140px;
        margin: 0 auto;
        display: flex;
        margin-top: 10px;
      }
      .hotItem {
        display: flex;
        width: 920px;
        height: 340px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
        div {
          width: 220px;
          height: 160px;
          background-color: #bfa;
          position: relative;
          .mask {
            width: 112px;
            height: 112px;
            border-radius: 50%;
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            span {
              width: 102px;
              height: 20px;
              line-height: 20px;
              margin: 0 auto;
              text-align: center;
              display: block;
              color: #fff;
              &:nth-child(1) {
                margin-top: 30px;
                border-bottom: 1px solid white;
              }
            }
          }
        }
      }
      .recommend {
        width: 220px;
        height: 330px;
        background-color: red;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  // 酒店
  .hotelContainer {
    width: 1180px;
    height: 414px;
    margin: 0 auto;
    background-color: white;
    .foreignHotel {
      display: flex;
      .left {
        width: 227px;
        height: 375px;
        padding: 0 20px 15px 20px;
        h3 {
          font-weight: bold;
          padding: 10px 0;
        }
        li {
          a {
            color: #666;
            font-size: 12px;
            margin-top: 5px;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover {
              color: #3983e5;
            }
          }
        }
      }
      .right {
        border-left: 1px solid #dedede;
        .list {
          width: 953px;
          height: 375px;
          display: flex;
          padding-top: 15px;
          padding-bottom: 10px;
          .item {
            width: 715px;
            padding-left: 20px;
            padding-right: 5px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            div {
              width: 220px;
              height: 165px;
              background-color: #bfa;
              position: relative;
              overflow: hidden;
              .mask {
                width: 112px;
                height: 112px;
                border-radius: 50%;
                position: absolute;
                z-index: 2;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                background-color: rgba(0, 0, 0, 0.5);
                span {
                  width: 102px;
                  height: 20px;
                  line-height: 20px;
                  margin: 0 auto;
                  text-align: center;
                  display: block;
                  color: #fff;
                  &:nth-child(1) {
                    margin-top: 30px;
                    border-bottom: 1px solid white;
                  }
                }
              }
            }
          }
          .recommend {
            img {
              height: 340px;
            }
          }
        }
      }
    }
  }
  // 机票
  .ticketContainer {
    width: 1180px;
    height: 440px;
    background-color: #fff;
    margin: 50px auto 0;
    .el-tabs__header {
      margin-bottom: 15px;
    }
    .international {
      ul {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        li {
          width: 50px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          border-radius: 5px;
          color: #3983e5;
          font-size: 12px;
          margin-right: 10px;
          &.checked,
          &:hover {
            color: #fff;
            background-color: #3983e5;
          }
        }
      }
    }
    .list {
      width: 1150px;
      height: 353px;
      margin: 10px auto;
      display: flex;
      flex-wrap: wrap;
      .item {
        height: 106px;
        width: 220px;
        padding: 20px;
        margin-right: 10px;
        background-color: #f8f8f8;
        .date {
          font-size: 12px;
        }
        .itemInfo {
          display: flex;
          justify-content: space-between;
          strong {
            font-size: 20px;
            color: red;
          }
          .button {
            display: block;
            width: 60px;
            line-height: 30px;
            border-radius: 5px;
            background-color: #ffb000;
            color: white;
            text-align: center;
          }
        }
      }
    }
  }
  // 底部导航
  .footNav {
    width: 1180px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    & > div {
      border-right: 1px solid #dedede;
      padding-left: 25px;
      h3 {
        font-size: 20px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 110px;
        }
      }
    }
    .advantage {
      width: 245px;
    }
    .travelInfo {
      width: 260px;
    }
    .joinIn {
      width: 260px;
    }
    .aboutInfo {
      width: 250px;
    }
    .wechatCode {
      width: 160px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 0;
      p {
        width: 100px;
        text-align: center;
      }
      .code {
        width: 132px;
        height: 170px;
        text-align: center;
        padding-top: 10px;
        border: 1px solid #dedede;
        p {
          width: auto;
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
</style>