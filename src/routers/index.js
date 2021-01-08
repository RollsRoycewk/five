import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home";

// const Home = () => import(/* webpackChunkName: "Home" */ "../views/home");
const Hotel = () => import(/* webpackChunkName: "Hotel" */ "../views/hotel");
// const  Day =()=>() => import(/* webpackChunkName: "Day" */"@views/day")
Vue.use(VueRouter);

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
// // 简写形式
VueRouter.prototype.push = function(location, onComplete, onAbort = () => {}) {
  return push.call(this, location, onComplete, onAbort);
};
VueRouter.prototype.replace = function(
  location,
  onComplete,
  onAbort = () => {}
) {
  return replace.call(this, location, onComplete, onAbort);
};

const router = new VueRouter({
  // mode: "hash",
  // mode: "history",
  routes: [
    // {
    //   path: "/",
    //   component: Home,
    // },
    {
      path: "/",
      component: Hotel,
    },
    // {
    //   path: "/",
    //   component: Day,
    // },
  ],
});

export default router;
