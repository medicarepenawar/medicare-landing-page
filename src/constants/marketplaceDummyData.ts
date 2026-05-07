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
    image: "/images/marketplace/bestseller_item.png",
  },
  {
    id: 4,
    name: "Vitamin D3 60K",
    variant: "Strip isi 4 Tablet",
    price: 45000,
    quantity: 1,
    image: "/images/marketplace/category_medicines.png",
  },
];

// Nurse Dummy Data
export const NURSES_DATA = [
  {
    id: 1,
    name: "SRN Mary",
    title: "State Registered Nurse (SRN)",
    specialization: "Professional Home Nursing Care",
    image: "/images/doctors/default-nurse.jpg",
    rating: 4.8,
    totalReviews: 256,
    bio: "Trusted Nursing Care by SRN Mary",
    description: "Experienced, compassionate, and professional — SRN Mary delivers quality nursing care directly to your home through the Medicare platform.",
    experience: {
      years: "5+ Years",
      field: "in Nursing Care",
    },
    language: {
      primary: "Malay",
      secondary: "English",
    },
    careApproach: {
      style: "Compassionate",
      focus: "Patient-Centered",
      reliability: "Reliable",
    },
    clientRating: {
      stars: 4.8,
      outOfFive: 5,
      percentage: 96,
    },
    servicesOffered: [
      {
        id: 1,
        name: "Home Nursing Visit",
        icon: "🏠",
      },
      {
        id: 2,
        name: "Wound Dressing & Care",
        icon: "🩹",
      },
      {
        id: 3,
        name: "Injection & Medication Administration",
        icon: "💉",
      },
      {
        id: 4,
        name: "Post-Hospital Discharge Care",
        icon: "🏥",
      },
      {
        id: 5,
        name: "Elderly & Bedridden Care",
        icon: "👴",
      },
      {
        id: 6,
        name: "Vital Signs Monitoring",
        icon: "❤️",
      },
      {
        id: 7,
        name: "Catheter & Tube Management",
        icon: "📋",
      },
    ],
    availability: {
      type: "Daily (Subject to Booking)",
      flexibleHours: true,
      sameDay: true,
      availableNow: true,
    },
    serviceCoverage: {
      areas: ["Johor Bahru", "Pasir Gudang", "Surrounding Areas"],
    },
    consultationFee: {
      amount: "RM XX",
      note: "*Final fee depends on service type and distance",
    },
    whyChoose: [
      {
        id: 1,
        title: "Registered & Verified Nurse",
        description: "Certified professional healthcare provider",
      },
      {
        id: 2,
        title: "Experienced in Home Care",
        description: "Years of expertise in home-based nursing",
      },
      {
        id: 3,
        title: "Professional & Compassionate",
        description: "Dedicated to patient care and comfort",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Trusted healthcare network support",
      },
    ],
  },
  {
    id: 2,
    name: "SRN Ahmed",
    title: "State Registered Nurse (SRN)",
    specialization: "General & Specialized Nursing",
    image: "/images/doctors/default-nurse.jpg",
    rating: 4.7,
    totalReviews: 189,
    bio: "Expert Care by SRN Ahmed",
    description: "Professional nursing services with expertise in general care, post-operative management, and chronic disease monitoring.",
    experience: {
      years: "7+ Years",
      field: "in Healthcare",
    },
    language: {
      primary: "English",
      secondary: "Malay",
    },
    careApproach: {
      style: "Professional",
      focus: "Holistic Care",
      reliability: "Dependable",
    },
    clientRating: {
      stars: 4.7,
      outOfFive: 5,
      percentage: 94,
    },
    servicesOffered: [
      {
        id: 1,
        name: "Home Nursing Visit",
        icon: "🏠",
      },
      {
        id: 2,
        name: "Wound Dressing & Care",
        icon: "🩹",
      },
      {
        id: 3,
        name: "Injection & Medication Administration",
        icon: "💉",
      },
      {
        id: 4,
        name: "Post-Hospital Discharge Care",
        icon: "🏥",
      },
      {
        id: 5,
        name: "Elderly & Bedridden Care",
        icon: "👴",
      },
      {
        id: 6,
        name: "Vital Signs Monitoring",
        icon: "❤️",
      },
    ],
    availability: {
      type: "Daily (Subject to Booking)",
      flexibleHours: true,
      sameDay: true,
      availableNow: true,
    },
    serviceCoverage: {
      areas: ["Kuala Lumpur", "Selangor", "Surrounding Areas"],
    },
    consultationFee: {
      amount: "RM XX",
      note: "*Final fee depends on service type and distance",
    },
    whyChoose: [
      {
        id: 1,
        title: "Registered & Verified Nurse",
        description: "Certified professional healthcare provider",
      },
      {
        id: 2,
        title: "Experienced in Home Care",
        description: "Years of expertise in home-based nursing",
      },
      {
        id: 3,
        title: "Professional & Compassionate",
        description: "Dedicated to patient care and comfort",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Trusted healthcare network support",
      },
    ],
  },
  {
    id: 3,
    name: "SRN Sarah",
    title: "State Registered Nurse (SRN)",
    specialization: "Pediatric & Family Nursing",
    image: "/images/doctors/default-nurse.jpg",
    rating: 4.9,
    totalReviews: 342,
    bio: "Gentle Care by SRN Sarah",
    description: "Specialized in pediatric nursing and family healthcare. Compassionate care for all age groups with focus on patient comfort.",
    experience: {
      years: "8+ Years",
      field: "in Family Nursing",
    },
    language: {
      primary: "English",
      secondary: "Malay",
    },
    careApproach: {
      style: "Compassionate",
      focus: "Family-Centered",
      reliability: "Reliable",
    },
    clientRating: {
      stars: 4.9,
      outOfFive: 5,
      percentage: 98,
    },
    servicesOffered: [
      {
        id: 1,
        name: "Home Nursing Visit",
        icon: "🏠",
      },
      {
        id: 2,
        name: "Pediatric Care",
        icon: "👶",
      },
      {
        id: 3,
        name: "Injection & Medication Administration",
        icon: "💉",
      },
      {
        id: 4,
        name: "Newborn Care",
        icon: "🍼",
      },
      {
        id: 5,
        name: "Family Health Management",
        icon: "👨‍👩‍👧‍👦",
      },
      {
        id: 6,
        name: "Vital Signs Monitoring",
        icon: "❤️",
      },
      {
        id: 7,
        name: "Health Education",
        icon: "📚",
      },
    ],
    availability: {
      type: "Daily (Subject to Booking)",
      flexibleHours: true,
      sameDay: true,
      availableNow: true,
    },
    serviceCoverage: {
      areas: ["Petaling Jaya", "Subang Jaya", "Klang Valley"],
    },
    consultationFee: {
      amount: "RM XX",
      note: "*Final fee depends on service type and distance",
    },
    whyChoose: [
      {
        id: 1,
        title: "Registered & Verified Nurse",
        description: "Certified professional healthcare provider",
      },
      {
        id: 2,
        title: "Specialized in Family Care",
        description: "Expert in pediatric and family nursing",
      },
      {
        id: 3,
        title: "Gentle & Patient",
        description: "Excellent bedside manner",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Trusted healthcare network support",
      },
    ],
  },
];

export const getNurseById = (id: string | number) => {
  return NURSES_DATA.find((nurse) => nurse.id === Number(id));
};
