// Rework / Upcycling Catalog items for CUTLINERS
export const INITIAL_ITEMS = [
  {
    id: 'cut-001',
    title: 'Rework Double-Knee Wide Cut',
    category: 'Джинсы',
    status: 'В наличии',
    priceUah: 2200,
    priceUsd: 55,
    images: [
      './assets/items/rework-01.jpg',
      './assets/items/rework-02.jpg'
    ],
    fabric: 'Кастомный перешив (винтажный плотный хлопок)',
    composition: '100% Хлопок (детали из нескольких отобранных пар)',
    fit: 'Wide Leg / Relaxed Stacking',
    description: 'Ручной перешив из отобранных пар винтажного денима. Двойные накладные панели на коленях, усиленные тройные швы, аккуратные потертости и необработанный низ штанины.',
    measurements: {
      waist: '84 см',
      outseam: '110 см',
      inseam: '81 см',
      frontRise: '32 см',
      backRise: '40 см',
      thigh: '34 см',
      legOpening: '25 см'
    },
    tailoredBy: 'CUTLINERS Rework',
    featured: true,
    createdAt: '2026-10-22'
  },
  {
    id: 'cut-002',
    title: 'Distressed Patchwork Baggy Jeans',
    category: 'Джинсы',
    status: 'Под заказ',
    priceUah: 2500,
    priceUsd: 62,
    images: [
      './assets/items/rework-02.jpg',
      './assets/items/rework-03.jpg'
    ],
    fabric: 'Перешив из контрастного денима разных оттенков',
    composition: '100% Винтажный хлопок',
    fit: 'Straight Baggy',
    description: 'Пэчворк-силуэт, собранный из разных фактур денима. Индивидуальный подбор вставок, контрастные нити, петля под инструмент и свободная посадка.',
    measurements: {
      waist: '80 см',
      outseam: '108 см',
      inseam: '79 см',
      frontRise: '31 см',
      backRise: '39 см',
      thigh: '33 см',
      legOpening: '24 см'
    },
    tailoredBy: 'CUTLINERS Rework',
    featured: true,
    createdAt: '2026-10-21'
  },
  {
    id: 'cut-003',
    title: 'Custom Flare Raw Edge Denim',
    category: 'Джинсы',
    status: 'В наличии',
    priceUah: 2100,
    priceUsd: 52,
    images: [
      './assets/items/rework-03.jpg',
      './assets/items/rework-01.jpg'
    ],
    fabric: 'Винтажный деним с клиньями-вставками',
    composition: '100% Хлопок',
    fit: 'Flared / Клеш от колена',
    description: 'Перешитые джинсы с вшитыми боковыми клиньями для создания массивного клеш-силуэта на обувь. Необработанный срез снизу с ручной бахромой.',
    measurements: {
      waist: '82 см',
      outseam: '112 см',
      inseam: '84 см',
      frontRise: '29 см',
      backRise: '38 см',
      thigh: '31 см',
      legOpening: '27 см'
    },
    tailoredBy: 'CUTLINERS Rework',
    featured: true,
    createdAt: '2026-10-20'
  },
  {
    id: 'cut-004',
    title: 'Heavy Rework Chore Jacket',
    category: 'Куртки',
    status: 'Под заказ',
    priceUah: 3200,
    priceUsd: 80,
    images: [
      './assets/items/rework-04.jpg',
      './assets/items/rework-05.jpg'
    ],
    fabric: 'Перешив из нескольких винтажных курток и джинс',
    composition: 'Плотный хлопковый деним',
    fit: 'Boxy / Оверсайз крой',
    description: 'Куртка мастера, полностью пересобранная вручную. Большие накладные карманы, прочные металлические болты, усиленная планка и воротник.',
    measurements: {
      chest: '122 см',
      length: '70 см',
      shoulders: '53 см',
      sleeve: '64 см'
    },
    tailoredBy: 'CUTLINERS Rework',
    featured: false,
    createdAt: '2026-10-19'
  },
  {
    id: 'cut-005',
    title: 'Vintage Grey Wide Skater Jeans',
    category: 'Джинсы',
    status: 'В наличии',
    priceUah: 1950,
    priceUsd: 48,
    images: [
      './assets/items/rework-05.jpg',
      './assets/items/rework-06.jpg'
    ],
    fabric: 'Серый вытертый винтажный деним',
    composition: '100% Хлопок',
    fit: 'Ultra Baggy Skater',
    description: 'Широкие оверсайз-штаны из пепельно-серого денима. Перешитый расширенный пояс со скрытой подгонкой, эффект естественного износа.',
    measurements: {
      waist: '86 см',
      outseam: '110 см',
      inseam: '81 см',
      frontRise: '33 см',
      backRise: '42 см',
      thigh: '35 см',
      legOpening: '26 см'
    },
    tailoredBy: 'CUTLINERS Rework',
    featured: false,
    createdAt: '2026-10-18'
  }
];

export const CATEGORIES = ['Все', 'Джинсы', 'Куртки', 'В наличии', 'Под заказ'];
