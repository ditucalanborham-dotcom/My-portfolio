import React, { useState } from "react";
import { personalInfo } from "../data/portfolio";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend service like EmailJS or FormSubmit
    console.log("Form submitted:", formData);

    // Show success message
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="row mt-5">
          {/* Contact Information */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-info-card">
              <div className="contact-icon">📧</div>
              <h4>Email</h4>
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-info-card">
              <div className="contact-icon">📱</div>
              <h4>Phone</h4>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h4>Location</h4>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row mt-5">
          <div className="col-lg-8 offset-lg-2">
            <div className="contact-form-card">
              <h3 className="mb-4">Send Me a Message</h3>

              {submitted && (
                <div className="alert alert-success alert-dismissible fade show">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Send Message
                </button>
              </form>

              <p className="text-center text-muted mt-4 small">
                I'll get back to you as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
