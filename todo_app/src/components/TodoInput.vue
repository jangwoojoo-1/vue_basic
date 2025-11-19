<script>
export default {
  data() {
    return {
      inputMsg: '', // 사용자가 입력한 todo 데이터
    };
  },
  emits: ['add-todo'],
  methods: {
    addTodo() {
      if (this.inputMsg.trim().length === 0) {
        alert('내용을 입력해주세요.');
        return;
      }
      this.$emit('add-todo', this.inputMsg); // 부모 컴포넌트 이벤트 호출, 입력 메세지를 부모 컴포넌트 이벤트에 전달
      this.inputMsg = '';
    },
  },
};
</script>

<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
