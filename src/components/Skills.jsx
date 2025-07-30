import React from "react";
import "./Skills.css"; // Create this CSS file
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/atom.png";
import vueLogo from "../assets/vue.png";

const Skills = () => {
  return (
    <section className="skills-section">
      {/* <div className="scroll-indicator">⬤</div> */}
      <div className="mouse-icon"></div>

      <div className="skills-icon">&lt;/&gt;</div>

      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtext">
        I am striving to never stop learning and improving
      </p>

      <div className="skills-cards">
        <div className="skill-card">
          <FaLaptopCode className="skill-card-icon" />
          <h3>Web Developement</h3>
          <p>HTML/CSS · JS · REACT · VUE </p>
        </div>
        {/* <div className="skill-card">
          <FaMobileAlt className="skill-card-icon" />
          <h3>App Developement</h3>
          <p>iOS · Android</p>
        </div> */}
      </div>

      <div className="tech-icons">
        <div className="tech-item">
          <img src={htmlLogo} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="tech-item">
          <img src={cssLogo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="tech-item">
          <img src={jsLogo} alt="JavaScript" />
          <p>JS</p>
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="React" />
          <p>REACT</p>
        </div>
        <div className="tech-item">
          <img src={vueLogo} alt="React" />
          <p>VUE</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
