<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = ref('');
const name = ref('');
const age = ref(0);
onBeforeMount(() => {
  id.value = route.params.id; //경로에서 객체 가져오기
  name.value = route.query.name; //query에서 객체 가져오기
  age.value = route.query.age;
});
onMounted(() => {
  console.log(id.value);
  console.log(name.value);
  console.log(age.value);
});
</script>

<template>
  <h1>{{ id }}</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
</template>
