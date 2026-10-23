import React from 'react';
import { Home, Ruler, Send } from 'lucide-react';

export function BottomNav({
  onOpenGuide,
  onOpenOrderModal
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#08080c]/95 backdrop-blur-xl border-t border-white/[0.05] px-4 py-2 sm:hidden pb-safe">
      {/* 3 Evenly Spaced Buttons */}
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center font-mono">
        
        {/* 1. Catalog */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center py-1.5 text-neutral-400 hover:text-white active:scale-95 transition-transform"
        >
          <Home className="w-4 h-4 mb-1 text-neutral-300" />
          <span className="text-[11px] tracking-wide">Каталог</span>
        </button>

        {/* 2. Measurements Guide */}
        <button
          onClick={onOpenGuide}
          className="flex flex-col items-center justify-center py-1.5 text-neutral-400 hover:text-white active:scale-95 transition-transform"
        >
          <Ruler className="w-4 h-4 mb-1 text-neutral-300" />
          <span className="text-[11px] tracking-wide">Замеры</span>
        </button>

        {/* 3. Order (Opens Master Selector: Nishiki or Vibe Code) */}
        <button
          onClick={onOpenOrderModal}
          className="flex flex-col items-center justify-center py-1.5 text-neutral-400 hover:text-white active:scale-95 transition-transform"
        >
          <Send className="w-4 h-4 mb-1 text-sky-400" />
          <span className="text-[11px] tracking-wide text-neutral-200">Заказать</span>
        </button>

      </div>
    </nav>
  );
}
