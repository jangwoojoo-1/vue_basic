<script setup>
import { reactive, computed } from 'vue';

const cart = reactive([
  { price: 1000, count: 5 },
  { price: 2000, count: 1 },
]);
const totalPrice = computed(() => {
  let total = 0;
  cart.forEach((item) => {
    total = total + item.count * item.price;
  });
  return total;
});
</script>

<template>
  <h1>{{ totalPrice }}</h1>
</template>
