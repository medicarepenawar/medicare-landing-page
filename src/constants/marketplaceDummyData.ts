export const MARKETPLACE_CATEGORIES = [
  { id: 1, name: "Medicines", description: "Care for every need", image: "/images/marketplace/bestseller_item.png" },
  { id: 2, name: "Health Care", description: "Stay healthy, every day", image: "/images/marketplace/promo_bottles.png" },
  { id: 3, name: "Personal Care", description: "Look good, feel great", image: "/images/marketplace/category_medicines.png" },
  { id: 4, name: "Wellness", description: "Stronger inside out", image: "/images/marketplace/promo_bottles.png" },
  { id: 5, name: "Baby Care", description: "Gentle care for little ones", image: "/images/marketplace/category_medicines.png" },
  { id: 6, name: "Elderly Care", description: "Care that matters", image: "/images/marketplace/bestseller_item.png" },
];

export const MARKETPLACE_BESTSELLERS = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    variant: "Strip of 15 Tablets",
    originalPrice: "RM35.00",
    discountedPrice: "RM28.00",
    discountBadge: "20% OFF",
    image: "/images/marketplace/bestseller_item.png",
  },
  {
    id: 2,
    name: "Amoxicillin 500mg",
    variant: "Strip of 10 Capsules",
    originalPrice: "RM65.00",
    discountedPrice: "RM52.00",
    discountBadge: "20% OFF",
    image: "/images/marketplace/bestseller_item.png",
  },
  {
    id: 3,
    name: "Omega 3 Fish Oil",
    variant: "Capsule - 60 Softgels",
    originalPrice: "RM399.00",
    discountedPrice: "RM299.00",
    discountBadge: "25% OFF",
    image: "/images/marketplace/promo_bottles.png",
  },
  {
    id: 4,
    name: "Vitamin D3 60K",
    variant: "Strip of 4 Tablets",
    originalPrice: "RM80.00",
    discountedPrice: "RM60.00",
    discountBadge: "25% OFF",
    image: "/images/marketplace/category_medicines.png",
  },
  {
    id: 5,
    name: "Saline Nasal Spray",
    variant: "20ml",
    originalPrice: "RM100.00",
    discountedPrice: "RM75.00",
    discountBadge: "25% OFF",
    image: "/images/marketplace/bestseller_item.png",
  },
  {
    id: 6,
    name: "AccuSure Blood Glucose",
    variant: "Monitor",
    originalPrice: "RM999.00",
    discountedPrice: "RM699.00",
    discountBadge: "22% OFF",
    image: "/images/marketplace/category_medicines.png",
  },
];

export const MARKETPLACE_BENEFITS = [
  { id: 1, title: "Order with Prescription", subtitle: "Upload & Save Time" },
  { id: 2, title: "Expert Pharmacist Support", subtitle: "We're Here to Help" },
  { id: 3, title: "Doorstep Delivery", subtitle: "On-time, Every time" },
  { id: 4, title: "Easy Returns & Refunds", subtitle: "Hassle-free Policy" },
];

export const MARKETPLACE_PRODUCT_DETAIL = {
  id: 1,
  name: "Paracetamol 650mg",
  variant: "Strip of 15 Tablets",
  description:
    "Effective for fast relief of headaches, body aches, and fever. Paracetamol 650mg provides strong action against pain while being gentle on the stomach. Suitable for adults and children over 12 years.",
  originalPrice: "35.00",
  discountedPrice: "28.00",
  discountBadge: "20% OFF",
  image: "/images/marketplace/bestseller_item.png",
  manufacturer: "PharmaCare Inc.",
  stock: 124,
  highlights: ["Fast acting pain relief", "Reduces body temperature/fever", "Gentle on the stomach"],
};

export const MARKETPLACE_CART_ITEMS = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    variant: "Strip of 15 Tablets",
    price: 28.0,
    quantity: 2,
    image: "/images/marketplace/bestseller_item.png",
  },
  {
    id: 4,
    name: "Vitamin D3 60K",
    variant: "Strip of 4 Tablets",
    price: 60.0,
    quantity: 1,
    image: "/images/marketplace/category_medicines.png",
  },
];

// Nurse Dummy Data
export const NURSES_DATA = [
  {
    id: 1,
    slug: "srn-mary",
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
    slug: "srn-ahmed",
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
    slug: "srn-sarah",
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

export const getNurseBySlug = (slug: string) => {
  return NURSES_DATA.find((nurse) => nurse.slug === slug);
};
