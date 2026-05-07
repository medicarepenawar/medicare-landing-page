import nurseImg from "../../assets/img/main/nurse.png";

// Expanded Nurse Dummy Data
export const NURSES_DATA_EXPANDED = [
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
      { id: 1, name: "Home Nursing Visit", icon: "🏠" },
      { id: 2, name: "Wound Dressing & Care", icon: "🩹" },
      { id: 3, name: "Injection & Medication Administration", icon: "💉" },
      { id: 4, name: "Post-Hospital Discharge Care", icon: "🏥" },
      { id: 5, name: "Elderly & Bedridden Care", icon: "👴" },
      { id: 6, name: "Vital Signs Monitoring", icon: "❤️" },
      { id: 7, name: "Catheter & Tube Management", icon: "📋" },
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
      { id: 1, name: "Home Nursing Visit", icon: "🏠" },
      { id: 2, name: "Wound Dressing & Care", icon: "🩹" },
      { id: 3, name: "Injection & Medication Administration", icon: "💉" },
      { id: 4, name: "Post-Hospital Discharge Care", icon: "🏥" },
      { id: 5, name: "Elderly & Bedridden Care", icon: "👴" },
      { id: 6, name: "Vital Signs Monitoring", icon: "❤️" },
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
      { id: 1, name: "Home Nursing Visit", icon: "🏠" },
      { id: 2, name: "Pediatric Care", icon: "👶" },
      { id: 3, name: "Injection & Medication Administration", icon: "💉" },
      { id: 4, name: "Newborn Care", icon: "🍼" },
      { id: 5, name: "Family Health Management", icon: "👨‍👩‍👧‍👦" },
      { id: 6, name: "Vital Signs Monitoring", icon: "❤️" },
      { id: 7, name: "Health Education", icon: "📚" },
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
  {
    id: 4,
    slug: "rn-priya-kumar",
    name: "RN Priya Kumar",
    title: "Registered Nurse (RN)",
    specialization: "Chronic Disease Management",
    image: nurseImg,
    rating: 4.8,
    totalReviews: 178,
    bio: "Expert Chronic Disease Management",
    description: "Specializes in managing chronic conditions including diabetes, hypertension, and cardiac care with comprehensive patient education.",
    experience: {
      years: "9+ Years",
      field: "in Disease Management",
    },
    language: {
      primary: "English",
      secondary: "Malay",
    },
    careApproach: {
      style: "Proactive",
      focus: "Disease Prevention",
      reliability: "Highly Reliable",
    },
    clientRating: {
      stars: 4.8,
      outOfFive: 5,
      percentage: 95,
    },
    servicesOffered: [
      { id: 1, name: "Chronic Disease Monitoring", icon: "📊" },
      { id: 2, name: "Blood Pressure Monitoring", icon: "❤️" },
      { id: 3, name: "Diabetes Care & Education", icon: "💊" },
      { id: 4, name: "Medication Management", icon: "💉" },
      { id: 5, name: "Lifestyle Counseling", icon: "🏃" },
      { id: 6, name: "Dietary Guidance", icon: "🥗" },
    ],
    availability: {
      type: "Monday - Friday 8AM - 6PM",
      flexibleHours: true,
      sameDay: true,
      availableNow: false,
    },
    serviceCoverage: {
      areas: ["Kepong", "Damansara", "Ampang"],
    },
    consultationFee: {
      amount: "RM 80",
      note: "*Package rates available for regular monitoring",
    },
    whyChoose: [
      {
        id: 1,
        title: "Chronic Disease Expert",
        description: "Certified in disease management programs",
      },
      {
        id: 2,
        title: "Patient Education Focus",
        description: "Empowers patients with knowledge",
      },
      {
        id: 3,
        title: "Preventive Care Specialist",
        description: "Focuses on disease prevention",
      },
      {
        id: 4,
        title: "Holistic Approach",
        description: "Considers overall wellness",
      },
    ],
  },
  {
    id: 5,
    slug: "rn-james-lim",
    name: "RN James Lim",
    title: "Registered Nurse (RN)",
    specialization: "Post-Surgery & Recovery Care",
    image: nurseImg,
    rating: 4.9,
    totalReviews: 213,
    bio: "Specialized Post-Surgery Care",
    description: "Expert in post-operative care, surgical wound management, and recovery optimization to ensure smooth healing.",
    experience: {
      years: "10+ Years",
      field: "in Surgical Nursing",
    },
    language: {
      primary: "English",
      secondary: "Mandarin",
    },
    careApproach: {
      style: "Professional",
      focus: "Recovery-Oriented",
      reliability: "Extremely Reliable",
    },
    clientRating: {
      stars: 4.9,
      outOfFive: 5,
      percentage: 97,
    },
    servicesOffered: [
      { id: 1, name: "Post-Surgery Care", icon: "🏥" },
      { id: 2, name: "Wound Management", icon: "🩹" },
      { id: 3, name: "Drain Care", icon: "💧" },
      { id: 4, name: "Pain Management", icon: "💊" },
      { id: 5, name: "Physiotherapy Support", icon: "🏃" },
      { id: 6, name: "Infection Prevention", icon: "🛡️" },
      { id: 7, name: "Recovery Monitoring", icon: "📈" },
    ],
    availability: {
      type: "24/7 Emergency Available",
      flexibleHours: true,
      sameDay: true,
      availableNow: true,
    },
    serviceCoverage: {
      areas: ["Bukit Jalil", "Mid Valley", "Bangsar"],
    },
    consultationFee: {
      amount: "RM 100",
      note: "*Emergency calls available 24/7",
    },
    whyChoose: [
      {
        id: 1,
        title: "Surgical Nursing Expert",
        description: "10+ years in surgical care",
      },
      {
        id: 2,
        title: "Infection Prevention Specialist",
        description: "Advanced wound care protocols",
      },
      {
        id: 3,
        title: "24/7 Availability",
        description: "Emergency support always available",
      },
      {
        id: 4,
        title: "Recovery Accelerator",
        description: "Proven fast recovery techniques",
      },
    ],
  },
  {
    id: 6,
    slug: "rn-lisa-wong",
    name: "RN Lisa Wong",
    title: "Registered Nurse (RN)",
    specialization: "Mental Health & Wellness",
    image: nurseImg,
    rating: 4.7,
    totalReviews: 156,
    bio: "Mental Health & Wellness Support",
    description: "Provides compassionate mental health support and wellness counseling for patients dealing with stress, anxiety, and depression.",
    experience: {
      years: "6+ Years",
      field: "in Mental Health Care",
    },
    language: {
      primary: "English",
      secondary: "Malay",
    },
    careApproach: {
      style: "Empathetic",
      focus: "Holistic Wellness",
      reliability: "Dependable",
    },
    clientRating: {
      stars: 4.7,
      outOfFive: 5,
      percentage: 92,
    },
    servicesOffered: [
      { id: 1, name: "Mental Health Counseling", icon: "🧠" },
      { id: 2, name: "Stress Management", icon: "🧘" },
      { id: 3, name: "Anxiety Support", icon: "💆" },
      { id: 4, name: "Wellness Coaching", icon: "🌟" },
      { id: 5, name: "Lifestyle Modification", icon: "🏃" },
      { id: 6, name: "Sleep Counseling", icon: "😴" },
    ],
    availability: {
      type: "Daily 9AM - 8PM",
      flexibleHours: true,
      sameDay: false,
      availableNow: false,
    },
    serviceCoverage: {
      areas: ["Pavilion", "Mont Kiara", "Bangsar"],
    },
    consultationFee: {
      amount: "RM 90",
      note: "*Packages available for weekly sessions",
    },
    whyChoose: [
      {
        id: 1,
        title: "Mental Health Specialist",
        description: "Certified in mental health nursing",
      },
      {
        id: 2,
        title: "Empathetic & Supportive",
        description: "Creates safe therapeutic environment",
      },
      {
        id: 3,
        title: "Holistic Wellness",
        description: "Mind-body-spirit approach",
      },
      {
        id: 4,
        title: "Evidence-Based Methods",
        description: "Uses proven therapeutic techniques",
      },
    ],
  },
  {
    id: 7,
    slug: "cn-nina-osman",
    name: "CN Nina Osman",
    title: "Community Nurse (CN)",
    specialization: "Elderly & Palliative Care",
    image: nurseImg,
    rating: 4.8,
    totalReviews: 267,
    bio: "Compassionate Elderly & Palliative Care",
    description: "Specialized in elderly care and palliative services, providing comfort-focused care and end-of-life support.",
    experience: {
      years: "11+ Years",
      field: "in Elderly Care",
    },
    language: {
      primary: "Malay",
      secondary: "English",
    },
    careApproach: {
      style: "Compassionate",
      focus: "Comfort-Centered",
      reliability: "Highly Reliable",
    },
    clientRating: {
      stars: 4.8,
      outOfFive: 5,
      percentage: 96,
    },
    servicesOffered: [
      { id: 1, name: "Elderly Care", icon: "👴" },
      { id: 2, name: "Palliative Care", icon: "🤝" },
      { id: 3, name: "Dementia Support", icon: "🧠" },
      { id: 4, name: "Mobility Assistance", icon: "🚶" },
      { id: 5, name: "Personal Hygiene Care", icon: "🛁" },
      { id: 6, name: "Family Counseling", icon: "👨‍👩‍👧" },
    ],
    availability: {
      type: "Daily (Subject to Booking)",
      flexibleHours: true,
      sameDay: true,
      availableNow: true,
    },
    serviceCoverage: {
      areas: ["Setapak", "Wangsa Maju", "Selayang"],
    },
    consultationFee: {
      amount: "RM 70",
      note: "*Long-term care discounts available",
    },
    whyChoose: [
      {
        id: 1,
        title: "Elderly Care Specialist",
        description: "11+ years with elderly patients",
      },
      {
        id: 2,
        title: "Palliative Care Certified",
        description: "Compassionate end-of-life care",
      },
      {
        id: 3,
        title: "Family-Oriented",
        description: "Supports whole family system",
      },
      {
        id: 4,
        title: "Dementia Trained",
        description: "Specialized in cognitive decline",
      },
    ],
  },
];

export const getNurseBySlugExpanded = (slug: string) => {
  return NURSES_DATA_EXPANDED.find((nurse) => nurse.slug === slug);
};
