import React from 'react';
import { Scissors, ShieldCheck } from 'lucide-react';
import { 
  PumpkinTransparent, 
  SnowmanTransparent, 
  EasterEggTransparent, 
  RoseTransparent,
  SummerPalmTransparent,
  ScissorsArtisanTransparent,
  HalloweenCornerWeb
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

  // Thematic accessory: physically integrated on the LEFT, touching/leaning against the "C"
  const renderLeftThemeDecor = () => {
    switch (currentTheme.id) {
      case 'halloween':
        return (
          <div className="transform -rotate-6 translate-y-0.5 filter drop-shadow-[0_0_8px_rgba(255,119,0,0.6)]">
            <PumpkinTransparent className="w-8 h-8 sm:w-9 sm:h-9" />
          </div>
        );
      case 'newyear':
        return (
          <div className="transform -rotate-3 -translate-y-0.5 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <SnowmanTransparent className="w-8 h-9 sm:w-9 sm:h-10" />
          </div>
        );
      case 'easter':
        return (
          <div className="transform -rotate-2 -translate-y-1 translate-x-1.5 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <EasterEggTransparent className="w-8 h-8 sm:w-9 sm:h-9" />
          </div>
        );
      case 'valentines':
        return (
          <div className="transform -rotate-6 translate-y-0.5 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]">
            <RoseTransparent className="w-9 h-9 sm:w-10 sm:h-10" />
          </div>
        );
      case 'summer':
        return (
          <div className="transform -rotate-3 translate-y-0.5 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <SummerPalmTransparent className="w-9 h-9 sm:w-10 sm:h-10" />
          </div>
        );
      default:
        return (
          <div className="transform -rotate-12 translate-y-0.5 opacity-80">
            <ScissorsArtisanTransparent className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        );
    }
  };

  return (
    // pt-24 (96px) ensures complete clearance from Telegram's top HUD (Close ✕ and •••)
    <header className="w-full relative z-30 pt-24 pb-2 px-4 select-none">
      
      {/* Halloween subtle delicate corner web */}
      {currentTheme.id === 'halloween' && (
        <div className="absolute top-0 right-0 z-10 pointer-events-none opacity-30 text-neutral-300">
          <HalloweenCornerWeb className="w-28 h-28" />
        </div>
      )}

      {/* Balanced 3-column layout ensuring dead-center alignment of logo */}
      <div className="relative max-w-md mx-auto flex items-center justify-between min-h-[48px]">
        
        {/* Left column: Currency Toggle (₴ UAH / $ USD) */}
        <div className="w-20 flex justify-start z-20">
          <button
            onClick={onToggleCurrency}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 transition-all text-xs font-mono text-neutral-300 hover:text-white"
            title="Сменить валюту: ₴ (Гривны) / $ (Доллары)"
          >
            <span className="font-semibold">{currency === 'uah' ? '₴ UAH' : '$ USD'}</span>
          </button>
        </div>

        {/* Center: Brand Lockup "CUTLINERS" perfectly centered in the middle of screen */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-default z-10 pointer-events-auto">
          <div className="inline-flex items-center justify-center -space-x-1 sm:-space-x-1.5">
            
            {/* Thematic Icon (Tightly hugging the initial capital C) */}
            <div className="shrink-0 z-10 pointer-events-none">
              {renderLeftThemeDecor()}
            </div>

            {/* Brand Title (whitespace-nowrap guarantees REWORK ATELIER is always a single line) */}
            <div className="flex flex-col items-center shrink-0 whitespace-nowrap">
              <h1 className={`${fontClass} font-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 py-0.5 drop-shadow-[0_2px_14px_rgba(255,255,255,0.2)] leading-none pl-1 whitespace-nowrap`}>
                Cutliners
              </h1>
              <div className="flex items-center justify-center gap-1.5 mt-0.5 opacity-60 whitespace-nowrap shrink-0">
                <span className="h-[1px] w-4 bg-gradient-to-r from-transparent to-neutral-500 shrink-0"></span>
                <span className="text-[8px] font-mono tracking-[0.32em] uppercase text-neutral-400 whitespace-nowrap shrink-0">
                  REWORK ATELIER
                </span>
                <span className="h-[1px] w-4 bg-gradient-to-l from-transparent to-neutral-500 shrink-0"></span>
              </div>
            </div>

          </div>
        </div>

        {/* Right column: Guide button (Admin is ONLY accessible via secret scissors in footer) */}
        <div className="w-20 flex justify-end items-center z-20">
          <button
            onClick={onOpenGuide}
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white active:scale-95 transition-all"
            title="Гайд по замерам"
          >
            <Scissors className="w-3.5 h-3.5 rotate-90" />
          </button>
        </div>

      </div>
    </header>
  );
}
