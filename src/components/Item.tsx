/**
 * KABCO — Product Showcase (Submersible Starters + Cables)
 * Place in: src/components/products/ProductShowcase.tsx
 *
 * - "View Details" link removed.
 * - Product image sized down at every breakpoint (was filling the full
 *   card half-height, now capped and centered within the visual panel).
 *
 * SETUP:
 * 1. Copy `kabco-starter-panel.jpg` into your project's image assets
 *    folder, e.g. `src/assets/images/kabco-starter-panel.jpg`.
 * 2. Adjust the import path below to match wherever you place it.
 * 3. Cables still use a placeholder illustration (<CableArt />) — swap
 *    for real photography the same way once available.
 *
 * NOTE: copper conductors / FR / FRLS etc. are intentionally left out
 * of the Cables feature list below. Add them under "Cable feature
 * data" only once confirmed as accurate for your actual product spec.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

import starterImage from "../assets/kabco-panel-illustration.svg";

type Product = {
  num: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  visual: "starter" | "cable";
};

const PRODUCTS: Product[] = [
  {
    num: "01",
    eyebrow: "Motor Protection",
    title: "KABCO Submersible Starters",
    description:
      "Dependable motor operation and protection, built for everyday use.",
    features: [
      "Robust construction",
      "Reliable performance",
      "Durable enclosure",
      "User-friendly operation",
      "Premium finish",
      "Professional packaging",
    ],
    visual: "starter",
  },
  {
    num: "02",
    eyebrow: "Electrical Connectivity",
    title: "KABCO Cables",
    description:
      "Safe, dependable connectivity across residential, agricultural, and industrial installations.",
    // Cable feature data — add copper conductor / FR / FRLS etc. here
    // only once confirmed accurate for the real product spec.
    features: [
      "Durable construction",
      "Reliable conductivity",
      "Strong insulation",
      "Flexible installation",
      "Quality finish",
      "Premium packaging",
    ],
    visual: "cable",
  },
];

export default function ProductShowcase() {
  return (
    <section className="kb-pshow">
      <div className="kb-pshow-inner">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.title}
            className={`kb-pshow-card${i % 2 === 1 ? " kb-pshow-card-rev" : ""}`}
          >
            <div className="kb-pshow-visual">
              {product.visual === "starter" ? (
                <img
                  src={starterImage}
                  alt="KABCO Submersible Starter"
                  className="kb-pshow-img"
                />
              ) : (
                <div className="kb-pshow-cable-wrap">
                  <CableArt />
                </div>
              )}
            </div>

            <div className="kb-pshow-content">
              <div className="kb-pshow-tag-row">
                <span className="kb-pshow-index">{product.num}</span>
                <span className="kb-pshow-eyebrow">{product.eyebrow}</span>
              </div>

              <h2 className="kb-pshow-title">{product.title}</h2>
              <p className="kb-pshow-desc">{product.description}</p>

              <ul className="kb-pshow-features">
                {product.features.map((f) => (
                  <li key={f}>
                    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10.5 8 14l8-8" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
          --kb-bg:#F0F0EF;
          --kb-text:#333333;
        }

        .kb-pshow {
          background: var(--kb-bg);
          font-family: 'Poppins', sans-serif;
        }

        .kb-pshow-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .kb-pshow-card {
          background: var(--kb-white);
          border-radius: 6px;
          box-shadow: 0 20px 50px rgba(17,17,17,.07);
          display: grid;
          grid-template-columns: 0.95fr 1fr;
          overflow: hidden;
        }

        .kb-pshow-card-rev { grid-template-columns: 1fr 0.95fr; }
        .kb-pshow-card-rev .kb-pshow-visual { order: 2; }
        .kb-pshow-card-rev .kb-pshow-content { order: 1; }

        /* ---- visual side ---- */
        .kb-pshow-visual {
          position: relative;
          background: #111111;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }

        .kb-pshow-img {
          width: auto;
          max-width: 300px;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
          border-radius: 4px;
          box-shadow: 0 18px 36px rgba(0,0,0,.4);
        }

        .kb-pshow-cable-wrap {
          width: 100%;
          max-width: 400px;
        }

        /* ---- content side ---- */
        .kb-pshow-content {
          padding: 52px 56px;
          display: flex;
          flex-direction: column;
        }

        .kb-pshow-tag-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .kb-pshow-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border: 1px solid var(--kb-gold);
          border-radius: 50%;
          font-family: 'Cinzel', serif;
          font-size: 10.5px;
          font-weight: 700;
          color: var(--kb-gold);
        }

        .kb-pshow-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--kb-gold);
        }

        .kb-pshow-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: clamp(22px, 2.4vw, 28px);
          line-height: 1.25;
          color: var(--kb-black);
          margin: 0 0 14px;
        }

        .kb-pshow-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--kb-text);
          font-weight: 300;
          margin: 0 0 26px;
        }

        .kb-pshow-features {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 18px;
        }

        .kb-pshow-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--kb-black);
        }

        .kb-pshow-features li svg {
          flex-shrink: 0;
          color: var(--kb-gold);
        }

        @media (max-width: 1100px) {
          .kb-pshow-content { padding: 44px 40px; }
        }

        @media (max-width: 860px) {
          .kb-pshow-inner { padding: 60px 24px; gap: 24px; }
          .kb-pshow-card,
          .kb-pshow-card-rev { grid-template-columns: 1fr; }
          .kb-pshow-card-rev .kb-pshow-visual,
          .kb-pshow-card-rev .kb-pshow-content { order: initial; }
          .kb-pshow-visual { min-height: 0; padding: 24px; }
          .kb-pshow-img { max-width: 300px; max-height: 380px; }
          .kb-pshow-cable-wrap { max-width: 480px; }
          .kb-pshow-content { padding: 34px 28px; }
        }

        @media (max-width: 480px) {
          .kb-pshow-inner { padding: 48px 16px; gap: 18px; }
          .kb-pshow-visual { min-height: 0; padding: 20px; }
          .kb-pshow-img { max-width: 300px; max-height: 320px; }
          .kb-pshow-cable-wrap { max-width: 480px; }
          .kb-pshow-content { padding: 28px 22px; }
          .kb-pshow-title { font-size: 20px; margin-bottom: 10px; }
          .kb-pshow-desc { font-size: 13.5px; margin-bottom: 20px; }
          .kb-pshow-features {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .kb-pshow-features li { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}

/** Placeholder illustration — swap for real cable product photography. */
function CableArt() {
  return (
    <svg viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }}>
      <rect width="480" height="420" fill="#151515" />

      {/* coiled cable */}
      <g fill="none" stroke="#C8A24A" strokeWidth="10" strokeLinecap="round" opacity="0.9">
        <path d="M120 300 C120 180, 360 260, 360 150 C360 90, 260 80, 240 140" />
      </g>
      <g fill="none" stroke="#2c2c2c" strokeWidth="10" strokeLinecap="round">
        <path d="M126 306 C126 186, 366 266, 366 156 C366 96, 266 86, 246 146" />
      </g>

      {/* cable cross-section */}
      <circle cx="360" cy="150" r="26" fill="#0d0d0d" stroke="#C8A24A" strokeWidth="1.5" />
      <circle cx="360" cy="150" r="15" fill="#1c1c1c" stroke="#555" strokeWidth="1" />
      <circle cx="352" cy="146" r="4" fill="#C8A24A" />
      <circle cx="368" cy="146" r="4" fill="#C8A24A" />
      <circle cx="360" cy="156" r="4" fill="#C8A24A" />

      {/* exposed end / connector */}
      <rect x="104" y="292" width="34" height="16" rx="2" fill="#0d0d0d" stroke="#555" strokeWidth="1" />
      <line x1="96" y1="300" x2="108" y2="300" stroke="#C8A24A" strokeWidth="3" strokeLinecap="round" />

      {/* KABCO tag */}
      <rect x="205" y="188" width="90" height="24" rx="2" fill="#0d0d0d" stroke="#C8A24A" strokeWidth="1" />
      <text x="250" y="204" textAnchor="middle" fill="#C8A24A" fontFamily="Cinzel, serif" fontSize="11" fontWeight="700" letterSpacing="2">
        KABCO
      </text>

      <ellipse cx="240" cy="374" rx="150" ry="12" fill="#000000" opacity="0.35" />
    </svg>
  );
}