import { createRouter, createWebHistory } from 'vue-router';
import Nprogress from 'nprogress';
import routes from './routes';

const router = createRouter({
  // '/mobileclient/'
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 权限等判断...
  console.log(14);
  
  Nprogress.start();
  // 路由不存在跳转home
  if (!to.matched.length) {
    next('/home');
  }
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
