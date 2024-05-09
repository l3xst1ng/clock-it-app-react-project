import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">ClockIt</a>
        </div>
        <ul>
          <li>
            <a href="#home-page">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Workplace Guidlines</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#check-in" className="login-btn">
              Check In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
