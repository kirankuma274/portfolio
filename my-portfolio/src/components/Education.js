import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section className="education" id="education">
      <h2>Education & Certifications</h2>

      <div className="education-block">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>B.Tech in Information Technology</strong><br />
            VR Siddhartha Engineering College (2022–2026)<br />
            CGPA: 8.23
          </li>
          <li>
            <strong>Intermediate (MPC)</strong><br />
            M.N.M Junior College, Kanigiri (2020–2022)<br />
            Percentage: 96.8%
          </li>
          <li>
            <strong>SSC</strong><br />
            Pragathi Vidya Nilayam, Kanigiri (2019–2020)<br />
            Percentage: 96.17%
          </li>
        </ul>
      </div>

      <div className="certification-block">
        <h3>Certifications</h3>
        <ul className="cert-grid">
          <li>Python – NPTEL</li>
          <li>Data Science – NPTEL</li>
          <li>C++ – Cisco</li>
          <li>Intelligent Automation – Eduskills</li>
          <li>Web Full Stack Developer – Eduskills</li>
          <li>Ethical Hacking – CYFER CODE</li>
          <li>Google Associate Cloud Engineer</li>
          <li>Incubation – NPTEL</li>
        </ul>
      </div>
    </section>
  );
}
