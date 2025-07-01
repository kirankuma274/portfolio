import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Image Forgery Detection (CNN)',
      description: 'Built a CNN model that detects image tampering with 94.3% accuracy.',
    },
    {
      title: 'Metastatic Cancer Detection (ViT)',
      description: 'A ViT model for cancer detection with Flask API and Postman integration.',
    },
    {
      title: 'Amazon Clone',
      description: 'Frontend clone of Amazon built using React and Firebase.',
    },
    {
      title: 'Money Tracker App',
      description: 'Track income and expenses. React + Context API project.',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather fetching using OpenWeatherMap API.',
    },
    {
      title: 'Language Translator',
      description: 'Translate between languages using Google Translate API.',
    },
    {
      title: 'Feedback System',
      description: 'Real time feed back collection system with role Authentication.',
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
