import React from "react";
import { experience } from "../data/portfolio";
import "./About.css";

function Experience() {
  return (
    <section id="experience" className="about py-5">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="row mt-5">
          <div className="col-12">
            {experience.map((exp) => (
              <div key={exp.id} className="experience-item mb-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="text-primary">{exp.title}</h5>
                    <p className="text-muted small">{exp.year}</p>
                  </div>
                </div>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
