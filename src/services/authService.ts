import axios, { AxiosError } from 'axios';
import { BASE_API_URL } from '../constants/constant';
import type {
  RegisterRequest,
  RegisterResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  ApiError,
  CompleteRegistrationResponse,
  UserRole,
} from '../types/api';

/**
 * Authentication Service
 * Handles all authentication operations for all user roles
 */
class AuthService {
  private baseURL: string;

  constructor() {
    this.baseURL = BASE_API_URL;
  }

  /**
   * Register new user (supports all roles)
   */
  async register(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    role: UserRole
  ): Promise<RegisterResponse> {
    try {
      const data: RegisterRequest = {
        email,
        password,
        name,
        phone_number: phoneNumber,
        role,
      };

      const response = await axios.post<RegisterResponse>(
        `${this.baseURL}/auth/register`,
        data
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Send OTP email verification
   */
  async sendEmailVerification(token: string): Promise<void> {
    try {
      await axios.get(`${this.baseURL}/auth/send-email`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Verify OTP code
   */
  async verifyEmail(
    email: string,
    otp: string,
    token: string
  ): Promise<VerifyEmailResponse> {
    try {
      const data: VerifyEmailRequest = {
        email,
        otp,
      };

      const response = await axios.post<VerifyEmailResponse>(
        `${this.baseURL}/auth/verify-email`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Complete registration with additional details
   * @param endpoint - Role-specific endpoint (e.g., 'vendor', 'nurse')
   * @param data - Form data with files
   * @param token - Auth token
   */
  async completeRegistration(
    endpoint: string,
    data: any,
    token: string
  ): Promise<CompleteRegistrationResponse> {
    try {
      const response = await axios.post<CompleteRegistrationResponse>(
        `${this.baseURL}/${endpoint}/complete-registration`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle API errors with detailed messages
   */
  private handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;

      if (axiosError.response) {
        // Server responded with error
        const errorMessage =
          axiosError.response.data?.message || 'An error occurred';
        const errors = axiosError.response.data?.errors;

        if (errors) {
          // Format validation errors
          const formattedErrors = Object.entries(errors)
            .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
            .join('\n');
          return new Error(`${errorMessage}\n${formattedErrors}`);
        }

        return new Error(errorMessage);
      } else if (axiosError.request) {
        // Network error
        return new Error(
          'Network error. Please check your internet connection.'
        );
      }
    }

    return new Error('An unexpected error occurred. Please try again.');
  }
}

// Export singleton instance
export const authService = new AuthService();