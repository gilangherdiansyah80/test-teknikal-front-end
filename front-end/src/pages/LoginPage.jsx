import Button from "../components/atom/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main>
      <h1>This is login page</h1>
      <Link to="/home">
        <Button>Login</Button>
      </Link>
    </main>
  );
};

export default LoginPage;
