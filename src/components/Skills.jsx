import React from "react";
import { skills } from "../data/portfolio";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: skills.frontend, icon: "💻" },
    { title: "Backend", skills: skills.backend, icon: "⚙️" },
    { title: "UI/UX Tools", skills: skills.uiux, icon: "🎨" },
    { title: "Other Skills", skills: skills.other, icon: "🛠️" },
  ];

  return (
    <section id="skills" className="skills py-5">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="row mt-5">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-4">
              <div className="skill-card">
                <div className="skill-header mb-4">
                  <span className="skill-icon">{category.icon}</span>
                  <h3 className="skill-title">{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <span className="skill-badge">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
