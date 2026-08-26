import { useState, useEffect } from 'react';
import { personal } from '../data/index.js';

const NAV_ITEMS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education',    href: '#education' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState('home');
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // update active nav item
      const sections = NAV_ITEMS.map(n => document.querySelector(n.href));
      const scrollY = window.scrollY + 120;
      sections.forEach((el, i) => {
        if (!el) return;
        if (scrollY >= el.offsetTop) setActive(NAV_ITEMS[i].href.slice(1));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a
              href="#home"
              className="nav-logo"
              onClick={e => handleNavClick(e, '#home')}
            >
              {personal.name.split(' ')[0][0]}{personal.name.split(' ')[1][0]}
              &nbsp;/&nbsp;Portfolio
            </a>

            <ul className="nav-links">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={active === item.href.slice(1) ? 'active' : ''}
                    onClick={e => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className={`nav-toggle${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={e => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <div className="nav-mobile-footer">
          <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </>
  );
}
