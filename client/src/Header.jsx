import "./App.css";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./assets/leaftexture.png";
import user from "./assets/user-solid.svg";
import ShowOnLogin, { ShowOnLogout } from "./components/hiddenLink/HiddenLink";
import { RESET_AUTH, logout } from "./redux/auth/authSlice";
import { useDispatch } from "react-redux";
import NavUsername from "../src/LogReg/profile/NavUsername";
import { FixedNavbar } from "./components/fixedNavbar/FixNavBar";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    await dispatch(logout());
    await dispatch(RESET_AUTH());
    navigate("/login");
  };

  return (
    <FixedNavbar>
      <nav>
        <Link to="/">
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
            <ShowOnLogout>
              <NavLink to="/">Home</NavLink>
            </ShowOnLogout>
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
            <ShowOnLogin>
              <NavLink to="/profile">Profile</NavLink>
            </ShowOnLogin>
          </li>
          <li>
            <ShowOnLogin>
              <NavLink to="/pricing">pricing</NavLink>
            </ShowOnLogin>
          </li>
          <li>
            <ShowOnLogin>
              <NavUsername />
            </ShowOnLogin>
          </li>
          <li>
            <ShowOnLogout>
              <NavLink to="/login">
                <i className="fa-solid fa-user fa-beat-fade"></i>
              </NavLink>
            </ShowOnLogout>
          </li>
          <li>
            <ShowOnLogin>
              <NavLink to="/" onClick={logoutUser}>
                <i
                  className="fa fa-sign-out fa-beat-fade"
                  aria-hidden="true"
                ></i>
              </NavLink>
            </ShowOnLogin>
          </li>
        </ul>
      </nav>
    </FixedNavbar>
  );
};

export default Header;
