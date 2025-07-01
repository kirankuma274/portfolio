import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      {/* Objective Section */}
      <div className="about-objective">
        <p className="about-intro">
          I'm an enthusiastic and detail-oriented Full Stack Developer skilled in JavaScript, React.js, Node.js,
          Express, and MongoDB. I enjoy building scalable, user-friendly web applications and continuously
          learning in collaborative environments.
        </p>
      </div>

      {/* Divider */}
      <hr className="about-divider" />

      {/* Skills Heading */}
      <h2 className="skills-heading">Skills</h2>

      {/* Skills Section */}
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Advanced Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git, GitHub</li>
            <li>Postman</li>
            <li>Microsoft Office</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Web Development</h3>
          <ul>
            <li>HTML, CSS</li>
            <li>React.js</li>
            <li>Node.js, Express</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Cloud</h3>
          <ul>
            <li>Google Associate Cloud Engineer</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Other</h3>
          <ul>
            <li>REST APIs</li>
            <li>Problem Solving</li>
            <li>CNN, ViT Models</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
