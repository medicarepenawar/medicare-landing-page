import axios from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { Therapist } from "../types/therapist";

export interface ApiTherapist {
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
  therapist_certificate_id?: string | null;
  therapist_certificate_file?: string | null;
  nurse_certificate_id?: string | null;
  nurse_certificate_file?: string | null;
  verified: boolean;
  verification_status: string;
  verification_notes: string | null;
  deleted_at: string | null;
  slug?: string;
}

export interface TherapistsApiResponse {
  message: string;
  data: {
    current_page: number;
    data: ApiTherapist[];
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

export const fetchAllTherapists = async (): Promise<ApiTherapist[]> => {
  let allTherapists: ApiTherapist[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get<TherapistsApiResponse>(
        `${BASE_API_URL}/landing-page/therapists?page=${currentPage}`
      );
      const data = response.data.data;
      if (data && data.data) {
        allTherapists = [...allTherapists, ...data.data];
      }
      if (data && data.next_page_url && currentPage < data.last_page) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching therapists from API:", error);
  }

  return allTherapists;
};

export const transformApiTherapistToTherapist = (apiTherapist: ApiTherapist): Therapist => {
  return {
    id: apiTherapist.id,
    slug: apiTherapist.slug || apiTherapist.id.toString(),
    name: apiTherapist.name,
    gender: apiTherapist.gender ? apiTherapist.gender.charAt(0).toUpperCase() + apiTherapist.gender.slice(1) : "Female",
    birthDate: apiTherapist.birth_date,
    nric: apiTherapist.nric,
    passportNumber: apiTherapist.passport_number,
    phoneNumber: apiTherapist.phone_number,
    nationality: apiTherapist.nationality ? apiTherapist.nationality.charAt(0).toUpperCase() + apiTherapist.nationality.slice(1) : null,
    apcExpired: apiTherapist.apc_expired,
    photo: apiTherapist.photo,
    address: apiTherapist.address,
    postcode: apiTherapist.postcode,
    state: apiTherapist.state,
    city: apiTherapist.city,
    apcNumber: apiTherapist.apc_number,
    firstGraduateFrom: apiTherapist.first_graduate_from,
    firstGraduateYear: apiTherapist.first_graduate_year,
    certificateId: apiTherapist.therapist_certificate_id || apiTherapist.nurse_certificate_id || null,
    verified: apiTherapist.verified,
    experienceText: apiTherapist.experience,
    coursesAttended: apiTherapist.courses_attended,
    yearExperience: apiTherapist.year_experience,
  };
};

export interface SingleTherapistApiResponse {
  message?: string;
  data: ApiTherapist;
}

export const getTherapistBySlug = async (slug: string): Promise<Therapist | null> => {
  try {
    const response = await axios.get<SingleTherapistApiResponse | ApiTherapist>(
      `${BASE_API_URL}/landing-page/therapists/${slug}`
    );
    const responseData = response.data;
    const apiTherapist = (responseData && 'data' in responseData) ? responseData.data : (responseData as ApiTherapist);
    if (apiTherapist && apiTherapist.id) {
      return transformApiTherapistToTherapist(apiTherapist);
    }
  } catch (error) {
    console.error(`Failed to fetch therapist by slug "${slug}":`, error);
  }

  // Fallback: search in all therapists list
  try {
    const allTherapists = await fetchAllTherapists();
    const foundTherapist = allTherapists.find(
      (t) => t.slug === slug || t.id.toString() === slug || t.id === parseInt(slug, 10)
    );
    if (foundTherapist) {
      return transformApiTherapistToTherapist(foundTherapist);
    }
  } catch (err) {
    console.error("Therapist fallback search failed:", err);
  }

  return null;
};
