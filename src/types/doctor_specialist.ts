export interface Education {
  year: string;
  degree: string;
  university: string;
  major: string;
  isLatest: boolean;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  priceLabel: string;
}

export interface Doctor {
    name: string;
  specialty: string;
  hospital: string;
  gender: string;
  nationality: string;
  phone: string;
  tags: string[];
  bio: string;
  mmcNumber: string;
  apcNumber: string;
  apcExpiry: string;
  isApcExpired: boolean;
  address: {
    hospitalName: string;
    street: string;
    city: string;
  };
  education: Education[];
  services: Service[];
  imageUrl: string;
}


