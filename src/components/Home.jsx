import { useAuth } from "../providers/AuthProvider";

function Home() {
  const { user } = useAuth();
  return (
    <div>
      <p>{user && user.email}</p>
      <h1> Wellcome to home</h1>
    </div>
  );
}

export default Home;
