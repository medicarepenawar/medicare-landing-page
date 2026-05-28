import axios from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { Nurse } from "../types/nurse";

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
  slug?: string;
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
  return {
    id: apiNurse.id,
    slug: apiNurse.id.toString(),
    name: apiNurse.name,
    gender: apiNurse.gender ? apiNurse.gender.charAt(0).toUpperCase() + apiNurse.gender.slice(1) : "Female",
    birthDate: apiNurse.birth_date,
    nric: apiNurse.nric,
    passportNumber: apiNurse.passport_number,
    phoneNumber: apiNurse.phone_number,
    nationality: apiNurse.nationality ? apiNurse.nationality.charAt(0).toUpperCase() + apiNurse.nationality.slice(1) : null,
    apcExpired: apiNurse.apc_expired,
    photo: apiNurse.photo,
    address: apiNurse.address,
    postcode: apiNurse.postcode,
    state: apiNurse.state,
    city: apiNurse.city,
    apcNumber: apiNurse.apc_number,
    firstGraduateFrom: apiNurse.first_graduate_from,
    firstGraduateYear: apiNurse.first_graduate_year,
    nurseCertificateId: apiNurse.nurse_certificate_id,
    verified: apiNurse.verified,
    experienceText: apiNurse.experience,
    coursesAttended: apiNurse.courses_attended,
    yearExperience: apiNurse.year_experience,
  };
};

export interface SingleNurseApiResponse {
  message?: string;
  data: ApiNurse;
}

export const getNurseBySlug = async (slug: string): Promise<Nurse | null> => {
  try {
    const response = await axios.get<SingleNurseApiResponse | ApiNurse>(
      `${BASE_API_URL}/landing-page/nurses/${slug}`
    );
    const responseData = response.data;
    const apiNurse = (responseData && 'data' in responseData) ? responseData.data : (responseData as ApiNurse);
    if (apiNurse && apiNurse.id) {
      return transformApiNurseToNurse(apiNurse);
    }
  } catch (error) {
    console.error(`Failed to fetch nurse by slug "${slug}":`, error);
  }

  // Fallback: search in all nurses list
  try {
    const allNurses = await fetchAllNurses();
    const foundNurse = allNurses.find(
      (n) => n.slug === slug || n.id.toString() === slug || n.id === parseInt(slug, 10)
    );
    if (foundNurse) {
      return transformApiNurseToNurse(foundNurse);
    }
  } catch (err) {
    console.error("Nurse fallback search failed:", err);
  }

  return null;
};
