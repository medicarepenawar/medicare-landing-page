export const MARKETPLACE_CATEGORIES = [
  { id: 1, name: "Obat", description: "Untuk berbagai keluhan", image: "/images/marketplace/bestseller_item.png" },
  { id: 2, name: "Kesehatan", description: "Sehari-hari lebih sehat", image: "/images/marketplace/promo_bottles.png" },
  { id: 3, name: "Perawatan Diri", description: "Tampil bersih & percaya diri", image: "/images/marketplace/category_medicines.png" },
  { id: 4, name: "Vitamin & Suplemen", description: "Jaga daya tahan tubuh", image: "/images/marketplace/promo_bottles.png" },
  { id: 5, name: "Ibu & Anak", description: "Kebutuhan si kecil", image: "/images/marketplace/category_medicines.png" },
  { id: 6, name: "Alat Kesehatan", description: "Dukung hidup sehat", image: "/images/marketplace/bestseller_item.png" }
];

export const MARKETPLACE_BESTSELLERS = [
  { 
    id: 1, 
    name: "Paracetamol 650mg", 
    variant: "Strip isi 10 Tablet", 
    originalPrice: "Rp15.000", 
    discountedPrice: "Rp12.000", 
    discountBadge: "-20%", 
    image: "/images/marketplace/bestseller_item.png" 
  },
  { 
    id: 2, 
    name: "Amoxicillin 500mg", 
    variant: "Strip isi 10 Kapsul", 
    originalPrice: "Rp19.000", 
    discountedPrice: "Rp15.000", 
    discountBadge: "-20%", 
    image: "/images/marketplace/bestseller_item.png" 
  },
  { 
    id: 3, 
    name: "Omega 3 Fish Oil", 
    variant: "Kapsul - 60 Kapsul", 
    originalPrice: "Rp178.000", 
    discountedPrice: "Rp139.000", 
    discountBadge: "-25%", 
    image: "/images/marketplace/promo_bottles.png" 
  },
  { 
    id: 4, 
    name: "Vitamin D3 60K", 
    variant: "Strip isi 4 Tablet", 
    originalPrice: "Rp60.000", 
    discountedPrice: "Rp45.000", 
    discountBadge: "-25%", 
    image: "/images/marketplace/category_medicines.png" 
  },
  { 
    id: 5, 
    name: "Saline Nasal Spray", 
    variant: "20ml", 
    originalPrice: "Rp100.000", 
    discountedPrice: "Rp75.000", 
    discountBadge: "-25%", 
    image: "/images/marketplace/bestseller_item.png" 
  },
  { 
    id: 6, 
    name: "AccuSure Blood Glucose", 
    variant: "Monitor", 
    originalPrice: "Rp640.000", 
    discountedPrice: "Rp499.000", 
    discountBadge: "-22%", 
    image: "/images/marketplace/category_medicines.png" 
  }
];

export const MARKETPLACE_BENEFITS = [
  { id: 1, title: "Resep Dokter", subtitle: "Upload & Hemat Waktu" },
  { id: 2, title: "Konsultasi Apoteker", subtitle: "Kami Siap Membantu" },
  { id: 3, title: "Pengiriman Cepat", subtitle: "Tepat Waktu, Setiap Saat" },
  { id: 4, title: "Retur Mudah", subtitle: "Tanpa Ribet" }
];

export const MARKETPLACE_PRODUCT_DETAIL = {
  id: 1,
  name: "Paracetamol 650mg",
  variant: "Strip isi 10 Tablet",
  description: "Efektif untuk meredakan sakit kepala, nyeri tubuh, dan demam dengan cepat. Paracetamol 650mg memberikan aksi kuat melawan rasa sakit namun tetap lembut di lambung. Cocok untuk orang dewasa dan anak di atas 12 tahun.",
  originalPrice: "15.000",
  discountedPrice: "12.000",
  discountBadge: "-20%",
  image: "/images/marketplace/bestseller_item.png",
  manufacturer: "PharmaCare Inc.",
  stock: 124,
  highlights: [
    "Pereda nyeri bekerja cepat",
    "Menurunkan suhu tubuh/demam",
    "Aman di lambung"
  ]
};

export const MARKETPLACE_CART_ITEMS = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    variant: "Strip isi 10 Tablet",
    price: 12000,
    quantity: 2,
    image: "/images/marketplace/bestseller_item.png"
  },
  {
    id: 4,
    name: "Vitamin D3 60K",
    variant: "Strip isi 4 Tablet",
    price: 45000,
    quantity: 1,
    image: "/images/marketplace/category_medicines.png"
  }
];
