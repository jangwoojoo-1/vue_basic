<script>
export default {
  data() {
    return {
      selectedTab: this.current,
    };
  },
  props: {
    current: {
      type: String,
      required: true,
    },
  },
  emits: ['update-tab', 'save-data', 'delete-data', 'update:current'],
  methods: {
    saveData() {
      this.$emit('save-data');
    },
    deleteData() {
      this.$emit('delete-data');
    },
  },
  watch: {
    current(newValue) {
      this.selectedTab = newValue;
    },
  },
};
</script>

<template>
  <div class="todo__title">
    <div>
      <h1 class="todo__text">Todo List</h1>
    </div>
    <div class="todo__header">
      <select
        class="todo__dropdown"
        v-model="selectedTab"
        @change="$emit('update:current', selectedTab)"
      >
        <option value="all">전체</option>
        <option value="done">완료</option>
        <option value="active">미완료</option>
      </select>
      <div class="todo__main-icons">
        <span
          class="material-symbols-outlined todo__save-list-icon"
          @click="saveData"
          >file_save</span
        >
        <span
          class="material-symbols-outlined todo__save-list-icon"
          @click="deleteData"
          >delete</span
        >
      </div>
    </div>
  </div>
</template>
