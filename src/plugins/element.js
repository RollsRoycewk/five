import Vue from "vue";

// 引入elementUi消息提示message(王凯)
import { Button, Message, Carousel, CarouselItem } from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);

// 直接可以this使用(王凯)
Vue.prototype.$message = Message;
