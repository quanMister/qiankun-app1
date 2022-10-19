<template>
  <h1>这是子应用app1首页</h1>
</template>

<script setup lang="ts">
import microApps from "../../modules/micro-app";
import { reactive, ref, onMounted } from "vue";

const showPage = ref<Boolean>(false);
onMounted(() => {
  console.log(11, "这是子应用app1首页", showPage.value);
});
</script>
<style scoped>
.link {
  display: block;
}
</style>
