<template>
  <div class="tourHeaderContainer">
    <div class="tourHeader">
      <img src="../images/header.png" />
      <!-- city -->
      <div class="city">
        <dl class="cityChose" @click.stop="isShowCityBox">
          <dt>
            <i></i>
            上海
            <span>站</span>
            <b></b>
          </dt>
          <dd class="cityBox" :style="{display:cityBox}">
            <div class="hotCity">
              <h4>热门出发城市</h4>
              <p>
                <a href="javascript:;">北京</a>
                <a href="javascript:;">上海</a>
                <a href="javascript:;">重庆</a>
                <a href="javascript:;">南京</a>
                <a href="javascript:;">北京</a>
                <a href="javascript:;">上海</a>
                <a href="javascript:;">重庆</a>
                <a href="javascript:;">南京</a>
                <a href="javascript:;">北京</a>
                <a href="javascript:;">上海</a>
                <a href="javascript:;">重庆</a>
                <a href="javascript:;">南京</a>
              </p>
            </div>
            <div class="citySearch">
              <div class="search_input">
                <input type="text" placeholder="搜索城市（支持汉字、首字母查询）" />
              </div>
              <div class="words_select">
                <a>ABCDEFGH</a>
                <a>JKLMNOPQ</a>
                <a>RSTWX</a>
                <a>YZ</a>
              </div>
              <ul style="display:block">
                <li>
                  <span>A</span>
                  <a href="javascript:;">澳门</a>
                  <a href="javascript:;">澳门</a>
                  <a href="javascript:;">澳门</a>
                  <a href="javascript:;">安康</a>
                  <a href="javascript:;">安康</a>
                  <a href="javascript:;">安康</a>
                  <a href="javascript:;">安康</a>
                </li>
              </ul>
              <ul style="display:none">
                <li>
                  <span>J</span>
                  <a href="javascript:;">九江</a>
                  <a href="javascript:;">九寨沟</a>
                  <a href="javascript:;">九寨沟</a>
                  <a href="javascript:;">九寨沟</a>
                  <a href="javascript:;">九寨沟</a>
                  <a href="javascript:;">九寨沟</a>
                  <a href="javascript:;">九寨沟</a>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
      </div>
      <!-- search -->
      <div class="search">
        <div class="content">
          <dl>
            <dt>全部产品</dt>
            <dd>
              <a href="javascript:;">出发地参团</a>
              <a href="javascript:;">目的地参团</a>
              <a href="javascript:;">自由行</a>
              <a href="javascript:;">私家团</a>
            </dd>
          </dl>
          <input type="text" placeholder="请输入目的地、主题或关键字" ref="input" @click.stop="ShowSeaCon" v-model="inputValue"/>
          <div class="search_content" :style="{display:isShowSeaCon}">
            <ul>
              <li v-for="(content,index) in searchContent" :key="index">
                  <a target="_blank" :href="content.url">
                      <span>{{content.districtName}}</span>
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <a class="btn">
          <i></i>
          搜 索
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Search",
  data() {
    return {
      cityBox: "none",
      isShowSeaCon: "none",
      inputValue:'',
      searchContent:[]
    };
  },
  watch:{
      inputValue(newVal) {
          axios({
              url:"https://m.ctrip.com/restapi/h5api/globalsearch/search?action=online&source=globalonline&keyword="+newVal,
              methods:"GET"
          })
          .then((res)=> {
              console.log(res.data.data);
              this.searchContent = res.data.data;
          })
          .catch((err)=> {
              console.log(err)
          })
      }
  },
  methods: {
    // 控制城市选择的显示
    isShowCityBox() {
      if (this.cityBox === "none") {
        this.cityBox = "block";
        return;
      }
      this.cityBox = "none";
      if(this.isShowSeaCon === "block") {
          this.isShowSeaCon === "none"
      }
    },
    // 聚焦搜索的显示
    ShowSeaCon() {
      // this.$refs.input.focus();
      this.isShowSeaCon = "block";
      if(this.isShowSeaCon === "block" && this.cityBox === "block"){
          this.isShowCityBox();
      }
    },
    // 关闭
    close() {
        if(this.cityBox === "block") {
            this.cityBox = "none";
        }
        if(this.isShowSeaCon === "block") {
            this.isShowSeaCon = "none";
            this.searchContent = []
        }  
    }
  },
  mounted() {
    this.$bus.$on('close',this.close)
  }
};
</script>

