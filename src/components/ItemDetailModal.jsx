import React, { useState } from 'react';
import { X, Ruler, Send, Scissors, Share2, Check, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

export function ItemDetailModal({ 
  item, 
  onClose, 
  onOpenGuide, 
  contacts, 
  currentTheme 
}) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const images = item.images && item.images.length > 0 ? item.images : ['https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80'];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `CUTLINERS — ${item.title}`,
        text: `Смотри джинсы ручной работы от CUTLINERS: ${item.title} (${item.price})`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getTelegramUrl = (isCustomFit = false) => {
    const handle = contacts.telegram.replace('@', '');
    const prefix = isCustomFit 
      ? `Здравствуйте! Хочу сшить на заказ модель "${item.title}" по моим индивидуальным меркам.` 
      : `Здравствуйте! Интересует вещь "${item.title}" (${item.price}, статус: ${item.status}).`;
    
    const measurementsText = item.measurements 
      ? Object.entries(item.measurements).map(([k, v]) => `${k}: ${v}`).join(', ')
      : '';

    const text = encodeURIComponent(`${prefix}\n\nУказанные замеры изделия:\n${measurementsText}\n\nПодскажите, пожалуйста, по деталям и оплате/доставке.`);
    return `https://t.me/${handle}?text=${text}`;
  };

  const measurementLabels = {
    waist: 'Пояс / Талия (Waist)',
    outseam: 'Длина внешнего шва (Outseam)',
    inseam: 'Внутренний шов (Inseam)',
    frontRise: 'Посадка спереди (Front Rise)',
    backRise: 'Посадка сзади (Back Rise)',
    thigh: 'Ширина в бедре (Thigh)',
    knee: 'Колено (Knee)',
    legOpening: 'Выход низа штанины (Leg Opening)',
    chest: 'Обхват груди (Chest)',
    length: 'Длина изделия (Length)',
    shoulders: 'Ширина плеч (Shoulders)',
    sleeve: 'Длина рукава (Sleeve)',
    density: 'Плотность полотна (Density)'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      {/* Modal / Bottom Sheet */}
      <div className="relative w-full max-w-lg bg-[#0d0e14] rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl max-h-[92vh] overflow-y-auto no-scrollbar z-10 flex flex-col text-neutral-200">
        
        {/* Mobile Pull Handle */}
        <div className="sm:hidden w-12 h-1 bg-white/20 rounded-full mx-auto my-2.5" />

        {/* Header Action Buttons */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-2 bg-[#0d0e14]/90 backdrop-blur-md border-b border-white/[0.06]">
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
            CUTLINERS ATELIER ARCHIVE
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
              title="Поделиться"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Photos Carousel */}
        <div className="relative aspect-[4/5] w-full bg-neutral-950 overflow-hidden">
          <img
            src={images[activePhotoIdx]}
            alt={item.title}
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
          />

          {/* Carousel Arrows if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActivePhotoIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Pagination Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activePhotoIdx ? 'w-5 bg-amber-400' : 'w-1.5 bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase backdrop-blur-md border ${
              item.status === 'В наличии'
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50'
                : 'bg-amber-950/90 text-amber-300 border-amber-500/50'
            }`}>
              {item.status}
            </span>
          </div>
        </div>

        {/* Content details */}
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Main Info */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-amber-400/90 uppercase tracking-widest">
                  {item.category} • Ручная работа
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h2>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Стоимость</span>
                <span className="text-xl font-bold font-mono text-amber-300">
                  {item.price}
                </span>
              </div>
            </div>

            {/* Materials & Fit pills */}
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
              {item.fabric && (
                <div className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300">
                  🧶 {item.fabric}
                </div>
              )}
              {item.fit && (
                <div className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300">
                  ✂️ {item.fit}
                </div>
              )}
            </div>
          </div>

          {/* Measurements Table (Точные замеры) */}
          <div className="bg-neutral-900/80 rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-amber-400" />
                <h3 className="font-semibold text-sm text-white font-mono uppercase tracking-wider">
                  Точные замеры этой вещи
                </h3>
              </div>
              <button
                onClick={onOpenGuide}
                className="text-xs text-amber-400 hover:underline font-mono flex items-center gap-1"
              >
                <span>Схема</span>
                <Scissors className="w-3 h-3" />
              </button>
            </div>

            {item.measurements && Object.keys(item.measurements).length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                {Object.entries(item.measurements).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                    <span className="text-neutral-400">{measurementLabels[key] || key}:</span>
                    <strong className="text-white font-bold">{val}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-neutral-400 font-mono italic">
                Замеры уточняются или изделие шьется строго под ваш индивидуальный размер.
              </p>
            )}

            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 pt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Замеры сняты в разложенном горизонтальном состоянии без натяжения ткани.</span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                Особенности пошива и детали
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-sans whitespace-pre-line">
                {item.description}
              </p>
            </div>
          )}

          {/* Ordering Options */}
          <div className="space-y-2.5 pt-2">
            <a
              href={getTelegramUrl(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all font-mono"
            >
              <Send className="w-4 h-4" />
              <span>Заказать эту вещь (в Telegram)</span>
            </a>

            <a
              href={getTelegramUrl(true)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-neutral-900 border border-white/15 hover:border-amber-400/50 active:scale-[0.99] text-neutral-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all font-mono"
            >
              <Scissors className="w-3.5 h-3.5 text-amber-400" />
              <span>Хочу сшить такую же по моим меркам</span>
            </a>
          </div>

          {/* Tailor Guarantee Note */}
          <div className="text-center text-[10px] font-mono text-neutral-500 pb-2">
            CUTLINERS • Каждое изделие кроится и шьется вручную в мастерской
          </div>
        </div>
      </div>
    </div>
  );
}
