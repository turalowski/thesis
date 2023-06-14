<script lang="ts">
  export let createTodo: (todo: { title: string; completed: boolean }) => void;

  let newTitle = '';

  function handleTitleChange(title: string) {
    newTitle = title;
  }

  function handleAddClick() {
    createTodo({
      title: newTitle,
      completed: false,
    });
    newTitle = '';
  }
</script>

<div class="flex my-4">
  <input
    bind:value={newTitle}
    on:input="{(e) => handleTitleChange(e.target.value)}"
    class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
    placeholder="Add Todo"
  />
  <button
    on:click={handleAddClick}
    class="flex-no-shrink p-2 border-2 rounded text-teal-700 border-teal hover:text-white hover:bg-teal-700"
  >
    Add
  </button>
</div>
