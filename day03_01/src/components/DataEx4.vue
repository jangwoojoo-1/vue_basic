<script setup>
import { reactive } from 'vue';

const state = reactive(0);

console.log(state);
setTimeout(() => {
  state++;
}, 1000);
</script>

<template>
  <h1>state : {{ state }}</h1>
</template>
