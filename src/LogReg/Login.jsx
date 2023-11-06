import "./LogReg.css";
import Register from "../LogReg/Register";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign-In</button>
      </form>
      <span>
        Don't have an account?
        <Link style={{ margin: "10px" }} to="/register">
          Sign-Up
        </Link>
        here
      </span>
    </div>
  );
}

export default Login;
