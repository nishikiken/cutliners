import React from 'react';
import { ReesesTransparent, SpookyCatTransparent } from './ThemeIcons';

export function HalloweenDecor() {
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

      {/* Workshop Ambiance Shelf with 100% Transparent Icons (Reese's & Cat, NO confetti!) */}
      <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between opacity-85">
        
        {/* Left: Reese's Peanut Butter Cup with 100% Transparent Background */}
        <div className="flex items-center gap-1.5" title="Reese's Peanut Butter Cup">
          <ReesesTransparent className="w-11 h-7" />
          <span className="text-[9px] font-mono text-neutral-500 hidden xs:inline">
            Reese's
          </span>
        </div>

        {/* Center: Clean Atelier Spot Tag */}
        <div className="text-[9px] font-mono text-neutral-500 tracking-wider">
          ATELIER SPOT
        </div>

        {/* Right: Spooked Cat with 100% Transparent Background */}
        <div className="flex items-center gap-1.5" title="Кот мастерской">
          <span className="text-[9px] font-mono text-neutral-500 hidden xs:inline">
            Кот
          </span>
          <SpookyCatTransparent className="w-8 h-9" />
        </div>

      </div>

      {/* Subtle hairline shelf separator */}
      <div className="max-w-md mx-auto px-4">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

    </div>
  );
}
