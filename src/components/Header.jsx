import React from 'react';
import { Scissors, SlidersHorizontal, ShieldCheck, DollarSign } from 'lucide-react';

export function Header({ 
  currentTheme, 
  logoFont, 
  onOpenAdmin, 
  onOpenGuide, 
  isMasterMode,
  currency,
  onToggleCurrency
}) {
  const fontClass = {
    calligraphy: 'font-calligraphy text-4xl sm:text-5xl tracking-normal',
    gothic: 'font-gothic text-3xl sm:text-4xl tracking-wider',
    cinzel: 'font-cinzel text-2xl sm:text-3xl tracking-widest'
  }[logoFont] || 'font-calligraphy text-4xl sm:text-5xl tracking-normal';

  return (
    <header className="w-full relative z-30 pt-14 pb-2 px-4 transition-all">
      {/* Plaque Container */}
      <div className="relative max-w-md mx-auto flex items-center justify-between">
        
        {/* Left: Currency Toggle (₴ / $) */}
        <button
          onClick={onToggleCurrency}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 hover:border-amber-400/40 active:scale-95 transition-all text-xs font-mono text-amber-300 shadow-sm"
          title="Сменить валюту: ₴ (Гривны) / $ (Доллары)"
        >
          <span className="font-bold">{currency === 'uah' ? '₴ UAH' : '$ USD'}</span>
        </button>

        {/* Center: Brand Plaque "CUTLINERS" */}
        <div className="relative text-center group cursor-default">
          <div className="relative px-3 py-0.5">
            <h1 className={`${fontClass} font-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 select-none py-0.5 drop-shadow-[0_2px_12px_rgba(255,255,255,0.18)] leading-tight`}>
              Cutliners
            </h1>
            <div className="flex items-center justify-center gap-1.5 -mt-1 opacity-70">
              <span className="h-[1px] w-5 bg-gradient-to-r from-transparent to-amber-400/80"></span>
              <span className="text-[8px] font-mono tracking-[0.28em] uppercase text-neutral-400">
                REWORK ATELIER
              </span>
              <span className="h-[1px] w-5 bg-gradient-to-l from-transparent to-amber-400/80"></span>
            </div>
          </div>
        </div>

        {/* Right: Master Control (Pin / Panel for Him and His Friend) */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenGuide}
            className="p-2 rounded-full bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-white active:scale-95 transition-all"
            title="Гайд по замерам"
          >
            <Scissors className="w-3.5 h-3.5 text-amber-400 rotate-90" />
          </button>

          <button
            onClick={onOpenAdmin}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full border transition-all text-xs font-mono active:scale-95 ${
              isMasterMode 
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.25)]' 
                : 'bg-neutral-900/90 border-white/10 hover:border-white/25 text-neutral-300'
            }`}
            title="Мастерская"
          >
            {isMasterMode ? (
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <span className="text-[11px]">Мастер</span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
