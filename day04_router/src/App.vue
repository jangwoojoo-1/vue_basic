<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">home</RouterLink> &nbsp;&nbsp;
    <RouterLink to="/about">about</RouterLink>&nbsp;&nbsp;
    <RouterLink to="/user/id?name=mike&age=30">UserView</RouterLink>&nbsp;&nbsp;
    <RouterLink to="/user/info?name=ssg&age=20">UserInfo</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
