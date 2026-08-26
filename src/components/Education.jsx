import { education } from '../data/index.js';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <p className="section-eyebrow reveal">Education</p>
          <h2 className="reveal delay-1" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--text-primary)',
          }}>
            Academic{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              Journey
            </span>
          </h2>
        </div>

        <div className="education-list">
          {education.map((item, i) => (
            <div
              className={`education-item reveal delay-${Math.min(i + 2, 4)}`}
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div>
                <div className="education-period">{item.period}</div>
                <div className="education-status">{item.status}</div>
              </div>
              <div>
                <div className="education-degree">{item.degree}</div>
                <div className="education-institution">{item.institution}</div>
                <div className="education-location">{item.location}</div>
                {item.note && (
                  <div className="education-location" style={{ marginTop: '6px', color: 'var(--text-secondary)' }}>
                    {item.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
