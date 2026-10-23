import React, { useState, useRef } from 'react';
import { 
  X, Plus, Sparkles, Image, Check, Trash2, Edit3, 
  Download, Upload, ShieldCheck, Sliders, Palette, 
  Send, Phone, Type, Eye, AlertCircle, Copy
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
  contacts,
  onUpdateContacts,
  onImportCatalog
}) {
  const [activeTab, setActiveTab] = useState('themes'); // 'themes', 'add', 'manage', 'settings'
  const [editingItem, setEditingItem] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Джинсы',
    status: 'В наличии',
    price: '',
    images: [''],
    fabric: '',
    composition: '',
    fit: '',
    description: '',
    measurements: {
      waist: '',
      outseam: '',
      inseam: '',
      frontRise: '',
      backRise: '',
      thigh: '',
      legOpening: '',
      density: ''
    }
  });

  const [customFields, setCustomFields] = useState([]); // for extra measurements like chest, sleeve
  const [newFieldName, setNewFieldName] = useState('');
  const [newFieldValue, setNewFieldValue] = useState('');
  const [telegramHandle, setTelegramHandle] = useState(contacts.telegram);
  const [whatsappNumber, setWhatsappNumber] = useState(contacts.whatsapp);
  const [jsonImportText, setJsonImportText] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  // Preset dark aesthetic denim photos for fast testing
  const PRESET_PHOTOS = [
    'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=900&q=80'
  ];

  const handleStartEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      category: item.category || 'Джинсы',
      status: item.status || 'В наличии',
      price: item.price || '',
      images: item.images && item.images.length > 0 ? [...item.images] : [''],
      fabric: item.fabric || '',
      composition: item.composition || '',
      fit: item.fit || '',
      description: item.description || '',
      measurements: {
        waist: item.measurements?.waist || '',
        outseam: item.measurements?.outseam || '',
        inseam: item.measurements?.inseam || '',
        frontRise: item.measurements?.frontRise || '',
        backRise: item.measurements?.backRise || '',
        thigh: item.measurements?.thigh || '',
        legOpening: item.measurements?.legOpening || '',
        density: item.measurements?.density || ''
      }
    });

    // Check for custom measurements not in the standard set
    const standardKeys = ['waist', 'outseam', 'inseam', 'frontRise', 'backRise', 'thigh', 'knee', 'legOpening', 'density'];
    const extra = [];
    if (item.measurements) {
      Object.entries(item.measurements).forEach(([k, v]) => {
        if (!standardKeys.includes(k)) {
          extra.push({ name: k, value: v });
        }
      });
    }
    setCustomFields(extra);
    setActiveTab('add');
  };

  const handleResetForm = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Джинсы',
      status: 'В наличии',
      price: '',
      images: [''],
      fabric: '',
      composition: '',
      fit: '',
      description: '',
      measurements: {
        waist: '',
        outseam: '',
        inseam: '',
        frontRise: '',
        backRise: '',
        thigh: '',
        legOpening: '',
        density: ''
      }
    });
    setCustomFields([]);
  };

  // Handle image upload from camera / phone gallery
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      // Base64 string
      const base64 = reader.result;
      setFormData(prev => ({
        ...prev,
        images: [base64, ...prev.images.filter(img => img && img.trim() !== '')]
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddCustomField = () => {
    if (!newFieldName.trim() || !newFieldValue.trim()) return;
    setCustomFields(prev => [...prev, { name: newFieldName.trim(), value: newFieldValue.trim() }]);
    setNewFieldName('');
    setNewFieldValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Укажите название изделия!');
      return;
    }

    // Merge standard & custom measurements
    const finalMeasurements = {};
    Object.entries(formData.measurements).forEach(([k, v]) => {
      if (v && v.trim()) finalMeasurements[k] = v.trim();
    });
    customFields.forEach(cf => {
      if (cf.name && cf.value) finalMeasurements[cf.name] = cf.value;
    });

    const itemToSave = {
      id: editingItem ? editingItem.id : `cut-${Date.now()}`,
      title: formData.title.trim(),
      category: formData.category,
      status: formData.status,
      price: formData.price.trim() || 'По запросу',
      images: formData.images.filter(img => img && img.trim() !== ''),
      fabric: formData.fabric.trim(),
      composition: formData.composition.trim(),
      fit: formData.fit.trim(),
      description: formData.description.trim(),
      measurements: finalMeasurements,
      tailoredBy: 'CUTLINERS Atelier',
      createdAt: editingItem ? editingItem.createdAt : new Date().toISOString().split('T')[0]
    };

    if (itemToSave.images.length === 0) {
      itemToSave.images = [PRESET_PHOTOS[0]];
    }

    onSaveItem(itemToSave);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      handleResetForm();
      setActiveTab('manage');
    }, 800);
  };

  // Export catalog as JSON
  const handleExportJSON = () => {
    const dataStr = JSON.stringify(items, null, 2);
    navigator.clipboard.writeText(dataStr);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleApplyImport = () => {
    try {
      const parsed = JSON.parse(jsonImportText);
      if (Array.isArray(parsed)) {
        onImportCatalog(parsed);
        alert('Каталог успешно обновлен и загружен!');
        setJsonImportText('');
        setActiveTab('manage');
      } else {
        alert('Ошибка: формат данных должен быть массивом вещей.');
      }
    } catch {
      alert('Неверный формат JSON! Проверьте скопированный текст.');
    }
  };

  const handleSaveContacts = () => {
    onUpdateContacts({
      telegram: telegramHandle.trim(),
      whatsapp: whatsappNumber.trim()
    });
    alert('Контакты обновлены!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#0c0d12] rounded-3xl border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.15)] p-4 sm:p-6 text-neutral-200 z-10 max-h-[92vh] overflow-y-auto no-scrollbar space-y-4">
        
        {/* Header with Title & Close */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg text-white font-mono flex items-center gap-2">
                Мастерская CUTLINERS
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
                  Admin
                </span>
              </h2>
              <p className="text-[11px] text-neutral-400 font-mono">
                Панель для тебя и твоего друга: темы, пошив, замеры
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-4 gap-1.5 p-1 bg-black/50 rounded-2xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setActiveTab('themes')}
            className={`py-2 px-1 rounded-xl flex items-center justify-center gap-1 transition-all ${
              activeTab === 'themes'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="truncate">Темы</span>
          </button>

          <button
            onClick={() => {
              if (activeTab !== 'add') handleResetForm();
              setActiveTab('add');
            }}
            className={`py-2 px-1 rounded-xl flex items-center justify-center gap-1 transition-all ${
              activeTab === 'add'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="truncate">{editingItem ? 'Правка' : '+ Вещь'}</span>
          </button>

          <button
            onClick={() => setActiveTab('manage')}
            className={`py-2 px-1 rounded-xl flex items-center justify-center gap-1 transition-all ${
              activeTab === 'manage'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="truncate">Каталог ({items.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`py-2 px-1 rounded-xl flex items-center justify-center gap-1 transition-all ${
              activeTab === 'settings'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span className="truncate">Связь & Синхр</span>
          </button>
        </div>

        {/* TAB 1: THEMES & TYPOGRAPHY */}
        {activeTab === 'themes' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-amber-400 mb-2">
                Активная праздничная тема сайта
              </h3>
              <p className="text-[11px] text-neutral-400 font-mono mb-3">
                Выбери тему — она мгновенно включится на сайте для всех посетителей.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.values(THEMES).map((th) => {
                  const isActive = currentThemeId === th.id;
                  return (
                    <div
                      key={th.id}
                      onClick={() => onChangeTheme(th.id)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between gap-2 ${
                        isActive
                          ? 'border-amber-400 bg-amber-500/15 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                          : 'border-white/10 bg-neutral-900/60 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white font-mono">{th.titleRu}</span>
                        {isActive && (
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                        )}
                      </div>
                      <p className="text-[10px] text-neutral-400 font-mono line-clamp-2">
                        {th.holidayPhrase}
                      </p>
                      <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 pt-1 border-t border-white/[0.06]">
                        <span style={{ color: th.accentColor }}>● {th.badgeText}</span>
                        <span>{isActive ? 'ВКЛЮЧЕНА' : 'Включить →'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Logo Font Selector */}
            <div className="pt-3 border-t border-white/10">
              <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5" />
                Шрифт названия «CUTLINERS»
              </h3>
              <p className="text-[11px] text-neutral-400 font-mono mb-3">
                Выбери каллиграфию или готику, которая больше всего нравится:
              </p>

              <div className="grid grid-cols-3 gap-2 text-center">
                <button
                  onClick={() => onChangeLogoFont('calligraphy')}
                  className={`p-3 rounded-xl border transition-all ${
                    logoFont === 'calligraphy' 
                      ? 'border-amber-400 bg-amber-500/15 text-white' 
                      : 'border-white/10 bg-neutral-900/70 text-neutral-300'
                  }`}
                >
                  <span className="font-calligraphy text-2xl block">Cutliners</span>
                  <span className="text-[9px] font-mono text-neutral-400 mt-1 block">Каллиграфия (завитушки)</span>
                </button>

                <button
                  onClick={() => onChangeLogoFont('gothic')}
                  className={`p-3 rounded-xl border transition-all ${
                    logoFont === 'gothic' 
                      ? 'border-amber-400 bg-amber-500/15 text-white' 
                      : 'border-white/10 bg-neutral-900/70 text-neutral-300'
                  }`}
                >
                  <span className="font-gothic text-lg block">Cutliners</span>
                  <span className="text-[9px] font-mono text-neutral-400 mt-1 block">Готика (Blackletter)</span>
                </button>

                <button
                  onClick={() => onChangeLogoFont('cinzel')}
                  className={`p-3 rounded-xl border transition-all ${
                    logoFont === 'cinzel' 
                      ? 'border-amber-400 bg-amber-500/15 text-white' 
                      : 'border-white/10 bg-neutral-900/70 text-neutral-300'
                  }`}
                >
                  <span className="font-cinzel text-xs block tracking-widest">CUTLINERS</span>
                  <span className="text-[9px] font-mono text-neutral-400 mt-1 block">Декоративный антиква</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADD / EDIT GARMENT */}
        {activeTab === 'add' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-amber-400">
                {editingItem ? `Редактирование: ${editingItem.title}` : 'Добавление новой сшитой вещи'}
              </span>
              {editingItem && (
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="text-xs text-neutral-400 hover:text-white underline font-mono"
                >
                  Сбросить / Новая вещь
                </button>
              )}
            </div>

            {/* Photo Upload from Camera / Phone Gallery */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <label className="text-xs font-mono font-bold text-white flex items-center justify-between">
                <span>📸 Фотография сшитого изделия</span>
                <span className="text-[10px] text-amber-400">С телефона / галереи</span>
              </label>

              <div className="flex flex-col sm:flex-row gap-3 items-center">
                {/* Upload Button */}
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
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-white/10 text-xs font-mono flex items-center justify-center gap-2"
                >
                  <Image className="w-4 h-4 text-amber-400" />
                  <span>Загрузить фото с телефона</span>
                </button>

                <span className="text-xs text-neutral-500 font-mono">или выбери пресет:</span>

                {/* Quick Presets */}
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
                  {PRESET_PHOTOS.map((p, idx) => (
                    <img
                      key={idx}
                      src={p}
                      alt="Preset"
                      onClick={() => setFormData(prev => ({ ...prev, images: [p] }))}
                      className="w-10 h-10 rounded-lg object-cover cursor-pointer border border-white/20 hover:border-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Current Photo Preview */}
              {formData.images?.[0] && (
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-950 border border-white/10">
                  <img
                    src={formData.images[0]}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-[10px] text-white px-2 py-0.5 rounded font-mono">
                    Превью фото
                  </span>
                </div>
              )}
            </div>

            {/* Basic Info (Title, Category, Status, Price) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <label className="text-neutral-400 block mb-1">Название вещи *</label>
                <input
                  type="text"
                  required
                  placeholder="Например: Raw Indigo Wide Jeans 16oz"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Категория</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Джинсы">Джинсы</option>
                  <option value="Брюки">Брюки / Карго</option>
                  <option value="Куртки">Куртки / Жакеты</option>
                  <option value="Худи / Верх">Худи / Верх</option>
                  <option value="Аксессуары">Аксессуары</option>
                </select>
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Статус</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="В наличии">В наличии</option>
                  <option value="Под заказ">Под заказ (индивидуальный пошив)</option>
                  <option value="Архив / Продано">Архив / Продано</option>
                </select>
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Цена</label>
                <input
                  type="text"
                  placeholder="Например: 9 500 ₽"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Fabric & Fit */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <label className="text-neutral-400 block mb-1">Ткань / Плотность</label>
                <input
                  type="text"
                  placeholder="Например: 16oz Японский Raw Selvedge"
                  value={formData.fabric}
                  onChange={(e) => setFormData(prev => ({ ...prev, fabric: e.target.value }))}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Крой / Силуэт</label>
                <input
                  type="text"
                  placeholder="Например: Wide Leg / Relaxed"
                  value={formData.fit}
                  onChange={(e) => setFormData(prev => ({ ...prev, fit: e.target.value }))}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* DETAILED MEASUREMENTS (Замеры изделия) */}
            <div className="p-3.5 rounded-2xl bg-neutral-950 border border-amber-500/20 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  📐 Замеры изделия (в см)
                </span>
                <span className="text-[10px] text-neutral-400">Заполняйте то, что применимо</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <label className="text-[10px] text-neutral-400 block">Пояс (Waist)</label>
                  <input
                    type="text"
                    placeholder="84 см (W32)"
                    value={formData.measurements.waist}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, waist: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block">Длина внеш. шва</label>
                  <input
                    type="text"
                    placeholder="112 см"
                    value={formData.measurements.outseam}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, outseam: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block">Шаговый (Inseam)</label>
                  <input
                    type="text"
                    placeholder="82 см"
                    value={formData.measurements.inseam}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, inseam: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block">Низ (Выход)</label>
                  <input
                    type="text"
                    placeholder="25 см"
                    value={formData.measurements.legOpening}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, legOpening: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block">Посадка спереди</label>
                  <input
                    type="text"
                    placeholder="32 см"
                    value={formData.measurements.frontRise}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, frontRise: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block">Посадка сзади</label>
                  <input
                    type="text"
                    placeholder="40 см"
                    value={formData.measurements.backRise}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, backRise: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block">Бедро (Thigh)</label>
                  <input
                    type="text"
                    placeholder="34 см"
                    value={formData.measurements.thigh}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, thigh: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block">Плотность (oz)</label>
                  <input
                    type="text"
                    placeholder="16 oz"
                    value={formData.measurements.density}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      measurements: { ...prev.measurements, density: e.target.value }
                    }))}
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-white text-xs"
                  />
                </div>
              </div>

              {/* Custom additional measurement (for jackets/hoodies, etc.) */}
              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-[11px] text-neutral-400 block mb-1.5">
                  Дополнительный замер (например: Обхват груди, Длина куртки, Рукав):
                </span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Название (напр. Грудь)"
                    value={newFieldName}
                    onChange={(e) => setNewFieldName(e.target.value)}
                    className="w-1/2 bg-neutral-900 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Значение (напр. 120 см)"
                    value={newFieldValue}
                    onChange={(e) => setNewFieldValue(e.target.value)}
                    className="w-1/2 bg-neutral-900 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomField}
                    className="px-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-white font-bold"
                  >
                    +
                  </button>
                </div>

                {customFields.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {customFields.map((cf, idx) => (
                      <span key={idx} className="bg-neutral-800 text-amber-300 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                        {cf.name}: {cf.value}
                        <button
                          type="button"
                          onClick={() => setCustomFields(prev => prev.filter((_, i) => i !== idx))}
                          className="hover:text-red-400"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="font-mono text-xs">
              <label className="text-neutral-400 block mb-1">
                Описание изделия и особенности ручного пошива
              </label>
              <textarea
                rows={3}
                placeholder="Опишите швы, клепки, варку, посадку, как сидят..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full bg-neutral-900 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400 font-sans text-xs"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-black font-bold text-sm font-mono flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Сохранено в каталог!</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  <span>{editingItem ? 'Обновить вещь' : 'Опубликовать вещь на сайте'}</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 3: MANAGE ITEMS */}
        {activeTab === 'manage' && (
          <div className="space-y-3 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Все вещи в каталоге ({items.length})
              </span>
              <button
                onClick={() => {
                  handleResetForm();
                  setActiveTab('add');
                }}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Добавить еще</span>
              </button>
            </div>

            <div className="space-y-2 max-h-[50vh] overflow-y-auto no-scrollbar pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-between gap-3"
                >
                  <img
                    src={item.images?.[0] || PRESET_PHOTOS[0]}
                    alt={item.title}
                    className="w-12 h-14 rounded-lg object-cover shrink-0 border border-white/10"
                  />
                  <div className="flex-grow min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">
                      {item.price} • {item.status} • {item.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-amber-300"
                      title="Редактировать"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Удалить вещь "${item.title}"?`)) {
                          onDeleteItem(item.id);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-neutral-800 hover:bg-red-900/50 text-red-400"
                      title="Удалить"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CONTACTS & SYNC (ДЛЯ НЕГО И ДРУГА) */}
        {activeTab === 'settings' && (
          <div className="space-y-4 font-mono text-xs">
            {/* Contacts setup */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5" />
                Куда приходят заказы от клиентов
              </h3>
              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">
                  Telegram Username (куда переходят по кнопке Заказать)
                </label>
                <input
                  type="text"
                  placeholder="@cutliners_atelier"
                  value={telegramHandle}
                  onChange={(e) => setTelegramHandle(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl p-2.5 text-white text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">
                  WhatsApp Телефон (по желанию)
                </label>
                <input
                  type="text"
                  placeholder="+79991234567"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl p-2.5 text-white text-xs"
                />
              </div>

              <button
                type="button"
                onClick={handleSaveContacts}
                className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
              >
                Сохранить контакты
              </button>
            </div>

            {/* Sync Between Two Friends */}
            <div className="p-3.5 rounded-2xl bg-neutral-950 border border-amber-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Copy className="w-3.5 h-3.5" />
                  Синхронизация между твоим телефоном и телефоном друга
                </h3>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                Если один из вас добавил новые джинсы, нажмите <strong>«Экспорт в буфер»</strong>, отправьте код другу в Telegram, а друг вставит его сюда и нажмет <strong>«Импортировать»</strong>!
              </p>

              <button
                onClick={handleExportJSON}
                className="w-full py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold flex items-center justify-center gap-2 hover:bg-amber-500/30"
              >
                {copySuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Скопировано в буфер обмена!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Экспорт каталога (скопировать код)</span>
                  </>
                )}
              </button>

              <div className="pt-2">
                <label className="text-[10px] text-neutral-400 block mb-1">
                  Вставить код каталога от друга:
                </label>
                <textarea
                  rows={2}
                  placeholder="Вставьте сюда скопированный JSON от напарника..."
                  value={jsonImportText}
                  onChange={(e) => setJsonImportText(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl p-2 text-white text-[10px]"
                />
                {jsonImportText && (
                  <button
                    onClick={handleApplyImport}
                    className="w-full mt-2 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    Применить и обновить каталог
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
