import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold mb-4">MediCare</h1>
          <p className="text-xl text-blue-100">Healthcare service wherever you are</p>
        </div>
      </div>

      {/* Right Side - Success Message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <svg className="w-24 h-24 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
            
            <p className="text-gray-600 mb-6">
              Thank you for registering with MediCare. Your application is currently under review.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>What's Next?</strong><br />
                Our team will review your application within 1-2 business days. 
                You will receive an email notification once your account is approved.
              </p>
            </div>

            <Link
              to="/"
              className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;