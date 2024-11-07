import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4hFhnBCbv9H7MnGEDWaaknyBWRCqfK2U",
  authDomain: "test-london-e2822.firebaseapp.com",
  projectId: "test-london-e2822",
  storageBucket: "test-london-e2822.firebasestorage.app",
  messagingSenderId: "999943981829",
  appId: "1:999943981829:web:275f316c965c615fa1856c",
  measurementId: "G-4ZYCPFYWBF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
