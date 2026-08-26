import { useEffect, useRef, useCallback } from 'react';

export default function useReveal() {
  const observer = useRef(null);

  const observe = useCallback((el) => {
    if (!el || !observer.current) return;
    observer.current.observe(el);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // observe all existing reveal elements
    document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .hero-name-inner, .hero-subtitle-inner, .contact-cta-inner'
    ).forEach((el) => observer.current.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  return { observe };
}
