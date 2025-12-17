import { useRegistration } from './useRegistration';
import type { VendorRegisterForm, VendorPostRegisterForm, OTPVerification } from '../types';

interface VendorRegistrationData {
  email: string;
  name: string;
  phone: string;
  vendorName: string;
}

export const useVendorRegistration = () => {
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
  } = useRegistration<VendorRegistrationData>('Vendor');

  // Wrapper for vendor-specific register
  const handleRegisterSubmit = async (data: VendorRegisterForm) => {
    const vendorData: VendorRegistrationData = {
      email: data.email,
      name: data.vendorName,
      phone: data.phone,
      vendorName: data.vendorName,
    };

    await baseHandleRegisterSubmit(vendorData, data.password, data.confirmPassword);
  };

  // Wrapper for vendor-specific post-register
  const handlePostRegisterSubmit = async (data: VendorPostRegisterForm) => {
    await baseHandlePostRegisterSubmit(data, 'vendor');
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