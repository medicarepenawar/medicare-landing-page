import labImg from "../../assets/img/main/lab.png";

// Lab Dummy Data
export const LABS_DATA = [
  {
    id: 1,
    slug: "pathlab-diagnostics",
    name: "PathLab Diagnostics",
    title: "Accredited Diagnostic Laboratory",
    specialization: "Blood Test & Pathology",
    image: labImg,
    rating: 4.9,
    totalReviews: 412,
    bio: "Precision Diagnostics by PathLab",
    description:
      "PathLab Diagnostics is an accredited laboratory offering comprehensive blood testing, pathology, and diagnostic services. With state-of-the-art equipment and experienced lab technicians, we deliver accurate and timely results you can trust.",
    experience: {
      years: "12+ Years",
      field: "in Diagnostics",
    },
    certifications: {
      primary: "ISO 15189 Accredited",
      secondary: "MOH Certified",
    },
    turnaroundTime: {
      standard: "24–48 Hours",
      urgent: "Same Day (Urgent)",
    },
    testsOffered: [
      { id: 1, name: "Complete Blood Count (CBC)", icon: "🩸" },
      { id: 2, name: "Liver Function Test", icon: "🫁" },
      { id: 3, name: "Kidney Function Test", icon: "🔬" },
      { id: 4, name: "Lipid Profile", icon: "📊" },
      { id: 5, name: "Blood Sugar / HbA1c", icon: "💉" },
      { id: 6, name: "Thyroid Panel", icon: "🧬" },
      { id: 7, name: "Urinalysis", icon: "🧪" },
      { id: 8, name: "Allergy Testing", icon: "🤧" },
    ],
    operatingHours: {
      type: "Mon – Sat, 7:00 AM – 6:00 PM",
      walkIn: true,
      appointment: true,
      homeCollection: true,
    },
    serviceCoverage: {
      areas: ["Kuala Lumpur", "Bangsar", "Mont Kiara", "KLCC"],
    },
    pricing: {
      startingFrom: "RM 30",
      note: "*Prices vary depending on test type and package",
    },
    whyChoose: [
      {
        id: 1,
        title: "Accredited & Certified Lab",
        description: "ISO 15189 and MOH certified for reliable diagnostics",
      },
      {
        id: 2,
        title: "Fast Turnaround Time",
        description: "Get results within 24–48 hours, same-day for urgent tests",
      },
      {
        id: 3,
        title: "Home Sample Collection",
        description: "Convenient sample collection at your doorstep",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Trusted healthcare network with digital results access",
      },
    ],
  },
  {
    id: 2,
    slug: "biomed-labs",
    name: "BioMed Labs",
    title: "Advanced Diagnostic Centre",
    specialization: "Radiology & Imaging",
    image: labImg,
    rating: 4.7,
    totalReviews: 287,
    bio: "Advanced Imaging at BioMed Labs",
    description:
      "BioMed Labs provides cutting-edge radiology and imaging services, from X-rays and ultrasounds to MRI and CT scans. Our team of radiologists and technicians ensures the highest quality diagnostic imaging.",
    experience: {
      years: "10+ Years",
      field: "in Medical Imaging",
    },
    certifications: {
      primary: "AELB Licensed",
      secondary: "MOH Certified",
    },
    turnaroundTime: {
      standard: "48–72 Hours",
      urgent: "24 Hours (Urgent)",
    },
    testsOffered: [
      { id: 1, name: "X-Ray", icon: "📷" },
      { id: 2, name: "Ultrasound", icon: "🔊" },
      { id: 3, name: "MRI Scan", icon: "🧲" },
      { id: 4, name: "CT Scan", icon: "🖥️" },
      { id: 5, name: "Mammography", icon: "🩺" },
      { id: 6, name: "Bone Density Scan", icon: "🦴" },
    ],
    operatingHours: {
      type: "Open 24/7",
      walkIn: true,
      appointment: true,
      homeCollection: false,
    },
    serviceCoverage: {
      areas: ["Petaling Jaya", "Subang Jaya", "Shah Alam"],
    },
    pricing: {
      startingFrom: "RM 80",
      note: "*Prices vary depending on imaging type and body area",
    },
    whyChoose: [
      {
        id: 1,
        title: "State-of-the-Art Equipment",
        description: "Latest imaging technology for accurate diagnostics",
      },
      {
        id: 2,
        title: "Expert Radiologists",
        description: "Board-certified specialists interpreting every scan",
      },
      {
        id: 3,
        title: "24/7 Availability",
        description: "Round-the-clock service for emergency imaging needs",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Digital report access and seamless booking",
      },
    ],
  },
  {
    id: 3,
    slug: "citylab-clinical",
    name: "CityLab Clinical",
    title: "Clinical Microbiology Laboratory",
    specialization: "Clinical Microbiology",
    image: labImg,
    rating: 4.8,
    totalReviews: 198,
    bio: "Expert Microbiology by CityLab",
    description:
      "CityLab Clinical specializes in clinical microbiology, offering culture and sensitivity testing, infectious disease screening, and antimicrobial resistance profiling. Trusted by hospitals and clinics across the region.",
    experience: {
      years: "8+ Years",
      field: "in Microbiology",
    },
    certifications: {
      primary: "ISO 15189 Accredited",
      secondary: "MOH Certified",
    },
    turnaroundTime: {
      standard: "3–5 Days",
      urgent: "48 Hours (Urgent)",
    },
    testsOffered: [
      { id: 1, name: "Culture & Sensitivity", icon: "🧫" },
      { id: 2, name: "Blood Culture", icon: "🩸" },
      { id: 3, name: "Urine Culture", icon: "🧪" },
      { id: 4, name: "STI Screening", icon: "🔬" },
      { id: 5, name: "TB Testing", icon: "🫁" },
      { id: 6, name: "Fungal Testing", icon: "🍄" },
    ],
    operatingHours: {
      type: "Mon – Fri, 8:00 AM – 5:00 PM",
      walkIn: true,
      appointment: true,
      homeCollection: true,
    },
    serviceCoverage: {
      areas: ["Johor Bahru", "Pasir Gudang", "Iskandar Puteri"],
    },
    pricing: {
      startingFrom: "RM 50",
      note: "*Prices vary depending on culture type and complexity",
    },
    whyChoose: [
      {
        id: 1,
        title: "Specialized in Microbiology",
        description: "Focused expertise in infectious disease diagnostics",
      },
      {
        id: 2,
        title: "Hospital-Grade Quality",
        description: "Trusted by leading hospitals and clinics",
      },
      {
        id: 3,
        title: "Home Sample Collection",
        description: "Convenient doorstep sample pickup service",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Secure digital results and referral integration",
      },
    ],
  },
  {
    id: 4,
    slug: "genescan-diagnostics",
    name: "GeneScan Diagnostics",
    title: "Genetic Testing & Molecular Diagnostics",
    specialization: "Genetic Testing & Screening",
    image: labImg,
    rating: 5.0,
    totalReviews: 156,
    bio: "Cutting-Edge Genetics by GeneScan",
    description:
      "GeneScan Diagnostics is a premier molecular diagnostics lab specializing in genetic testing, prenatal screening, pharmacogenomics, and cancer genomics. Our advanced sequencing technology provides precise and actionable results.",
    experience: {
      years: "6+ Years",
      field: "in Molecular Diagnostics",
    },
    certifications: {
      primary: "CAP Accredited",
      secondary: "ISO 15189 Certified",
    },
    turnaroundTime: {
      standard: "7–14 Days",
      urgent: "5 Days (Urgent)",
    },
    testsOffered: [
      { id: 1, name: "Genetic Carrier Screening", icon: "🧬" },
      { id: 2, name: "Prenatal Screening (NIPT)", icon: "🤰" },
      { id: 3, name: "Pharmacogenomics", icon: "💊" },
      { id: 4, name: "Cancer Genomics Panel", icon: "🔬" },
      { id: 5, name: "Whole Exome Sequencing", icon: "🧪" },
      { id: 6, name: "Hereditary Risk Assessment", icon: "📋" },
    ],
    operatingHours: {
      type: "Mon – Fri, 9:00 AM – 5:00 PM (Appointment Only)",
      walkIn: false,
      appointment: true,
      homeCollection: true,
    },
    serviceCoverage: {
      areas: ["Bangsar", "Kuala Lumpur", "Damansara", "Nationwide (via courier)"],
    },
    pricing: {
      startingFrom: "RM 250",
      note: "*Prices vary depending on panel type and complexity",
    },
    whyChoose: [
      {
        id: 1,
        title: "Internationally Accredited",
        description: "CAP accredited with highest quality standards",
      },
      {
        id: 2,
        title: "Advanced Sequencing Technology",
        description: "Next-generation sequencing for precise results",
      },
      {
        id: 3,
        title: "Expert Genetic Counselling",
        description: "Personalized support to understand your results",
      },
      {
        id: 4,
        title: "Backed by Medicare Platform",
        description: "Secure and confidential digital report delivery",
      },
    ],
  },
];

export const getLabBySlug = (slug: string) => {
  return LABS_DATA.find((lab) => lab.slug === slug);
};
