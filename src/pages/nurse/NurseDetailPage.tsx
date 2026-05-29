import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  Heart, 
  Check, 
  Phone, 
  Globe, 
  FileText, 
  GraduationCap, 
  Fingerprint,
  Home,
  Shield
} from "lucide-react";
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

  // Get last name for the booking button (e.g. Fahi Faizuwan Bin Md Lazaam -> Lazaam)
  const nameParts = nurse.name.trim().split(/\s+/);
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : nurse.name;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans antialiased text-[#1E293B]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-8 pt-28 md:pt-36 w-full">
        {/* Breadcrumb - Subtle & clean */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 mb-8 pt-2">
          <Link to="/main" className="hover:text-[#2563EB] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to="/nurses" className="hover:text-[#2563EB] transition-colors font-medium">
            Find a Nurse
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="font-semibold text-slate-600">{nurse.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Columns (Span 2): Profile Header & Credentials */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Main Header Profile Panel */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Profile Image Frame */}
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden aspect-square flex items-center justify-center">
                  <img 
                    src={nurse.photo || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400"} 
                    alt={nurse.name} 
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
                    Registered Professional Nurse
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#E8F0FE] text-[#1A73E8] border border-[#ADC8FA]/40 text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] block" />
                    Available for Home Care
                  </span>
                </div>

                {/* Nurse Name */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight mb-2">
                  {nurse.name}
                </h1>
                
                {/* Specialization and Subtitles */}
                <p className="text-[#2563EB] font-bold text-lg">State Registered Nurse (SRN)</p>
                <p className="text-slate-500 font-medium text-base mt-1">Professional Home Nursing Care</p>

                {/* Stats Grid - Vertical values in horizontal block */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  {/* Experience */}
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300">
                    <div className="p-2 bg-[#E8F0FE] text-[#1A73E8] rounded-xl mb-2.5">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Experience</span>
                    <span className="text-lg font-extrabold text-slate-800">
                      {nurse.yearExperience ? `${nurse.yearExperience}` : "-"}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-semibold">In Practice</span>
                  </div>

                  {/* Gender */}
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300">
                    <div className="p-2 bg-[#E8F0FE] text-[#1A73E8] rounded-xl mb-2.5">
                      <Users className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Gender</span>
                    <span className="text-lg font-extrabold text-slate-800">
                      {nurse.gender}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-semibold">Professional</span>
                  </div>

                  {/* Location */}
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300">
                    <div className="p-2 bg-[#E8F0FE] text-[#1A73E8] rounded-xl mb-2.5">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Location</span>
                    <span className="text-xs font-extrabold text-slate-800 truncate w-full px-1 mb-0.5">
                      {nurse.city || "Malaysia"}
                    </span>
                    <span className="text-[10px] text-[#1A73E8] font-bold">
                      {nurse.state || "State"}
                    </span>
                  </div>

                  {/* Nationality */}
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300">
                    <div className="p-2 bg-[#E8F0FE] text-[#1A73E8] rounded-xl mb-2.5">
                      <Heart className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Nationality</span>
                    <span className="text-lg font-extrabold text-slate-800">
                      {nurse.nationality || "Malaysia"}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 font-semibold">Registered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography & Tags Segment */}
            <div className="mt-8 border-t border-slate-100 pt-8">
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {nurse.experienceText || "Compassionate and dedicated Registered Nurse providing professional home nursing care with a focus on patient safety, comfort, and quality of life."}
              </p>

              {/* Checklist Badges - Green pill-badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="inline-flex items-center gap-1.5 bg-[#E6F4EA]/60 text-[#137333] border border-[#A3E2AB]/30 text-xs font-semibold px-4 py-2.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:bg-[#E6F4EA] transition-all">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Professional & Reliable
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E6F4EA]/60 text-[#137333] border border-[#A3E2AB]/30 text-xs font-semibold px-4 py-2.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:bg-[#E6F4EA] transition-all">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Patient-Centered Care
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E6F4EA]/60 text-[#137333] border border-[#A3E2AB]/30 text-xs font-semibold px-4 py-2.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:bg-[#E6F4EA] transition-all">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Home Visit Service
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E6F4EA]/60 text-[#137333] border border-[#A3E2AB]/30 text-xs font-semibold px-4 py-2.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:bg-[#E6F4EA] transition-all">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Trusted by Families
                </span>
              </div>
            </div>

            {/* Courses Attended Block (Only rendered if available from backend) */}
            {nurse.coursesAttended && (
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl mt-6 shadow-sm">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2.5">Attended Courses & Training</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{nurse.coursesAttended}</p>
              </div>
            )}

            {/* Personal & Professional Credentials Layout */}
            <div>
              <div className="text-center mb-10 mt-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B2545] tracking-tight">Personal & Professional Credentials</h3>
                <div className="w-16 h-1 bg-[#2563EB] mx-auto rounded-full mt-3.5" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Contact Details Card */}
                <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">Contact Details</h4>
                    
                    <div className="space-y-6">
                      {/* Phone Number */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Phone Number</span>
                          <span className="text-sm font-bold text-[#1E293B]">
                            {nurse.phoneNumber || "N/A"}
                          </span>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Full Address</span>
                          <span className="text-sm font-bold text-[#1E293B] leading-relaxed">
                            {[nurse.address, nurse.postcode, nurse.city, nurse.state].filter(Boolean).join(", ") || "No Address Provided"}
                          </span>
                        </div>
                      </div>

                      {/* Nationality & Gender */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Nationality & Gender</span>
                          <span className="text-sm font-bold text-[#1E293B]">
                            {nurse.nationality || "Malaysia"} • {nurse.gender}
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
                      {/* APC Certificate */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Annual Practising Certificate (APC)</span>
                          <span className="text-sm font-bold text-[#1E293B]">
                            No. {nurse.apcNumber || "N/A"}
                          </span>
                          {nurse.apcExpired && (
                            <span className="text-xs text-slate-400 mt-1 block">
                              Expires: {new Date(nurse.apcExpired).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Education & Qualification */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Education & Qualification</span>
                          <span className="text-sm font-bold text-[#1E293B] leading-relaxed">
                            {nurse.firstGraduateFrom ? `Graduated from ${nurse.firstGraduateFrom}` : "N/A"}
                            {nurse.firstGraduateYear && ` (${nurse.firstGraduateYear})`}
                          </span>
                          {nurse.nurseCertificateId && (
                            <span className="text-xs text-slate-400 mt-1 block font-medium">
                              Certificate ID: {nurse.nurseCertificateId}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Identification */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#F1F5F9] text-[#1A73E8] rounded-xl flex-shrink-0">
                          <Fingerprint className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Identification (NRIC / Passport)</span>
                          <span className="text-sm font-bold text-[#1E293B]">
                            {nurse.nric ? `NRIC: ${nurse.nric}` : ""}
                            {nurse.passportNumber ? `Passport: ${nurse.passportNumber}` : ""}
                            {!nurse.nric && !nurse.passportNumber && "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practice Location Card with Real Google Maps Integration */}
              <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.015)] mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="flex-1 w-full text-left">
                  <div className="p-3 bg-[#E8F0FE] text-[#1A73E8] rounded-2xl w-fit mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Practice Location</h4>
                  <p className="text-slate-500 font-medium text-base">
                    City: <span className="font-bold text-slate-800">{nurse.city || "N/A"}</span>, State: <span className="font-bold text-slate-800">{nurse.state || "N/A"}</span>
                  </p>
                </div>

                {/* Real Live Google Maps Integration */}
                <div className="w-full sm:w-[320px] h-[180px] rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex-shrink-0 relative">
                  <iframe
                    title="Nurse Practice Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      [nurse.address, nurse.postcode, nurse.city, nurse.state].filter(Boolean).join(", ") || "Johor, Malaysia"
                    )}&z=14&output=embed`}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Span 1): Sticky Booking Card panel */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300">
              <h4 className="text-xl font-bold text-[#0B2545] tracking-tight mb-1">Schedule Your Service Today</h4>
              <p className="text-slate-400 text-sm font-medium mb-6">Quality care at the comfort of your home</p>

              {/* Ultra-premium Blue App Button (Two lines style) */}
              <button
                onClick={handleBooking}
                className="w-full bg-[#1A73E8] hover:bg-[#1557B0] active:scale-[0.98] text-white py-4 px-6 rounded-2xl font-bold transition-all shadow-[0_4px_16px_rgba(26,115,232,0.2)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.3)] flex flex-col items-center justify-center gap-0.5 text-center cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-blue-100">
                  <Calendar className="w-4.5 h-4.5 text-white" />
                  Book {lastName} at
                </div>
                <div className="font-extrabold text-base tracking-wide">
                  MediCare App
                </div>
              </button>

              {/* Status details stack */}
              <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Registration Status</span>
                  <p className="text-[#137333] font-bold flex items-center gap-1.5 text-xs bg-[#E6F4EA] px-3.5 py-2 rounded-xl w-fit border border-[#A3E2AB]/20">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Registered Professional
                  </p>
                </div>
                
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1.5">Experience</span>
                  <p className="font-extrabold text-slate-800 text-base">
                    {nurse.yearExperience ? `${nurse.yearExperience} Years Experience` : "Registered Professional"}
                  </p>
                </div>
              </div>

              {/* Small Light Blue Bottom Box */}
              <div className="mt-8 p-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl space-y-3 shadow-inner">
                <p className="text-xs text-slate-600 font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] flex-shrink-0" />
                  Registered & Verified Nurse
                </p>
                <p className="text-xs text-slate-600 font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] flex-shrink-0" />
                  Backed by MediCare Platform
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mt-24">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-[#0B2545] tracking-tight mb-12">
            Why Choose Home Nursing Care?
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Comfort of Home */}
            <div className="bg-white p-6 rounded-2xl border border-slate-50 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:scale-[1.02] transition-transform duration-300">
              <div className="p-4 bg-[#E8F0FE] text-[#1A73E8] rounded-full mb-4">
                <Home className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-slate-800 mb-2 text-base">Comfort of Home</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Receive quality care in the comfort and safety of your own home.
              </p>
            </div>

            {/* Personalized Care */}
            <div className="bg-white p-6 rounded-2xl border border-slate-50 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:scale-[1.02] transition-transform duration-300">
              <div className="p-4 bg-[#E8F0FE] text-[#1A73E8] rounded-full mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-slate-800 mb-2 text-base">Personalized Care</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Care plans tailored to your health needs and recovery goals.
              </p>
            </div>

            {/* Professional Support */}
            <div className="bg-white p-6 rounded-2xl border border-slate-50 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:scale-[1.02] transition-transform duration-300">
              <div className="p-4 bg-[#E8F0FE] text-[#1A73E8] rounded-full mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-slate-800 mb-2 text-base">Professional Support</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Delivered by registered nurses with clinical expertise.
              </p>
            </div>

            {/* Better Recovery */}
            <div className="bg-white p-6 rounded-2xl border border-slate-50 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:scale-[1.02] transition-transform duration-300">
              <div className="p-4 bg-[#E8F0FE] text-[#1A73E8] rounded-full mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-slate-800 mb-2 text-base">Better Recovery</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Promotes faster recovery and better quality of life with family support.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="mt-24 mb-12 bg-gradient-to-r from-[#0B2545] to-[#134074] rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Abstract background light circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left panel: icon and header */}
          <div className="flex-1 relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left w-full">
            <div className="p-4 bg-white/10 text-white rounded-full flex-shrink-0 animate-pulse">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight">Need Nursing Care at Home?</h4>
              <p className="text-blue-100 text-base mt-2 font-medium">We're here to help you and your loved ones.</p>
              
              <button 
                onClick={handleBooking}
                className="mt-6 bg-white hover:bg-slate-100 text-[#0B2545] font-extrabold text-sm px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Right panel: checklist */}
          <div className="w-full lg:w-auto relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
            {/* Trusted Professionals */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="p-2.5 bg-white/10 text-emerald-400 rounded-full flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h5 className="font-extrabold text-white text-base">Trusted Professionals</h5>
                <span className="text-xs text-blue-200 block font-medium mt-0.5">Verified & registered nurses</span>
              </div>
            </div>
            
            {/* Flexible Scheduling */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="p-2.5 bg-white/10 text-emerald-400 rounded-full flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h5 className="font-extrabold text-white text-base">Flexible Scheduling</h5>
                <span className="text-xs text-blue-200 block font-medium mt-0.5">At your convenience</span>
              </div>
            </div>

            {/* Quality Care */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="p-2.5 bg-white/10 text-emerald-400 rounded-full flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h5 className="font-extrabold text-white text-base">Quality Care</h5>
                <span className="text-xs text-blue-200 block font-medium mt-0.5">Compassionate & reliable</span>
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

