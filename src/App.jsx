import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/global.css';

function App() {
  useEffect(() => {
    // Smooth scrolling offset for fixed header
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-padding-top: 80px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <div 
        className="app-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Header />

        <main className="main-content">
          <About />
          <Projects />
          <Contact />
        </main>

        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
