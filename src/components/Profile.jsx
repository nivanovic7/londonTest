import { useEffect, useState } from "react";
import CreateNote from "./todo/CreateTodo";
import Todo from "./todo/Todo";
import { useTodos } from "../providers/TodoProvider";
import { sortTodos } from "../utils/helpers";

function Profile() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [appliedSort, setAppliedSort] = useState("new");
  const { todos, setTodos, loading } = useTodos();

  useEffect(() => {
    setTodos((todos) => sortTodos(todos, appliedSort));
  }, [appliedSort, setTodos]);

  if (loading) {
    return "Loading todos...";
  }

  return (
    <div>
      <h1>-Profile-</h1>
      <button onClick={() => setIsCreateOpen(!isCreateOpen)}>
        {isCreateOpen ? "Close" : "Create Todo"}
      </button>

      {isCreateOpen && <CreateNote setIsCreateOpen={setIsCreateOpen} />}

      <div>
        <span>Sort by:</span>
        <select
          defaultValue={appliedSort}
          onChange={(e) => setAppliedSort(e.target.value)}
        >
          <option value="new">Date - latest firs</option>
          <option value="old">Date - oldest first </option>
          <option value="high">Priority - high first </option>
          <option value="low">Priority - low first</option>
        </select>
      </div>

      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}

export default Profile;
