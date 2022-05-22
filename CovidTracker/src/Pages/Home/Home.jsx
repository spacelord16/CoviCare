import React from "react";
import "./Home.css";

import Navbar from "../../components/Home/Navbar/Navbar";
import Team from "../../components/Home/Team/Team";
import Footer from "../../components/Home/Footer/Footer";
import Hero from "../../components/Home/Hero/Hero";

const Home = () => {
  return (
    <>
      <div>
        <Hero/>
        {/* <Team /> */}
      </div>
    </>
  );
};

export default Home;
