import { useEffect, useRef } from 'react';
import { personal } from '../data/index.js';

export default function Hero() {
  const nameRef    = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // trigger name line animations after mount
    const timer = setTimeout(() => {
      if (!nameRef.current) return;
      nameRef.current.querySelectorAll('.hero-name-inner').forEach(el => {
        el.classList.add('visible');
      });
      subtitleRef.current?.classList.add('visible');
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-label reveal">
          <span className="hero-label-dot" />
          <span className="label">
            {personal.available ? 'Available for opportunities' : 'Currently unavailable'}
          </span>
        </div>

        {/* Oversized name — two lines */}
        <h1 className="hero-name" ref={nameRef}>
          <span className="hero-name-row">
            <span className="hero-name-inner">
              {personal.name.split(' ')[0]}
            </span>
          </span>
          <span className="hero-name-row">
            <span className="hero-name-inner">
              {personal.name.split(' ')[1]}
            </span>
          </span>
        </h1>

        {/* Gambarino italic subtitle */}
        <p className="hero-subtitle">
          <span className="hero-subtitle-inner" ref={subtitleRef}>
            {personal.role}
          </span>
        </p>

        {/* Bottom bar */}
        <div className="hero-bottom">
          <p className="hero-intro reveal delay-3">
            {personal.tagline}
          </p>
          <div className="hero-links reveal delay-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hero-link" data-cursor="hover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 1.9 1.3 2.7 2.7 0 0 0 3.6 1.1 2.7 2.7 0 0 1 .8-1.7c-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 0 1 1.2-3.3 4.3 4.3 0 0 1 .1-3.2s1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .2 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.9 5.7-5.6 6a3 3 0 0 1 .9 2.4v3.5c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link" data-cursor="hover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.7H9.4V9h3.4v1.6h.1a3.7 3.7 0 0 1 3.3-1.8c3.5 0 4.2 2.3 4.2 5.2v6.4zM5.3 7.5a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3zm1.8 12.9H3.5V9h3.6v11.4z" />
              </svg>
              LinkedIn
            </a>
            <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="hero-link" data-cursor="hover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16.5 7.5 12h3V4h3v8h3L12 16.5zm7.5 1.5H4.5V18h15v2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
}
