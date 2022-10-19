import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
    console.log();
    const { container } = props;
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/app1/' : '/',
        mode: 'history',
        routes,
    });

    instance = new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时(在非qiankun环境下，直接执行渲染)
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

/**
 * ootstrap引导函数
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

/**
 * 挂载函数
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}

/**
 * 卸载函数
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
    router = null;
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
    console.log('update props', props);
}