import { TodoType } from '../utils/types';

type TodoProps = {
  todo: TodoType;
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

export default Todo;
