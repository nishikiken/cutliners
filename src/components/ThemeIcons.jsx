import React from 'react';

// 1. Authentic Reese's Peanut Butter Cup with 100% Transparent Background
export function ReesesTransparent({ className = 'w-10 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 100 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orange Wrapper Pill */}
      <rect x="4" y="10" width="72" height="45" rx="8" fill="url(#reesesGrad)" filter="drop-shadow(0 2px 6px rgba(255,102,0,0.4))" />
      
      {/* Sawtooth edge on wrapper ends */}
      <path d="M4 14 L1 17 L4 20 L1 23 L4 26 L1 29 L4 32 L1 35 L4 38 L1 41 L4 44 L1 47 L4 51" stroke="#b43403" strokeWidth="1" fill="none" />
      <path d="M76 14 L79 17 L76 20 L79 23 L76 26 L79 29 L76 32 L79 35 L76 38 L79 41 L76 44 L79 47 L76 51" stroke="#b43403" strokeWidth="1" fill="none" />

      {/* "Reese's" Stylized Typography */}
      <text x="14" y="36" fontFamily="sans-serif" fontSize="16" fontWeight="900" fontStyle="italic" fill="#ffeb3b" letterSpacing="-1">
        Reese's
      </text>
      <text x="16" y="47" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#3e1f0e" letterSpacing="0.5">
        PEANUT BUTTER
      </text>

      {/* Ridged Chocolate Cup peeking on the right */}
      <g transform="translate(68, 6) rotate(15)">
        <ellipse cx="14" cy="14" rx="13" ry="13" fill="#2d1508" stroke="#4a240f" strokeWidth="1" filter="drop-shadow(0 3px 6px rgba(0,0,0,0.5))" />
        {/* Ridges on the cup edge */}
        <path d="M3 14 Q 5 10 9 7 Q 14 5 19 7 Q 23 10 25 14 Q 23 19 19 22 Q 14 24 9 22 Q 5 19 3 14 Z" stroke="#5a2e14" strokeWidth="1.2" strokeDasharray="2,2" fill="#3e1f0e" />
        {/* Peanut butter core peek */}
        <ellipse cx="14" cy="14" rx="5" ry="5" fill="#d97706" opacity="0.85" />
      </g>

      <defs>
        <linearGradient id="reesesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. Terrified Cartoon Black Cat with Arched Back on Tiptoes (100% Transparent Background)
export function SpookyCatTransparent({ className = 'w-10 h-12' }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Arched Puffed Tail */}
      <path
        d="M 28 65 Q 12 50 14 26 Q 16 12 24 6 Q 28 14 22 28 Q 23 48 34 68 Z"
        fill="#0b0b10"
        stroke="#ff7700"
        strokeWidth="1.2"
        filter="drop-shadow(0 0 6px rgba(168,85,247,0.4))"
      />
      {/* Spiky bristles on tail */}
      <path d="M 14 26 L 8 22 M 16 18 L 10 12 M 20 12 L 17 6" stroke="#ff7700" strokeWidth="1.2" />

      {/* Arched razorback body standing high on stiff tiptoes */}
      <path
        d="M 28 72 
           C 25 40, 40 18, 62 22 
           C 78 26, 84 42, 82 68 
           L 78 106 L 72 108 L 74 74 
           C 70 70, 65 68, 56 68 
           L 52 108 L 46 106 L 49 74 
           C 42 76, 36 80, 34 106 L 27 107 Z"
        fill="#0d0d14"
        stroke="#ff7700"
        strokeWidth="1.2"
      />

      {/* Bristling spine tufts */}
      <path
        d="M 38 34 L 33 28 L 41 31 
           M 47 24 L 45 16 L 52 23 
           M 59 20 L 61 11 L 66 20 
           M 72 23 L 77 15 L 75 27"
        stroke="#ff7700"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Head */}
      <circle cx="74" cy="38" r="15" fill="#0d0d14" stroke="#ff7700" strokeWidth="1.2" />

      {/* Scared twitchy ears */}
      <polygon points="66,28 62,14 74,23" fill="#181424" stroke="#a855f7" strokeWidth="1.2" />
      <polygon points="78,24 88,12 84,28" fill="#181424" stroke="#a855f7" strokeWidth="1.2" />

      {/* BIG Shocked Cartoon Eyes */}
      <ellipse cx="69" cy="36" rx="4.5" ry="5.5" fill="#ffffff" />
      <circle cx="70" cy="37" r="1.8" fill="#000000" />
      <ellipse cx="80" cy="36" rx="4.5" ry="5.5" fill="#ffffff" />
      <circle cx="79" cy="37" r="1.8" fill="#000000" />

      {/* Shocked open mouth with tiny fangs */}
      <ellipse cx="74" cy="46" rx="2" ry="2.8" fill="#4c0519" stroke="#f43f5e" strokeWidth="0.8" />
      <polygon points="73,43.5 74,45 75,43.5" fill="#fff" />

      {/* Whisker bristles */}
      <line x1="64" y1="41" x2="52" y2="38" stroke="#ffffff" strokeWidth="0.9" opacity="0.8" />
      <line x1="64" y1="44" x2="50" y2="45" stroke="#ffffff" strokeWidth="0.9" opacity="0.8" />
      <line x1="84" y1="41" x2="96" y2="38" stroke="#ffffff" strokeWidth="0.9" opacity="0.8" />
      <line x1="84" y1="44" x2="98" y2="45" stroke="#ffffff" strokeWidth="0.9" opacity="0.8" />
    </svg>
  );
}

