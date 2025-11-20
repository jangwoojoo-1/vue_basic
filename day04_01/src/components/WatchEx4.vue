<script setup>
import { reactive, watch } from 'vue';
// 1. 객체 자료형 속성 count에 값 0을 할당하여 reactive() 반응형 데이터로 만들기
const state = reactive({ count: 0 });

watch(state, (currentValue, preValue) => {
  console.log(currentValue, preValue);
});
</script>

<template>
  <h1>ref : {{ state.count }}</h1>
  <button type="text" @click="state.count++">ref 증가</button>
</template>
