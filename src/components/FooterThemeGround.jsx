import React from 'react';

export function FooterThemeGround({ themeId }) {
  // 1. HALLOWEEN: Deep dark midnight-blue earthy ground with silhouette tombstones, skulls & grass
  if (themeId === 'halloween') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-3">
        <svg
          className="w-full h-16 sm:h-20 text-[#0d101a] opacity-90"
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

  // 2. NEW YEAR / WINTER: Real white snowbanks, snowdrifts & snow-covered pine trees (елочки со снегом)
  if (themeId === 'newyear') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-3">
        <svg
          className="w-full h-16 sm:h-20"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Distant soft frosty snowdrift */}
            <linearGradient id="snowBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.4" />
            </linearGradient>

            {/* Foreground white snowdrift with cool icy tint */}
            <linearGradient id="snowFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="35%" stopColor="#e2e8f0" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Distant soft snowdrift */}
          <path d="M 0 52 Q 90 38 180 46 Q 280 34 400 44 L 400 80 L 0 80 Z" fill="url(#snowBack)" />

          {/* Pine Tree 1 (Left - Tall snow-capped Christmas pine) */}
          <g transform="translate(55, 20)">
            {/* Trunk */}
            <rect x="14" y="38" width="3" height="12" fill="#3b2314" />
            {/* Lower tier needles */}
            <polygon points="15.5,14 4,38 27,38" fill="#144229" />
            {/* Snow on lower tier */}
            <path d="M 4 38 Q 9 34 15.5 35 Q 22 34 27 38 Q 23 41 15.5 40 Q 8 41 4 38 Z" fill="#ffffff" />
            {/* Mid tier needles */}
            <polygon points="15.5,6 7,26 24,26" fill="#195433" />
            {/* Snow on mid tier */}
            <path d="M 7 26 Q 11 22 15.5 23 Q 20 22 24 26 Q 20 28 15.5 28 Q 11 28 7 26 Z" fill="#ffffff" />
            {/* Top tier needles & snow cap */}
            <polygon points="15.5,0 10,14 21,14" fill="#1f633d" />
            <path d="M 15.5 0 Q 14 6 10 14 Q 13 15 15.5 15 Q 18 15 21 14 Q 17 6 15.5 0 Z" fill="#ffffff" />
          </g>

          {/* Pine Tree 2 (Mid-right - Medium snow-capped pine) */}
          <g transform="translate(290, 26)">
            {/* Trunk */}
            <rect x="12.5" y="34" width="3" height="10" fill="#3b2314" />
            {/* Lower tier */}
            <polygon points="14,12 3,34 25,34" fill="#144229" />
            <path d="M 3 34 Q 8 30 14 31 Q 20 30 25 34 Q 21 37 14 36 Q 7 37 3 34 Z" fill="#ffffff" />
            {/* Top tier */}
            <polygon points="14,0 7,18 21,18" fill="#1e5f3a" />
            <path d="M 14 0 Q 12 6 7 18 Q 11 19 14 19 Q 17 19 21 18 Q 16 6 14 0 Z" fill="#ffffff" />
          </g>

          {/* Pine Tree 3 (Cute baby pine near center) */}
          <g transform="translate(175, 36) scale(0.75)">
            <rect x="12" y="24" width="2.5" height="8" fill="#3b2314" />
            <polygon points="13,0 4,24 22,24" fill="#1a4f32" />
            <path d="M 4 24 Q 9 20 13 21 Q 17 20 22 24 Q 18 26 13 26 Q 8 26 4 24 Z" fill="#ffffff" />
            <circle cx="13" cy="2" r="2.5" fill="#ffffff" />
          </g>

          {/* Foreground rolling pristine white snowdrifts */}
          <path d="M 0 58 Q 80 48 160 55 Q 260 45 340 52 Q 380 49 400 53 L 400 80 L 0 80 Z" fill="url(#snowFront)" />

          {/* Subtle ice sparkles on the snow */}
          <circle cx="110" cy="62" r="1" fill="#38bdf8" opacity="0.8" />
          <circle cx="230" cy="58" r="1.2" fill="#ffffff" opacity="0.9" />
          <circle cx="370" cy="60" r="0.9" fill="#38bdf8" opacity="0.8" />
        </svg>
      </div>
    );
  }

  // 3. EASTER: Lush spring blooming knolls, painted eggs & chamomile flowers
  if (themeId === 'easter') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-3">
        <svg
          className="w-full h-16 sm:h-20"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="easterBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3824" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0d1f14" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="easterFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#244d32" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#132b1c" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Distant spring hill */}
          <path d="M 0 50 Q 110 38 220 45 Q 310 36 400 44 L 400 80 L 0 80 Z" fill="url(#easterBack)" />

          {/* Fluffy Pussy Willow sprig (верба) on the left */}
          <g transform="translate(45, 30)">
            <path d="M 0 35 Q 8 20 15 5" stroke="#4a301a" strokeWidth="1.2" fill="none" />
            {/* Silvery catkins */}
            <ellipse cx="6" cy="24" rx="2.5" ry="4" fill="#f1f5f9" transform="rotate(-30 6 24)" />
            <ellipse cx="11" cy="14" rx="2.5" ry="4" fill="#f1f5f9" transform="rotate(25 11 14)" />
            <ellipse cx="15" cy="5" rx="2.5" ry="3.5" fill="#f1f5f9" transform="rotate(10 15 5)" />
          </g>

          {/* Foreground rolling green meadow */}
          <path d="M 0 58 Q 120 47 240 55 Q 330 49 400 52 L 400 80 L 0 80 Z" fill="url(#easterFront)" />

          {/* Painted Easter Egg 1 (Warm Gold & Amber Chevron) */}
          <g transform="translate(95, 48) rotate(-15)">
            <ellipse cx="7" cy="9" rx="6" ry="8" fill="#d97706" />
            <path d="M 2 7 Q 7 9 12 7" stroke="#fef3c7" strokeWidth="1" fill="none" />
            <path d="M 2 11 Q 7 13 12 11" stroke="#fef3c7" strokeWidth="1" fill="none" />
            <circle cx="7" cy="5" r="1" fill="#fef3c7" />
          </g>

          {/* Painted Easter Egg 2 (Spring Lilac / Rose Pastel) */}
          <g transform="translate(290, 47) rotate(18)">
            <ellipse cx="6.5" cy="8.5" rx="5.5" ry="7.5" fill="#0284c7" />
            <path d="M 2 6 Q 6.5 8 11 6" stroke="#e0f2fe" strokeWidth="0.9" fill="none" />
            <path d="M 2 10 Q 6.5 12 11 10" stroke="#e0f2fe" strokeWidth="0.9" fill="none" />
            <circle cx="6.5" cy="4" r="0.9" fill="#e0f2fe" />
          </g>

          {/* Blooming Spring Chamomile Flowers in the grass */}
          <g transform="translate(180, 52)">
            {/* Chamomile 1 */}
            <circle cx="5" cy="5" r="2" fill="#fbbf24" />
            <circle cx="5" cy="1.5" r="1.5" fill="#ffffff" />
            <circle cx="5" cy="8.5" r="1.5" fill="#ffffff" />
            <circle cx="1.5" cy="5" r="1.5" fill="#ffffff" />
            <circle cx="8.5" cy="5" r="1.5" fill="#ffffff" />
          </g>

          <g transform="translate(230, 54) scale(0.8)">
            <circle cx="5" cy="5" r="2" fill="#fbbf24" />
            <circle cx="5" cy="1.5" r="1.5" fill="#ffffff" />
            <circle cx="5" cy="8.5" r="1.5" fill="#ffffff" />
            <circle cx="1.5" cy="5" r="1.5" fill="#ffffff" />
            <circle cx="8.5" cy="5" r="1.5" fill="#ffffff" />
          </g>
        </svg>
      </div>
    );
  }

  // 4. SUMMER: Warm beach sand dunes, turquoise foam shoreline wave & seashells
  if (themeId === 'summer') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-3">
        <svg
          className="w-full h-16 sm:h-20"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Warm beach sand gradients */}
            <linearGradient id="sandBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#452a16" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2e1b0d" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="sandFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5c381d" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#3d2311" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Distant warm dune */}
          <path d="M 0 48 Q 120 36 240 44 Q 330 35 400 42 L 400 80 L 0 80 Z" fill="url(#sandBack)" />

          {/* Foaming ocean wave crest (turquoise & seafoam white) */}
          <path
            d="M 0 54 Q 70 47 140 51 Q 220 46 300 52 Q 360 48 400 51 L 400 80 L 0 80 Z"
            fill="#0284c7"
            opacity="0.35"
          />
          <path
            d="M 0 55 Q 70 48 140 52 Q 220 47 300 53 Q 360 49 400 52"
            stroke="#bae6fd"
            strokeWidth="1.2"
            fill="none"
            opacity="0.75"
          />

          {/* Foreground beach sand */}
          <path d="M 0 59 Q 100 50 210 56 Q 310 49 400 54 L 400 80 L 0 80 Z" fill="url(#sandFront)" />

          {/* Scallop Seashell on the sand (left) */}
          <g transform="translate(80, 56) scale(0.9)">
            <path d="M 2 8 Q 8 2 14 8 Z" fill="#fed7aa" />
            <path d="M 8 2 L 8 8 M 5 4 L 7 8 M 11 4 L 9 8" stroke="#ea580c" strokeWidth="0.6" />
          </g>

          {/* Starfish basking near shoreline (right) */}
          <g transform="translate(310, 54) scale(0.85)">
            <polygon
              points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6"
              fill="#f97316"
              stroke="#ea580c"
              strokeWidth="0.6"
            />
          </g>

          {/* Gentle beach dune grass shoot */}
          <path d="M 190 60 Q 186 52 182 48 M 191 60 Q 192 50 196 46" stroke="#ca8a04" strokeWidth="0.9" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // 5. VALENTINE: Romantic velvet midnight rose vines & ruby hearts
  if (themeId === 'valentines') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-3">
        <svg
          className="w-full h-16 sm:h-20"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="valBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2b0d18" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#17050d" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="valFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3d1323" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1f0711" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Distant velvet knoll */}
          <path d="M 0 50 Q 130 40 260 46 Q 340 40 400 44 L 400 80 L 0 80 Z" fill="url(#valBack)" />

          {/* Rose vines with thorns */}
          <path d="M 40 60 Q 70 46 110 52 Q 150 58 190 48" stroke="#4c1d2e" strokeWidth="1.2" fill="none" />
          <path d="M 220 54 Q 270 44 320 50 Q 360 54 390 48" stroke="#4c1d2e" strokeWidth="1.2" fill="none" />

          {/* Foreground velvet ground */}
          <path d="M 0 58 Q 110 50 220 55 Q 320 48 400 53 L 400 80 L 0 80 Z" fill="url(#valFront)" />

          {/* Crimson Rose 1 */}
          <g transform="translate(100, 48) scale(0.9)">
            <circle cx="6" cy="6" r="4.5" fill="#9f1239" />
            <circle cx="6" cy="6" r="3" fill="#be123c" />
            <circle cx="6" cy="6" r="1.5" fill="#f43f5e" />
          </g>

          {/* Crimson Rose 2 */}
          <g transform="translate(280, 47) scale(0.85)">
            <circle cx="6" cy="6" r="4.5" fill="#9f1239" />
            <circle cx="6" cy="6" r="3" fill="#be123c" />
            <circle cx="6" cy="6" r="1.5" fill="#f43f5e" />
          </g>

          {/* Ruby Heart nestled gently in the briar */}
          <g transform="translate(195, 50) scale(0.85)">
            <path
              d="M 6 3 Q 6 1 4 1 Q 1 1 1 4 Q 1 7 6 10 Q 11 7 11 4 Q 11 1 8 1 Q 6 1 6 3 Z"
              fill="#e11d48"
              filter="drop-shadow(0 0 4px rgba(244,63,94,0.6))"
            />
          </g>
        </svg>
      </div>
    );
  }

  // 6. NOIR / CLASSIC: Sleek sartorial stitch line & artisan measuring ribbon contour
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-3">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
    </div>
  );
}
