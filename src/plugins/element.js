import Vue from "vue";

// 引入elementUi消息提示message(王凯)
import {
  Button,
  Message,
  Carousel,
  CarouselItem,
  Pagination,
} from "element-ui";

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.use(Pagination);

// 直接可以this使用(王凯)
Vue.prototype.$message = Message;
