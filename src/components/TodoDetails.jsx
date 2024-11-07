import NoteList from "./NoteList";

function TodoDetails({ todo }) {
  return (
    <div className="todo-details">
      <p>Description: {todo?.description}</p>
      <NoteList todo={todo} notes={todo.notes} />
    </div>
  );
}

export default TodoDetails;
