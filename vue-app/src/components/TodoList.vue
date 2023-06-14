<template>
  <div>
    <h1 class="text-3xl text-grey-700 font-bold my-3">Todo List</h1>
    <div>
      <Todo
        v-for="todo in todos"
        :key="todo.title"
        :todo="todo"
        @completeTodo="completeTodo"
        @deleteTodo="deleteTodo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Todo from './Todo.vue';

export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  props: ['todos'],
  setup(_, { emit }) {
    function completeTodo(title: string) {
      emit('completeTodo', title);
    }

    function deleteTodo(title: string) {
      emit('deleteTodo', title);
    }

    return { completeTodo, deleteTodo };
  },
};
</script>
