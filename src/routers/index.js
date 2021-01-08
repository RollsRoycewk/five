import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home";

const Home = () => import(/* webpackChunkName: "Home" */ "../views/home");
const Tour = () => import(/* webpackChunkName: "Home" */ "../views/tour");
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
  console.log(location);
  return replace.call(this, location, onComplete, onAbort);
};

const router = new VueRouter({
  // mode: "hash",
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/tour",
      component: Tour,
    },
  ],
});

export default router;
