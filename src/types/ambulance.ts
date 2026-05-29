export interface Ambulance {
  id: number;
  slug: string;
  name: string;
  phoneNumber: string | null;
  companyRegistrationNumber: string | null;
  vendorType: string;
  photo: string[];
  description: string | null;
  verified: boolean;
  verificationStatus: string;
  verificationNotes: string | null;
  isAvailable: boolean;
  mohLicenseNumber: string | null;
  address: {
    id: number;
    street: string;
    city: string | null;
    state: string | null;
    latitude: string | null;
    longitude: string | null;
  } | null;
}
