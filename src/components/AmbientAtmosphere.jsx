import React, { useMemo } from 'react';

export function AmbientAtmosphere({ themeId }) {
  // Generate random particles parameters once
  const particles = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7 + (i % 4) * 3).toFixed(1)}%`,
      duration: `${(10 + (i % 5) * 3).toFixed(1)}s`,
      delay: `${((i % 7) * 1.5).toFixed(1)}s`,
      opacity: (0.2 + (i % 3) * 0.1).toFixed(2),
      size: 10 + (i % 3) * 4
    }));
  }, []);

  // 1. HALLOWEEN: Subtle tiny gliding bats & corner web
  if (themeId === 'halloween') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes batFlight {
            0% {
              transform: translate(-20px, -20px) scale(0.8) rotate(-5deg);
              opacity: 0;
            }
            15% { opacity: var(--bat-op); }
            50% {
              transform: translate(45vw, 45vh) scale(1) rotate(5deg);
            }
            85% { opacity: var(--bat-op); }
            100% {
              transform: translate(105vw, 95vh) scale(0.9) rotate(-3deg);
              opacity: 0;
            }
          }
        `}</style>

        {/* Delicate spiderweb in corner */}
        <svg
          className="absolute top-0 right-0 w-24 h-24 opacity-25 text-neutral-400"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M0 0 L100 100 M0 0 L40 100 M0 0 L100 40 M0 0 L10 100 M0 0 L100 10" opacity="0.6" />
          <path d="M25 0 Q 25 25 0 25" stroke="currentColor" fill="none" />
          <path d="M50 0 Q 50 50 0 50" stroke="currentColor" fill="none" />
          <path d="M75 0 Q 75 75 0 75" stroke="currentColor" fill="none" />
          <line x1="80" y1="40" x2="80" y2="65" stroke="#a855f7" strokeWidth="0.8" />
          <circle cx="80" cy="67" r="2" fill="#a855f7" />
        </svg>

        {/* 6 Tiny Elegant Silhouette Bats */}
        {particles.slice(0, 6).map((p) => (
          <div
            key={p.id}
            className="absolute"
            style={{
              '--bat-op': p.opacity,
              top: `${(p.id * 12)}%`,
              left: '-20px',
              animation: `batFlight ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          >
            <svg
              className="w-4 h-3 text-neutral-400 opacity-60"
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

  // 2. NEW YEAR & CHRISTMAS: Delicate snowflakes
  if (themeId === 'newyear') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes snowfall {
            0% { transform: translateY(-10px) translateX(0); }
            50% { transform: translateY(50vh) translateX(6px); }
            100% { transform: translateY(105vh) translateX(-6px); }
          }
        `}</style>
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_3px_rgba(255,255,255,0.8)]"
            style={{
              top: '-15px',
              left: p.left,
              width: `${(2 + (p.id % 3)).toFixed(1)}px`,
              height: `${(2 + (p.id % 3)).toFixed(1)}px`,
              opacity: p.opacity,
              animation: `snowfall ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 3. EASTER: Gentle spring willow/blossom petals
  if (themeId === 'easter') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes petalDrift {
            0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
            20% { opacity: 0.3; }
            100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 8).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-amber-200/40"
            style={{
              top: '-10px',
              left: p.left,
              width: '4px',
              height: '6px',
              animation: `petalDrift ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 4. SUMMER: Warm dusk embers
  if (themeId === 'summer') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes emberRise {
            0% { transform: translateY(105vh) scale(0.8); opacity: 0; }
            20% { opacity: 0.35; }
            100% { transform: translateY(-10px) scale(1.1); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 8).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-orange-400/50 shadow-[0_0_4px_rgba(249,115,22,0.6)]"
            style={{
              bottom: '-10px',
              left: p.left,
              width: '3px',
              height: '3px',
              animation: `emberRise ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  // 5. VALENTINE: Subtle dark rose petal drift
  if (themeId === 'valentines') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
        <style>{`
          @keyframes roseFall {
            0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
            20% { opacity: 0.35; }
            100% { transform: translateY(105vh) rotate(220deg); opacity: 0; }
          }
        `}</style>
        {particles.slice(0, 8).map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-rose-500/40"
            style={{
              top: '-10px',
              left: p.left,
              width: '5px',
              height: '6px',
              animation: `roseFall ${p.duration} linear infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}
