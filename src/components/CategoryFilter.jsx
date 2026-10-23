import React from 'react';
import { Search, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/initialCatalog';

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  currentTheme
}) {
  return (
    <div className="space-y-3">
      {/* Search Input Bar (Mobile-friendly) */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Поиск по названию, ткани (16oz, selvedge)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-[#111218] border border-white/[0.08] focus:border-amber-400/60 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all shadow-inner font-mono"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs font-mono"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Pills (Horizontal scrollable on mobile) */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 text-xs font-mono">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all active:scale-95 ${
                isSelected
                  ? 'bg-neutral-100 text-black font-bold border-white shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : 'bg-neutral-900/80 text-neutral-400 border-white/[0.07] hover:text-white hover:border-white/20'
              }`}
            >
              {cat === 'Все' && '⚡ '}
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
