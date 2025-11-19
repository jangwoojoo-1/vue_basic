<script>
import TodoItem from './TodoItem.vue';
export default {
  components: {
    TodoItem,
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
};
</script>

<template>
  <div class="todo__list">
    <!-- 할 일 목록이 없을 때 -->
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할일 목록이 없습니다.</p>
    </div>
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 ) -->
    <TodoItem
      v-else
      v-for="item in computedTodo"
      :key="item.id"
      :item="item"
      class="todo__item"
      :class="{ 'todo__item--completed': item.complete }"
      @update-todo="$emit('update-todo', $event)"
      @delete-todo="$emit('delete-todo', $event)"
      @submit-change="(id, newMsg) => $emit('submit-change', id, newMsg)"
    />
  </div>
</template>
