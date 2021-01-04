import Vue from "vue";
import App from "./App.vue";

// 引入各种组件
import "./plugins/element.js"; // 王凯
// 引入vuex
import store from "@store/index"; // 王凯
// 引入路由(王凯)
import router from "./routers";

// 引入样式重置(王凯)
import "./styles/reset.css";
// 引入字体图标(张升涛)
import "./styles/iconfont.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 应用路由(王凯)
  router,
  store, // 王凯
}).$mount("#app");
