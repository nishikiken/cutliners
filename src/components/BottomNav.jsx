import React from 'react';
import { Home, Ruler, Send, Scissors } from 'lucide-react';

export function BottomNav({
  onOpenGuide,
  onOpenAdmin,
  onOpenOrderModal,
  isMasterMode
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#08080c]/90 backdrop-blur-lg border-t border-white/[0.05] px-3 py-2 sm:hidden pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1 text-center font-mono">
        
        {/* Catalog */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center py-1 text-neutral-400 hover:text-white active:scale-95 transition-transform"
        >
          <Home className="w-4 h-4 mb-0.5 text-neutral-300" />
          <span className="text-[10px]">Каталог</span>
        </button>

        {/* Measurements Guide */}
        <button
          onClick={onOpenGuide}
          className="flex flex-col items-center justify-center py-1 text-neutral-400 hover:text-white active:scale-95 transition-transform"
        >
          <Ruler className="w-4 h-4 mb-0.5 text-neutral-300" />
          <span className="text-[10px]">Замеры</span>
        </button>

        {/* Order Master Selector (Lets user choose between Nishiki and Vibe Code!) */}
        <button
          onClick={onOpenOrderModal}
          className="flex flex-col items-center justify-center py-1 text-neutral-400 hover:text-white active:scale-95 transition-transform"
        >
          <Send className="w-4 h-4 mb-0.5 text-sky-400" />
          <span className="text-[10px]">Заказать</span>
        </button>

        {/* Master Atelier Panel */}
        <button
          onClick={onOpenAdmin}
          className={`flex flex-col items-center justify-center py-1 active:scale-95 transition-transform ${
            isMasterMode ? 'text-amber-400 font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Scissors className="w-4 h-4 mb-0.5 text-amber-400/80" />
          <span className="text-[10px]">{isMasterMode ? 'Мастер ✨' : 'Мастер'}</span>
        </button>

      </div>
    </nav>
  );
}
