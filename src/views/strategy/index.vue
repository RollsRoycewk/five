<template>
  <div>
    <!-- 头部区域 -->
    <header class="header-container">
      <nav class="header-nav">
        <ul class="header-nav-allitem">
          <li>
            <a href="" class="iconfont icon-shouye"></a>
          </li>
          <li><a href="" class="active">目的地攻略</a></li>
          <li><a href=""> 游记</a></li>
          <li><a href="">问答</a></li>
          <li><a href="">当地向导</a></li>
          <li><a href="">口碑榜</a></li>
          <li><a href="">当地玩乐</a></li>
          <li><a href="">我的主页</a></li>
        </ul>
        <button class="header-write">写游记</button>
      </nav>
    </header>

    <!-- 中间组件 -->
    <div class="outer-container">
      <div class="core-wrap">
        <!-- 搜索框 -->
        <div class="search">
          <div class="fixed-position">
            <div>我在深圳</div>
            <div>切换城市></div>
          </div>
          <div>
            <input
              type="text"
              placeholder="搜索城市/景点/游记/问答/住宿/用户"
              class="search-input"
            />
            <button class="search-button">搜索</button>
          </div>
        </div>
        <!-- banner -->
        <div class="banner-area">
          <div class="side-nav">
            <ul>
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
              </li>
            </ul>
          </div>
          <div class="banner">
            <div class="banner-top">
              <el-carousel height="414px">
                <el-carousel-item>
                  <!-- <h3 class="small">{{ item }}</h3> -->
                  <img
                    src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/baa26b15ba14d443feeb78df47160524.jpg"
                    alt=""
                  />
                </el-carousel-item>
                <el-carousel-item>
                  <!-- <h3 class="small">{{ item }}</h3> -->
                  <img
                    src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/16409e68ea41d91b14aff95ec52105d1.jpg"
                    alt=""
                  />
                </el-carousel-item>
                <el-carousel-item>
                  <!-- <h3 class="small">{{ item }}</h3> -->
                  <img
                    src="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/f120bd9310af9b72bbac8d005f1ef146.jpg"
                    alt=""
                  />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="swiper">
              <el-carousel height="197px">
                <el-carousel-item>
                  <div>
                    <img
                      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1170822897,1825279535&fm=26&gp=0.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1232063901,3899955012&fm=26&gp=0.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=233811394,2855633515&fm=26&gp=0.jpg"
                      alt=""
                    />
                  </div>
                </el-carousel-item>
                <el-carousel-item>
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
                </el-carousel-item>
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
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  name: "strategy",
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
  }
}
</style>