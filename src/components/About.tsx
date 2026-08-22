import { useEffect, useRef, useState } from "react";

/**
 * KABCO — About Preview (Home page)
 * Place in: src/components/home/AboutPreview.tsx
 *
 * A short brand intro that teases the full About page — not the complete
 * story. Text-only, centered layout — no image/visual.
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
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="kb-about">
      <div className="kb-about-inner">
        <div ref={ref} className={`kb-about-content${inView ? " kb-in-view" : ""}`}>
          <span className="kb-about-eyebrow">About KABCO</span>

          <h2 className="kb-about-title">
            Built on Quality. Driven by Trust.
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
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
          --kb-bg:#F7F7F7;
          --kb-text:#333333;
        }

        .kb-about {
          background: var(--kb-bg);
          font-family: 'Poppins', sans-serif;
        }

        .kb-about-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 110px 40px;
          text-align: center;
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
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1.3;
          color: var(--kb-black);
          margin: 0 0 26px;
        }

        .kb-about-rule {
          width: 64px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 30px;
        }

        .kb-about-content p {
          font-size: 15.5px;
          line-height: 1.85;
          color: var(--kb-text);
          font-weight: 300;
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
          margin-top: 12px;
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

        @media (max-width: 560px) {
          .kb-about-inner { padding: 70px 22px; }
          .kb-about-content p { font-size: 14.5px; line-height: 1.75; }
          .kb-btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}