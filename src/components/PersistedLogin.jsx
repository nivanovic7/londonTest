import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function PersistedLogin() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }
  return user ? <Navigate to="/profile" replace={true} /> : <Outlet />;
}

export default PersistedLogin;
