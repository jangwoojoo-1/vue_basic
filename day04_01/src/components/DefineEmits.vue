<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['count-increment', 'state-count-increment']);

const increment = () => {
  emit('count-increment', 10, 20, 30);
};

const stateIncrement = () => {
  emit('state-count-increment');
};
</script>

<template>
  <button @click="increment">count</button>
  <button @click="emit('state-count-increment', [50])">stateCount</button>
</template>
