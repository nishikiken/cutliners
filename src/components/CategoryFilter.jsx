import React, { useState } from 'react';
import { Search, SlidersHorizontal, LayoutGrid, Square, Check, X } from 'lucide-react';
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isFilterActive = selectedCategory !== 'Все';

  return (
    <div className="relative space-y-2">
      {/* Top Search & Filter Actions Row */}
      <div className="flex items-center gap-2">
        {/* Minimalist Search by Title */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#111218] border border-white/[0.08] focus:border-amber-400/50 rounded-xl pl-8 pr-7 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all shadow-inner font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs font-mono p-0.5"
            >
              ✕
            </button>
          )}
        </div>

        {/* Hidden Filters Menu Toggle Button */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`px-2.5 py-2 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all active:scale-95 shrink-0 ${
            isFilterActive || isFilterOpen
              ? 'bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-sm'
              : 'bg-[#111218] border-white/[0.08] text-neutral-300 hover:text-white'
          }`}
          title="Скрытое меню фильтров"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] hidden xs:inline">{selectedCategory === 'Все' ? 'Фильтр' : selectedCategory}</span>
          {isFilterActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
        </button>

        {/* View Mode Toggle: 2 Columns vs 1 Column */}
        <button
          onClick={onToggleViewMode}
          className="p-2 rounded-xl bg-[#111218] border border-white/[0.08] text-neutral-300 hover:text-white active:scale-95 transition-all shrink-0"
          title={viewMode === 'grid' ? 'Крупный вид (1 колонка)' : 'Сетка (2 колонки)'}
        >
          {viewMode === 'grid' ? (
            <LayoutGrid className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <Square className="w-3.5 h-3.5 text-amber-400" />
          )}
        </button>
      </div>

      {/* Hidden Filter Popover / Dropdown Menu */}
      {isFilterOpen && (
        <div className="p-3 bg-[#111218] border border-white/10 rounded-2xl shadow-xl space-y-2 animate-in fade-in duration-200 font-mono text-xs z-30">
          <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400">Категория вещей:</span>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-neutral-500 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    onSelectCategory(cat);
                    setIsFilterOpen(false);
                  }}
                  className={`py-1.5 px-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400/60 text-white font-bold'
                      : 'bg-black/40 border-white/[0.05] text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="truncate">{cat}</span>
                  {isSelected && <Check className="w-3 h-3 text-amber-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {isFilterActive && (
            <button
              onClick={() => {
                onSelectCategory('Все');
                setIsFilterOpen(false);
              }}
              className="w-full text-center text-[10px] text-amber-400/80 hover:text-amber-300 pt-1 underline"
            >
              Сбросить фильтр
            </button>
          )}
        </div>
      )}
    </div>
  );
}
