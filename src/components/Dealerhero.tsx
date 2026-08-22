/**
 * KABCO — Dealer Page Hero ("Partner with KABCO")
 * Place in: src/components/dealer/DealerHero.tsx
 *
 * Centered, single-column layout — no illustration/image, just refined
 * typography and spacing.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

export default function DealerHero() {
  return (
    <section className="kb-dhero">
      <div className="kb-dhero-dots" aria-hidden="true" />

      <div className="kb-dhero-inner">
        <nav className="kb-dhero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span className="kb-dhero-current">Dealer</span>
        </nav>

        <span className="kb-dhero-eyebrow">Become a Partner</span>

        <h1 className="kb-dhero-title">Partner with KABCO</h1>

        <div className="kb-dhero-rule" />

        <p>
          We welcome distributors, wholesalers, retailers, and business
          partners who share our commitment to quality and customer
          satisfaction.
        </p>

        <p>
          If you're interested in becoming a KABCO dealer or distributor,
          we'd be happy to connect and explore opportunities together.
        </p>

        <a href="#dealer-form" className="kb-btn kb-btn-gold">
          Get in Touch
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-gold-light:#dcbd77;
          --kb-white:#FFFFFF;
        }

        .kb-dhero {
          position: relative;
          background: var(--kb-white);
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .kb-dhero-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(17,17,17,0.05) 1px, transparent 1px);
          background-size: 22px 22px;
          mask-image: radial-gradient(ellipse 70% 80% at 50% 20%, black 20%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 20%, black 20%, transparent 85%);
        }

        .kb-dhero-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
          padding: 160px 40px 110px;
          text-align: center;
        }

        .kb-dhero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12.5px;
          color: #999;
          margin-bottom: 28px;
        }
        .kb-dhero-breadcrumb a {
          color: #999;
          text-decoration: none;
          transition: color .2s ease;
        }
        .kb-dhero-breadcrumb a:hover { color: var(--kb-gold); }
        .kb-dhero-current { color: var(--kb-gold); }

        .kb-dhero-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 18px;
        }

        .kb-dhero-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1.2;
          color: var(--kb-black);
          margin: 0 0 22px;
        }

        .kb-dhero-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 28px;
        }

        .kb-dhero-inner p {
          font-size: 16px;
          line-height: 1.8;
          color: #666;
          font-weight: 300;
          margin: 0 0 18px;
        }
        .kb-dhero-inner p:last-child { margin-bottom: 30px; }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
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

        @media (max-width: 560px) {
          .kb-dhero-inner { padding: 130px 24px 70px; }
          .kb-dhero-title { font-size: 28px; }
          .kb-dhero-inner p { font-size: 14.5px; }
          .kb-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}