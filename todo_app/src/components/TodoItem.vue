<script>
export default {
  data() {
    return {
      changeMsg: '',
      changeId: null,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  emits: ['submit-change'],
  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
    changeTodo(item) {
      this.changeId = item.id;
      this.changeMsg = item.msg;
    },
    submitChange(id) {
      console.log(this.changeMsg);
      if (this.changeMsg.trim().length === 0) {
        alert('내용을 입력해주세요.');
        return;
      }
      this.$emit('submit-change', id, this.changeMsg.trim());
      console.log(this.changeMsg.trim());
      this.cancelChange();
    },
    cancelChange() {
      this.changeId = null;
      this.changeMsg = '';
    },
  },
};
</script>

<template>
  <div>
    <input
      type="checkbox"
      :id="`chk${item.id.toString()}`"
      :checked="item.complete"
      @click="updateTodo(item.id)"
    />
    <label
      :for="`chk${item.id.toString()}`"
      class="todo__checkbox-label"
    ></label>
    <input
      v-if="changeId === item.id"
      v-model="changeMsg"
      type="text"
      class="todo__item-input"
      @keyup.enter="submitChange(item.id)"
      @keyup.esc="cancelChange"
      @blur="cancelChange"
    />
    <span v-else class="todo__item-text">{{ item.msg }}</span>
    <span
      class="material-symbols-outlined todo__delete-icon"
      @click="deleteTodo(item.id)"
    >
      delete
    </span>
    <span
      v-if="changeId !== item.id"
      class="material-symbols-outlined todo__change-icon"
      @click="changeTodo(item)"
    >
      edit
    </span>
    <span
      v-else
      class="material-symbols-outlined todo__save-icon"
      @mousedown.prevent="submitChange(item.id)"
    >
      save
    </span>
  </div>
</template>
