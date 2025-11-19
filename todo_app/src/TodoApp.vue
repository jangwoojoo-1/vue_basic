<script>
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
export default {
  components: {
    TodoFilter,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [],
      filter: 'all',
    };
  },
  created() {
    const savedData = localStorage.getItem('todo-data');
    if (savedData) {
      this.todos = JSON.parse(savedData);
    }
  },

  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), //todo id를 고유값으로 랜덤하게 저장
        msg: inputMsg, //할일 텍스트
        complete: false, //할일 완료 여부
      };
      this.todos.push(item);
    },
    saveData() {
      try {
        localStorage.setItem('todo-data', JSON.stringify(this.todos));
        alert('성공적으로 저장되었습니다!'); // 사용자에게 알림
      } catch (e) {
        alert('저장에 실패했습니다.');
      }
    },
    deleteData() {
      this.todos.splice(0, this.todos.length);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      this.todos = this.todos.map((v) =>
        v.id === id ? { ...v, complete: !v.complete } : v
      );
    },
    submitChange(id, newMsg) {
      console.log(`${id} ${newMsg}`);
      this.todos = this.todos.map((v) =>
        v.id === id ? { ...v, msg: newMsg } : v
      );
    },
  },
  computed: {
    computedTodo() {
      if (this.filter === 'all') {
        return this.todos;
      } else if (this.filter === 'done') {
        return this.todos.filter((item) => item.complete === true);
      } else {
        return this.todos.filter((item) => item.complete === false);
      }
    },
  },
};
</script>

<template>
  <div class="todo">
    <TodoFilter
      v-model:current="filter"
      @save-data="saveData"
      @delete-data="deleteData"
    />
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
