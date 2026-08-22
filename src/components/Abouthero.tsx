/**
 * KABCO — About Page Hero
 * Place in: src/components/about/AboutHero.tsx
 *
 * Dark breadcrumb banner + a two-column intro: full heading/content on
 * the left, "large company image" on the right (currently a placeholder
 * illustration — swap <CompanyArt /> for a real facility/team photo,
 * e.g. <img src="/assets/images/kabco-facility.jpg" ... />).
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

export default function AboutHero() {
  return (
    <section className="kb-ahero">
      {/* ===== breadcrumb banner ===== */}
      <div className="kb-ahero-banner">
        <div className="kb-ahero-grid" aria-hidden="true" />
        <div className="kb-ahero-banner-inner">
          <nav className="kb-ahero-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span className="kb-ahero-current">About</span>
          </nav>
          <span className="kb-ahero-eyebrow">About KABCO</span>
        </div>
      </div>

      {/* ===== intro content ===== */}
      <div className="kb-ahero-inner">
        <div className="kb-ahero-content">
          <h1 className="kb-ahero-title">
            Built on Quality.
            <br />
            Driven by Trust.
          </h1>

          <div className="kb-ahero-rule" />

          <p>
            KABCO is an Indian electrical brand focused on delivering
            premium-quality submersible starters and cables that combine
            dependable performance with thoughtful design.
          </p>

          <p>
            We believe every product should offer lasting value through
            careful material selection, consistent manufacturing standards,
            and attention to detail. From product quality to packaging,
            every aspect is designed to reflect our commitment to
            reliability and professionalism.
          </p>

          <p>
            Whether you're an electrician, dealer, contractor, distributor,
            or end user, KABCO aims to provide products you can choose with
            confidence.
          </p>
        </div>

        <div className="kb-ahero-visual">
          <div className="kb-ahero-frame">
            <span className="kb-corner kb-corner-tl" />
            <span className="kb-corner kb-corner-br" />
            <CompanyArt />
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
          --kb-bg:#F7F7F7;
          --kb-text:#333333;
          --kb-border:#E6E6E6;
        }

        .kb-ahero {
          font-family: 'Poppins', sans-serif;
        }

        /* ---- breadcrumb banner ---- */
        .kb-ahero-banner {
          position: relative;
          background: var(--kb-black);
          overflow: hidden;
        }

        .kb-ahero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,162,74,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,162,74,0.06) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 100% at 50% 0%, black 20%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse 70% 100% at 50% 0%, black 20%, transparent 85%);
        }

        .kb-ahero-banner-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 130px 40px 70px;
          text-align: center;
        }

        .kb-ahero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12.5px;
          color: #888;
          margin-bottom: 22px;
        }
        .kb-ahero-breadcrumb a {
          color: #888;
          text-decoration: none;
          transition: color .2s ease;
        }
        .kb-ahero-breadcrumb a:hover { color: var(--kb-gold); }
        .kb-ahero-current { color: var(--kb-gold); }

        .kb-ahero-eyebrow {
          display: inline-block;
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 28px;
          letter-spacing: 1px;
          color: var(--kb-white);
        }

        /* ---- intro content ---- */
        .kb-ahero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 40px;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 80px;
          align-items: center;
          background: var(--kb-bg);
        }

        .kb-ahero-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: clamp(28px, 3.6vw, 40px);
          line-height: 1.28;
          color: var(--kb-black);
          margin: 0 0 24px;
        }

        .kb-ahero-rule {
          width: 64px;
          height: 2px;
          background: var(--kb-gold);
          margin-bottom: 30px;
        }

        .kb-ahero-content p {
          font-size: 15.5px;
          line-height: 1.85;
          color: var(--kb-text);
          font-weight: 300;
          max-width: 540px;
          margin: 0 0 20px;
        }

        .kb-ahero-content p:last-child { margin-bottom: 0; }

        /* ---- visual side ---- */
        .kb-ahero-frame {
          position: relative;
          padding: 26px;
        }

        .kb-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 1.5px solid var(--kb-gold);
        }
        .kb-corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
        .kb-corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }

        @media (max-width: 1100px) {
          .kb-ahero-inner { gap: 56px; padding: 90px 32px; }
        }

        @media (max-width: 900px) {
          .kb-ahero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .kb-ahero-content p { margin-left: auto; margin-right: auto; }
          .kb-ahero-visual { max-width: 420px; margin: 0 auto; }
        }

        @media (max-width: 560px) {
          .kb-ahero-banner-inner { padding: 110px 24px 50px; }
          .kb-ahero-eyebrow { font-size: 22px; }
          .kb-ahero-inner { padding: 60px 20px; }
          .kb-ahero-content p { font-size: 14.5px; }
          .kb-ahero-frame { padding: 16px; }
        }
      `}</style>
    </section>
  );
}

/**
 * Placeholder company/facility illustration standing in for "Large
 * company image" from the brief. Swap for a real facility, team, or
 * manufacturing photo once available.
 */
function CompanyArt() {
  return (
    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="480" height="480" fill="#151515" />

      {/* building block base */}
      <rect x="70" y="220" width="340" height="200" fill="#1c1c1c" stroke="#333" strokeWidth="1" />
      {/* secondary block */}
      <rect x="70" y="160" width="150" height="60" fill="#242424" stroke="#333" strokeWidth="1" />

      {/* window grid */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={92 + col * 38}
            y={246 + row * 40}
            width="20"
            height="24"
            fill={(row + col) % 5 === 0 ? "#C8A24A" : "#2c2c2c"}
            opacity={(row + col) % 5 === 0 ? 0.75 : 1}
          />
        ))
      )}

      {/* entrance */}
      <rect x="220" y="360" width="40" height="60" fill="#0d0d0d" stroke="#C8A24A" strokeWidth="1.5" />
      <line x1="240" y1="360" x2="240" y2="420" stroke="#C8A24A" strokeWidth="1" opacity="0.5" />

      {/* gold accent line along roof */}
      <line x1="70" y1="220" x2="410" y2="220" stroke="#C8A24A" strokeWidth="2" />
      <line x1="70" y1="160" x2="220" y2="160" stroke="#C8A24A" strokeWidth="2" />

      {/* KABCO sign */}
      <rect x="140" y="180" width="110" height="26" fill="#0d0d0d" stroke="#C8A24A" strokeWidth="1" />
      <text x="195" y="198" textAnchor="middle" fill="#C8A24A" fontFamily="Cinzel, serif" fontSize="13" fontWeight="700" letterSpacing="2">
        KABCO
      </text>

      {/* ground line + shadow */}
      <line x1="40" y1="420" x2="440" y2="420" stroke="#2a2a2a" strokeWidth="1" />
      <ellipse cx="240" cy="430" rx="200" ry="14" fill="#000000" opacity="0.35" />

      {/* small flag pole accent */}
      <line x1="380" y1="220" x2="380" y2="185" stroke="#555" strokeWidth="1.5" />
      <polygon points="380,185 405,193 380,201" fill="#C8A24A" opacity="0.85" />
    </svg>
  );
}