import { TodoType } from '../utils/types';
import Todo from './Todo';

type TodoListProps = {
  todos: TodoType[];
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

export default TodoList;
