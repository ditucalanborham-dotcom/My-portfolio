import React from "react";
import { projects } from "../data/portfolio";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects py-5">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="row mt-5">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-12 mb-4">
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Project+Image";
                    }}
                  />
                  <div className="project-overlay">
                    {project.logo && (
                      <img src={project.logo} alt={project.name} className="overlay-logo" />
                    )}
                    <div className="overlay-links">
                      {project.githubLink !== "#" && (
                        <a
                          href={project.githubLink}
                          className="btn btn-sm btn-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          className="btn btn-sm btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.name}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
