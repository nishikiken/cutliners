import React from 'react';

export function FooterThemeGround({ themeId }) {
  // 1. HALLOWEEN: Deep dark midnight-blue & earthy ground with silhouette tombstones, skulls & grass
  if (themeId === 'halloween') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-16 sm:h-20 text-[#0d101a] opacity-85"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Distant eerie hill */}
          <path d="M 0 55 Q 120 40 240 50 Q 320 38 400 48 L 400 80 L 0 80 Z" opacity="0.6" />

          {/* Foreground rolling ground */}
          <path d="M 0 62 Q 80 52 160 58 Q 280 48 400 56 L 400 80 L 0 80 Z" />

          {/* Tombstone 1 (Arched) */}
          <path d="M 60 54 Q 60 38 72 38 Q 84 38 84 54 Z" fill="#131826" />
          <line x1="72" y1="43" x2="72" y2="50" stroke="#1f293d" strokeWidth="1.2" />
          <line x1="68" y1="46" x2="76" y2="46" stroke="#1f293d" strokeWidth="1.2" />

          {/* Tombstone 2 (Cross) */}
          <rect x="195" y="42" width="3" height="18" fill="#151b2b" />
          <rect x="190" y="46" width="13" height="3" fill="#151b2b" />

          {/* Tombstone 3 (Old cracked slab) */}
          <polygon points="310,60 312,44 324,42 328,60" fill="#131826" />
          <line x1="316" y1="48" x2="320" y2="56" stroke="#1f293d" strokeWidth="0.8" />

          {/* Tiny Skull 1 resting by tombstone */}
          <g transform="translate(90, 56) scale(0.9)">
            <ellipse cx="6" cy="5" rx="4.5" ry="4" fill="#1e2538" />
            <rect x="4" y="7" width="4" height="2" fill="#1e2538" />
            <circle cx="4.5" cy="5" r="0.9" fill="#08080c" />
            <circle cx="7.5" cy="5" r="0.9" fill="#08080c" />
          </g>

          {/* Tiny Skull 2 on the right */}
          <g transform="translate(260, 54) scale(0.85)">
            <ellipse cx="6" cy="5" rx="4.5" ry="4" fill="#1a2030" />
            <rect x="4" y="7" width="4" height="2" fill="#1a2030" />
            <circle cx="4.5" cy="5" r="0.9" fill="#08080c" />
            <circle cx="7.5" cy="5" r="0.9" fill="#08080c" />
          </g>

          {/* Wispy grass tufts */}
          <path d="M 40 60 L 37 52 M 41 60 L 42 50 M 43 60 L 46 53" stroke="#1e2538" strokeWidth="1" strokeLinecap="round" />
          <path d="M 140 58 L 138 50 M 141 58 L 143 48 M 143 58 L 147 52" stroke="#1e2538" strokeWidth="1" strokeLinecap="round" />
          <path d="M 350 56 L 348 48 M 351 56 L 353 46 M 353 56 L 357 50" stroke="#1e2538" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // 2. NEW YEAR / WINTER: Rolling midnight snowdrifts & miniature pine tree silhouettes
  if (themeId === 'newyear') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-14 sm:h-16 text-[#09121a] opacity-80"
          viewBox="0 0 400 70"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Distant soft drift */}
          <path d="M 0 45 Q 100 32 200 40 Q 300 28 400 38 L 400 70 L 0 70 Z" opacity="0.5" />
          {/* Foreground drift */}
          <path d="M 0 52 Q 130 40 260 50 Q 340 44 400 48 L 400 70 L 0 70 Z" />

          {/* Pine tree silhouettes */}
          <polygon points="70,55 64,48 76,48 66,42 74,42 70,36 70,55" fill="#0f1d2a" />
          <polygon points="180,50 173,43 187,43 175,37 185,37 180,30 180,50" fill="#0f1d2a" />
          <polygon points="320,52 314,46 326,46 316,40 324,40 320,34 320,52" fill="#0f1d2a" />
        </svg>
      </div>
    );
  }

  // 3. EASTER: Soft spring knolls with willow sprigs & resting painted eggs
  if (themeId === 'easter') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-14 sm:h-16 text-[#0d1310] opacity-80"
          viewBox="0 0 400 70"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Spring grassy hills */}
          <path d="M 0 48 Q 110 36 220 44 Q 310 34 400 42 L 400 70 L 0 70 Z" opacity="0.6" />
          <path d="M 0 54 Q 140 44 280 52 Q 350 48 400 50 L 400 70 L 0 70 Z" />

          {/* Painted egg nestled in grass (left) */}
          <ellipse cx="95" cy="52" rx="4" ry="5.5" fill="#d97706" opacity="0.7" transform="rotate(-15 95 52)" />
          {/* Painted egg nestled in grass (right) */}
          <ellipse cx="290" cy="50" rx="3.8" ry="5.2" fill="#ca8a04" opacity="0.7" transform="rotate(20 290 50)" />

          {/* Little wild grass shoots */}
          <path d="M 85 54 L 84 48 M 87 54 L 89 47" stroke="#1a2e20" strokeWidth="1" strokeLinecap="round" />
          <path d="M 280 52 L 279 46 M 282 52 L 284 45" stroke="#1a2e20" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // 4. SUMMER: Gentle beach dunes & calm ocean ripple lines
  if (themeId === 'summer') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-14 sm:h-16 text-[#140e10] opacity-80"
          viewBox="0 0 400 70"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Dune ridges */}
          <path d="M 0 46 Q 120 35 240 42 Q 330 32 400 40 L 400 70 L 0 70 Z" opacity="0.5" />
          <path d="M 0 54 Q 100 46 220 52 Q 320 44 400 50 L 400 70 L 0 70 Z" />

          {/* Delicate water ripple / shoreline lines */}
          <path d="M 60 58 Q 110 55 160 58" stroke="#26171b" strokeWidth="0.8" fill="none" />
          <path d="M 230 56 Q 280 53 330 56" stroke="#26171b" strokeWidth="0.8" fill="none" />
        </svg>
      </div>
    );
  }

  // 5. VALENTINE: Dark rose vines & delicate heart lace along bottom
  if (themeId === 'valentines') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-12 sm:h-14 text-[#16080e] opacity-75"
          viewBox="0 0 400 60"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M 0 42 Q 130 34 260 40 Q 340 36 400 38 L 400 60 L 0 60 Z" />
          {/* Subtle rose leaf silhouette */}
          <path d="M 80 44 Q 86 38 94 42" stroke="#2b0d18" strokeWidth="1.2" fill="none" />
          <path d="M 200 42 Q 206 36 214 40" stroke="#2b0d18" strokeWidth="1.2" fill="none" />
          <path d="M 310 42 Q 316 36 324 40" stroke="#2b0d18" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
    );
  }

  // 6. NOIR / CLASSIC: Sleek sartorial stitch line
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
