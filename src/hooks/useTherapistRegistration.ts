import { useRegistration } from "./useRegistration";
import type { TherapistRegisterForm } from "../types";

interface TherapistRegistrationData {
  email: string;
  name: string;
  phone: string;
  fullName: string;
}

export const useTherapistRegistration = () => {
  const {
    currentStep,
    registerData,
    token,
    loading,
    error,
    handleRegisterSubmit: baseHandleRegisterSubmit,
    handleOTPSubmit,
    handleOTPResend,
    clearError,
  } = useRegistration<TherapistRegistrationData>("Therapist");

  // Wrapper for therapist-specific register
  const handleRegisterSubmit = async (data: TherapistRegisterForm) => {
    const therapistData: TherapistRegistrationData = {
      email: data.email,
      name: data.fullName,
      phone: data.phone,
      fullName: data.fullName,
    };

    await baseHandleRegisterSubmit(therapistData, data.password, data.confirmPassword);
  };

  return {
    currentStep,
    registerData,
    token,
    loading,
    error,
    handleRegisterSubmit,
    handleOTPSubmit,
    handleOTPResend,
    clearError,
  };
};
