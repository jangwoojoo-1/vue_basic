<script setup>
import { reactive, ref } from 'vue';

const arr1 = ref([10]); //배열로 반응형 데이터를 생성
const arr2 = ref([10]);

setTimeout(() => {
  arr1.value = [10, 20]; //배열의 값 자체 변경
}, 1000);

setTimeout(() => {
  arr2.push(20); // 배열의 요소 번경 (추가) => 요소가 바뀌는 것은 반영 X
  // 따라서 기본형은 ref, 배열 같은 객체는 reactive
}, 1000);
</script>

<template>
  <h1>arr1 : {{ arr1 }}</h1>
  <h1>arr2 : {{ arr2 }}</h1>
</template>
