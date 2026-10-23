import React, { useMemo } from 'react';

export function AmbientAtmosphere({ themeId }) {
  // Precompute particle parameters: slightly more frequent, slightly more noticeable (2.0px to 3.5px, opacity 0.35-0.65)
  const particles = useMemo(() => {
    return Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      left: `${((i * 3.8 + 2) % 94).toFixed(1)}%`,
      duration: `${(6.5 + (i % 6) * 1.8).toFixed(1)}s`,
      delay: `${((i % 10) * 0.7).toFixed(1)}s`,
      opacity: (0.35 + (i % 4) * 0.1).toFixed(2),
      size: (2.0 + (i % 3) * 0.7).toFixed(1) // 2.0px to 3.4px
    }));
  }, []);

  // 3 small elegant bats for Halloween (gliding gracefully at different intervals)
  const bats = useMemo(() => {
    return [
      { id: 0, topStart: '10%', duration: '11s', delay: '0s', opacity: 0.55 },
      { id: 1, topStart: '28%', duration: '14s', delay: '3.8s', opacity: 0.45 },
      { id: 2, topStart: '18%', duration: '12.5s', delay: '7.5s', opacity: 0.5 }
    ];
  }, []);

  // 1. HALLOWEEN: Atmospheric glowing embers & elegant small gliding bats
  if (themeId === 'halloween') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes emberFallNoticeable {
            0% { transform: translateY(-12px) translateX(0); opacity: 0; }
            15% { opacity: var(--op); }
            85% { opacity: var(--op); }
            100% { transform: translateY(105vh) translateX(14px); opacity: 0; }
          }
          @keyframes batGlideSmooth {
            0% {
              transform: translate(-30px, 0) scale(0.85);
              opacity: 0;
            }
            15% { opacity: var(--bat-op); }
            50% { transform: translate(50vw, 15vh) scale(0.95); }
            85% { opacity: var(--bat-op); }
            100% {
              transform: translate(108vw, 30vh) scale(0.85);
              opacity: 0;
            }
          }
        `}</style>

        {/* Visible, warm glowing amber sparks/embers */}
        {particles.slice(0, 20).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.6)]"
            style={{
              '--op': p.opacity,
              top: '-12px',
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `emberFallNoticeable ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}

        {/* 3 Small Sleek Gliding Bats */}
        {bats.map((b) => (
          <div
            key={b.id}
            className="absolute text-neutral-300"
            style={{
              '--bat-op': b.opacity,
              top: b.topStart,
              left: '-30px',
              animation: `batGlideSmooth ${b.duration} linear infinite`,
              animationDelay: b.delay
            }}
          >
            <svg
              className="w-4 h-3 filter drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]"
              viewBox="0 0 24 16"
              fill="currentColor"
            >
              <path d="M12 5 C10 1, 6 0, 1 3 C2 7, 5 9, 8 8 C9 11, 11 11, 12 10 C13 11, 15 11, 16 8 C19 9, 22 7, 23 3 C18 0, 14 1, 12 5 Z" />
            </svg>
          </div>
        ))}
      </div>
    );
  }

  // 2. NEW YEAR & WINTER: Crisp, noticeable snowflakes falling smoothly
  if (themeId === 'newyear') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes snowfallNoticeable {
            0% { transform: translateY(-12px) translateX(0); opacity: 0; }
            15% { opacity: var(--snow-op); }
            85% { opacity: var(--snow-op); }
            100% { transform: translateY(105vh) translateX(10px); opacity: 0; }
          }
        `}</style>
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.85)]"
            style={{
              '--snow-op': p.opacity,
              top: '-12px',
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `snowfallNoticeable ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 3. SUMMER: Distinct, elegant volumetric sunbeam lines & shafts streaming from top-right corner
  if (themeId === 'summer') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes sunraySweep {
            0% {
              transform: rotate(-4deg) scaleY(0.96);
              opacity: 0.45;
            }
            50% {
              transform: rotate(4deg) scaleY(1.04);
              opacity: 0.8;
            }
            100% {
              transform: rotate(-4deg) scaleY(0.96);
              opacity: 0.45;
            }
          }
        `}</style>

        {/* Distinct Diagonal Sunlight Rays (Visible Lines & Volumetric Shafts) */}
        <svg
          className="absolute -top-12 -right-12 w-[130vw] sm:w-[90vw] h-[115vh] origin-top-right filter drop-shadow-[0_0_10px_rgba(251,191,36,0.35)]"
          style={{ animation: 'sunraySweep 18s ease-in-out infinite' }}
          viewBox="0 0 500 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rayGradMain" x1="500" y1="0" x2="0" y2="700" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#fbbf24" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGradThin" x1="500" y1="0" x2="0" y2="700" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#fef08a" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Ray Shaft 1: Broad warm light beam */}
          <polygon points="500,0 470,0 120,700 170,700" fill="url(#rayGradMain)" opacity="0.7" />

          {/* Ray Line 2: Crisp distinct sunlight line */}
          <line x1="500" y1="0" x2="220" y2="700" stroke="url(#rayGradThin)" strokeWidth="4" opacity="0.8" />

          {/* Ray Shaft 3: Medium diagonal beam */}
          <polygon points="500,0 490,0 260,700 290,700" fill="url(#rayGradMain)" opacity="0.85" />

          {/* Ray Line 4: Delicate piercing sunbeam line */}
          <line x1="500" y1="0" x2="340" y2="700" stroke="url(#rayGradThin)" strokeWidth="3.5" opacity="0.8" />

          {/* Ray Shaft 5: Soft ambient side ray */}
          <polygon points="500,0 500,40 370,700 410,700" fill="url(#rayGradMain)" opacity="0.65" />

          {/* Ray Line 6: High angle sharp beam */}
          <line x1="500" y1="0" x2="80" y2="700" stroke="url(#rayGradThin)" strokeWidth="2.5" opacity="0.65" />

          {/* Glowing origin flare at top right corner */}
          <circle cx="500" cy="0" r="70" fill="url(#rayGradMain)" opacity="0.6" filter="blur(6px)" />
        </svg>
      </div>
    );
  }

  // 4. EASTER: Soft spring blossom petals
  if (themeId === 'easter') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes easterPollenNoticeable {
            0% { transform: translateY(-12px) translateX(0) rotate(0deg); opacity: 0; }
            15% { opacity: 0.55; }
            85% { opacity: 0.55; }
            100% { transform: translateY(105vh) translateX(15px) rotate(180deg); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 20).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-amber-200/60 shadow-[0_0_4px_rgba(253,230,138,0.5)]"
            style={{
              top: '-12px',
              left: p.left,
              width: `${p.size}px`,
              height: `${(Number(p.size) * 1.3).toFixed(1)}px`,
              animation: `easterPollenNoticeable ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 5. VALENTINE: Subtle crimson rose petal flakes
  if (themeId === 'valentines') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes rosePetalNoticeable {
            0% { transform: translateY(-12px) translateX(0) rotate(0deg); opacity: 0; }
            15% { opacity: 0.6; }
            85% { opacity: 0.6; }
            100% { transform: translateY(105vh) translateX(16px) rotate(220deg); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 20).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-rose-500/60 shadow-[0_0_5px_rgba(244,63,94,0.4)]"
            style={{
              top: '-12px',
              left: p.left,
              width: `${(Number(p.size) * 1.2).toFixed(1)}px`,
              height: `${(Number(p.size) * 1.5).toFixed(1)}px`,
              animation: `rosePetalNoticeable ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}
