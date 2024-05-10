import React, { useState } from "react";
import "./HomePage.css";
import BG from "../Images/BG.png";
import About from "./About";
import Contact from "./Contact";
import WorkplaceGuidelines from "./WorkplaceGuidelines";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  // const renderSection = () => {
  //   switch (activeSection) {
  //     case "about":
  //       return <About />;
  //     case "contact":
  //       return <Contact />;
  //     case "guidelines":
  //       return <WorkplaceGuidelines />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <main>
      {activeSection === "home" && (
        <section id="home-page">
          <div className="content-wrapper">
            <div className="text-wrapper">
              <h1 id="cta">
                Attendance management that empowers your workforce
              </h1>
              <p className="cta-text-2">
                Keep Your Teams Productive and Improve Bottom Line
              </p>
              <p className="cta-text-3">
                Gain full visibility into your workforce's activities, enabling
                you to identify and confidently resolve productivity and
                compliance issues promptly.
              </p>
            </div>
            <div className="image-wrapper">
              <img src={BG} alt="Workplace Image" />
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default HomePage;
