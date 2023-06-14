<script lang="ts">
  export let todo;
  export let deleteTodo: (title: string) => void;
  export let completeTodo: (title: string) => void;
</script>

<div>
  <div class="flex mb-4 items-center">
    <p
      class="w-full text-grey-darkest {todo.completed ? 'line-through' : ''}"
    >
      {todo.title}
    </p>
    <button
      on:click={() => completeTodo(todo.title)}
      class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green hover:bg-green-700"
    >
      {todo.completed ? 'Undone' : 'Done'}
    </button>
    <button
      on:click={() => deleteTodo(todo.title)}
      class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
    >
      Remove
    </button>
  </div>
</div>
