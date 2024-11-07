import { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import TodoDetails from "./TodoDetails";

function Todo({ todo }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(todo);
  return (
    <div className={`todo-${todo.priority} todo`}>
      <TodoHeader setIsOpen={setIsOpen} todo={todo} isOpen={isOpen} />
      {isOpen && (
        <>
          <TodoDetails todo={todo} />
          <TodoFooter todo={todo} />
        </>
      )}
    </div>
  );
}

export default Todo;
