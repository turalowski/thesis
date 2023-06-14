<template>
  <div class="flex my-4">
    <input
      v-model="newTitle"
      class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
      placeholder="Add Todo"
    />
    <button
      @click="handleAddClick"
      class="flex-no-shrink p-2 border-2 rounded text-teal-700 border-teal hover:text-white hover:bg-teal-700"
    >
      Add
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'NewTodo',
  setup(_, { emit }) {
    const newTitle = ref('');

    function handleAddClick() {
      emit('createTodo', {
        title: newTitle.value,
        completed: false,
      });
    }

    return { newTitle, handleAddClick };
  },
};
</script>
