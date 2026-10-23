import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export function HalloweenDecor() {
  const [catSpooked, setCatSpooked] = useState(false);
  const [catSpeech, setCatSpeech] = useState(false);
  const [candySpeech, setCandySpeech] = useState(false);

  // Trigger Spooked Cat Jump & Comic speech
  const handleCatTap = () => {
    setCatSpooked(true);
    setCatSpeech(true);

    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.85, x: 0.85 },
      colors: ['#ff7700', '#9333ea', '#111111', '#fbbf24']
    });

    setTimeout(() => setCatSpeech(false), 2400);
    setTimeout(() => setCatSpooked(false), 800);
  };

  // Trigger Reese's Candy Burst
  const handleReesesTap = (e) => {
    e.stopPropagation();
    setCandySpeech(true);

    confetti({
      particleCount: 50,
      spread: 85,
      origin: { y: 0.8, x: 0.15 },
      colors: ['#ff6600', '#ffb703', '#4a1e05', '#ff9e00', '#d97706']
    });

    setTimeout(() => setCandySpeech(false), 2200);
  };

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
      
      {/* Spiderweb top right corner */}
      <svg
        className="absolute top-0 right-0 w-24 h-24 opacity-35 text-neutral-400"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 0 L100 100 M0 0 L30 100 M0 0 L65 100 M0 0 L100 65 M0 0 L100 30" opacity="0.6" />
        <path d="M25 0 Q 25 25 0 25" stroke="currentColor" fill="none" />
        <path d="M50 0 Q 50 50 0 50" stroke="currentColor" fill="none" />
        <path d="M75 0 Q 75 75 0 75" stroke="currentColor" fill="none" />
        {/* Little hanging spider */}
        <line x1="85" y1="45" x2="85" y2="72" stroke="#a855f7" strokeWidth="0.8" />
        <circle cx="85" cy="74" r="2.5" fill="#000" stroke="#a855f7" strokeWidth="0.8" />
      </svg>

      {/* Real Reese's Peanut Butter Cups Candy (Floating Interactive) */}
      <div 
        onClick={handleReesesTap}
        className="pointer-events-auto absolute bottom-24 left-3 z-30 cursor-pointer group active:scale-95 transition-transform"
        title="Настоящие конфеты Reese's — нажми, чтобы съесть!"
      >
        {candySpeech && (
          <div className="absolute -top-10 left-0 bg-neutral-900 border border-orange-500 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-xl shadow-xl animate-bounce whitespace-nowrap z-40 font-mono">
            🍫 Вкусный Reese's! 🥜
            <div className="absolute bottom-[-5px] left-4 w-2 h-2 bg-neutral-900 border-r border-b border-orange-500 transform rotate-45"></div>
          </div>
        )}

        <div className="relative animate-float-slow">
          {/* Authentic Reese's Pack Image */}
          <div className="w-16 h-12 rounded-xl overflow-hidden border border-orange-500/80 shadow-[0_0_15px_rgba(255,102,0,0.5)] bg-neutral-950">
            <img
              src="./assets/reeses.jpg"
              alt="Настоящие конфеты Reese's Peanut Butter Cups"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-[9px] font-mono text-amber-400 block text-center mt-1 bg-black/80 px-1 rounded border border-orange-500/20 whitespace-nowrap">
            Reese's 🍫
          </span>
        </div>
      </div>

      {/* Real Vintage Cartoon Spooked Cat on Tiptoes (Испуганный кот на дыбах) */}
      <div 
        onClick={handleCatTap}
        className="pointer-events-auto absolute bottom-24 right-3 z-30 cursor-pointer group active:scale-95 transition-transform"
        title="Испуганный кот мастерской — нажми на кота!"
      >
        {catSpeech && (
          <div className="absolute -top-11 right-0 bg-neutral-900 border border-orange-500 text-orange-300 text-[11px] font-bold px-2.5 py-1 rounded-xl shadow-xl animate-bounce whitespace-nowrap z-40 font-mono">
            ⚡ Ш-Ш-Ш! МЯУ! ⚡
            <div className="absolute bottom-[-5px] right-4 w-2 h-2 bg-neutral-900 border-r border-b border-orange-500 transform rotate-45"></div>
          </div>
        )}

        <div className={`relative transition-transform duration-300 ${catSpooked ? '-translate-y-4 scale-110' : 'hover:scale-105'}`}>
          {/* Real Spooky Cartoon Cat Image */}
          <div className="w-14 h-16 rounded-2xl overflow-hidden border border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.4)] bg-neutral-950">
            <img
              src="./assets/spooky-cat.jpg"
              alt="Испуганный мультяшный кот на дыбах"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-[9px] font-mono text-purple-300 block text-center mt-1 bg-black/80 px-1 rounded border border-purple-500/20 whitespace-nowrap">
            кот мастерской 🐾
          </span>
        </div>
      </div>

      {/* Real Carved Halloween Pumpkin (Top Left) */}
      <div
        onClick={() => {
          confetti({
            particleCount: 30,
            spread: 60,
            origin: { y: 0.15, x: 0.15 },
            colors: ['#ff7700', '#ff9900', '#d97706']
          });
        }}
        className="pointer-events-auto absolute top-14 left-2 z-30 cursor-pointer group active:scale-95 transition-transform"
        title="Хэллоуинская тыква — нажми!"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-500/70 shadow-[0_0_12px_rgba(255,119,0,0.6)] bg-neutral-950">
          <img
            src="./assets/halloween-pumpkin.jpg"
            alt="Хэллоуинская тыква"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
        </div>
      </div>

    </div>
  );
}
