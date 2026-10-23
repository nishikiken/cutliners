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
import { Scissors, Sparkles, Smartphone, Monitor, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  // 1. Persistent Catalog items
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cutliners_catalog_v1');
      return saved ? JSON.parse(saved) : INITIAL_ITEMS;
    } catch {
      return INITIAL_ITEMS;
    }
  });

  // 2. Active Theme (Halloween by default as requested)
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
  const [editingItemFromCard, setEditingItemFromCard] = useState(null);
  const [pinInput, setPinInput] = useState('');
  const [showPinPrompt, setShowPinPrompt] = useState(false);
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('cutliners_catalog_v1', JSON.stringify(items));
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
    // Category filter
    let matchCat = true;
    if (selectedCategory === 'В наличии') matchCat = item.status === 'В наличии';
    else if (selectedCategory === 'Под заказ') matchCat = item.status === 'Под заказ';
    else if (selectedCategory !== 'Все') matchCat = item.category === selectedCategory;

    // Search query
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
    // Default PIN: 777 or any master code
    if (pin === '777' || pin === '1312' || pin === 'admin') {
      setIsMasterMode(true);
      localStorage.setItem('cutliners_master_unlocked', 'true');
      setShowPinPrompt(false);
      setIsAdminOpen(true);
    } else {
      alert('Неверный код доступа. Подсказка для создателей: 777');
    }
  };

  // Add / Edit / Delete items
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
      
      {/* Optional Desktop / Phone container switcher header indicator (for desktop preview testing) */}
      <div className="hidden lg:flex fixed top-3 right-3 z-50 items-center gap-2 bg-neutral-900/90 border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-400 backdrop-blur-md">
        <span>Вид:</span>
        <button
          onClick={() => setIsPhoneFrame(false)}
          className={`flex items-center gap-1 px-2 py-0.5 rounded-md ${!isPhoneFrame ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:text-white'}`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Адаптивный</span>
        </button>
        <button
          onClick={() => setIsPhoneFrame(true)}
          className={`flex items-center gap-1 px-2 py-0.5 rounded-md ${isPhoneFrame ? 'bg-amber-500/20 text-amber-300 font-bold' : 'hover:text-white'}`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Фрейм телефона</span>
        </button>
      </div>

      {/* Main Container: optimized strictly for mobile phones */}
      <div className={`w-full ${isPhoneFrame ? 'max-w-[420px] my-6 rounded-[38px] border-4 border-neutral-800 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden' : 'max-w-md sm:max-w-xl'} min-h-screen bg-[#08080c] relative flex flex-col pb-24 sm:pb-12 shadow-2xl transition-all`}>
        
        {/* Subtle background noise texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />

        {/* Holiday Decorations */}
        {currentThemeId === 'halloween' ? (
          <HalloweenDecor />
        ) : (
          <ThemeDecors themeId={currentThemeId} />
        )}

        {/* App Header (Brand Plaque & Logo) */}
        <Header
          currentTheme={currentTheme}
          logoFont={logoFont}
          onOpenAdmin={handleOpenAdmin}
          onOpenGuide={() => setIsGuideOpen(true)}
          isMasterMode={isMasterMode}
        />

        {/* Content Area */}
        <main className="relative z-10 px-4 py-4 space-y-5 flex-grow">
          
          {/* Welcome Intro for Visitors */}
          <div className="text-center pt-1 pb-1">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-500">
              HANDCRAFTED BESPOKE DENIM
            </span>
            <h2 className="text-sm font-medium text-neutral-300 mt-0.5 font-sans">
              Шьем джинсы и одежду на заказ. Вручную, штучно, без компромиссов.
            </h2>
          </div>

          {/* Search & Category Filter Pills */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            currentTheme={currentTheme}
          />

          {/* Master mode active alert badge */}
          {isMasterMode && (
            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Режим мастеров включен</span>
              </div>
              <button
                onClick={() => setIsAdminOpen(true)}
                className="text-[11px] underline text-amber-400 hover:text-amber-200"
              >
                + Добавить вещь / Сменить тему
              </button>
            </div>
          )}

          {/* Catalog Items Grid (Optimized 1 column on small phones, 2 on tablet) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
              <span>Каталог изделий</span>
              <span>{filteredItems.length} {filteredItems.length === 1 ? 'вещь' : 'вещей'}</span>
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onSelect={(it) => setSelectedItem(it)}
                    currentTheme={currentTheme}
                    isMasterMode={isMasterMode}
                    onEdit={(it) => {
                      setIsAdminOpen(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 px-4 rounded-3xl bg-neutral-900/40 border border-white/5 space-y-2">
                <p className="text-neutral-400 text-sm font-mono">По вашему запросу ничего не найдено</p>
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

          {/* Footer Notes */}
          <footer className="pt-6 pb-4 text-center space-y-2 font-mono text-neutral-500 text-[11px] border-t border-white/[0.06]">
            <div className="flex items-center justify-center gap-1.5 text-neutral-400">
              <Scissors className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold tracking-widest text-neutral-300">CUTLINERS</span>
              <span>• Raw Denim Atelier</span>
            </div>
            <p className="text-[10px]">
              Ручной крой • Персональные замеры • Японский и винтажный деним
            </p>
            <div className="pt-1 text-[10px] text-neutral-600">
              Текущая тема: <strong className="text-neutral-400">{currentTheme.titleRu}</strong>
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

      {/* PIN Prompt Modal for Master Mode (for Him and His Friend) */}
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
              Вход в мастерскую для добавления вещей, замеров и смены тем оформления.
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
