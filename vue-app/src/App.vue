<template>
  <div
    class="w-full flex items-center justify-center bg-teal-700-700-lightest font-sans"
  >
    <div
      class="overflow-auto bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg"
    >
      <NewTodo @createTodo="createTodo" />
      <TodoList
        :todos="todos"
        @deleteTodo="deleteTodo"
        @completeTodo="completeTodo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';

interface Todo {
  title: string;
  completed: boolean;
}

const initialTodos: Todo[] = [...Array(10)].map((_, index) => ({
  title: `Todo ${10 - index}`,
  completed: false,
}));

export default {
  name: 'App',
  components: {
    NewTodo,
    TodoList,
  },
  setup() {
    const todos = ref<Todo[]>(initialTodos);

    function createTodo(newTodo: Todo) {
      todos.value = [newTodo, ...todos.value];
    }

    function deleteTodo(title: string) {
      const newTodos = todos.value.filter(todo => todo.title !== title);
      todos.value = newTodos;
    }

    function completeTodo(title: string) {
      const newTodos = todos.value.map(todo => {
        if (todo.title === title) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
      todos.value = newTodos;
    }

    return { todos, createTodo, deleteTodo, completeTodo };
  },
};
</script>
