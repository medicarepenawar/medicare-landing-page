import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  Check, 
  FileText, 
  GraduationCap, 
  Shield 
} from "lucide-react";
import type { Doctor } from "../../types/doctor_specialist";
import { getDoctorBySlug } from "../../services/doctorSpecialistService";
import { Navbar } from "../../modules/main/components/layout/Navbar";
import { Footer } from "../../modules/main/components/layout/Footer";

const DoctorSpecialist = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getDoctorBySlug(slug)
      .then(setDoctor)
      .catch(() => setDoctor(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 font-medium animate-pulse">Loading Doctor profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full flex items-center justify-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-md text-center space-y-4">
            <Shield className="w-12 h-12 text-red-500 mx-auto" />
            <h2 className="text-xl font-bold text-gray-900">Profile Not Found</h2>
            <p className="text-gray-500">The requested doctor profile could not be found or is currently unavailable.</p>
            <button
              onClick={() => navigate("/main")}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Back to Directory
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Extract first name (e.g. Dr. Surina Bte Azman -> Surina)
  const nameParts = doctor.name.trim().replace(/^(Dr\.|Dr)\s+/i, "").split(/\s+/);
  const firstName = nameParts[0] || doctor.name;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans antialiased text-[#1E293B]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-8 pt-28 md:pt-36 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 mb-8 pt-2">
          <Link to="/main" className="hover:text-[#2563EB] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to="/specialist-doctors" className="hover:text-[#2563EB] transition-colors font-medium">
            Find a Doctor
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="font-semibold text-slate-600">{doctor.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Columns (Span 2): Profile Header & Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Main Header Profile Panel */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Profile Image Frame */}
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden aspect-square flex items-center justify-center">
                  <img 
                    src={doctor.imageUrl} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover rounded-2xl shadow-sm border border-slate-50" 
                  />
                </div>
              </div>

              {/* Info Column */}
              <div className="flex-1 w-full">
                {/* Badge tags at the top */}
                <div className="flex flex-wrap gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#137333] block" />
                    {doctor.isSpecialist ? "Registered Specialist Doctor" : "Registered Medical Officer"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#E8F0FE] text-[#1A73E8] border border-[#ADC8FA]/40 text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] block" />
                    Available for Consultation
                  </span>
                </div>

                {/* Doctor Name */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight mb-2">
                  {doctor.name}
                </h1>
                
                {/* Specialization and Subtitles */}
                <p className="text-[#2563EB] font-bold text-lg">{doctor.isSpecialist ?doctor.specialty :"Medical Officer"}</p>
              </div>
            </div>

          

          

            {/* Personal & Professional Credentials Layout */}
            <div className="border-t border-slate-100 ">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Contact Details Card */}
                <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">Place of Practice</h4>
                    
                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                        
                          <span className="text-sm font-bold text-[#1E293B] leading-relaxed">
                            {doctor.address.hospitalName && <span className="block text-[#0B2545] mb-0.5">{doctor.address.hospitalName}</span>}
                           
                          </span>
                        </div>
                      </div>

                      {/* Nationality & Gender */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Nationality & Gender</span>
                          <span className="text-sm font-bold text-[#1E293B]">
                            {doctor.nationality || "Malaysian"} • {doctor.gender}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Credentials Card */}
                <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">Professional Credentials</h4>
                    
                    <div className="space-y-6">
                     

                      {/* MMC Registration */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">MMC Registration Number</span>
                          <span className="text-sm font-bold text-[#1E293B]">
                            No. {doctor.mmcNumber || "N/A"}
                          </span>
                        </div>
                      </div>

                      {/* NSR Registration */}
                      {doctor.nsrNumber && (
                        <div className="flex items-start gap-4 border-t border-slate-50 pt-5">
                          <div className="p-3 bg-[#F1F5F9] text-purple-600 rounded-xl flex-shrink-0">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">NSR Registration Number</span>
                            <span className="text-sm font-bold text-[#1E293B]">
                              No. {doctor.nsrNumber}
                            </span>
                          </div>
                        </div>
                      )}

                       {/* APC Certificate */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Annual Practising Certificate (APC)</span>
                          <span className="text-sm font-bold text-[#1E293B]">
                            No. {doctor.apcNumber || "N/A"}
                          </span>
                          {doctor.apcExpiry && (
                            <span className="text-xs text-slate-400 mt-1 block">
                              Expires: {doctor.apcExpiry}
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            {doctor.education && doctor.education.length > 0 && (
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Education & Qualifications
                </h3>

                <div className="relative pl-6 border-l-2 border-blue-100 ml-4 space-y-8">
                  {doctor.education.map((edu, idx) => (
                    <div key={idx} className="relative">
                      {/* Point indicator */}
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm" />
                      
                      <div className="space-y-1">
                        <span className="text-xs font-extrabold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                          {edu.year}
                        </span>
                        <h4 className="text-base font-bold text-slate-800 pt-1">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-semibold text-slate-500">{edu.major}</p>
                        <p className="text-xs text-slate-400 font-medium">{edu.university}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (Span 1): Sticky Booking Card panel */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300">
              <h4 className="text-xl font-bold text-[#0B2545] tracking-tight mb-1">Schedule Your Consultation</h4>
              <p className="text-slate-400 text-sm font-medium mb-6">Quality healthcare for you and your family</p>

              {/* Booking Button */}
              {doctor.isSpecialist && (
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full bg-[#1A73E8] hover:bg-[#1557B0] active:scale-[0.98] text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-[0_4px_16px_rgba(26,115,232,0.2)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.3)] flex flex-col items-center justify-center gap-0.5 text-center cursor-pointer"
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-blue-100">
                    <Calendar className="w-4.5 h-4.5 text-white" />
                    Book Dr. {firstName} at
                  </div>
                  <div className="font-extrabold text-base tracking-wide">
                    MediCare App
                  </div>
                </button>
              )}

              {/* Status details stack */}
              <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Practice Verification</span>
                  <p className="text-[#137333] font-bold flex items-center gap-1.5 text-xs bg-[#E6F4EA] px-3.5 py-2 rounded-xl w-fit border border-[#A3E2AB]/20">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Verified Practitioner
                  </p>
                </div>
                
                {doctor.tags.find(t => t.includes("Exp.")) && (
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1.5">Clinical Experience</span>
                    <p className="font-extrabold text-slate-800 text-base">
                      {doctor.tags.find(t => t.includes("Exp."))}
                    </p>
                  </div>
                )}
              </div>

              {/* Small Light Blue Bottom Box */}
              <div className="mt-8 p-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl space-y-3 shadow-inner">
                <p className="text-xs text-slate-600 font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] flex-shrink-0" />
                  MMC & APC Registered
                </p>
                <p className="text-xs text-slate-600 font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] flex-shrink-0" />
                  Backed by MediCare Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* ── APP DOWNLOAD / REDIRECT MODAL ── */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100 relative scale-100 transition-all duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsBookModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer p-1.5 hover:bg-gray-100 rounded-full"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="p-8 space-y-6 text-center flex flex-col items-center">
              {/* App Icon Graphic */}
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner mb-2 animate-bounce">
                <span className="material-symbols-outlined text-4xl">add_to_home_screen</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-poppins text-2xl font-bold text-gray-900 tracking-tight">Book via MediCare App</h3>
                <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                  To ensure secure consultations, instant medical records access, and real-time appointment tracking, all doctor bookings are processed through our mobile app.
                </p>
              </div>

              {/* Doctor Quick Badge */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl py-3 px-6 w-full flex items-center justify-between gap-4 max-w-md">
                <div className="flex items-center gap-3 text-left">
                  <img src={doctor.imageUrl} alt={doctor.name} className="w-10 h-10 rounded-full object-cover border border-blue-200" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{doctor.name}</h4>
                    <p className="text-[11px] text-blue-600 font-semibold">{doctor.specialty}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">Active Profile</span>
              </div>

              {/* QR Code & Scan Instructions */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 w-full max-w-md flex flex-col sm:flex-row items-center gap-5">
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-center shadow-inner flex-shrink-0">
                  <svg className="w-full h-full text-gray-800" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 5h25v25H5z M70 5h25v25H70z M5 70h25v25H5z" strokeWidth="3" />
                    <path d="M12 12h11v11H12z M77 12h11v11H77z M12 77h11v11H12z" fill="currentColor" stroke="none" />
                    <rect x="40" y="5" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="50" y="15" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="45" y="25" width="12" height="6" fill="currentColor" rx="1" />
                    <rect x="5" y="40" width="6" height="12" fill="currentColor" rx="1" />
                    <rect x="18" y="45" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="25" y="52" width="12" height="6" fill="currentColor" rx="1" />
                    <rect x="45" y="45" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="55" y="55" width="12" height="12" fill="currentColor" rx="1" />
                    <rect x="75" y="45" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="85" y="52" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="70" y="70" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="80" y="75" width="6" height="12" fill="currentColor" rx="1" />
                    <rect x="90" y="90" width="6" height="6" fill="currentColor" rx="1" />
                    <rect x="45" y="75" width="12" height="6" fill="currentColor" rx="1" />
                    <rect x="55" y="85" width="6" height="6" fill="currentColor" rx="1" />
                  </svg>
                </div>
                <div className="text-left space-y-1">
                  <h4 className="font-bold text-gray-800 text-xs">Scan to Book Instantly</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Point your camera at this QR code to instantly download the MediCare App on iOS or Android and complete your appointment setup with {doctor.name}.
                  </p>
                </div>
              </div>

              {/* App Download Badges */}
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center items-center pt-2">
                <a href="#" className="w-full sm:w-1/2 inline-flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all justify-center cursor-pointer shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] text-gray-400 font-medium">Download on the</div>
                    <div className="text-xs font-bold font-poppins mt-0.5">App Store</div>
                  </div>
                </a>

                <a href="#" className="w-full sm:w-1/2 inline-flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all justify-center cursor-pointer shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] text-gray-400 font-medium">GET IT ON</div>
                    <div className="text-xs font-bold font-poppins mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSpecialist;
