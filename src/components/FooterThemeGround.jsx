import React from 'react';

export function FooterThemeGround({ themeId }) {
  // 1. HALLOWEEN: Deep dark midnight-blue earthy ground with silhouette tombstones, skulls & grass
  if (themeId === 'halloween') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
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

  // 2. NEW YEAR / WINTER: Crisp Scandinavian moonlit snowdrifts with snow-capped pine trees standing IN THE FOREGROUND
  if (themeId === 'newyear') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-18 sm:h-22"
          viewBox="0 0 400 85"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Background moonlit snow drift */}
            <linearGradient id="winterDriftBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#101d30" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#080e18" stopOpacity="0.95" />
            </linearGradient>

            {/* Midground soft snow drift */}
            <linearGradient id="winterDriftMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#172b44" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0b1522" stopOpacity="0.98" />
            </linearGradient>
          </defs>

          {/* Distant rolling snowdrift */}
          <path d="M 0 54 Q 100 42 210 48 Q 310 38 400 45 L 400 85 L 0 85 Z" fill="url(#winterDriftBack)" />
          <path d="M 0 54 Q 100 42 210 48 Q 310 38 400 45" fill="none" stroke="#7dd3fc" strokeWidth="0.8" strokeOpacity="0.25" />

          {/* Foreground rolling snowdrift (Drawn BEFORE the trees, so trees stand proudly in front) */}
          <path d="M 0 62 Q 90 52 180 58 Q 280 48 400 56 L 400 85 L 0 85 Z" fill="url(#winterDriftMid)" />
          <path d="M 0 62 Q 90 52 180 58 Q 280 48 400 56" fill="none" stroke="#bae6fd" strokeWidth="0.9" strokeOpacity="0.35" />

          {/* Pine Tree 1 (Left - Noble 4-Tier Evergreen Pine standing proud in front) */}
          <g transform="translate(48, 16)">
            {/* Trunk */}
            <rect x="14" y="44" width="3.5" height="12" fill="#261710" />
            <ellipse cx="15.5" cy="56" rx="9" ry="2.5" fill="#0b1522" opacity="0.6" />

            {/* Tier 4 (Bottom) */}
            <polygon points="15.5,18 3,46 28,46" fill="#0d3520" />
            <path d="M 3 46 Q 9 41 15.5 42 Q 22 41 28 46 Q 24 49 15.5 48 Q 7 49 3 46 Z" fill="#e2e8f0" />

            {/* Tier 3 */}
            <polygon points="15.5,10 6,34 25,34" fill="#114228" />
            <path d="M 6 34 Q 11 29 15.5 30 Q 20 29 25 34 Q 21 37 15.5 36 Q 10 37 6 34 Z" fill="#edf2f7" />

            {/* Tier 2 */}
            <polygon points="15.5,3 9,23 22,23" fill="#165132" />
            <path d="M 9 23 Q 12 19 15.5 20 Q 19 19 22 23 Q 19 25 15.5 25 Q 12 25 9 23 Z" fill="#f7fafc" />

            {/* Tier 1 (Top cap) */}
            <polygon points="15.5,0 12,12 19,12" fill="#1b5e3a" />
            <path d="M 15.5 0 Q 13.5 5 12 12 Q 15.5 13 19 12 Q 17.5 5 15.5 0 Z" fill="#ffffff" />
          </g>

          {/* Pine Tree 2 (Mid-right - Medium 3-Tier Pine in front) */}
          <g transform="translate(285, 24)">
            <rect x="12" y="38" width="3" height="10" fill="#261710" />
            <ellipse cx="13.5" cy="48" rx="8" ry="2" fill="#0b1522" opacity="0.6" />

            {/* Tier 3 */}
            <polygon points="13.5,14 3,38 24,38" fill="#0e3822" />
            <path d="M 3 38 Q 8 33 13.5 34 Q 19 33 24 38 Q 20 41 13.5 40 Q 7 41 3 38 Z" fill="#e2e8f0" />

            {/* Tier 2 */}
            <polygon points="13.5,6 6,26 21,26" fill="#12442a" />
            <path d="M 6 26 Q 10 22 13.5 23 Q 17 22 21 26 Q 18 28 13.5 28 Q 9 28 6 26 Z" fill="#edf2f7" />

            {/* Top cap */}
            <polygon points="13.5,0 9,14 18,14" fill="#175233" />
            <path d="M 13.5 0 Q 11 5 9 14 Q 13.5 15 18 14 Q 16 5 13.5 0 Z" fill="#ffffff" />
          </g>

          {/* Pine Tree 3 (Center-left - Charming compact pine) */}
          <g transform="translate(170, 34) scale(0.85)">
            <rect x="10" y="28" width="2.5" height="8" fill="#261710" />
            <ellipse cx="11.2" cy="36" rx="6" ry="1.8" fill="#0b1522" opacity="0.5" />

            <polygon points="11.2,10 2,28 20.4,28" fill="#113f27" />
            <path d="M 2 28 Q 6.6 24 11.2 25 Q 15.8 24 20.4 28 Q 17 30 11.2 29.5 Q 5.4 30 2 28 Z" fill="#e2e8f0" />

            <polygon points="11.2,0 5,17 17.4,17" fill="#165132" />
            <path d="M 11.2 0 Q 9 6 5 17 Q 11.2 18 17.4 17 Q 13.4 6 11.2 0 Z" fill="#ffffff" />
          </g>

          {/* Tiny sparkling ice crystals in the snow */}
          <circle cx="120" cy="68" r="1" fill="#7dd3fc" opacity="0.75" />
          <circle cx="230" cy="64" r="1.2" fill="#ffffff" opacity="0.85" />
          <circle cx="360" cy="67" r="0.9" fill="#7dd3fc" opacity="0.75" />
        </svg>
      </div>
    );
  }

  // 3. EASTER: Festive spring scene with traditional woven Easter basket with eggs, pussy willow (верба) & flowers
  if (themeId === 'easter') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-18 sm:h-22"
          viewBox="0 0 400 85"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="easterBackHill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#142e1d" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0b1a10" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="easterFrontHill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c422a" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#0f2417" stopOpacity="0.98" />
            </linearGradient>
          </defs>

          {/* Distant soft grassy hill */}
          <path d="M 0 52 Q 100 38 210 46 Q 310 36 400 44 L 400 85 L 0 85 Z" fill="url(#easterBackHill)" />

          {/* Rustic decorative wooden garden fence on right */}
          <g transform="translate(355, 36) opacity-65">
            <rect x="0" y="4" width="3" height="24" fill="#3b2314" />
            <polygon points="1.5,0 0,4 3,4" fill="#3b2314" />
            <rect x="12" y="4" width="3" height="24" fill="#3b2314" />
            <polygon points="13.5,0 12,4 15,4" fill="#3b2314" />
            <rect x="24" y="4" width="3" height="24" fill="#3b2314" />
            <polygon points="25.5,0 24,4 27,4" fill="#3b2314" />
            <rect x="-2" y="8" width="30" height="2" fill="#4a2c19" />
            <rect x="-2" y="16" width="30" height="2" fill="#4a2c19" />
          </g>

          {/* Tall Pussy Willow Sprig (Верба) on far left */}
          <g transform="translate(30, 24)">
            <path d="M 0 44 Q 10 24 20 6" stroke="#543820" strokeWidth="1.3" fill="none" />
            {/* Silvery-white catkins with warm base */}
            <ellipse cx="6" cy="32" rx="2.5" ry="4" fill="#f1f5f9" transform="rotate(-30 6 32)" />
            <ellipse cx="12" cy="20" rx="2.5" ry="4" fill="#f1f5f9" transform="rotate(25 12 20)" />
            <ellipse cx="17" cy="10" rx="2.3" ry="3.8" fill="#f1f5f9" transform="rotate(-15 17 10)" />
            <ellipse cx="20" cy="5" rx="2" ry="3.2" fill="#ffffff" transform="rotate(10 20 5)" />
          </g>

          {/* Foreground rolling spring meadow */}
          <path d="M 0 58 Q 110 47 220 55 Q 320 48 400 53 L 400 85 L 0 85 Z" fill="url(#easterFrontHill)" />
          <path d="M 0 58 Q 110 47 220 55 Q 320 48 400 53" fill="none" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.25" />

          {/* Authentic Wicker Easter Basket overflowing with painted eggs (Center-Left) */}
          <g transform="translate(135, 38)">
            {/* Basket Handle */}
            <path d="M 7 24 Q 18 2 29 24" stroke="#92400e" strokeWidth="2.5" fill="none" />
            <path d="M 7 24 Q 18 2 29 24" stroke="#b45309" strokeWidth="1.2" fill="none" />
            {/* Satin Ribbon Bow at top of handle */}
            <g transform="translate(18, 5) scale(0.8)">
              <circle cx="0" cy="0" r="2" fill="#fb7185" />
              <path d="M 0 0 C -4 -4 -6 0 -2 2 Z" fill="#f43f5e" />
              <path d="M 0 0 C 4 -4 6 0 2 2 Z" fill="#f43f5e" />
              <path d="M 0 0 L -3 5 M 0 0 L 3 5" stroke="#f43f5e" strokeWidth="1" />
            </g>

            {/* Eggs peeking from basket rim */}
            {/* Egg 1 (Golden yellow) */}
            <ellipse cx="12" cy="22" rx="4.5" ry="6" fill="#f59e0b" transform="rotate(-20 12 22)" />
            <circle cx="12" cy="20" r="0.8" fill="#fef3c7" />
            {/* Egg 2 (Pastel lilac) */}
            <ellipse cx="24" cy="22" rx="4.5" ry="6" fill="#c084fc" transform="rotate(22 24 22)" />
            <path d="M 21 21 Q 24 23 27 21" stroke="#f3e8ff" strokeWidth="0.8" fill="none" />
            {/* Egg 3 (Turquoise center) */}
            <ellipse cx="18" cy="19" rx="5" ry="6.5" fill="#06b6d4" />
            <path d="M 14 19 Q 18 21 22 19" stroke="#cffafe" strokeWidth="0.8" fill="none" />

            {/* Wicker Basket Body */}
            <path d="M 4 23 L 7 40 Q 18 43 29 40 L 32 23 Z" fill="#78350f" />
            {/* Wicker Weave Texture */}
            <path d="M 5 28 Q 18 31 31 28" stroke="#b45309" strokeWidth="1" fill="none" />
            <path d="M 6 34 Q 18 37 30 34" stroke="#b45309" strokeWidth="1" fill="none" />
            <line x1="12" y1="24" x2="13" y2="41" stroke="#92400e" strokeWidth="0.9" />
            <line x1="18" y1="24" x2="18" y2="42" stroke="#92400e" strokeWidth="0.9" />
            <line x1="24" y1="24" x2="23" y2="41" stroke="#92400e" strokeWidth="0.9" />
            {/* Basket Rim */}
            <ellipse cx="18" cy="23" rx="14" ry="2.5" fill="#92400e" stroke="#b45309" strokeWidth="1" />
          </g>

          {/* Large Decorated Egg 1 resting on the grass (Left) */}
          <g transform="translate(85, 52) rotate(-18)">
            <ellipse cx="7" cy="9" rx="6" ry="8.5" fill="#d97706" />
            <path d="M 1.5 7 Q 7 9.5 12.5 7" stroke="#fef3c7" strokeWidth="1.1" fill="none" />
            <path d="M 1.5 11 Q 7 13.5 12.5 11" stroke="#fef3c7" strokeWidth="1.1" fill="none" />
            <circle cx="7" cy="5" r="1.1" fill="#fef3c7" />
          </g>

          {/* Decorated Egg 2 (Ruby rose with gold dots, right of basket) */}
          <g transform="translate(205, 54) rotate(15)">
            <ellipse cx="6" cy="8" rx="5.5" ry="7.5" fill="#be123c" />
            <circle cx="6" cy="5" r="1" fill="#fde047" />
            <circle cx="4" cy="8" r="0.9" fill="#fde047" />
            <circle cx="8" cy="8" r="0.9" fill="#fde047" />
            <circle cx="6" cy="11" r="1" fill="#fde047" />
          </g>

          {/* Decorated Egg 3 (Spring emerald green, near right) */}
          <g transform="translate(290, 52) rotate(-12)">
            <ellipse cx="6" cy="8" rx="5.5" ry="7.5" fill="#047857" />
            <path d="M 1.5 6 Q 6 8.5 10.5 6" stroke="#a7f3d0" strokeWidth="1" fill="none" />
            <path d="M 1.5 10 Q 6 12.5 10.5 10" stroke="#a7f3d0" strokeWidth="1" fill="none" />
          </g>

          {/* Blooming Spring Chamomile Flowers in the grass */}
          <g transform="translate(245, 56) scale(0.9)">
            <circle cx="5" cy="5" r="2" fill="#fbbf24" />
            <circle cx="5" cy="1.5" r="1.5" fill="#ffffff" />
            <circle cx="5" cy="8.5" r="1.5" fill="#ffffff" />
            <circle cx="1.5" cy="5" r="1.5" fill="#ffffff" />
            <circle cx="8.5" cy="5" r="1.5" fill="#ffffff" />
          </g>

          {/* Nodding Snowdrop flower */}
          <g transform="translate(115, 50)">
            <path d="M 0 16 Q 4 6 8 4" stroke="#4ade80" strokeWidth="1" fill="none" />
            <ellipse cx="9" cy="7" rx="2" ry="3" fill="#ffffff" transform="rotate(30 9 7)" />
          </g>
        </svg>
      </div>
    );
  }

  // 4. SUMMER: Clean aesthetic twilight dunes & ocean water ripple lines (Reverted from muddy tones to sleek luxury look)
  if (themeId === 'summer') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-16 sm:h-18"
          viewBox="0 0 400 70"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="summerDuneBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1215" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0d080a" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="summerDuneFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#24171c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#120a0d" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Distant soft dune ridge */}
          <path d="M 0 46 Q 120 34 240 42 Q 330 32 400 40 L 400 70 L 0 70 Z" fill="url(#summerDuneBack)" />
          <path d="M 0 46 Q 120 34 240 42 Q 330 32 400 40" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.25" />

          {/* Foreground rolling sleek dune */}
          <path d="M 0 54 Q 100 44 210 51 Q 320 43 400 49 L 400 70 L 0 70 Z" fill="url(#summerDuneFront)" />
          <path d="M 0 54 Q 100 44 210 51 Q 320 43 400 49" fill="none" stroke="#f59e0b" strokeWidth="0.9" strokeOpacity="0.4" />

          {/* Calm, serene ocean water ripple lines */}
          <path d="M 50 58 Q 110 55 170 58" stroke="#38bdf8" strokeWidth="0.8" fill="none" opacity="0.45" />
          <path d="M 70 62 Q 130 59 190 62" stroke="#38bdf8" strokeWidth="0.7" fill="none" opacity="0.3" />
          <path d="M 230 56 Q 290 53 350 56" stroke="#38bdf8" strokeWidth="0.8" fill="none" opacity="0.45" />
          <path d="M 250 60 Q 310 57 370 60" stroke="#38bdf8" strokeWidth="0.7" fill="none" opacity="0.3" />

          {/* Delicate sleek scallop shell silhouette */}
          <g transform="translate(195, 54) scale(0.75)" opacity="0.6">
            <path d="M 2 8 Q 8 2 14 8 Z" fill="#d97706" />
            <path d="M 8 2 L 8 8 M 5 4 L 7 8 M 11 4 L 9 8" stroke="#fef3c7" strokeWidth="0.7" />
          </g>
        </svg>
      </div>
    );
  }

  // 5. VALENTINE: Symmetrical, elegant romantic rose briar vines, velvet blooms & ruby hearts
  if (themeId === 'valentines') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
        <svg
          className="w-full h-16 sm:h-20"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="valBackGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#260b17" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#12030a" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="valFrontGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#350f20" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#17040d" stopOpacity="0.98" />
            </linearGradient>
            <filter id="rubyGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f43f5e" floodOpacity="0.7" />
            </filter>
          </defs>

          {/* Distant velvet knoll */}
          <path d="M 0 50 Q 130 38 260 45 Q 340 38 400 44 L 400 80 L 0 80 Z" fill="url(#valBackGradient)" />

          {/* Graceful Rose Briar Vines with Thorns */}
          <path d="M 20 62 Q 70 46 130 52 Q 190 58 250 48 Q 310 40 380 58" stroke="#881337" strokeWidth="1.4" fill="none" />
          {/* Subtle thorns */}
          <path d="M 60 52 L 58 48 M 110 51 L 112 47 M 220 54 L 219 50 M 280 44 L 282 40 M 340 48 L 342 44" stroke="#881337" strokeWidth="1.2" strokeLinecap="round" />

          {/* Foreground velvet ground */}
          <path d="M 0 58 Q 100 48 200 54 Q 300 48 400 53 L 400 80 L 0 80 Z" fill="url(#valFrontGradient)" />
          <path d="M 0 58 Q 100 48 200 54 Q 300 48 400 53" fill="none" stroke="#fb7185" strokeWidth="0.8" strokeOpacity="0.3" />

          {/* Rose 1 (Left - Rich Tudor Rose Bloom) */}
          <g transform="translate(85, 46) scale(0.95)">
            <circle cx="7" cy="7" r="6" fill="#881337" />
            <circle cx="7" cy="7" r="4.2" fill="#be123c" />
            <circle cx="7" cy="7" r="2.5" fill="#e11d48" />
            <circle cx="7" cy="7" r="1.2" fill="#fb7185" />
          </g>

          {/* Rose 2 (Right - Rich Tudor Rose Bloom) */}
          <g transform="translate(295, 45) scale(0.95)">
            <circle cx="7" cy="7" r="6" fill="#881337" />
            <circle cx="7" cy="7" r="4.2" fill="#be123c" />
            <circle cx="7" cy="7" r="2.5" fill="#e11d48" />
            <circle cx="7" cy="7" r="1.2" fill="#fb7185" />
          </g>

          {/* Rose 3 (Center - Elegant Bud) */}
          <g transform="translate(195, 50) scale(0.85)">
            <circle cx="6" cy="6" r="4.5" fill="#881337" />
            <circle cx="6" cy="6" r="2.8" fill="#e11d48" />
            <circle cx="6" cy="6" r="1.2" fill="#fb7185" />
          </g>

          {/* Ruby Gemstone Hearts suspended on the briar */}
          <g transform="translate(145, 48) scale(0.9)" filter="url(#rubyGlow)">
            <path
              d="M 6 3 Q 6 1 4 1 Q 1 1 1 4 Q 1 7 6 10 Q 11 7 11 4 Q 11 1 8 1 Q 6 1 6 3 Z"
              fill="#e11d48"
            />
          </g>

          <g transform="translate(245, 46) scale(0.85)" filter="url(#rubyGlow)">
            <path
              d="M 6 3 Q 6 1 4 1 Q 1 1 1 4 Q 1 7 6 10 Q 11 7 11 4 Q 11 1 8 1 Q 6 1 6 3 Z"
              fill="#e11d48"
            />
          </g>
        </svg>
      </div>
    );
  }

  // 6. NOIR / CLASSIC: Sleek sartorial stitch line
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1 mt-4">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
    </div>
  );
}
