import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import About from "../views/about/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // component: () => import("../views/about/index.vue"),
    component: About,
  },
];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

export default routes;
