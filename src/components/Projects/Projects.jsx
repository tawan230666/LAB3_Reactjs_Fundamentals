// src/components/Projects/Projects.jsx

import { projects } from '../../data/portfolioData'; // 1. Import ข้อมูลโปรเจกต์
import './Projects.css';

// อาจสร้างคอมโพเนนต์ ProjectCard แยกออกมาเพื่อความเรียบร้อย
const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} className="project-image" />
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-techs">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
  </div>
);


function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>
        
        {/* 2. แทนที่ placeholder ด้วยการ map ข้อมูลโปรเจกต์ */}
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;