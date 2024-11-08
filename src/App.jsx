import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import GuardRute from "./components/GuardRute";
import { AuthProvider } from "./providers/AuthProvider";
import TodoProvider from "./providers/TodoProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <section>
        <Toaster />
        <AuthProvider>
          <TodoProvider>
            <Nav />
            <Routes>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/home" element={<Home />} />
              <Route element={<GuardRute route="public" />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<GuardRute route="private" />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </TodoProvider>
        </AuthProvider>
      </section>
    </div>
  );
}
export default App;
