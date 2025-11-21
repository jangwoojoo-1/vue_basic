<script setup>
defineProps({ announcements: Array });
</script>

<template>
  <tr class="text-center" v-for="announcement in announcements" :key="announcement.announceNo">
    <th scope="row">{{ announcement.announceNo }}</th>
    <td class="text-start">
      <router-link
        class="link-dark"
        :to="{ name: 'announce-detail', params: { announceNo: announcement.announceNo } }"
      >
        {{ announcement.subject }}
      </router-link>
    </td>
    <td>{{ announcement.userName }}</td>
    <td>{{ announcement.hit }}</td>
    <td>{{ announcement.registerDate }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
