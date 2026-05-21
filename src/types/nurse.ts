export interface Nurse {
  id: number;
  slug: string;
  name: string;
  gender: string;
  birthDate: string | null;
  nric: string | null;
  passportNumber: string | null;
  phoneNumber: string | null;
  nationality: string | null;
  apcExpired: string | null;
  photo: string | null;
  address: string | null;
  postcode: string | null;
  state: string | null;
  city: string | null;
  apcNumber: string | null;
  firstGraduateFrom: string | null;
  firstGraduateYear: string | null;
  nurseCertificateId: string | null;
  verified: boolean;
  experienceText: string | null;
  coursesAttended: string | null;
  yearExperience: number | null;
}
