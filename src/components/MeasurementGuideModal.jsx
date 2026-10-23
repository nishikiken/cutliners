import React from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

export function MeasurementGuideModal({ onClose }) {
  const steps = [
    {
      code: 'A',
      title: 'Пояс / Талия (Waist)',
      desc: 'Положите свои лучшие джинсы на ровную поверхность, застегните пуговицу. Измерьте расстояние от края до края пояса и умножьте на 2.'
    },
    {
      code: 'B',
      title: 'Длина по внешнему шву (Outseam)',
      desc: 'От самого верха пояса по боковому шву до самого низа штанины.'
    },
    {
      code: 'C',
      title: 'Внутренний шаговый шов (Inseam)',
      desc: 'От места пересечения швов в паху (развилки) вниз до среза штанины.'
    },
    {
      code: 'D',
      title: 'Посадка спереди (Front Rise)',
      desc: 'От развилки шагового шва вверх до верха пояса по передней планке.'
    },
    {
      code: 'E',
      title: 'Бедро (Thigh)',
      desc: 'Ширина штанины в самом широком месте — на 2-3 см ниже развилки шва.'
    },
    {
      code: 'F',
      title: 'Низ штанины / Выход (Leg Opening)',
      desc: 'Ширина среза штанины по нижнему краю (например, 22 см — прямые, 26+ см — широкие/клеш).'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#0e0f16] rounded-3xl border border-white/10 shadow-2xl p-5 sm:p-6 text-neutral-200 z-10 max-h-[90vh] overflow-y-auto no-scrollbar space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base sm:text-lg text-white font-mono">
              Как правильно снять замеры
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Diagram of Jeans Silhouette with Measurement Lines */}
        <div className="relative bg-neutral-950 rounded-2xl p-4 border border-white/[0.08] flex items-center justify-center">
          <svg className="w-64 h-64 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" viewBox="0 0 200 240" fill="none">
            {/* Jeans Contour */}
            <path
              d="M 60 20 L 140 20 L 145 60 L 160 210 L 125 210 L 100 80 L 75 210 L 40 210 L 55 60 Z"
              fill="#141724"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            {/* Crotch Inseam seam */}
            <path d="M 100 20 L 100 75" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />

            {/* Line A: Waist */}
            <line x1="56" y1="16" x2="144" y2="16" stroke="#fbbf24" strokeWidth="2.5" />
            <circle cx="100" cy="16" r="6" fill="#fbbf24" />
            <text x="97" y="19" fontSize="8" fontWeight="bold" fill="#000" fontFamily="sans-serif">A</text>

            {/* Line B: Outseam */}
            <line x1="30" y1="20" x2="30" y2="210" stroke="#f43f5e" strokeWidth="2" strokeDasharray="2,2" />
            <circle cx="30" cy="115" r="6" fill="#f43f5e" />
            <text x="27.5" y="118" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="sans-serif">B</text>

            {/* Line C: Inseam */}
            <line x1="88" y1="80" x2="88" y2="210" stroke="#10b981" strokeWidth="2" strokeDasharray="2,2" />
            <circle cx="88" cy="145" r="6" fill="#10b981" />
            <text x="85.5" y="148" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="sans-serif">C</text>

            {/* Line D: Front Rise */}
            <line x1="106" y1="20" x2="106" y2="76" stroke="#a855f7" strokeWidth="2" />
            <circle cx="106" cy="48" r="6" fill="#a855f7" />
            <text x="103.5" y="51" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="sans-serif">D</text>

            {/* Line E: Thigh */}
            <line x1="50" y1="95" x2="98" y2="95" stroke="#f97316" strokeWidth="2" />
            <circle cx="74" cy="95" r="6" fill="#f97316" />
            <text x="71.5" y="98" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="sans-serif">E</text>

            {/* Line F: Leg Opening */}
            <line x1="40" y1="216" x2="75" y2="216" stroke="#06b6d4" strokeWidth="2" />
            <circle cx="57" cy="216" r="6" fill="#06b6d4" />
            <text x="54.5" y="219" fontSize="8" fontWeight="bold" fill="#000" fontFamily="sans-serif">F</text>
          </svg>
        </div>

        {/* Steps Legend */}
        <div className="space-y-3 font-mono">
          {steps.map((s) => (
            <div key={s.code} className="p-3 rounded-xl bg-neutral-900/80 border border-white/[0.06] flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {s.code}
              </span>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">{s.title}</h4>
                <p className="text-[11px] text-neutral-400 mt-0.5 font-sans leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
          <span>Лучше всего измерять свои любимые джинсы, которые сидят на вас идеально, а не мерять тело на весу сантиметром.</span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs font-mono active:scale-[0.99] transition-transform"
        >
          Понятно, вернуться к вещам
        </button>
      </div>
    </div>
  );
}
