<script setup>
import { reactive } from 'vue';
import AppPropsLiteralChild from './AppPropsLiteralChild.vue';

const props = defineProps({ viewTitle: String });

// reactive()를 이용해 반응형 배열 생성
const fruits = reactive([
  { id: 'f1', name: '사과', checked: true },
  { id: 'f2', name: '파인애플', checked: false },
  { id: 'f3', name: '포도', checked: false },
  { id: 'f4', name: '딸기', checked: true },
  { id: 'f5', name: '아보카도', checked: false },
  { id: 'f6', name: '메론', checked: false },
  { id: 'f7', name: '수박', checked: true },
]); // 과일 목록 배열 — 체크 여부 포함
</script>

<template>
  <div>
    <h2>{{ viewTitle }}</h2>
    <div calss="fruits">
      <AppPropsLiteralChild
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit-id="fruit.id"
        :fruit-name="fruit.name"
        :is-checked="fruit.checked"
      />
    </div>
  </div>
</template>

<style scoped>
.fruits {
  display: flex;

  justify-content: left;
  width: 250px;
  text-align: left;
}
</style>
