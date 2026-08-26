import { personal } from '../data/index.js';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education',    href: '#education' },
  { label: 'Contact',      href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub',   href: personal.github },
  { label: 'LinkedIn', href: personal.linkedin },
  { label: 'Email',    href: `mailto:${personal.email}` },
  { label: 'Resume',   href: personal.resume },
];

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand column */}
          <div>
            <div className="footer-brand-name">{personal.name}</div>
            <div className="footer-brand-role">{personal.role}</div>
            <p className="footer-brand-desc">
              Building thoughtful digital products with clean code, strong fundamentals, and an eye for detail.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-col-links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={e => handleClick(e, link.href)} data-cursor="hover">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <div className="footer-col-title">Connect</div>
            <ul className="footer-col-links">
              {socialLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location column */}
          <div>
            <div className="footer-col-title">Location</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {personal.location}<br />
              India<br />
              <span style={{ marginTop: '16px', display: 'block', color: 'var(--accent)' }}>
                {personal.available ? '● Available' : '○ Unavailable'}
              </span>
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </span>
          <span className="footer-made">
            Designed &amp; Built by Trisha Banerjee
          </span>
        </div>
      </div>
    </footer>
  );
}
