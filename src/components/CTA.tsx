/**
 * KABCO — "We're Here to Help" CTA / Intro Section
 * Place in: src/components/common/GetInTouchCta.tsx
 *
 * Standalone, reusable — works well as the Contact page hero intro, or
 * as a CTA banner on other pages. No title was provided with this copy,
 * so a fitting one ("We're Here to Help") has been added — swap the
 * `title` default or pass your own via props.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

type Props = {
  title?: string;
};

export default function GetInTouchCta({ title = "We're Here to Help" }: Props) {
  return (
    <section className="kb-help">
      <div className="kb-help-inner">
        <span className="kb-help-eyebrow">Get In Touch</span>

        <h2 className="kb-help-title">{title}</h2>

        <div className="kb-help-rule" />

        <p className="kb-help-sub">
          Whether you're looking for product information, dealership
          opportunities, or technical assistance, our team is here to help.
          Get in touch with us and we'll be happy to assist you.
        </p>

        <div className="kb-help-actions">
          <a href="/contact" className="kb-btn kb-btn-gold">
            Contact Us
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="/dealer" className="kb-btn kb-btn-outline-dark">
            Become a Dealer
          </a>
        </div>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-gold-light:#dcbd77;
          --kb-white:#FFFFFF;
        }

        .kb-help {
          background: var(--kb-white);
          font-family: 'Poppins', sans-serif;
        }

        .kb-help-inner {
          max-width: 700px;
          margin: 0 auto;
          padding: 110px 40px;
          text-align: center;
        }

        .kb-help-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 18px;
        }

        .kb-help-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 1.3;
          color: var(--kb-black);
          margin: 0 0 22px;
        }

        .kb-help-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 26px;
        }

        .kb-help-sub {
          font-size: 16px;
          line-height: 1.8;
          color: #777;
          font-weight: 300;
          margin: 0 0 42px;
        }

        .kb-help-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
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
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease, border-color .25s ease;
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

        .kb-btn-outline-dark {
          background: transparent;
          color: var(--kb-black);
          border: 1.5px solid var(--kb-black);
        }
        .kb-btn-outline-dark:hover {
          background: var(--kb-black);
          color: var(--kb-white);
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(17,17,17,.18);
        }

        @media (max-width: 560px) {
          .kb-help-inner { padding: 80px 24px; }
          .kb-help-title { font-size: 27px; }
          .kb-help-actions { flex-direction: column; align-items: stretch; }
          .kb-btn { justify-content: center; }
        }
      `}</style>
    </section>
  );
}