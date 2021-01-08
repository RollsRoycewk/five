import Vue from "vue";
import App from "./App.vue";

// 引入各种组件
import "./plugins/element.js"; // 王凯
// 引入vuex
import store from "@store/index"; // 王凯
// 引入路由(王凯)
import router from "./routers";

import VueLazyload from "vue-lazyload";

// 引入样式重置(王凯)
import "./styles/reset.css";
// 引入图标字体
import "@assets/iconfont/iconfont.css";

Vue.use(VueLazyload, {
  // loading: require("@assets/images/loading.gif"),
  loading: require("./assets/images/loading.gif"),
});
import "./styles/clearfix.css";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  // 应用路由(王凯)
  router,
  store, // 王凯
}).$mount("#app");
