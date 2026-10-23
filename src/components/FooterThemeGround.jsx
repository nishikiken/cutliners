import React from 'react';

export function FooterThemeGround({ themeId }) {
  // 1. HALLOWEEN: Deep dark midnight-blue earthy ground with silhouette tombstones, skulls & grass
  if (themeId === 'halloween') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <svg
          className="w-full h-18 sm:h-22 text-[#0d101a] opacity-90"
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

  // 2. NEW YEAR / WINTER: Real white snowdrifts & bright festive Christmas trees with holiday ornaments & golden star
  if (themeId === 'newyear') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <svg
          className="w-full h-20 sm:h-24"
          viewBox="0 0 400 85"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Pure white & soft frost snowdrifts */}
            <linearGradient id="pureSnowBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="pureSnowFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="45%" stopColor="#f1f5f9" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Distant soft white snowdrift */}
          <path d="M 0 52 Q 100 38 210 46 Q 310 36 400 44 L 400 85 L 0 85 Z" fill="url(#pureSnowBack)" />

          {/* Main Foreground Soft Pure White Snowdrift */}
          <path d="M 0 60 Q 80 50 170 56 Q 270 46 400 54 L 400 85 L 0 85 Z" fill="url(#pureSnowFront)" />
          <path d="M 0 60 Q 80 50 170 56 Q 270 46 400 54" fill="none" stroke="#cbd5e1" strokeWidth="1" />

          {/* Tree 1 (Left - Noble Festive Christmas Tree with Golden Star & Ornaments) */}
          <g transform="translate(50, 14)">
            {/* Tree Trunk */}
            <rect x="13.5" y="44" width="4" height="12" fill="#542e18" />
            {/* Snowy mound under tree */}
            <ellipse cx="15.5" cy="56" rx="11" ry="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />

            {/* Tier 4 (Bottom boughs) */}
            <polygon points="15.5,18 2,46 29,46" fill="#15803d" />
            <path d="M 2 46 Q 8 40 15.5 41 Q 23 40 29 46 Q 24 50 15.5 49 Q 7 50 2 46 Z" fill="#ffffff" />
            {/* Ornaments on Tier 4 */}
            <circle cx="8" cy="43" r="1.5" fill="#ef4444" />
            <circle cx="23" cy="43" r="1.5" fill="#38bdf8" />

            {/* Tier 3 */}
            <polygon points="15.5,10 5,34 26,34" fill="#16a34a" />
            <path d="M 5 34 Q 10 28 15.5 29 Q 21 28 26 34 Q 22 37 15.5 36 Q 9 37 5 34 Z" fill="#ffffff" />
            {/* Ornaments on Tier 3 */}
            <circle cx="11" cy="31" r="1.5" fill="#facc15" />
            <circle cx="20" cy="31" r="1.5" fill="#ef4444" />

            {/* Tier 2 */}
            <polygon points="15.5,3 8,23 23,23" fill="#22c55e" />
            <path d="M 8 23 Q 12 18 15.5 19 Q 19 18 23 23 Q 20 25 15.5 25 Q 11 25 8 23 Z" fill="#ffffff" />
            <circle cx="15.5" cy="20" r="1.3" fill="#38bdf8" />

            {/* Top Snow Cap */}
            <polygon points="15.5,0 11,12 20,12" fill="#16a34a" />
            <path d="M 15.5 0 Q 13 5 11 12 Q 15.5 13 20 12 Q 18 5 15.5 0 Z" fill="#ffffff" />

            {/* Golden Star at tree apex */}
            <polygon
              points="15.5,-3 16.5,-1 19,-1 17,0.5 18,3 15.5,1.5 13,3 14,0.5 12,-1 14.5,-1"
              fill="#facc15"
              stroke="#eab308"
              strokeWidth="0.5"
            />
          </g>

          {/* Tree 2 (Mid-right - Cozy Medium Christmas Tree) */}
          <g transform="translate(285, 22)">
            <rect x="12" y="38" width="3.5" height="10" fill="#542e18" />
            <ellipse cx="13.7" cy="48" rx="9" ry="2.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />

            {/* Tier 3 */}
            <polygon points="13.5,14 3,38 24,38" fill="#15803d" />
            <path d="M 3 38 Q 8 32 13.5 33 Q 19 32 24 38 Q 20 41 13.5 40 Q 7 41 3 38 Z" fill="#ffffff" />
            <circle cx="7" cy="35" r="1.4" fill="#facc15" />
            <circle cx="20" cy="35" r="1.4" fill="#ef4444" />

            {/* Tier 2 */}
            <polygon points="13.5,6 6,26 21,26" fill="#16a34a" />
            <path d="M 6 26 Q 10 21 13.5 22 Q 17 21 21 26 Q 18 28 13.5 28 Q 9 28 6 26 Z" fill="#ffffff" />
            <circle cx="14" cy="24" r="1.3" fill="#38bdf8" />

            {/* Top tier */}
            <polygon points="13.5,0 9,14 18,14" fill="#22c55e" />
            <path d="M 13.5 0 Q 11 5 9 14 Q 13.5 15 18 14 Q 16 5 13.5 0 Z" fill="#ffffff" />
            <circle cx="13.5" cy="-1" r="2" fill="#facc15" />
          </g>

          {/* Tree 3 (Center-left - Sweet small snow-covered pine) */}
          <g transform="translate(170, 32) scale(0.85)">
            <rect x="10" y="28" width="3" height="8" fill="#542e18" />
            <ellipse cx="11.5" cy="36" rx="7" ry="2" fill="#ffffff" />
            <polygon points="11.5,10 2,28 21,28" fill="#15803d" />
            <path d="M 2 28 Q 6.5 23 11.5 24 Q 16.5 23 21 28 Q 17 30 11.5 30 Q 6 30 2 28 Z" fill="#ffffff" />
            <polygon points="11.5,0 5,17 18,17" fill="#16a34a" />
            <path d="M 11.5 0 Q 9 5 5 17 Q 11.5 18 18 17 Q 14 5 11.5 0 Z" fill="#ffffff" />
            <circle cx="11.5" cy="-1" r="1.8" fill="#ef4444" />
          </g>

          {/* Clean snow sparkles */}
          <circle cx="120" cy="68" r="1.3" fill="#38bdf8" />
          <circle cx="230" cy="64" r="1.5" fill="#facc15" />
          <circle cx="360" cy="66" r="1.3" fill="#38bdf8" />
        </svg>
      </div>
    );
  }

  // 3. EASTER: Harmonious festive scene with traditional Easter basket, neatly placed painted eggs & chamomile flowers
  if (themeId === 'easter') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <svg
          className="w-full h-20 sm:h-24"
          viewBox="0 0 400 85"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="easterLawnBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e5430" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#11331c" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="easterLawnFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#226b3c" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#144224" stopOpacity="0.98" />
            </linearGradient>
          </defs>

          {/* Distant soft green knoll */}
          <path d="M 0 52 Q 100 40 210 46 Q 310 38 400 45 L 400 85 L 0 85 Z" fill="url(#easterLawnBack)" />

          {/* Foreground rolling fresh green meadow */}
          <path d="M 0 58 Q 110 48 210 54 Q 310 46 400 52 L 400 85 L 0 85 Z" fill="url(#easterLawnFront)" />
          <path d="M 0 58 Q 110 48 210 54 Q 310 46 400 52" fill="none" stroke="#4ade80" strokeWidth="0.8" strokeOpacity="0.3" />

          {/* Centerpiece: Charming Wicker Easter Basket neatly sitting on the grass (Center) */}
          <g transform="translate(180, 36)">
            {/* Basket Handle */}
            <path d="M 7 24 Q 20 2 33 24" stroke="#92400e" strokeWidth="2.8" fill="none" />
            <path d="M 7 24 Q 20 2 33 24" stroke="#d97706" strokeWidth="1.2" fill="none" />
            {/* Pink Satin Ribbon Bow at handle apex */}
            <g transform="translate(20, 5) scale(0.9)">
              <circle cx="0" cy="0" r="2.2" fill="#fb7185" />
              <path d="M 0 0 C -4 -4 -7 0 -2 2.5 Z" fill="#f43f5e" />
              <path d="M 0 0 C 4 -4 7 0 2 2.5 Z" fill="#f43f5e" />
              <path d="M 0 0 L -3 6 M 0 0 L 3 6" stroke="#f43f5e" strokeWidth="1.2" />
            </g>

            {/* 3 Eggs peeking out from the basket */}
            {/* Egg 1 (Golden yellow with dots) */}
            <ellipse cx="13" cy="22" rx="5" ry="6.5" fill="#f59e0b" transform="rotate(-18 13 22)" />
            <circle cx="13" cy="20" r="1" fill="#fef3c7" />
            {/* Egg 2 (Lilac with stripe) */}
            <ellipse cx="27" cy="22" rx="5" ry="6.5" fill="#c084fc" transform="rotate(18 27 22)" />
            <path d="M 23 21 Q 27 23 31 21" stroke="#f3e8ff" strokeWidth="1" fill="none" />
            {/* Egg 3 (Sky blue centerpiece) */}
            <ellipse cx="20" cy="19" rx="5.5" ry="7" fill="#06b6d4" />
            <path d="M 16 19 Q 20 21 24 19" stroke="#cffafe" strokeWidth="1" fill="none" />

            {/* Wicker Basket Body */}
            <path d="M 4 23 L 7 42 Q 20 45 33 42 L 36 23 Z" fill="#78350f" />
            <path d="M 5 29 Q 20 32 35 29" stroke="#b45309" strokeWidth="1.2" fill="none" />
            <path d="M 6 35 Q 20 38 34 35" stroke="#b45309" strokeWidth="1.2" fill="none" />
            <line x1="13" y1="24" x2="14" y2="43" stroke="#92400e" strokeWidth="1" />
            <line x1="20" y1="24" x2="20" y2="44" stroke="#92400e" strokeWidth="1" />
            <line x1="27" y1="24" x2="26" y2="43" stroke="#92400e" strokeWidth="1" />
            <ellipse cx="20" cy="23" rx="16" ry="3" fill="#92400e" stroke="#d97706" strokeWidth="1" />
          </g>

          {/* Left Pair of Painted Eggs neatly nested in the grass */}
          <g transform="translate(85, 52)">
            {/* Golden chevron egg */}
            <g rotate="-15">
              <ellipse cx="8" cy="10" rx="6.5" ry="9" fill="#d97706" />
              <path d="M 2 8 Q 8 10.5 14 8" stroke="#fef3c7" strokeWidth="1.2" fill="none" />
              <path d="M 2 12 Q 8 14.5 14 12" stroke="#fef3c7" strokeWidth="1.2" fill="none" />
              <circle cx="8" cy="6" r="1.2" fill="#fef3c7" />
            </g>
            {/* Coral pink egg nestled beside it */}
            <g transform="translate(15, 2) rotate(12)">
              <ellipse cx="7" cy="9" rx="5.5" ry="7.5" fill="#f43f5e" />
              <circle cx="7" cy="6" r="1.2" fill="#fde047" />
              <circle cx="5" cy="10" r="1" fill="#fde047" />
              <circle cx="9" cy="10" r="1" fill="#fde047" />
            </g>
          </g>

          {/* Right Pair of Painted Eggs neatly nested in the grass */}
          <g transform="translate(285, 52)">
            {/* Spring Emerald Egg */}
            <g rotate="-10">
              <ellipse cx="7" cy="9" rx="6" ry="8.5" fill="#059669" />
              <path d="M 2 7 Q 7 9.5 12 7" stroke="#a7f3d0" strokeWidth="1.2" fill="none" />
              <path d="M 2 11 Q 7 13.5 12 11" stroke="#a7f3d0" strokeWidth="1.2" fill="none" />
            </g>
            {/* Ruby Rose Egg nestled beside it */}
            <g transform="translate(14, 1) rotate(16)">
              <ellipse cx="6.5" cy="8.5" rx="5.5" ry="7.5" fill="#be123c" />
              <circle cx="6.5" cy="5" r="1.1" fill="#fde047" />
              <circle cx="4" cy="9" r="1" fill="#fde047" />
              <circle cx="9" cy="9" r="1" fill="#fde047" />
            </g>
          </g>

          {/* Neatly blooming spring chamomiles around the basket */}
          <g transform="translate(140, 54)">
            <circle cx="5" cy="5" r="2" fill="#fbbf24" />
            <circle cx="5" cy="1.5" r="1.6" fill="#ffffff" />
            <circle cx="5" cy="8.5" r="1.6" fill="#ffffff" />
            <circle cx="1.5" cy="5" r="1.6" fill="#ffffff" />
            <circle cx="8.5" cy="5" r="1.6" fill="#ffffff" />
          </g>

          <g transform="translate(245, 55) scale(0.9)">
            <circle cx="5" cy="5" r="2" fill="#fbbf24" />
            <circle cx="5" cy="1.5" r="1.6" fill="#ffffff" />
            <circle cx="5" cy="8.5" r="1.6" fill="#ffffff" />
            <circle cx="1.5" cy="5" r="1.6" fill="#ffffff" />
            <circle cx="8.5" cy="5" r="1.6" fill="#ffffff" />
          </g>
        </svg>
      </div>
    );
  }

  // 4. SUMMER: Real golden yellow sand beach, clear turquoise seafoam waves & seashells (NO mud!)
  if (themeId === 'summer') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <svg
          className="w-full h-20 sm:h-24"
          viewBox="0 0 400 85"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Genuine sunny warm yellow sand gradients */}
            <linearGradient id="yellowSandBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="yellowSandFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.98" />
              <stop offset="35%" stopColor="#facc15" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Distant warm yellow sand dune */}
          <path d="M 0 50 Q 110 38 220 46 Q 320 36 400 44 L 400 85 L 0 85 Z" fill="url(#yellowSandBack)" />

          {/* Gentle, clear turquoise ocean wave washing upon the shore */}
          <path
            d="M 0 54 Q 80 47 160 52 Q 260 46 340 52 Q 380 48 400 51 L 400 85 L 0 85 Z"
            fill="#0284c7"
            opacity="0.4"
          />
          {/* Foaming white wave crest */}
          <path
            d="M 0 55 Q 80 48 160 53 Q 260 47 340 53 Q 380 49 400 52"
            stroke="#f0f9ff"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Foreground Radiant Yellow Sand Beach */}
          <path d="M 0 59 Q 100 50 200 56 Q 300 48 400 54 L 400 85 L 0 85 Z" fill="url(#yellowSandFront)" />
          <path d="M 0 59 Q 100 50 200 56 Q 300 48 400 54" fill="none" stroke="#ca8a04" strokeWidth="0.8" />

          {/* Scallop Seashell 1 (Left - Pearl & Coral) */}
          <g transform="translate(75, 56) scale(1.1)">
            <path d="M 2 9 Q 8 1 14 9 Z" fill="#ffedd5" stroke="#ea580c" strokeWidth="0.7" />
            <path d="M 8 1 L 8 9 M 5 4 L 7 9 M 11 4 L 9 9" stroke="#ea580c" strokeWidth="0.7" />
          </g>

          {/* Spiral Nautilus Shell (Center) */}
          <g transform="translate(195, 58) scale(0.95)">
            <ellipse cx="6" cy="5" rx="5.5" ry="4" fill="#fef9c3" stroke="#d97706" strokeWidth="0.7" />
            <path d="M 3 5 Q 6 2 9 5 Q 7 7 5 5" stroke="#d97706" strokeWidth="0.7" fill="none" />
          </g>

          {/* Scallop Seashell 2 (Right) */}
          <g transform="translate(325, 56) scale(0.95)">
            <path d="M 2 9 Q 8 1 14 9 Z" fill="#ffedd5" stroke="#ea580c" strokeWidth="0.7" />
            <path d="M 8 1 L 8 9 M 5 4 L 7 9 M 11 4 L 9 9" stroke="#ea580c" strokeWidth="0.7" />
          </g>

          {/* Cute Orange Starfish basking on the yellow sand (Right-Center) */}
          <g transform="translate(260, 56) scale(0.9)">
            <polygon
              points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6"
              fill="#f97316"
              stroke="#c2410c"
              strokeWidth="0.6"
            />
          </g>
        </svg>
      </div>
    );
  }

  // 5. VALENTINE: Intertwining pink swirls, glowing red hearts, roses & sparkling dots
  if (themeId === 'valentines') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <svg
          className="w-full h-20 sm:h-24"
          viewBox="0 0 400 85"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="valBaseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a0818" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#12020a" stopOpacity="0.95" />
            </linearGradient>
            <filter id="heartGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#f43f5e" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Velvet ground base */}
          <path d="M 0 56 Q 100 46 200 52 Q 300 46 400 52 L 400 85 L 0 85 Z" fill="url(#valBaseGrad)" />

          {/* Intertwining Pink Swirls / Curls (Переплетающиеся розовые завитки) */}
          <path
            d="M 10 65 Q 40 45 75 56 T 145 52 T 215 56 T 285 50 T 355 58 T 395 62"
            stroke="#f472b6"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M 20 60 Q 60 42 105 54 T 175 48 T 245 54 T 315 46 T 385 58"
            stroke="#fb7185"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Pink flourish loops / curls */}
          <path d="M 75 56 C 85 46 95 48 90 58 C 86 64 78 60 82 54" stroke="#f472b6" strokeWidth="1.2" fill="none" />
          <path d="M 215 56 C 225 46 235 48 230 58 C 226 64 218 60 222 54" stroke="#f472b6" strokeWidth="1.2" fill="none" />
          <path d="M 315 46 C 325 36 335 38 330 48 C 326 54 318 50 322 44" stroke="#f472b6" strokeWidth="1.2" fill="none" />

          {/* Red Hearts nestled along the swirls */}
          <g transform="translate(135, 46) scale(0.95)" filter="url(#heartGlow)">
            <path
              d="M 6 3 Q 6 1 4 1 Q 1 1 1 4 Q 1 7 6 10 Q 11 7 11 4 Q 11 1 8 1 Q 6 1 6 3 Z"
              fill="#e11d48"
            />
          </g>

          <g transform="translate(255, 44) scale(0.9)" filter="url(#heartGlow)">
            <path
              d="M 6 3 Q 6 1 4 1 Q 1 1 1 4 Q 1 7 6 10 Q 11 7 11 4 Q 11 1 8 1 Q 6 1 6 3 Z"
              fill="#e11d48"
            />
          </g>

          <g transform="translate(365, 48) scale(0.85)" filter="url(#heartGlow)">
            <path
              d="M 6 3 Q 6 1 4 1 Q 1 1 1 4 Q 1 7 6 10 Q 11 7 11 4 Q 11 1 8 1 Q 6 1 6 3 Z"
              fill="#e11d48"
            />
          </g>

          {/* Stylized Roses */}
          <g transform="translate(50, 48) scale(0.95)">
            <circle cx="7" cy="7" r="6" fill="#881337" />
            <circle cx="7" cy="7" r="4.2" fill="#be123c" />
            <circle cx="7" cy="7" r="2.5" fill="#e11d48" />
            <circle cx="7" cy="7" r="1.2" fill="#f43f5e" />
          </g>

          <g transform="translate(180, 46) scale(1)">
            <circle cx="7" cy="7" r="6" fill="#881337" />
            <circle cx="7" cy="7" r="4.2" fill="#be123c" />
            <circle cx="7" cy="7" r="2.5" fill="#e11d48" />
            <circle cx="7" cy="7" r="1.2" fill="#f43f5e" />
          </g>

          {/* Delicate Sparkle Dots along the swirls */}
          <circle cx="110" cy="50" r="1.3" fill="#fde047" />
          <circle cx="165" cy="54" r="1.5" fill="#fb7185" />
          <circle cx="280" cy="48" r="1.3" fill="#fde047" />
          <circle cx="340" cy="52" r="1.5" fill="#fb7185" />
        </svg>
      </div>
    );
  }

  // 6. NOIR / CLASSIC: Sleek sartorial stitch line
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
    </div>
  );
}
