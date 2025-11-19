<script setup>
import { ref, reactive, computed } from 'vue';

const refCount = ref(1);
const reactiveCount = reactive({ count: 1 });

// ref () 데이터를 활용 시 value 속성 사용
const refDoubleCount = computed({
  get() {
    return refCount.value * 2;
  },
  set(newValue) {
    refCount.value = newValue;
  },
});
//reactive() 데이터는 value 속성이 필요 없음
const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count * 2;
  },
  set(newValue) {
    reactiveCount.count = newValue;
  },
});

setTimeout(() => {
  refCount.value = 7;
  reactiveCount.count = 7;
}, 1000);

//computed로 계산된 값을 출력할 때는 value를 사용
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>

<template>
  <input v-model="refCount" type="text"></input>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
