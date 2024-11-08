import { useTodos } from "../../providers/TodoProvider";

function NoteList({ notes, todo }) {
  const { deleteNote } = useTodos();

  return notes.map((note) => (
    <div key={note.id} className="note">
      <span className="noteContent">{note.note}</span>
      <button onClick={() => deleteNote(note.id, todo)}>Delete</button>
    </div>
  ));
}

export default NoteList;
