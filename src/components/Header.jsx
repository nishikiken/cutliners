import React from 'react';
import { Scissors, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react';

export function Header({ 
  currentTheme, 
  logoFont, 
  onOpenAdmin, 
  onOpenGuide, 
  isMasterMode 
}) {
  const fontClass = {
    calligraphy: 'font-calligraphy text-4xl sm:text-5xl tracking-normal',
    gothic: 'font-gothic text-3xl sm:text-4xl tracking-wider',
    cinzel: 'font-cinzel text-2xl sm:text-3xl tracking-widest'
  }[logoFont] || 'font-calligraphy text-4xl sm:text-5xl tracking-normal';

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#08080c]/85 border-b border-white/[0.07] transition-all">
      {/* Top Plate / Plaque */}
      <div className="relative max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Measurement Guide Icon & Tailor Badge */}
        <button
          onClick={onOpenGuide}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 hover:border-white/25 active:scale-95 transition-all text-neutral-300 text-xs font-mono"
          title="Гайд по снятию замеров джинс"
        >
          <Scissors className="w-3.5 h-3.5 text-amber-400 rotate-90" />
          <span className="hidden xs:inline">Замеры</span>
        </button>

        {/* Center: Brand Plaque "CUTLINERS" */}
        <div className="relative text-center group cursor-default">
          {/* Halloween Witch Hat sitting on the logo! */}
          {currentTheme.id === 'halloween' && (
            <div className="absolute -top-3 left-1/2 -translate-x-[4.5rem] z-20 pointer-events-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <svg className="w-8 h-8 transform -rotate-12" viewBox="0 0 100 100" fill="none">
                {/* Wide Hat Brim */}
                <ellipse cx="50" cy="78" rx="46" ry="14" fill="#120c1f" stroke="#a855f7" strokeWidth="1.5" />
                {/* Conical Crooked Crown */}
                <path d="M 24 76 Q 36 30 75 14 Q 52 46 72 76 Z" fill="#1a112c" stroke="#a855f7" strokeWidth="1.5" />
                {/* Gold Needle Buckle & Orange Band */}
                <path d="M 28 72 Q 48 76 68 72 L 70 76 Q 48 80 26 76 Z" fill="#ff7700" />
                <rect x="44" y="69" width="10" height="9" fill="none" stroke="#fbbf24" strokeWidth="2" />
                {/* Tailor's needle stuck through hat band */}
                <line x1="32" y1="84" x2="62" y2="60" stroke="#f1f5f9" strokeWidth="1.5" />
                <circle cx="60" cy="62" r="1.5" fill="#f1f5f9" />
              </svg>
            </div>
          )}

          {/* New Year Santa / Frosted touch */}
          {currentTheme.id === 'newyear' && (
            <div className="absolute -top-2 left-1/2 -translate-x-12 z-20 pointer-events-none text-xs">
              ❄️
            </div>
          )}

          {/* Ornate Plaque Plate Background */}
          <div className="relative px-3 py-1">
            <h1 className={`${fontClass} font-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 select-none py-1 drop-shadow-[0_2px_14px_rgba(255,255,255,0.15)] leading-tight`}>
              Cutliners
            </h1>

            {/* Monogram Tailor Underline / Flourish */}
            <div className="flex items-center justify-center gap-2 -mt-1 opacity-60">
              <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-400/80"></span>
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                ATELIER
              </span>
              <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-400/80"></span>
            </div>
          </div>
        </div>

        {/* Right: Master Control (For Him & His Friend) */}
        <button
          onClick={onOpenAdmin}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all text-xs font-mono active:scale-95 ${
            isMasterMode 
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
              : 'bg-neutral-900/90 border-white/10 hover:border-white/25 text-neutral-300'
          }`}
          title="Мастерская: добавление вещей и смена темы"
        >
          {isMasterMode ? (
            <>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-amber-300">Мастер</span>
            </>
          ) : (
            <>
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-[11px]">Вход</span>
            </>
          )}
        </button>
      </div>

      {/* Seasonal Active Banner Ribbon */}
      <div 
        className="w-full py-1 px-4 text-center text-[10px] tracking-wider uppercase font-mono border-t border-b border-white/[0.04] flex items-center justify-center gap-2 overflow-hidden"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          color: currentTheme.accentColor 
        }}
      >
        <Sparkles className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '6s' }} />
        <span className="font-semibold">{currentTheme.badgeText}</span>
        <span className="opacity-40">•</span>
        <span className="text-neutral-400 lowercase">{currentTheme.ambientSoundText}</span>
      </div>
    </header>
  );
}
