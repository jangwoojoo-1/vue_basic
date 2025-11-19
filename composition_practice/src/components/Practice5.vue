<script setup>
import {ref} from 'vue';

const inputRef = ref(null);

const showMessage = () => {
  inputRef.value.focus();
  alert(inputRef.value.value);
};

</script>

<template>
  <input type="text" ref="inputRef"></input>
  <button type="text" @click="showMessage">버튼</button>
</template>