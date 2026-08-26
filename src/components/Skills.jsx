import { skills } from '../data/index.js';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div style={{ marginBottom: '56px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <p className="section-eyebrow reveal">Skills</p>
            <h2 className="reveal delay-1" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.035em',
              lineHeight: 1,
              color: 'var(--text-primary)',
            }}>
              Craft &amp;{' '}
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                Toolset
              </span>
            </h2>
          </div>
          <p className="reveal delay-2" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            maxWidth: '220px',
            lineHeight: 1.6,
            textAlign: 'right',
          }}>
            Technologies I work with regularly across frontend, backend, and core CS.
          </p>
        </div>

        <div className="skills-grid reveal delay-3">
          {skills.map((col) => (
            <div className="skill-col" key={col.category}>
              <div className="skill-col-title">{col.category}</div>
              {col.items.map((item) => (
                <div className="skill-item" key={item}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
