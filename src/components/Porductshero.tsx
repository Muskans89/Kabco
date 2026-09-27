/**
 * KABCO — Products Page Hero
 * Place in: src/components/products/ProductsHero.tsx
 *
 * Slim dark breadcrumb banner, same treatment as the About page banner
 * so the site reads as one system. Kept deliberately short — the
 * product blocks below are the visual focus, not this header.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

export default function ProductsHero() {
  return (
    <div className="kb-phero">
      <div className="kb-phero-grid" aria-hidden="true" />
      <div className="kb-phero-inner">
        <nav className="kb-phero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span className="kb-phero-current">Products</span>
        </nav>
        <h1 className="kb-phero-title">Our Products</h1>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
        }

        .kb-phero {
          position: relative;
          background: var(--kb-black);
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        .kb-phero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,162,74,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,162,74,0.06) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 100% at 50% 0%, black 20%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse 70% 100% at 50% 0%, black 20%, transparent 85%);
        }

        .kb-phero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 90px 40px 46px;
          text-align: center;
        }

        .kb-phero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12.5px;
          color: #888;
          margin-bottom: 18px;
        }
        .kb-phero-breadcrumb a {
          color: #888;
          text-decoration: none;
          transition: color .2s ease;
        }
        .kb-phero-breadcrumb a:hover { color: var(--kb-gold); }
        .kb-phero-current { color: var(--kb-gold); }

        .kb-phero-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: clamp(26px, 3.4vw, 34px);
          letter-spacing: 1px;
          color: var(--kb-white);
          margin: 0;
        }

        @media (max-width: 560px) {
          .kb-phero-inner { padding: 84px 24px 36px; }
        }
      `}</style>
    </div>
  );
}