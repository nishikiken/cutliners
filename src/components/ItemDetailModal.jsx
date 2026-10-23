import React, { useState } from 'react';
import { X, Ruler, Send, Scissors, Share2, Check, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

export function ItemDetailModal({ 
  item, 
  onClose, 
  onOpenGuide, 
  contacts, 
  currentTheme,
  currency = 'uah'
}) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [copied, setCopied] = useState(false);

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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `CUTLINERS — ${item.title}`,
        text: `Смотри перешив от CUTLINERS: ${item.title} (${formatPrice()})`,
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
    const priceStr = formatPrice();
    const prefix = isCustomFit 
      ? `Здравствуйте! Хочу заказать индивидуальный перешив модели "${item.title}" по моим замерам.` 
      : `Здравствуйте! Интересует вещь "${item.title}" (${priceStr}, статус: ${item.status}).`;
    
    const measurementsText = item.measurements 
      ? Object.entries(item.measurements).map(([k, v]) => `${k}: ${v}`).join(', ')
      : '';

    const text = encodeURIComponent(`${prefix}\n\nУказанные замеры изделия:\n${measurementsText}\n\nПодскажите, пожалуйста, по деталям и отправке.`);
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
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#0d0e14] rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl max-h-[92vh] overflow-y-auto no-scrollbar z-10 flex flex-col text-neutral-200">
        
        {/* Mobile Pull Handle */}
        <div className="sm:hidden w-10 h-1 bg-white/20 rounded-full mx-auto my-2" />

        {/* Header Action Buttons */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-2 bg-[#0d0e14]/90 backdrop-blur-md border-b border-white/[0.06]">
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
            CUTLINERS REWORK ARCHIVE
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
              title="Поделиться"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
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
            onError={(e) => {
              e.currentTarget.src = './assets/items/rework-01.jpg';
            }}
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActivePhotoIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activePhotoIdx ? 'w-4 bg-amber-400' : 'w-1.5 bg-neutral-600'
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

        {/* Content Details */}
        <div className="p-4 space-y-4">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  {item.category} • Ручной перешив
                </span>
                <h2 className="text-lg font-bold text-white mt-0.5 leading-snug">
                  {item.title}
                </h2>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[9px] uppercase font-mono text-neutral-400 block">Стоимость</span>
                <span className="text-lg font-bold font-mono text-amber-300">
                  {formatPrice()}
                </span>
              </div>
            </div>

            {/* Materials pills */}
            <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] font-mono">
              {item.fabric && (
                <div className="px-2 py-0.5 rounded-md bg-neutral-900 border border-white/10 text-neutral-300">
                  ✂️ {item.fabric}
                </div>
              )}
              {item.fit && (
                <div className="px-2 py-0.5 rounded-md bg-neutral-900 border border-white/10 text-neutral-300">
                  👖 {item.fit}
                </div>
              )}
            </div>
          </div>

          {/* Measurements Table */}
          <div className="bg-neutral-900/80 rounded-2xl p-3 border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-amber-400" />
                <h3 className="font-semibold text-xs text-white font-mono uppercase tracking-wider">
                  Точные замеры
                </h3>
              </div>
              <button
                onClick={onOpenGuide}
                className="text-[11px] text-amber-400 hover:underline font-mono flex items-center gap-1"
              >
                <span>Схема</span>
                <Scissors className="w-3 h-3" />
              </button>
            </div>

            {item.measurements && Object.keys(item.measurements).length > 0 ? (
              <div className="grid grid-cols-2 gap-1.5 pt-0.5 font-mono text-[11px]">
                {Object.entries(item.measurements).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/[0.04]">
                    <span className="text-neutral-400">{measurementLabels[key] || key}:</span>
                    <strong className="text-white font-bold">{val}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-neutral-400 font-mono italic">
                Замеры уточняются или перешив делается строго под ваш индивидуальный размер.
              </p>
            )}

            <div className="flex items-center gap-1 text-[10px] text-neutral-400 pt-0.5 font-mono">
              <AlertCircle className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Замеры сняты по вещи в разложенном виде.</span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <div className="space-y-1">
              <h4 className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                Детали перешива
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans whitespace-pre-line">
                {item.description}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="space-y-2 pt-1 font-mono">
            <a
              href={getTelegramUrl(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Заказать эту вещь (в Telegram)</span>
            </a>

            <a
              href={getTelegramUrl(true)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-amber-400/50 active:scale-[0.99] text-neutral-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <Scissors className="w-3 h-3 text-amber-400" />
              <span>Перешить похожее по моим меркам</span>
            </a>
          </div>

          <div className="text-center text-[9px] font-mono text-neutral-500 pb-1">
            CUTLINERS • Ручной перешив винтажного денима
          </div>
        </div>
      </div>
    </div>
  );
}
