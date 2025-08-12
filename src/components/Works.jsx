import React, { useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ProjectSlider.css";
import projects from "../assets/project.json";

const Item = ({ project, level }) => {
  const className = `item level${level}`;
  return (
    <div className={className}>
      <img
        src={project.image}
        alt={project.name}
        style={{ width: "80%", borderRadius: "10px" }}
      />
      <h4>{project.name}</h4>
      <p style={{ fontSize: "12px", padding: "0 10px" }}>
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "10px", color: "#fff" }}
      >
        Visit ↗
      </a>
    </div>
  );
};

const Works = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
    setDirection("left");
  };

  const moveRight = () => {
    setActive((prev) => (prev + 1) % projects.length);
    setDirection("right");
  };

  const generateItems = () => {
    const items = [];
    const nodeRef = useRef(null);
    for (let i = active - 2; i <= active + 2; i++) {
      let index = i;
      if (i < 0) index = projects.length + i;
      if (i >= projects.length) index = i % projects.length;
      const level = active - i;
      items.push(
        <CSSTransition
          key={index}
          classNames={direction}
          timeout={300}
          nodeRef={nodeRef}
        >
          <Item project={projects[index]} level={level} />
        </CSSTransition>
      );
    }
    return items;
  };

  return (
    <section className="skills-section">
      <div className="mouse-icon"></div>

      <h2 className="skills-title">My Works</h2>
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={moveLeft}>
          ❮
        </div>
        <TransitionGroup component={null}>{generateItems()}</TransitionGroup>
        <div className="arrow arrow-right" onClick={moveRight}>
          ❯
        </div>
      </div>
    </section>
  );
};

export default Works;
