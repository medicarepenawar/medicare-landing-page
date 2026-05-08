import nurseImg from "../../assets/img/main/nurse.png";

// Nurse Dummy Data
export const NURSES_DATA = [
  {
    id: 1,
    slug: "srn-mary",
    name: "SRN Mary",
    title: "State Registered Nurse (SRN)",
    specialization: "Professional Home Nursing Care",
    image: nurseImg,
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
    image: nurseImg,
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
    image: nurseImg,
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
