import clinicsJson from "./clinicData.json";

export interface ClinicAddress {
  title: string;
  name: string;
  lines: string[];
}

export interface ClinicHour {
  day: string;
  time: string;
}

export interface ClinicDetails {
  title: string;
  phone: string;
  hours: ClinicHour[];
}

export interface ClinicOurServices {
  title: string;
  items: string[];
}

export interface ClinicLocation {
  title: string;
  mapPlaceholder: string;
}

export interface ClinicKeyFeature {
  icon: string;
  icon2?: string;
  text: string;
}

export interface ClinicService {
  icon: string;
  title: string;
}

export interface ClinicData {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  taglineDescription: string;
  footerText: string;
  clinicUrl: string;
  streetViewUrl: string;
  heroImage: string;
  keyFeatures: ClinicKeyFeature[];
  services: ClinicService[];
  address: ClinicAddress;
  location: ClinicLocation;
  details: ClinicDetails;
  ourServices: ClinicOurServices;
}

const clinicsArray = clinicsJson as ClinicData[];

export const clinicsData: Record<string, ClinicData> = {};
for (const clinic of clinicsArray) {
  clinicsData[clinic.slug] = clinic;
}

export const getClinicBySlug = (slug: string): ClinicData | undefined => {
  return clinicsData[slug];
};

export const getClinicSlugs = (): string[] => {
  return Object.keys(clinicsData);
};
