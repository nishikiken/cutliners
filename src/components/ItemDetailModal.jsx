import React, { useState } from 'react';
import { X, Ruler, Send, ChevronLeft, ChevronRight } from 'lucide-react';

export function ItemDetailModal({ 
  item, 
  onClose, 
  onOpenGuide, 
  currency = 'uah'
}) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!item) return null;

  const images = item.images && item.images.length > 0 ? item.images : ['./assets/items/rework-01.jpg'];

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

  const getTelegramUrl = (masterHandle) => {
    const handle = masterHandle.replace('@', '');
    const priceStr = formatPrice();
    const measurementsText = item.measurements 
      ? Object.entries(item.measurements).map(([k, v]) => `${k}: ${v}`).join(', ')
      : '';

    const text = encodeURIComponent(
      `Здравствуйте! Хочу заказать вещь "${item.title}" (${priceStr}, статус: ${item.status}).\nЗамеры: ${measurementsText}`
    );
    return `https://t.me/${handle}?text=${text}`;
  };

  const measurementLabels = {
    waist: 'Пояс',
    outseam: 'Длина',
    inseam: 'Внутренний шов',
    frontRise: 'Посадка спереди',
    backRise: 'Посадка сзади',
    thigh: 'Бедро',
    knee: 'Колено',
    legOpening: 'Выход низа',
    chest: 'Грудь',
    length: 'Длина',
    shoulders: 'Плечи',
    sleeve: 'Рукав',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex flex-col justify-start sm:justify-center items-center pt-20 pb-8 px-3 sm:p-4">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      {/* Modal starting safely below Telegram HUD */}
      <div className="relative w-full max-w-md bg-[#0d0e14] rounded-2xl border border-white/[0.08] shadow-2xl max-h-[80vh] overflow-y-auto z-10 flex flex-col text-neutral-200">
        
        {/* Mobile Pull Handle & Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-2.5 bg-[#0d0e14]/95 backdrop-blur-md border-b border-white/[0.04]">
          <span className="text-[10px] font-mono text-neutral-400">
            {item.title}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-neutral-300 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Photos Carousel */}
        <div className="relative aspect-[4/5] w-full bg-neutral-950 overflow-hidden">
          <img
            src={images[activePhotoIdx]}
            alt={item.title}
            onError={(e) => {
              e.currentTarget.src = './assets/items/rework-01.jpg';
            }}
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActivePhotoIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activePhotoIdx ? 'w-3.5 bg-white' : 'w-1.5 bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute top-2.5 left-2.5">
            <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase backdrop-blur-md border ${
              item.status === 'В наличии'
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50'
                : 'bg-amber-950/90 text-amber-300 border-amber-500/50'
            }`}>
              {item.status}
            </span>
          </div>
        </div>

        {/* Clean, Concise Content (NO novels, NO fluff!) */}
        <div className="p-4 space-y-3.5">
          {/* Title & Price */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                {item.title}
              </h2>
              {/* Short note (e.g. Distress, Wide) */}
              {item.fit && (
                <span className="text-[11px] text-neutral-400 font-mono">
                  {item.fit}
                </span>
              )}
            </div>
            <div className="text-right shrink-0">
              <span className="text-base sm:text-lg font-bold font-mono text-white">
                {formatPrice()}
              </span>
            </div>
          </div>

          {/* Measurements Table */}
          <div className="bg-[#12131a] rounded-xl p-3 border border-white/[0.04] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs font-mono text-neutral-300">
                <Ruler className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-semibold uppercase tracking-wider">Замеры:</span>
              </div>
              <button
                onClick={onOpenGuide}
                className="text-[10px] text-neutral-400 hover:text-white font-mono underline"
              >
                Схема
              </button>
            </div>

            {item.measurements && Object.keys(item.measurements).length > 0 ? (
              <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
                {Object.entries(item.measurements).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/[0.03]">
                    <span className="text-neutral-400">{measurementLabels[key] || key}:</span>
                    <strong className="text-white font-bold">{val}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-neutral-400 font-mono italic">
                Индивидуально под заказ
              </p>
            )}
          </div>

          {/* Short note on distressing / details if present (concise!) */}
          {item.description && (
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Dual Master Telegram Order Buttons */}
          <div className="space-y-2 pt-1 font-mono">
            <span className="text-[9px] uppercase tracking-wider text-neutral-500 block">
              Написать в Telegram для заказа:
            </span>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={getTelegramUrl('peretonirovan')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.99] text-white text-xs flex flex-col items-center justify-center border border-white/[0.05] hover:border-white/[0.15] transition-all text-center"
              >
                <div className="flex items-center gap-1 text-sky-400 font-bold">
                  <Send className="w-3 h-3" />
                  <span>13</span>
                </div>
                <span className="text-[8px] text-neutral-400">@peretonirovan</span>
              </a>

              <a
                href={getTelegramUrl('Noria000')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.99] text-white text-xs flex flex-col items-center justify-center border border-white/[0.05] hover:border-white/[0.15] transition-all text-center"
              >
                <div className="flex items-center gap-1 text-sky-400 font-bold">
                  <Send className="w-3 h-3" />
                  <span>nishikiken</span>
                </div>
                <span className="text-[8px] text-neutral-400">@Noria000</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
