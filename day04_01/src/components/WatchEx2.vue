<script setup>
import { ref, watch, computed } from 'vue';

const count = ref(0);

const increasedCount = computed(() => {
  return count.value + 1;
});

watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
</script>

<template>
  <h1>ref : {{ count }}</h1>
  <h1>increasedCount : {{ increasedCount }}</h1>
  <button type="text" @click="count++">ref 증가</button>
</template>
