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

// 4. Stylish Winter Snowman with cute snowball paws/feet (100% Transparent Background)
export function SnowmanTransparent({ className = 'w-8 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Two cute snowball feet / paws at the base */}
      <circle cx="35" cy="96" r="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(56,189,248,0.25))" />
      <circle cx="65" cy="96" r="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(56,189,248,0.25))" />

      {/* Main bottom snowball */}
      <circle cx="50" cy="72" r="25" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" filter="drop-shadow(0 0 8px rgba(56,189,248,0.3))" />
      
      {/* Coal buttons on belly */}
      <circle cx="50" cy="65" r="2.2" fill="#0f172a" />
      <circle cx="50" cy="74" r="2.2" fill="#0f172a" />
      <circle cx="50" cy="83" r="2.2" fill="#0f172a" />

      {/* Cozy red scarf */}
      <path d="M 35 48 Q 50 53 65 48 L 67 53 Q 50 58 33 53 Z" fill="#e11d48" />
      <rect x="55" y="50" width="7" height="19" rx="2" fill="#e11d48" transform="rotate(12 55 50)" />
      {/* Scarf fringes */}
      <line x1="56" y1="69" x2="56" y2="72" stroke="#fb7185" strokeWidth="1" />
      <line x1="59" y1="69" x2="59" y2="72" stroke="#fb7185" strokeWidth="1" />
      <line x1="62" y1="69" x2="62" y2="72" stroke="#fb7185" strokeWidth="1" />

      {/* Head snowball */}
      <circle cx="50" cy="35" r="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.2" />

      {/* Coal eyes & joyful smile */}
      <circle cx="44" cy="32" r="1.8" fill="#0f172a" />
      <circle cx="56" cy="32" r="1.8" fill="#0f172a" />
      <circle cx="43" cy="41" r="1" fill="#0f172a" />
      <circle cx="46" cy="43" r="1" fill="#0f172a" />
      <circle cx="50" cy="44" r="1" fill="#0f172a" />
      <circle cx="54" cy="43" r="1" fill="#0f172a" />
      <circle cx="57" cy="41" r="1" fill="#0f172a" />

      {/* Orange carrot nose pointing right */}
      <polygon points="50,35 64,37 50,39" fill="#f97316" />

      {/* Black gentleman top hat with red ribbon */}
      <rect x="34" y="19" width="32" height="3" rx="1.5" fill="#0f172a" />
      <rect x="40" y="6" width="20" height="14" rx="2" fill="#1e293b" />
      <rect x="40" y="16" width="20" height="3" fill="#e11d48" />
    </svg>
  );
}

// 5. Sacred & Beautiful Easter Egg (Pysanka / Faberge ornament with Willow sprig)
export function EasterEggTransparent({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="easterEggGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="45%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
      </defs>

      {/* Sacred Willow sprig with soft fluffy buds curving behind egg */}
      <path d="M 22 85 Q 26 50 48 18" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
      {/* Willow buds */}
      <ellipse cx="28" cy="65" rx="3.5" ry="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" transform="rotate(-30 28 65)" />
      <ellipse cx="36" cy="46" rx="3.5" ry="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" transform="rotate(-30 36 46)" />
      <ellipse cx="45" cy="28" rx="3" ry="5.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" transform="rotate(-25 45 28)" />

      {/* Main Ornate Golden Easter Egg */}
      <ellipse cx="56" cy="56" rx="28" ry="36" fill="url(#easterEggGrad)" filter="drop-shadow(0 2px 8px rgba(217,119,6,0.45))" />
      
      {/* Intricate Sacred Lace Filigree */}
      {/* Upper arch */}
      <path d="M 33 46 Q 56 34 79 46" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2,2" fill="none" opacity="0.9" />
      {/* Center belt with sacred cross star */}
      <path d="M 28 56 Q 56 46 84 56" stroke="#ffffff" strokeWidth="1.8" fill="none" opacity="0.95" />
      <path d="M 28 62 Q 56 52 84 62" stroke="#ffffff" strokeWidth="1.8" fill="none" opacity="0.95" />
      {/* Cross star medallion */}
      <g transform="translate(56, 56)">
        <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#ffffff" />
        <circle cx="0" cy="0" r="1.5" fill="#d97706" />
      </g>
      {/* Lower arch */}
      <path d="M 34 68 Q 56 78 78 68" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2,2" fill="none" opacity="0.9" />

      {/* Tiny decorative pearls */}
      <circle cx="44" cy="42" r="1.5" fill="#ffffff" />
      <circle cx="68" cy="42" r="1.5" fill="#ffffff" />
      <circle cx="44" cy="72" r="1.5" fill="#ffffff" />
      <circle cx="68" cy="72" r="1.5" fill="#ffffff" />
    </svg>
  );
}

