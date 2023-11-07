import "./App.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/leaftexture.png";
import user from "./assets/user-solid.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <Link to="/login">
        <img className="logo" src={logo} alt="clubhouse logo" />
      </Link>
      <i
        className="fa-solid fa-bars icons"
        onClick={() => {
          setMenu(!menu);
        }}
      ></i>
      <ul className={menu ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/trainers">trainers</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <i className="fa-solid fa-user fa-beat-fade"></i>
          </NavLink>
          <p>click the menu button to close this page!</p>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
