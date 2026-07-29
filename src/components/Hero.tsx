/**
 * KABCO Hero Section (Minimal)
 * Place in: src/components/home/Hero.tsx
 *
 * Deliberately minimal: solid dark background with a soft gold glow
 * (no grid texture, no overlay chrome), one headline, one short
 * description, two buttons, and the product image. Image stacks below
 * the text on mobile instead of disappearing, at a controlled size.
 *
 * NOTES FOR INTEGRATION:
 * 1. If you'd rather use a real photo background instead of the solid
 *    dark + glow treatment, add a `background-image: url(...)` to
 *    `.kb-hero` and re-introduce an overlay for text contrast.
 * 2. Swap the product render: <HeroIllustration /> is a placeholder for
 *    "Large product render" — replace it with
 *    <img src="/assets/images/starter-panel-render.png" .../> once real
 *    product photography/renders are ready.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

export default function Hero() {
  return (
    <section className="kb-hero">
      <div className="kb-hero-glow" aria-hidden="true" />

      <div className="kb-hero-inner">
        <div className="kb-hero-content">
          <h1 className="kb-hero-headline">
            Premium Electrical Solutions for{" "}
            <span className="kb-accent">Modern Water Pump</span> Installations
          </h1>

          <p className="kb-hero-sub">
            KABCO offers thoughtfully manufactured submersible pump starters
            and cables designed for dependable electrical installations.
          </p>

          <div className="kb-hero-actions">
            <a href="/products" className="kb-btn kb-btn-gold">
              Explore Products
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/dealer" className="kb-btn kb-btn-outline">
              Become a Dealer
            </a>
          </div>
        </div>

        <div className="kb-hero-render">
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-gold-light:#dcbd77;
          --kb-white:#FFFFFF;
        }

        .kb-hero {
          position: relative;
          background: var(--kb-black);
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .kb-hero-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 22% 30%, rgba(200,162,74,0.12), transparent 70%);
          pointer-events: none;
        }

        .kb-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 40px;
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          align-items: center;
          gap: 48px;
        }

        .kb-hero-content {
          animation: kbFadeUp .8s ease both;
        }

        .kb-hero-headline {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 46px;
          line-height: 1.22;
          color: var(--kb-white);
          margin: 0 0 22px;
          max-width: 560px;
        }

        .kb-accent { color: var(--kb-gold); }

        .kb-hero-sub {
          font-size: 16px;
          line-height: 1.7;
          color: #b5b5b5;
          max-width: 420px;
          margin: 0 0 36px;
          font-weight: 300;
        }

        .kb-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 28px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease, color .25s ease;
        }

        .kb-btn-gold {
          background: var(--kb-gold);
          color: var(--kb-black);
          border: 1.5px solid var(--kb-gold);
        }
        .kb-btn-gold:hover {
          background: var(--kb-gold-light);
          border-color: var(--kb-gold-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(200,162,74,.3);
        }
        .kb-btn-gold svg { transition: transform .25s ease; }
        .kb-btn-gold:hover svg { transform: translateX(3px); }

        .kb-btn-outline {
          background: transparent;
          color: var(--kb-white);
          border: 1.5px solid rgba(255,255,255,.5);
        }
        .kb-btn-outline:hover {
          border-color: var(--kb-white);
          background: rgba(255,255,255,.06);
          transform: translateY(-2px);
        }

        /* ---- product render side ---- */
        .kb-hero-render {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: kbFadeIn 1s ease .15s both;
        }

        .kb-hero-illustration {
          width: 100%;
          max-width: 360px;
          height: auto;
          filter: drop-shadow(0 24px 48px rgba(0,0,0,.5));
        }

        @keyframes kbFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes kbFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ---- tablet ---- */
        @media (max-width: 900px) {
          .kb-hero-inner {
            grid-template-columns: 1fr;
            padding: 90px 32px 60px;
            gap: 40px;
            text-align: center;
          }
          .kb-hero-headline { font-size: 36px; max-width: 100%; }
          .kb-hero-sub { max-width: 100%; margin-left: auto; margin-right: auto; }
          .kb-hero-actions { justify-content: center; }
          .kb-hero-render { order: -1; }
          .kb-hero-illustration { max-width: 260px; }
        }

        /* ---- mobile ---- */
        @media (max-width: 480px) {
          .kb-hero-inner { padding: 72px 20px 48px; gap: 28px; }
          .kb-hero-headline { font-size: 28px; line-height: 1.28; margin-bottom: 16px; }
          .kb-hero-sub { font-size: 14.5px; margin-bottom: 26px; }
          .kb-hero-actions { flex-direction: column; width: 100%; gap: 12px; }
          .kb-btn { width: 100%; justify-content: center; padding: 14px 20px; }
          .kb-hero-illustration { max-width: 220px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-hero * { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

/**
 * Placeholder line-art illustration standing in for a real product render
 * of a KABCO submersible pump starter panel + cable. Swap for actual
 * product photography/render when available.
 */
function HeroIllustration() {
  return (
    <svg
      className="kb-hero-illustration"
      viewBox="0 0 420 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="kbPanelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
      </defs>

      {/* control panel body */}
      <rect x="70" y="40" width="280" height="360" rx="6" fill="url(#kbPanelGrad)" stroke="#C8A24A" strokeWidth="1.5" />
      <rect x="70" y="40" width="280" height="360" rx="6" fill="none" stroke="#333" strokeWidth="1" />

      {/* door panel lines */}
      <rect x="94" y="66" width="232" height="140" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="1" />

      {/* KABCO plate */}
      <text x="210" y="95" textAnchor="middle" fill="#C8A24A" fontFamily="Cinzel, serif" fontSize="20" fontWeight="700" letterSpacing="2">
        KABCO
      </text>
      <line x1="150" y1="108" x2="270" y2="108" stroke="#C8A24A" strokeWidth="1" opacity="0.5" />

      {/* indicator lights */}
      <circle cx="130" cy="140" r="6" fill="#C8A24A" />
      <circle cx="130" cy="140" r="10" fill="none" stroke="#C8A24A" strokeWidth="1" opacity="0.4" />
      <circle cx="160" cy="140" r="6" fill="#4a4a4a" />
      <circle cx="190" cy="140" r="6" fill="#4a4a4a" />

      <text x="130" y="165" textAnchor="middle" fill="#888" fontFamily="Poppins, sans-serif" fontSize="9" letterSpacing="1">RUN</text>
      <text x="160" y="165" textAnchor="middle" fill="#888" fontFamily="Poppins, sans-serif" fontSize="9" letterSpacing="1">FAULT</text>
      <text x="190" y="165" textAnchor="middle" fill="#888" fontFamily="Poppins, sans-serif" fontSize="9" letterSpacing="1">POWER</text>

      {/* dial/meter */}
      <circle cx="270" cy="150" r="30" fill="none" stroke="#555" strokeWidth="1.5" />
      <circle cx="270" cy="150" r="30" fill="none" stroke="#C8A24A" strokeWidth="1.5" strokeDasharray="47 141" strokeLinecap="round" transform="rotate(-90 270 150)" />
      <line x1="270" y1="150" x2="282" y2="136" stroke="#C8A24A" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="270" cy="150" r="2.5" fill="#C8A24A" />

      {/* switches row */}
      <rect x="94" y="222" width="232" height="60" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="1" />
      <rect x="112" y="238" width="18" height="30" rx="2" fill="#222" stroke="#555" strokeWidth="1" />
      <rect x="112" y="238" width="18" height="14" rx="2" fill="#C8A24A" opacity="0.85" />
      <rect x="148" y="238" width="18" height="30" rx="2" fill="#222" stroke="#555" strokeWidth="1" />
      <rect x="148" y="252" width="18" height="16" rx="2" fill="#444" />
      <rect x="184" y="238" width="18" height="30" rx="2" fill="#222" stroke="#555" strokeWidth="1" />
      <rect x="184" y="238" width="18" height="14" rx="2" fill="#C8A24A" opacity="0.85" />
      <rect x="290" y="238" width="20" height="30" rx="2" fill="none" stroke="#555" strokeWidth="1" />
      <line x1="294" y1="248" x2="306" y2="258" stroke="#666" strokeWidth="1" />
      <line x1="306" y1="248" x2="294" y2="258" stroke="#666" strokeWidth="1" />

      {/* terminal / cable gland row */}
      <rect x="94" y="298" width="232" height="42" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="1" />
      <circle cx="120" cy="319" r="8" fill="none" stroke="#666" strokeWidth="1.5" />
      <circle cx="150" cy="319" r="8" fill="none" stroke="#666" strokeWidth="1.5" />
      <circle cx="180" cy="319" r="8" fill="none" stroke="#666" strokeWidth="1.5" />

      {/* bottom vent lines */}
      <line x1="94" y1="362" x2="326" y2="362" stroke="#2a2a2a" strokeWidth="1" />
      <line x1="94" y1="370" x2="326" y2="370" stroke="#2a2a2a" strokeWidth="1" />
      <line x1="94" y1="378" x2="326" y2="378" stroke="#2a2a2a" strokeWidth="1" />

      {/* cable coiling out from the base */}
      <path
        d="M150 400 C 150 440, 90 430, 90 465 C 90 495, 150 490, 150 460 C 150 435, 200 435, 200 460 C 200 495, 260 495, 260 460"
        fill="none"
        stroke="#C8A24A"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M150 400 C 150 440, 90 430, 90 465 C 90 495, 150 490, 150 460 C 150 435, 200 435, 200 460 C 200 495, 260 495, 260 460"
        fill="none"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 10"
      />
    </svg>
  );
}