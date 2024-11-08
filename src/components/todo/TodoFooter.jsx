import { useState } from "react";
import { useTodos } from "../../providers/TodoProvider";

function TodoFooter({ todo }) {
  const [newNote, setNewNote] = useState("");
  const { addNote } = useTodos();

  return (
    <div className="todo-footer">
      <input
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        type="text"
        placeholder="Add new Note"
      />
      <button onClick={() => addNote(newNote, setNewNote, todo)}>
        +Add note
      </button>
    </div>
  );
}

export default TodoFooter;
