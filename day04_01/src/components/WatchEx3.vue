<script setup>
import { ref, watch } from 'vue';

const state = ref({ count: 0 });

// 반응형 데이터가 객체인데 ref로 선언했기에 변화가 없어 실행 X
watch(
  state,
  (currentValue, preValue) => {
    console.log(currentValue, preValue);
  },
  { deep: true }
);
</script>

<template>
  <h1>ref : {{ state.count }}</h1>
  <button type="text" @click="state.count++">ref 증가</button>
</template>
