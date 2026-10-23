import React from 'react';
import { Scissors, Send } from 'lucide-react';

export function CustomOrderSection({ onOpenGuide }) {
  // Two direct Telegram contacts for Nishiki and Vibe Code
  const nishikiTelegramUrl = `https://t.me/peretonirovan?text=${encodeURIComponent(
    'Здравствуйте, Nishiki! Хочу обсудить индивидуальный перешив джинс / одежды в CUTLINERS.'
  )}`;

  const vibeCodeTelegramUrl = `https://t.me/Noria000?text=${encodeURIComponent(
    'Здравствуйте, Vibe Code! Хочу обсудить индивидуальный перешив джинс / одежды в CUTLINERS.'
  )}`;

  return (
    <div className="space-y-6 pt-4 pb-2">
      
      {/* Visual & Intellectual Intermission Break (Разделитель и пауза) */}
      <div className="relative text-center py-4 px-2 space-y-2.5">
        <div className="flex items-center justify-center gap-2 opacity-30">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-400"></span>
          <Scissors className="w-3 h-3 text-neutral-400 rotate-45" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-400"></span>
        </div>

        <div className="text-[9px] font-mono tracking-[0.25em] uppercase text-neutral-500">
          01. ПОИСК ВИНТАЖА • 02. РАСПОР & КРОЙ • 03. КАСТОМ
        </div>

        <p className="text-xs text-neutral-400 font-sans max-w-xs mx-auto leading-relaxed">
          Каждая вещь существует в единственном экземпляре. Не нашёл свой силуэт или размер? Мы подберём винтажную основу и перешьём пару под тебя.
        </p>

        <div className="h-[1px] w-16 bg-neutral-800/80 mx-auto" />
      </div>

      {/* Rework Custom Order Card (High-End & Less Borders) */}
      <section className="relative overflow-hidden rounded-2xl bg-[#0e0f14] border border-white/[0.04] p-4 sm:p-5 shadow-2xl space-y-4">
        
        <div>
          <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 font-semibold block">
            Индивидуальный перешив
          </span>
          <h3 className="text-base font-bold text-white font-mono mt-0.5">
            Соберём вещь под твои параметры
          </h3>
          <p className="text-[11px] text-neutral-400 font-sans mt-1 leading-relaxed">
            Напиши любому из нас двоих в Telegram, чтобы обсудить силуэт (Wide, Baggy, Flare, Carpenter), детали швов и свои замеры.
          </p>
        </div>

        {/* Dual Master Action Buttons (Nishiki & Vibe Code) */}
        <div className="space-y-2 pt-1 font-mono">
          <div className="text-[9px] uppercase tracking-wider text-neutral-500">
            Выбери мастера для связи в Telegram:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Master 1: Nishiki */}
            <a
              href={nishikiTelegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.99] text-white text-xs flex items-center justify-between border border-white/[0.05] hover:border-white/[0.15] transition-all"
            >
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <div className="text-left">
                  <div className="font-semibold leading-tight">Nishiki</div>
                  <div className="text-[9px] text-neutral-400">@peretonirovan</div>
                </div>
              </div>
              <span className="text-[10px] text-neutral-400">Написать →</span>
            </a>

            {/* Master 2: Vibe Code */}
            <a
              href={vibeCodeTelegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.99] text-white text-xs flex items-center justify-between border border-white/[0.05] hover:border-white/[0.15] transition-all"
            >
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <div className="text-left">
                  <div className="font-semibold leading-tight">Vibe Code</div>
                  <div className="text-[9px] text-neutral-400">@Noria000</div>
                </div>
              </div>
              <span className="text-[10px] text-neutral-400">Написать →</span>
            </a>
          </div>

          <button
            onClick={onOpenGuide}
            className="w-full py-2 text-center text-[10px] text-neutral-400 hover:text-white underline font-mono flex items-center justify-center gap-1 pt-1"
          >
            <Scissors className="w-3 h-3 text-amber-400" />
            <span>Как правильно снять свои мерки для пошива</span>
          </button>
        </div>
      </section>

    </div>
  );
}
