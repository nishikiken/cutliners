import React, { useState } from 'react';
import confetti from 'canvas-confetti';

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
        className="absolute -top-3 -right-3 w-20 h-20 opacity-30 text-neutral-400"
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

      {/* Workshop Ambiance Shelf with Props (Reese's, Pumpkin, Cat) */}
      <div className="relative mx-auto max-w-md px-3 pt-1 pb-2 flex items-center justify-between">
        
        {/* Left: Reese's Peanut Butter Cup resting on the shelf */}
        <div
          onClick={handleCandyTap}
          className="pointer-events-auto cursor-pointer group flex items-center gap-2 active:scale-95 transition-transform"
          title="Reese's Peanut Butter Cup"
        >
          <div className="relative">
            {candyReact && (
              <span className="absolute -top-6 left-0 text-[10px] font-mono text-amber-300 font-bold bg-neutral-900 border border-amber-500/50 px-2 py-0.5 rounded-full shadow-lg animate-bounce whitespace-nowrap z-30">
                Reese's 🍫
              </span>
            )}
            <div className="w-12 h-8 rounded-lg overflow-hidden border border-orange-500/40 shadow-[0_2px_10px_rgba(255,102,0,0.3)] bg-black/60">
              <img
                src="./assets/reeses.jpg"
                alt="Reese's"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div className="hidden xs:flex flex-col">
            <span className="text-[9px] font-mono font-bold text-orange-400 leading-none">Reese's</span>
            <span className="text-[7px] font-mono text-neutral-500 leading-none mt-0.5">treat</span>
          </div>
        </div>

        {/* Center: Small Ambient Jack-o'-Lantern with warm candle glow */}
        <div className="flex items-center gap-1.5 opacity-80">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-amber-500/50 shadow-[0_0_10px_rgba(255,119,0,0.5)]">
            <img
              src="./assets/halloween-pumpkin.jpg"
              alt="Pumpkin"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[9px] font-mono text-amber-400/90 tracking-wider">
            ATELIER SPOT
          </span>
        </div>

        {/* Right: Spooked Cat peeking from the top right shelf */}
        <div
          onClick={handleCatTap}
          className="pointer-events-auto cursor-pointer group flex items-center gap-1.5 active:scale-95 transition-transform"
          title="Кот мастерской"
        >
          <div className="hidden xs:flex flex-col text-right">
            <span className="text-[9px] font-mono font-bold text-purple-300 leading-none">Кот</span>
            <span className="text-[7px] font-mono text-neutral-500 leading-none mt-0.5">мастерской</span>
          </div>
          <div className="relative">
            {catSpeech && (
              <span className="absolute -top-6 right-0 text-[10px] font-mono text-orange-300 font-bold bg-neutral-900 border border-orange-500/50 px-2 py-0.5 rounded-full shadow-lg animate-bounce whitespace-nowrap z-30">
                Ш-ш-ш! 🐾
              </span>
            )}
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/40 shadow-[0_2px_10px_rgba(168,85,247,0.3)] bg-black/60">
              <img
                src="./assets/spooky-cat.jpg"
                alt="Испуганный кот"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Subtle shelf underline */}
      <div className="max-w-md mx-auto px-4">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

    </div>
  );
}
