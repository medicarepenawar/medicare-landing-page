import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { TopBar } from "../../components/marketplace_pharmacy/layout/TopBar";
import { Header } from "../../components/marketplace_pharmacy/layout/Header";
import { NavBar } from "../../components/marketplace_pharmacy/layout/NavBar";
import { MARKETPLACE_URL } from "../../constants/constant";
import { ChevronRight, UploadCloud, FileText, AlertCircle, CheckCircle2, X } from "lucide-react";

export default function UploadPrescriptionPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans 2xl:max-w-[1440px] 2xl:mx-auto 2xl:border-x border-gray-100 2xl:shadow-sm">
      <TopBar />
      <Header />
      <NavBar />
      
      <main className="px-6 lg:px-16 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 pt-2">
          <Link to={MARKETPLACE_URL} className="hover:text-[#0b5f8c]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">Upload Prescription</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Prescription</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Please upload a clear image of your doctor's prescription. Our pharmacists will review it and guide you through the ordering process.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Upload Area */}
          <div className="w-full lg:w-7/12">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/png, image/jpeg, image/svg+xml, application/pdf" 
              className="hidden" 
            />
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`bg-white rounded-xl shadow-sm border-2 border-dashed transition-all p-12 flex flex-col items-center justify-center cursor-pointer min-h-[400px] ${
                isDragging ? 'border-[#0b5f8c] bg-blue-50' : 'border-gray-300 hover:border-[#0b5f8c]'
              }`}
            >
              {!selectedFile ? (
                <>
                  <div className="bg-blue-50 text-[#0b5f8c] p-4 rounded-full mb-6 relative hover:scale-110 transition-transform">
                    <UploadCloud className="w-12 h-12" />
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                       <FileText className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Click to upload or drag and drop</h3>
                  <p className="text-gray-500 text-center mb-8 max-w-md">
                    SVG, PNG, JPG or PDF (max. 10MB)
                  </p>
                  
                  <button className="bg-[#0b5f8c] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors shadow-md pointer-events-none">
                    Select File
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="bg-green-50 text-green-600 p-6 rounded-full mb-4">
                    <FileText className="w-16 h-16" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 max-w-sm text-center truncate px-4">{selectedFile.name}</h3>
                  <p className="text-sm text-gray-500 mb-6">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Prescription Submitted Successfully!");
                        setSelectedFile(null);
                      }}
                      className="bg-[#2ebc78] text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
                    >
                      Submit Now
                    </button>
                    <button 
                      onClick={clearFile}
                      className="bg-red-50 text-red-600 px-4 py-3 rounded-md font-semibold hover:bg-red-100 transition-colors flex items-center justify-center"
                      title="Remove file"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-yellow-800 text-sm">
               <AlertCircle className="w-5 h-5 flex-shrink-0" />
               <p>Prescription drugs cannot be ordered without a valid doctor's prescription. Our pharmacist may contact you for verification.</p>
            </div>
          </div>

          {/* Guide / Instructions */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">Valid Prescription Guide</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Doctor's Details</h4>
                    <p className="text-sm text-gray-600">Must clearly show the doctor's name, clinic/hospital details, and signature or stamp.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Patient Info</h4>
                    <p className="text-sm text-gray-600">The patient's full name and date of prescription must be clearly visible.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Medicine Details</h4>
                    <p className="text-sm text-gray-600">Medicine names, dosage, and duration should be readable without being cut off.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#e9f6f2] rounded-xl p-6 text-[#1a2f44]">
              <h3 className="font-bold mb-2">Need help?</h3>
              <p className="text-sm mb-4 text-gray-700">If you are having trouble uploading, you can send it directly to our pharmacist via WhatsApp.</p>
              <button className="w-full bg-[#21b764] text-white py-3 rounded-md font-bold hover:bg-green-700 transition-colors shadow-md">
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
