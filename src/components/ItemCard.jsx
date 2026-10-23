import React from 'react';
import { Ruler, Edit3, Sparkles } from 'lucide-react';

export function ItemCard({ 
  item, 
  onSelect, 
  currentTheme, 
  isMasterMode, 
  onEdit,
  viewMode = 'grid' // 'grid' (2 columns) or 'list' (1 column editorial)
}) {
  const isAvailable = item.status === 'В наличии';
  const isCustom = item.status === 'Под заказ';

  if (viewMode === 'list') {
    // 1-Column Editorial Full Width Lookbook Card
    return (
      <div 
        onClick={() => onSelect(item)}
        className={`group relative bg-[#0d0e14] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer active:scale-[0.99] ${currentTheme.cardBorder} shadow-lg shadow-black/80 flex flex-col`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
          <img 
            src={item.images?.[0] || 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80'} 
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter contrast-[1.06] brightness-[0.94]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-transparent to-black/30 pointer-events-none" />

          {/* Top Status & Category Badges */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase backdrop-blur-md border ${
              isAvailable 
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50' 
                : isCustom 
                ? 'bg-amber-950/90 text-amber-300 border-amber-500/50'
                : 'bg-neutral-900/90 text-neutral-400 border-neutral-700/50'
            }`}>
              {item.status}
            </span>

            <span className="text-[10px] font-mono text-neutral-300 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
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
              className="absolute top-2.5 right-2.5 z-20 p-2 rounded-full bg-amber-500 text-black shadow-lg active:scale-90 transition-transform"
              title="Редактировать вещь"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Quick measurements preview strip */}
          {item.measurements && (
            <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
              <div className="bg-black/85 backdrop-blur-md rounded-xl py-1.5 px-3 border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-300">
                <span className="text-amber-400 font-bold">Замеры:</span>
                <div className="flex items-center gap-2.5 text-[10px]">
                  {item.measurements.waist && <span>Пояс: <strong className="text-white">{item.measurements.waist.split(' ')[0]}</strong></span>}
                  {item.measurements.outseam && <span>Длина: <strong className="text-white">{item.measurements.outseam.split(' ')[0]}</strong></span>}
                  {item.measurements.legOpening && <span>Выход: <strong className="text-white">{item.measurements.legOpening.split(' ')[0]}</strong></span>}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-3.5 flex items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-neutral-100 text-sm leading-snug group-hover:text-amber-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
              {item.fabric || item.fit || 'Ручной пошив CUTLINERS'}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm font-bold text-white font-mono block">
              {item.price}
            </span>
            <span className="text-[10px] text-amber-400 font-mono">
              Подробнее →
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 2-Column Mobile Compact Lookbook Card (Standard & Clean!)
  return (
    <div 
      onClick={() => onSelect(item)}
      className={`group relative bg-[#0e0f15] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer active:scale-[0.98] ${currentTheme.cardBorder} shadow-lg shadow-black/80 flex flex-col`}
    >
      {/* 3:4 Portrait Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950">
        <img 
          src={item.images?.[0] || 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80'} 
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter contrast-[1.05]"
        />

        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-black/25 pointer-events-none" />

        {/* Top Status Pill */}
        <div className="absolute top-2 left-2 flex items-center gap-1 pointer-events-none">
          <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase backdrop-blur-md border ${
            isAvailable 
              ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50' 
              : isCustom 
              ? 'bg-amber-950/90 text-amber-300 border-amber-500/50'
              : 'bg-neutral-900/90 text-neutral-400 border-neutral-700/50'
          }`}>
            {isAvailable ? 'В наличии' : 'Под заказ'}
          </span>
        </div>

        {/* Master quick edit trigger */}
        {isMasterMode && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(item);
            }}
            className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-amber-500 text-black shadow-lg active:scale-90 transition-transform"
            title="Редактировать"
          >
            <Edit3 className="w-3 h-3" />
          </button>
        )}

        {/* Quick Measurements Chip Overlay */}
        {item.measurements && item.measurements.waist && (
          <div className="absolute bottom-1.5 left-1.5 right-1.5 pointer-events-none">
            <div className="bg-black/75 backdrop-blur-md rounded-lg py-0.5 px-1.5 border border-white/[0.08] text-[9px] font-mono text-neutral-300 flex items-center justify-between">
              <span className="text-amber-400">П: {item.measurements.waist.split(' ')[0]}</span>
              {item.measurements.outseam && <span>Д: {item.measurements.outseam.split(' ')[0]}</span>}
              {item.measurements.legOpening && <span>Низ: {item.measurements.legOpening.split(' ')[0]}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-2.5 flex flex-col justify-between flex-grow gap-1">
        <div>
          <h3 className="font-semibold text-neutral-100 text-xs sm:text-sm line-clamp-1 group-hover:text-amber-300 transition-colors">
            {item.title}
          </h3>
          <p className="text-[10px] text-neutral-400 font-mono line-clamp-1 mt-0.5">
            {item.fabric || item.fit || item.category}
          </p>
        </div>

        <div className="pt-1.5 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold text-white font-mono">
            {item.price}
          </span>
          <span className="text-[10px] text-amber-400 font-mono">
            Мерки →
          </span>
        </div>
      </div>
    </div>
  );
}
