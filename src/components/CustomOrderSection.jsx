import React from 'react';
import { Scissors, Send, Sparkles, Shield, Check } from 'lucide-react';

export function CustomOrderSection({ contacts, onOpenGuide, currentTheme }) {
  const telegramHandle = contacts.telegram.replace('@', '');
  const customOrderUrl = `https://t.me/${telegramHandle}?text=${encodeURIComponent(
    'Здравствуйте! Хочу обсудить индивидуальный пошив джинс / одежды в мастерской CUTLINERS. Подскажите по срокам, тканям и меркам.'
  )}`;

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#13141d] to-[#0c0d12] border border-amber-500/25 p-5 sm:p-6 shadow-xl space-y-4">
      {/* Background aesthetic noise & stitch accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
          <Scissors className="w-5 h-5 rotate-45" />
        </div>
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold block">
            Индивидуальный пошив
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white font-mono">
            Пошьем вещь строго под тебя
          </h3>
        </div>
      </div>

      <p className="text-xs text-neutral-300 font-sans leading-relaxed">
        Мы шьем вручную. Если нужного размера нет в наличии, или ты хочешь уникальную посадку, длину, тяжелый японский селвидж 16oz-18oz, вытертости или особые клепки — напиши нам.
      </p>

      {/* Craftsmanship Perks */}
      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-neutral-300 pt-1">
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/[0.05]">
          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Тяжелый Raw деним</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/[0.05]">
          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Цепной стежок низа</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/[0.05]">
          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Медные заклепки</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/[0.05]">
          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>По твоим меркам</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 pt-2 font-mono">
        <a
          href={customOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-xs flex items-center justify-center gap-2 active:scale-[0.99] transition-all shadow-md shadow-orange-500/20"
        >
          <Send className="w-4 h-4" />
          <span>Обсудить пошив в Telegram</span>
        </a>
        <button
          onClick={onOpenGuide}
          className="py-3 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-300 text-xs flex items-center justify-center gap-1.5 active:scale-[0.99]"
        >
          <Scissors className="w-3.5 h-3.5 text-amber-400" />
          <span>Как снять мерки</span>
        </button>
      </div>
    </section>
  );
}
