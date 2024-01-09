import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Mainlayout from "../../Layouts/Mainlayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Mainlayout>
      <div className="flex flex-col min-h-screen justify-center items-center bg-blue-500 text-white">
        <motion.form
          onSubmit={handleFormSubmit}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-500">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </motion.form>
      </div>
    </Mainlayout>
  );
};

export default Login;
