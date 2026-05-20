import axios from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { Doctor, Education } from "../types/doctor_specialist";
import { directoryItems } from "../modules/main/constants/directory";
import type { DirectoryItem } from "../modules/main/types";

export interface ApiDoctor {
  id: number;
  name: string;
  specialist: string;
  gender: string;
  nric: string | null;
  passport_number: string | null;
  experience: string;
  medical_degree_university: string;
  phone_number: string | null;
  mmc_number: string;
  apc_number: string;
  apc_expired: string | null;
  photo: string | null;
  front_nric_photo: string | null;
  back_nric_photo: string | null;
  apc_certificate_file: string | null;
  mmc_certificate_file: string | null;
  verified: boolean;
  type: string | null;
  verification_status: string;
  verification_notes: string | null;
  birth_date: string | null;
  nationality: string | null;
  address: string | null;
  postcode: string | null;
  state: string | null;
  city: string | null;
  place_of_practice: string | null;
  first_graduate_from: string | null;
  first_graduate_year: number | null;
  specialist_graduate_from: string | null;
  specialist_graduate_year: number | null;
  deleted_at: string | null;
  specialities: any[];
  doctor_specialists: any[];
}

export interface DoctorsApiResponse {
  message: string;
  data: {
    current_page: number;
    data: ApiDoctor[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

export const fetchAllDoctors = async (): Promise<ApiDoctor[]> => {
  let allDoctors: ApiDoctor[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get<DoctorsApiResponse>(
        `${BASE_API_URL}/landing-page/specialist-doctors?page=${currentPage}`
      );
      const data = response.data.data;
      if (data && data.data) {
        allDoctors = [...allDoctors, ...data.data];
      }
      if (data && data.next_page_url && currentPage < data.last_page) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching doctors from API:", error);
    // If the API fails, we return an empty array gracefully rather than crashing the whole page
  }

  return allDoctors;
};

export const transformApiDoctorToDoctor = (apiDoc: ApiDoctor): Doctor => {
  const education: Education[] = [];

  if (apiDoc.specialist_graduate_from) {
    education.push({
      year: apiDoc.specialist_graduate_year ? apiDoc.specialist_graduate_year.toString() : "N/A",
      degree: "Specialist Graduate",
      university: apiDoc.specialist_graduate_from,
      major: apiDoc.specialist || "Specialist",
      isLatest: true,
    });
  }

  if (apiDoc.first_graduate_from) {
    education.push({
      year: apiDoc.first_graduate_year ? apiDoc.first_graduate_year.toString() : "N/A",
      degree: "Medical Degree",
      university: apiDoc.first_graduate_from,
      major: "Bachelor of Medicine",
      isLatest: education.length === 0,
    });
  }

  const tags = ["Verified"];
  if (apiDoc.specialist) {
    tags.unshift(apiDoc.specialist);
  }
  if (apiDoc.experience) {
    tags.push(`${apiDoc.experience} Years Exp.`);
  }

  let isApcExpired = false;
  if (apiDoc.apc_expired) {
    const expiryDate = new Date(apiDoc.apc_expired);
    isApcExpired = expiryDate < new Date();
  }

  return {
    name: apiDoc.name,
    specialty: apiDoc.specialist || "General Practitioner",
    hospital: apiDoc.place_of_practice || "Premier Healthcare Center",
    gender: apiDoc.gender ? apiDoc.gender.charAt(0).toUpperCase() + apiDoc.gender.slice(1) : "Male",
    nationality: apiDoc.nationality || "Malaysian",
    phone: apiDoc.phone_number || "+60 3-2000-0000",
    tags: tags,
    bio: `${apiDoc.name} is a highly skilled and dedicated medical professional specializing in ${apiDoc.specialist || "healthcare"}. With over ${apiDoc.experience || "3"} years of clinical experience, they are committed to providing the highest quality of patient-centric care at ${apiDoc.place_of_practice || "Premier Healthcare Center"}.`,
    mmcNumber: apiDoc.mmc_number || "N/A",
    apcNumber: apiDoc.apc_number || "N/A",
    apcExpiry: apiDoc.apc_expired
      ? new Date(apiDoc.apc_expired).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
      : "N/A",
    isApcExpired: isApcExpired,
    address: {
      hospitalName: apiDoc.place_of_practice || "Premier Healthcare Center",
      street: apiDoc.address || "123 Medical Avenue",
      city: apiDoc.city ? `${apiDoc.city}, ${apiDoc.state || ""}`.trim() : "Kuala Lumpur",
    },
    education: education,
    services: [
      {
        id: 1,
        name: "Specialist Consultation",
        description: "Comprehensive medical assessment and consultation.",
        duration: "30 - 45 mins",
        price: "RM 150",
        priceLabel: "Starting Price",
      },
      {
        id: 2,
        name: "Follow-up Consultation",
        description: "Follow-up appointment for ongoing treatment and monitoring.",
        duration: "20 - 30 mins",
        price: "RM 100",
        priceLabel: "Standard Rate",
      },
    ],
    imageUrl: apiDoc.photo || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
  };
};

// Transform DirectoryItem to Doctor type
const transformDirectoryItemToDoctor = (item: DirectoryItem): Doctor => {
  const doctor: Doctor = {
    name: item.name,
    specialty: item.specialty || "General Practitioner",
    hospital: "Premier Healthcare Center",
    gender: "Male",
    nationality: "Malaysian",
    phone: "+60 3-2000-0000",
    tags: [item.specialty || "Healthcare Professional", "Verified"],
    bio: `${item.name} is a highly skilled and dedicated ${item.specialty || "healthcare professional"} with extensive experience in patient care. Located in ${item.location}, they are committed to providing the highest quality of medical services.`,
    mmcNumber: `${Math.random().toString().slice(2, 11)}.${Math.random().toString().slice(2, 9)}`,
    apcNumber: `APC/2024/SPEC-${Math.random().toString().slice(2, 8)}`,
    apcExpiry: "Dec 31, 2025",
    isApcExpired: false,
    address: {
      hospitalName: "Premier Healthcare Center",
      street: "123 Medical Avenue",
      city: item.location,
    },
    education: [
      {
        year: "2018",
        degree: "Specialist Graduate",
        university: "National University of Malaysia",
        major: item.specialty || "General Practice",
        isLatest: true,
      },
      {
        year: "2012",
        degree: "Medical Degree",
        university: "University of Malaya",
        major: "Bachelor of Medicine",
        isLatest: false,
      },
    ],
    services: [
      {
        id: 1,
        name: "General Consultation",
        description: "Comprehensive health assessment and consultation.",
        duration: "30 - 45 mins",
        price: "RM 150",
        priceLabel: "Starting Price",
      },
      {
        id: 2,
        name: "Follow-up Consultation",
        description: "Follow-up appointment for ongoing treatment and monitoring.",
        duration: "20 - 30 mins",
        price: "RM 100",
        priceLabel: "Standard Rate",
      },
      {
        id: 3,
        name: "Emergency Consultation",
        description: "Urgent consultation for acute medical conditions.",
        duration: "30 mins",
        price: "RM 250",
        priceLabel: "Priority Rate",
      },
    ],
    imageUrl: item.image,
  };
  return doctor;
};

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
      description: "Comprehensive heart assessment including history review and physical examination.",
      duration: "45 - 60 mins",
      price: "Rp 750.000",
      priceLabel: "Starting Price",
    },
    {
      id: 2,
      name: "Second Surgical Opinion",
      description: "In-depth review of existing medical records and surgical planning advice.",
      duration: "90 mins",
      price: "Rp 1.250.000",
      priceLabel: "Standard Rate",
    },
    {
      id: 3,
      name: "Echocardiogram Review",
      description: "Diagnostic interpretation of cardiac imaging results and clinical recommendation.",
      duration: "30 mins",
      price: "Rp 500.000",
      priceLabel: "Per Review",
    },
  ],
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3evB2KFAuXphZ5q32s49G0OoRpUHaZrmb6yH7PML3lTK79wvQruS0BWJXlV_ijsVsy6bc50dla9HyNjEOmB3j1QB6FV27Pifr1WphvrInhpWQNYke5rQfWOeYBNjWgikQV3HNnbT5tOuEp6vncUETTMDulZTTMj1XP3JRheexTKEzW1L2RTxWsLZ1Jn6ZcOngWGHYaB3Sk_YWAc49K7QvzQ00WiYti2Zq89jhnZU19Wee8UK2IqKYoB50d6yD9KPCaxDrAmQ-O8Yt",
};

export const getDoctorById = async (_id: string): Promise<Doctor> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(doctorData), 500);
  });
};

export const getDoctorBySlug = async (slug: string): Promise<Doctor> => {
  const idNum = parseInt(slug, 10);
  if (!isNaN(idNum)) {
    const allDocs = await fetchAllDoctors();
    const foundDoc = allDocs.find((doc) => doc.id === idNum);
    if (foundDoc) {
      return transformApiDoctorToDoctor(foundDoc);
    }
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const doctorItem = directoryItems.find((item) => item.slug === slug && item.role === "Doctor");

      if (doctorItem) {
        const doctor = transformDirectoryItemToDoctor(doctorItem);
        resolve(doctor);
      } else {
        reject(new Error(`Doctor with slug "${slug}" not found`));
      }
    }, 500);
  });
};

