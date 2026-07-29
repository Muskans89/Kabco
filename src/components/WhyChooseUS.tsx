import { useEffect, useRef, useState } from "react";

/**
 * KABCO — "Why Choose KABCO" Section
 * Place in: src/components/home/WhyChooseKabco.tsx
 *
 * Icon cards (per brief: "Instead of feature cards, use icon cards").
 * Cards fade/slide up on scroll with a slight stagger.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

const FEATURES = [
  {
    title: "Premium Quality",
    desc: "Manufactured using carefully selected materials and consistent quality standards.",
    icon: (
      <path d="M12 2 3 8l9 14 9-14-9-6Zm0 0 4 6H8l4-6ZM3 8h18M8 8l4 14M16 8l-4 14" />
    ),
  },
  {
    title: "Reliable Performance",
    desc: "Designed to deliver dependable operation in everyday working conditions.",
    icon: (
      <>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 12 16 8" />
        <path d="M12 17v.01" />
      </>
    ),
  },
  {
    title: "Safety Focused",
    desc: "Built with safety and reliability as important priorities.",
    icon: (
      <>
        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Premium Packaging",
    desc: "Thoughtfully designed packaging that protects the product while reflecting the quality of the brand.",
    icon: (
      <>
        <path d="M21 8v10.5a1 1 0 0 1-.5.87l-8 4.5a1 1 0 0 1-1 0l-8-4.5A1 1 0 0 1 3 18.5V8" />
        <path d="m3 8 9-5 9 5-9 5-9-5Z" />
        <path d="M12 13v9" />
      </>
    ),
  },
  {
    title: "Consistent Quality",
    desc: "Every product is developed with attention to detail to maintain dependable performance and customer confidence.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  },
  {
    title: "Dealer Friendly",
    desc: "Professional branding, attractive packaging, and dependable product presentation.",
    icon: (
      <>
        <path d="M8.5 14.5 4 10l3-3 3.5 3.5" />
        <path d="m15.5 14.5 4.5-4.5-3-3-3.5 3.5" />
        <path d="M8.5 14.5c1 1.5 2.2 2.5 3.5 2.5s2.5-1 3.5-2.5" />
        <path d="m10.5 12.5 3 3" />
      </>
    ),
  },
];

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

export default function WhyChooseKabco() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="kb-why">
      <div className="kb-why-inner">
        <div
          ref={headRef}
          className={`kb-why-head${headInView ? " kb-in-view" : ""}`}
        >
          <span className="kb-why-eyebrow">What Sets Us Apart</span>
          <h2 className="kb-why-title">Why Choose KABCO</h2>
          <div className="kb-why-rule" />
          <p className="kb-why-subtitle">
            Discover what makes KABCO a trusted choice for submersible
            starters and cables.
          </p>
        </div>

        <div ref={gridRef} className="kb-why-grid">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`kb-why-card${gridInView ? " kb-in-view" : ""}`}
              style={{ transitionDelay: gridInView ? `${i * 90}ms` : "0ms" }}
            >
              <div className="kb-why-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
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

        .kb-why {
          background: var(--kb-white);
          font-family: 'Poppins', sans-serif;
        }

        .kb-why-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        .kb-why-head {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .8s ease, transform .8s ease;
        }
        .kb-why-head.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-why-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-why-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 36px;
          color: var(--kb-black);
          margin: 0 0 20px;
        }

        .kb-why-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 22px;
        }

        .kb-why-subtitle {
          font-size: 15.5px;
          line-height: 1.7;
          color: #777;
          font-weight: 300;
          margin: 0;
        }

        .kb-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--kb-border);
          border: 1px solid var(--kb-border);
        }

        .kb-why-card {
          background: var(--kb-white);
          padding: 46px 38px;
          opacity: 0;
          transform: translateY(26px);
          transition: opacity .6s ease, transform .6s ease, background .25s ease;
        }
        .kb-why-card.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-why-card:hover {
          background: #FDFBF6;
        }

        .kb-why-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 1.5px solid var(--kb-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--kb-gold);
          margin-bottom: 24px;
          transition: background .25s ease, color .25s ease, transform .25s ease;
        }

        .kb-why-card:hover .kb-why-icon {
          background: var(--kb-gold);
          color: var(--kb-black);
          transform: translateY(-3px);
        }

        .kb-why-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: .2px;
          color: var(--kb-black);
          margin: 0 0 12px;
        }

        .kb-why-card p {
          font-size: 14px;
          line-height: 1.75;
          color: #777;
          font-weight: 300;
          margin: 0;
        }

        @media (max-width: 900px) {
          .kb-why-grid { grid-template-columns: repeat(2, 1fr); }
          .kb-why-inner { padding: 90px 32px; }
        }

        @media (max-width: 560px) {
          .kb-why-grid { grid-template-columns: 1fr; }
          .kb-why-inner { padding: 70px 22px; }
          .kb-why-title { font-size: 28px; }
          .kb-why-card { padding: 38px 28px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-why-head, .kb-why-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}