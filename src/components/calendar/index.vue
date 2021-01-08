<template>
  <div class="calendar">
    <div>
      <div class="header">选择日期</div>
      <ul class="week">
        <li class="item active">日</li>
        <li class="item">一</li>
        <li class="item">二</li>
        <li class="item">三</li>
        <li class="item">四</li>
        <li class="item">五</li>
        <li class="item active">六</li>
      </ul>
    </div>
    <div class="calendar-days" ref="calendarLayout">
      <div ref="calendarCont">
        <div v-for="(calendarItem, index) in calendarList" :key="index">
          <div class="year-month">
            {{ calendarItem.year }}年{{
              calendarItem.month + 1 >= 10
                ? calendarItem.month + 1
                : `0${calendarItem.month + 1}`
            }}月
          </div>
          <div
            class="days-list"
            v-for="(item, index) in calendarItem.daysList"
            :key="index"
          >
            <div
              class="item"
              v-for="(day, index) in item"
              :key="index"
              @click="select(day.time)"
            >
              <div
                :class="[
                  'item-cont',
                  {
                    today: todayTime === day.time,
                    'before-day': day.time < todayTime,
                    'select-start': day.time && day.time === selectTime.start,

                    'select-end': day.time && day.time === selectTime.end,
                    select:
                      day.time &&
                      day.time > selectTime.start &&
                      day.time < selectTime.end,
                  },
                ]"
              >
                <div class="left-side"></div>
                <div class="date">{{ day.date }}</div>
                <div class="right-side"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calendarList: [
        {
          year: 2020,
          month: 1,
          daysList: [
            [
              {
                date: "08",
                time: "",
              },
            ],
          ],
        },
      ],
      todayTime: "", //毫秒数
      selectTime: {
        start: "",
        end: "",
      },
    };
  },
  methods: {
    select(time) {
      if (time < this.todayTime) {
        return false;
      }
      if (!this.selectTime.start && !this.selectTime.end) {
        this.selectTime.start = time;
      } else if (this.selectTime.start && this.selectTime.end) {
        this.selectTime.start = time;
        this.selectTime.end = "";
      } else if (this.selectTime.start && this.selectTime.start < time) {
        this.selectTime.end = time;
      } else if (this.selectTime.start && this.selectTime.start > time) {
        this.selectTime.start = time;
        this.selectTime.end = "";
      }
    },
    handScroll() {
      this.$refs["calendarLayout"].addEventListener("scroll", () => {
        const bottom = this.$refs["calendarCont"].getBoundingClientRect()
          .bottom;
        const clientH = document.documentElement.clientHeight;
        if (Math.ceil(bottom - clientH) <= 100) {
          let from;
          if (this.calendarList.length) {
            // 获取开始计算的月份
            let monthTime = this.calendarList[this.calendarList.length - 1]
              .daysList[1][0].time;
            let dateObj = new Date(monthTime);
            dateObj.setMonth(new Date(monthTime).getMonth() + 1);
            dateObj.setDate(1);
            from = dateObj.getTime();
          }
          // 再展示一年
          this.calendarList = this.calendarList.concat(
            this.getSomeDate(from, 12)
          );
        }
      });
    },
    getSomeDate(from, howManyMonth = 12) {
      let returnData = [];
      if (!from) {
        let dateObj = new Date();
        // 将时间点设置成每个月的1号
        dateObj.setDate(1);
        from = dateObj.getTime();
      }
      let monthTimeList = [];
      let dataObj = new Date(from);
      // 将时间点设置成每个月的1号
      dataObj.setDate(1);
      monthTimeList.push(dataObj.getTime());
      for (let i = 1; i < howManyMonth; i++) {
        monthTimeList.push(dataObj.setMonth(dataObj.getMonth() + 1));
      }
      monthTimeList.forEach((item) => {
        returnData.push({
          year: new Date(item).getFullYear(),
          month: new Date(item).getMonth(),
          daysList: this.getDates(item),
        });
      });
      return returnData;
    },
    getDates(monthTime) {
      let daysArry = [];
      let dateObj = new Date(monthTime);
      let firstDayWeek = dateObj.getDay();
      // 获取这个月的最后一天
      dateObj.setDate(1);
      dateObj.setMonth(dateObj.getMonth() + 1);
      dateObj.setDate(0);
      let lastDayWeek = dateObj.getDay();
      // 获取这个月的最后一天的日期,也就是这个月的总天数
      let days = dateObj.getDate();
      // 获取这个月份每一天的日期和0点的时间戳
      for (let date = 1; date <= days; date++) {
        let dateObj = new Date(monthTime);
        dateObj.setDate(date);
        dateObj.setHours(0, 0, 0, 0);
        daysArry.push({ date: date, time: dateObj.getTime() });
      }
      for (let i = 0; i <= firstDayWeek - 1; i++) {
        daysArry.unshift({ date: "", time: "" });
      }
      for (let i = lastDayWeek + 1; i <= 6; i++) {
        daysArry.push({ date: "", time: "" });
      }
      // 按周分组
      let group = Math.ceil(daysArry.length / 7);
      let daysList = [];
      for (let i = 0; i < group; i++) {
        daysList.push(daysArry.slice(i * 7, (i + 1) * 7));
      }
      return daysList;
    },
    // 获取今天的日期和时间戳
    getTodayTime() {
      let dateObj = new Date();
      dateObj.setHours(0, 0, 0, 0); //获取小时数
      //获取当前距离1970年1月1日80000 的毫秒数 getTime
      this.todayTime = dateObj.getTime();
    },
  },
  mounted() {
    this.calendarList = this.getSomeDate();
    this.getTodayTime();
    this.handScroll();
  },
};
</script>
<style lang="less" >
.calendar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .calendar-days {
    height: 500px;
    flex: 1 1 auto;
    overflow: auto;
  }
  .header {
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    line-height: 36px;
    padding: 48px 0;
    color: #333;
  }
  .week {
    color: #a6a6a6;
    .active {
      color: #ff3300;
    }
  }
  .days-list {
    height: 104px;
    line-height: 104px;
  }
  .week,
  .days-list {
    display: flex;
    justify-content: space-between;
    .item {
      width: 100px;
      height: 104px;
      flex-grow: 1;
      text-align: center;
      .item-cont {
        font-size: 28px;
        font-weight: 500;
        height: 100%;
        position: relative;
        .left-side,
        .right-side {
          width: 50%;
          height: 100%;
        }
        .left-side {
          float: left;
        }
        .right-side {
          float: right;
        }
        .date {
          position: absolute;
          width: 72px;
          height: 100%;
          top: 0;
          left: 50%;
          margin-left: -36px;
          // background: rgba(255, 51, 0, 1);

          border-radius: 12px;
          // opacity: 0.06;
        }
      }
      .today {
        .date {
          &::before {
            position: absolute;
            content: "今天";
            top: -30px;
            left: 8px;
            // left: 30px;
          }
        }
      }
      .before-day {
        color: #a6a6a6;
      }
      .select-start,
      .select-end {
        .date {
          background: rgba(255, 92, 52, 1);
          color: #fff;
          &::before {
            position: absolute;
            top: -30px;
            left: 8px;
            content: "开始";
          }
        }
      }
      .select-end {
        .date {
          &::before {
            content: "结束";
          }
        }
      }
      .select-start {
        .right-side {
          background: #fff3f1;
        }
      }
      .select-end {
        .left-side {
          background: #fff3f1;
        }
      }
      .select {
        background: #fff3f1;
      }
    }
  }
  .calendar-days {
    .year-month {
      font-weight: 500;
      font-size: 32px;
      color: #333;
      text-align: center;
      padding: 32px 0 16px;
      line-height: 32px;
    }
  }
}
</style>
