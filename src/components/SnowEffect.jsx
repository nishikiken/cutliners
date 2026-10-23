import React, { useMemo } from 'react';

export function SnowEffect() {
  // Generate random snowflake parameters once
  const snowflakes = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 4.2 + (i % 3) * 2).toFixed(1)}%`,
      size: `${(2 + (i % 3) * 1.5).toFixed(1)}px`,
      duration: `${(7 + (i % 5) * 2).toFixed(1)}s`,
      delay: `${((i % 7) * 1.2).toFixed(1)}s`,
      opacity: (0.2 + (i % 4) * 0.15).toFixed(2)
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20 select-none">
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px) translateX(0);
          }
          50% {
            transform: translateY(50vh) translateX(8px);
          }
          100% {
            transform: translateY(105vh) translateX(-8px);
          }
        }
      `}</style>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
          style={{
            top: '-15px',
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration} linear infinite`,
            animationDelay: flake.delay
          }}
        />
      ))}
    </div>
  );
}
