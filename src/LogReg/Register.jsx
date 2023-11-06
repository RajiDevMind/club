import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Register() {
  return (
    <div className="form-container">
      <h2>create your account</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign-Up</button>
      </form>
      <span>
        Already a member?
        <Link style={{ margin: "10px" }} to="/login">
          Sign-In
        </Link>
        here
      </span>
    </div>
  );
}

export default Register;
