<script setup>
const props = defineProps({
  menu: Object,
  view: String,
});
</script>

<template>
  <div class="menu">
    <button
      v-for="(value, index) in props.menu"
      :key="index"
      :class="{ activate: props.view === value.key }"
      @click="$emit('select-menu', value.key)"
    >
      {{ value.label }}
    </button>
  </div>
</template>
