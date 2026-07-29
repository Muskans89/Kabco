/**
 * KABCO Footer
 * Place in: src/components/layout/Footer/Footer.tsx
 *
 * Uses Cinzel (logo) + Poppins (body) — make sure both are loaded
 * globally (e.g. in index.html or a global stylesheet):
 *
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Dealer", href: "/dealer" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_LINKS = [
  { label: "Submersible Starters", href: "/products#starters" },
  { label: "Submersible Cables", href: "/products#cables" },
];

const CONTACT_INFO = [
  { label: "Phone", value: "+91 00000 00000" },
  { label: "Email", value: "info@kabco.in" },
  { label: "Address", value: "Industrial Area, City, State" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="kb-footer">
      <div className="kb-footer-inner">
        <div className="kb-footer-col kb-footer-brand">
          <a href="/" className="kb-logo">
            <span className="kb-logo-mark">K</span>
            KAB<span className="kb-accent">CO</span>
          </a>
          <p className="kb-footer-tagline">
            Premium Submersible Starters &amp; Cables
          </p>
        </div>

        <div className="kb-footer-col">
          <h3>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="kb-footer-col">
          <h3>Products</h3>
          <ul>
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="kb-footer-col">
          <h3>Contact</h3>
          <ul className="kb-footer-contact">
            {CONTACT_INFO.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="kb-footer-bottom">
        <div className="kb-footer-bottom-inner">
          <p>© {year} KABCO. All Rights Reserved.</p>
          <p className="kb-tag">Built on Quality. Driven by Trust.</p>
        </div>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
        }

        .kb-footer {
          background: var(--kb-black);
          color: #cccccc;
          position: relative;
          font-family: 'Poppins', sans-serif;
        }

        .kb-footer::before {
          content: '';
          display: block;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--kb-gold), transparent);
        }

        .kb-footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 70px 40px 40px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
        }

        .kb-footer-col h3 {
          font-size: 14px;
          color: var(--kb-gold);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 0 0 22px;
          font-weight: 600;
        }

        .kb-footer .kb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Cinzel', serif;
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--kb-white);
          text-decoration: none;
        }

        .kb-footer .kb-accent { color: var(--kb-gold); }

        .kb-footer .kb-logo-mark {
          width: 38px;
          height: 38px;
          border: 2px solid var(--kb-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 16px;
          color: var(--kb-gold);
          flex-shrink: 0;
        }

        .kb-footer-tagline {
          margin-top: 18px;
          font-size: 14px;
          color: #999;
          line-height: 1.6;
          max-width: 260px;
        }

        .kb-footer-col ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .kb-footer-col ul li { margin-bottom: 14px; }

        .kb-footer-col ul li a {
          font-size: 14px;
          color: #bbbbbb;
          text-decoration: none;
          transition: color .2s ease, padding-left .2s ease;
          display: inline-block;
        }

        .kb-footer-col ul li a:hover {
          color: var(--kb-gold);
          padding-left: 4px;
        }

        .kb-footer-contact li {
          font-size: 14px;
          color: #bbbbbb;
          margin-bottom: 16px;
          line-height: 1.6;
          list-style: none;
        }

        .kb-footer-contact li span {
          display: block;
          color: var(--kb-gold);
          font-size: 12px;
          letter-spacing: .5px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .kb-footer-bottom {
          border-top: 1px solid #262626;
        }

        .kb-footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 22px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .kb-footer-bottom-inner p {
          font-size: 13px;
          color: #888;
          margin: 0;
        }

        .kb-footer-bottom-inner .kb-tag {
          font-size: 13px;
          color: var(--kb-gold);
          letter-spacing: .5px;
        }

        @media (max-width: 800px) {
          .kb-footer-inner { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 500px) {
          .kb-footer-inner { grid-template-columns: 1fr; }
          .kb-footer-bottom-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}