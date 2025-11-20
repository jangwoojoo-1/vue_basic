<script setup>
import { ref, watch, watchEffect, watchPostEffect } from 'vue';

const message = ref('');
const messageP = ref(null);

watch(
  message,
  () => {
    if (message.value.length > 0) {
      console.log(`watch: ${messageP.value.innerText}`);
    }
  },
  { flush: 'post' }
);

watchEffect(
  () => {
    if (message.value.length > 0) {
      console.log(`watchEffect: ${messageP.value.innerText}`);
    }
  },
  { flush: 'post' }
);

watchPostEffect(() => {
  if (message.value.length > 0) {
    console.log(`watchPostEffect: ${messageP.value.innerText}`);
  }
});
</script>

<template>
  <div>
    <input v-model="message" type="text" placeholder="메시지를 입력하세요." />
    <p ref="messageP">{{ message }}</p>
  </div>
</template>
