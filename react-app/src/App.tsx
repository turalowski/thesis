import React, { useState } from 'react';
import './App.css';

type Todo = {
  title: string;
  completed: boolean;
};

const initialTodos: Todo[] = [...Array(10)].map((_, index) => ({
  title: `Todo ${10 - index}`,
  completed: false,
}));

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function createTodo(newTodo: Todo) {
    setTodos([newTodo, ...todos]);
  }

  function deleteTodo(title: string) {
    const newTodos = todos.filter(todo => todo.title !== title);
    setTodos(newTodos);
  }
  function completeTodo(title: string) {
    const newTodos = todos.map(todo => {
      if (todo.title === title) {
        return {
          ...todo,
          completed: true,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className=" w-full flex items-center justify-center bg-teal-700-700-lightest font-sans">
      <div className="overflow-auto bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <NewTodo createTodo={createTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </div>
    </div>
  );
}

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (title: string) => void;
  completeTodo: (title: string) => void;
};

function TodoList({ todos, deleteTodo, completeTodo }: TodoListProps) {
  return (
    <div>
      <h1 className="text-3xl text-grey-700 font-bold my-3">Todo List</h1>
      <div className=" ">
        {todos.map(todo => (
          <Todo
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

type NewTodoProps = {
  createTodo: (todo: Todo) => void;
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

type TodoProps = {
  todo: Todo;
  deleteTodo: (title: string) => void;
  completeTodo: (title: string) => void;
};

function Todo({ completeTodo, deleteTodo, todo }: TodoProps) {
  return (
    <div>
      <div className="flex mb-4 items-center">
        <p
          className={`w-full text-grey-darkest ${
            todo.completed ? 'line-through' : ''
          } `}
        >
          {todo.title}
        </p>
        <button
          onClick={() => completeTodo(todo.title)}
          className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green hover:bg-green-700 `}
        >
          {todo.completed ? 'Undone' : 'Done'}
        </button>
        <button
          onClick={() => deleteTodo(todo.title)}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default App;
