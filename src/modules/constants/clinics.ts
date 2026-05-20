import clinicImg from "../../assets/img/main/clinic.png";

// Clinic Dummy Data
export const CLINICS_DATA = [
  {
    id: 1,
    slug: "pristine-health-clinic",
    name: "Pristine Health Clinic",
    title: "Premium General Practice Clinic",
    specialization: "General Practice",
    image: clinicImg,
    rating: 4.9,
    totalReviews: 523,
    bio: "Quality Healthcare at Pristine Health",
    description:
      "Pristine Health Clinic is a premium general practice clinic located in Mont Kiara, offering comprehensive primary care, health screenings, and preventive medicine. Our experienced team of doctors provides personalized care in a comfortable, modern setting.",
    experience: {
      years: "15+ Years",
      field: "in Primary Healthcare",
    },
    doctors: {
      total: 5,
      specializations: "General Practice, Internal Medicine",
    },
    facilities: {
      standard: "Modern & Fully Equipped",
      highlight: "In-house Lab & Pharmacy",
    },
    servicesOffered: [
      { id: 1, name: "General Consultation", icon: "🩺" },
      { id: 2, name: "Health Screening", icon: "📋" },
      { id: 3, name: "Vaccination", icon: "💉" },
      { id: 4, name: "Minor Surgery", icon: "🔪" },
      { id: 5, name: "Chronic Disease Management", icon: "❤️" },
      { id: 6, name: "Women's Health", icon: "👩" },
      { id: 7, name: "Child Health", icon: "👶" },
      { id: 8, name: "Travel Medicine", icon: "✈️" },
    ],
    operatingHours: {
      type: "Mon – Sat, 8:00 AM – 9:00 PM",
      sunday: "Sun, 9:00 AM – 1:00 PM",
      walkIn: true,
      appointment: true,
    },
    serviceCoverage: {
      areas: ["Mont Kiara", "Sri Hartamas", "Desa Sri Hartamas", "Dutamas"],
    },
    consultationFee: {
      amount: "RM 50",
      note: "*Consultation fee may vary for specialist services",
    },
    insurance: ["Panel clinic for major insurance providers", "Corporate health programs accepted"],
    whyChoose: [
      {
        id: 1,
        title: "Premium Facilities",
        description: "Modern clinic with in-house lab and pharmacy for convenience",
      },
      {
        id: 2,
        title: "Experienced Doctors",
        description: "Team of 5 qualified doctors with diverse specializations",
      },
      {
        id: 3,
        title: "Comprehensive Services",
        description: "From general checkups to chronic disease management",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Digital health records and seamless appointment booking",
      },
    ],
  },
  {
    id: 2,
    slug: "klinik-kesihatan-jaya",
    name: "Klinik Kesihatan Jaya",
    title: "Community Family Clinic",
    specialization: "Family Clinic",
    image: clinicImg,
    rating: 4.5,
    totalReviews: 341,
    bio: "Your Neighbourhood Family Clinic",
    description:
      "Klinik Kesihatan Jaya is a trusted community family clinic in Subang Jaya serving families for over a decade. We provide affordable and accessible primary healthcare, from routine checkups to urgent care, in a warm and welcoming environment.",
    experience: {
      years: "10+ Years",
      field: "in Family Medicine",
    },
    doctors: {
      total: 3,
      specializations: "Family Medicine, Pediatrics",
    },
    facilities: {
      standard: "Clean & Comfortable",
      highlight: "On-site Pharmacy",
    },
    servicesOffered: [
      { id: 1, name: "General Consultation", icon: "🩺" },
      { id: 2, name: "Family Health Checkup", icon: "👨‍👩‍👧‍👦" },
      { id: 3, name: "Vaccination", icon: "💉" },
      { id: 4, name: "Wound Care", icon: "🩹" },
      { id: 5, name: "Chronic Disease Management", icon: "❤️" },
      { id: 6, name: "Child Health", icon: "👶" },
    ],
    operatingHours: {
      type: "Mon – Fri, 8:30 AM – 5:00 PM",
      sunday: "Sat, 8:30 AM – 1:00 PM (Closed Sunday)",
      walkIn: true,
      appointment: true,
    },
    serviceCoverage: {
      areas: ["Subang Jaya", "USJ", "Puchong", "Sunway"],
    },
    consultationFee: {
      amount: "RM 35",
      note: "*Affordable rates for the whole family",
    },
    insurance: ["Panel clinic for selected insurers", "SOCSO accepted"],
    whyChoose: [
      {
        id: 1,
        title: "Affordable & Accessible",
        description: "Quality healthcare at budget-friendly prices",
      },
      {
        id: 2,
        title: "Family-Focused Care",
        description: "Dedicated to the health of every family member",
      },
      {
        id: 3,
        title: "Community Trusted",
        description: "Serving the Subang Jaya community for over 10 years",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Convenient digital booking and health records",
      },
    ],
  },
  {
    id: 3,
    slug: "sunrise-specialist-clinic",
    name: "Sunrise Specialist Clinic",
    title: "Multi-Specialty Medical Centre",
    specialization: "Multi-specialty Clinic",
    image: clinicImg,
    rating: 4.8,
    totalReviews: 467,
    bio: "Specialist Care Under One Roof",
    description:
      "Sunrise Specialist Clinic brings together specialists across multiple disciplines — from cardiology and dermatology to orthopedics and gastroenterology. Our integrated approach ensures comprehensive diagnostics and treatment plans tailored to each patient.",
    experience: {
      years: "12+ Years",
      field: "in Specialist Healthcare",
    },
    doctors: {
      total: 8,
      specializations: "Cardiology, Dermatology, Orthopedics, Gastro",
    },
    facilities: {
      standard: "State-of-the-Art",
      highlight: "In-house Lab, Imaging & Pharmacy",
    },
    servicesOffered: [
      { id: 1, name: "Specialist Consultation", icon: "🩺" },
      { id: 2, name: "Diagnostic Imaging", icon: "📷" },
      { id: 3, name: "Health Screening Packages", icon: "📋" },
      { id: 4, name: "Minor Procedures", icon: "🔪" },
      { id: 5, name: "Cardiac Assessment", icon: "❤️" },
      { id: 6, name: "Dermatology & Aesthetics", icon: "✨" },
      { id: 7, name: "Orthopedic Consultation", icon: "🦴" },
      { id: 8, name: "Gastro Consultation", icon: "🫁" },
    ],
    operatingHours: {
      type: "Mon – Sat, 8:00 AM – 8:00 PM",
      sunday: "Sun, 9:00 AM – 2:00 PM",
      walkIn: true,
      appointment: true,
    },
    serviceCoverage: {
      areas: ["Petaling Jaya", "Damansara", "Kelana Jaya", "Ara Damansara"],
    },
    consultationFee: {
      amount: "RM 80",
      note: "*Specialist consultation fees may vary by discipline",
    },
    insurance: ["Panel clinic for all major insurers", "Corporate wellness programs accepted"],
    whyChoose: [
      {
        id: 1,
        title: "Multi-Specialty Under One Roof",
        description: "Access multiple specialists without visiting different clinics",
      },
      {
        id: 2,
        title: "State-of-the-Art Facilities",
        description: "Modern equipment for accurate diagnostics and treatment",
      },
      {
        id: 3,
        title: "Integrated Care Approach",
        description: "Coordinated treatment plans across specialties",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Seamless digital experience from booking to results",
      },
    ],
  },
];

export const getClinicBySlug = (slug: string) => {
  return CLINICS_DATA.find((clinic) => clinic.slug === slug);
};
