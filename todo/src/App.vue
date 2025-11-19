<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todo: [],
      current: 'all',
    };
  },
  created() {
    const savedData = localStorage.getItem('todo-data');
    if (savedData) {
      this.todo = JSON.parse(savedData);
    }
  },

  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), //todo id를 고유값으로 랜덤하게 저장
        msg: inputMsg, //할일 텍스트
        complete: false, //할일 완료 여부
      };
      this.todo.push(item);
    },

    updateTab(tab) {
      this.current = tab;
    },

    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, complete: !v.complete } : v
      );
    },
    submitChange(id, newMsg) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, msg: newMsg } : v
      );
    },
    saveData() {
      try {
        localStorage.setItem('todo-data', JSON.stringify(this.todo));
        alert('성공적으로 저장되었습니다!'); // 사용자에게 알림
      } catch (e) {
        alert('저장에 실패했습니다.');
      }
    },
  },
  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((item) => item.complete);
      }
    },
  },
};
</script>

<template>
  <div class="todo">
    <span class="material-symbols-outlined" @click="saveData">file_save</span>
    <TodoHeader :current="current" @update-tab="updateTab" />
    <TodoList
      :computed-todo="computedTodo"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
      @submit-change="submitChange"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>

<style scoped></style>