// 6. Romantic Heart with Blooming Velvet Rose (Valentine's Day)
export function RoseTransparent({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="heartGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="40%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#881337" />
        </radialGradient>
        <radialGradient id="roseBudGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="60%" stopColor="#be123c" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
      </defs>

      {/* Elegant Stylized Romantic Heart in background */}
      <path
        d="M 50 82 
           C 24 64, 12 46, 18 28 
           C 23 14, 38 14, 48 24 
           L 50 26 L 52 24 
           C 62 14, 77 14, 82 28 
           C 88 46, 76 64, 50 82 Z"
        fill="url(#heartGrad)"
        filter="drop-shadow(0 2px 8px rgba(225,29,72,0.4))"
      />

      {/* Golden artisan seam thread curving across the heart */}
      <path
        d="M 24 38 Q 50 48 76 34"
        stroke="#fef08a"
        strokeWidth="1.2"
        strokeDasharray="2,2"
        fill="none"
        opacity="0.8"
      />

      {/* Blooming Velvet Rose nestled at the center-right */}
      <g transform="translate(52, 42)">
        {/* Rose leaves */}
        <path d="M 0 0 Q -12 -6 -16 4 Q -8 8 0 0" fill="#15803d" />
        <path d="M 4 8 Q 14 16 20 8 Q 12 2 4 8" fill="#15803d" />

        {/* Rose Petals cluster */}
        <circle cx="0" cy="0" r="14" fill="url(#roseBudGrad)" stroke="#fda4af" strokeWidth="0.8" />
        <ellipse cx="-1" cy="-1" rx="9" ry="8" fill="#e11d48" />
        <path d="M -5 -3 Q 0 -8 5 -3 Q 0 4 -5 -3" fill="#f43f5e" />
        <circle cx="0" cy="-1" r="3" fill="#ffe4e6" />
      </g>
    </svg>
  );
}

// 7. Clear & Aesthetic Summer Sunset with Twin Palm Trees (100% Transparent Background)
export function SummerPalmTransparent({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sunsetDiscGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>
      </defs>

      {/* Radiant Sun Disc */}
      <circle cx="50" cy="48" r="32" fill="url(#sunsetDiscGrad)" filter="drop-shadow(0 0 10px rgba(245,158,11,0.5))" />

      {/* Horizontal Horizon Sunset Stripes across bottom half of sun */}
      <rect x="22" y="56" width="56" height="2" fill="#08080c" opacity="0.6" rx="1" />
      <rect x="26" y="62" width="48" height="2.5" fill="#08080c" opacity="0.75" rx="1" />
      <rect x="32" y="68" width="36" height="3" fill="#08080c" opacity="0.9" rx="1" />

      {/* Silhouette of Twin Tropical Palm Trees */}
      {/* Tall Palm Trunk */}
      <path d="M 38 84 Q 44 60 54 36" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
      {/* Tall Palm Fronds */}
      <path d="M 54 36 Q 30 28 18 42" stroke="#1c1917" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 54 36 Q 42 16 38 8" stroke="#1c1917" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 54 36 Q 66 16 80 18" stroke="#1c1917" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 54 36 Q 78 30 88 42" stroke="#1c1917" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 54 36 Q 64 52 68 64" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />

      {/* Smaller companion palm */}
      <path d="M 32 84 Q 35 68 32 54" stroke="#1c1917" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 32 54 Q 18 48 10 58" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
      <path d="M 32 54 Q 24 38 20 32" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
      <path d="M 32 54 Q 44 42 50 44" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 8. Classic Sartorial Atelier Emblem: Crossed Tailor Shears & Needle with Thread (100% Transparent Background)
export function ScissorsArtisanTransparent({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Refined silver & platinum tailoring needle with thread loop */}
      <path
        d="M 18 82 Q 40 50 78 22"
        stroke="#e2e8f0"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Needle eye */}
      <ellipse cx="22" cy="78" rx="2" ry="4" fill="#08080c" stroke="#e2e8f0" strokeWidth="1" transform="rotate(-40 22 78)" />
      {/* Looping artisan thread */}
      <path
        d="M 22 78 C 10 88, 14 96, 26 94 C 36 92, 40 76, 50 68"
        stroke="#94a3b8"
        strokeWidth="1.2"
        strokeDasharray="2,2"
        fill="none"
        opacity="0.8"
      />

      {/* Crossed Antique Tailoring Shears */}
      {/* Handle ring 1 */}
      <circle cx="30" cy="30" r="11" stroke="#e2e8f0" strokeWidth="2.5" />
      {/* Handle ring 2 */}
      <circle cx="68" cy="72" r="11" stroke="#e2e8f0" strokeWidth="2.5" />
      {/* Blade 1 */}
      <path d="M 38 38 L 84 84" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
      {/* Blade 2 */}
      <path d="M 60 64 L 16 20" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
      {/* Center Pivot Screw in muted brass */}
      <circle cx="50" cy="50" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
    </svg>
  );
}
