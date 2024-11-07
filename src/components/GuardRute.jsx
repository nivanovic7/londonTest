import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function GuardRute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }
  return user ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

export default GuardRute;
