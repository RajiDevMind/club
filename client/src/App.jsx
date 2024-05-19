import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Layout from "./Layout";
import Login from "./LogReg/Login";
import Register from "./LogReg/Register";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./redux/auth/authSlice";
import Profile from "./LogReg/profile/Profile";
// import Profile from "./pages/profile/Profile";

// asset to make API calls with axios
axios.defaults.baseURL = "http://localhost:2000";
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
