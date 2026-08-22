import { useEffect, useRef, useState } from "react";

/**
 * KABCO — Vision / Mission / Philosophy / Commitment to Quality (Dark)
 * Place in: src/components/about/AboutValues.tsx
 *
 * A unifying eyebrow + title ("Our Guiding Principles") was added purely
 * for visual cohesion since the brief only specified the four individual
 * headings — feel free to remove/rename it.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

const VALUES = [
  {
    num: "01",
    title: "Our Vision",
    icon: (
      <>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),
    paragraphs: [
      "To build KABCO into one of India's most trusted electrical brands by delivering dependable products backed by quality, integrity, and customer confidence.",
    ],
  },
  {
    num: "02",
    title: "Our Mission",
    icon: (
      <>
        <path d="M4 22V4" />
        <path d="M4 4h14l-3 5 3 5H4" />
      </>
    ),
    paragraphs: [
      "To provide electrical products that combine quality craftsmanship, dependable performance, and premium presentation while continuously improving through innovation and customer feedback.",
    ],
  },
  {
    num: "03",
    title: "Our Philosophy",
    icon: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.45 1 1.2 1 2.05V17h6v-.25c0-.85.4-1.6 1-2.05A7 7 0 0 0 12 2Z" />
      </>
    ),
    paragraphs: [
      "At KABCO, we believe quality begins long before a product reaches the customer. Every product is developed with a focus on consistency, reliability, and long-term value, with attention to detail from component selection to final packaging.",
      "Our goal is simple: create products that professionals are confident to recommend and customers are confident to buy.",
    ],
  },
  {
    num: "04",
    title: "Our Commitment to Quality",
    icon: (
      <>
        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    paragraphs: [
      "Quality is an ongoing process at KABCO. Our products are sourced and manufactured with attention to consistency, performance, and durability. Every product undergoes quality checks before reaching the market to help ensure dependable operation.",
      "As technology evolves and customer expectations grow, we remain committed to continuously improving our products.",
    ],
  },
];

export default function AboutValues() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="kb-values">
      <div className="kb-values-grid-bg" aria-hidden="true" />

      <div className="kb-values-inner">
        <div ref={headRef} className={`kb-values-head${headInView ? " kb-in-view" : ""}`}>
          <span className="kb-values-eyebrow">What Drives Us</span>
          <h2 className="kb-values-title">Our Guiding Principles</h2>
          <div className="kb-values-rule" />
        </div>

        <div ref={gridRef} className="kb-values-grid">
          {VALUES.map((item, i) => (
            <div
              key={item.num}
              className={`kb-value-card${gridInView ? " kb-in-view" : ""}`}
              style={{ transitionDelay: gridInView ? `${i * 110}ms` : "0ms" }}
            >
              <span className="kb-value-num">{item.num}</span>

              <div className="kb-value-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>

              <h3>{item.title}</h3>
              <div className="kb-value-underline" />

              {item.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
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

        .kb-values {
          position: relative;
          background: var(--kb-black);
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .kb-values-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,162,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,162,74,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 80%);
        }

        .kb-values-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        .kb-values-head {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 60px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .8s ease, transform .8s ease;
        }
        .kb-values-head.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-values-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-values-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 34px;
          color: var(--kb-white);
          margin: 0 0 20px;
        }

        .kb-values-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto;
        }

        .kb-values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .kb-value-card {
          position: relative;
          background: linear-gradient(160deg, #1a1a1a, #131313);
          border: 1px solid #262626;
          border-radius: 4px;
          padding: 44px 40px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity .6s ease, transform .6s ease, border-color .3s ease, box-shadow .3s ease, background .3s ease;
        }
        .kb-value-card.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-value-card:hover {
          border-color: rgba(200,162,74,.5);
          background: linear-gradient(160deg, #1f1c15, #151310);
          box-shadow: 0 24px 50px rgba(0,0,0,.4);
        }

        .kb-value-num {
          position: absolute;
          top: -6px;
          right: 16px;
          font-family: 'Cinzel', serif;
          font-size: 90px;
          font-weight: 700;
          line-height: 1;
          color: rgba(255,255,255,0.035);
          pointer-events: none;
          user-select: none;
        }

        .kb-value-icon {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1.5px solid rgba(200,162,74,.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--kb-gold);
          margin-bottom: 24px;
          background: rgba(200,162,74,0.04);
          transition: background .25s ease, color .25s ease, transform .25s ease, border-color .25s ease;
        }
        .kb-value-card:hover .kb-value-icon {
          background: var(--kb-gold);
          color: var(--kb-black);
          border-color: var(--kb-gold);
          transform: translateY(-3px);
        }

        .kb-value-card h3 {
          position: relative;
          font-family: 'Poppins', sans-serif;
          font-size: 19px;
          font-weight: 600;
          color: var(--kb-white);
          margin: 0 0 12px;
        }

        .kb-value-underline {
          width: 34px;
          height: 2px;
          background: var(--kb-gold);
          margin-bottom: 18px;
        }

        .kb-value-card p {
          position: relative;
          font-size: 14.5px;
          line-height: 1.8;
          color: #999;
          font-weight: 300;
          margin: 0 0 14px;
        }
        .kb-value-card p:last-child { margin-bottom: 0; }

        @media (max-width: 900px) {
          .kb-values-grid { grid-template-columns: 1fr; }
          .kb-values-inner { padding: 90px 32px; }
        }

        @media (max-width: 560px) {
          .kb-values-inner { padding: 70px 20px; }
          .kb-values-title { font-size: 27px; }
          .kb-value-card { padding: 34px 26px; }
          .kb-value-num { font-size: 70px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-values-head, .kb-value-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}