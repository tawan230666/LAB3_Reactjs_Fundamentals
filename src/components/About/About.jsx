import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';
import image from "../../assets/images/profile.jpg"

function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, color: '#3b82f6' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, color: '#10b981' },
    { name: 'Performance Optimization', icon: <Zap size={24} />, color: '#f59e0b' },
    { name: 'Problem Solving', icon: <Heart size={24} />, color: '#ef4444' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              Hello! I'm a passionate web developer who loves building beautiful and functional experiences.
            </p>
            <p className="about-description">
              When I'm not coding, I'm exploring new tech or crafting personal projects that push my skills.
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
              <a href="/resume.pdf" className="btn-primary" download>Download Resume</a>
              <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get In Touch</button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
              <img src={image} style={{ marginTop: 50 , height: "315px" , marginLeft: 30}}/>
                <p>Your Photo Here</p>
                <small>Add your profile picture</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;