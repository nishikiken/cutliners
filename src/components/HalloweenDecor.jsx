import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export function HalloweenDecor({ onCandyClick }) {
  const [catSpooked, setCatSpooked] = useState(false);
  const [pumpkinWink, setPumpkinWink] = useState(false);
  const [catSpeech, setCatSpeech] = useState(false);

  const triggerCatJump = () => {
    setCatSpooked(true);
    setCatSpeech(true);
    
    // Shoot spooky confetti
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.85, x: 0.8 },
      colors: ['#ff7700', '#9333ea', '#111111', '#fbbf24'],
      shapes: ['circle']
    });

    setTimeout(() => setCatSpeech(false), 2400);
    setTimeout(() => setCatSpooked(false), 800);
  };

  const handlePumpkinTap = () => {
    setPumpkinWink(true);
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.25, x: 0.15 },
      colors: ['#ff7700', '#ff9900', '#7c2d12']
    });
    setTimeout(() => setPumpkinWink(false), 1200);
  };

  const handleReesesTap = (e) => {
    e.stopPropagation();
    confetti({
      particleCount: 45,
      spread: 80,
      origin: { y: 0.7, x: 0.2 },
      colors: ['#ff6600', '#ffb703', '#4a1e05', '#ff9e00']
    });
    if (onCandyClick) onCandyClick();
  };

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
      {/* Spiderweb top right corner */}
      <svg
        className="absolute top-0 right-0 w-28 h-28 opacity-40 text-neutral-400"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 0 L100 100 M0 0 L30 100 M0 0 L65 100 M0 0 L100 65 M0 0 L100 30" opacity="0.6" />
        <path d="M20 0 Q 20 20 0 20" stroke="currentColor" fill="none" />
        <path d="M45 0 Q 45 45 0 45" stroke="currentColor" fill="none" />
        <path d="M70 0 Q 70 70 0 70" stroke="currentColor" fill="none" />
        <path d="M95 0 Q 95 95 0 95" stroke="currentColor" fill="none" />
        {/* Little hanging spider */}
        <line x1="85" y1="45" x2="85" y2="75" stroke="#a855f7" strokeWidth="0.8" />
        <circle cx="85" cy="78" r="3" fill="#000" stroke="#a855f7" strokeWidth="0.8" />
      </svg>

      {/* Floating Reese's Peanut Butter Cups (Interactive) */}
      <div 
        onClick={handleReesesTap}
        className="pointer-events-auto absolute bottom-28 left-3 z-30 cursor-pointer group transition-transform active:scale-95"
        title="Нажми на Reese's!"
      >
        <div className="relative animate-float-slow filter drop-shadow-[0_4px_12px_rgba(255,102,0,0.45)]">
          {/* Candy Cup Wrapper */}
          <div className="w-14 h-9 bg-gradient-to-r from-[#d9381e] via-[#ff6600] to-[#f59e0b] rounded-md border border-amber-300/60 p-1 flex flex-col justify-center items-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
            <span className="text-[10px] font-black tracking-tighter text-[#ffe600] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none italic font-sans">
              Reese's
            </span>
            <span className="text-[6px] uppercase tracking-widest text-amber-950 font-bold leading-none mt-0.5">
              Peanut Butter
            </span>
          </div>
          {/* Little ridged chocolate cup peeking out */}
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#3e1f0e] rounded-full border-2 border-dashed border-[#5a2e14] shadow-sm transform rotate-45 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-[#d97706] rounded-full opacity-70"></div>
          </div>
          <span className="absolute -bottom-4 left-0 text-[8px] text-amber-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-1 rounded whitespace-nowrap">
            тыкни сладость! 🍫
          </span>
        </div>
      </div>

      {/* The Scared Cartoon Black Cat (На дыбах, шерсть дыбом, выпученные глаза) */}
      <div 
        onClick={triggerCatJump}
        className="pointer-events-auto absolute bottom-20 right-2 z-30 cursor-pointer group"
        title="Испуганный кот мастерской — нажми, чтобы погладить / испугать!"
      >
        <div className="relative">
          {/* Comic speech bubble on tap */}
          {catSpeech && (
            <div className="absolute -top-12 right-2 bg-neutral-900 border border-orange-500 text-orange-300 text-xs font-bold px-2.5 py-1 rounded-xl shadow-xl animate-bounce whitespace-nowrap z-40">
              ⚡ Ш-Ш-Ш! МЯУ! ⚡
              <div className="absolute bottom-[-5px] right-4 w-2 h-2 bg-neutral-900 border-r border-b border-orange-500 transform rotate-45"></div>
            </div>
          )}

          {/* Scared Cat SVG */}
          <div className={`transition-transform duration-300 ${catSpooked ? '-translate-y-5 scale-110' : 'hover:scale-105'}`}>
            <svg
              className="w-20 h-24 filter drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] animate-cat-twitch"
              viewBox="0 0 120 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Spooky aura glow */}
              <ellipse cx="60" cy="70" rx="45" ry="50" fill="url(#catGlow)" opacity="0.25" />

              {/* Arched Tail - stiff and bristling zig-zag */}
              <path
                d="M 30 75 Q 10 60 12 30 Q 15 15 22 8 Q 26 18 20 32 Q 22 55 35 78 Z"
                fill="#0a0a0e"
                stroke="#a855f7"
                strokeWidth="1.2"
              />
              {/* Tail bristles */}
              <path d="M 12 30 L 6 26 L 14 24 L 8 18 L 18 16 L 15 10 L 22 8" stroke="#1f1b29" strokeWidth="1.5" />

              {/* Arched Spiky Back ("на дыбах" / high razorback) */}
              <path
                d="M 32 85 
                   C 30 50, 45 22, 70 28 
                   C 88 32, 98 52, 95 82 
                   L 90 122 L 82 124 L 84 88
                   C 80 84, 75 82, 65 82
                   L 60 124 L 52 122 L 56 86
                   C 48 88, 42 92, 38 122 L 30 124 Z"
                fill="#0d0d12"
                stroke="#ff7700"
                strokeWidth="1.2"
              />

              {/* Spiky hair tufts on the arched back */}
              <path
                d="M 44 42 L 38 34 L 48 38 
                   M 54 30 L 52 20 L 60 28 
                   M 68 25 L 70 14 L 76 25 
                   M 82 28 L 88 18 L 86 32
                   M 92 38 L 100 32 L 94 44"
                stroke="#ff7700"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Head with tufted cheeks */}
              <circle cx="86" cy="48" r="19" fill="#0d0d12" stroke="#a855f7" strokeWidth="1.2" />

              {/* Scared twitchy ears */}
              <polygon points="76,34 72,16 86,28" fill="#15121f" stroke="#a855f7" strokeWidth="1.2" />
              <polygon points="75,32 74,21 82,28" fill="#ff7700" opacity="0.6" />

              <polygon points="90,30 102,15 98,34" fill="#15121f" stroke="#a855f7" strokeWidth="1.2" />
              <polygon points="92,30 99,20 96,33" fill="#ff7700" opacity="0.6" />

              {/* BIG Shocked Cartoon Eyes (Выпученные испуганные глаза) */}
              {/* Left eye */}
              <ellipse cx="80" cy="46" rx="5.5" ry="7" fill="#ffffff" stroke="#000" strokeWidth="1" />
              <circle cx="81" cy="47" r="2.2" fill="#0d0d12" />
              <circle cx="82" cy="45" r="0.8" fill="#ffffff" />

              {/* Right eye */}
              <ellipse cx="94" cy="46" rx="5.5" ry="7" fill="#ffffff" stroke="#000" strokeWidth="1" />
              <circle cx="93" cy="47" r="2.2" fill="#0d0d12" />
              <circle cx="94" cy="45" r="0.8" fill="#ffffff" />

              {/* Tiny shocked nose & mouth */}
              <polygon points="86,52 84,54 88,54" fill="#f43f5e" />
              {/* Open shocked "O" mouth with tiny fangs */}
              <ellipse cx="86" cy="58" rx="2.5" ry="3.5" fill="#1f0a12" stroke="#f43f5e" strokeWidth="0.6" />
              <path d="M 84.5 56 L 85 58 M 87.5 56 L 87 58" stroke="#fff" strokeWidth="0.8" />

              {/* Bristling Whiskers */}
              <line x1="75" y1="52" x2="62" y2="48" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
              <line x1="75" y1="55" x2="60" y2="56" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
              <line x1="76" y1="58" x2="64" y2="64" stroke="#ffffff" strokeWidth="1" opacity="0.8" />

              <line x1="97" y1="52" x2="110" y2="48" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
              <line x1="97" y1="55" x2="112" y2="56" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
              <line x1="96" y1="58" x2="108" y2="64" stroke="#ffffff" strokeWidth="1" opacity="0.8" />

              {/* Stiff Tiptoe Paws & Claws (На цыпочках) */}
              <circle cx="34" cy="125" r="3" fill="#ff7700" opacity="0.7" />
              <circle cx="56" cy="124" r="3" fill="#ff7700" opacity="0.7" />
              <circle cx="86" cy="125" r="3" fill="#ff7700" opacity="0.7" />

              <defs>
                <radialGradient id="catGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ff7700" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <span className="text-[9px] font-mono text-purple-300/80 block text-center -mt-1 bg-black/60 px-1 py-0.5 rounded border border-purple-500/20">
            тыркни кота 🐾
          </span>
        </div>
      </div>

      {/* Jack-o'-Lantern Pumpkin (Top Left & Interactive) */}
      <div 
        onClick={handlePumpkinTap}
        className="pointer-events-auto absolute top-14 left-2 z-30 cursor-pointer group"
        title="Тыква мастера — нажми для эффекта!"
      >
        <div className={`relative transition-transform duration-200 ${pumpkinWink ? 'scale-125 rotate-12' : 'hover:scale-110'}`}>
          <svg className="w-12 h-12 filter drop-shadow-[0_0_12px_rgba(255,119,0,0.7)] animate-pumpkin-flicker" viewBox="0 0 100 100">
            {/* Green Stem */}
            <path d="M 48 20 C 46 8, 56 6, 58 12 C 55 18, 52 20, 50 22 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            {/* Pumpkin Body */}
            <ellipse cx="50" cy="58" rx="38" ry="32" fill="#ea580c" />
            <ellipse cx="36" cy="58" rx="26" ry="31" fill="#f97316" />
            <ellipse cx="64" cy="58" rx="26" ry="31" fill="#f97316" />
            <ellipse cx="50" cy="58" rx="18" ry="30" fill="#fb923c" />

            {/* Denim Patch stitched on side of pumpkin cheek */}
            <rect x="22" y="52" width="14" height="14" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2,2" />
            <text x="25" y="62" fontSize="7" fill="#94a3b8" fontFamily="monospace">CUT</text>

            {/* Carved Glowing Eyes */}
            <polygon points="34,48 42,48 38,40" fill="#fef08a" filter="drop-shadow(0 0 3px #fef08a)" />
            <polygon points="58,48 66,48 62,40" fill="#fef08a" filter="drop-shadow(0 0 3px #fef08a)" />

            {/* Carved Nose */}
            <polygon points="48,54 52,54 50,50" fill="#fef08a" />

            {/* Tooth-carved Sinister Grin */}
            <path
              d="M 28 66 
                 Q 50 82 72 66 
                 L 68 70 L 64 66 L 60 71 L 56 66 L 50 72 L 44 66 L 40 70 L 36 66 Z"
              fill="#fef08a"
              filter="drop-shadow(0 0 4px #ffedd5)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
