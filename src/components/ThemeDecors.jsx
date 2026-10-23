import React from 'react';
import confetti from 'canvas-confetti';

export function ThemeDecors({ themeId }) {
  if (themeId === 'newyear') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {/* Frosted Pine Needle Twigs Top Corner */}
        <svg className="absolute top-0 right-0 w-32 h-28 opacity-60 text-sky-400" viewBox="0 0 120 120" fill="none">
          <path d="M120 0 Q 70 30 50 80 M90 20 Q 60 50 30 70 M110 40 Q 80 70 60 100" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="50" cy="80" r="8" fill="#fbbf24" opacity="0.8" />
          <circle cx="30" cy="70" r="6" fill="#38bdf8" opacity="0.8" />
          <circle cx="60" cy="100" r="7" fill="#f43f5e" opacity="0.8" />
        </svg>

        {/* Falling Snowflake Easter Egg */}
        <div 
          onClick={() => confetti({ particleCount: 35, spread: 70, origin: { y: 0.2, x: 0.8 }, colors: ['#e0f2fe', '#bae6fd', '#38bdf8'] })}
          className="pointer-events-auto absolute top-14 right-4 z-30 cursor-pointer p-2 bg-neutral-900/70 border border-sky-400/30 rounded-full hover:scale-110 transition-transform"
          title="Снежный залп!"
        >
          <span className="text-xl filter drop-shadow-[0_0_8px_#38bdf8]">❄️</span>
        </div>

        {/* Santa / Dark Pine Badge */}
        <div className="absolute bottom-24 left-4 z-20 bg-neutral-950/80 border border-sky-400/30 px-3 py-1 rounded-full text-[10px] text-sky-300 font-mono flex items-center gap-1.5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
          Зимний дроп плотного денима 18oz
        </div>
      </div>
    );
  }

  if (themeId === 'easter') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {/* Gothic Ornate Egg Floating Interactive */}
        <div 
          onClick={() => confetti({ particleCount: 40, spread: 60, origin: { y: 0.75, x: 0.15 }, colors: ['#c084fc', '#facc15', '#6b21a8'] })}
          className="pointer-events-auto absolute bottom-24 left-3 z-30 cursor-pointer group"
          title="Готическое пасхальное яйцо мастера"
        >
          <div className="relative animate-float-slow p-1">
            <svg className="w-12 h-16 filter drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]" viewBox="0 0 100 130">
              <defs>
                <linearGradient id="eggGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e142b" />
                  <stop offset="50%" stopColor="#2e1a47" />
                  <stop offset="100%" stopColor="#0a0512" />
                </linearGradient>
              </defs>
              <ellipse cx="50" cy="70" rx="38" ry="52" fill="url(#eggGrad)" stroke="#c084fc" strokeWidth="1.5" />
              {/* Ornate Gold Filigree on Egg */}
              <path d="M 25 70 Q 50 50 75 70 Q 50 90 25 70" stroke="#facc15" strokeWidth="1.5" fill="none" />
              <circle cx="50" cy="70" r="6" fill="#facc15" />
              <path d="M 50 35 L 50 105 M 30 70 L 70 70" stroke="#c084fc" strokeWidth="1" strokeDasharray="2,2" />
            </svg>
            <span className="text-[9px] font-mono text-purple-300 block text-center bg-black/70 px-1 rounded">
              пасха 🥚
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (themeId === 'summer') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {/* Palm Silhouette and Sunset Horizon */}
        <svg className="absolute top-0 right-0 w-28 h-28 opacity-40 text-orange-400" viewBox="0 0 120 120" fill="none">
          <circle cx="90" cy="30" r="18" fill="#f97316" opacity="0.6" filter="blur(6px)" />
          <path d="M 120 120 Q 90 70 70 30 Q 90 40 110 50" stroke="#fb7185" strokeWidth="3" />
          <path d="M 70 30 Q 50 20 20 30 M 70 30 Q 45 40 30 60 M 70 30 Q 60 60 50 80" stroke="#f97316" strokeWidth="2" />
        </svg>

        <div 
          onClick={() => confetti({ particleCount: 30, spread: 60, origin: { y: 0.8, x: 0.8 }, colors: ['#f97316', '#ec4899', '#fde047'] })}
          className="pointer-events-auto absolute bottom-24 right-4 z-30 cursor-pointer p-2 bg-neutral-950/80 border border-orange-500/40 rounded-full"
          title="Летний вайб!"
        >
          <span className="text-xl">🌴</span>
        </div>
      </div>
    );
  }

  if (themeId === 'valentines') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {/* Bleeding / Pierced Chrome Heart */}
        <div 
          onClick={() => confetti({ particleCount: 35, spread: 65, origin: { y: 0.75, x: 0.15 }, colors: ['#f43f5e', '#be123c', '#e11d48'] })}
          className="pointer-events-auto absolute bottom-24 left-3 z-30 cursor-pointer group"
          title="Черное сердце с красной нитью"
        >
          <div className="relative animate-float-slow p-1">
            <svg className="w-12 h-14 filter drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]" viewBox="0 0 100 100">
              <path
                d="M 50 85 C 10 55, 10 20, 32 15 C 44 12, 48 24, 50 30 C 52 24, 56 12, 68 15 C 90 20, 90 55, 50 85 Z"
                fill="#18070e"
                stroke="#f43f5e"
                strokeWidth="2"
              />
              {/* Crossed Needle & Red Stitch */}
              <line x1="25" y1="25" x2="75" y2="75" stroke="#e2e8f0" strokeWidth="1.5" />
              <path d="M 35 45 Q 50 65 65 35" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,3" fill="none" />
            </svg>
            <span className="text-[9px] font-mono text-rose-300 block text-center bg-black/80 px-1 rounded">
              love & stitch 🖤
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Noir Atelier / Classic Default
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {/* Subtle Tailor measuring tape ruler on top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500/20 flex justify-between px-2 overflow-hidden opacity-40">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`w-[1px] bg-amber-400 ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`} />
        ))}
      </div>
    </div>
  );
}
