<template>
  <div>
    <Header></Header>
    <div class="contentContainer">
      <!-- 轮播图 -->
      <div class="bunnerContainer">
        <el-carousel trigger="click" :interval="5000" height="340px">
          <el-carousel-item>
            <img src="../../assets/images/bunner1.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/images/bunner2.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/images/bunner3.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/images/bunner4.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/images/bunner5.jpg" alt="" />
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
                  <div>目的地<input type="text" /></div>
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
              <li class="checked">境内</li>
              <li>日本</li>
              <li>东南亚</li>
              <li>欧洲</li>
              <li>美洲</li>
              <li>澳中东非</li>
            </ul>
            <div class="hotList">
              <div class="hotItem">
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
                  </div>
                </div>
                <div>
                  <img src="../../assets/images/hot1.jpg" alt="" />
                  <div class="mask">
                    <span>三亚</span>
                    <span>￥1223/人起</span>
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
        <el-tabs v-model="travelName">
          <el-tab-pane class="foreignHotel" label="海外酒店" name="first">
            <div class="left">
              <div>
                <h3>促销</h3>
                <ul>
                  <li><span>睡遍全世界—新加坡国家馆</span></li>
                  <li>睡遍全世界—日本国家馆</li>
                  <li>睡遍全世界—澳大利亚站</li>
                  <li>睡遍全世界-马来西亚国家馆</li>
                  <li>睡遍全世界—泰国国家馆</li>
                </ul>
              </div>
              <div>
                <h3>发现酒店</h3>
                <ul>
                  <li>
                    <span>流行与复古结合的热门人气地——首尔仁寺洞钟路</span>
                  </li>
                  <li>
                    <span
                      >特别的旅行，美味的餐食，绝美的夜景，这次冬季旅行就去釜山吧</span
                    >
                  </li>
                  <li><span>睡遍全世界—澳大利亚站</span></li>
                  <li><span>孟加拉国吉大港酒店推荐</span></li>
                  <li><span>最受国人欢迎的伦敦酒店</span></li>
                  <li>
                    <span>流行与复古结合的热门人气地——首尔仁寺洞钟路</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="list">
                <div class="item">
                  <div>
                    <img src="../../assets/images/hot1.jpg" alt="" />
                    <div class="mask">
                      <span>三亚</span>
                      <span>￥1223/人起</span>
                    </div>
                  </div>
                  <div>
                    <img src="../../assets/images/hot1.jpg" alt="" />
                    <div class="mask">
                      <span>三亚</span>
                      <span>￥1223/人起</span>
                    </div>
                  </div>
                  <div>
                    <img src="../../assets/images/hot1.jpg" alt="" />
                    <div class="mask">
                      <span>三亚</span>
                      <span>￥1223/人起</span>
                    </div>
                  </div>
                  <div>
                    <img src="../../assets/images/hot1.jpg" alt="" />
                    <div class="mask">
                      <span>三亚</span>
                      <span>￥1223/人起</span>
                    </div>
                  </div>
                  <div>
                    <img src="../../assets/images/hot1.jpg" alt="" />
                    <div class="mask">
                      <span>三亚</span>
                      <span>￥1223/人起</span>
                    </div>
                  </div>
                  <div>
                    <img src="../../assets/images/hot1.jpg" alt="" />
                    <div class="mask">
                      <span>三亚</span>
                      <span>￥1223/人起</span>
                    </div>
                  </div>
                </div>
                <div class="recommend">
                  <img src="../../assets/images/recommend.jpg" alt="" />
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
              <li class="checked">境内</li>
              <li>日本</li>
              <li>东南亚</li>
              <li>欧洲</li>
              <li>美洲</li>
              <li>澳中东非</li>
            </ul>
            <div class="list">
              <div class="item" v-for="item in 12" :key="item">
                <p class="itemName">上海到澳门</p>
                <p class="date">1月09日 - 1月16日</p>
                <p class="itemInfo">
                  <span>$ <strong>600</strong> 元起</span>
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
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@components/Header/index';
import Footer from '@components/Footer/index';
export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first',
      travelName: 'first',
      ticketName: 'first',
      carName: 'first',
    };
  },
  components: {
    Header,
    Footer
  },
};
</script>

<style lang="less" scope>
.el-tabs__header {
  margin: 0;
}
.contentContainer {
  background-color: rgb(246, 246, 246);
  height: 2000px;
  margin-top: 50px;
  // 轮播图
  .bunnerContainer {
    height: 340px;
    img {
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
          span {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .right {
        border-left: 1px solid black;
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
    background-color: #fff;
    margin: 50px auto;
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
}
</style>