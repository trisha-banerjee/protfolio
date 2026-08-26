import { achievements } from '../data/index.js';

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <p className="section-eyebrow reveal">Recognition</p>
          <h2 className="reveal delay-1" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--text-primary)',
          }}>
            Achievements &amp;{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              Milestones
            </span>
          </h2>
        </div>

        {/* Table header */}
        <div className="achievements-header reveal delay-2">
          <span>Year</span>
          <span>Achievement</span>
          <span style={{ textAlign: 'right' }}>Organization</span>
        </div>

        {/* Rows */}
        {achievements.map((item, i) => (
          <div
            className={`achievement-row reveal delay-${Math.min(i + 3, 5)}`}
            key={i}
            style={{ transitionDelay: `${(i + 2) * 0.07}s` }}
          >
            <span className="achievement-year">{item.year}</span>
            <span className="achievement-title">{item.title}</span>
            <span className="achievement-org">{item.org}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
