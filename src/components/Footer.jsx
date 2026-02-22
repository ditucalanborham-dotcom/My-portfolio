import React from "react";
import { personalInfo } from "../data/portfolio";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-4">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-3">
              <span className="text-primary"><Rham></Rham></span>.Dev
            </h4>
            <p className="text-muted">
              A passionate frontend developer creating beautiful and functional
              web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-muted text-decoration-none">
                  → Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted text-decoration-none">
                  → About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted text-decoration-none">
                  → Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted text-decoration-none">
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Connect With Me</h5>
            <div className="social-icons">
              <a
                href={personalInfo.socials.github}
                className="social-icon"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                gh
              </a>
              <a
                href={personalInfo.socials.linkedin}
                className="social-icon"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                in
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon"
                title="Email"
              >
                @
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary" />

        {/* Bottom - Centered */}
        <div className="text-center">
          <p className="text-muted small mb-2">
            © {currentYear} Borham Ditucalan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
