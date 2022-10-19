<template>
  <div>这是首页</div>
  <router-link to="notes" class="link">一表通享器</router-link>
  <router-link to="demo" class="link">demo</router-link>
  <div class="app-content">
    <!-- 微应用所在 -->
    <div id="root-view"></div>
  </div>
</template>

<script setup lang="ts">
import microApps from "../../modules/micro-app";
import { reactive, ref, onMounted } from "vue";
// // 引入qiankun注册子应用和启动的接口函数
import { registerMicroApps, start } from "qiankun";

// 引入微应用入口配置
registerMicroApps(microApps, {
  // 注册一些全局生命周期钩子，如进行日志打印，如果不需要可以不传
//   beforeMount() {
//     console.log(22, "qiankun");
//   },
});
// 启动qiankun，并开启预加载
start({ prefetch: true });

const showPage = ref<Boolean>(false);
onMounted(() => {
  console.log(9, "首页", showPage.value);
});
</script>
<style scoped>
.link {
  display: block;
}
</style>
