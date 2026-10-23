import React from 'react';
import { Edit3 } from 'lucide-react';

export function ItemCard({ 
  item, 
  onSelect, 
  currentTheme, 
  isMasterMode, 
  onEdit,
  viewMode = 'grid',
  currency = 'uah'
}) {
  const isAvailable = item.status === 'В наличии';
  const isCustom = item.status === 'Под заказ';

  // Format price based on currency (₴ UAH or $ USD)
  const formatPrice = () => {
    if (currency === 'usd' && item.priceUsd) {
      return `$${item.priceUsd}`;
    }
    if (item.priceUah) {
      return `${item.priceUah.toLocaleString('ru-RU')} ₴`;
    }
    if (typeof item.price === 'string') {
      return item.price.replace('₽', '₴');
    }
    return 'По запросу';
  };

  const safeVal = (v) => {
    if (!v) return null;
    return String(v).split(' ')[0];
  };

  const imageSrc = item.images?.[0] || './assets/items/rework-01.jpg';

  if (viewMode === 'list') {
    // 1-Column Editorial Lookbook View
    return (
      <div 
        onClick={() => onSelect(item)}
        className={`group relative bg-[#0e0f15] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer active:scale-[0.99] ${currentTheme.cardBorder} shadow-lg shadow-black/80 flex flex-col`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
          <img 
            src={imageSrc} 
            alt={item.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = './assets/items/rework-01.jpg';
            }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-black/25 pointer-events-none" />

          {/* Status pill (Equal clean margin from top and left corner) */}
          <div className="absolute top-2 left-2 pointer-events-none z-10">
            <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase backdrop-blur-md border ${
              isAvailable 
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50' 
                : isCustom 
                ? 'bg-neutral-900/90 text-neutral-300 border-white/20'
                : 'bg-neutral-900/90 text-neutral-400 border-neutral-700/50'
            }`}>
              {item.status}
            </span>
          </div>

          {/* Master Edit */}
          {isMasterMode && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(item);
              }}
              className="absolute top-2.5 right-2.5 z-20 p-2 rounded-full bg-amber-500 text-black shadow-lg active:scale-90"
              title="Редактировать"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Measurements preview strip */}
          {item.measurements && (
            <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md rounded-xl py-1 px-2.5 border border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-neutral-300">
                <span className={`${currentTheme.accentText || 'text-neutral-300'} font-bold`}>Мерки:</span>
                <div className="flex items-center gap-2">
                  {item.measurements.waist && <span>П: <strong className="text-white">{safeVal(item.measurements.waist)}</strong></span>}
                  {item.measurements.outseam && <span>Д: <strong className="text-white">{safeVal(item.measurements.outseam)}</strong></span>}
                  {item.measurements.legOpening && <span>Выход: <strong className="text-white">{safeVal(item.measurements.legOpening)}</strong></span>}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-3 flex items-center justify-between gap-3">
          <div>
            <h3 className={`font-bold text-neutral-100 text-sm leading-snug ${currentTheme.accentTextHover || 'group-hover:text-white'} transition-colors`}>
              {item.title}
            </h3>
            <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
              {item.fabric || 'Кастомный перешив'}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm font-bold text-white font-mono block">
              {formatPrice()}
            </span>
            <span className={`text-[10px] ${currentTheme.accentText || 'text-neutral-400'} font-mono`}>
              Открыть →
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 2-Column Mobile Compact Grid View
  return (
    <div 
      onClick={() => onSelect(item)}
      className={`group relative bg-[#0e0f15] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer active:scale-[0.98] ${currentTheme.cardBorder} shadow-lg shadow-black/80 flex flex-col`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950">
        <img 
          src={imageSrc} 
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = './assets/items/rework-01.jpg';
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-black/25 pointer-events-none" />

        {/* Top Status Pill (Equal margin from top and left) */}
        <div className="absolute top-2 left-2 pointer-events-none z-10">
          <span className={`text-[8px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase backdrop-blur-md border ${
            isAvailable 
              ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50' 
              : isCustom 
              ? 'bg-neutral-900/90 text-neutral-300 border-white/20'
              : 'bg-neutral-900/90 text-neutral-400 border-neutral-700/50'
          }`}>
            {isAvailable ? 'В наличии' : 'Под заказ'}
          </span>
        </div>

        {/* Master Edit */}
        {isMasterMode && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(item);
            }}
            className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/[0.15] text-white backdrop-blur-md shadow-lg active:scale-90"
            title="Редактировать"
          >
            <Edit3 className="w-3 h-3" />
          </button>
        )}

        {/* Quick Measurements Chip */}
        {item.measurements && item.measurements.waist && (
          <div className="absolute bottom-1.5 left-1.5 right-1.5 pointer-events-none">
            <div className="bg-black/75 backdrop-blur-md rounded-lg py-0.5 px-1.5 border border-white/[0.08] text-[9px] font-mono text-neutral-300 flex items-center justify-between">
              <span className={currentTheme.accentText || 'text-neutral-300'}>П: {safeVal(item.measurements.waist)}</span>
              {item.measurements.outseam && <span>Д: {safeVal(item.measurements.outseam)}</span>}
              {item.measurements.legOpening && <span>Низ: {safeVal(item.measurements.legOpening)}</span>}
            </div>
          </div>
        )}
      </div>

      <div className="p-2.5 flex flex-col justify-between flex-grow gap-1">
        <div>
          <h3 className={`font-semibold text-neutral-100 text-xs sm:text-sm line-clamp-1 ${currentTheme.accentTextHover || 'group-hover:text-white'} transition-colors`}>
            {item.title}
          </h3>
          <p className="text-[9px] text-neutral-400 font-mono line-clamp-1 mt-0.5">
            {item.fabric || 'Перешив'}
          </p>
        </div>

        <div className="pt-1.5 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold text-white font-mono">
            {formatPrice()}
          </span>
          <span className={`text-[9px] ${currentTheme.accentText || 'text-neutral-400'} font-mono`}>
            Мерки →
          </span>
        </div>
      </div>
    </div>
  );
}
