import React from "react";
import { education, experience } from "../data/portfolio";
import "./About.css";

function About() {
  return (
    <section id="about" className="about py-5">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row mt-5">
          {/* Bio */}
          <div className="col-lg-6 mb-4">
            <div className="about-card">
              <h3 className="mb-3">Who I Am</h3>
              <p className="lead">
                I am a fourth-year student currently taking Bachelor of Science in Information Technology major in Network System, 
                graduating at the end of this second semester. While I have no formal work experience yet, my academic training 
                has given me a foundation in networking, database management, and IT concepts. I have gained hands-on experience 
                through school projects in system development, coding, and robotics.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="col-lg-6 mb-4">
            <div className="about-card">
              <h3 className="mb-3">Education</h3>
              <div className="education-item">
                <h5 className="text-primary">{education.degree}</h5>
                <p className="text-muted">
                  Major: <strong>{education.major}</strong>
                </p>
                <p className="text-muted">{education.university}</p>
                <p className="small">
                  Graduating: <strong>{education.graduationDate}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="mb-4">Experience & Leadership</h3>
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

export default About;
