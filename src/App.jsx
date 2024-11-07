import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import GuardRute from "./components/GuardRute";
import PersistedLogin from "./components/PersistedLogin";
import { AuthProvider } from "./providers/AuthProvider";
import TodoProvider from "./providers/TodoProvider";

function App() {
  return (
    <div>
      <section>
        <AuthProvider>
          <TodoProvider>
            <Nav />
            <Routes>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/home" element={<Home />} />
              <Route element={<PersistedLogin />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<GuardRute />}>
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
