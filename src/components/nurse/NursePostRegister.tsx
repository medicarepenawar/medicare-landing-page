import React, { useState } from 'react';
import InputField from '../common/InputField';
import Dropdown from '../common/Dropdown';
import FileUpload from '../common/FileUpload';
import Toggle from '../common/Toggle';
import type { NursePostRegisterForm, DropdownOption } from '../../types';

interface NursePostRegisterProps {
  onSubmit: (data: NursePostRegisterForm) => void;
  initialData: {
    fullName: string;
    email: string;
    phone: string;
  };
}

const NursePostRegister: React.FC<NursePostRegisterProps> = ({
  onSubmit,
  initialData
}) => {
  const [formData, setFormData] = useState<NursePostRegisterForm>({
    fullName: initialData.fullName,
    dob: '',
    gender: 'male',
    idType: 'nric',
    idNumber: '',
    nationality: '',
    profilePhoto: null,
    idPhoto: null,
    phoneNumber: initialData.phone,
    emailAddress: initialData.email,
    address: '',
    postcode: '',
    state: '',
    city: '',
    nurseCertificateId: '',
    apc: '',
    apcExpiredDate: '',
    nurseCertificate: null,
    apcCertificate: null,
    education: '',
    firstGraduateFrom: '',
    firstGraduateYear: ''
  });

  const [cities, setCities] = useState<DropdownOption[]>([]);

  // Mock data - replace with actual data
  const nationalityOptions: DropdownOption[] = [
    { value: 'MY', label: 'Malaysian' },
    { value: 'SG', label: 'Singaporean' },
    { value: 'ID', label: 'Indonesian' },
    { value: 'TH', label: 'Thai' }
  ];

  const stateOptions: DropdownOption[] = [
    { value: 'Johor', label: 'Johor' },
    { value: 'Kedah', label: 'Kedah' },
    { value: 'Kelantan', label: 'Kelantan' },
    { value: 'Kuala Lumpur', label: 'Kuala Lumpur' },
    { value: 'Melaka', label: 'Melaka' },
    { value: 'Negeri Sembilan', label: 'Negeri Sembilan' },
    { value: 'Pahang', label: 'Pahang' },
    { value: 'Penang', label: 'Penang' },
    { value: 'Perak', label: 'Perak' },
    { value: 'Perlis', label: 'Perlis' },
    { value: 'Sabah', label: 'Sabah' },
    { value: 'Sarawak', label: 'Sarawak' },
    { value: 'Selangor', label: 'Selangor' },
    { value: 'Terengganu', label: 'Terengganu' }
  ];

  const educationOptions: DropdownOption[] = [
    { value: 'Diploma', label: 'Diploma' },
    { value: 'Bachelor', label: 'Bachelor' },
    { value: 'Master', label: 'Master' },
    { value: 'PhD', label: 'PhD' }
  ];

  // Mock cities based on state
  const citiesByState: Record<string, DropdownOption[]> = {
    'Kuala Lumpur': [
      { value: 'Bukit Bintang', label: 'Bukit Bintang' },
      { value: 'Cheras', label: 'Cheras' },
      { value: 'Bangsar', label: 'Bangsar' }
    ],
    'Selangor': [
      { value: 'Petaling Jaya', label: 'Petaling Jaya' },
      { value: 'Shah Alam', label: 'Shah Alam' },
      { value: 'Subang Jaya', label: 'Subang Jaya' }
    ]
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Update cities when state changes
    if (name === 'state') {
      setCities(citiesByState[value] || []);
      setFormData(prev => ({ ...prev, city: '' }));
    }
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [name]: file }));
  };

  const handleToggleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Profile</h2>
          <p className="text-gray-600 mb-8">Please provide your professional information</p>

          <form onSubmit={handleSubmit}>
            {/* Personal Info Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Personal Information
              </h3>
              
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />

                <Toggle
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(value) => handleToggleChange('gender', value)}
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' }
                  ]}
                  required
                />
              </div>

              <Toggle
                label="ID Type"
                name="idType"
                value={formData.idType}
                onChange={(value) => handleToggleChange('idType', value)}
                options={[
                  { value: 'nric', label: 'NRIC' },
                  { value: 'passport', label: 'Passport' }
                ]}
                required
              />

              <InputField
                label={formData.idType === 'nric' ? 'NRIC Number' : 'Passport Number'}
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder={`Enter ${formData.idType === 'nric' ? 'NRIC' : 'Passport'} number`}
                required
              />

              <Dropdown
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                options={nationalityOptions}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUpload
                  label="Profile Photo"
                  name="profilePhoto"
                  onChange={(file) => handleFileChange('profilePhoto', file)}
                  accept="image/*"
                  required
                />

                <FileUpload
                  label="ID Photo"
                  name="idPhoto"
                  onChange={(file) => handleFileChange('idPhoto', file)}
                  accept="image/*"
                  required
                />
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  disabled
                />

                <InputField
                  label="Email Address"
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  disabled
                />
              </div>
            </div>

            {/* User Address Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                User Address
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Note: This is your residential address, not the order delivery address
              </p>

              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="Enter postcode"
                  required
                />

                <Dropdown
                  label="State (Provinsi)"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  options={stateOptions}
                  required
                />
              </div>

              <Dropdown
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                options={cities}
                required
                disabled={!formData.state}
              />
            </div>

            {/* Professional Information Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Professional Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Nurse Certificate ID"
                  name="nurseCertificateId"
                  value={formData.nurseCertificateId || ''}
                  onChange={handleChange}
                  placeholder="Enter certificate ID (optional)"
                />

                <InputField
                  label="APC"
                  name="apc"
                  value={formData.apc || ''}
                  onChange={handleChange}
                  placeholder="Enter APC number (optional)"
                />
              </div>

              <InputField
                label="APC Expired Date"
                type="date"
                name="apcExpiredDate"
                value={formData.apcExpiredDate || ''}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUpload
                  label="Nurse Certificate"
                  name="nurseCertificate"
                  onChange={(file) => handleFileChange('nurseCertificate', file)}
                  accept="image/*,application/pdf"
                  required
                />

                <FileUpload
                  label="APC Certificate"
                  name="apcCertificate"
                  onChange={(file) => handleFileChange('apcCertificate', file)}
                  accept="image/*,application/pdf"
                  required
                />
              </div>

              <Dropdown
                label="Education Level"
                name="education"
                value={formData.education}
                onChange={handleChange}
                options={educationOptions}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="First Graduate From"
                  name="firstGraduateFrom"
                  value={formData.firstGraduateFrom}
                  onChange={handleChange}
                  placeholder="Enter institution name"
                  required
                />

                <InputField
                  label="First Graduate Year"
                  type="number"
                  name="firstGraduateYear"
                  value={formData.firstGraduateYear}
                  onChange={handleChange}
                  placeholder="e.g., 2020"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NursePostRegister;