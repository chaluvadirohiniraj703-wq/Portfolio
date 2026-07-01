import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "C Programming", level: "85%" },
    { name: "Python", level: "88%" }
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <p className="subtitle">
        Here are some of the technologies and programming languages I have
        learned and worked with.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;