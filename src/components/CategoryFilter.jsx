import React from 'react';
import { Search, LayoutGrid, Square, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/initialCatalog';

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  currentTheme,
  viewMode,
  onToggleViewMode
}) {
  return (
    <div className="space-y-2.5">
      {/* Search Input Bar & View Toggle */}
      <div className="flex items-center gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Поиск по названию, ткани (16oz, selvedge)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#111218] border border-white/[0.08] focus:border-amber-400/60 rounded-xl pl-9 pr-7 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all shadow-inner font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs font-mono p-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* View Mode Toggle Button: 2 Columns vs 1 Column */}
        <button
          onClick={onToggleViewMode}
          className="p-2 rounded-xl bg-[#111218] border border-white/[0.08] text-neutral-300 hover:text-white active:scale-95 transition-all shrink-0"
          title={viewMode === 'grid' ? 'Переключить на крупный вид' : 'Переключить на сетку в 2 колонки'}
        >
          {viewMode === 'grid' ? (
            <LayoutGrid className="w-4 h-4 text-amber-400" />
          ) : (
            <Square className="w-4 h-4 text-amber-400" />
          )}
        </button>
      </div>

      {/* Category Pills (Horizontal scrollable on mobile) */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-mono">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 rounded-full border whitespace-nowrap transition-all active:scale-95 ${
                isSelected
                  ? 'bg-neutral-100 text-black font-bold border-white shadow-[0_0_10px_rgba(255,255,255,0.25)]'
                  : 'bg-neutral-900/90 text-neutral-400 border-white/[0.07] hover:text-white hover:border-white/20'
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
