import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodos } from "../providers/TodoProvider";
import { useAuth } from "../providers/AuthProvider";

function CreateTodo({ setIsCreateOpen }) {
  const { createTodo } = useTodos();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  function addNote() {
    if (!note) return;
    setNotes((state) => [...state, { note, id: uuidv4() }]);
    setNote("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return;
    createTodo(title, description, notes, priority, user.uid);
    setIsCreateOpen(false);
    setTitle("");
    setDescription("");
    setNotes("");
  }

  return (
    <form className="form">
      <div>
        <label htmlFor="">Todo Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
      </div>
      <div>
        <label htmlFor="">Todo description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Descrition"
        />
      </div>
      <div>
        <label htmlFor="">Priority</label>
        <select
          defaultValue={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="1">Low priority</option>
          <option value="2">Medium priority</option>
          <option value="3">High priority</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Note</label>
        {notes.map((note, i) => (
          <p key={i}>{note.note}</p>
        ))}
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Add note"
        />
        <button onClick={addNote} type="button">
          +Add
        </button>
      </div>
      <button onClick={handleSubmit}>Create</button>
    </form>
  );
}

export default CreateTodo;
