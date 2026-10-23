import React, { useMemo } from 'react';

export function AmbientAtmosphere({ themeId }) {
  // Precompute random particle parameters once
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${((i * 5.7 + 3) % 94).toFixed(1)}%`,
      duration: `${(7 + (i % 6) * 2.2).toFixed(1)}s`,
      delay: `${((i % 8) * 0.9).toFixed(1)}s`,
      opacity: (0.4 + (i % 4) * 0.18).toFixed(2),
      size: 4 + (i % 4) * 2
    }));
  }, []);

  // Bats for Halloween
  const bats = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      topStart: `${10 + i * 20}%`,
      duration: `${11 + i * 3}s`,
      delay: `${i * 3.2}s`,
      opacity: (0.45 + i * 0.12).toFixed(2),
      scale: 0.85 + (i % 2) * 0.25
    }));
  }, []);

  // 1. HALLOWEEN: Visible falling glowing orange/amber sparks & swooping bats (NO square spiderweb!)
  if (themeId === 'halloween') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes emberFall {
            0% { transform: translateY(-15px) translateX(0) rotate(0deg); opacity: 0; }
            15% { opacity: var(--op); }
            85% { opacity: var(--op); }
            100% { transform: translateY(105vh) translateX(18px) rotate(180deg); opacity: 0; }
          }
          @keyframes batSwoop {
            0% {
              transform: translate(-40px, -20px) scale(0.8) rotate(-8deg);
              opacity: 0;
            }
            15% { opacity: 0.7; }
            50% {
              transform: translate(50vw, 40vh) scale(1) rotate(6deg);
            }
            85% { opacity: 0.7; }
            100% {
              transform: translate(110vw, 85vh) scale(0.85) rotate(-6deg);
              opacity: 0;
            }
          }
        `}</style>

        {/* Falling Glowing Autumn Embers / Sparks */}
        {particles.slice(0, 14).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
            style={{
              '--op': p.opacity,
              top: '-15px',
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `emberFall ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}

        {/* Swooping Silhouette Bats */}
        {bats.map((b) => (
          <div
            key={b.id}
            className="absolute text-neutral-400"
            style={{
              top: b.topStart,
              left: '-40px',
              animation: `batSwoop ${b.duration} linear infinite`,
              animationDelay: b.delay
            }}
          >
            <svg
              className="w-5 h-3.5 filter drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
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

  // 2. NEW YEAR & CHRISTMAS: Crisp, visible snowflakes falling smoothly
  if (themeId === 'newyear') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes snowfallSmooth {
            0% { transform: translateY(-15px) translateX(0); opacity: 0; }
            10% { opacity: var(--snow-op); }
            90% { opacity: var(--snow-op); }
            100% { transform: translateY(105vh) translateX(12px); opacity: 0; }
          }
        `}</style>
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            style={{
              '--snow-op': p.opacity,
              top: '-15px',
              left: p.left,
              width: `${(2.5 + (p.id % 4) * 1.5).toFixed(1)}px`,
              height: `${(2.5 + (p.id % 4) * 1.5).toFixed(1)}px`,
              animation: `snowfallSmooth ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 3. SUMMER: Expressive Warm Golden Sunbeam Motes & Leaf Petals Falling Down
  if (themeId === 'summer') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes summerSunDrift {
            0% {
              transform: translateY(-20px) translateX(0) rotate(0deg);
              opacity: 0;
            }
            15% { opacity: var(--sun-op); }
            50% { transform: translateY(50vh) translateX(16px) rotate(120deg); }
            85% { opacity: var(--sun-op); }
            100% {
              transform: translateY(105vh) translateX(-10px) rotate(240deg);
              opacity: 0;
            }
          }
        `}</style>
        {/* 16 Noticeable, warm golden sunbeam flecks falling top to bottom */}
        {particles.slice(0, 16).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-500 shadow-[0_0_9px_rgba(251,191,36,0.7)]"
            style={{
              '--sun-op': p.opacity,
              top: '-20px',
              left: p.left,
              width: `${(3.5 + (p.id % 3) * 2).toFixed(1)}px`,
              height: `${(4.5 + (p.id % 3) * 2).toFixed(1)}px`,
              animation: `summerSunDrift ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 4. EASTER: Spring pastel petals drifting smoothly top to bottom
  if (themeId === 'easter') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes easterPetalFall {
            0% { transform: translateY(-15px) translateX(0) rotate(0deg); opacity: 0; }
            15% { opacity: 0.6; }
            85% { opacity: 0.6; }
            100% { transform: translateY(105vh) translateX(20px) rotate(260deg); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 14).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-amber-200/60 shadow-[0_0_5px_rgba(253,230,138,0.5)]"
            style={{
              top: '-15px',
              left: p.left,
              width: '5px',
              height: '7px',
              animation: `easterPetalFall ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 5. VALENTINE: Crimson rose petals drifting gracefully top to bottom
  if (themeId === 'valentines') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes rosePetalFall {
            0% { transform: translateY(-15px) translateX(0) rotate(0deg); opacity: 0; }
            15% { opacity: 0.65; }
            85% { opacity: 0.65; }
            100% { transform: translateY(105vh) translateX(22px) rotate(320deg); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 14).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-rose-500/70 shadow-[0_0_6px_rgba(244,63,94,0.5)]"
            style={{
              top: '-15px',
              left: p.left,
              width: '6px',
              height: '8px',
              animation: `rosePetalFall ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}
