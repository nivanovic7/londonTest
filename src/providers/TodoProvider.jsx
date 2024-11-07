import { createContext, useContext, useEffect, useState } from "react";
import {
  addTodo,
  createNewNote,
  fetchTodos,
  removeNote,
  removeTodo,
} from "../services/todoService";
import { useAuth } from "./AuthProvider";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const TodoContext = createContext(null);

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      getTodos(user.uid);
    }
  }, [user]);

  async function createTodo(title, description, notes, priority, userUid) {
    try {
      setLoading(true);
      console.log(priority);
      await addTodo(title, description, notes, priority, userUid);
      console.log("Post created with ID: ");
    } catch (error) {
      console.error("Error adding post: ", error);
    } finally {
      setLoading(false);
    }
  }

  async function addNote(newNote, setNewNote, todo) {
    try {
      setLoading(true);
      await createNewNote(newNote, setNewNote, todo);
      setNewNote("");
      console.log("Note added successfully!");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function getTodos(userUid) {
    try {
      setLoading(true);
      const todos = await fetchTodos(userUid);
      setTodos(
        todos.sort((a, b) =>
          a.createdAt.seconds < b.createdAt.seconds ? 1 : -1
        )
      );
    } catch (err) {
      console.log("Failed fetching todos");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function deleteTodo(todoId) {
    try {
      setLoading(true);
      await removeTodo(todoId);
      console.log("Todo removed succesfully!");
    } catch (err) {
      console.log(err);
      console.log("Deleting todo failed!");
    } finally {
      setLoading(false);
    }
  }

  async function deleteNote(noteId, todo) {
    if (!noteId) return;

    try {
      setLoading(true);
      await removeNote(noteId, todo);
      console.log("Succesfully deleted note");
    } catch (err) {
      console.log(err);
      console.log("Error deleting note!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todo"), (snapshot) => {
      const todosList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosList);
    });

    return () => unsubscribe();
  }, []);

  const todoValue = {
    todos,
    loading,
    createTodo,
    deleteTodo,
    getTodos,
    setTodos,
    addNote,
    deleteNote,
  };

  return (
    <TodoContext.Provider value={todoValue}>{children}</TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export default TodoProvider;
