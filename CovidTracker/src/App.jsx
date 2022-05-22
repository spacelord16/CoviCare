import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Survey from "./Pages/Survey/Survey";
import Navbar from "./components/Home/Navbar/Navbar";
import Footer from "./components/Home/Footer/Footer";
import Appointment from "./Pages/Appointment/Appointment";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
