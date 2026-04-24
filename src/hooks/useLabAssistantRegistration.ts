import { useRegistration } from "./useRegistration";
import type { LabAssistantRegisterForm } from "../types";

interface LabAssistantRegistrationData {
  email: string;
  name: string;
  phone: string;
  fullName: string;
}

export const useLabAssistantRegistration = () => {
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
  } = useRegistration<LabAssistantRegistrationData>("OlLabAssistant");

  // Wrapper for lab assistant-specific register
  const handleRegisterSubmit = async (data: LabAssistantRegisterForm) => {
    const labAssistantData: LabAssistantRegistrationData = {
      email: data.email,
      name: data.fullName,
      phone: data.phone,
      fullName: data.fullName,
    };

    await baseHandleRegisterSubmit(labAssistantData, data.password, data.confirmPassword);
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
