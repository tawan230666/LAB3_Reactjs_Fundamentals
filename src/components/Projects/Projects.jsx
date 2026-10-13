import './Projects.css';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A selection of things I've designed and built.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <p className="projects-more">
          More on <a href="https://github.com/tawan230666" target="_blank" rel="noreferrer">GitHub →</a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
