import React, { useState, useEffect } from 'react';
import { INITIAL_ITEMS } from './data/initialCatalog';
import { THEMES } from './data/themes';
import { Header } from './components/Header';
import { HalloweenDecor } from './components/HalloweenDecor';
import { ThemeDecors } from './components/ThemeDecors';
import { CategoryFilter } from './components/CategoryFilter';
import { ItemCard } from './components/ItemCard';
import { ItemDetailModal } from './components/ItemDetailModal';
import { MeasurementGuideModal } from './components/MeasurementGuideModal';
import { AdminModal } from './components/AdminModal';
import { CustomOrderSection } from './components/CustomOrderSection';
import { BottomNav } from './components/BottomNav';
import { Scissors, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  // 1. Persistent Catalog items
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cutliners_catalog_v2');
      return saved ? JSON.parse(saved) : INITIAL_ITEMS;
    } catch {
      return INITIAL_ITEMS;
    }
  });

  // 2. Active Theme (Halloween by default)
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('cutliners_theme') || 'halloween';
  });

  // 3. Logo Typography Font (Calligraphy with flourishes by default)
  const [logoFont, setLogoFont] = useState(() => {
    return localStorage.getItem('cutliners_font') || 'calligraphy';
  });

  // 4. Contacts for Orders
  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem('cutliners_contacts');
      return saved ? JSON.parse(saved) : { telegram: '@cutliners', whatsapp: '+79991234567' };
    } catch {
      return { telegram: '@cutliners', whatsapp: '+79991234567' };
    }
  });

  // 5. Master Mode state (unlocked for the 2 friends)
  const [isMasterMode, setIsMasterMode] = useState(() => {
    return localStorage.getItem('cutliners_master_unlocked') === 'true';
  });

  // UI state
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' (2 columns) or 'list' (1 column)
  const [pinInput, setPinInput] = useState('');
  const [showPinPrompt, setShowPinPrompt] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('cutliners_catalog_v2', JSON.stringify(items));
    } catch (e) {
      console.warn('LocalStorage limit reached for large photos', e);
    }
  }, [items]);

  useEffect(() => {
    localStorage.setItem('cutliners_theme', currentThemeId);
  }, [currentThemeId]);

  useEffect(() => {
    localStorage.setItem('cutliners_font', logoFont);
  }, [logoFont]);

  useEffect(() => {
    localStorage.setItem('cutliners_contacts', JSON.stringify(contacts));
  }, [contacts]);

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
      const fabricMatch = item.fabric?.toLowerCase().includes(q);
      const fitMatch = item.fit?.toLowerCase().includes(q);
      const descMatch = item.description?.toLowerCase().includes(q);
      matchSearch = titleMatch || fabricMatch || fitMatch || descMatch;
    }

    return matchCat && matchSearch;
  });

  // Master Access Trigger
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
      alert('Неверный код доступа. Быстрый код для вас с другом: 777');
    }
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

  const handleImportCatalog = (newItems) => {
    setItems(newItems);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${currentTheme.bgGradient} text-neutral-200 flex flex-col items-center selection:bg-amber-500/30 selection:text-amber-200 transition-colors duration-500`}>
      
      {/* Mobile-first Container (Full width on phones, centered on wider screens) */}
      <div className="w-full max-w-md min-h-screen bg-[#08080c] relative flex flex-col pb-24 shadow-2xl">
        
        {/* Subtle background noise texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />

        {/* Holiday Decorations */}
        {currentThemeId === 'halloween' ? (
          <HalloweenDecor />
        ) : (
          <ThemeDecors themeId={currentThemeId} />
        )}

        {/* App Header (Brand Plaque & Calligraphic Logo) */}
        <Header
          currentTheme={currentTheme}
          logoFont={logoFont}
          onOpenAdmin={handleOpenAdmin}
          onOpenGuide={() => setIsGuideOpen(true)}
          isMasterMode={isMasterMode}
        />

        {/* Main Content */}
        <main className="relative z-10 px-3.5 py-3 space-y-4 flex-grow">
          
          {/* Welcome Intro for Visitors */}
          <div className="text-center pt-1 pb-0.5">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-500">
              HANDCRAFTED BESPOKE DENIM
            </span>
            <h2 className="text-xs sm:text-sm font-medium text-neutral-300 mt-0.5 font-sans">
              Шьем джинсы и одежду на заказ. Вручную, штучно, по вашим меркам.
            </h2>
          </div>

          {/* Search, View Mode Toggle & Category Filter Pills */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            currentTheme={currentTheme}
            viewMode={viewMode}
            onToggleViewMode={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')}
          />

          {/* Master mode active banner */}
          {isMasterMode && (
            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-bold">Режим мастеров включен</span>
              </div>
              <button
                onClick={() => setIsAdminOpen(true)}
                className="text-[11px] text-amber-400 hover:underline"
              >
                + Добавить вещь / Тема
              </button>
            </div>
          )}

          {/* Product Catalog Grid (Clean 2-Column Mobile Grid or 1-Column Editorial) */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 px-1">
              <span>Каталог изделий</span>
              <span>{filteredItems.length} {filteredItems.length === 1 ? 'вещь' : 'вещей'}</span>
            </div>

            {filteredItems.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-2.5' : 'grid grid-cols-1 gap-3.5'}>
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onSelect={(it) => setSelectedItem(it)}
                    currentTheme={currentTheme}
                    isMasterMode={isMasterMode}
                    onEdit={() => setIsAdminOpen(true)}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 px-4 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-2">
                <p className="text-neutral-400 text-xs font-mono">Ничего не найдено</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Все');
                    setSearchQuery('');
                  }}
                  className="text-xs text-amber-400 underline font-mono"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>

          {/* Custom Tailoring Section */}
          <CustomOrderSection
            contacts={contacts}
            onOpenGuide={() => setIsGuideOpen(true)}
            currentTheme={currentTheme}
          />

          {/* Mobile Footer */}
          <footer className="pt-4 pb-2 text-center space-y-1.5 font-mono text-neutral-500 text-[10px] border-t border-white/[0.06]">
            <div className="flex items-center justify-center gap-1.5 text-neutral-400">
              <Scissors className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold tracking-widest text-neutral-200">CUTLINERS</span>
              <span>• Raw Denim Atelier</span>
            </div>
            <p className="text-neutral-500">
              Ручной крой • Персональные замеры • Японский деним
            </p>
            <div className="text-neutral-600">
              Активная тема: <strong className="text-neutral-400">{currentTheme.titleRu}</strong>
            </div>
          </footer>

        </main>

        {/* Mobile Sticky Bottom Nav Bar */}
        <BottomNav
          activeTab={selectedCategory}
          onOpenGuide={() => setIsGuideOpen(true)}
          onOpenAdmin={handleOpenAdmin}
          isMasterMode={isMasterMode}
          contacts={contacts}
        />

      </div>

      {/* Item Detail Modal / Bottom Sheet */}
      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onOpenGuide={() => setIsGuideOpen(true)}
          contacts={contacts}
          currentTheme={currentTheme}
        />
      )}

      {/* Measurement Guide Modal */}
      {isGuideOpen && (
        <MeasurementGuideModal onClose={() => setIsGuideOpen(false)} />
      )}

      {/* Admin / Master Atelier Control Modal */}
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
        contacts={contacts}
        onUpdateContacts={setContacts}
        onImportCatalog={handleImportCatalog}
      />

      {/* PIN Prompt Modal for Master Mode */}
      {showPinPrompt && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xs bg-[#0e0f16] rounded-3xl border border-amber-500/30 p-5 text-neutral-200 font-mono space-y-4 shadow-2xl">
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
              Вход для вас с другом: добавление вещей, точные замеры и переключение тем.
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
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs active:scale-[0.99]"
              >
                Войти в мастерскую
              </button>

              <button
                type="button"
                onClick={() => handleUnlockMaster('777')}
                className="w-full text-center text-[10px] text-neutral-500 hover:text-amber-400 underline"
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
