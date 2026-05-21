import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronRight, MessageCircle, Calendar, MapPin, Award, Users, Heart } from "lucide-react";
import { Navbar } from "../../modules/main/components/layout/Navbar";
import { Footer } from "../../modules/main/components/layout/Footer";
import { getNurseBySlug } from "../../services/nurseService";
import type { Nurse } from "../../types/nurse";
import Toast from "../../components/common/Toast";

export default function NurseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [nurse, setNurse] = useState<Nurse | null>(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getNurseBySlug(slug)
      .then(setNurse)
      .catch((err) => {
        console.error("Failed to load nurse profile:", err);
        setNurse(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 font-medium animate-pulse">Loading nurse profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!nurse) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-6 py-16 pt-28 md:pt-36 text-center">
          <div className="text-gray-600">Nurse not found</div>
          <button onClick={() => navigate("/")} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Back to Home
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    setToastMessage("Booking feature coming soon!");
    setShowToast(true);
  };

  const handleChat = () => {
    setToastMessage("Chat feature coming soon!");
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-8 py-8 pt-28 md:pt-36">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 pt-4">
          <Link to="/" className="hover:text-[#2563EB]">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/" className="hover:text-[#2563EB]">
            Find a Nurse
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">{nurse.name}</span>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left: Main Content */}
          <div className="md:col-span-2">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-12 pb-12 border-b border-gray-200">
              {/* Image */}
              <div className="md:w-80 flex-shrink-0">
                <div className="bg-[#f8fbff] rounded-2xl p-8 border border-gray-100 aspect-square flex items-center justify-center overflow-hidden">
                  <img 
                    src={nurse.photo || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400"} 
                    alt={nurse.name} 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                {nurse.verified && (
                  <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-sm mb-3">REGISTERED & VERIFIED NURSE</div>
                )}

                <h1 className="text-4xl font-bold text-gray-900 mb-2">{nurse.name}</h1>
                <p className="text-[#0b5f8c] font-semibold text-lg mb-1">State Registered Nurse (SRN)</p>
                <p className="text-gray-600 mb-6">{nurse.experienceText || "Professional Home Nursing Care"}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Experience</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {nurse.yearExperience ? `${nurse.yearExperience} Years` : "N/A"}
                      <span className="text-sm text-gray-600 block">in Practice</span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Gender</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {nurse.gender}
                      <span className="text-sm text-gray-600 block">Professional</span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Location</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {nurse.city || "Malaysia"}
                      <span className="text-sm text-gray-600 block">{nurse.state || "State"}</span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Nationality</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {nurse.nationality || "Malaysian"}
                      <span className="text-sm text-gray-600 block">Registered</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About / Experience Section */}
            <div className="mb-12 space-y-6">
              {nurse.experienceText && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Experience</h3>
                  <p className="text-gray-600 leading-relaxed">{nurse.experienceText}</p>
                </div>
              )}
              {nurse.coursesAttended && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Attended Courses & Training</h3>
                  <p className="text-gray-600 leading-relaxed">{nurse.coursesAttended}</p>
                </div>
              )}
              {!nurse.experienceText && !nurse.coursesAttended && (
                <p className="text-gray-500 italic">No biography or additional experience details provided.</p>
              )}
            </div>

            {/* Personal & Professional Credentials Section */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal & Professional Credentials</h3>
              
              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                {/* Contact & Address */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Contact Details</h4>
                  
                  {nurse.phoneNumber && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📱</div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone Number</p>
                        <p className="text-gray-800 font-medium">{nurse.phoneNumber}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📍</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Full Address</p>
                      <p className="text-gray-800 font-medium">
                        {nurse.address || "No Address Provided"}
                        {nurse.postcode && `, ${nurse.postcode}`}
                        {nurse.city && `, ${nurse.city}`}
                        {nurse.state && `, ${nurse.state}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🌍</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Nationality & Gender</p>
                      <p className="text-gray-800 font-medium">{nurse.nationality || "Malaysian"} • {nurse.gender}</p>
                    </div>
                  </div>
                </div>

                {/* Professional Qualifications & Registration */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Professional Credentials</h4>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📝</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Annual Practising Certificate (APC)</p>
                      <p className="text-gray-800 font-medium">No. {nurse.apcNumber || "N/A"}</p>
                      {nurse.apcExpired && (
                        <p className="text-xs text-gray-400 font-normal">Expires: {new Date(nurse.apcExpired).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🎓</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Education & Qualification</p>
                      <p className="text-gray-800 font-medium">
                        {nurse.firstGraduateFrom ? `Graduated from ${nurse.firstGraduateFrom}` : "N/A"}
                        {nurse.firstGraduateYear && ` (${nurse.firstGraduateYear})`}
                      </p>
                      {nurse.nurseCertificateId && (
                        <p className="text-xs text-gray-400 font-normal">Certificate ID: {nurse.nurseCertificateId}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🪪</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Identification (NRIC / Passport)</p>
                      <p className="text-gray-800 font-medium">
                        {nurse.nric ? `NRIC: ${nurse.nric}` : ""}
                        {nurse.passportNumber ? `Passport: ${nurse.passportNumber}` : ""}
                        {!nurse.nric && !nurse.passportNumber && "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location details */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Practice Location
              </h3>
              <p className="text-gray-600">
                City: <span className="font-semibold text-gray-800">{nurse.city || "N/A"}</span>, State: <span className="font-semibold text-gray-800">{nurse.state || "N/A"}</span>
              </p>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-20 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Schedule Your Service Today</h4>

              <p className="text-gray-600 text-sm mb-6">Quality care at the comfort of your home</p>

              <button
                onClick={handleBooking}
                className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-bold mb-4 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book {nurse.name.split(" ")[nurse.name.split(" ").length - 1]} at Medicare App
              </button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Registration Status</p>
                    <p className="font-semibold text-green-600 flex items-center gap-1.5 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                      {nurse.verified ? "Verified Professional" : "Registered Professional"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Experience</p>
                    <p className="font-semibold text-gray-900">
                      {nurse.yearExperience ? `${nurse.yearExperience} Years Exp.` : "Registered Professional"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#f8fbff] rounded-lg border border-[#2563EB]/20">
                <p className="text-xs text-gray-600">
                  <span className="font-bold text-[#2563EB]">✓</span> Registered & Verified Nurse
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  <span className="font-bold text-[#2563EB]">✓</span> Backed by Medicare Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
    </div>
  );
}
