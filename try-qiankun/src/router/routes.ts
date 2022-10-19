import { RouteRecordRaw } from "vue-router";

const mainRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: {
        name: 'Home'
    }
  },
  {
    name: "Home",
    path: "/home",
    component: () => import("../views/home/index.vue"),
  },
  {
    name: "Notes",
    path: "/notes",
    component: () => import("../views/notes/index.vue"),
  },
  {
    name: "Demo",
    path: "/demo",
    component: () => import("../views/demo/index.vue"),
  },
];

const errorRoutes: Array<RouteRecordRaw> = [
  {
    name: "404",
    path: "/404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/:catchAll(.*)", // 此处需特别注意置于最底部
    redirect: "/404",
  },
];

const routes: Array<RouteRecordRaw> = [...mainRoutes, ...errorRoutes];

export default routes;
