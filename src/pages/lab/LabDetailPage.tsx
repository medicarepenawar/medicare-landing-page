import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronRight,
  Phone,
  Calendar,
  MapPin,
  Award,
  Clock,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "../../modules/main/components/layout/Navbar";
import { Footer } from "../../modules/main/components/layout/Footer";
import { getLabBySlug } from "../../services/labService";
import type { Lab } from "../../types/lab";
import Toast from "../../components/common/Toast";

export default function LabDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lab, setLab] = useState<Lab | null>(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getLabBySlug(slug)
      .then(setLab)
      .catch((err) => {
        console.error("Failed to load laboratory profile:", err);
        setLab(null);
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
            <p className="text-gray-500 font-medium animate-pulse">Loading laboratory profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!lab) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-6 py-16 pt-28 md:pt-36 text-center">
          <div className="text-gray-600">Lab not found</div>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBookAppointment = () => {
    setToastMessage("Appointment booking coming soon!");
    setShowToast(true);
  };

  const handleCall = () => {
    if (lab.phoneNumber) {
      window.location.href = `tel:${lab.phoneNumber}`;
    } else {
      setToastMessage("Contact number not listed.");
      setShowToast(true);
    }
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
            Find a Lab
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">{lab.name}</span>
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
                    src={lab.photo[0] || "https://images.unsplash.com/photo-1579165466521-35b38d326e0e?auto=format&fit=crop&q=80&w=600"}
                    alt={lab.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                {lab.verified && (
                  <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-sm mb-3">
                    ACCREDITED & VERIFIED LABORATORY
                  </div>
                )}

                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {lab.name}
                </h1>
                <p className="text-[#0b5f8c] font-semibold text-lg mb-1 capitalize">
                  Medicare Affiliated {lab.vendorType}
                </p>
                <p className="text-gray-600 mb-6">{lab.description || "In-house Molecular Diagnostics & Lab Services"}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Verification</span>
                    </div>
                    <p className="font-bold text-gray-900 capitalize">
                      {lab.verificationStatus}
                      <span className="text-sm text-gray-600 block">Status</span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Availability</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {lab.isAvailable ? "Open Now" : "Inactive"}
                      <span className="text-sm text-gray-600 block">Vendor State</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            {lab.description && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Laboratory</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {lab.description}
                </p>
              </div>
            )}

            {/* Personal & Business Registration Details Block */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Registration & Verification</h3>
              
              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                {/* Contact & Location Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Laboratory Information</h4>
                  
                  {lab.phoneNumber && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📱</div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Contact Number</p>
                        <p className="text-gray-800 font-medium">{lab.phoneNumber}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📍</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Street Address</p>
                      <p className="text-gray-800 font-medium">
                        {lab.address?.street || "No Address Listed"}
                        {lab.address?.city && `, ${lab.address.city}`}
                        {lab.address?.state && `, ${lab.address.state}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🌍</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Vendor Status</p>
                      <p className="text-gray-800 font-medium">
                        {lab.isAvailable ? "Active Vendor" : "Inactive Vendor"} • {lab.vendorType.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Regulatory Credentials */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Regulatory Credentials</h4>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📝</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Onsite Lab License Code</p>
                      <p className="text-gray-800 font-medium">
                        {lab.vendorOnsiteLab?.laboratoryLicense || "No License Code Registered"}
                      </p>
                    </div>
                  </div>

                  {lab.companyRegistrationNumber && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🏢</div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Company Registration Number</p>
                        <p className="text-gray-800 font-medium">{lab.companyRegistrationNumber}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🛡️</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Medicare Verification Status</p>
                      <p className="text-gray-800 font-medium capitalize">
                        {lab.verificationStatus}
                      </p>
                      {lab.verificationNotes && (
                        <p className="text-xs text-gray-400 font-normal">Notes: {lab.verificationNotes}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Location map/coordinates details */}
            {lab.address?.latitude && lab.address?.longitude && (
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Practice Location Map
                </h3>

                <div className="rounded-2xl border border-gray-200 p-2 bg-white shadow-sm mb-6 overflow-hidden">
                  <iframe
                    title="Lab Location Map"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${lab.address.latitude},${lab.address.longitude}&z=15&output=embed`}
                    className="rounded-xl w-full h-[350px]"
                  ></iframe>
                </div>

               
              </div>
            )}
          </div>

          {/* Right: Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-20 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-6">
                Book a Test Today
              </h4>

              <p className="text-gray-600 text-sm mb-6">
                Fast, accurate, and affordable diagnostic services
              </p>

              <button
                onClick={handleBookAppointment}
                className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-bold mb-4 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>

              <button
                onClick={handleCall}
                className="w-full border-2 border-[#2563EB] text-[#2563EB] py-3 rounded-lg font-bold hover:bg-[#2563EB]/5 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Lab
              </button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Laboratory Verification State</p>
                    <p className="font-semibold text-green-600 flex items-center gap-1.5 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                      {lab.verified ? "Accredited Laboratory" : "Registered Laboratory"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Onsite Lab ID</p>
                    <p className="font-semibold text-gray-900">
                      ID: {lab.vendorOnsiteLab?.id ? `Onsite Lab #${lab.vendorOnsiteLab.id}` : "Licensed Onsite"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#f8fbff] rounded-lg border border-[#2563EB]/20">
                <p className="text-xs text-gray-600">
                  <span className="font-bold text-[#2563EB]">✓</span> Registered & Licensed Laboratory
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

      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
