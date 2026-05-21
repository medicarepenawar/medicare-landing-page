export interface NurseExperience {
  years: string;
  field: string;
}

export interface NurseLanguage {
  primary: string;
  secondary: string;
}

export interface NurseCareApproach {
  style: string;
  focus: string;
}

export interface NurseClientRating {
  stars: number;
  percentage: number;
}

export interface NurseServiceOffered {
  id: number;
  name: string;
  icon: string;
}

export interface NurseWhyChoose {
  id: number;
  title: string;
  description: string;
}

export interface Nurse {
  id?: number;
  slug: string;
  name: string;
  title: string;
  specialization: string;
  image: string;
  rating: number;
  totalReviews: number;
  bio: string;
  description: string;
  experience: NurseExperience;
  language: NurseLanguage;
  careApproach: NurseCareApproach;
  clientRating: NurseClientRating;
  servicesOffered: NurseServiceOffered[];
  availability: {
    type: string;
  };
  serviceCoverage: {
    areas: string[];
  };
  consultationFee: {
    amount: string;
    note: string;
  };
  whyChoose: NurseWhyChoose[];

  // API Personal & Credential Fields
  gender?: string;
  nric?: string | null;
  passportNumber?: string | null;
  phoneNumber?: string | null;
  nationality?: string | null;
  address?: string | null;
  postcode?: string | null;
  state?: string | null;
  city?: string | null;
  apcNumber?: string | null;
  apcExpired?: string | null;
  firstGraduateFrom?: string | null;
  firstGraduateYear?: string | null;
  nurseCertificateId?: string | null;
  verified?: boolean;
}
