import React from "react";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default LandingPage;
