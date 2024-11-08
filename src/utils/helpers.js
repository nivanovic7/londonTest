import toast from "react-hot-toast";
import { sortFunc } from "./config";

export function sortTodos(todos, appliedSort) {
  if (todos.length < 2) return todos;
  else {
    return todos.slice().sort(sortFunc[appliedSort]);
  }
}

export function handleFirebaseError(error) {
  const errorCode = error.code;

  switch (errorCode) {
    case "auth/invalid-email":
      toast.error("Invalid email format.");
      break;
    case "auth/user-disabled":
      toast.error("This account has been disabled.");
      break;
    case "auth/user-not-found":
      toast.error("No account found with this email.");
      break;
    case "auth/wrong-password":
      toast.error("Incorrect password.");
      break;
    case "auth/email-already-in-use":
      toast.error("This email is already in use.");
      break;
    case "auth/weak-password":
      toast.error("Password is too weak.");
      break;
    default:
      toast.error("An unexpected error occurred. Please try again.");
      break;
  }
}
