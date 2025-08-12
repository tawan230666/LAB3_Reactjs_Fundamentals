import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'var(--accent-primary)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '3rem',
        height: '3rem',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-lg)',
        zIndex: 1000,
        fontSize: '1.5rem',
        lineHeight: '1',
      }}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;
