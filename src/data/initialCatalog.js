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
    fit: 'Wide Leg / Двойные колени',
    description: 'Двойные коленные панели, бахрома по низу, усиленные швы.',
    measurements: {
      waist: '84 см',
      outseam: '110 см',
      inseam: '81 см',
      legOpening: '25 см'
    },
    tailoredBy: 'CUTLINERS',
    featured: true,
    createdAt: '2026-10-22'
  },
  {
    id: 'cut-002',
    title: 'Distressed Patchwork Baggy',
    category: 'Джинсы',
    status: 'Под заказ',
    priceUah: 2500,
    priceUsd: 62,
    images: [
      './assets/items/rework-02.jpg',
      './assets/items/rework-03.jpg'
    ],
    fit: 'Straight Baggy / Пэчворк',
    description: 'Контрастные вставки денима, кастомный дистресс, петля под инструмент.',
    measurements: {
      waist: '80 см',
      outseam: '108 см',
      inseam: '79 см',
      legOpening: '24 см'
    },
    tailoredBy: 'CUTLINERS',
    featured: true,
    createdAt: '2026-10-21'
  },
  {
    id: 'cut-003',
    title: 'Custom Flare Raw Edge',
    category: 'Джинсы',
    status: 'В наличии',
    priceUah: 2100,
    priceUsd: 52,
    images: [
      './assets/items/rework-03.jpg',
      './assets/items/rework-01.jpg'
    ],
    fit: 'Flared / Клеш от колена',
    description: 'Вшитые боковые клинья под массивную обувь, необработанный низ.',
    measurements: {
      waist: '82 см',
      outseam: '112 см',
      inseam: '84 см',
      legOpening: '27 см'
    },
    tailoredBy: 'CUTLINERS',
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
    fit: 'Boxy / Оверсайз куртка',
    description: 'Большие накладные карманы, металлические болты, усиленная планка.',
    measurements: {
      chest: '122 см',
      length: '70 см',
      shoulders: '53 см',
      sleeve: '64 см'
    },
    tailoredBy: 'CUTLINERS',
    featured: false,
    createdAt: '2026-10-19'
  },
  {
    id: 'cut-005',
    title: 'Vintage Grey Wide Skater',
    category: 'Джинсы',
    status: 'В наличии',
    priceUah: 1950,
    priceUsd: 48,
    images: [
      './assets/items/rework-05.jpg',
      './assets/items/rework-06.jpg'
    ],
    fit: 'Ultra Baggy Skater',
    description: 'Пепельно-серый винтажный деним, широкий крой со складками на кроссовки.',
    measurements: {
      waist: '86 см',
      outseam: '110 см',
      inseam: '81 см',
      legOpening: '26 см'
    },
    tailoredBy: 'CUTLINERS',
    featured: false,
    createdAt: '2026-10-18'
  }
];

export const CATEGORIES = ['Все', 'Джинсы', 'Куртки', 'В наличии', 'Под заказ'];
