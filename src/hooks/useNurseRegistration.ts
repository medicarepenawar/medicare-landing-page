import { useRegistration } from './useRegistration';
import type { NurseRegisterForm, NursePostRegisterForm, OTPVerification } from '../types';

interface NurseRegistrationData {
  email: string;
  name: string;
  phone: string;
  fullName: string;
}

export const useNurseRegistration = () => {
  const {
    currentStep,
    registerData,
    token,
    loading,
    error,
    handleRegisterSubmit: baseHandleRegisterSubmit,
    handleOTPSubmit,
    handleOTPResend,
    handlePostRegisterSubmit: baseHandlePostRegisterSubmit,
    clearError,
  } = useRegistration<NurseRegistrationData>('Nurse');

  // Wrapper for nurse-specific register
  const handleRegisterSubmit = async (data: NurseRegisterForm) => {
    const nurseData: NurseRegistrationData = {
      email: data.email,
      name: data.fullName,
      phone: data.phone,
      fullName: data.fullName,
    };

    await baseHandleRegisterSubmit(nurseData, data.password, data.confirmPassword);
  };

  // Wrapper for nurse-specific post-register
  const handlePostRegisterSubmit = async (data: NursePostRegisterForm) => {
    await baseHandlePostRegisterSubmit(data, 'nurse');
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
    handlePostRegisterSubmit,
    clearError,
  };
};