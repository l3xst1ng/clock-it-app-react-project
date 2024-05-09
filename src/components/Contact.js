import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              123 Main Street
              <br />
              City, State ZIP
              <br />
              Country
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>Email: info@clockit.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
