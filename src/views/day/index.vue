<template>
  <div>
    <div class="seach-date-left">
      <div class="seach-date-title">
        <i> &lt; </i>
        <span>{{ getFullYear }}年{{ getMonth + 1 }}月</span>
      </div>
      <ul class="calendar-week">
        <li>周日</li>
        <li>周一</li>
        <li>周二</li>
        <li>周三</li>
        <li>周四</li>
        <li>周五</li>
        <li>周六</li>
      </ul>
      <div class="calendar-day">
        <label
          for="hotels-destination"
          v-for="index in getDay"
          :key="index"
        ></label>
        <label
          for="hotels-destination"
          v-for="index in 30"
          :key="index"
        ></label>
      </div>
      <ul class="calendar-day">
        <li v-for="index in getDay" :key="index"></li>
        <li v-for="index in 30" :key="index">{{ index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      getFullYear: 0, //年份
      getMonth: 0, //月份
      getDate: 0, //日期
      getDay: 0, //周几
    };
  },
  mounted() {
    var now = new Date();
    this.getFullYear = now.getFullYear();
    this.getMonth = now.getMonth();
    this.getDate = now.getDate();
    this.getDay = now.getDay();
  },
};
</script>

<style lang="less" scoped>
.seach-date-left {
  width: 264px;
  .seach-date-title {
    text-align: center;
    margin: 0px 0 10px;
    font-weight: 700px;
    i {
      float: left;
      margin-left: 20px;
      font-size: 16px;
    }
  }
}
.calendar-week {
  width: 100%;
  li {
    display: inline;
    width: 37px;
    height: 15px;
    padding: 0 4.5px;
  }
}

.calendar-day {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 37px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    padding: 15px;
  }
}
</style>