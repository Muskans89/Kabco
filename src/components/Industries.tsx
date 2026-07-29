import { useEffect, useRef, useState } from "react";

/**
 * KABCO — "Industries We Serve" Section
 * Place in: src/components/home/Industries.tsx
 *
 * Dark section (deliberate rhythm break from the light sections above/
 * below) with elegant icon cards standing in for the "large image, dark
 * overlay, white title" treatment from the brief — since real industry
 * photography isn't available yet. Swap the icon + card background for
 * a photo (with a dark overlay div) per card once photography is ready.
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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

const INDUSTRIES = [
  {
    label: "Agriculture",
    icon: (
      <>
        <path d="M12 22v-9" />
        <path d="M12 13c0-4 -3-6-7-6 0 4 3 6 7 6Z" />
        <path d="M12 13c0-5 3-8 8-8 0 5-3 8-8 8Z" />
      </>
    ),
  },
  {
    label: "Residential",
    icon: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
  },
  {
    label: "Commercial",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" />
      </>
    ),
  },
  {
    label: "Industrial",
    icon: (
      <>
        <path d="M3 21V10l6 4v-4l6 4V7l6 4v10H3Z" />
        <path d="M7 21v-4M12 21v-4M17 21v-4" />
      </>
    ),
  },
  {
    label: "Water Supply Systems",
    icon: (
      <path d="M12 2c4 5.5 7 9.3 7 13a7 7 0 1 1-14 0c0-3.7 3-7.5 7-13Z" />
    ),
  },
  {
    label: "Pump Installations",
    icon: (
      <>
        <circle cx="11" cy="13" r="7" />
        <path d="M11 9v4l3 2" />
        <path d="M19 8l2.5-2.5M19 8h3.2M19 8V4.8" />
      </>
    ),
  },
];

export default function Industries() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="kb-industries">
      <div className="kb-industries-grid-bg" aria-hidden="true" />

      <div className="kb-industries-inner">
        <div
          ref={headRef}
          className={`kb-industries-head${headInView ? " kb-in-view" : ""}`}
        >
          <span className="kb-industries-eyebrow">Industries We Serve</span>
          <h2 className="kb-industries-title">Supporting Diverse Applications</h2>
          <div className="kb-industries-rule" />
          <p className="kb-industries-sub">
            KABCO products are designed to meet the needs of a wide range of
            sectors where dependable electrical solutions are essential.
          </p>
        </div>

        <div ref={gridRef} className="kb-industries-cards">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.label}
              className={`kb-industry-card${gridInView ? " kb-in-view" : ""}`}
              style={{ transitionDelay: gridInView ? `${i * 80}ms` : "0ms" }}
            >
              <div className="kb-industry-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {industry.icon}
                </svg>
              </div>
              <span className="kb-industry-label">{industry.label}</span>
              <span className="kb-industry-underline" />
            </div>
          ))}
        </div>

        <div className="kb-industries-cta">
          <a href="/contact" className="kb-btn kb-btn-gold-outline">
            Contact Us
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
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

        .kb-industries {
          position: relative;
          background: var(--kb-black);
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .kb-industries-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,162,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,162,74,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 80%);
        }

        .kb-industries-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        .kb-industries-head {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .8s ease, transform .8s ease;
        }
        .kb-industries-head.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-industries-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-industries-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 36px;
          color: var(--kb-white);
          margin: 0 0 20px;
        }

        .kb-industries-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 22px;
        }

        .kb-industries-sub {
          font-size: 15.5px;
          line-height: 1.75;
          color: #999;
          font-weight: 300;
          margin: 0;
        }

        .kb-industries-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .kb-industry-card {
          background: linear-gradient(160deg, #1a1a1a, #131313);
          border: 1px solid #262626;
          border-radius: 3px;
          padding: 44px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .6s ease, transform .6s ease, border-color .3s ease, background .3s ease;
          cursor: default;
        }
        .kb-industry-card.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-industry-card:hover {
          border-color: rgba(200,162,74,.5);
          background: linear-gradient(160deg, #1f1c15, #151310);
        }

        .kb-industry-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1.5px solid rgba(200,162,74,.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--kb-gold);
          transition: border-color .3s ease, transform .3s ease, box-shadow .3s ease;
        }
        .kb-industry-card:hover .kb-industry-icon {
          border-color: var(--kb-gold);
          transform: translateY(-4px);
          box-shadow: 0 0 24px rgba(200,162,74,.25);
        }

        .kb-industry-label {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: .4px;
          color: var(--kb-white);
        }

        .kb-industry-underline {
          width: 0;
          height: 1.5px;
          background: var(--kb-gold);
          transition: width .3s ease;
        }
        .kb-industry-card:hover .kb-industry-underline { width: 30px; }

        .kb-industries-cta {
          display: flex;
          justify-content: center;
          margin-top: 60px;
        }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 34px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease;
        }

        .kb-btn-gold-outline {
          background: transparent;
          color: var(--kb-gold);
          border: 1.5px solid var(--kb-gold);
        }
        .kb-btn-gold-outline:hover {
          background: var(--kb-gold);
          color: var(--kb-black);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(200,162,74,.28);
        }
        .kb-btn-gold-outline svg { transition: transform .25s ease; }
        .kb-btn-gold-outline:hover svg { transform: translateX(3px); }

        @media (max-width: 860px) {
          .kb-industries-cards { grid-template-columns: repeat(2, 1fr); }
          .kb-industries-inner { padding: 90px 32px; }
        }

        @media (max-width: 560px) {
          .kb-industries-cards { grid-template-columns: 1fr; }
          .kb-industries-inner { padding: 70px 22px; }
          .kb-industries-title { font-size: 28px; }
          .kb-industry-card { padding: 36px 24px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-industries-head, .kb-industry-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}