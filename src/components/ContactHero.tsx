/**
 * KABCO — Contact Page Hero
 * Place in: src/components/contact/ContactHero.tsx
 *
 * A compact inner-page banner (not full-screen like the homepage Hero) —
 * consistent dark, gold-grid treatment used across the site's page headers.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

export default function ContactHero() {
  return (
    <section className="kb-chero">
      <div className="kb-chero-grid" aria-hidden="true" />
      <div className="kb-chero-inner">
        <nav className="kb-chero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span className="kb-chero-current">Contact</span>
        </nav>

        <span className="kb-chero-eyebrow">We'd Love to Hear From You</span>

        <h1 className="kb-chero-title">Get in Touch</h1>

        <div className="kb-chero-rule" />

        <p className="kb-chero-sub">
          Have a question or need assistance? Our team is ready to help.
        </p>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
        }

        .kb-chero {
          position: relative;
          background: var(--kb-black);
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .kb-chero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,162,74,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,162,74,0.06) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 80% at 50% 30%, black 30%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 30%, black 30%, transparent 85%);
        }

        .kb-chero-inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 160px 40px 100px;
          text-align: center;
        }

        .kb-chero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12.5px;
          color: #888;
          margin-bottom: 28px;
        }
        .kb-chero-breadcrumb a {
          color: #888;
          text-decoration: none;
          transition: color .2s ease;
        }
        .kb-chero-breadcrumb a:hover { color: var(--kb-gold); }
        .kb-chero-current { color: var(--kb-gold); }

        .kb-chero-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 18px;
        }

        .kb-chero-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 46px;
          color: var(--kb-white);
          margin: 0 0 22px;
        }

        .kb-chero-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 24px;
        }

        .kb-chero-sub {
          font-size: 16.5px;
          line-height: 1.75;
          color: #aaa;
          font-weight: 300;
          margin: 0;
        }

        @media (max-width: 560px) {
          .kb-chero-inner { padding: 130px 24px 70px; }
          .kb-chero-title { font-size: 34px; }
        }
      `}</style>
    </section>
  );
}