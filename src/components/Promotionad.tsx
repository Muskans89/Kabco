
import printAdImage from "../assets/IMG_3467.jpg";
//import videoAdSrc from "../assets/WhatsApp Video 2026-09-27 at 20.35.25.mp4";

export default function PromotionalAd() {

  return (
    <section className="kb-ad">
      <div className="kb-ad-inner">
        {/* ===== Print ad ===== */}

              {  /* ===== Video ad ===== 
        <div className="kb-ad-block kb-ad-video-block">
          <div className="kb-ad-video-wrap">
            <video
              ref={videoRef}
              className="kb-ad-video"
              src={videoAdSrc}
              autoPlay
              loop
              muted={muted}
              playsInline
              preload="metadata"
            />
            <button
              className="kb-ad-sound-btn"
              onClick={toggleSound}
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>*/}

        <div className="kb-ad-block">
          <img
            src={printAdImage}
            alt="KABCO advertisement — Baat Vishwaas Ki Hai, Isliye Sirf KABCO"
            className="kb-ad-image"
          />
        </div>


      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-white:#FFFFFF;
          --kb-bg:#F7F7F7;
        }

        .kb-ad {
          background: var(--kb-bg);
          font-family: 'Poppins', sans-serif;
        }

        .kb-ad-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .kb-ad-block {
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(17,17,17,.12);
          border: 1px solid rgba(200,162,74,.25);
        }

        .kb-ad-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ---- video ---- */
        .kb-ad-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 848 / 478;
          background: #000;
        }

        .kb-ad-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #000;
        }

        .kb-ad-sound-btn {
          position: absolute;
          right: 14px;
          bottom: 14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(17,17,17,.65);
          border: 1px solid rgba(200,162,74,.5);
          color: var(--kb-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(2px);
          transition: background .2s ease, border-color .2s ease;
        }
        .kb-ad-sound-btn:hover {
          background: var(--kb-gold);
          border-color: var(--kb-gold);
          color: var(--kb-black);
        }

        @media (max-width: 768px) {
          .kb-ad-inner { padding: 44px 20px; gap: 20px; }
          .kb-ad-block { border-radius: 4px; }
        }

        @media (max-width: 480px) {
          .kb-ad-inner { padding: 36px 14px; gap: 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kb-ad-video { display: none; }
          .kb-ad-video-wrap::after {
            content: "Video ad — press play in your browser";
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: #999;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
