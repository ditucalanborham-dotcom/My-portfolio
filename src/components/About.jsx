import React from "react";
import { education } from "../data/portfolio";
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
              <h3 className="mb-3">Who Am I</h3>
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
                  Graduation: <strong>{education.graduationDate}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
