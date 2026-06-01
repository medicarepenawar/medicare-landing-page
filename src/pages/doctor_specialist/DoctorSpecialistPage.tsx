import { useParams, useNavigate } from "react-router-dom";
import EducationCard from "../../components/doctor_specialist/EducationCard";
import ProfileSidebar from "../../components/doctor_specialist/ProfileSidebar";
import CredentialCard from "../../components/doctor_specialist/CredentialCard";
import type { Doctor } from "../../types/doctor_specialist";
import { useEffect, useState } from "react";
import { getDoctorBySlug } from "../../services/doctorSpecialistService";
import { Navbar } from "../../modules/main/components/layout/Navbar";

const DoctorSpecialist = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;

    getDoctorBySlug(slug)
      .then(setDoctor)
      .catch(() => setDoctor(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 font-medium animate-pulse">Loading Doctor profile...</p>
          </div>
        </main>
        <footer className="py-4 text-center text-xs text-gray-400 bg-white border-t border-gray-100 mt-auto flex-shrink-0">
          &copy; 2026 MediCare. All rights reserved.
        </footer>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-md text-center space-y-4">
            <span className="material-symbols-outlined text-red-500 text-5xl">warning</span>
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
        <footer className="py-4 text-center text-xs text-gray-400 bg-white border-t border-gray-100 mt-auto flex-shrink-0">
          &copy; 2026 MediCare. All rights reserved.
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 lg:h-screen lg:overflow-hidden flex flex-col font-sans">
      <Navbar />

      {/* ── MAIN CONTENT ── */}
      <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 pt-24 md:pt-28 pb-4 w-full flex flex-col min-h-0">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-4 text-sm font-sans cursor-pointer flex-shrink-0"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Medical Directory
        </button>

        {/* ── GRID LAYOUT UTAMA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow min-h-0 lg:overflow-hidden mb-4">
          {/* ── SIDEBAR ── */}
          <ProfileSidebar doctor={doctor} onBookClick={() => setIsBookModalOpen(true)} />

          {/* ── KONTEN KANAN ── */}
          <div className="lg:col-span-8 flex flex-col min-h-0 lg:overflow-y-auto space-y-5 pr-1 scrollbar-thin pb-6">
            {/* Professional Overview */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-shrink-0">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Overview</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{doctor.bio}</p>
            </section>

            {/* Credentials & Education */}
            <div className={`grid grid-cols-1 ${doctor.education && doctor.education.length > 0 ? "md:grid-cols-2" : ""} gap-6 flex-shrink-0`}>
              {doctor.education && doctor.education.length > 0 && (
                <EducationCard data={doctor.education} />
              )}
              <CredentialCard doctor={doctor} />
            </div>
          </div>
        </div>
      </main>

      {/* Sleek, premium low-profile footer */}
      <footer className="py-3 text-center text-xs text-gray-400 bg-white border-t border-gray-100 w-full flex-shrink-0">
        &copy; 2026 MediCare. All rights reserved.
      </footer>

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
                  To ensure secure consultations, instant medical records access, and real-time appointment tracking, all specialist doctor bookings are exclusively processed through our mobile app.
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
                {/* QR Code placeholder (Sleek SVG) */}
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
                {/* App Store Badge */}
                <a href="#" className="w-full sm:w-1/2 inline-flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all justify-center cursor-pointer shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] text-gray-400 font-medium">Download on the</div>
                    <div className="text-xs font-bold font-poppins mt-0.5">App Store</div>
                  </div>
                </a>

                {/* Google Play Store Badge */}
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
