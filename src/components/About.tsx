import { useEffect, useRef, useState } from "react";

/**
 * KABCO — About Preview (Home page)
 * Place in: src/components/home/AboutPreview.tsx
 *
 * A short brand intro that teases the full About page — not the complete
 * story. Two-column layout: copy on the left, a packaging visual on the
 * right (currently a placeholder illustration — swap <PackagingArt />
 * for a real product/packaging photo when available).
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
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export default function AboutPreview() {
  const { ref: leftRef, inView: leftInView } = useInView<HTMLDivElement>();
  const { ref: rightRef, inView: rightInView } = useInView<HTMLDivElement>();

  return (
    <section className="kb-about">
      <div className="kb-about-inner">
        <div
          ref={leftRef}
          className={`kb-about-content${leftInView ? " kb-in-view" : ""}`}
        >
          <span className="kb-about-eyebrow">About KABCO</span>

          <h2 className="kb-about-title">
            Built on Quality.
            <br />
            Driven by Trust.
          </h2>

          <div className="kb-about-rule" />

          <p>
            KABCO is an Indian electrical brand focused on submersible
            starters and cables. We are committed to delivering quality
            products through careful material selection, consistent
            manufacturing standards, and attention to detail.
          </p>

          <p>
            Whether you're an electrician, dealer, contractor, distributor,
            or end user, KABCO aims to provide products you can choose with
            confidence.
          </p>

          <a href="/about" className="kb-btn kb-btn-outline-dark">
            Learn More
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div
          ref={rightRef}
          className={`kb-about-visual${rightInView ? " kb-in-view" : ""}`}
        >
          <div className="kb-about-frame">
            <span className="kb-corner kb-corner-tl" />
            <span className="kb-corner kb-corner-br" />
            <PackagingArt />
          </div>
          <div className="kb-about-badge">
            <span className="kb-about-badge-ring">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <strong>Quality First</strong>
              <span>Every product, every batch</span>
            </div>
          </div>
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

        .kb-about {
          background: var(--kb-bg);
          font-family: 'Poppins', sans-serif;
        }

        .kb-about-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 110px 40px;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 80px;
          align-items: center;
        }

        .kb-about-content {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s ease, transform .8s ease;
        }
        .kb-about-content.kb-in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .kb-about-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 18px;
        }

        .kb-about-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: clamp(26px, 4vw, 40px);
          line-height: 1.28;
          color: var(--kb-black);
          margin: 0 0 26px;
        }

        .kb-about-rule {
          width: 64px;
          height: 2px;
          background: var(--kb-gold);
          margin-bottom: 30px;
        }

        .kb-about-content p {
          font-size: 15.5px;
          line-height: 1.85;
          color: var(--kb-text);
          font-weight: 300;
          max-width: 540px;
          margin: 0 0 20px;
        }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 30px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease, border-color .25s ease;
          margin-top: 14px;
        }

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
        .kb-btn-outline-dark svg { transition: transform .25s ease; }
        .kb-btn-outline-dark:hover svg { transform: translateX(3px); }

        /* ---- visual side ---- */
        .kb-about-visual {
          position: relative;
          width: 100%;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s ease .15s, transform .8s ease .15s;
        }
        .kb-about-visual.kb-in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .kb-about-frame {
          position: relative;
          padding: 26px;
        }

        .kb-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 1.5px solid var(--kb-gold);
        }
        .kb-corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
        .kb-corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }

        .kb-about-badge {
          position: absolute;
          left: -16px;
          bottom: -16px;
          background: var(--kb-white);
          border: 1px solid var(--kb-border);
          border-radius: 3px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 18px 40px rgba(17,17,17,.12);
          max-width: calc(100% - 20px);
        }

        .kb-about-badge-ring {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid var(--kb-gold);
          color: var(--kb-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .kb-about-badge strong {
          display: block;
          font-size: 13px;
          color: var(--kb-black);
          font-weight: 600;
        }
        .kb-about-badge span {
          font-size: 11px;
          color: #888;
        }

        /* ---- large tablet / small desktop ---- */
        @media (max-width: 1100px) {
          .kb-about-inner {
            gap: 56px;
            padding: 100px 32px;
          }
        }

        /* ---- tablet: stack columns ---- */
        @media (max-width: 900px) {
          .kb-about-inner {
            grid-template-columns: 1fr;
            padding: 80px 32px;
            gap: 52px;
          }
          .kb-about-content { text-align: center; }
          .kb-about-eyebrow, .kb-about-rule { margin-left: auto; margin-right: auto; }
          .kb-about-content p { max-width: 560px; margin-left: auto; margin-right: auto; }
          .kb-about-visual { max-width: 420px; margin: 0 auto; }
          .kb-about-badge {
            position: static;
            margin: 22px auto 0;
            width: fit-content;
            max-width: 100%;
          }
        }

        /* ---- mobile ---- */
        @media (max-width: 560px) {
          .kb-about-inner { padding: 60px 20px; gap: 40px; }
          .kb-about-title { margin-bottom: 20px; }
          .kb-about-rule { margin-bottom: 22px; }
          .kb-about-content p { font-size: 14.5px; line-height: 1.75; margin-bottom: 16px; }
          .kb-about-frame { padding: 16px; }
          .kb-corner { width: 22px; height: 22px; }
          .kb-btn { width: 100%; margin-top: 10px; }
          .kb-about-badge {
            width: 100%;
            padding: 14px 16px;
          }
        }

        /* ---- very small phones ---- */
        @media (max-width: 360px) {
          .kb-about-inner { padding: 48px 16px; }
          .kb-about-visual { max-width: 100%; }
          .kb-about-badge {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            text-align: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-about-content, .kb-about-visual {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/**
 * Placeholder packaging illustration. Swap for a real product/packaging
 * photo — e.g. <img src="/assets/images/kabco-packaging.jpg" alt="KABCO
 * submersible pump starter packaging" /> — once photography is ready.
 */
function PackagingArt() {
  return (
    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect x="0" y="0" width="480" height="480" fill="#151515" />

      {/* box - front face */}
      <polygon points="90,180 300,150 300,380 90,410" fill="#1c1c1c" stroke="#3a3a3a" strokeWidth="1" />
      {/* box - side face */}
      <polygon points="300,150 400,190 400,400 300,380" fill="#0e0e0e" stroke="#3a3a3a" strokeWidth="1" />
      {/* box - top face */}
      <polygon points="90,180 190,140 400,190 300,150" fill="#242424" stroke="#3a3a3a" strokeWidth="1" />

      {/* gold ribbon */}
      <polygon points="170,150 210,145 210,415 170,405" fill="#C8A24A" opacity="0.9" />
      <polygon points="170,150 400,196 400,206 170,160" fill="#C8A24A" opacity="0.55" />

      {/* KABCO wordmark on front */}
      <text x="130" y="270" fill="#C8A24A" fontFamily="Cinzel, serif" fontSize="26" fontWeight="700" letterSpacing="2">
        KABCO
      </text>
      <line x1="130" y1="282" x2="270" y2="278" stroke="#C8A24A" strokeWidth="1" opacity="0.6" />
      <text x="130" y="304" fill="#999" fontFamily="Poppins, sans-serif" fontSize="10.5" letterSpacing="1.5">
        SUBMERSIBLE PUMP STARTER
      </text>

      {/* quality seal */}
      <circle cx="250" cy="340" r="30" fill="none" stroke="#C8A24A" strokeWidth="1.5" />
      <circle cx="250" cy="340" r="24" fill="none" stroke="#C8A24A" strokeWidth="1" opacity="0.5" />
      <text x="250" y="336" textAnchor="middle" fill="#C8A24A" fontFamily="Poppins, sans-serif" fontSize="8" letterSpacing="1">QUALITY</text>
      <text x="250" y="348" textAnchor="middle" fill="#C8A24A" fontFamily="Poppins, sans-serif" fontSize="8" letterSpacing="1">ASSURED</text>

      {/* soft ground shadow */}
      <ellipse cx="245" cy="430" rx="160" ry="16" fill="#000000" opacity="0.35" />
    </svg>
  );
}
