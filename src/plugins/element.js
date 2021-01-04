import Vue from "vue";

// 引入elementUi消息提示message(王凯)
import { Button, Message, Carousel, CarouselItem, Tabs, TabPane, Form, FormItem, Input, Col, DatePicker } from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Col);
Vue.use(DatePicker);

// 直接可以this使用(王凯)
Vue.prototype.$message = Message;