<style lang="less" scoped>
.tourHeaderContainer {
  width: 1200px;
  height: 46px;
  margin: 0 auto;
}
.tourHeader {
  margin-top: 10px;

  img {
    width: 174px;
    height: 40px;
    float: left;
  }
  .city {
    width: 176px;
    height: 40px;
    float: left;
    position: relative;
    .cityChose {
      background: #f8f8f8;
      height: 100%;
      border: 1px solid #d6d6d6;
      color: #06c;
      cursor: pointer;
    }
    dt {
      height: 38px;
      padding: 0 34px 0 50px;
      line-height: 38px;
      font-size: 16px;
    }
    dt > i {
      position: absolute;
      background-image: url("../images/tourSprite.png");
      background-repeat: no-repeat;
      background-position: -180px -152px;
      width: 14px;
      height: 17px;
      left: 18px;
      top: 10px;
    }
    dt > span {
      font-size: 12px;
      color: #000;
    }
    dt > b {
      position: absolute;
      background-image: url("../images/tourSprite.png");
      background-repeat: no-repeat;
      background-position: -183px -133px;
      width: 8px;
      height: 5px;
      top: 16px;
      right: 14px;
    }
    .cityBox {
      position: absolute;
      top: 40px;
      background: #fff;
      border: 1px solid #d6d6d6;
      padding: 14px;
      width: 350px;
      left: 0;
      z-index: 11;
      margin-left: -174px;
      .hotCity {
        border-bottom: 1px solid #eaeaea;
        h4 {
          color: #999;
          font-weight: 400;
          font-size: 12px;
        }
        a {
          display: inline-block;
          color: #666;
          margin-right: 8px;
        }
      }
      .citySearch {
        .search_input {
          position: relative;
          margin-top: 10px;
          height: 28px;
          p {
            color: #999;
            position: absolute;
            top: 0;
            left: 0;
            text-indent: 10px;
            line-height: 28px;
            font-size: 12px;
          }
          input {
            width: 300px;
            height: 28px;
            border-radius: 5px;
          }
        }
        .words_select {
          padding: 10px 0;
          a {
            padding: 0 10px;
            color: #000;
            &:hover {
              background-color: #1d74e6;
              color: #fff;
            }
            &.on {
              background-color: #1d74e6;
              color: #fff;
            }
          }
        }
        ul {
          max-height: 442px;
          position: relative;
          li {
            line-height: 30px;
            padding-left: 15px;
            border-top: 1px dotted #eaeaea;
          }
          span {
            color: #1d74e6;
            font-weight: 700;
            font-size: 14px;
            float: left;
            margin-left: -15px;
          }
          a {
            color: #000;
            margin-left: 15px;
            display: inline-block;
            font-size: 12px;
            &:hover {
              text-decoration: underline;
              color: #1d74e6;
            }
          }
        }
      }
    }
  }
  .search {
    float: right;
    width: 810px;
    .content {
      width: 400px;
      height: 38px;
      border: 3px solid #fe9813;
      position: relative;
      float: left;
      dl {
        position: absolute;
        top: 0;
        left: 0;
        width: 117px;
        height: 100%;
        border-right: 2px solid #fe9813;
        overflow: hidden;
        text-align: center;
        //padding-left: 10px;
        background-color: #fff8d5;
        z-index: 10;
        &:hover {
          overflow: visible;
          background: #fff;
          color: #06c;
        }
        dd {
          background: #fff;
          border: 2px solid #fe9813;
          z-index: 11;
        }
        dd a {
          display: block;
          color: #333;
          padding: 5px 0px;
          &:hover {
            background-color: #eee;
            color: #666;
          }
        }
      }
      dl dt {
        height: 33px;
        line-height: 32px;
      }
      input {
        position: absolute;
        right: 0;
        width: 276px;
        height: 100%;
        //   text-align: center;
        border: 0;
      }
      .search_content {
        position: absolute;
        top: 35px;
        left: 115px;
        width: 104%;
        height: 500px;
        background: #fff;
        border: 1px solid #eee;
        z-index: 99;
        border-radius: 5px;
        overflow: hidden;
        ul {
          li {
            font-size: 20px;
            font-weight: 500;
            height: 50px;
            border-bottom: 1px solid #eee;
            line-height: 50px;
            span {
              padding-left: 20px;
            }
          }
        }
      }
    }
    .btn {
      float: left;
      height: 38px;
      width: 128px;
      color: #fff;
      text-align: center;
      background-color: #fb9125;
      cursor: pointer;
      line-height: 38px;
      font-size: 18px;
      position: relative;
      border-radius: 0 5px 5px 0;
      i {
        position: absolute;
        background-image: url("../images/tourSprite.png");
        background-position: -394px -303px;
        background-repeat: no-repeat;
        width: 17px;
        height: 17px;
        left: 20px;
        top: 10px;
      }
    }
  }
}
</style>
