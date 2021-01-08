<template>
  <div class="categoryContainer">
    <div class="categoryItem item-0">
      <span class="title">位置</span>
      <div class="content">
        <div class="label">
          <a href="">不限</a>
        </div>
        <div class="list">
          <div class="listItem listItem-type1">
            热门推荐
            <div class="chunk 1"></div>
          </div>
          <div class="listItem listItem-type1">
            观光景点
            <div class="chunk"></div>
          </div>
          <div class="listItem listItem-type1">
            商圈
            <div class="chunk"></div>
          </div>
          <div class="listItem listItem-type1">
            行政区
            <div class="chunk"></div>
          </div>
          <div class="listItem listItem-type1">
            地铁路线
            <div class="chunk"></div>
          </div>
          <div class="listItem listItem-type1">
            机场/车站
            <div class="chunk"></div>
          </div>
          <div class="listItem listItem-type1">
            高校
            <div class="chunk"></div>
          </div>
          <div class="listItem listItem-type1">
            医院
            <div class="chunk"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="categoryItem item-1">
      <span class="title">价格区间</span>
      <div class="content">
        <div class="label">
          <a href="">不限</a>
        </div>
        <div class="list">
          <div class="listItem">
            <a href="">¥100以下</a>
          </div>
          <div class="listItem">
            <a href="">¥100-200</a>
          </div>
          <div class="listItem">
            <a href="">¥200-300</a>
          </div>
          <div class="listItem">
            <a href="">¥300-400</a>
          </div>
          <div class="listItem">
            <a href="">¥400-600</a>
          </div>
          <div class="listItem">
            <a href="">¥600-800</a>
          </div>
          <div class="listItem">
            <a href="">¥800-1000</a>
          </div>
          <div class="listItem">
            <a href="">¥1000以上</a>
          </div>
        </div>
        <div class="range">
          <span>￥</span>
          <input type="text" class="range-input" />
          <span>~</span>
          <input type="text" class="range-input" />
          <button>确定</button>
        </div>
      </div>
    </div>
    <div class="categoryItem item-2">
      <span class="title">人数</span>
      <div class="content">
        <div class="label">
          <a href="">不限</a>
        </div>
        <div class="list">
          <div class="listItem">
            <a href="">1人</a>
          </div>
          <div class="listItem">
            <a href="">2人</a>
          </div>
          <div class="listItem">
            <a href="">3人</a>
          </div>
          <div class="listItem">
            <a href="">4人</a>
          </div>
          <div class="listItem">
            <a href="">5人</a>
          </div>
        </div>
        <div class="range">
          <input type="text" class="range-input2" />
          <span>人</span>
          <button>确定</button>
        </div>
      </div>
    </div>
    <div class="categoryItem item-3">
      <span class="title">户型</span>
      <div class="content">
        <div class="label">
          <a href="">不限</a>
        </div>
        <div class="list">
          <div class="listItem">
            <a href="">一教</a>
          </div>
          <div class="listItem">
            <a href="">二教</a>
          </div>
          <div class="listItem">
            <a href="">三教</a>
          </div>
          <div class="listItem">
            <a href="">四教</a>
          </div>
          <div class="listItem">
            <a href="">五室</a>
          </div>
          <div class="listItem">
            <a href="">六室</a>
          </div>
          <div class="listItem">
            <a href="">七室</a>
          </div>
          <div class="listItem">
            <a href="">八室及以上</a>
          </div>
        </div>
      </div>
    </div>
    <div class="categoryItem item-4">
      <span class="title">床数</span>
      <div class="content">
        <div class="label">
          <a href="">不限</a>
        </div>
        <div class="list">
          <div class="listItem">
            <a href="">1室</a>
          </div>
          <div class="listItem">
            <a href="">2室</a>
          </div>
          <div class="listItem">
            <a href="">3室</a>
          </div>
          <div class="listItem">
            <a href="">4室</a>
          </div>
          <div class="listItem">
            <a href="">5室</a>
          </div>
        </div>
        <div class="range">
          <input type="text" class="range-input2" />
          <span>人</span>
          <button>确定</button>
        </div>
      </div>
    </div>
    <div class="categoryItem item-5">
      <span class="title">出租户型</span>
      <div class="content">
        <div class="label">
          <a href="">不限</a>
        </div>
        <div class="list">
          <div class="listItem">
            <a href="">整套出租</a>
          </div>
          <div class="listItem">
            <a href="">独立出租</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
};
</script>

<style lang="less" scoped>
.categoryContainer {
  width: 1178px;
  height: 313px;
  margin-top: 10px;
  padding: 0 30px;
  border: 1px solid #e0e0e0;
  position: relative;
  .categoryItem:nth-child(n + 2) {
    border-top: 1px solid #e0e0e0;
  }
  .categoryItem {
    padding: 16px 0 14px;
    font-size: 12px;
    display: flex;
    .title {
      color: #999;
      min-width: 48px;
    }
    .content {
      width: 912;
      display: flex;
      flex-wrap: wrap;
      .list {
        display: flex;
        .listItem {
          display: flex;
          min-width: 79px;
          margin-left: 22px;
          height: 18px;
          font-size: 12px;
          line-height: 12px;
          padding: 3px 8px;
          a {
            color: #333;
            min-width: 24px;
          }
          a:hover {
            text-decoration: underline;
            color: #333;
          }
        }

        .listItem-type1::after {
          content: "";
          margin-left: 4px;
          display: inline-block;
          background-image: url(//pic.c-ctrip.com/h5/bnb/pci/i02.v1.png?v2);
          background-repeat: no-repeat;
          background-position: -186px -126px;
          width: 12px;
          height: 12px;
        }
      }
      .range {
        display: flex;
        margin-left: 101px;
        line-height: 20px;
        height: 20px;
        .range-input {
          display: block;
          width: 10%;
          height: 20px;
        }
        button {
          margin-left: 10px;
          //   height: 22px;
          line-height: 15px;
        }
      }
      .label {
        line-height: 100%;
        margin: 0 32px;
        padding: 3px 8px;
        border-radius: 2px;
        background-image: linear-gradient(269deg, #ff8440 0, #ff6a50 100%);
        a {
          color: #fff;
        }
      }
    }
  }
  .item-2 {
    .range-input2 {
      width: 46px;
    }
  }
  .item-4 {
    .range-input2 {
      width: 46px;
    }
  }
}
</style>
