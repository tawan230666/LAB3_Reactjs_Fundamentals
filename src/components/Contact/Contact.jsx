import { useState } from 'react';
import { GitHub, Linkedin, Mail } from 'lucide-react'; // ถ้ายังไม่มีติดตั้ง lucide-react ลองติดตั้งด้วย
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // ตรวจสอบข้อมูลฟอร์ม
  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email is invalid';
    }
    if (!form.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // ที่นี่ใส่ logic ส่งข้อมูลจริง เช่น fetch หรือ axios POST
      // ตอนนี้แค่โชว์ success message
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together!
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>

          <button type="submit" className="btn-primary">Send Message</button>

          {success && <p className="success-message">Thank you! Your message has been sent.</p>}
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: your.email@example.com</p>
          <p>Phone: +66 1234 5678</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
