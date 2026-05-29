import axios from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { Ambulance } from "../types/ambulance";

export interface ApiAmbulanceAddress {
  id: number;
  vendor_id: number;
  street: string;
  city: string | null;
  state: string | null;
  latitude: string | null;
  longitude: string | null;
}

export interface ApiAmbulanceVendor {
  id: number;
  name: string;
  slug: string;
  phone_number: string | null;
  company_registration_number: string | null;
  photo: string | null;
  description: string | null;
  verified: boolean;
  verification_status: string;
  verification_notes: string | null;
  vendor_type: string;
  is_available: boolean;
  address: ApiAmbulanceAddress | null;
}

export interface ApiAmbulance {
  id: number;
  vendor_id: number;
  company_registration_number: string | null;
  company_registration_file: string | null;
  moh_license_number: string | null;
  moh_license_file: string | null;
  is_available: boolean;
  vendor: ApiAmbulanceVendor | null;
}

export interface AmbulanceApiResponse {
  message: string;
  data: {
    current_page: number;
    data: ApiAmbulance[];
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

export const fetchAllAmbulances = async (): Promise<ApiAmbulance[]> => {
  let allAmbulances: ApiAmbulance[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get<AmbulanceApiResponse>(
        `${BASE_API_URL}/landing-page/ambulances?page=${currentPage}`
      );
      const data = response.data.data;
      if (data && data.data) {
        allAmbulances = [...allAmbulances, ...data.data];
      }
      if (data && data.next_page_url && currentPage < data.last_page) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching ambulances from API:", error);
  }

  return allAmbulances;
};

export const transformApiAmbulanceToAmbulance = (apiAmbulance: ApiAmbulance): Ambulance => {
  const vendor = apiAmbulance.vendor;
  return {
    id: apiAmbulance.id,
    slug: vendor?.slug || apiAmbulance.id.toString(),
    name: vendor?.name || "Medicare Affiliated Ambulance Service",
    phoneNumber: vendor?.phone_number || null,
    companyRegistrationNumber: apiAmbulance.company_registration_number || vendor?.company_registration_number || null,
    vendorType: vendor?.vendor_type || "ambulance_provider",
    photo: vendor?.photo ? [vendor.photo] : ["https://images.unsplash.com/photo-1587113997559-018787fdeab6?auto=format&fit=crop&q=80&w=600"],
    description: vendor?.description || null,
    verified: vendor?.verified || false,
    verificationStatus: vendor?.verification_status || "unverified",
    verificationNotes: vendor?.verification_notes || null,
    isAvailable: apiAmbulance.is_available,
    mohLicenseNumber: apiAmbulance.moh_license_number || null,
    address: vendor?.address ? {
      id: vendor.address.id,
      street: vendor.address.street,
      city: vendor.address.city,
      state: vendor.address.state,
      latitude: vendor.address.latitude,
      longitude: vendor.address.longitude,
    } : null,
  };
};

export interface SingleAmbulanceApiResponse {
  message?: string;
  data: ApiAmbulance;
}

export const getAmbulanceBySlug = async (slug: string): Promise<Ambulance | null> => {
  try {
    const response = await axios.get<SingleAmbulanceApiResponse | ApiAmbulance>(
      `${BASE_API_URL}/landing-page/ambulances/${slug}`
    );
    const responseData = response.data;
    const apiAmbulance = (responseData && 'data' in responseData) ? responseData.data : (responseData as ApiAmbulance);
    if (apiAmbulance && apiAmbulance.id) {
      return transformApiAmbulanceToAmbulance(apiAmbulance);
    }
  } catch (error) {
    console.error(`Failed to fetch ambulance by slug "${slug}":`, error);
  }

  // Fallback: search in all ambulances list
  try {
    const allAmbulances = await fetchAllAmbulances();
    const foundAmbulance = allAmbulances.find(
      (a) => a.vendor?.slug === slug || a.id.toString() === slug || a.id === parseInt(slug, 10)
    );
    if (foundAmbulance) {
      return transformApiAmbulanceToAmbulance(foundAmbulance);
    }
  } catch (err) {
    console.error("Ambulance fallback search failed:", err);
  }

  return null;
};
