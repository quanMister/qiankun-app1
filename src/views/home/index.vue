<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <h1>子应用app1</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log(13, "子应用app1",);
});
</script>
