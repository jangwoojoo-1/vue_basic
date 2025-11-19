<script setup>
import { ref, reactive, computed } from 'vue';

const refCount = ref(1);
const reactiveCount = reactive({ count: 1 });

// ref () 데이터를 활용 시 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2);
//reactive() 데이터는 value 속성이 필요 없음
const reactiveDoubleCount = computed(() => reactiveCount.count * 2);

//computed로 계산된 값을 출력할 때는 value를 사용
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>

<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
