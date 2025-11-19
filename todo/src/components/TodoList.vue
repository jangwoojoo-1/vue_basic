<script>
export default {
  data() {
    return {
      changeMsg: '',
      changeId: null,
    };
  },
  //부모 컴포넌트에서 전달한 computedTodo 데이터를 TodoLost 컴포넌트에서 props라는 옵션 속성으로 받음
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
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
      if (this.changeMsg === '') {
        alert('내용을 입력해주세요.');
        return;
      }
      this.$emit('submit-change', id, this.changeMsg);
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
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 ) -->
    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.complete }"
    >
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
    <!-- 할 일 목록이 없을 때 -->
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>
