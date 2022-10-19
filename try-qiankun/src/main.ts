import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

let instance: any = null;
// 定义渲染函数
function render(props: any = {}) {
  const instance = createApp(App).use(router);
  router.isReady().then(() => instance.mount("#app")); // ???
}

// bootstrap引导函数
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

// 挂载函数
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  console.log("[vue] props from main framework", props);
    render(props);
}

// 卸载函数
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log("update props", props);
}

// 在qiankun环境下，修正加载路径
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 在非qiankun环境下，直接执行渲染
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
