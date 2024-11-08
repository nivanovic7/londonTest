import { useTodos } from "../../providers/TodoProvider";

function TodoHeader({ todo, setIsOpen, isOpen }) {
  const { deleteTodo } = useTodos();

  return (
    <div className="todo-header">
      <p>
        <strong>{todo?.title}</strong>
      </p>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoHeader;
