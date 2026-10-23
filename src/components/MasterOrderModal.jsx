import React from 'react';
import { X, Send, Scissors } from 'lucide-react';

export function MasterOrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const master13Url = `https://t.me/peretonirovan?text=${encodeURIComponent(
    'Здравствуйте, 13! Хочу обсудить индивидуальный перешив джинс / одежды в CUTLINERS.'
  )}`;

  const nishikikenUrl = `https://t.me/Noria000?text=${encodeURIComponent(
    'Здравствуйте, nishikiken! Хочу обсудить индивидуальный перешив джинс / одежды в CUTLINERS.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex flex-col justify-start sm:justify-center items-center pt-20 pb-8 px-3 sm:p-4">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-[#0d0e14] rounded-2xl border border-white/[0.08] shadow-2xl p-5 text-neutral-200 z-10 space-y-4">
        
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <Scissors className="w-4 h-4 text-neutral-400" />
            <h3 className="font-bold text-sm text-white font-mono">
              Связь с мастерами
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
          Мы шьём вдвоём. Выберите, кому из нас написать в Telegram, чтобы обсудить перешив, мерки или заказ:
        </p>

        {/* Two Master Buttons */}
        <div className="space-y-2 font-mono">
          {/* Master 1: 13 (@peretonirovan) */}
          <a
            href={master13Url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="py-3 px-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.99] text-white text-xs flex items-center justify-between border border-white/[0.05] hover:border-white/[0.15] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-sky-500/15 text-sky-400">
                <Send className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white leading-tight">13</div>
                <div className="text-[10px] text-neutral-400">@peretonirovan</div>
              </div>
            </div>
            <span className="text-[10px] text-sky-400">Написать →</span>
          </a>

          {/* Master 2: nishikiken (@Noria000) */}
          <a
            href={nishikikenUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="py-3 px-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.99] text-white text-xs flex items-center justify-between border border-white/[0.05] hover:border-white/[0.15] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-sky-500/15 text-sky-400">
                <Send className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white leading-tight">nishikiken</div>
                <div className="text-[10px] text-neutral-400">@Noria000</div>
              </div>
            </div>
            <span className="text-[10px] text-sky-400">Написать →</span>
          </a>
        </div>

      </div>
    </div>
  );
}
