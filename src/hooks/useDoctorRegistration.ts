import { useRegistration } from "./useRegistration";
import type { DoctorRegisterForm } from "../types";

interface DoctorRegistrationData {
  email: string;
  name: string;
  phone: string;
  fullName: string;
}

export const useDoctorRegistration = () => {
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
  } = useRegistration<DoctorRegistrationData>("Doctor");

  // Wrapper for Doctor-specific register
  const handleRegisterSubmit = async (data: DoctorRegisterForm) => {
    const doctorData: DoctorRegistrationData = {
      email: data.email,
      name: data.fullName,
      phone: data.phone,
      fullName: data.fullName,
    };

    await baseHandleRegisterSubmit(doctorData, data.password, data.confirmPassword);
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
