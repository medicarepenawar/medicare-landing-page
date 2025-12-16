import React, { useState } from "react";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import FileUpload from "../common/FileUpload";
import Toggle from "../common/Toggle";
// Pastikan tipe data ini sesuai di file types.ts Anda
import type { DoctorPostRegisterForm, DropdownOption } from "../../types";

interface DoctorPostRegisterProps {
  onSubmit: (data: DoctorPostRegisterForm) => void;
  initialData: {
    fullName: string;
    email: string;
    phone: string;
  };
}

const DoctorPostRegister: React.FC<DoctorPostRegisterProps> = ({ onSubmit, initialData }) => {
  // 1. Inisialisasi State sesuai struktur data Dokter
  const [formData, setFormData] = useState<DoctorPostRegisterForm>({
    // Personal
    fullName: initialData.fullName,
    dob: "",
    gender: "male",
    idType: "nric",
    idNumber: "",
    nationality: "MY", // Default Malaysian
    profilePhoto: null,
    idPhoto: null,

    // Contact
    phoneNumber: initialData.phone,
    emailAddress: initialData.email,
    address: "",
    postcode: "",
    state: "",
    city: "",

    // Professional (Doctor Specific)
    placeOfPractice: "", // Nama Klinik/RS tempat praktik
    mmcNumber: "", // No. Registrasi MMC (Wajib untuk dokter)
    mmcCertificate: null,

    apc: "",
    apcExpiredDate: "",
    apcCertificate: null,

    // Education
    firstGraduateFrom: "", // Universitas S1 (MBBS/MD)
    firstGraduateYear: "",
    specialistGraduateFrom: "", // Universitas Spesialis (jika ada)
    specialistGraduateYear: "",
  });

  const [cities, setCities] = useState<DropdownOption[]>([]);

  // 2. Data Dropdown
  const nationalityOptions: DropdownOption[] = [
    { value: "MY", label: "Malaysian" },
    { value: "SG", label: "Singaporean" },
    { value: "ID", label: "Indonesian" },
    { value: "OTHERS", label: "Others" },
  ];

  const stateOptions: DropdownOption[] = [
    { value: "Johor", label: "Johor" },
    { value: "Kedah", label: "Kedah" },
    { value: "Kelantan", label: "Kelantan" },
    { value: "Kuala Lumpur", label: "Kuala Lumpur" },
    { value: "Selangor", label: "Selangor" },
    { value: "Penang", label: "Penang" },
    // ... states lainnya
  ];

  // Mock cities based on state
  const citiesByState: Record<string, DropdownOption[]> = {
    "Kuala Lumpur": [
      { value: "Bukit Bintang", label: "Bukit Bintang" },
      { value: "Cheras", label: "Cheras" },
      { value: "Bangsar", label: "Bangsar" },
    ],
    Selangor: [
      { value: "Petaling Jaya", label: "Petaling Jaya" },
      { value: "Shah Alam", label: "Shah Alam" },
      { value: "Subang Jaya", label: "Subang Jaya" },
    ],
  };

  // Handler Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "state") {
      setCities(citiesByState[value] || []);
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleToggleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validasi sederhana sebelum submit
    if (!formData.mmcNumber || !formData.apc) {
      alert("Please fill in your Medical Registration details (MMC & APC).");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Doctor Profile Setup</h2>
          <p className="text-gray-600 mb-8">Please provide your professional medical details</p>

          <form onSubmit={handleSubmit}>
            {/* --- 1. Personal Info Section --- */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Personal Information</h3>

              <InputField label="Full Name (as per MMC)" name="fullName" value={formData.fullName} onChange={handleChange} required disabled />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} required />

                <Toggle
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(value) => handleToggleChange("gender", value)}
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Toggle
                  label="ID Type"
                  name="idType"
                  value={formData.idType}
                  onChange={(value) => handleToggleChange("idType", value)}
                  options={[
                    { value: "nric", label: "NRIC" },
                    { value: "passport", label: "Passport" },
                  ]}
                  required
                />

                <InputField
                  label={formData.idType === "nric" ? "NRIC Number" : "Passport Number"}
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  placeholder={`Enter ${formData.idType === "nric" ? "NRIC" : "Passport"} number`}
                  required
                />
              </div>

              <div className="mt-4">
                <Dropdown label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} options={nationalityOptions} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <FileUpload label="Profile Photo" name="profilePhoto" onChange={(file) => handleFileChange("profilePhoto", file)} accept="image/*" required />
                <FileUpload label="ID Document (Front)" name="idPhoto" onChange={(file) => handleFileChange("idPhoto", file)} accept="image/*" required />
              </div>
            </div>

            {/* --- 2. Contact & Address Section --- */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Contact & Address</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required disabled />
                <InputField label="Email Address" type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required disabled />
              </div>

              <InputField
                label="Residential Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <InputField label="Postcode" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Enter postcode" required />
                <Dropdown label="State" name="state" value={formData.state} onChange={handleChange} options={stateOptions} required />
              </div>

              <div className="mt-4">
                <Dropdown label="City" name="city" value={formData.city} onChange={handleChange} options={cities} required disabled={!formData.state} />
              </div>
            </div>

            {/* --- 3. Professional Information Section (DOCTOR SPECIFIC) --- */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b">Professional Medical Information</h3>

              {/* Place of Practice */}
              <div className="mb-4">
                <InputField
                  label="Current Place of Practice"
                  name="placeOfPractice"
                  value={formData.placeOfPractice}
                  onChange={handleChange}
                  placeholder="e.g. General Hospital Kuala Lumpur / My Private Clinic"
                  required
                />
              </div>

              {/* MMC Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="MMC Registration No."
                  name="mmcNumber"
                  value={formData.mmcNumber!}
                  onChange={handleChange}
                  placeholder="Enter MMC Number"
                  required
                />
                <FileUpload
                  label="MMC Certificate (Upload)"
                  name="mmcCertificate"
                  onChange={(file) => handleFileChange("mmcCertificate", file)}
                  accept="image/*,application/pdf"
                  required
                />
              </div>

              {/* APC Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <InputField label="APC Number" name="apcNumber" value={formData.apc!} onChange={handleChange} placeholder="Enter APC Number" required />
                <InputField label="APC Expiry Date" type="date" name="apcExpiredDate" value={formData.apcExpiredDate || ""} onChange={handleChange} required />
              </div>

              <div className="mt-4">
                <FileUpload
                  label="APC Certificate (Upload)"
                  name="apcCertificate"
                  onChange={(file) => handleFileChange("apcCertificate", file)}
                  accept="image/*,application/pdf"
                  required
                />
              </div>

              {/* Education Background */}
              <h4 className="text-md font-semibold text-gray-700 mt-6 mb-3">Education Background</h4>

              {/* Primary Degree */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="First Medical Degree (University)"
                  name="firstGraduateFrom"
                  value={formData.firstGraduateFrom}
                  onChange={handleChange}
                  placeholder="e.g. University of Malaya"
                  required
                />
                <InputField
                  label="Year of Graduation"
                  type="number"
                  name="firstGraduateYear"
                  value={formData.firstGraduateYear}
                  onChange={handleChange}
                  placeholder="YYYY"
                  required
                />
              </div>

              {/* Specialist Degree (Optional) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <InputField
                  label="Specialist Qualification (Optional)"
                  name="specialistGraduateFrom"
                  value={formData.specialistGraduateFrom || ""}
                  onChange={handleChange}
                  placeholder="e.g. Master of Internal Medicine"
                />
                <InputField
                  label="Year of Specialist Grad (Optional)"
                  type="number"
                  name="specialistGraduateYear"
                  value={formData.specialistGraduateYear || ""}
                  onChange={handleChange}
                  placeholder="YYYY"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Complete Doctor Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorPostRegister;
