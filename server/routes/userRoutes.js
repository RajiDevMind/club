require("dotenv").config();
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { auth } = require("../middleware/authMiddleware");
// const { User } = require("../models/userModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register Users
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // Validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Enter all the required field!");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be 6 characters and above!");
    }
    // check existing user with emails
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400);
      throw new Error(`Email has been registered, kindly login!`);
    }
    const userDetails = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken(userDetails._id);

    if (userDetails) {
      const { _id, name, email, role } = userDetails;
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 2592000),
        // secure: true,
        // sameSite: "none",
      });
      // sending users data to the frontend
      res.status(201).json({ _id, name, email, role, token });
    } else {
      res.status(400);
      throw new Error("Invalid user details!");
    }
  })
);

// Login Users
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validate
    if (!email || !password) {
      res.status(400);
      throw new Error("Empty email or password!");
    }
    // check if user exists
    const existinUser = await User.findOne({ email });
    if (!existinUser) {
      res.status(400);
      throw new Error("User doesn`t exists!");
    }

    const confirmPassword = bcrypt.compareSync(password, existinUser.password);
    const token = generateToken(existinUser._id);

    if (existinUser && confirmPassword) {
      // send userDoc to the frontend excluding password
      const userDoc = await User.findOne({ email }).select("-password");
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 2592000),
        // secure: true,
        // sameSite: "none",
      });
      res.status(201).json(userDoc);
    } else {
      res.status(400);
      throw new Error("Invalid email or password!");
    }
  })
);

// logout user
router.get(
  "/logout",
  asyncHandler(async (req, res) => {
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      // secure: true,
      // sameSite: "none",
    });
    res.status(200).json({ msg: "Logged out Successlly!" });
  })
);

// Get Single User Profile
router.get(
  "/get-user",
  auth,
  asyncHandler(async (req, res) => {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400);
      throw new Error("User not found!");
    }
  })
);

// Get Login Status. Already loggedIN or Not
router.get(
  "/status",
  asyncHandler(async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json(false);
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (verifyToken) {
      res.json(true);
    } else {
      res.json(false);
    }
  })
);

router.patch(
  "/update-user",
  auth,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
      const { name, phone, address } = user;
      // save new user details, if changed by user or leave previous details
      user.name = req.body.name || name;
      user.phone = req.body.phone || phone;
      user.address = req.body.address || address;

      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    } else {
      res.status(404);
      throw new Error("User not found!");
    }
  })
);

router.patch(
  "/add-image",
  auth,
  asyncHandler(async (req, res) => {
    const { photo } = req.body;
    const user = await User.findById(req.user.id);
    user.photo = photo;

    const addImage = await user.save();
    res.status(200).json(addImage);
  })
);

module.exports = router;
