/**
 * KABCO — "How Can We Help?" Section
 * Place in: src/components/contact/HowCanWeHelp.tsx
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

const HELP_ITEMS = [
  {
    title: "Product Information",
    desc: "Get details about KABCO's submersible starters and cables.",
    href: "/products",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16v-4M12 8h.01" />
      </>
    ),
  },
  {
    title: "Dealership Enquiries",
    desc: "Interested in becoming a dealer or distributor? Connect with our team.",
    href: "/dealer",
    icon: (
      <>
        <path d="M8.5 14.5 4 10l3-3 3.5 3.5" />
        <path d="m15.5 14.5 4.5-4.5-3-3-3.5 3.5" />
        <path d="M8.5 14.5c1 1.5 2.2 2.5 3.5 2.5s2.5-1 3.5-2.5" />
        <path d="m10.5 12.5 3 3" />
      </>
    ),
  },
  {
    title: "Technical Assistance",
    desc: "Need help with our products? We're here to assist you.",
    href: "/contact",
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.65 2.65a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4L14.7 6.3Z" />
      </>
    ),
  },
];

export default function HowCanWeHelp() {
  return (
    <section className="kb-help3">
      <div className="kb-help3-inner">
        <div className="kb-help3-head">
          <span className="kb-help3-eyebrow">Support</span>
          <h2 className="kb-help3-title">How Can We Help?</h2>
          <div className="kb-help3-rule" />
          <p className="kb-help3-sub">
            Let us know what you're looking for and we'll point you in the
            right direction.
          </p>
        </div>

        <div className="kb-help3-grid">
          {HELP_ITEMS.map((item) => (
            <a href={item.href} key={item.title} className="kb-help3-card">
              <div className="kb-help3-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="kb-help3-link">
                Get in Touch
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
          --kb-bg:#F7F7F7;
          --kb-border:#E6E6E6;
        }

        .kb-help3 {
          background: var(--kb-bg);
          font-family: 'Poppins', sans-serif;
        }

        .kb-help3-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 40px;
        }

        .kb-help3-head {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 56px;
        }

        .kb-help3-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-help3-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 34px;
          color: var(--kb-black);
          margin: 0 0 20px;
        }

        .kb-help3-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 22px;
        }

        .kb-help3-sub {
          font-size: 15px;
          line-height: 1.7;
          color: #777;
          font-weight: 300;
          margin: 0;
        }

        .kb-help3-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .kb-help3-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 44px 36px;
          background: var(--kb-white);
          border: 1px solid var(--kb-border);
          border-radius: 3px;
          text-decoration: none;
          transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease;
        }

        .kb-help3-card:hover {
          border-color: transparent;
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(17,17,17,.10);
        }

        .kb-help3-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 1.5px solid var(--kb-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--kb-gold);
          margin-bottom: 26px;
          transition: background .25s ease, color .25s ease, transform .25s ease;
        }

        .kb-help3-card:hover .kb-help3-icon {
          background: var(--kb-gold);
          color: var(--kb-black);
          transform: translateY(-3px);
        }

        .kb-help3-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--kb-black);
          margin: 0 0 12px;
        }

        .kb-help3-card p {
          font-size: 14px;
          line-height: 1.75;
          color: #777;
          font-weight: 300;
          margin: 0 0 24px;
          flex-grow: 1;
        }

        .kb-help3-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;
          color: var(--kb-gold);
        }
        .kb-help3-link svg { transition: transform .25s ease; }
        .kb-help3-card:hover .kb-help3-link svg { transform: translateX(4px); }

        @media (max-width: 900px) {
          .kb-help3-grid { grid-template-columns: 1fr; }
          .kb-help3-inner { padding: 80px 32px; }
        }

        @media (max-width: 560px) {
          .kb-help3-inner { padding: 64px 22px; }
          .kb-help3-title { font-size: 26px; }
          .kb-help3-card { padding: 34px 26px; }
        }
      `}</style>
    </section>
  );
}