// 3. Glowing Jack-o'-Lantern Pumpkin (100% Transparent Background)
export function PumpkinTransparent({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M 48 18 C 46 8, 55 6, 57 12 C 54 17, 52 19, 50 21 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
      {/* Ribs */}
      <ellipse cx="50" cy="56" rx="36" ry="30" fill="#ea580c" />
      <ellipse cx="36" cy="56" rx="24" ry="29" fill="#f97316" />
      <ellipse cx="64" cy="56" rx="24" ry="29" fill="#f97316" />
      <ellipse cx="50" cy="56" rx="16" ry="28" fill="#fb923c" />

      {/* Glowing Carved Eyes */}
      <polygon points="36,46 44,46 40,38" fill="#fef08a" filter="drop-shadow(0 0 4px #fbbf24)" />
      <polygon points="56,46 64,46 60,38" fill="#fef08a" filter="drop-shadow(0 0 4px #fbbf24)" />
      <polygon points="48,52 52,52 50,48" fill="#fef08a" />

      {/* Sinister Grin */}
      <path
        d="M 30 63 Q 50 78 70 63 L 66 67 L 62 63 L 58 68 L 54 63 L 50 69 L 46 63 L 42 67 L 38 63 Z"
        fill="#fef08a"
        filter="drop-shadow(0 0 4px #fef08a)"
      />
    </svg>
  );
}

// 4. Stylish Winter Snowman (100% Transparent Background)
export function SnowmanTransparent({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bottom snowball */}
      <circle cx="50" cy="74" r="26" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" filter="drop-shadow(0 0 8px rgba(56,189,248,0.3))" />
      {/* Coal buttons */}
      <circle cx="50" cy="68" r="2" fill="#0f172a" />
      <circle cx="50" cy="76" r="2" fill="#0f172a" />
      <circle cx="50" cy="84" r="2" fill="#0f172a" />

      {/* Red cozy scarf */}
      <path d="M 36 49 Q 50 54 64 49 L 66 54 Q 50 59 34 54 Z" fill="#e11d48" />
      <rect x="54" y="52" width="7" height="18" rx="2" fill="#e11d48" transform="rotate(10 54 52)" />

      {/* Head snowball */}
      <circle cx="50" cy="36" r="17" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />

      {/* Coal eyes & smile */}
      <circle cx="44" cy="33" r="1.8" fill="#0f172a" />
      <circle cx="56" cy="33" r="1.8" fill="#0f172a" />
      <circle cx="44" cy="42" r="1" fill="#0f172a" />
      <circle cx="47" cy="44" r="1" fill="#0f172a" />
      <circle cx="50" cy="44.5" r="1" fill="#0f172a" />
      <circle cx="53" cy="44" r="1" fill="#0f172a" />
      <circle cx="56" cy="42" r="1" fill="#0f172a" />

      {/* Orange carrot nose */}
      <polygon points="50,36 62,38 50,39" fill="#f97316" />

      {/* Black Top Hat */}
      <rect x="36" y="19" width="28" height="3" rx="1.5" fill="#0f172a" />
      <rect x="41" y="7" width="18" height="13" rx="2" fill="#1e293b" />
      <rect x="41" y="16" width="18" height="3" fill="#e11d48" />
    </svg>
  );
}

