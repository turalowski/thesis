<script lang="ts">
  import "../app.css";
  import { writable } from 'svelte/store';
  import NewTodo from '../components/NewTodo.svelte';
  import TodoList from '../components/TodoList.svelte';

  type Todo = {
    title: string;
    completed: boolean;
  };

  const todos = writable<Todo[]>([...Array(10)].map((_, index) => ({
    title: `Todo ${10 - index}`,
    completed: false,
  })));

  const createTodo = (newTodo: Todo) => {
    todos.update(ts => [newTodo, ...ts]);
  };

  const deleteTodo = (title: string) => {
    todos.update(ts => ts.filter(t => t.title !== title));
  };

  const completeTodo = (title: string) => {
    todos.update(ts => ts.map(t => t.title === title ? { ...t, completed: !t.completed } : t));
  };
</script>

<div class="w-full flex items-center justify-center bg-teal-700-700-lightest font-sans">
  <div class="overflow-auto bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
    <NewTodo {createTodo} />
    <TodoList {todos} {deleteTodo} {completeTodo} />
  </div>
</div>

