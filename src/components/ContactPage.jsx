import React, { useState } from "react";
import "./ContactPage.css";
import github from "../assets/github.png";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS, Formspree, or custom backend here
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="mouse-icon"></div>
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">
        I’m currently available for freelance work
      </p>

      <button className="message-button">Send Me A Message</button>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Your name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Your email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group full">
          <label>Your message *</label>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Enter your needs"
            rows="4"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="send-button">
          Send Message ✈️
        </button>
      </form>

      <footer className="footer">
        <div>© 2025 Ravisankkaran. All rights reserved.</div>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-icons">
          {/* <a href="#">
            <img src="/icons/instagram.svg" alt="IG" />
          </a>
          <a href="#">
            <img src="/icons/discord.svg" alt="Discord" />
          </a> */}
          <a href="https://github.com/Ravisankkaran">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default ContactPage;
