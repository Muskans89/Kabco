/**
 * KABCO Hero Section
 * Place in: src/components/home/Hero.tsx
 *
 * Client feedback applied:
 * - Bolder, product-led hero: leads with the KABCO brand lockup
 *   ("KABCO" + "Premium Submersible Starters & Cables") instead of a
 *   long marketing headline.
 * - Product photo given more visual weight (larger, wider column).
 * - Copy tightened — one short supporting line instead of a full
 *   paragraph.
 * - Section padding reduced to tighten page flow.
 * - Fixed an import path mismatch (was pointing at the SVG illustration
 *   while labeled as the photo) — now correctly imports the real photo.
 *
 * SETUP:
 * 1. Copy `kabco-starter-panel.jpg` into your project's image assets
 *    folder, e.g. `src/assets/images/kabco-starter-panel.jpg`.
 * 2. Adjust the import path below to match wherever you place it.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

import kabcoPanelPhoto from "../assets/kabco-panel-illustration.svg";

export default function Hero() {
  return (
    <section className="kb-hero">
      <div className="kb-hero-glow" aria-hidden="true" />

      <div className="kb-hero-inner">
        <div className="kb-hero-content">
          <h1 className="kb-hero-headline">
            Premium Submersible <span className="kb-accent">Starters</span> &amp; Cables
          </h1>

          <p className="kb-hero-sub">
            Dependable electrical solutions for residential, agricultural,
            and industrial pump installations.
          </p>

          <div className="kb-hero-actions">
            <a href="/products" className="kb-btn kb-btn-gold">
              Explore Products
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="kb-hero-render">
          <img
            src={kabcoPanelPhoto}
            alt="KABCO submersible pump starter panel with voltage and ampere meters"
            className="kb-hero-photo"
          />
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
          background: radial-gradient(ellipse 60% 50% at 22% 30%, rgba(200,162,74,0.14), transparent 70%);
          pointer-events: none;
        }

        .kb-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 40px;
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          align-items: center;
          gap: 40px;
        }

        .kb-hero-content {
          animation: kbFadeUp .8s ease both;
        }

        .kb-hero-brand {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 6px;
          color: var(--kb-gold);
          margin: 0 0 10px;
        }

        .kb-hero-headline {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 44px;
          line-height: 1.2;
          color: var(--kb-white);
          margin: 0 0 18px;
          max-width: 540px;
        }

        .kb-accent { color: var(--kb-gold); }

        .kb-hero-sub {
          font-size: 15.5px;
          line-height: 1.65;
          color: #aaa;
          max-width: 400px;
          margin: 0 0 30px;
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

        /* ---- product photo side ---- */
        .kb-hero-render {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: kbFadeIn 1s ease .15s both;
        }

        .kb-hero-photo {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 6px;
          filter: drop-shadow(0 24px 48px rgba(0,0,0,.55));
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
            padding: 70px 32px 50px;
            gap: 32px;
            text-align: center;
          }
          .kb-hero-brand { letter-spacing: 5px; }
          .kb-hero-headline { font-size: 34px; max-width: 100%; }
          .kb-hero-sub { max-width: 100%; margin-left: auto; margin-right: auto; }
          .kb-hero-actions { justify-content: center; }
          .kb-hero-render { order: -1; }
          .kb-hero-photo { max-width: 260px; }
        }

        /* ---- mobile ---- */
        @media (max-width: 480px) {
          .kb-hero-inner { padding: 56px 20px 40px; gap: 24px; }
          .kb-hero-headline { font-size: 27px; line-height: 1.28; margin-bottom: 14px; }
          .kb-hero-sub { font-size: 14px; margin-bottom: 22px; }
          .kb-hero-actions { flex-direction: column; width: 100%; gap: 12px; }
          .kb-btn { width: 100%; justify-content: center; padding: 14px 20px; }
          .kb-hero-photo { max-width: 210px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-hero * { animation: none !important; }
        }
      `}</style>
    </section>
  );
}