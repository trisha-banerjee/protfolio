import { about } from '../data/index.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left — headline */}
          <div className="about-left">
            <p className="section-eyebrow reveal">About</p>
            <h2 className="about-headline reveal delay-1">
              {about.headline.split('—')[0].trim()}
              {' '}—{' '}
              <em>{about.headline.split('—')[1]?.trim()}</em>
            </h2>
          </div>

          {/* Right — paragraphs + stats */}
          <div className="about-right">
            <div className="about-body">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={`reveal delay-${i + 2}`}>{p}</p>
              ))}
            </div>

            <div className="about-stats reveal delay-4">
              {about.stats.map((stat, i) => (
                <div className="about-stat" key={i}>
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
