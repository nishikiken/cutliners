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

  // 3. SUMMER: Gentle, slow swaying volumetric Sunbeams streaming from the top corner (NO falling particles!)
  if (themeId === 'summer') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes sunbeamSwayLeft {
            0% {
              transform: rotate(-12deg) scaleX(0.9);
              opacity: 0.35;
            }
            50% {
              transform: rotate(8deg) scaleX(1.15);
              opacity: 0.65;
            }
            100% {
              transform: rotate(-12deg) scaleX(0.9);
              opacity: 0.35;
            }
          }
          @keyframes sunbeamSwayRight {
            0% {
              transform: rotate(10deg) scaleX(1.1);
              opacity: 0.55;
            }
            50% {
              transform: rotate(-6deg) scaleX(0.85);
              opacity: 0.3;
            }
            100% {
              transform: rotate(10deg) scaleX(1.1);
              opacity: 0.55;
            }
          }
        `}</style>

        {/* Primary Sunbeam streaming from top-right corner */}
        <div
          className="absolute -top-16 -right-12 w-64 h-[110vh] origin-top-right blur-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(251,191,36,0.22) 0%, rgba(245,158,11,0.12) 35%, rgba(234,88,12,0.03) 70%, transparent 100%)',
            animation: 'sunbeamSwayLeft 16s ease-in-out infinite'
          }}
        />

        {/* Secondary delicate ray */}
        <div
          className="absolute -top-10 -right-24 w-80 h-[95vh] origin-top-right blur-3xl"
          style={{
            background: 'linear-gradient(145deg, rgba(253,224,71,0.28) 0%, rgba(245,158,11,0.08) 40%, transparent 80%)',
            animation: 'sunbeamSwayRight 22s ease-in-out infinite'
          }}
        />

        {/* Tertiary soft ambient beam */}
        <div
          className="absolute -top-20 right-16 w-48 h-[85vh] origin-top blur-xl"
          style={{
            background: 'linear-gradient(160deg, rgba(251,191,36,0.18) 0%, rgba(217,119,6,0.05) 50%, transparent 100%)',
            animation: 'sunbeamSwayLeft 19s ease-in-out infinite',
            animationDelay: '3s'
          }}
        />
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
