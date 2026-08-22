/**
 * KABCO — "Why Partner With KABCO" Section (Circuit Trace Concept)
 * Place in: src/components/dealer/WhyPartner.tsx
 *
 * A layout unique to the brand: the four reasons sit along a horizontal
 * "circuit trace" with a slow animated current running through it, each
 * connected by a short stub to a node — a nod to KABCO's own product
 * world (starters, terminals, wiring) rather than a generic card grid.
 * Falls back to a vertical trace on mobile.
 *
 * IMPORTANT: The brief specifically flagged that claims like "high
 * margins," "exclusive territories," "guaranteed supply," "marketing
 * support," or "special pricing" should NOT be used unless the client
 * confirms them. None of those appear here — the four points below are
 * grounded only in things already established elsewhere in the brief
 * (product quality, packaging/presentation, professionalism, and
 * long-term customer relationships). Swap these out once the client
 * provides real, confirmed dealer benefits.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

const REASONS = [
  {
    title: "Quality You Can Offer with Confidence",
    desc: "Every product is manufactured to consistent quality standards, so you can stand behind what you sell.",
  },
  {
    title: "Professional Presentation",
    desc: "Thoughtfully designed packaging and consistent branding that reflect well on your business.",
  },
  {
    title: "Responsive Communication",
    desc: "A team that's easy to reach and ready to support you through enquiries and the partnership process.",
  },
  {
    title: "A Relationship Built to Last",
    desc: "We aim for partnerships based on trust, consistency, and mutual growth over time.",
  },
];

export default function WhyPartner() {
  return (
    <section className="kb-wpartner">
      <div className="kb-wpartner-inner">
        <div className="kb-wpartner-head">
          <span className="kb-wpartner-eyebrow">The KABCO Advantage</span>
          <h2 className="kb-wpartner-title">Why Partner With KABCO</h2>
          <div className="kb-wpartner-rule" />
        </div>

        {/* ===== circuit trace (desktop) ===== */}
        <div className="kb-trace" aria-hidden="false">
          <div className="kb-trace-line">
            <span className="kb-trace-current" />
          </div>

          {REASONS.map((item, i) => (
            <div
              className={`kb-trace-item${i % 2 === 0 ? " kb-trace-item--up" : " kb-trace-item--down"}`}
              key={item.title}
            >
              <div className="kb-trace-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <span className="kb-trace-stub" />
              <span className="kb-trace-node">
                <span className="kb-trace-node-dot" />
              </span>
            </div>
          ))}
        </div>

        {/* ===== vertical trace (mobile) ===== */}
        <div className="kb-trace-mobile">
          <span className="kb-trace-mobile-line" />
          {REASONS.map((item) => (
            <div className="kb-trace-mobile-item" key={item.title}>
              <span className="kb-trace-mobile-node">
                <span className="kb-trace-mobile-node-dot" />
              </span>
              <div className="kb-trace-mobile-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
        }

        .kb-wpartner {
          background: var(--kb-black);
          font-family: 'Poppins', sans-serif;
        }

        .kb-wpartner-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 40px;
        }

        .kb-wpartner-head {
          text-align: center;
          margin-bottom: 90px;
        }

        .kb-wpartner-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-wpartner-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 34px;
          color: var(--kb-white);
          margin: 0 0 20px;
        }

        .kb-wpartner-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto;
        }

        /* ===== desktop circuit trace ===== */
        .kb-trace {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          height: 460px;
        }

        .kb-trace-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 2px;
          background: #2a2a2a;
          transform: translateY(-1px);
          overflow: hidden;
        }

        .kb-trace-current {
          position: absolute;
          top: 0;
          left: -20%;
          width: 20%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--kb-gold), transparent);
          animation: kbCurrent 5s linear infinite;
        }
        @keyframes kbCurrent {
          0% { left: -20%; }
          100% { left: 100%; }
        }

        .kb-trace-item {
          position: relative;
        }

        .kb-trace-node {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 14px;
          height: 14px;
          transform: translate(-50%, -50%);
          border: 1.5px solid var(--kb-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--kb-black);
          z-index: 2;
        }

        .kb-trace-node-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--kb-gold);
        }

        .kb-trace-stub {
          position: absolute;
          left: 50%;
          width: 2px;
          background: var(--kb-gold);
          transform: translateX(-1px);
          opacity: 0.55;
          transition: opacity .25s ease;
        }

        .kb-trace-card {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 240px;
          padding: 22px 22px 24px;
          background: linear-gradient(160deg, #1a1a1a, #131313);
          border: 1px solid #262626;
          border-radius: 3px;
          transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease;
        }

        .kb-trace-item:hover .kb-trace-card {
          border-color: rgba(200,162,74,.55);
          box-shadow: 0 20px 40px rgba(0,0,0,.4);
        }
        .kb-trace-item:hover .kb-trace-stub { opacity: 1; }
        .kb-trace-item:hover .kb-trace-node { box-shadow: 0 0 12px rgba(200,162,74,.7); }

        .kb-trace-card h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--kb-white);
          margin: 0 0 8px;
          line-height: 1.4;
        }

        .kb-trace-card p {
          font-size: 12.5px;
          line-height: 1.65;
          color: #999;
          font-weight: 300;
          margin: 0;
        }

        /* up variant: card above the line */
        .kb-trace-item--up .kb-trace-stub {
          top: calc(50% - 56px);
          height: 56px;
        }
        .kb-trace-item--up .kb-trace-card {
          bottom: calc(50% + 56px);
        }

        /* down variant: card below the line */
        .kb-trace-item--down .kb-trace-stub {
          top: 50%;
          height: 56px;
        }
        .kb-trace-item--down .kb-trace-card {
          top: calc(50% + 56px);
        }

        /* ===== mobile vertical trace ===== */
        .kb-trace-mobile { display: none; }

        @media (max-width: 900px) {
          .kb-trace { display: none; }
          .kb-trace-mobile {
            display: block;
            position: relative;
            padding-left: 8px;
          }
          .kb-trace-mobile-line {
            position: absolute;
            left: 19px;
            top: 8px;
            bottom: 8px;
            width: 2px;
            background: #2a2a2a;
          }
          .kb-trace-mobile-item {
            position: relative;
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 18px;
            padding-bottom: 40px;
          }
          .kb-trace-mobile-item:last-child { padding-bottom: 0; }

          .kb-trace-mobile-node {
            position: relative;
            z-index: 1;
            width: 14px;
            height: 14px;
            border: 1.5px solid var(--kb-gold);
            border-radius: 50%;
            background: var(--kb-black);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 4px;
          }
          .kb-trace-mobile-node-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--kb-gold);
          }

          .kb-trace-mobile-card {
            background: linear-gradient(160deg, #1a1a1a, #131313);
            border: 1px solid #262626;
            border-radius: 3px;
            padding: 20px 22px;
          }
          .kb-trace-mobile-card h3 {
            font-size: 15.5px;
            font-weight: 600;
            color: var(--kb-white);
            margin: 0 0 8px;
          }
          .kb-trace-mobile-card p {
            font-size: 13px;
            line-height: 1.7;
            color: #999;
            font-weight: 300;
            margin: 0;
          }

          .kb-wpartner-head { margin-bottom: 56px; }
          .kb-wpartner-inner { padding: 90px 32px; }
        }

        @media (max-width: 480px) {
          .kb-wpartner-inner { padding: 70px 20px; }
          .kb-wpartner-title { font-size: 27px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-trace-current { animation: none !important; }
        }
      `}</style>
    </section>
  );
}