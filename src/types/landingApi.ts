export interface Root {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  hero: Hero;
  mission: Mission;
  company_profile: CompanyProfile;
  services: Service[];
  features: Feature[];
  industries: Industries;
  partners: Partner[];
  specialists: Specialist[];
  testimonials: Testimonial[];
  faqs: Faq[];
}

export interface Hero {
  id: number;
  tagline: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Mission {
  id: number;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface CompanyProfile {
  id: number;
  company_email: string;
  company_phone: string;
  company_address: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface Feature {
  id: number;
  headline: string;
  description: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface Industries {
  normal: Normal[];
  enterprise: Enterprise[];
  public_sector: PublicSector[];
}

export interface Normal {
  id: number;
  name: string;
  description: string;
  icon: string;
  type: "normal";
  created_at: string;
  updated_at: string;
}

export interface Enterprise {
  id: number;
  name: string;
  description: string;
  icon: string;
  type: "enterprise";
  created_at: string;
  updated_at: string;
}

export interface PublicSector {
  id: number;
  name: string;
  description: string;
  icon: string;
  type: "public_sector";
  created_at: string;
  updated_at: string;
}

export interface Partner {
  id: number;
  name: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Specialist {
  id: number;
  image: string;
  name: string;
  position_company: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: number;
  star: number;
  comment: string;
  username: string;
  position_company: string;
  created_at: string;
  updated_at: string;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}