// 5. Traditional Easter Eggs & Bunny Ears (100% Transparent Background)
export function EasterEggTransparent({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pink/white Bunny Ears in background */}
      <ellipse cx="40" cy="22" rx="6" ry="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" transform="rotate(-12 40 22)" />
      <ellipse cx="40" cy="22" rx="3.5" ry="11" fill="#fbcfe8" transform="rotate(-12 40 22)" />
      <ellipse cx="60" cy="22" rx="6" ry="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" transform="rotate(12 60 22)" />
      <ellipse cx="60" cy="22" rx="3.5" ry="11" fill="#fbcfe8" transform="rotate(12 60 22)" />

      {/* Golden/Amber Painted Easter Egg */}
      <ellipse cx="42" cy="65" rx="18" ry="24" fill="#fbbf24" stroke="#d97706" strokeWidth="1.2" transform="rotate(-15 42 65)" />
      <path d="M 28 65 Q 42 55 56 65" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2,2" fill="none" />
      <circle cx="42" cy="65" r="4" fill="#ffffff" opacity="0.9" />

      {/* Sky Blue Painted Easter Egg in foreground */}
      <ellipse cx="62" cy="67" rx="17" ry="23" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" transform="rotate(15 62 67)" />
      <path d="M 48 67 Q 62 57 76 67" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      <circle cx="62" cy="67" r="3.5" fill="#fef08a" />
    </svg>
  );
}

// 6. Velvet Dark Rose for Valentine (100% Transparent Background)
export function RoseTransparent({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green Leaves */}
      <path d="M 50 65 Q 35 75 25 70 Q 35 60 50 65" fill="#15803d" />
      <path d="M 50 65 Q 65 75 75 70 Q 65 60 50 65" fill="#15803d" />
      {/* Rose Petals */}
      <circle cx="50" cy="45" r="22" fill="#9f1239" />
      <ellipse cx="50" cy="44" rx="17" ry="16" fill="#be123c" />
      <ellipse cx="48" cy="43" rx="12" ry="11" fill="#e11d48" />
      <path d="M 44 42 Q 50 35 56 42 Q 50 50 44 42" fill="#f43f5e" />
    </svg>
  );
}

// 7. Radiant Golden Summer Sun & Palm (100% Transparent Background, replaces emoji!)
export function SummerPalmTransparent({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Golden Warm Sun */}
      <circle cx="62" cy="42" r="22" fill="url(#summerSunGrad)" filter="drop-shadow(0 0 8px rgba(245,158,11,0.6))" />
      {/* Palm Trunk */}
      <path d="M 32 90 Q 42 60 52 38" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" />
      {/* Curved Palm Fronds */}
      <path d="M 52 38 Q 24 32 12 50" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 52 38 Q 36 18 30 8" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
      <path d="M 52 38 Q 66 16 80 18" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
      <path d="M 52 38 Q 78 32 90 44" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
      <path d="M 52 38 Q 62 52 66 66" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <radialGradient id="summerSunGrad" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="65%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// 8. Classic Artisan Shears (100% Transparent Background)
export function ScissorsArtisanTransparent({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 26 74 Q 16 64 26 54 Q 36 64 26 74 Z" stroke="#cbd5e1" strokeWidth="3.5" />
      <path d="M 44 84 Q 34 94 24 84 Q 34 74 44 84 Z" stroke="#cbd5e1" strokeWidth="3.5" />
      <line x1="28" y1="62" x2="78" y2="22" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
      <line x1="38" y1="80" x2="82" y2="34" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="50" r="3" fill="#f59e0b" />
    </svg>
  );
}
