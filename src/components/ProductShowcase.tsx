import { useEffect, useRef, useState } from "react";

/**
 * KABCO — "Our Products" / Product Showcase (Home page)
 * Place in: src/components/home/ProductShowcase.tsx
 *
 * Two premium product cards with placeholder line-art visuals — swap
 * <StarterArt /> / <CableArt /> for real product photography whenever
 * it's ready (e.g. <img src="/assets/images/starter-panel.jpg" ... />).
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

const PRODUCTS = [
  {
    title: "Submersible Starters",
    desc: "Control units designed for submersible pump systems, built with attention to quality, safety, and ease of use.",
    href: "/products/starters",
    art: "starter" as const,
  },
  {
    title: "Submersible Cables",
    desc: "Electrical cables designed for submersible pump installations, manufactured with a focus on dependable connectivity and durability.",
    href: "/products/cables",
    art: "cable" as const,
  },
];

export default function ProductShowcase() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="kb-products">
      <div className="kb-products-inner">
        <div ref={headRef} className={`kb-products-head${headInView ? " kb-in-view" : ""}`}>
          <span className="kb-products-eyebrow">Our Products</span>
          <h2 className="kb-products-title">
            Quality Solutions for Submersible Pump Applications
          </h2>
          <div className="kb-products-rule" />
          <p className="kb-products-intro">
            KABCO offers a focused range of premium electrical products
            designed for dependable performance and everyday applications.
            Our product lineup currently includes Submersible Starters and
            Submersible Cables, developed with an emphasis on quality,
            durability, and professional presentation.
          </p>
        </div>

        <span className="kb-products-label">Product Categories</span>

        <div ref={gridRef} className="kb-products-grid">
          {PRODUCTS.map((product, i) => (
            <a
              href={product.href}
              key={product.title}
              className={`kb-product-card${gridInView ? " kb-in-view" : ""}`}
              style={{ transitionDelay: gridInView ? `${i * 120}ms` : "0ms" }}
            >
              <div className="kb-product-media">
                {product.art === "starter" ? <StarterArt /> : <CableArt />}
              </div>
              <div className="kb-product-body">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <span className="kb-product-link">
                  View Details
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="kb-products-cta">
          <a href="/products" className="kb-btn kb-btn-gold">
            Explore Products
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
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
          --kb-bg:#F7F7F7;
          --kb-text:#333333;
          --kb-border:#E6E6E6;
        }

        .kb-products {
          background: var(--kb-bg);
          font-family: 'Poppins', sans-serif;
        }

        .kb-products-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        .kb-products-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 40px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .8s ease, transform .8s ease;
        }
        .kb-products-head.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-products-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-products-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 34px;
          line-height: 1.3;
          color: var(--kb-black);
          margin: 0 0 20px;
        }

        .kb-products-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 22px;
        }

        .kb-products-intro {
          font-size: 15.5px;
          line-height: 1.8;
          color: #777;
          font-weight: 300;
          margin: 0;
        }

        .kb-products-label {
          display: block;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #aaa;
          margin: 0 0 34px;
        }

        .kb-products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .kb-product-card {
          display: block;
          background: var(--kb-white);
          border: 1px solid var(--kb-border);
          text-decoration: none;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity .6s ease, transform .6s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .kb-product-card.kb-in-view { opacity: 1; transform: translateY(0); }

        .kb-product-card:hover {
          box-shadow: 0 24px 50px rgba(17,17,17,.10);
          border-color: transparent;
        }

        .kb-product-media {
          position: relative;
          aspect-ratio: 16 / 11;
          background: #111111;
          overflow: hidden;
        }

        .kb-product-media svg {
          width: 100%;
          height: 100%;
          transition: transform .5s ease;
        }
        .kb-product-card:hover .kb-product-media svg {
          transform: scale(1.06);
        }

        .kb-product-body {
          padding: 32px 34px 36px;
        }

        .kb-product-body h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 19px;
          font-weight: 600;
          color: var(--kb-black);
          margin: 0 0 12px;
        }

        .kb-product-body p {
          font-size: 14px;
          line-height: 1.75;
          color: #777;
          font-weight: 300;
          margin: 0 0 20px;
        }

        .kb-product-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;
          color: var(--kb-gold);
        }
        .kb-product-link svg { transition: transform .25s ease; }
        .kb-product-card:hover .kb-product-link svg { transform: translateX(4px); }

        .kb-products-cta {
          display: flex;
          justify-content: center;
          margin-top: 56px;
        }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
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

        @media (max-width: 860px) {
          .kb-products-grid { grid-template-columns: 1fr; }
          .kb-products-inner { padding: 90px 32px; }
        }

        @media (max-width: 560px) {
          .kb-products-inner { padding: 70px 22px; }
          .kb-products-title { font-size: 26px; }
          .kb-product-body { padding: 26px 24px 30px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-products-head, .kb-product-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function StarterArt() {
  return (
    <svg viewBox="0 0 400 275" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="275" fill="#111111" />
      <rect x="0" y="0" width="400" height="275" fill="url(#sGrid)" opacity="0.5" />
      <defs>
        <pattern id="sGrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="#1e1e1e" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="140" y="45" width="130" height="185" rx="4" fill="#1a1a1a" stroke="#C8A24A" strokeWidth="1.3" />
      <rect x="158" y="64" width="94" height="62" rx="2" fill="none" stroke="#3a3a3a" strokeWidth="1" />
      <text x="205" y="86" textAnchor="middle" fill="#C8A24A" fontFamily="Cinzel, serif" fontSize="12" fontWeight="700" letterSpacing="1.5">KABCO</text>

      <circle cx="178" cy="106" r="4.5" fill="#C8A24A" />
      <circle cx="178" cy="106" r="7.5" fill="none" stroke="#C8A24A" strokeWidth="0.8" opacity="0.5" />
      <circle cx="196" cy="106" r="4.5" fill="#4a4a4a" />
      <circle cx="214" cy="106" r="4.5" fill="#4a4a4a" />

      <circle cx="232" cy="95" r="16" fill="none" stroke="#555" strokeWidth="1.2" />
      <circle cx="232" cy="95" r="16" fill="none" stroke="#C8A24A" strokeWidth="1.2" strokeDasharray="26 76" strokeLinecap="round" transform="rotate(-90 232 95)" />

      <rect x="158" y="138" width="94" height="34" rx="2" fill="none" stroke="#3a3a3a" strokeWidth="1" />
      <rect x="168" y="146" width="12" height="18" rx="1.5" fill="#C8A24A" opacity="0.85" />
      <rect x="188" y="146" width="12" height="18" rx="1.5" fill="#333" stroke="#555" strokeWidth="0.8" />
      <rect x="208" y="146" width="12" height="18" rx="1.5" fill="#C8A24A" opacity="0.85" />

      <line x1="158" y1="188" x2="252" y2="188" stroke="#2a2a2a" strokeWidth="1" />
      <line x1="158" y1="196" x2="252" y2="196" stroke="#2a2a2a" strokeWidth="1" />
      <line x1="158" y1="204" x2="252" y2="204" stroke="#2a2a2a" strokeWidth="1" />
    </svg>
  );
}

function CableArt() {
  return (
    <svg viewBox="0 0 400 275" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="275" fill="#111111" />
      <rect x="0" y="0" width="400" height="275" fill="url(#cGrid)" opacity="0.5" />
      <defs>
        <pattern id="cGrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="#1e1e1e" strokeWidth="1" />
        </pattern>
      </defs>

      {/* coiled cable */}
      <path
        d="M90 220 C 90 150, 170 150, 170 200 C 170 250, 250 250, 250 200 C 250 150, 310 150, 310 210"
        fill="none"
        stroke="#C8A24A"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M90 220 C 90 150, 170 150, 170 200 C 170 250, 250 250, 250 200 C 250 150, 310 150, 310 210"
        fill="none"
        stroke="#111111"
        strokeWidth="4"
        strokeDasharray="2 16"
        strokeLinecap="round"
      />

      {/* connector ends */}
      <rect x="70" y="205" width="24" height="30" rx="3" fill="#222" stroke="#555" strokeWidth="1.3" />
      <rect x="296" y="195" width="24" height="30" rx="3" fill="#222" stroke="#555" strokeWidth="1.3" />

      <text x="200" y="60" textAnchor="middle" fill="#C8A24A" fontFamily="Cinzel, serif" fontSize="14" fontWeight="700" letterSpacing="2">KABCO</text>
      <text x="200" y="80" textAnchor="middle" fill="#888" fontFamily="Poppins, sans-serif" fontSize="9" letterSpacing="2">SUBMERSIBLE CABLE</text>
    </svg>
  );
}