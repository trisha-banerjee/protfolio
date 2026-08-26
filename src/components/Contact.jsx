import { useEffect, useRef } from 'react';
import { personal } from '../data/index.js';

export default function Contact() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.3 }
    );
    if (line1Ref.current) observer.observe(line1Ref.current);
    if (line2Ref.current) observer.observe(line2Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Big CTA */}
          <div className="contact-cta">
            <span className="contact-cta-line">
              <span className="contact-cta-inner" ref={line1Ref}>
                Let&apos;s
              </span>
            </span>
            <span className="contact-cta-line">
              <span className="contact-cta-inner" ref={line2Ref}>
                <em>Talk.</em>
              </span>
            </span>
          </div>

          {/* Bottom info */}
          <div className="contact-bottom">
            <div>
              <p className="contact-info-label reveal">Get in touch</p>
              <a
                href={`mailto:${personal.email}`}
                className="contact-email reveal delay-1"
                data-cursor="hover"
              >
                {personal.email}
              </a>
            </div>

            <div className="contact-social">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link reveal delay-2"
                data-cursor="hover"
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link reveal delay-3"
                data-cursor="hover"
              >
                LinkedIn
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link reveal delay-4"
                data-cursor="hover"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
