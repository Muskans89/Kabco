/**
 * KABCO — Contact Information Section
 * Place in: src/components/contact/ContactInfo.tsx
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

const CONTACT_ITEMS = [
  {
    label: "Phone Number",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email Address",
    value: "info@kabco.in",
    href: "mailto:info@kabco.in",
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
  },
  {
    label: "Office Address",
    value: "Industrial Area, City, State, India",
    href: undefined,
    icon: (
      <>
        <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    label: "Business Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
    href: undefined,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
  },
];

export default function ContactInfo() {
  return (
    <section className="kb-cinfo">
      <div className="kb-cinfo-inner">
        <div className="kb-cinfo-head">
          <span className="kb-cinfo-eyebrow">Contact Information</span>
          <h2 className="kb-cinfo-title">Reach Out to KABCO</h2>
          <div className="kb-cinfo-rule" />
        </div>

        <div className="kb-cinfo-grid">
          {CONTACT_ITEMS.map((item) => {
            const Wrapper: any = item.href ? "a" : "div";
            return (
              <Wrapper
                key={item.label}
                href={item.href}
                className={`kb-cinfo-card${item.href ? " kb-cinfo-card--link" : ""}`}
              >
                <div className="kb-cinfo-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <span className="kb-cinfo-label">{item.label}</span>
                <span className="kb-cinfo-value">{item.value}</span>
              </Wrapper>
            );
          })}
        </div>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
          --kb-text:#333333;
          --kb-border:#E6E6E6;
        }

        .kb-cinfo {
          background: var(--kb-white);
          font-family: 'Poppins', sans-serif;
        }

        .kb-cinfo-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 40px;
        }

        .kb-cinfo-head {
          text-align: center;
          margin-bottom: 56px;
        }

        .kb-cinfo-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-cinfo-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 32px;
          color: var(--kb-black);
          margin: 0 0 20px;
        }

        .kb-cinfo-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto;
        }

        .kb-cinfo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .kb-cinfo-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          padding: 42px 26px;
          background: #FAFAFA;
          border: 1px solid var(--kb-border);
          border-radius: 3px;
          text-decoration: none;
          transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease, background .25s ease;
        }

        .kb-cinfo-card--link:hover {
          border-color: var(--kb-gold);
          background: var(--kb-white);
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(17,17,17,.08);
        }

        .kb-cinfo-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1.5px solid var(--kb-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--kb-gold);
          transition: background .25s ease, color .25s ease;
        }

        .kb-cinfo-card--link:hover .kb-cinfo-icon {
          background: var(--kb-gold);
          color: var(--kb-black);
        }

        .kb-cinfo-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: #999;
        }

        .kb-cinfo-value {
          font-size: 15px;
          font-weight: 500;
          color: var(--kb-black);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .kb-cinfo-grid { grid-template-columns: repeat(2, 1fr); }
          .kb-cinfo-inner { padding: 80px 32px; }
        }

        @media (max-width: 560px) {
          .kb-cinfo-grid { grid-template-columns: 1fr; }
          .kb-cinfo-inner { padding: 64px 22px; }
          .kb-cinfo-title { font-size: 26px; }
        }
      `}</style>
    </section>
  );
}