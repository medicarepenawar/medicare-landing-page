import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { OTPVerification } from '../../types';
import nurseIcon from '../../assets/img/icon-nurse.svg';
import { REGISTER_URL } from '../../constants/constant';

interface NurseOTPVerificationProps {
  onSubmit: (data: OTPVerification) => void;
  onResend: () => void;
  email: string;
}

const NurseOTPVerification: React.FC<NurseOTPVerificationProps> = ({
  onSubmit,
  onResend,
  email
}) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(50);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      onSubmit({ otp: otpValue });
    }
  };

  const handleResend = () => {
    setTimer(50);
    setOtp(['', '', '', '', '', '']);
    onResend();
  };

  const handleSelectRole = () => {
    navigate(REGISTER_URL);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-[#E3F2FD] via-[#F5F5F5] to-[#FCE4EC]">
      <div className="w-full max-w-[1400px] bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden my-8">
        <div className="flex flex-col lg:flex-row min-h-[800px]">
          {/* Left Side - Illustration */}
          <div className="lg:w-1/2 px-8 py-16 flex flex-col items-center justify-center bg-white">
            {/* Logo */}
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-center">
                <span className="text-blue-600">Medi</span>
                <span className="text-red-500">Care</span>
              </h1>
            </div>

            {/* Nurse Illustration */}
            <div className="mb-12">
              <div className="w-[380px] h-[380px] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
                <img 
                  src={nurseIcon} 
                  alt="Nurse" 
                  className="w-full h-full object-contain scale-90"
                />
              </div>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-8">Nurse</h2>
            
            <button 
              onClick={handleSelectRole}
              type="button"
              className="text-blue-600 flex items-center justify-center hover:text-blue-700 transition-colors font-medium text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Select another role
            </button>
          </div>

          {/* Right Side - OTP Form */}
          <div className="lg:w-1/2 px-12 py-16 bg-white flex items-center">
            <div className="w-full max-w-[500px] mx-auto">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">OTP Verification</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  We will send you OTP Code to your email. Please enter the code correctly
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="flex gap-4 justify-center mb-8">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                  ))}
                </div>

                <div className="text-center mb-8">
                  <p className="text-base text-gray-600 font-medium">
                    00:{timer.toString().padStart(2, '0')} Left
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResend}
                  disabled={timer > 0}
                  className={`w-full mb-5 py-4 rounded-2xl font-semibold text-lg transition-all ${
                    timer > 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-200'
                      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Send Again
                </button>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseOTPVerification;