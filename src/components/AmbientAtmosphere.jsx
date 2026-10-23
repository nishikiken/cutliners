import React, { useMemo } from 'react';

export function AmbientAtmosphere({ themeId }) {
  // Precompute delicate, small particle parameters (tiny, subtle, non-intrusive)
  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${((i * 6.1 + 4) % 92).toFixed(1)}%`,
      duration: `${(8 + (i % 5) * 2).toFixed(1)}s`,
      delay: `${((i % 7) * 1.1).toFixed(1)}s`,
      opacity: (0.22 + (i % 4) * 0.1).toFixed(2),
      size: (1.5 + (i % 3) * 0.7).toFixed(1) // 1.5px to 2.9px max!
    }));
  }, []);

  // 3 small elegant bats for Halloween (gliding gracefully at different intervals)
  const bats = useMemo(() => {
    return [
      { id: 0, topStart: '12%', duration: '12s', delay: '0s', opacity: 0.45 },
      { id: 1, topStart: '32%', duration: '15s', delay: '4.5s', opacity: 0.4 },
      { id: 2, topStart: '22%', duration: '13.5s', delay: '9s', opacity: 0.42 }
    ];
  }, []);

  // 1. HALLOWEEN: Delicate tiny embers & elegant small gliding bats (no big orange balls!)
  if (themeId === 'halloween') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes emberFallSubtle {
            0% { transform: translateY(-10px) translateX(0); opacity: 0; }
            20% { opacity: var(--op); }
            80% { opacity: var(--op); }
            100% { transform: translateY(105vh) translateX(10px); opacity: 0; }
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

        {/* Tiny Subtle Dark-Amber Micro-Sparks */}
        {particles.slice(0, 12).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-orange-400 shadow-[0_0_4px_rgba(251,146,60,0.4)]"
            style={{
              '--op': p.opacity,
              top: '-10px',
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `emberFallSubtle ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}

        {/* 3 Small Sleek Gliding Bats */}
        {bats.map((b) => (
          <div
            key={b.id}
            className="absolute text-neutral-400"
            style={{
              '--bat-op': b.opacity,
              top: b.topStart,
              left: '-30px',
              animation: `batGlideSmooth ${b.duration} linear infinite`,
              animationDelay: b.delay
            }}
          >
            <svg
              className="w-3.5 h-2.5 filter drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]"
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

  // 2. NEW YEAR & WINTER: Tiny, delicate, non-intrusive constant falling snow
  if (themeId === 'newyear') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes delicateSnowfall {
            0% { transform: translateY(-10px) translateX(0); opacity: 0; }
            15% { opacity: var(--snow-op); }
            85% { opacity: var(--snow-op); }
            100% { transform: translateY(105vh) translateX(8px); opacity: 0; }
          }
        `}</style>
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_3px_rgba(255,255,255,0.7)]"
            style={{
              '--snow-op': p.opacity,
              top: '-10px',
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `delicateSnowfall ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 3. SUMMER: Delicate warm sunlit dust motes falling softly
  if (themeId === 'summer') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes summerMoteDrift {
            0% { transform: translateY(-10px) translateX(0); opacity: 0; }
            20% { opacity: var(--sun-op); }
            80% { opacity: var(--sun-op); }
            100% { transform: translateY(105vh) translateX(10px); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 12).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-amber-300 shadow-[0_0_3px_rgba(252,211,77,0.4)]"
            style={{
              '--sun-op': p.opacity,
              top: '-10px',
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `summerMoteDrift ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 4. EASTER: Soft spring pastel micro-petals
  if (themeId === 'easter') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes easterPollenDrift {
            0% { transform: translateY(-10px) translateX(0); opacity: 0; }
            20% { opacity: 0.35; }
            80% { opacity: 0.35; }
            100% { transform: translateY(105vh) translateX(12px); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 12).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-amber-200/50"
            style={{
              top: '-10px',
              left: p.left,
              width: `${p.size}px`,
              height: `${(Number(p.size) * 1.3).toFixed(1)}px`,
              animation: `easterPollenDrift ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 5. VALENTINE: Tiny subtle crimson petal flakes
  if (themeId === 'valentines') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes rosePetalDrift {
            0% { transform: translateY(-10px) translateX(0) rotate(0deg); opacity: 0; }
            20% { opacity: 0.4; }
            80% { opacity: 0.4; }
            100% { transform: translateY(105vh) translateX(12px) rotate(180deg); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 12).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-rose-500/50"
            style={{
              top: '-10px',
              left: p.left,
              width: `${(Number(p.size) * 1.2).toFixed(1)}px`,
              height: `${(Number(p.size) * 1.5).toFixed(1)}px`,
              animation: `rosePetalDrift ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}
