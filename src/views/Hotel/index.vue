<template>
  <div>
    <div class="head_search">
      <div class="search">
        <ul>
          <li class="destination">
            <label for="search_destination">目的地/酒店名称</label>
            <input
              v-model="search_destination"
              type="text"
              id="search_destination"
            />
          </li>
          <li class="date">
            <div class="left">
              <label for="date_in">入住时间</label>
              <input v-model="date_in" type="text" id="date_in" />
            </div>
            <span class="center">1晚</span>
            <div class="right">
              <label for="date_out">退房时间</label>
              <input v-model="date_out" type="text" id="date_out" />
            </div>
          </li>
          <li class="personal">
            <label for="personal">房间及住客</label>
            <input v-model="personal" type="text" id="personal" />
          </li>
          <li class="keyWords">
            <label for="keyWords">关键词（选填）</label>
            <input
              v-model="keyWords"
              type="text"
              id="keyWords"
              placeholder="机场、火车站、酒店名称或区域"
            />
          </li>
          <li class="bto"><button></button></li>
        </ul>
      </div>
    </div>
    <div class="main_content">
      <div class="filter_container">
        <div>
          <div class="title"></div>
          <div class="content"></div>
        </div>
        <div>
          <div class="title"></div>
          <div class="content"></div>
        </div>
        <div>
          <div class="title"></div>
          <div class="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hotel',
  data() {
    return {
      search_destination: '北京',
      date_in: '1月7日(周四)',
      date_out: '1月8日(周五)',
      personal: '1间，1位',
    };
  },
};
</script>

<style lang="less" scoped>
.head_search {
  width: 100%;
  height: 92px;
  line-height: 92px;
  .search {
    width: 1160px;
    height: 92px;
    margin: 0 auto;
    ul {
      height: 92px;
      line-height: 92px;
      display: flex;
      align-items: center;
      li {
        border: 1px solid #999;
        border-right: none;
      }
      .destination {
        width: 246px;
        height: 60px;
        position: relative;
        label {
          position: absolute;
          color: #999;
          font-size: 12px;
          margin-left: 5px;
          top: -30px;
          left: 0;
        }
        input {
          height: 60%;
          width: 100%;
          border: none;
          margin-top: -13px;
          font-size: 18px;
          font-weight: bold;
        }
      }
      .date {
        width: 322px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        div {
          position: relative;
          label {
            position: absolute;
            color: #999;
            font-size: 12px;
            margin-left: 5px;
            top: -30px;
            left: 0;
          }
          input {
            height: 60%;
            width: 100%;
            border: none;
            margin-top: -13px;
            font-size: 18px;
            font-weight: bold;
          }
        }
        span {
          display: inline-block;
          width: 50px;
        }
      }
      .personal {
        width: 214px;
        height: 60px;
        position: relative;
        label {
          position: absolute;
          color: #999;
          font-size: 12px;
          margin-left: 5px;
          top: -30px;
          left: 0;
        }
        input {
          height: 60%;
          width: 100%;
          border: none;
          margin-top: -13px;
          font-size: 18px;
          font-weight: bold;
        }
      }
      .keyWords {
        width: 316px;
        height: 60px;
        position: relative;
        label {
          position: absolute;
          color: #999;
          font-size: 12px;
          margin-left: 5px;
          top: -30px;
          left: 0;
        }
        input {
          height: 60%;
          width: 100%;
          border: none;
          margin-top: -13px;
          font-size: 18px;
          font-weight: bold;
        }
      }
      .bto {
        width: 60px;
        height: 60px;
        background-color: #2681ff;
        button {
          background-color: transparent;
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          float: left;
        }
      }
    }
  }
}
// 内容区
.main_content {
  width: 1160px;
  margin: 0 auto;
  // 筛选框
  .filter_container {
    width: 100%;
    height: 230px;
    border: 1px solid black;
  }
}
</style>
