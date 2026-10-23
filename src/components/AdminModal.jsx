import React, { useState, useRef } from 'react';
import { 
  X, Plus, Image, Check, Trash2, Edit3, 
  ShieldCheck, Sliders, Palette, LogOut, CheckCircle2 
} from 'lucide-react';
import { THEMES } from '../data/themes';

export function AdminModal({
  isOpen,
  onClose,
  items,
  onSaveItem,
  onDeleteItem,
  currentThemeId,
  onChangeTheme,
  logoFont,
  onChangeLogoFont,
  onLogoutMaster
}) {
  const [activeTab, setActiveTab] = useState('themes'); // 'themes', 'add', 'manage'
  const [editingItem, setEditingItem] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Джинсы',
    status: 'В наличии',
    priceUah: 2000,
    priceUsd: 50,
    images: [''],
    fit: '',
    description: '',
    measurements: {
      waist: '',
      outseam: '',
      inseam: '',
      legOpening: ''
    }
  });

  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleStartEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      category: item.category || 'Джинсы',
      status: item.status || 'В наличии',
      priceUah: item.priceUah || (typeof item.price === 'string' ? parseInt(item.price.replace(/\D/g, '')) || 2000 : 2000),
      priceUsd: item.priceUsd || 50,
      images: item.images && item.images.length > 0 ? [...item.images] : [''],
      fit: item.fit || '',
      description: item.description || '',
      measurements: {
        waist: item.measurements?.waist || '',
        outseam: item.measurements?.outseam || '',
        inseam: item.measurements?.inseam || '',
        legOpening: item.measurements?.legOpening || ''
      }
    });
    setActiveTab('add');
  };

  const handleResetForm = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Джинсы',
      status: 'В наличии',
      priceUah: 2000,
      priceUsd: 50,
      images: [''],
      fit: '',
      description: '',
      measurements: {
        waist: '',
        outseam: '',
        inseam: '',
        legOpening: ''
      }
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setFormData(prev => ({
        ...prev,
        images: [base64, ...prev.images.filter(img => img && img.trim() !== '')]
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Укажите название изделия!');
      return;
    }

    const itemToSave = {
      id: editingItem ? editingItem.id : `cut-${Date.now()}`,
      title: formData.title.trim(),
      category: formData.category,
      status: formData.status,
      priceUah: Number(formData.priceUah) || 2000,
      priceUsd: Number(formData.priceUsd) || 50,
      images: formData.images.filter(img => img && img.trim() !== ''),
      fit: formData.fit.trim(),
      description: formData.description.trim(),
      measurements: formData.measurements,
      tailoredBy: 'CUTLINERS Rework',
      createdAt: editingItem ? editingItem.createdAt : new Date().toISOString().split('T')[0]
    };

    if (itemToSave.images.length === 0) {
      itemToSave.images = ['./assets/items/rework-01.jpg'];
    }

    onSaveItem(itemToSave);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      handleResetForm();
      setActiveTab('manage');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#0d0e14] rounded-2xl border border-white/[0.08] shadow-2xl p-4 sm:p-5 text-neutral-200 z-10 max-h-[85vh] overflow-y-auto space-y-4 my-auto">
        
        {/* Header with Title, Close, and LOG OUT Button */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-white/[0.08] text-neutral-200">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-sm text-white font-mono flex items-center gap-1.5">
                Мастерская Cutliners
              </h2>
              <span className="text-[10px] text-neutral-400 font-mono">
                Панель управления • 13 & nishikiken
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Prominent Log Out Button */}
            <button
              onClick={onLogoutMaster}
              className="py-1 px-2.5 rounded-lg bg-red-950/70 hover:bg-red-900 border border-red-500/40 text-red-300 text-[10px] font-mono flex items-center gap-1 transition-all active:scale-95"
              title="Выйти из админки"
            >
              <LogOut className="w-3 h-3" />
              <span>Выйти</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimalist Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/40 rounded-xl border border-white/[0.04] text-xs font-mono">
          <button
            onClick={() => setActiveTab('themes')}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
              activeTab === 'themes'
                ? 'bg-white/[0.1] text-white font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Palette className="w-3 h-3" />
            <span>Темы</span>
          </button>

          <button
            onClick={() => {
              if (activeTab !== 'add') handleResetForm();
              setActiveTab('add');
            }}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
              activeTab === 'add'
                ? 'bg-white/[0.1] text-white font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Plus className="w-3 h-3" />
            <span>{editingItem ? 'Правка' : '+ Вещь'}</span>
          </button>

          <button
            onClick={() => setActiveTab('manage')}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
              activeTab === 'manage'
                ? 'bg-white/[0.1] text-white font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span>Вещи ({items.length})</span>
          </button>
        </div>

        {/* TAB 1: THEMES */}
        {activeTab === 'themes' && (
          <div className="space-y-3 font-mono text-xs">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
              Выбери активную тему для сайта:
            </span>

            <div className="grid grid-cols-2 gap-2">
              {Object.values(THEMES).map((th) => {
                const isActive = currentThemeId === th.id;
                return (
                  <button
                    key={th.id}
                    onClick={() => onChangeTheme(th.id)}
                    className={`p-2.5 rounded-xl border text-left flex flex-col justify-between gap-1 transition-all ${
                      isActive
                        ? 'border-white/30 bg-white/[0.1] text-white shadow-sm'
                        : 'border-white/[0.04] bg-black/40 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs truncate">{th.titleRu.split('(')[0]}</span>
                      {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span className="text-[9px] text-neutral-500">
                      {isActive ? '● Включена' : 'Включить'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Typography selection */}
            <div className="pt-2 border-t border-white/[0.04]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1.5">
                Шрифт логотипа:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onChangeLogoFont('calligraphy')}
                  className={`p-2 rounded-lg border text-center ${
                    logoFont === 'calligraphy' ? 'border-white/30 bg-white/[0.08] text-white' : 'border-white/[0.04] text-neutral-400'
                  }`}
                >
                  <span className="font-calligraphy text-xl block">Cutliners</span>
                  <span className="text-[8px] text-neutral-500">Каллиграфия</span>
                </button>
                <button
                  onClick={() => onChangeLogoFont('gothic')}
                  className={`p-2 rounded-lg border text-center ${
                    logoFont === 'gothic' ? 'border-white/30 bg-white/[0.08] text-white' : 'border-white/[0.04] text-neutral-400'
                  }`}
                >
                  <span className="font-gothic text-base block">Cutliners</span>
                  <span className="text-[8px] text-neutral-500">Готика</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADD / EDIT GARMENT */}
        {activeTab === 'add' && (
          <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
              {editingItem ? `Правка: ${editingItem.title}` : 'Добавить новую сшитую вещь'}
            </span>

            {/* Photo Upload */}
            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] space-y-2">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2 px-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs flex items-center justify-center gap-2 text-neutral-300"
              >
                <Image className="w-3.5 h-3.5 text-neutral-300" />
                <span>Загрузить фото с телефона</span>
              </button>

              {formData.images?.[0] && (
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-950 border border-white/[0.06]">
                  <img src={formData.images[0]} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Title & Category */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-neutral-500 block mb-0.5">Название *</label>
                <input
                  type="text"
                  required
                  placeholder="Rework Wide Cut"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-[#12131a] border border-white/[0.08] rounded-lg p-2 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-[10px] text-neutral-500 block mb-0.5">Категория</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-[#12131a] border border-white/[0.08] rounded-lg p-2 text-white text-xs"
                >
                  <option value="Джинсы">Джинсы</option>
                  <option value="Куртки">Куртки</option>
                  <option value="Шорты">Шорты</option>
                  <option value="Аксессуары">Аксессуары</option>
                </select>
              </div>
            </div>

            {/* Price in UAH and USD */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-neutral-500 block mb-0.5">Цена в Гривнах (₴)</label>
                <input
                  type="number"
                  placeholder="2200"
                  value={formData.priceUah}
                  onChange={(e) => setFormData(prev => ({ ...prev, priceUah: e.target.value }))}
                  className="w-full bg-[#12131a] border border-white/[0.08] rounded-lg p-2 text-white text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] text-neutral-500 block mb-0.5">Цена в Долларах ($)</label>
                <input
                  type="number"
                  placeholder="55"
                  value={formData.priceUsd}
                  onChange={(e) => setFormData(prev => ({ ...prev, priceUsd: e.target.value }))}
                  className="w-full bg-[#12131a] border border-white/[0.08] rounded-lg p-2 text-white text-xs"
                />
              </div>
            </div>

            {/* Status & Short Note */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-neutral-500 block mb-0.5">Статус</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full bg-[#12131a] border border-white/[0.08] rounded-lg p-2 text-white text-xs"
                >
                  <option value="В наличии">В наличии</option>
                  <option value="Под заказ">Под заказ</option>
                  <option value="Продано">Продано</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-neutral-500 block mb-0.5">Крой / Детали</label>
                <input
                  type="text"
                  placeholder="Wide Baggy / Дистресс"
                  value={formData.fit}
                  onChange={(e) => setFormData(prev => ({ ...prev, fit: e.target.value }))}
                  className="w-full bg-[#12131a] border border-white/[0.08] rounded-lg p-2 text-white text-xs"
                />
              </div>
            </div>

            {/* Measurements (Clean & Simple) */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.04] space-y-1.5">
              <span className="text-[10px] text-neutral-400 font-bold block">Замеры вещи:</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Пояс, см"
                  value={formData.measurements.waist}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    measurements: { ...prev.measurements, waist: e.target.value }
                  }))}
                  className="bg-[#12131a] border border-white/[0.08] rounded-lg p-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Длина, см"
                  value={formData.measurements.outseam}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    measurements: { ...prev.measurements, outseam: e.target.value }
                  }))}
                  className="bg-[#12131a] border border-white/[0.08] rounded-lg p-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Шаговый шов, см"
                  value={formData.measurements.inseam}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    measurements: { ...prev.measurements, inseam: e.target.value }
                  }))}
                  className="bg-[#12131a] border border-white/[0.08] rounded-lg p-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Выход низа, см"
                  value={formData.measurements.legOpening}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    measurements: { ...prev.measurements, legOpening: e.target.value }
                  }))}
                  className="bg-[#12131a] border border-white/[0.08] rounded-lg p-1.5 text-xs text-white"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-white/[0.1] hover:bg-white/[0.15] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/[0.08] active:scale-[0.99]"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Сохранено!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>{editingItem ? 'Обновить вещь' : 'Опубликовать вещь'}</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 3: MANAGE ITEMS */}
        {activeTab === 'manage' && (
          <div className="space-y-2 font-mono text-xs">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
              Все вещи в каталоге ({items.length})
            </span>

            <div className="space-y-1.5 max-h-[45vh] overflow-y-auto no-scrollbar pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-2 rounded-xl bg-black/40 border border-white/[0.04] flex items-center justify-between gap-2.5"
                >
                  <img
                    src={item.images?.[0] || './assets/items/rework-01.jpg'}
                    alt={item.title}
                    className="w-10 h-12 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                    <p className="text-[10px] text-neutral-400">
                      {item.priceUah ? `${item.priceUah} ₴` : item.price} • {item.status}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-neutral-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Удалить "${item.title}"?`)) {
                          onDeleteItem(item.id);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-red-950/60 text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
