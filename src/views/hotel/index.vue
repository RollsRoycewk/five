<template>
  <div class="aouter">
    <img
      class="aouter-img"
      src="http://dimg02.c-ctrip.com/images/10031e000001fq0hcB1E3.jpg_.webp"
      alt=""
    />
    <div class="seach">
      <em class="seach-em">订酒店.用携程.</em>
      <div class="seach-div">
        <div class="seach-list">
          <div class="seach-place">
            <label for="hotels-destination">目的地/酒店名称</label>
            <input
              type="text"
              autocomplete="off"
              placeholder="城市、机场、区域、地标或酒店名称"
            />
          </div>

          <div class="seach-day">
            <div class="day-left">
              <label for="hotels-destination">入住时间</label>
              <h4>2月11日(周四)</h4>
              <div class="seach-date" v-if="false">
                <Calendar />
                <Calendar />
                <div class="foter">
                  <p>4月1日(周五) - 6月3日(周四) （2晚）</p>
                  <p>入住和退房时间均为酒店当地时间</p>
                </div>
              </div>
            </div>
            <p class="day-center">1晚</p>
            <div class="day-right">
              <label for="hotels-destination">退房时间</label>
              <h4>2月11日(周四)</h4>
              <div class="seach-date" v-if="false">
                <Calendar />
                <Calendar />
                <div class="foter">
                  <p>4月1日(周五) - 6月3日(周四) （2晚）</p>
                  <p>入住和退房时间均为酒店当地时间</p>
                </div>
              </div>
            </div>
          </div>

          <div class="seach-number">
            <div>
              <label for="hotels-destination">住房及住客</label>
              <h4>1间，1位</h4>
            </div>
            <span class="iconfont icon-xiajiantou" v-if="true"></span>
            <span class="iconfont icon-shangjiantou_huaban" v-else></span>
            <div class="seach-number-room">
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
          <div class="seach-keyword">098</div>
        </div>
      </div>
      <div class="seach-star"></div>
    </div>
  </div>
</template>

<script>
import Calendar from "@components/calendar";
export default {
  name: "Hotel",
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
    border: 1px solid #e40a39;
    // box-shadow: rgb(12, 96, 221);
    .seach-list {
      display: flex;
      label {
        font-size: 14px;
        color: #8592a6;
        user-select: none;
      }
      input {
        width: 100%;
        border: none;
      }
      .seach-place {
        width: 270px;
        height: 76px;
        padding: 20px;
        border: 1px solid #8592a6;
        input {
          font-size: 15px;
          font-weight: 700px;
        }
      }
      .seach-day {
        display: flex;
        height: 76px;
        padding: 20px;
        border: 1px solid #8592a6;
        border-left: none;
        position: relative;
        .seach-date {
          position: absolute;
          top: 75px;
          left: 0px;
          border: 1px solid rgb(145, 48, 48);
          padding: 20px;
          width: 570px;
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          .foter {
            width: 100%;
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #8592a6;
          }
        }
        .day-center {
          text-align: center;
          line-height: 3;
          padding: 0 40px;
        }
        .day-right {
          text-align: right;
        }
      }
      .seach-number {
        padding: 19px 10px 8px;
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
            display: block;
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
    }
  }
}
</style>
