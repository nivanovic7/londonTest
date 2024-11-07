import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function Nav() {
  const { user, loading, logOut } = useAuth();

  if (loading) return <p>...</p>;

  return (
    <div className="nav">
      <NavLink to="/home"> Home</NavLink>
      {user ? (
        <>
          <NavLink to="/profile"> Profile</NavLink>
          <button disabled={loading} onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login"> Login</NavLink>
          <NavLink to="/signup"> Signup</NavLink>{" "}
        </>
      )}
    </div>
  );
}

export default Nav;
