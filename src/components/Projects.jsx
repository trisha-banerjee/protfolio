import { projects } from '../data/index.js';

function GitHubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 1.9 1.3 2.7 2.7 0 0 0 3.6 1.1 2.7 2.7 0 0 1 .8-1.7c-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 0 1 1.2-3.3 4.3 4.3 0 0 1 .1-3.2s1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .2 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.9 5.7-5.6 6a3 3 0 0 1 .9 2.4v3.5c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <p className="section-eyebrow reveal">Projects</p>
          <h2 className="reveal delay-1" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--text-primary)',
          }}>
            Selected{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              Work
            </span>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              className="project-item reveal"
              key={project.id}
              data-cursor="project"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="project-image-wrap reveal-scale" style={{ transitionDelay: `${index * 0.05 + 0.1}s` }}>
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              {/* Info */}
              <div className="project-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="project-number">{project.id}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map(t => (
                    <span className="project-tech-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    data-cursor="hover"
                  >
                    <GitHubIcon /> GitHub
                  </a>
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      data-cursor="hover"
                    >
                      <ArrowIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
