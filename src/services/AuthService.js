import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export async function createUser(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function logOutUser() {
  return await signOut(auth);
}
