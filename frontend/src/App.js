import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreatePost, Homepage, LandingPage, Login, Signup } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
