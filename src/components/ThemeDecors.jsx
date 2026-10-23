import React from 'react';
import { 
  SnowmanTransparent, 
  EasterEggTransparent, 
  RoseTransparent 
} from './ThemeIcons';

export function ThemeDecors({ themeId }) {
  // 1. СВЕТЛАЯ ПАСХА (На прозрачном фоне, без конфетти)
  if (themeId === 'easter') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between opacity-85">
          <div className="flex items-center gap-2">
            <EasterEggTransparent className="w-7 h-7" />
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-bold text-amber-300/80 leading-none">Светлая Пасха</span>
              <span className="text-[7px] font-mono text-neutral-500 leading-none mt-0.5">крашенки & верба</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-neutral-500">
            🌿 ПАСХА
          </div>
        </div>

        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        </div>
      </div>
    );
  }

  // 2. НОВЫЙ ГОД И РОЖДЕСТВО
  if (themeId === 'newyear') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between opacity-85">
          <div className="flex items-center gap-2">
            <SnowmanTransparent className="w-6 h-7" />
            <span className="text-[9px] font-mono text-sky-300/80">Зимний сезон • ❄️</span>
          </div>
          <div className="text-[9px] font-mono text-neutral-500">
            WINTER DROP
          </div>
        </div>

        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/15 to-transparent" />
        </div>
      </div>
    );
  }

  // 3. ОТКРЫТИЕ ЛЕТНЕГО СЕЗОНА
  if (themeId === 'summer') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between opacity-85">
          <span className="text-[9px] font-mono text-orange-400/80">Летний сезон • Rework Denim</span>
          <span className="text-base">🌴</span>
        </div>
        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400/15 to-transparent" />
        </div>
      </div>
    );
  }

  // 4. ДЕНЬ ВСЕХ ВЛЮБЛЕННЫХ
  if (themeId === 'valentines') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between opacity-85">
          <div className="flex items-center gap-2">
            <RoseTransparent className="w-5 h-5" />
            <span className="text-[9px] font-mono text-rose-400/80">Love & Rework • Ручные швы</span>
          </div>
          <span className="text-sm">🌹</span>
        </div>
        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-rose-500/15 to-transparent" />
        </div>
      </div>
    );
  }

  // 5. КЛАССИКА МАСТЕРСКОЙ
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none">
      <div className="relative mx-auto max-w-md px-4 pt-0.5 pb-1 flex items-center justify-between text-[8px] font-mono text-neutral-500">
        <span>АТЕЛЬЕ ПЕРЕШИВА</span>
        <span>REWORK • UPCYCLING</span>
      </div>
      <div className="max-w-md mx-auto px-4">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>
    </div>
  );
}
