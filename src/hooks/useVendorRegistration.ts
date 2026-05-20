import { useRegistration } from './useRegistration';
import type { VendorRegisterForm } from '../types';
import type { VendorType } from '../types/api';

interface VendorRegistrationData {
  email: string;
  name: string;
  phone: string;
  vendorName: string;
  vendorType: VendorType | "";
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
    clearError,
  } = useRegistration<VendorRegistrationData>('Vendor');

  // Wrapper for vendor-specific register
  const handleRegisterSubmit = async (data: VendorRegisterForm) => {
    const vendorData: VendorRegistrationData = {
      email: data.email,
      name: data.vendorName,
      phone: data.phone,
      vendorName: data.vendorName,
      vendorType: data.vendorType,
    };

    await baseHandleRegisterSubmit(vendorData, data.password, data.confirmPassword);
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
