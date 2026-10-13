import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';
import image from "../../assets/images/profile.jpg"

function About() {
  const skills = [
    { name: 'Full-stack Web (React, Node.js)', icon: <Code size={24} />, color: '#3b82f6' },
    { name: 'Software Architecture', icon: <Zap size={24} />, color: '#f59e0b' },
    { name: 'Mobile (Flutter)', icon: <Palette size={24} />, color: '#10b981' },
    { name: 'Computer Vision (YOLO)', icon: <Heart size={24} />, color: '#ef4444' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              Hi, I'm Tawan, a Software Engineering student at Rajamangala University of Technology Lanna (RMUTL), Chiang Mai.
              I build full-stack products end to end, from React front ends and Node.js APIs to microservices, Flutter apps and computer-vision models.
            </p>
            <p className="about-description">
              I care about software that is secure, tested and easy to run, and I enjoy turning real problems into working systems.
            </p>

            <div className="skills-grid">
              {skills.map((s, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-icon" style={{ backgroundColor: s.color + '20', color: s.color }}>
                    {s.icon}
                  </div>
                  <span className="skill-name">{s.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="https://github.com/tawan230666" className="btn-primary" target="_blank" rel="noreferrer">View my GitHub</a>
              <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get In Touch</button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
              <img src={image} alt="Tawan Tiphkun" style={{ marginTop: 50 , height: "315px" , marginLeft: 30}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;