import React from "react";
import { personalInfo } from "../data/portfolio";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="row w-100 align-items-center">
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm{" "}
              <span className="text-primary name-animation">{personalInfo.name}</span>
            </h1>
            <h2 className="h4 text-muted mb-4">{personalInfo.title}</h2>
            <p className="lead mb-4" style={{ maxWidth: "500px" }}>
              {personalInfo.bio}
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-primary btn-lg">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline-primary btn-lg">
                View My Work
              </a>
            </div>
            <div className="social-links mt-4">
              <a
                href={personalInfo.socials.github}
                className="btn btn-sm btn-outline-primary mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={personalInfo.socials.linkedin}
                className="btn btn-sm btn-outline-primary mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-sm btn-outline-primary mx-2"
              >
                Email
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center d-none d-lg-block">
            <div className="hero-image">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="img-fluid rounded-circle border border-primary"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  boxShadow: "0 10px 40px rgba(0, 255, 200, 0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
