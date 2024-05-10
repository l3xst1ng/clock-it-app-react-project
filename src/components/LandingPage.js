import React from "react";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import WorkplaceGuidelines from "./WorkplaceGuidelines";
import Contact from "./Contact";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HomePage />
      
      <About />
      <WorkplaceGuidelines />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
