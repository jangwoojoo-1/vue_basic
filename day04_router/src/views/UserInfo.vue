<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const name = route.query.name;
const age = route.query.age;
</script>

<template>
  <h1>UserInfo 페이지</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
</template>
