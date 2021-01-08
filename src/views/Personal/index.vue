<template>
  <div class="PersonalContainer">
    <nav class="navList">
      <span class="active"><a href="#">我的携程首页</a></span>
      <span><a href="#">订单</a></span>
      <span><a href="#">我的消息</a></span>
      <span><a href="#">钱包</a></span>
      <span><a href="#">优惠券</a></span>
      <span><a href="#">积分</a></span>
      <span><a href="#">我的收藏</a></span>
      <span><a href="#">我的发票</a></span>
      <span><a href="#">常用信息</a></span>
      <span><a href="#">个人中心</a></span>
    </nav>
    <div class="content">
      <div class="personal">
        <div class="header">
          <div class="personalPic">
            <span></span>
            <img
              src="https://dimg04.c-ctrip.com/images/t1/headphoto/057/777/943/0b93f8268d5546308915f4f9fcaa9483.jpg"
              alt=""
            />
          </div>
          <div class="members">
            <p>尊敬的会员</p>
            <p>领取会员福利></p>
          </div>
        </div>
        <div class="headerNav"></div>
        <div class="tab">
          <el-tabs v-model="orderName">
            <el-tab-pane label="全部订单" name="first">
              <div class="none">
                <i></i>
                <span>暂时没有相关订单</span>
              </div>
            </el-tab-pane>
            <el-tab-pane label="未出行" name="second">未出行</el-tab-pane>
            <el-tab-pane label="待付款" name="third">待付款</el-tab-pane>
            <el-tab-pane label="待评价" name="fourth">待评价</el-tab-pane>
          </el-tabs>
        </div>
        <div class="tab">
          <el-tabs v-model="collectionName">
            <el-tab-pane label="最近收藏" name="first">
              <div class="none">
                <i></i>
                <span>收藏夹空空的，随便逛逛吧，看看有没有喜欢的~</span>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="tab">
          <el-tabs v-model="historyName">
            <el-tab-pane label="浏览记录" name="first">
              <div class="none">
                <i></i>
                <span>足迹空空，随便逛逛吧</span>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="personalNav">
        <div class="center">
          <p>应用中心</p>
          <ul>
            <li>
              <a href="#">
                <i></i>
                我的特权
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
                航班动态
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
                积分兑换
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
                邮件订阅
              </a>
            </li>
          </ul>
        </div>
        <div class="community">
          <p>社区</p>
          <ul>
            <li>
              <a href="#">
                <i></i>
                当地向导
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
                攻略问答
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
                精选邮寄
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
                分享点评
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  data() {
    return {
      orderName: 'first',
      collectionName: 'first',
      historyName: 'first',
    };
  },
};
</script>

<style lang="less" scoped>
.PersonalContainer {
  .el-tabs__item {
    margin: 0 50px;
  }
  width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .navList {
    width: 150px;
    height: 400px;
    margin-top: 10px;
    border: 1px solid #bed3ee;
    background-color: #f7fbff;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
      line-height: 40px;
      border-left: 3px solid white;
      padding-left: 20px;
      cursor: pointer;
      a {
        color: black;
      }
      &.active,
      &:hover {
        border-left: 3px solid #2477e3;
        a {
          color: #2477e3;
        }
      }
    }
  }
  .content {
    width: 1020px;
    height: 1000px;
    padding: 8px;
    display: flex;
    background-color: #efefef;
    .personal {
      width: 730px;
      height: 900px;
      .header {
        width: 730px;
        height: 104px;
        display: flex;
        align-items: center;
        background: url(https://pic.c-ctrip.com/platform/online/my/home/bg-member-info.png);
        .personalPic {
          width: 78px;
          height: 78px;
          line-height: 78px;
          text-align: center;
          overflow: hidden;
          position: relative;
          margin: 0 30px;
          span {
            position: absolute;
            top: 0;
            left: 0;
            width: 78px;
            height: 78px;
            z-index: 5;
            background: url(https://pic.c-ctrip.com/platform/online/my/home/border-head.png);
          }
          img {
            position: relative;
            border-radius: 50%;
            width: 68px;
            height: 68px;
          }
        }
        .members {
          color: white;
        }
      }
      .headerNav {
        width: 730px;
        height: 46px;
        background-color: #fff;
      }
      .tab {
        margin-top: 10px;
        height: 240px;
        background-color: #fff;
        text-align: center;
        .none {
          line-height: 180px;
          i {
            &::before {
              content: '';
              vertical-align: middle;
              display: inline-block;
              width: 112px;
              height: 108px;
              background: url('../../assets/images/un_home_none.png');
            }
          }
        }
      }
    }
    .personalNav {
      .center,
      .community {
        width: 270px;
        height: 150px;
        margin-left: 10px;
        margin-bottom: 10px;
        background-color: #fff;
        p {
          font-size: 20px;
          padding: 10px;
        }
        ul {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
          a {
            display: flex;
            flex-direction: column;
            align-items: center;
            i {
              display: block;
              width: 36px;
              height: 32px;
              background: url(https://pic.c-ctrip.com/platform/online/my/home/un_apply_160829.png);
            }
          }
        }
      }
      .center {
        li:nth-child(1) {
          i {
            background-position: 0 0px;
          }
        }
        li:nth-child(2) {
          i {
            background-position: 0 -75px;
          }
        }
        li:nth-child(3) {
          i {
            background-position: -38px -75px;
          }
        }
        li:nth-child(4) {
          i {
            background-position: -72px 0px;
          }
        }
      }
      .community {
        li:nth-child(1) {
          i {
            background-position: 0 -32px;
          }
        }
        li:nth-child(2) {
          i {
            background-position: -36px -32px;
          }
        }
        li:nth-child(3) {
          i {
            background-position: -70px -32px;
          }
        }
        li:nth-child(4) {
          i {
            background-position: -108px -32px;
          }
        }
      }
    }
  }
}
</style>
