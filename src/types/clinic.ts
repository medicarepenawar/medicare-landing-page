export interface Clinic {
  id: number;
  slug: string;
  vendorId: number;
  registrationNumber: string | null;
  registrationDocument: string | null;
  vendorType: string;
  images: string[];
  isAvailable: boolean;
  name: string;
  phoneNumber: string | null;
  companyRegistrationNumber: string | null;
  photo: string | null;
  description: string | null;
  verified: boolean;
  verificationStatus: string;
  verificationNotes: string | null;
  address: {
    id: number;
    street: string;
    city: string | null;
    state: string | null;
    latitude: string | null;
    longitude: string | null;
  } | null;
}
