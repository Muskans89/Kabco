import { useEffect, useState } from "react";

/**
 * KABCO Navbar — two-tier industrial nav
 * Place in: src/components/layout/Navbar/Navbar.tsx
 *
 * Products dropdown removed — "Products" is now a flat link like the
 * rest of the nav items.
 *
 * Fonts (load once globally, e.g. in index.html):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Dealer", href: "/dealer" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => activePath === href;

  return (
    <header className={`kb-navbar${scrolled ? " kb-navbar--scrolled" : ""}`}>
      {/* ===== Utility bar ===== */}
      <div className="kb-utility">
        <div className="kb-utility-inner">
          <div className="kb-utility-left">
            <a href="tel:+910000000000" className="kb-utility-item">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 00000 00000
            </a>
            <span className="kb-utility-divider" />
            <a href="mailto:info@kabco.in" className="kb-utility-item">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              info@kabco.in
            </a>
          </div>
          <a href="/dealer" className="kb-utility-cta">
            Become a Dealer
          </a>
        </div>
      </div>

      {/* ===== Main bar ===== */}
      <div className="kb-nav-inner">
        <a href="/" className="kb-logo" onClick={() => setActivePath("/")}>
          <span className="kb-logo-mark">K</span>
          <span className="kb-logo-text">
            KAB<span className="kb-accent">CO</span>
          </span>
        </a>

        <nav className="kb-nav-desktop">
          <ul className="kb-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive(link.href) ? "kb-active" : ""}
                  onClick={() => setActivePath(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="kb-nav-cta">
          <span className="kb-cta-divider" />
          <a href="/contact" className="kb-btn kb-btn-gold">
            Contact Us
          </a>
          <button
            className="kb-nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* ===== Mobile menu ===== */}
      <div className={`kb-mobile-menu${menuOpen ? " kb-mobile-menu--open" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={isActive(link.href) ? "kb-active" : ""}
                onClick={() => {
                  setActivePath(link.href);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/contact" className="kb-btn kb-btn-gold kb-mobile-cta">
          Contact Us
        </a>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-gold-light:#dcbd77;
          --kb-white:#FFFFFF;
          --kb-text:#333333;
          --kb-border:#E6E6E6;
        }

        .kb-navbar {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--kb-white);
          font-family: 'Poppins', sans-serif;
          transition: box-shadow .3s ease;
        }

        .kb-navbar--scrolled { box-shadow: 0 4px 24px rgba(17,17,17,0.10); }

        /* ---- utility bar ---- */
        .kb-utility {
          background: var(--kb-black);
          overflow: hidden;
          max-height: 34px;
          opacity: 1;
          transition: max-height .35s ease, opacity .25s ease;
        }
        .kb-navbar--scrolled .kb-utility { max-height: 0; opacity: 0; }

        .kb-utility-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 8px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .kb-utility-left { display: flex; align-items: center; gap: 16px; }

        .kb-utility-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #cfcfcf;
          text-decoration: none;
          letter-spacing: .2px;
          transition: color .2s ease;
        }
        .kb-utility-item:hover { color: var(--kb-gold); }

        .kb-utility-divider {
          width: 1px;
          height: 12px;
          background: #3a3a3a;
        }

        .kb-utility-cta {
          font-size: 12px;
          font-weight: 500;
          color: var(--kb-gold);
          text-decoration: none;
          letter-spacing: .3px;
          position: relative;
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(200,162,74,.4);
          transition: border-color .2s ease;
        }
        .kb-utility-cta:hover { border-color: var(--kb-gold); }

        /* ---- main bar ---- */
        .kb-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 40px;
          transition: padding .3s ease;
        }
        .kb-navbar--scrolled .kb-nav-inner { padding: 13px 40px; }

        .kb-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--kb-black);
        }

        .kb-logo-mark {
          width: 40px;
          height: 40px;
          border: 2px solid var(--kb-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 17px;
          color: var(--kb-gold);
          flex-shrink: 0;
        }

        .kb-logo-text {
          font-family: 'Cinzel', serif;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 1;
        }

        .kb-accent { color: var(--kb-gold); }

        /* ---- nav links ---- */
        .kb-nav-desktop { display: block; }

        .kb-nav-links {
          display: flex;
          align-items: center;
          gap: 38px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .kb-nav-links > li { position: relative; }

        .kb-nav-links > li > a {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: var(--kb-black);
          text-decoration: none;
          padding: 10px 0;
        }

        .kb-nav-links > li > a.kb-active { color: var(--kb-gold); }

        .kb-nav-links > li > a::after {
          content: '';
          position: absolute;
          left: 13px;
          right: 13px;
          bottom: 3px;
          height: 2px;
          background: var(--kb-gold);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform .3s ease;
        }
        .kb-nav-links > li > a:hover::after,
        .kb-nav-links > li > a.kb-active::after {
          transform: scaleX(1);
        }

        /* ---- CTA ---- */
        .kb-nav-cta { display: flex; align-items: center; gap: 20px; }

        .kb-cta-divider { width: 1px; height: 26px; background: var(--kb-border); }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
          border: 1.5px solid transparent;
          white-space: nowrap;
          text-decoration: none;
        }

        .kb-btn-gold { background: var(--kb-gold); color: var(--kb-black); }
        .kb-btn-gold:hover {
          background: var(--kb-gold-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(200,162,74,.35);
        }

        .kb-nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .kb-nav-toggle span { width: 24px; height: 2px; background: var(--kb-black); }

        /* ---- mobile menu ---- */
        .kb-mobile-menu {
          display: none;
          max-height: 0;
          overflow: hidden;
          background: var(--kb-white);
          border-top: 1px solid var(--kb-border);
          transition: max-height .35s ease;
        }
        .kb-mobile-menu--open { max-height: 560px; }

        .kb-mobile-menu ul { list-style: none; margin: 0; padding: 8px 24px; }
        .kb-mobile-menu > ul > li { border-bottom: 1px solid var(--kb-border); }

        .kb-mobile-menu a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 4px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .5px;
          text-transform: uppercase;
          color: var(--kb-black);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        .kb-mobile-menu a.kb-active { color: var(--kb-gold); }

        .kb-mobile-cta {
          display: flex;
          margin: 16px 24px 24px;
        }

        @media (max-width: 900px) {
          .kb-utility { display: none; }
          .kb-nav-desktop { display: none; }
          .kb-nav-cta .kb-btn-gold, .kb-cta-divider { display: none; }
          .kb-nav-toggle { display: flex; }
          .kb-mobile-menu { display: block; }
          .kb-nav-inner { padding: 14px 24px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-navbar *, .kb-navbar *::after { transition: none !important; }
        }
      `}</style>
    </header>
  );
}
