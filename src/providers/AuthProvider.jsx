import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUser, logOutUser, signIn } from "../services/AuthService";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function registerUser(email, password) {
    setLoading(true);
    try {
      const res = await createUser(email, password);
      setUser(res.user);
      navigate("/login");
    } catch (err) {
      console.log(err);
      console.log("Register failed!");
    } finally {
      setLoading(false);
    }
  }

  async function loginUser(email, password) {
    setLoading(true);
    try {
      const res = await signIn(email, password);
      const user = res.user;
      navigate("/home");
      console.log(user);
    } catch (err) {
      console.log(err);
      console.log("Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function logOut() {
    setLoading(true);
    try {
      await logOutUser();
    } catch (err) {
      console.log(err);
      console.log("Logout failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    registerUser,
    user,
    loginUser,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
