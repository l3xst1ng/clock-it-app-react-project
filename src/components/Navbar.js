import { useNavigate } from "react-router-dom";
import React from "react";

const NavBar = () => {
    const navigate = useNavigate()
    const handleLoginClick = () => {
        navigate('/LoginPage')
    }
  return (
    <header>
      <nav>
        <div className="logo">
          <p>ClockIt</p>
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
            <a onClick={handleLoginClick}
            href="#check-in" className="login-btn">
              Check In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;