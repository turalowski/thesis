<script lang="ts">
  export let todos;
  export let deleteTodo: (title: string) => void;
  export let completeTodo: (title: string) => void;

  import Todo from './Todo.svelte';
</script>

<div>
  <h1 class="text-3xl text-grey-700 font-bold my-3">Todo List</h1>
  <div>
    {#each $todos as todo (todo.title)}
      <Todo {todo} {deleteTodo} {completeTodo} />
    {/each}
  </div>
</div>
