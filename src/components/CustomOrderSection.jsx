import React from 'react';
import { Scissors, Send, Check } from 'lucide-react';

export function CustomOrderSection({ contacts, onOpenGuide, currentTheme }) {
  const telegramHandle = contacts.telegram.replace('@', '');
  const customOrderUrl = `https://t.me/${telegramHandle}?text=${encodeURIComponent(
    'Здравствуйте! Хочу заказать индивидуальный перешив джинс / одежды в CUTLINERS. Подскажите по меркам и срокам.'
  )}`;

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#13141d] to-[#0c0d12] border border-amber-500/20 p-4 shadow-xl space-y-3">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
          <Scissors className="w-4 h-4 rotate-45" />
        </div>
        <div>
          <span className="text-[9px] font-mono tracking-widest uppercase text-amber-400 font-bold block">
            Индивидуальный перешив
          </span>
          <h3 className="text-sm font-bold text-white font-mono">
            Соберем вещь под твои замеры
          </h3>
        </div>
      </div>

      <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
        Мы находим плотные винтажные пары в секондах, распарываем их и перешиваем в уникальный крой: свободный Wide, Baggy, расклешенные силуэты или карпентеры с кастомными вставками.
      </p>

      {/* Rework Perks */}
      <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-neutral-300 pt-0.5">
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-black/40 border border-white/[0.04]">
          <Check className="w-3 h-3 text-amber-400 shrink-0" />
          <span>Винтажный деним</span>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-black/40 border border-white/[0.04]">
          <Check className="w-3 h-3 text-amber-400 shrink-0" />
          <span>Ручная сборка</span>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-black/40 border border-white/[0.04]">
          <Check className="w-3 h-3 text-amber-400 shrink-0" />
          <span>Усиленные швы</span>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-black/40 border border-white/[0.04]">
          <Check className="w-3 h-3 text-amber-400 shrink-0" />
          <span>Под твои замеры</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col xs:flex-row gap-2 pt-1 font-mono">
        <a
          href={customOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-xs flex items-center justify-center gap-1.5 active:scale-[0.99] transition-all shadow-md"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Обсудить перешив в Telegram</span>
        </a>
        <button
          onClick={onOpenGuide}
          className="py-2.5 px-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-300 text-xs flex items-center justify-center gap-1 active:scale-[0.99]"
        >
          <Scissors className="w-3 h-3 text-amber-400" />
          <span>Схема мерок</span>
        </button>
      </div>
    </section>
  );
}
