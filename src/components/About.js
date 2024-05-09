import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Clock It</h2>
        <p>
          Clock It is a powerful attendance management app designed to
          streamline and simplify the way businesses track and manage employee
          attendance. Our app empowers your workforce by providing a seamless
          and intuitive interface for easy check-ins and check-outs.
        </p>
        <p>
          With Clock It, you can{" "}
          <span className="highlight">gain complete visibility</span> into your
          employees' activities, enabling you to identify and address
          productivity and compliance issues promptly. Our app automatically
          captures accurate attendance data, eliminating manual errors and
          saving valuable time.
        </p>
        <p>
          Clock It offers a range of features to enhance your attendance
          management process, including real-time tracking, customizable
          reports, and integration with your existing HR systems. Whether you
          have a small team or a large organization, Clock It scales to meet
          your needs.
        </p>
        <p>
          Our mission is to empower businesses with the tools and insights they
          need to optimize their workforce management and drive success. With
          Clock It, you can focus on what matters most—growing your business and
          fostering a productive and engaged workforce.
        </p>
      </div>
    </section>
  );
};

export default About;
