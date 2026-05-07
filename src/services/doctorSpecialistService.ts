import type { Doctor } from "../types/doctor_specialist";


const doctorData: Doctor = {
    name: "Dr. Adrian Wijaya",
  specialty: "Cardiothoracic Specialist",
  hospital: "Heart & Vascular Center, Siloam Hospitals",
  gender: "Male",
  nationality: "Indonesian",
  phone: "+62 811-2345-6789",
  tags: ["Surgery", "15+ Years Exp."],
  bio: "Dr. Adrian Wijaya is a highly distinguished Cardiothoracic Surgeon with a decade and a half of clinical excellence. Specializing in minimally invasive cardiac surgery and robotic-assisted procedures, he has successfully performed over 1,200 complex surgeries. His patient-centric approach combines cutting-edge medical technology with compassionate care to ensure the best possible outcomes for cardiovascular patients.",
  mmcNumber: "120.445.67.89",
  apcNumber: "APC/2024/SPEC-9921",
  apcExpiry: "Dec 31, 2024",
  isApcExpired: true,
  address: {
    hospitalName: "Siloam Hospitals Lippo Village",
    street: "Jl. Siloam No. 6, Lippo Karawaci",
    city: "Tangerang, Banten, 15811",
  },
  education: [
    {
      year: "2015",
      degree: "Specialist Graduate",
      university: "University of Indonesia",
      major: "Cardiothoracic & Vascular Surgery",
      isLatest: true,
    },
    {
      year: "2009",
      degree: "Medical Degree",
      university: "Airlangga University",
      major: "Bachelor of Medicine",
      isLatest: false,
    },
  ],
  services: [
    {
      id: 1,
      name: "Specialist Consultation",
      description:
        "Comprehensive heart assessment including history review and physical examination.",
      duration: "45 - 60 mins",
      price: "Rp 750.000",
      priceLabel: "Starting Price",
    },
    {
      id: 2,
      name: "Second Surgical Opinion",
      description:
        "In-depth review of existing medical records and surgical planning advice.",
      duration: "90 mins",
      price: "Rp 1.250.000",
      priceLabel: "Standard Rate",
    },
    {
      id: 3,
      name: "Echocardiogram Review",
      description:
        "Diagnostic interpretation of cardiac imaging results and clinical recommendation.",
      duration: "30 mins",
      price: "Rp 500.000",
      priceLabel: "Per Review",
    },
  ],
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3evB2KFAuXphZ5q32s49G0OoRpUHaZrmb6yH7PML3lTK79wvQruS0BWJXlV_ijsVsy6bc50dla9HyNjEOmB3j1QB6FV27Pifr1WphvrInhpWQNYke5rQfWOeYBNjWgikQV3HNnbT5tOuEp6vncUETTMDulZTTMj1XP3JRheexTKEzW1L2RTxWsLZ1Jn6ZcOngWGHYaB3Sk_YWAc49K7QvzQ00WiYti2Zq89jhnZU19Wee8UK2IqKYoB50d6yD9KPCaxDrAmQ-O8Yt",
};

export const getDoctorById = async (id: string): Promise<Doctor> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(doctorData), 500);
  });
};