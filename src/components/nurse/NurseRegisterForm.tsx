import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { NurseRegisterForm as NurseRegisterFormType } from '../../types';
import nurseIcon from '../../assets/img/icon-nurse.svg';
import { REGISTER_URL } from '../../constants/constant';

interface NurseRegisterFormProps {
  onSubmit: (data: NurseRegisterFormType) => void;
}

const NurseRegisterForm: React.FC<NurseRegisterFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<NurseRegisterFormType>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreementAccepted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSubmit(formData);
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

          {/* Right Side - Form */}
          <div className="lg:w-1/2 px-12 py-16 bg-white flex items-center overflow-y-auto">
            <div className="w-full max-w-[500px] mx-auto">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">Register</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Please complete the following data
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="eg: John Doe"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="eg: john.doe@gmail.com"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="eg: +60 10-1234568"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="min. 8 characters"
                    required
                    minLength={8}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="min. 8 characters"
                    required
                    minLength={8}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-base"
                  />
                </div>

                <div className="flex items-start gap-3 pt-3">
                  <input
                    type="checkbox"
                    id="agreementAccepted"
                    name="agreementAccepted"
                    checked={formData.agreementAccepted}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="agreementAccepted" className="text-sm text-gray-700 leading-relaxed">
                    By ticking, you're confirm that you have read, understood and agree to Medicare{' '}
                    <a href="/terms" className="text-blue-600 hover:underline font-medium">Terms of Service</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-8"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseRegisterForm;