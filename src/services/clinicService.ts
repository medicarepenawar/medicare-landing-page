import axios from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { Clinic } from "../types/clinic";

export interface ApiAddress {
  id: number;
  vendor_id: number;
  street: string;
  city: string | null;
  state: string | null;
  latitude: string | null;
  longitude: string | null;
}

export interface ApiVendor {
  id: number;
  name: string;
  phone_number: string | null;
  company_registration_number: string | null;
  vendor_type: string;
  photo: string | null;
  description: string | null;
  verified: boolean;
  verification_status: string;
  verification_notes: string | null;
  is_available: boolean;
  deleted_at: string | null;
  address: ApiAddress | null;
  slug?: string;
}

export interface ApiClinicDoctor {
  id: number;
  name: string;
  slug: string | null;
  photo: string | null;
  phone_number: string | null;
  specialist: string | null;
  experience: string | null;
  verified: boolean;
  pivot?: {
    vendors_vc_id: number;
    doctor_id: number;
    on_duty: number;
    shift: string;
  };
}

export interface ApiClinic {
  id: number;
  vendor_id: number;
  registration_number: string | null;
  registration_document: string | null;
  vendor_type: string;
  images: string[];
  is_available: boolean;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  vendor: ApiVendor;
  slug?: string;
  doctor?: ApiClinicDoctor[];
}

export interface ClinicApiResponse {
  message: string;
  data: {
    current_page: number;
    data: ApiClinic[];
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

export const fetchAllClinics = async (): Promise<ApiClinic[]> => {
  let allClinics: ApiClinic[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await axios.get<ClinicApiResponse>(
        `${BASE_API_URL}/landing-page/clinics?page=${currentPage}`
      );
      const data = response.data.data;
      if (data && data.data) {
        allClinics = [...allClinics, ...data.data];
      }
      if (data && data.next_page_url && currentPage < data.last_page) {
        currentPage++;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching clinics from API:", error);
  }

  return allClinics;
};

export const transformApiClinicToClinic = (apiClinic: ApiClinic): Clinic => {
  return {
    id: apiClinic.id,
    slug: apiClinic.id.toString(),
    vendorId: apiClinic.vendor_id,
    registrationNumber: apiClinic.registration_number,
    registrationDocument: apiClinic.registration_document,
    vendorType: apiClinic.vendor_type,
    images: apiClinic.images && apiClinic.images.length > 0 ? apiClinic.images : [apiClinic.vendor?.photo || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"],
    isAvailable: apiClinic.is_available,
    name: apiClinic.vendor?.name || "Medicare Affiliated Clinic",
    phoneNumber: apiClinic.vendor?.phone_number || null,
    companyRegistrationNumber: apiClinic.vendor?.company_registration_number || null,
    photo: apiClinic.vendor?.photo || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    description: apiClinic.vendor?.description || null,
    verified: apiClinic.vendor?.verified || false,
    verificationStatus: apiClinic.vendor?.verification_status || "unverified",
    verificationNotes: apiClinic.vendor?.verification_notes || null,
    address: apiClinic.vendor?.address ? {
      id: apiClinic.vendor.address.id,
      street: apiClinic.vendor.address.street,
      city: apiClinic.vendor.address.city,
      state: apiClinic.vendor.address.state,
      latitude: apiClinic.vendor.address.latitude,
      longitude: apiClinic.vendor.address.longitude,
    } : null,
    doctors: apiClinic.doctor ? apiClinic.doctor.map((d) => ({
      id: d.id,
      name: d.name,
      slug: d.slug || null,
      photo: d.photo || null,
      phone_number: d.phone_number || null,
      specialist: d.specialist || null,
      experience: d.experience || null,
      verified: d.verified,
      pivot: d.pivot ? {
        vendors_vc_id: d.pivot.vendors_vc_id,
        doctor_id: d.pivot.doctor_id,
        on_duty: d.pivot.on_duty,
        shift: d.pivot.shift,
      } : undefined,
    })) : [],
  };
};

export interface SingleClinicApiResponse {
  message?: string;
  data: ApiClinic;
}

export const getClinicBySlug = async (slug: string): Promise<Clinic | null> => {
  try {
    const response = await axios.get<SingleClinicApiResponse | ApiClinic>(
      `${BASE_API_URL}/landing-page/clinics/${slug}`
    );
    const responseData = response.data;
    const apiClinic = (responseData && 'data' in responseData) ? responseData.data : (responseData as ApiClinic);
    if (apiClinic && apiClinic.id) {
      return transformApiClinicToClinic(apiClinic);
    }
  } catch (error) {
    console.error(`Failed to fetch clinic by slug "${slug}":`, error);
  }

  // Fallback: search in all clinics list
  try {
    const allClinics = await fetchAllClinics();
    const foundClinic = allClinics.find(
      (c) => c.vendor?.slug === slug || c.id.toString() === slug || c.id === parseInt(slug, 10)
    );
    if (foundClinic) {
      return transformApiClinicToClinic(foundClinic);
    }
  } catch (err) {
    console.error("Clinic fallback search failed:", err);
  }

  return null;
};
