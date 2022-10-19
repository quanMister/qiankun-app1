<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <h1>子应用app1</h1>
        <div style="margin-bottom: 40px">
            <p>接收到的消息1：{{ mes1 }}</p>
            <p>接收到的消息2：{{ mes2 }}</p>
        </div>
        <div>
            <p>子应用自己的数据：{{ app1Msg }}</p>
            <button @click="butClick">点击向父应用发送消息</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import actions from '../../actions';

const mes1 = ref('');
const mes2 = ref(0);
const app1Msg = ref(0);
const butClick = () => {
    app1Msg.value += 1;
    actions.setGlobalState({ app1Msg: app1Msg.value });
};

onMounted(() => {
    actions.onGlobalStateChange((state, prev) => {
        console.log(28, '子应用监听主应用发来的信息', state, prev);
        if (state.test !== prev.test) {
            mes1.value = state.test;
        }
        if (state.mes2 !== prev.mes2) {
            mes2.value = state.mes2;
        }
    }, true);
});
</script>
