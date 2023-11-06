import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

import "./LogReg.css";

function LogReg() {
  return (
    <Router>
      <div className="LogReg">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </div>
    </Router>
  );
}

export default LogReg;
