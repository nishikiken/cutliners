import React from 'react';
import { Scissors, ShieldCheck } from 'lucide-react';
import { 
  PumpkinTransparent, 
  SnowmanTransparent, 
  EasterEggTransparent, 
  RoseTransparent 
} from './ThemeIcons';

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

  // Thematic accessory perched beside or on the logo
  const renderLogoThemeDecor = () => {
    switch (currentTheme.id) {
      case 'halloween':
        return (
          <div className="absolute -top-3.5 -right-3 z-10 pointer-events-none filter drop-shadow-[0_0_8px_rgba(255,119,0,0.6)]">
            <PumpkinTransparent className="w-6 h-6 animate-pulse" />
          </div>
        );
      case 'newyear':
        return (
          <div className="absolute -top-4 -right-3.5 z-10 pointer-events-none filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <SnowmanTransparent className="w-6 h-7" />
          </div>
        );
      case 'easter':
        return (
          <div className="absolute -top-4 -right-3 z-10 pointer-events-none filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <EasterEggTransparent className="w-6 h-6" />
          </div>
        );
      case 'valentines':
        return (
          <div className="absolute -top-3.5 -right-3 z-10 pointer-events-none filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]">
            <RoseTransparent className="w-5 h-5" />
          </div>
        );
      case 'summer':
        return (
          <div className="absolute -top-3.5 -right-3 z-10 pointer-events-none text-base">
            🌴
          </div>
        );
      default:
        return (
          <div className="absolute -top-2 -right-2 z-10 pointer-events-none text-xs text-amber-400 opacity-60">
            ✂️
          </div>
        );
    }
  };

  return (
    // Generous top padding (pt-24) ensures Telegram WebApp's Close & Menu buttons never overlap
    <header className="w-full relative z-30 pt-24 pb-3 px-4 select-none">
      <div className="relative max-w-md mx-auto flex items-center justify-between">
        
        {/* Left: Minimalist Currency Switcher (₴ UAH / $ USD) */}
        <button
          onClick={onToggleCurrency}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 transition-all text-xs font-mono text-neutral-300 hover:text-white"
          title="Сменить валюту: ₴ (Гривны) / $ (Доллары)"
        >
          <span className="font-semibold tracking-wide">{currency === 'uah' ? '₴ UAH' : '$ USD'}</span>
        </button>

        {/* Center: Brand Plaque "CUTLINERS" with Thematic Logo Accent */}
        <div className="relative text-center group cursor-default">
          {renderLogoThemeDecor()}

          <div className="relative px-2 py-0.5">
            <h1 className={`${fontClass} font-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 py-0.5 drop-shadow-[0_2px_14px_rgba(255,255,255,0.2)] leading-none`}>
              Cutliners
            </h1>
            <div className="flex items-center justify-center gap-2 mt-0.5 opacity-60">
              <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-neutral-500"></span>
              <span className="text-[8px] font-mono tracking-[0.32em] uppercase text-neutral-400">
                REWORK ATELIER
              </span>
              <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-neutral-500"></span>
            </div>
          </div>
        </div>

        {/* Right: Master Control & Guide */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenGuide}
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white active:scale-95 transition-all"
            title="Гайд по замерам"
          >
            <Scissors className="w-3.5 h-3.5 rotate-90" />
          </button>

          <button
            onClick={onOpenAdmin}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all text-xs font-mono active:scale-95 ${
              isMasterMode 
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' 
                : 'bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white'
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
