import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/leaftexture.png";
import user from "./assets/user-solid.svg";

const Header = () => {
  return (
    <div>
      <nav className="nav-container">
        <Link to="/login">
          <img className="logo" src={logo} alt="clubhouse logo" />
        </Link>
        <i className="fa-solid fa-bars icons"></i>
        <i className="fa-solid fa-xmark icons"></i>
        <div className="linkclass">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="logreg">
          <Link to="/login">
            <i className="fa-solid fa-user fa-beat-fade"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
