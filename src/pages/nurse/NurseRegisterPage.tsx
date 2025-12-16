import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NurseRegisterForm from '../../components/nurse/NurseRegisterForm';
import NurseOTPVerification from '../../components/nurse/NurseOTPVerification';

import type { NurseRegisterForm as NurseRegisterFormType, NursePostRegisterForm, OTPVerification } from '../../types';
import NursePostRegister from '../../components/nurse/NursePostRegister';

type Step = 'register' | 'otp' | 'post-register' | 'success';

const NurseRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('register');
  const [registerData, setRegisterData] = useState<NurseRegisterFormType | null>(null);

  const handleRegisterSubmit = (data: NurseRegisterFormType) => {
    setRegisterData(data);
    // TODO: Call API to send OTP
    console.log('Register data:', data);
    setCurrentStep('otp');
  };

  const handleOTPSubmit = (data: OTPVerification) => {
    // TODO: Call API to verify OTP
    console.log('OTP:', data);
    setCurrentStep('post-register');
  };

  const handleOTPResend = () => {
    // TODO: Call API to resend OTP
    console.log('Resending OTP...');
  };

  const handlePostRegisterSubmit = (data: NursePostRegisterForm) => {
    // TODO: Call API to complete registration
    console.log('Complete registration data:', data);
    setCurrentStep('success');
    
    // Redirect to success page after 2 seconds
    setTimeout(() => {
      navigate('/registration-success');
    }, 2000);
  };

  return (
    <>
      {currentStep === 'register' && (
        <NurseRegisterForm onSubmit={handleRegisterSubmit} />
      )}

      {currentStep === 'otp' && registerData && (
        <NurseOTPVerification
          onSubmit={handleOTPSubmit}
          onResend={handleOTPResend}
          email={registerData.email}
        />
      )}

      {currentStep === 'post-register' && registerData && (
        <NursePostRegister
          onSubmit={handlePostRegisterSubmit}
          initialData={{
            fullName: registerData.fullName,
            email: registerData.email,
            phone: registerData.phone
          }}
        />
      )}

      {currentStep === 'success' && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mb-4">
              <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
            <p className="text-gray-600">Your registration is being reviewed. You will be notified once approved.</p>
            <p className="text-gray-600 mt-2">Redirecting...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NurseRegisterPage;