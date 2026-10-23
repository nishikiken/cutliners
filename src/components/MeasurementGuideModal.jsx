import React from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

export function MeasurementGuideModal({ onClose }) {
  const steps = [
    {
      code: 'A',
      title: 'Пояс',
      desc: 'Измерьте полуобхват по поясу застёгнутых джинс на столе и умножьте на 2.'
    },
    {
      code: 'B',
      title: 'Длина',
      desc: 'По внешнему боковому шву от верха пояса до нижнего среза.'
    },
    {
      code: 'C',
      title: 'Шаговый шов',
      desc: 'По внутреннему шву от развилки в паху до низа штанины.'
    },
    {
      code: 'D',
      title: 'Выход низа',
      desc: 'Ширина штанины внизу (24–27 см — широкий/клеш крой).'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex flex-col justify-start sm:justify-center items-center pt-24 pb-12 px-3 sm:p-4">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      {/* Clean modal expanded downward without internal scrollbar */}
      <div className="relative w-full max-w-md bg-[#0d0e14] rounded-2xl border border-white/[0.08] shadow-2xl p-4 sm:p-5 text-neutral-200 z-10 space-y-3.5 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-neutral-400" />
            <h3 className="font-bold text-sm text-white font-mono">
              Схема снятия замеров
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Minimalist Visual Jeans Wireframe Diagram */}
        <div className="relative bg-[#111218] rounded-2xl p-3 border border-white/[0.03] flex items-center justify-center">
          <svg className="w-44 h-48 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.03)]" viewBox="0 0 160 190" fill="none">
            {/* Jeans Silhouette */}
            <path
              d="M 45 15 L 115 15 L 120 50 L 132 175 L 100 175 L 80 65 L 60 175 L 28 175 L 40 50 Z"
              fill="#161822"
              stroke="#475569"
              strokeWidth="1.5"
            />
            {/* Crotch line */}
            <path d="M 80 15 L 80 60" stroke="#475569" strokeWidth="1" strokeDasharray="2,2" />

            {/* Line A: Waist */}
            <line x1="42" y1="12" x2="118" y2="12" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="80" cy="12" r="4.5" fill="#38bdf8" />
            <text x="78" y="14.5" fontSize="7" fontWeight="bold" fill="#000" fontFamily="sans-serif">A</text>

            {/* Line B: Outseam */}
            <line x1="22" y1="15" x2="22" y2="175" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2,2" />
            <circle cx="22" cy="95" r="4.5" fill="#f43f5e" />
            <text x="20" y="97.5" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="sans-serif">B</text>

            {/* Line C: Inseam */}
            <line x1="72" y1="65" x2="72" y2="175" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="2,2" />
            <circle cx="72" cy="120" r="4.5" fill="#22c55e" />
            <text x="70" y="122.5" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="sans-serif">C</text>

            {/* Line D: Leg Opening */}
            <line x1="28" y1="181" x2="60" y2="181" stroke="#fbbf24" strokeWidth="2" />
            <circle cx="44" cy="181" r="4.5" fill="#fbbf24" />
            <text x="42" y="183.5" fontSize="7" fontWeight="bold" fill="#000" fontFamily="sans-serif">D</text>
          </svg>
        </div>

        {/* 4 Clean Steps */}
        <div className="space-y-2 font-mono text-xs">
          {steps.map((s) => (
            <div key={s.code} className="p-2.5 rounded-xl bg-[#111218] border border-white/[0.03] flex items-center gap-3">
              <span className="w-6 h-6 rounded-lg bg-white/[0.08] text-white font-bold text-xs flex items-center justify-center shrink-0">
                {s.code}
              </span>
              <div className="flex-grow">
                <div className="text-white font-bold text-xs">{s.title}</div>
                <div className="text-[11px] text-neutral-400 font-sans mt-0.5 leading-snug">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick tip */}
        <div className="p-2.5 rounded-xl bg-white/[0.03] text-neutral-400 text-[11px] font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Измеряйте любимые джинсы на ровной поверхности.</span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-bold text-xs font-mono active:scale-[0.99] transition-all"
        >
          Понятно, закрыть
        </button>
      </div>
    </div>
  );
}
