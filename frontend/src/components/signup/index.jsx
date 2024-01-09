import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Mainlayout from "../../Layouts/Mainlayout";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
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
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-500">Signup</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-2 text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Signup
          </button>
        </motion.form>
      </div>
    </Mainlayout>
  );
};

export default Signup;
