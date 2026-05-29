import axios from "axios";
import { BASE_API_URL } from "../constants/constant";

export interface ApiPharmacyAddress {
  id: number;
  vendor_id: number;
  street: string;
  state: string | null;
  city: string | null;
  latitude: string | null;
  longitude: string | null;
}

export interface ApiVendorPharmacy {
  id: number;
  pharmacy_license: string | null;
  license_photo: string | null;
  vendor_id: number;
  is_available: boolean;
}

export interface ApiPharmacy {
  id: number;
  name: string;
  slug: string;
  phone_number: string | null;
  company_registration_number: string | null;
  photo: string[];
  description: string | null;
  verified: boolean;
  verification_status: string;
  vendor_type: string;
  is_available: boolean;
  address: ApiPharmacyAddress | null;
  vendor_pharmacy: ApiVendorPharmacy | null;
}

export interface PharmacyApiResponse {
  message: string;
  data: {
    current_page: number;
    data: ApiPharmacy[];
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

export const fetchAllPharmacies = async (): Promise<ApiPharmacy[]> => {
  let allPharmacies: ApiPharmacy[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get<PharmacyApiResponse>(
        `${BASE_API_URL}/landing-page/pharmacies?page=${currentPage}`
      );
      const data = response.data.data;
      if (data && data.data) {
        allPharmacies = [...allPharmacies, ...data.data];
      }
      if (data && data.next_page_url && currentPage < data.last_page) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching pharmacies from API:", error);
  }

  return allPharmacies;
};
