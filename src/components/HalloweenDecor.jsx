import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ReesesTransparent, SpookyCatTransparent, PumpkinTransparent } from './ThemeIcons';

export function HalloweenDecor() {
  const [catSpeech, setCatSpeech] = useState(false);
  const [candyReact, setCandyReact] = useState(false);

  const handleCatTap = () => {
    setCatSpeech(true);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.15, x: 0.85 },
      colors: ['#ff7700', '#a855f7', '#222222']
    });
    setTimeout(() => setCatSpeech(false), 2000);
  };

  const handleCandyTap = () => {
    setCandyReact(true);
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.15, x: 0.15 },
      colors: ['#ff6600', '#f59e0b', '#3e1f0e']
    });
    setTimeout(() => setCandyReact(false), 1800);
  };

  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none">
      
      {/* Spiderweb subtle accent in top right */}
      <svg
        className="absolute -top-3 -right-3 w-16 h-16 opacity-25 text-neutral-400"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 0 L100 100 M0 0 L40 100 M0 0 L100 40" opacity="0.6" />
        <path d="M30 0 Q 30 30 0 30" stroke="currentColor" fill="none" />
        <path d="M60 0 Q 60 60 0 60" stroke="currentColor" fill="none" />
        <path d="M90 0 Q 90 90 0 90" stroke="currentColor" fill="none" />
        <line x1="80" y1="40" x2="80" y2="65" stroke="#a855f7" strokeWidth="0.8" />
        <circle cx="80" cy="67" r="2.5" fill="#a855f7" />
      </svg>

      {/* Workshop Ambiance Shelf with 100% Transparent Icons (Reese's, Pumpkin, Cat) */}
      <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between">
        
        {/* Left: Reese's Peanut Butter Cup with 100% Transparent Background */}
        <div
          onClick={handleCandyTap}
          className="pointer-events-auto cursor-pointer group flex items-center gap-2 active:scale-95 transition-transform"
          title="Reese's Peanut Butter Cup — нажми на сладость!"
        >
          <div className="relative">
            {candyReact && (
              <span className="absolute -top-6 left-0 text-[10px] font-mono text-amber-300 font-bold bg-neutral-900/90 border border-amber-500/30 px-2 py-0.5 rounded-full shadow-lg animate-bounce whitespace-nowrap z-30">
                Reese's 🍫
              </span>
            )}
            <div className="group-hover:scale-110 transition-transform duration-200">
              <ReesesTransparent className="w-12 h-8" />
            </div>
          </div>
          <span className="text-[9px] font-mono text-neutral-400 group-hover:text-amber-400 transition-colors hidden xs:inline">
            Reese's
          </span>
        </div>

        {/* Center: Small Glowing Jack-o'-Lantern with 100% Transparent Background */}
        <div className="flex items-center gap-1.5 opacity-70">
          <PumpkinTransparent className="w-5 h-5 animate-pulse" />
          <span className="text-[9px] font-mono text-neutral-500 tracking-wider">
            ATELIER SPOT
          </span>
        </div>

        {/* Right: Spooked Cat with 100% Transparent Background */}
        <div
          onClick={handleCatTap}
          className="pointer-events-auto cursor-pointer group flex items-center gap-1.5 active:scale-95 transition-transform"
          title="Кот мастерской — нажми на кота!"
        >
          <span className="text-[9px] font-mono text-neutral-400 group-hover:text-purple-300 transition-colors hidden xs:inline">
            Кот
          </span>
          <div className="relative">
            {catSpeech && (
              <span className="absolute -top-6 right-0 text-[10px] font-mono text-orange-300 font-bold bg-neutral-900/90 border border-orange-500/30 px-2 py-0.5 rounded-full shadow-lg animate-bounce whitespace-nowrap z-30">
                Ш-ш-ш! 🐾
              </span>
            )}
            <div className="group-hover:scale-110 transition-transform duration-200">
              <SpookyCatTransparent className="w-8 h-10" />
            </div>
          </div>
        </div>

      </div>

      {/* Subtle hairline shelf separator */}
      <div className="max-w-md mx-auto px-4">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

    </div>
  );
}
