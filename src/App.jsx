import { useEffect } from 'react';
import './styles/globals.css';

import CustomCursor from './components/CustomCursor';
import Navigation   from './components/Navigation';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Achievements from './components/Achievements';
import Education    from './components/Education';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  // Global scroll reveal — observes all .reveal* elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observe = () => {
      document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      ).forEach(el => observer.observe(el));
    };

    // initial observe
    observe();

    // re-observe after a tick in case components rendered late
    const timer = setTimeout(observe, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
