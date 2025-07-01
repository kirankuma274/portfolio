import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="timeline">

        <div className="timeline-item">
          <h3>Intelligent Automation Intern – Eduskills (AICTE)</h3>
          <span>Jan – Mar 2024</span>
          <p>
            • Built automation workflows using Blue Prism.<br />
            • Learned intelligent process automation and control room operations.
          </p>
        </div>

        <div className="timeline-item">
          <h3>Full Stack Developer Intern – Eduskills (AICTE)</h3>
          <span>Jul – Sep 2023</span>
          <p>
            • Developed a full-stack app using React, Node.js, MongoDB.<br />
            • Integrated APIs, deployed via GitHub, and worked with version control.
          </p>
        </div>

      </div>
    </section>
  );
}
