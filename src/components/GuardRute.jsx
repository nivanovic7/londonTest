import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function GuardRute({ route }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (route === "private") {
    return user ? <Outlet /> : <Navigate to="/login" replace={true} />;
  }

  if (route === "public") {
    return user ? <Navigate to="/home" replace={true} /> : <Outlet />;
  }
}

export default GuardRute;
