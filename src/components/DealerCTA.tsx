/**
 * KABCO — Dealer Enquiry CTA
 * Place in: src/components/dealer/DealerCta.tsx
 *
 * Simple, premium CTA. Button links to the Contact page, where the
 * actual contact details/form live.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

export default function DealerCta() {
  return (
    <section className="kb-dcta">
      <div className="kb-dcta-inner">
        <h2 className="kb-dcta-title">Interested in becoming a KABCO dealer?</h2>

        <div className="kb-dcta-rule" />

        <p>
          Connect with us to explore dealership and distribution
          opportunities.
        </p>

        <a href="/contact" className="kb-btn kb-btn-gold">
          Contact Us
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

        .kb-dcta {
          background: var(--kb-white);
          font-family: 'Poppins', sans-serif;
        }

        .kb-dcta-inner {
          max-width: 640px;
          margin: 0 auto;
          padding: 110px 40px;
          text-align: center;
        }

        .kb-dcta-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1.35;
          color: var(--kb-black);
          margin: 0 0 22px;
        }

        .kb-dcta-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 26px;
        }

        .kb-dcta-inner p {
          font-size: 15.5px;
          line-height: 1.75;
          color: #777;
          font-weight: 300;
          margin: 0 0 40px;
        }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 34px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.2px;
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
          .kb-dcta-inner { padding: 80px 24px; }
          .kb-dcta-title { font-size: 25px; }
          .kb-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}