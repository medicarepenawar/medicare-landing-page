import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DoctorRegisterForm from "../../components/doctor/DoctorRegisterForm";
import DoctorOTPVerification from "../../components/doctor/DoctorOTPVerification";
import DoctorPostRegister from "../../components/doctor/DoctorPostRegister";

import type { DoctorRegisterForm as DoctorRegisterFormType, DoctorPostRegisterForm, OTPVerification } from "../../types";

type Step = "register" | "otp" | "post-register" | "success";

const DoctorRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("register");

  const [registerData, setRegisterData] = useState<DoctorRegisterFormType | null>(null);

  const handleRegisterSubmit = (data: DoctorRegisterFormType) => {
    setRegisterData(data);
    // TODO: Call API to send OTP to Doctor
    console.log("Doctor Register data:", data);
    setCurrentStep("otp");
  };

  const handleOTPSubmit = (data: OTPVerification) => {
    // TODO: Call API to verify OTP
    console.log("OTP:", data);
    setCurrentStep("post-register");
  };

  const handleOTPResend = () => {
    // TODO: Call API to resend OTP
    console.log("Resending OTP...");
  };

  const handlePostRegisterSubmit = (data: DoctorPostRegisterForm) => {
    // TODO: Call API to complete doctor registration
    console.log("Complete doctor registration data:", data);
    setCurrentStep("success");

    // Redirect to success page after 2 seconds
    setTimeout(() => {
      navigate("/registration-success");
    }, 2000);
  };

  return (
    <>
      {currentStep === "register" && <DoctorRegisterForm onSubmit={handleRegisterSubmit} />}

      {currentStep === "otp" && registerData && <DoctorOTPVerification onSubmit={handleOTPSubmit} onResend={handleOTPResend} email={registerData.email} />}

      {currentStep === "post-register" && registerData && (
        <DoctorPostRegister
          onSubmit={handlePostRegisterSubmit}
          initialData={{
            fullName: registerData.fullName,
            email: registerData.email,
            phone: registerData.phone,
          }}
        />
      )}

      {currentStep === "success" && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mb-4">
              <svg className="w-20 h-20 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Doctor Registration Successful!</h2>
            <p className="text-gray-600">Your registration is being reviewed. You will be notified once approved.</p>
            <p className="text-gray-600 mt-2">Redirecting...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorRegisterPage;
