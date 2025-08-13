import './Projects.css';
import image_1 from "../../assets/images/projeact/projeact1.png"

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of the projects I've worked on recently.</p>

        <div className="projects-grid">
          {/* การ์ดโปรเจกต์ */}
          <article className="project-card">
            <div className="project-thumb">
              <img src= {image_1} alt="My First Project" />
            </div>
            <div className="project-body">
              <h3>My web profile</h3>
              <p>web profile</p>
              <ul className="tech-list">
                <li>React</li><li>Vite</li><li>CSS</li>
              </ul>
              <div className="project-actions">
                <a className="btn-primary" href="https://demo-url.com" target="_blank" rel="noreferrer">Live</a>
                <a className="btn-secondary" href="https://github.com/tawan230666/React-To-Do-List-lab3-1.1" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
