export interface VendorRegisterForm {
    vendorName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    agreementAccepted: boolean;
  }
  
  export interface VendorPostRegisterForm {
    fullName: string;
    dob: string;
    gender: 'male' | 'female';
    idType: 'nric' | 'passport';
    idNumber: string;
    nationality: string;
    profilePhoto: File | null;
    idPhoto: File | null;
    phoneNumber: string;
    emailAddress: string;
    address: string;
    postcode: string;
    state: string;
    city: string;
    lat: string;
    long: string;
  }
  
  export interface NurseRegisterForm {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    agreementAccepted: boolean;
  }
  
  export interface NursePostRegisterForm {
    fullName: string;
    dob: string;
    gender: 'male' | 'female';
    idType: 'nric' | 'passport';
    idNumber: string;
    nationality: string;
    profilePhoto: File | null;
    idPhoto: File | null;
    phoneNumber: string;
    emailAddress: string;
    address: string;
    postcode: string;
    state: string;
    city: string;
    nurseCertificateId?: string;
    apc?: string;
    apcExpiredDate?: string;
    nurseCertificate: File | null;
    apcCertificate: File | null;
    education: string;
    firstGraduateFrom: string;
    firstGraduateYear: string;
  }
  
  export interface OTPVerification {
    otp: string;
  }
  
  export interface DropdownOption {
    value: string;
    label: string;
  }