import axios from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { Nurse } from "../types/nurse";
import { NURSES_DATA } from "../modules/constants/nurses";

export interface ApiNurse {
  id: number;
  name: string;
  gender: string;
  birth_date: string | null;
  nric: string | null;
  passport_number: string | null;
  phone_number: string | null;
  year_experience: number | null;
  experience: string | null;
  courses_attended: string | null;
  nationality: string | null;
  apc_expired: string | null;
  photo: string | null;
  front_nric_photo: string | null;
  back_nric_photo: string | null;
  address: string | null;
  postcode: string | null;
  state: string | null;
  city: string | null;
  apc_number: string | null;
  apc_certificate_file: string | null;
  first_graduate_from: string | null;
  first_graduate_year: string | null;
  nurse_certificate_id: string | null;
  nurse_certificate_file: string | null;
  verified: boolean;
  verification_status: string;
  verification_notes: string | null;
  deleted_at: string | null;
}

export interface NursesApiResponse {
  message: string;
  data: {
    current_page: number;
    data: ApiNurse[];
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

export const fetchAllNurses = async (): Promise<ApiNurse[]> => {
  let allNurses: ApiNurse[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get<NursesApiResponse>(
        `${BASE_API_URL}/landing-page/nurses?page=${currentPage}`
      );
      const data = response.data.data;
      if (data && data.data) {
        allNurses = [...allNurses, ...data.data];
      }
      if (data && data.next_page_url && currentPage < data.last_page) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching nurses from API:", error);
  }

  return allNurses;
};

export const transformApiNurseToNurse = (apiNurse: ApiNurse): Nurse => {
  const yearsExp = apiNurse.year_experience ? `${apiNurse.year_experience}+ Years` : "3+ Years";
  
  return {
    id: apiNurse.id,
    slug: apiNurse.id.toString(),
    name: apiNurse.name,
    title: "State Registered Nurse (SRN)",
    specialization: apiNurse.experience || "Professional Home Nursing Care",
    image: apiNurse.photo || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    totalReviews: 120,
    bio: apiNurse.experience ? `Expert Care by ${apiNurse.name}` : `Trusted Nursing Care by ${apiNurse.name}`,
    description: `${apiNurse.name} is a dedicated professional State Registered Nurse with academic background from ${apiNurse.first_graduate_from || "nursing college"}. Commited to providing compassionate, top-quality home nursing visit services, medication management, and patient rehabilitation via the Medicare platform.`,
    experience: {
      years: yearsExp,
      field: "in Nursing Care",
    },
    language: {
      primary: apiNurse.nationality && apiNurse.nationality.toLowerCase() === "indonesian" ? "Indonesian" : "Malay",
      secondary: "English",
    },
    careApproach: {
      style: "Compassionate",
      focus: "Patient-Centered",
    },
    clientRating: {
      stars: 4.8,
      percentage: 96,
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
    },
    serviceCoverage: {
      areas: apiNurse.city && apiNurse.state ? [apiNurse.city, apiNurse.state] : ["Johor Bahru", "Johor"],
    },
    consultationFee: {
      amount: "RM 120",
      note: "*Final fee depends on service type and distance",
    },
    whyChoose: [
      { id: 1, title: "Registered & Verified Nurse", description: "Certified professional healthcare provider" },
      { id: 2, title: "Experienced in Home Care", description: "Years of expertise in home-based nursing" },
      { id: 3, title: "Professional & Compassionate", description: "Dedicated to patient care and comfort" },
      { id: 4, title: "Backed by Medicare Platform", description: "Trusted healthcare network support" },
    ],

    // API Personal & Credential Fields
    gender: apiNurse.gender ? apiNurse.gender.charAt(0).toUpperCase() + apiNurse.gender.slice(1) : "Female",
    nric: apiNurse.nric,
    passportNumber: apiNurse.passport_number,
    phoneNumber: apiNurse.phone_number,
    nationality: apiNurse.nationality ? apiNurse.nationality.charAt(0).toUpperCase() + apiNurse.nationality.slice(1) : "Malaysian",
    address: apiNurse.address,
    postcode: apiNurse.postcode,
    state: apiNurse.state,
    city: apiNurse.city,
    apcNumber: apiNurse.apc_number,
    apcExpired: apiNurse.apc_expired,
    firstGraduateFrom: apiNurse.first_graduate_from,
    firstGraduateYear: apiNurse.first_graduate_year,
    nurseCertificateId: apiNurse.nurse_certificate_id,
    verified: apiNurse.verified,
  };
};

export const getNurseBySlug = async (slug: string): Promise<Nurse | null> => {
  const idNum = parseInt(slug, 10);
  if (!isNaN(idNum)) {
    const allNurses = await fetchAllNurses();
    const foundNurse = allNurses.find((n) => n.id === idNum);
    if (foundNurse) {
      return transformApiNurseToNurse(foundNurse);
    }
  }

  return null;
};
