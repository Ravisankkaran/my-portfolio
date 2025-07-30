import React from "react";
import "./HeroSection.css";
import profileImg from "../assets/profileImg.jpg";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaLink,
  FaDownload,
} from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState, useEffect } from "react";
function calculateYearDifference(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInMs = end - start;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // Include leap years

  return `${diffInYears.toFixed(1)}`;
}

const HeroSection = () => {
  const [yearsPassed, setYearsPassed] = useState(null);

  useEffect(() => {
    const result = calculateYearDifference("2024-05-15");
    setYearsPassed(result);
  }, []);
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./src/assets/Ravisankkaran_Frontend_Developer.pdf"; // 🔁 Replace with actual path
    link.download = "Ravisankkaran_Resume.pdf"; // Optional: Rename file on download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="hero-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="icon">🏠</div>
        <div className="icon">👤</div>
        <div className="icon">💻</div>
        <div className="icon">🖥️</div>
        <div className="icon">✏️</div>
        <div className="icon">📧</div>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        {/* <div className="profile-top-border"></div> */}
        <div className="profile-image">
          <img className="profile-img" src={profileImg} alt="profileImg" />
        </div>
        <h2>RaviSankkaran I</h2>
        <p className="title">Front-End Developer</p>
        <div className="profile-info">
          <p>
            <MdOutlineAlternateEmail /> ravisankkaran@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Chennai
          </p>
          <p>
            <FaBriefcase /> Full-time / Freelancer
          </p>
          {/* <p>
            <FaLink /> www.sinantokmak.com
          </p> */}
        </div>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
          <span>REACT</span>
          <span>VUE</span>
        </div>
        <button className="cv-button" onClick={downloadResume}>
          Download CV <FaDownload />
        </button>
      </div>

      {/* Main Text Content */}
      <div className="main-content">
        <h1 className="paddin-margin-empty">Developer</h1>
        <div className="greeting">
          <p className="html-tag">&lt;h1&gt;</p>
          <h2 className="paddin-margin-empty">
            Hey
            <br />
            I’m <span>Ravi</span>,<br />
            <span className="animation">Front-End Developer</span>
          </h2>
          <p className="html-tag">&lt;/h1&gt;</p>
        </div>

        <div className="description">
          <p className="html-tag">&lt;p&gt;</p>
          <p>
            I help business grow by crafting amazing web experiences. If you’re
            looking for a developer that likes to get stuff done,
          </p>
          <p className="html-tag">&lt;/p&gt;</p>
        </div>
      </div>

      {/* Experience Block */}
      <div className="experience">
        <div>
          <span>4</span>
          <p>
            Programming
            <br />
            Language
          </p>
        </div>
        <div>
          <span>6</span>
          <p>
            Development
            <br />
            Tools
          </p>
        </div>
        <div>
          <span>{yearsPassed}</span>
          <p>
            Years of
            <br />
            Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
