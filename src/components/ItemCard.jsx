import React from 'react';
import { Ruler, Sparkles, Edit3 } from 'lucide-react';

export function ItemCard({ 
  item, 
  onSelect, 
  currentTheme, 
  isMasterMode, 
  onEdit 
}) {
  const isAvailable = item.status === 'В наличии';
  const isCustom = item.status === 'Под заказ';

  return (
    <div 
      onClick={() => onSelect(item)}
      className={`group relative bg-[#0e0f15] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer active:scale-[0.98] ${currentTheme.cardBorder} shadow-lg shadow-black/60 flex flex-col`}
    >
      {/* Photo Frame (Mobile 4:5 aspect ratio) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
        <img 
          src={item.images?.[0] || 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80'} 
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter contrast-[1.08] brightness-[0.92]"
        />

        {/* Dark Vignette Overlay for Moody Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {/* Status Badge */}
          <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase backdrop-blur-md border ${
            isAvailable 
              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' 
              : isCustom 
              ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
              : 'bg-neutral-900/80 text-neutral-400 border-neutral-700/40'
          }`}>
            {item.status}
          </span>

          {/* Category & Denim Weight Badge */}
          <span className="text-[10px] font-mono text-neutral-300 bg-black/65 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
            {item.category}
          </span>
        </div>

        {/* Master quick edit trigger */}
        {isMasterMode && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(item);
            }}
            className="absolute top-2.5 right-2.5 z-20 p-2 rounded-full bg-amber-500 text-black shadow-lg hover:scale-110 active:scale-95 transition-transform"
            title="Редактировать вещь"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Quick Measurements Preview Ribbon on bottom of photo */}
        {item.measurements && (
          <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md rounded-xl p-2 border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-300">
              <div className="flex items-center gap-1 text-amber-400">
                <Ruler className="w-3 h-3" />
                <span>Замеры:</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-neutral-200">
                {item.measurements.waist && (
                  <span>П: <strong className="text-white">{item.measurements.waist.split(' ')[0]}</strong></span>
                )}
                {item.measurements.outseam && (
                  <span>Д: <strong className="text-white">{item.measurements.outseam.split(' ')[0]}</strong></span>
                )}
                {item.measurements.legOpening && (
                  <span>Низ: <strong className="text-white">{item.measurements.legOpening.split(' ')[0]}</strong></span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-3.5 flex flex-col flex-grow justify-between gap-2.5">
        <div>
          {/* Title */}
          <h3 className="font-semibold text-neutral-100 text-sm sm:text-base leading-snug group-hover:text-amber-300 transition-colors">
            {item.title}
          </h3>

          {/* Fabric & Fit Subtitle */}
          <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1 font-mono">
            {item.fabric || item.fit || 'Ручной пошив CUTLINERS'}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono block">Цена</span>
            <span className="text-base font-bold text-white font-mono tracking-tight">
              {item.price || 'По запросу'}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-amber-400 group-hover:translate-x-0.5 transition-transform">
            <span>Открыть</span>
            <span className="text-sm">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
