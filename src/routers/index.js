import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home";

const Home = () => import(/* webpackChunkName: "Home" */ "../views/home");
const Minsu = () => import(/* webpackChunkName: "Home" */ "../views/Minsu");
const DetileItem = () =>
  import(/* webpackChunkName: "Home" */ "../views/DetileItem");
const CityDetile = () =>
  import(/* webpackChunkName: "Home" */ "../views/CityDetile");

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
      name: "minsu",
      path: "/minsu",
      component: Minsu,
    },
    {
      name: "CityDetile",
      path: "/cityDetile",
      component: CityDetile,
    },
    {
      name: "DetileItem",
      path: "/detileItem",
      component: DetileItem,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
