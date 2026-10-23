import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export function ThemeDecors({ themeId }) {
  const [easterText, setEasterText] = useState(false);

  // 1. СВЕТЛАЯ ПАСХА (Натуральная корзинка с крашенками и кролик на полочке)
  if (themeId === 'easter') {
    const handleEasterTap = () => {
      setEasterText(true);
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.15, x: 0.5 },
        colors: ['#f59e0b', '#38bdf8', '#22c55e', '#ffffff']
      });
      setTimeout(() => setEasterText(false), 2400);
    };

    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between">
          
          {/* Easter Basket */}
          <div
            onClick={handleEasterTap}
            className="pointer-events-auto cursor-pointer group flex items-center gap-2 active:scale-95 transition-transform"
            title="Пасхальная корзинка"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-400/40 shadow-[0_2px_8px_rgba(245,158,11,0.25)] bg-black/60">
              <img
                src="./assets/easter-basket.jpg"
                alt="Пасхальная корзинка"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-bold text-amber-300 leading-none">Светлая Пасха</span>
              <span className="text-[7px] font-mono text-neutral-500 leading-none mt-0.5">крашенки & верба</span>
            </div>
          </div>

          {/* Center Message on tap */}
          {easterText && (
            <span className="text-[10px] font-mono text-amber-300 font-bold bg-neutral-900 border border-amber-400 px-2 py-0.5 rounded-full shadow-lg animate-bounce">
              🌿 Христос Воскресе! 🥚
            </span>
          )}

          {/* Bunny on the right */}
          <div className="flex items-center gap-1.5 opacity-90">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-sm">
              <img
                src="./assets/easter-bunny.jpg"
                alt="Кролик"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        </div>
      </div>
    );
  }

  // 2. НОВЫЙ ГОД И РОЖДЕСТВО
  if (themeId === 'newyear') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-sky-400/40 shadow-sm">
              <img
                src="./assets/newyear-tree.jpg"
                alt="Ёлка"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[9px] font-mono text-sky-300">Зимний сезон • ❄️</span>
          </div>

          <div 
            onClick={() => confetti({ particleCount: 25, spread: 60, origin: { y: 0.15, x: 0.85 }, colors: ['#bae6fd', '#e0f2fe', '#38bdf8'] })}
            className="pointer-events-auto cursor-pointer p-1 rounded-full bg-neutral-900 border border-white/10 active:scale-90"
            title="Снежинка"
          >
            <span className="text-sm">❄️</span>
          </div>
        </div>

        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
        </div>
      </div>
    );
  }

  // 3. ОТКРЫТИЕ ЛЕТНЕГО СЕЗОНА
  if (themeId === 'summer') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between">
          <span className="text-[9px] font-mono text-orange-400">Летний сезон • Rework Denim 🌴</span>
          <span className="text-sm">🌅</span>
        </div>
        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
        </div>
      </div>
    );
  }

  // 4. ДЕНЬ ВСЕХ ВЛЮБЛЕННЫХ
  if (themeId === 'valentines') {
    return (
      <div className="relative w-full overflow-hidden pointer-events-none select-none">
        <div className="relative mx-auto max-w-md px-4 pt-1 pb-2 flex items-center justify-between">
          <span className="text-[9px] font-mono text-rose-400">Love & Rework • Ручные швы 🌹</span>
          <span className="text-sm">❤️</span>
        </div>
        <div className="max-w-md mx-auto px-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
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
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}
