import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwtUtils.js";

// Controller for user signup
export const signup = async (req, res) => {
  try {
    // Extract user data from request body
    const { firstName, lastName, username, email, password } = req.body;

    // Check if a user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    // Save the user to the database
    const user = await newUser.save();

    // Send a success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // Handle errors
    res
      .status(400)
      .json({ message: "Error registering user", error: error.message });
  }
};

// Controller for user login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Exclude password from user data
      const { password: userPassword, ...userData } = user.toObject();

      // Generate JWT token
      const token = generateToken(userData._id, userData.isAdmin);

      res
        .status(200)
        .json({ message: "Login successful", token, user: userData });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: "Error logging in", error: error.message });
  }
};
