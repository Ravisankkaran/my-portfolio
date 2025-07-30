import React from "react";
import "./ProjectSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
const projects = [
  {
    codeImg: "/assets/code1.png",
    websiteImg: "/assets/site1.png",
    link: "https://example.com",
  },
  {
    codeImg: "/assets/code2.png",
    websiteImg: "/assets/site2.png",
    link: "https://another-site.com",
  },
  // Add more projects as needed
];
function Works() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="skills-section">
      {/* <div className="scroll-indicator">⬤</div> */}
      {/* <div className="skills-icon">&lt;/&gt;</div> */}
      <div className="mouse-icon"></div>

      <h2 className="skills-title">My Works</h2>
      <p>I had the pleasure of working with these awesome projects</p>
      <div className="slider-container">
        <button className="slider-arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="slider-content">
          <div className="screen screen-left">
            <img src={projects[current].codeImg} alt="Code Screenshot" />
          </div>
          <div className="screen screen-right">
            <img src={projects[current].websiteImg} alt="Website Screenshot" />
            <a
              href={projects[current].link}
              className="view-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Website <span className="cursor">|</span>
            </a>
          </div>
        </div>

        <button className="slider-arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Works;
