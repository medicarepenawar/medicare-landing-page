import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  VENDOR_REGISTRATION_SUCCESS_URL,
  NURSE_REGISTRATION_SUCCESS_URL,
  DOCTOR_REGISTRATION_SUCCESS_URL
} from '../constants/constant';
import { usePageTitle } from '../hooks/usePageTitle';

const RegistrationSuccess: React.FC = () => {
  usePageTitle('Registration Success');
  const location = useLocation();

  // Get role from state or default to vendor
  const role = (location.state as { role?: string })?.role || 'vendor';

  useEffect(() => {
    // Redirect to appropriate login page after 3 seconds
    const timer = setTimeout(() => {
      let loginUrl = VENDOR_REGISTRATION_SUCCESS_URL;

      switch (role.toLowerCase()) {
        case 'nurse':
          loginUrl = NURSE_REGISTRATION_SUCCESS_URL || VENDOR_REGISTRATION_SUCCESS_URL;
          break;
        case 'doctor':
          loginUrl = DOCTOR_REGISTRATION_SUCCESS_URL;
          break;
        case 'vendor':
          loginUrl = VENDOR_REGISTRATION_SUCCESS_URL;
          break;
        default:
          loginUrl = VENDOR_REGISTRATION_SUCCESS_URL;
      }

      // Only redirect if URL is not empty
      if (loginUrl) {
        window.location.href = loginUrl;
      } else {
        console.warn(`Login URL for role "${role}" is not configured`);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [role]);

  // Get role display name
  const getRoleDisplayName = () => {
    switch (role.toLowerCase()) {
      case 'nurse':
        return 'Nurse';
      case 'doctor':
        return 'Doctor';
      case 'vendor':
        return 'Vendor';
      default:
        return 'User';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E3F2FD] via-[#F5F5F5] to-[#FCE4EC]">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Registration Successful!
          </h1>

          <p className="text-gray-600 text-lg mb-2">
            Your <span className="font-semibold text-blue-600">{getRoleDisplayName()}</span> account has been created successfully.
          </p>

          <p className="text-gray-500 text-base mb-8">
            You will be redirected to the login page shortly.
          </p>

          {/* Loading Animation */}
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>

          <p className="text-sm text-gray-400">
            Redirecting in 3 seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;