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

// 4. Classic Stylish Winter Snowman (Restored Clean Edition, 100% Transparent Background)
export function SnowmanTransparent({ className = 'w-8 h-9' }) {
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

      {/* Black Top Hat with red ribbon */}
      <rect x="36" y="19" width="28" height="3" rx="1.5" fill="#0f172a" />
      <rect x="41" y="7" width="18" height="13" rx="2" fill="#1e293b" />
      <rect x="41" y="16" width="18" height="3" fill="#e11d48" />
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
      <path d="M 33 46 Q 56 34 79 46" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2,2" fill="none" opacity="0.9" />
      <path d="M 28 56 Q 56 46 84 56" stroke="#ffffff" strokeWidth="1.8" fill="none" opacity="0.95" />
      <path d="M 28 62 Q 56 52 84 62" stroke="#ffffff" strokeWidth="1.8" fill="none" opacity="0.95" />
      {/* Cross star medallion */}
      <g transform="translate(56, 56)">
        <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#ffffff" />
        <circle cx="0" cy="0" r="1.5" fill="#d97706" />
      </g>
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
export function RoseTransparent({ className = 'w-9 h-9' }) {
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
        filter="drop-shadow(0 2px 8px rgba(225,29,72,0.45))"
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

// 7. Summer Season: Two Rolling Sand Dunes & Graceful Palm Tree (100% Transparent Background)
export function SummerPalmTransparent({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="duneGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="duneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Two Smooth Sand Dunes / Hills at the bottom */}
      {/* Background Dune */}
      <path
        d="M 12 88 Q 36 68 62 82 Q 78 74 94 88 Z"
        fill="url(#duneGrad1)"
        opacity="0.85"
      />
      {/* Foreground Dune */}
      <path
        d="M 8 92 Q 40 74 70 88 Q 84 84 96 92 Z"
        fill="url(#duneGrad2)"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      />

      {/* Graceful Palm Tree rising from the sand dune */}
      {/* Trunk */}
      <path
        d="M 44 80 Q 48 54 56 30"
        stroke="#78350f"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Coconut accents */}
      <circle cx="53" cy="32" r="2.5" fill="#451a03" />
      <circle cx="57" cy="33" r="2.5" fill="#451a03" />

      {/* Lush Palm Fronds curving out */}
      <path d="M 56 30 Q 34 22 18 34" stroke="#15803d" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 56 30 Q 42 12 34 4" stroke="#16a34a" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 56 30 Q 68 12 82 14" stroke="#22c55e" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 56 30 Q 80 24 90 38" stroke="#16a34a" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 56 30 Q 68 44 74 58" stroke="#15803d" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 56 30 Q 38 40 30 52" stroke="#166534" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 8. Classic Atelier: Delicate Tailoring Needle with Flowing Thread Loop (100% Transparent Background)
export function ScissorsArtisanTransparent({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="needleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Flowing Artisan Thread looping gracefully through the needle eye */}
      <path
        d="M 28 68 C 10 52, 14 26, 38 28 C 58 30, 48 54, 30 66"
        stroke="#e2e8f0"
        strokeWidth="1.5"
        strokeDasharray="2.5,2.5"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M 30 66 C 24 74, 20 84, 28 90 C 38 94, 52 86, 64 74"
        stroke="#94a3b8"
        strokeWidth="1.3"
        strokeDasharray="2,2"
        fill="none"
        opacity="0.7"
      />

      {/* Sleek Polished Silver Tailoring Needle */}
      <path
        d="M 26 72 L 86 16"
        stroke="url(#needleGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        filter="drop-shadow(0 0 4px rgba(255,255,255,0.4))"
      />
      {/* Sharp needle point */}
      <path d="M 85 17 L 89 13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      {/* Needle eye slot */}
      <ellipse cx="32" cy="66" rx="1.5" ry="4" fill="#08080c" stroke="#e2e8f0" strokeWidth="0.8" transform="rotate(-45 32 66)" />
    </svg>
  );
}

// 9. Delicate Corner Spiderweb for Halloween (100% vector, non-intrusive)
export function HalloweenCornerWeb({ className = 'w-24 h-24' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Web radiating from top-right corner (100, 0) */}
      <line x1="100" y1="0" x2="0" y2="0" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <line x1="100" y1="0" x2="10" y2="40" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <line x1="100" y1="0" x2="35" y2="75" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <line x1="100" y1="0" x2="65" y2="95" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <line x1="100" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />

      {/* Concentric curved webbing arcs */}
      <path d="M 80 0 Q 82 18 100 20" stroke="currentColor" strokeWidth="0.65" opacity="0.45" fill="none" />
      <path d="M 60 0 Q 64 36 100 40" stroke="currentColor" strokeWidth="0.65" opacity="0.45" fill="none" />
      <path d="M 40 0 Q 46 54 100 60" stroke="currentColor" strokeWidth="0.65" opacity="0.45" fill="none" />
      <path d="M 20 0 Q 28 72 100 80" stroke="currentColor" strokeWidth="0.65" opacity="0.45" fill="none" />
      <path d="M 0 0 Q 10 90 100 100" stroke="currentColor" strokeWidth="0.65" opacity="0.35" fill="none" />

      {/* Tiny subtle spider dangling on thread */}
      <line x1="68" y1="28" x2="68" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <circle cx="68" cy="50" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="68" cy="48" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
