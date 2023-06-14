<template>
  <div>
    <div class="flex mb-4 items-center">
      <p
        :class="`w-full text-grey-darkest ${
          todo.completed ? 'line-through' : ''
        }`"
      >
        {{ todo.title }}
      </p>
      <button
        @click="completeTodo"
        :class="`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green hover:bg-green-700`"
      >
        {{ todo.completed ? 'Undone' : 'Done' }}
      </button>
      <button
        @click="deleteTodo"
        class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Todo',
  props: ['todo'],
  setup(props, { emit }) {
    function completeTodo() {
      emit('completeTodo', props.todo.title);
    }

    function deleteTodo() {
      emit('deleteTodo', props.todo.title);
    }

    return { completeTodo, deleteTodo };
  },
};
</script>
