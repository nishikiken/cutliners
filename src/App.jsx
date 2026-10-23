import React, { useState, useEffect } from 'react';
import { INITIAL_ITEMS } from './data/initialCatalog';
import { THEMES } from './data/themes';
import { Header } from './components/Header';
import { HalloweenDecor } from './components/HalloweenDecor';
import { ThemeDecors } from './components/ThemeDecors';
import { AmbientAtmosphere } from './components/AmbientAtmosphere';
import { CategoryFilter } from './components/CategoryFilter';
import { ItemCard } from './components/ItemCard';
import { ItemDetailModal } from './components/ItemDetailModal';
import { MeasurementGuideModal } from './components/MeasurementGuideModal';
import { MasterOrderModal } from './components/MasterOrderModal';
import { AdminModal } from './components/AdminModal';
import { CustomOrderSection } from './components/CustomOrderSection';
import { BottomNav } from './components/BottomNav';
import { Scissors, ShieldCheck } from 'lucide-react';

export default function App() {
  // 1. Persistent Catalog items (rework focused)
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cutliners_rework_v5');
      return saved ? JSON.parse(saved) : INITIAL_ITEMS;
    } catch {
      return INITIAL_ITEMS;
    }
  });

  // 2. Currency: 'uah' (Гривны) or 'usd' (Доллары)
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('cutliners_currency') || 'uah';
  });

  // 3. Active Theme (Halloween by default)
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('cutliners_theme') || 'halloween';
  });

  // 4. Logo Typography Font
  const [logoFont, setLogoFont] = useState(() => {
    return localStorage.getItem('cutliners_font') || 'calligraphy';
  });

  // 5. Master Mode state
  const [isMasterMode, setIsMasterMode] = useState(() => {
    return localStorage.getItem('cutliners_master_unlocked') === 'true';
  });

  // UI state
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' (2 cols) or 'list' (1 col)
  const [pinInput, setPinInput] = useState('');
  const [showPinPrompt, setShowPinPrompt] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('cutliners_rework_v5', JSON.stringify(items));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [items]);

  useEffect(() => {
    localStorage.setItem('cutliners_currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('cutliners_theme', currentThemeId);
  }, [currentThemeId]);

  useEffect(() => {
    localStorage.setItem('cutliners_font', logoFont);
  }, [logoFont]);

  const currentTheme = THEMES[currentThemeId] || THEMES.halloween;

  // Filter items
  const filteredItems = items.filter((item) => {
    let matchCat = true;
    if (selectedCategory === 'В наличии') matchCat = item.status === 'В наличии';
    else if (selectedCategory === 'Под заказ') matchCat = item.status === 'Под заказ';
    else if (selectedCategory !== 'Все') matchCat = item.category === selectedCategory;

    let matchSearch = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const titleMatch = item.title?.toLowerCase().includes(q);
      const descMatch = item.description?.toLowerCase().includes(q);
      matchSearch = titleMatch || descMatch;
    }

    return matchCat && matchSearch;
  });

  const handleOpenAdmin = () => {
    if (isMasterMode) {
      setIsAdminOpen(true);
    } else {
      setShowPinPrompt(true);
    }
  };

  const handleUnlockMaster = (pin) => {
    if (pin === '777' || pin === '1312' || pin === 'admin') {
      setIsMasterMode(true);
      localStorage.setItem('cutliners_master_unlocked', 'true');
      setShowPinPrompt(false);
      setIsAdminOpen(true);
    } else {
      alert('Неверный код доступа. Быстрый код: 777');
    }
  };

  const handleLogoutMaster = () => {
    setIsMasterMode(false);
    localStorage.removeItem('cutliners_master_unlocked');
    setIsAdminOpen(false);
  };

  const handleSaveItem = (itemToSave) => {
    setItems((prev) => {
      const exists = prev.some((it) => it.id === itemToSave.id);
      if (exists) {
        return prev.map((it) => (it.id === itemToSave.id ? itemToSave : it));
      }
      return [itemToSave, ...prev];
    });
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleToggleCurrency = () => {
    setCurrency(prev => prev === 'uah' ? 'usd' : 'uah');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${currentTheme.bgGradient} text-neutral-200 flex flex-col items-center selection:bg-white/10 selection:text-white transition-colors duration-500`}>
      
      {/* Delicate, non-intrusive ambient particles for active theme */}
      <AmbientAtmosphere themeId={currentThemeId} />

      {/* Mobile-first Container (Full width on phones, padded for Telegram WebApp) */}
      <div className="w-full max-w-md min-h-screen bg-[#08080c] relative flex flex-col pb-24 shadow-2xl">
        
        {/* Subtle background noise texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />

        {/* Telegram WebApp-compatible Header (pt-24 gives plenty of room below Telegram Close/More HUD) */}
        <Header
          currentTheme={currentTheme}
          logoFont={logoFont}
          onOpenAdmin={handleOpenAdmin}
          onOpenGuide={() => setIsGuideOpen(true)}
          isMasterMode={isMasterMode}
          currency={currency}
          onToggleCurrency={handleToggleCurrency}
        />

        {/* Integrated Atelier Workshop Atmosphere Shelf (100% Transparent, no white boxes, no confetti) */}
        {currentThemeId === 'halloween' ? (
          <HalloweenDecor />
        ) : (
          <ThemeDecors themeId={currentThemeId} />
        )}

        {/* Main Content */}
        <main className="relative z-10 px-3 py-2 space-y-3 flex-grow">
          
          {/* Minimalist Search & Hidden Filter Menu */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            currentTheme={currentTheme}
            viewMode={viewMode}
            onToggleViewMode={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')}
          />

          {/* Master mode indicator if unlocked */}
          {isMasterMode && (
            <div className="py-1.5 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-bold">Мастер-режим активен</span>
              </div>
              <button
                onClick={() => setIsAdminOpen(true)}
                className="text-[11px] text-amber-400 hover:underline"
              >
                + Добавить вещь / Тема
              </button>
            </div>
          )}

          {/* Catalog Grid */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 px-1">
              <span>Каталог перешива</span>
              <span>{filteredItems.length} {filteredItems.length === 1 ? 'вещь' : 'вещей'}</span>
            </div>

            {filteredItems.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-1 gap-3'}>
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onSelect={(it) => setSelectedItem(it)}
                    currentTheme={currentTheme}
                    isMasterMode={isMasterMode}
                    onEdit={() => setIsAdminOpen(true)}
                    viewMode={viewMode}
                    currency={currency}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 px-4 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-2">
                <p className="text-neutral-400 text-xs font-mono">Ничего не найдено</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Все');
                    setSearchQuery('');
                  }}
                  className="text-xs text-neutral-400 hover:text-white underline font-mono"
                >
                  Сбросить поиск
                </button>
              </div>
            )}
          </div>

          {/* Custom Rework Tailoring Section with Intellectual & Visual Intermission Break */}
          <CustomOrderSection onOpenGuide={() => setIsGuideOpen(true)} />

          {/* Minimalist Footer */}
          <footer className="pt-3 pb-2 text-center space-y-1 font-mono text-neutral-600 text-[9px] border-t border-white/[0.04]">
            <div className="flex items-center justify-center gap-1.5 text-neutral-400">
              <Scissors className="w-3 h-3 text-neutral-500" />
              <span className="font-bold tracking-widest text-neutral-300">CUTLINERS</span>
              <span>• Rework Atelier</span>
            </div>
            <p className="text-neutral-600">
              Кастомный перешив винтажного денима под твои мерки
            </p>
          </footer>

        </main>

        {/* Mobile Sticky Bottom Nav Bar */}
        <BottomNav
          onOpenGuide={() => setIsGuideOpen(true)}
          onOpenAdmin={handleOpenAdmin}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          isMasterMode={isMasterMode}
        />

      </div>

      {/* Item Detail Modal (Minimalist, no novel-like fluff, top HUD clearance) */}
      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onOpenGuide={() => setIsGuideOpen(true)}
          currency={currency}
        />
      )}

      {/* Master Order Modal (Lets visitor pick between Nishiki & Vibe Code!) */}
      <MasterOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      {/* Measurement Guide Modal */}
      {isGuideOpen && (
        <MeasurementGuideModal onClose={() => setIsGuideOpen(false)} />
      )}

      {/* Admin Control Modal (With Log out button & pt-16 clearance) */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        items={items}
        onSaveItem={handleSaveItem}
        onDeleteItem={handleDeleteItem}
        currentThemeId={currentThemeId}
        onChangeTheme={setCurrentThemeId}
        logoFont={logoFont}
        onChangeLogoFont={setLogoFont}
        onLogoutMaster={handleLogoutMaster}
      />

      {/* PIN Prompt Modal */}
      {showPinPrompt && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xs bg-[#0e0f16] rounded-3xl border border-white/[0.08] p-5 text-neutral-200 font-mono space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Вход для мастеров</span>
              </div>
              <button
                onClick={() => setShowPinPrompt(false)}
                className="text-neutral-500 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 font-sans">
              Вход для Nishiki & Vibe Code: добавление вещей, замеры и темы.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUnlockMaster(pinInput);
              }}
              className="space-y-3"
            >
              <input
                type="password"
                autoFocus
                placeholder="Код доступа (777)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-center text-lg tracking-widest text-white focus:outline-none focus:border-amber-400"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-bold text-xs active:scale-[0.99] border border-white/[0.08]"
              >
                Войти в мастерскую
              </button>

              <button
                type="button"
                onClick={() => handleUnlockMaster('777')}
                className="w-full text-center text-[10px] text-neutral-500 hover:text-white underline"
              >
                Быстрый вход в 1 клик (код 777)
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
