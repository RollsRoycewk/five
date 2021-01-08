<template>
  <div class="remarkOnList">
    <div class="remarkOnTitle">房屋点评</div>
    <div class="remarkOnEvaluate">
      <span>5.0</span>
      <span>超棒</span>
      <span>共40条点评</span>
    </div>
    <div class="points">
      <div class="comtainer">
        <div>如实描述</div>
        <div class="box"></div>
        <div>5.0</div>
      </div>
      <div class="comtainer">
        <div>如实描述</div>
        <div class="box"></div>
        <div>5.0</div>
      </div>
      <div class="comtainer">
        <div>如实描述</div>
        <div class="box"></div>
        <div>5.0</div>
      </div>
      <div class="comtainer">
        <div>如实描述</div>
        <div class="box"></div>
        <div>5.0</div>
      </div>
      <div class="comtainer">
        <div>如实描述</div>
        <div class="box"></div>
        <div>5.0</div>
      </div>
      <div class="comtainer">
        <div>如实描述</div>
        <div class="box"></div>
        <div>5.0</div>
      </div>
    </div>
    <div class="lable clearfix">
      <div class="lableItme">差评</div>
      <div class="lableItme">差评</div>
      <div class="lableItme">差评</div>
      <div class="lableItme">差评</div>
      <div class="lableItme">差评</div>
      <div class="lableItme">差评</div>
    </div>
    <!-- 评论内容区 -->
    <div class="centent">
      <div class="userItem">
        <div class="user clearfix">
          <div class="left">
            <img src="../images/i01-0200.png" alt="" />
            <div>
              <p>111</p>
              <p>111</p>
            </div>
          </div>
          <div class="deta">
            <p>家庭亲子 | 2020-10-03</p>
            <p>途家网提供点评</p>
          </div>
        </div>
        <div class="userRemarkOn">111111111111111111111111</div>
        <div class="images">
          <img src="../images/i01-0200.png" alt="" />
          <img src="../images/i01-0200.png" alt="" />
          <img src="../images/i01-0200.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemarkOn",
};
</script>

<style lang="less" scoped>
.remarkOnList {
  width: 860px;
  height: 2110px;
  .remarkOnTitle {
    padding-bottom: 13px;
    font-size: 28px;
    color: #666;
    font-weight: 700;
  }
  .remarkOnEvaluate {
    span:nth-of-type(1) {
      font-size: 40px;
      color: #3c3c3c;
      font-weight: 700;
    }
    span:nth-of-type(2) {
      font-size: 18px;
      padding-left: 6px;
      color: #ff6a50;
      font-weight: 700;
    }
    span:nth-of-type(3) {
      font-size: 18px;
      padding-left: 20px;
      color: #666;
    }
  }
  .points {
    display: flex;
    flex-wrap: wrap;
    width: 645px;
    padding-bottom: 20px;
    .comtainer {
      width: 204px;
      display: flex;
      align-items: center;
      .box {
        width: 68px;
        height: 6px;
        background-image: linear-gradient(-89deg, #ffc040 3%, #ffa040 98%);
      }
    }
  }
  .lable {
    display: flex;
    margin-top: -7.5px;
    margin-left: -10px;
    padding-bottom: 20px;
    .lableItme {
      height: 20px;
      background: #fdeeeb;
      border-radius: 12px;
      margin-left: 10px;
      margin-top: 14px;
      padding: 1.5px 8px;
      font-size: 12px;
    }
  }
  .centent {
    height: 860px;
    .userItem {
      height: 420px;
      .user {
        .left {
          display: flex;
          img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }
          float: left;
        }
        .deta {
          float: right;
        }
      }
      .images {
        display: flex;

        flex-wrap: wrap;
        img {
          width: 120px;
          height: 120px;
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
