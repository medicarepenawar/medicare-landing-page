import axios from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { Lab } from "../types/lab";

export interface ApiLabAddress {
  id: number;
  vendor_id: number;
  street: string;
  city: string | null;
  state: string | null;
  latitude: string | null;
  longitude: string | null;
}

export interface ApiOnsiteLab {
  id: number;
  license_photo: string | null;
  laboratory_license: string | null;
  vendor_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ApiLab {
  id: number;
  name: string;
  phone_number: string | null;
  company_registration_number: string | null;
  vendor_type: string;
  photo: string[];
  description: string | null;
  verified: boolean;
  verification_status: string;
  verification_notes: string | null;
  is_available: boolean;
  deleted_at: string | null;
  address: ApiLabAddress | null;
  vendor_onsite_lab: ApiOnsiteLab | null;
}

export interface LabApiResponse {
  message: string;
  data: {
    current_page: number;
    data: ApiLab[];
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

export const fetchAllLabs = async (): Promise<ApiLab[]> => {
  let allLabs: ApiLab[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get<LabApiResponse>(
        `${BASE_API_URL}/landing-page/laboratories?page=${currentPage}`
      );
      const data = response.data.data;
      if (data && data.data) {
        allLabs = [...allLabs, ...data.data];
      }
      if (data && data.next_page_url && currentPage < data.last_page) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching laboratories from API:", error);
  }

  return allLabs;
};

export const transformApiLabToLab = (apiLab: ApiLab): Lab => {
  return {
    id: apiLab.id,
    slug: apiLab.id.toString(),
    name: apiLab.name || "Medicare Affiliated Laboratory",
    phoneNumber: apiLab.phone_number || null,
    companyRegistrationNumber: apiLab.company_registration_number || null,
    vendorType: apiLab.vendor_type || "laboratory",
    photo: apiLab.photo && apiLab.photo.length > 0 ? apiLab.photo : ["https://images.unsplash.com/photo-1579165466521-35b38d326e0e?auto=format&fit=crop&q=80&w=600"],
    description: apiLab.description || null,
    verified: apiLab.verified || false,
    verificationStatus: apiLab.verification_status || "unverified",
    verificationNotes: apiLab.verification_notes || null,
    isAvailable: apiLab.is_available,
    address: apiLab.address ? {
      id: apiLab.address.id,
      street: apiLab.address.street,
      city: apiLab.address.city,
      state: apiLab.address.state,
      latitude: apiLab.address.latitude,
      longitude: apiLab.address.longitude,
    } : null,
    vendorOnsiteLab: apiLab.vendor_onsite_lab ? {
      id: apiLab.vendor_onsite_lab.id,
      licensePhoto: apiLab.vendor_onsite_lab.license_photo,
      laboratoryLicense: apiLab.vendor_onsite_lab.laboratory_license,
    } : null,
  };
};

export const getLabBySlug = async (slug: string): Promise<Lab | null> => {
  const idNum = parseInt(slug, 10);
  if (!isNaN(idNum)) {
    const allLabs = await fetchAllLabs();
    const foundLab = allLabs.find((l) => l.id === idNum);
    if (foundLab) {
      return transformApiLabToLab(foundLab);
    }
  }
  return null;
};
