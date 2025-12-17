export type UserRole = 'Customer' | 'Doctor' | 'Nurse' | 'Vendor';

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