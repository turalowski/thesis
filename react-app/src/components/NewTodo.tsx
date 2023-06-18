import { useState } from 'react';
import { TodoType } from '../utils/types';

type NewTodoProps = {
  createTodo: (todo: TodoType) => void;
};

function NewTodo({ createTodo }: NewTodoProps) {
  const [newTitle, setNewTitle] = useState('');

  function handleTitleChange(title: string) {
    setNewTitle(title);
  }

  function handleAddClick() {
    createTodo({
      title: newTitle,
      completed: false,
    });
  }
  return (
    <div className="flex my-4">
      <input
        value={newTitle}
        onChange={event => handleTitleChange(event.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
      />
      <button
        onClick={handleAddClick}
        className="flex-no-shrink p-2 border-2 rounded text-teal-700 border-teal hover:text-white hover:bg-teal-700"
      >
        Add
      </button>
    </div>
  );
}

export default NewTodo;
