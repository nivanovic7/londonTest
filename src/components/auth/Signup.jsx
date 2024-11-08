import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const { registerUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    if (!email || password) {
      toast.error("email and password are required!");
      return;
    }
    registerUser(email, password);
  }

  return (
    <main>
      <section>
        <div>
          <div>
            <h1> Signup </h1>
            <form>
              <div>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <button type="submit" onClick={handleRegister}>
                Sign up
              </button>
            </form>

            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
