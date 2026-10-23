import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export function ThemeDecors({ themeId }) {
  const [easterGreeting, setEasterGreeting] = useState(false);

  // 1. СВЕТЛАЯ ПАСХА (Настоящие яйца, корзинка, кролик)
  if (themeId === 'easter') {
    const handleEasterTap = () => {
      setEasterGreeting(true);
      confetti({
        particleCount: 45,
        spread: 80,
        origin: { y: 0.8, x: 0.15 },
        colors: ['#f59e0b', '#38bdf8', '#22c55e', '#ec4899', '#ffffff'],
      });
      setTimeout(() => setEasterGreeting(false), 3000);
    };

    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {/* Пасхальная корзинка с крашенками (Интерактивная в углу экрана) */}
        <div
          onClick={handleEasterTap}
          className="pointer-events-auto absolute bottom-24 left-3 z-30 cursor-pointer group transition-transform active:scale-95"
          title="Светлая Пасха: нажми на корзинку с яйцами!"
        >
          {easterGreeting && (
            <div className="absolute -top-12 left-0 bg-neutral-900 border border-amber-400 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-2xl shadow-2xl animate-bounce whitespace-nowrap z-40 font-mono">
              🌿 Христос Воскресе! 🥚
              <div className="absolute bottom-[-5px] left-5 w-2 h-2 bg-neutral-900 border-r border-b border-amber-400 transform rotate-45"></div>
            </div>
          )}

          <div className="relative animate-float-slow">
            {/* Real Easter Basket Photo Card */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.4)] bg-neutral-900">
              <img
                src="./assets/easter-basket.jpg"
                alt="Пасхальная корзинка с расписными яйцами"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Cute mini Easter Bunny badge */}
            <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full overflow-hidden border border-white/60 shadow-md">
              <img
                src="./assets/easter-bunny.jpg"
                alt="Пасхальный кролик"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[9px] font-mono text-amber-300 block text-center mt-1 bg-black/80 px-1 rounded-md border border-amber-500/20 whitespace-nowrap">
              пасха 🥚
            </span>
          </div>
        </div>

        {/* Floating Easter painted egg on top right */}
        <div
          onClick={() => {
            confetti({
              particleCount: 30,
              spread: 60,
              origin: { y: 0.15, x: 0.85 },
              colors: ['#f43f5e', '#38bdf8', '#facc15']
            });
          }}
          className="pointer-events-auto absolute top-14 right-3 z-30 cursor-pointer p-1 rounded-full bg-neutral-900/80 border border-amber-400/40 shadow-lg active:scale-95 transition-transform"
          title="Расписное пасхальное яйцо"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="./assets/easter-eggs.jpg"
              alt="Пасхальные яйца"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // 2. НОВЫЙ ГОД И РОЖДЕСТВО
  if (themeId === 'newyear') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {/* Christmas Tree & Ornaments Badge */}
        <div
          onClick={() => confetti({ particleCount: 40, spread: 75, origin: { y: 0.8, x: 0.85 }, colors: ['#38bdf8', '#e2e8f0', '#fbbf24'] })}
          className="pointer-events-auto absolute bottom-24 right-3 z-30 cursor-pointer group active:scale-95 transition-transform"
          title="Новый год: нажми на ёлочку!"
        >
          <div className="relative animate-float-slow">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-sky-400/70 shadow-[0_0_15px_rgba(56,189,248,0.35)] bg-neutral-900">
              <img
                src="./assets/newyear-tree.jpg"
                alt="Новогодняя елка"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-[9px] font-mono text-sky-300 block text-center mt-1 bg-black/80 px-1 rounded-md border border-sky-500/20 whitespace-nowrap">
              новый год ❄️
            </span>
          </div>
        </div>

        {/* Falling Snowflake Easter Egg */}
        <div
          onClick={() => confetti({ particleCount: 30, spread: 70, origin: { y: 0.15, x: 0.85 }, colors: ['#e0f2fe', '#bae6fd', '#38bdf8'] })}
          className="pointer-events-auto absolute top-14 right-3 z-30 cursor-pointer p-2 bg-neutral-900/80 border border-sky-400/40 rounded-full active:scale-95 transition-transform"
          title="Снежный залп!"
        >
          <span className="text-xl filter drop-shadow-[0_0_8px_#38bdf8]">❄️</span>
        </div>
      </div>
    );
  }

  // 3. ОТКРЫТИЕ ЛЕТНЕГО СЕЗОНА
  if (themeId === 'summer') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        <div
          onClick={() => confetti({ particleCount: 35, spread: 65, origin: { y: 0.8, x: 0.85 }, colors: ['#f97316', '#ec4899', '#fde047'] })}
          className="pointer-events-auto absolute bottom-24 right-3 z-30 cursor-pointer group active:scale-95 transition-transform"
          title="Летний сезон: нажми!"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-pink-500 p-0.5 shadow-lg shadow-orange-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-[#140b0f] rounded-[14px] flex items-center justify-center text-xl">
              🌴
            </div>
          </div>
          <span className="text-[9px] font-mono text-orange-300 block text-center mt-1 bg-black/80 px-1 rounded whitespace-nowrap">
            summer drop 🌅
          </span>
        </div>
      </div>
    );
  }

  // 4. ДЕНЬ ВЛЮБЛЕННЫХ
  if (themeId === 'valentines') {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        <div
          onClick={() => confetti({ particleCount: 40, spread: 70, origin: { y: 0.8, x: 0.15 }, colors: ['#f43f5e', '#be123c', '#fb7185'] })}
          className="pointer-events-auto absolute bottom-24 left-3 z-30 cursor-pointer group active:scale-95 transition-transform"
          title="Любовь & Нить"
        >
          <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-rose-500/40 p-1 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <span className="text-2xl filter drop-shadow-[0_0_8px_#f43f5e]">❤️</span>
          </div>
          <span className="text-[9px] font-mono text-rose-300 block text-center mt-1 bg-black/80 px-1 rounded whitespace-nowrap">
            love & denim 🌹
          </span>
        </div>
      </div>
    );
  }

  // 5. КЛАССИЧЕСКАЯ МАСТЕРСКАЯ
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500/20 flex justify-between px-2 overflow-hidden opacity-40">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`w-[1px] bg-amber-400 ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`} />
        ))}
      </div>
    </div>
  );
}
