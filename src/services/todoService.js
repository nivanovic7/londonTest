import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export async function removeTodo(todoId) {
  return await deleteDoc(doc(db, "todo", todoId));
}

export async function addTodo(title, description, notes, priority, userUid) {
  console.log(priority);
  return await addDoc(collection(db, "todo"), {
    title: title,
    description: description,
    createdAt: new Date(),
    priority: priority,
    notes: notes,
    userUid: userUid,
  });
}

export async function createNewNote(newNote, setNewNote, todo) {
  const todoRef = doc(db, "todo", todo.id);
  return await updateDoc(todoRef, {
    notes: [...todo.notes, { id: uuidv4(), note: newNote }],
  });
}

export async function fetchTodos(userUid) {
  const todosQuery = query(
    collection(db, "todo"),
    where("userUid", "==", userUid)
  );
  const querySnapshot = await getDocs(todosQuery);
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
}

export async function removeNote(noteId, todo) {
  const todoRef = doc(db, "todo", todo.id);
  const updatedNotes = todo.notes.filter((note) => note.id !== noteId);
  return await updateDoc(todoRef, {
    notes: [...updatedNotes],
  });
}
