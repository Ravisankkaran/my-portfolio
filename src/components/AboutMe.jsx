import React from "react";
import "./AboutMe.css"; // Don't forget to create this file
import aboutImg from "../assets/about-img.png"; // replace with your actual image path
import Tooltip from "@mui/material/Tooltip";
const AboutMe = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: for smooth scrolling animation
    });
  };
  return (
    <section className="about-container">
      {/* <div className="scroll-indicator">⬤</div> */}
      <Tooltip title="Move to Top">
        <div className="mouse-icon" onClick={scrollToTop}></div>
      </Tooltip>
      <div className="about-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text-box">
          <p className="tag">&lt;p&gt;</p>
          <p className="hello">Hello!</p>
          <p>
            My name is Sinan and I specialize in web development that utilizes
            <span className="tech"> HTML</span>,
            <span className="tech"> CSS</span>,<span className="tech"> JS</span>
            , and
            <span className="tech"> REACT</span> etc.
          </p>
          <p>
            I am a highly motivated individual and eternal optimist dedicated to
            writing clear, concise, robust code that works. Striving to never
            stop learning and improving.
          </p>
          <p>
            When I'm not coding, I am
            <span className="highlight"> writing blogs</span>, reading, or
            picking up some new hands-on art project like{" "}
            <span className="highlight">photography</span>.
          </p>
          <p>
            I like to have my perspective and belief systems challenged so that
            I see the world through new eyes.
          </p>
          <p className="tag">&lt;/p&gt;</p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="Developer at work" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
