export type UserRole = "Customer" | "Doctor" | "Nurse" | "Vendor" | "OlLabAssistant";

// Base Register Request
export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  phone_number: string;
  role: UserRole;
}

// Register Response
export interface RegisterResponse {
  message: string;
  data: {
    token: string;
    expired_in: number;
  };
}

// Verify Email Request
export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

// Verify Email Response
export interface VerifyEmailResponse {
  message: string;
  data?: any;
}

// API Error Response
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

// Complete Registration Response
export interface CompleteRegistrationResponse {
  message: string;
  data?: any;
}

export interface BaseEntity {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface LandingHero extends BaseEntity {
  tagline: string;
  description: string;
}

export interface LandingMission extends BaseEntity {
  image: string;
  description: string;
}

export interface LandingCompanyProfile extends BaseEntity {
  company_email: string;
  company_phone: string;
  company_address: string;
}

export interface LandingServiceItem extends BaseEntity {
  name: string;
  description: string;
  icon: string;
}

export interface LandingFeatureItem extends BaseEntity {
  headline: string;
  description: string;
  icon: string;
}

export type LandingIndustryType = "normal" | "enterprise" | "public_sector";

export interface LandingIndustryItem extends BaseEntity {
  name: string;
  description: string;
  icon: string;
  type: LandingIndustryType;
}

export interface LandingIndustries {
  normal: LandingIndustryItem[];
  enterprise: LandingIndustryItem[];
  public_sector: LandingIndustryItem[];
}

export interface LandingPartnerItem extends BaseEntity {
  name: string;
  description: string;
  image: string;
}

export interface LandingSpecialistItem extends BaseEntity {
  image: string;
  name: string;
  position_company: string;
}

export interface LandingTestimonialItem extends BaseEntity {
  star: number;
  comment: string;
  username: string;
  position_company: string;
}

export interface LandingFaqItem extends BaseEntity {
  question: string;
  answer: string;
}

export interface LandingPageData {
  hero: LandingHero;
  mission: LandingMission;
  company_profile: LandingCompanyProfile;
  services: LandingServiceItem[];
  features: LandingFeatureItem[];
  industries: LandingIndustries;
  partners: LandingPartnerItem[];
  specialists: LandingSpecialistItem[];
  testimonials: LandingTestimonialItem[];
  faqs: LandingFaqItem[];
}

export interface LandingPageResponse {
  success: boolean;
  message: string;
  data: LandingPageData;
}
