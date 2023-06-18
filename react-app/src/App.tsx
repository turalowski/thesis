import React, { useState } from 'react';
import { TodoType } from './utils/types';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const initialTodos: TodoType[] = [...Array(10)].map((_, index) => ({
  title: `Todo ${10 - index}`,
  completed: false,
}));

function App() {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);

  function createTodo(newTodo: TodoType) {
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

export default App;
