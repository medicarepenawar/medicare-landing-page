import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronRight,
  Phone,
  Calendar,
  MapPin,
  Award,
  Clock,
  Stethoscope,
} from "lucide-react";
import { Navbar } from "../../modules/main/components/layout/Navbar";
import { Footer } from "../../modules/main/components/layout/Footer";
import { getClinicBySlug } from "../../services/clinicService";
import type { Clinic } from "../../types/clinic";
import Toast from "../../components/common/Toast";



export default function ClinicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [clinic, setClinic] = useState<Clinic | null>(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getClinicBySlug(slug)
      .then(setClinic)
      .catch((err) => {
        console.error("Failed to load clinic profile:", err);
        setClinic(null);
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
            <p className="text-gray-500 font-medium animate-pulse">Loading clinic profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!clinic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-6 py-16 pt-28 md:pt-36 text-center">
          <div className="text-gray-600">Clinic not found</div>
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
    if (clinic.phoneNumber) {
      window.location.href = `tel:${clinic.phoneNumber}`;
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
            Find a Clinic
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">{clinic.name}</span>
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
                    src={clinic.images[0] || clinic.photo || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"}
                    alt={clinic.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                {clinic.verified && (
                  <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-sm mb-3">
                    REGISTERED & VERIFIED CLINIC
                  </div>
                )}

                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {clinic.name}
                </h1>
                <p className="text-[#0b5f8c] font-semibold text-lg mb-1 capitalize">
                  Medicare Affiliated {clinic.vendorType}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Verification</span>
                    </div>
                    <p className="font-bold text-gray-900 capitalize">
                      {clinic.verificationStatus}
                      <span className="text-sm text-gray-600 block">Status</span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Availability</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {clinic.isAvailable ? "Open Now" : "Inactive"}
                      <span className="text-sm text-gray-600 block">Vendor State</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            {clinic.description && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Clinic</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {clinic.description}
                </p>
              </div>
            )}

            {/* Personal & Business Registration Details Block */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Clinic Registration & Verification</h3>
              
              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                {/* Contact & Location Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Clinic Information</h4>
                  
                  {clinic.phoneNumber && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📱</div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Contact Number</p>
                        <p className="text-gray-800 font-medium">{clinic.phoneNumber}</p>
                      </div>
                    </div>
                  )}

                  {clinic.address?.street && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📍</div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Street Address</p>
                        <p className="text-gray-800 font-medium">
                          {clinic.address.street}
                          {clinic.address.city && `, ${clinic.address.city}`}
                          {clinic.address.state && `, ${clinic.address.state}`}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🌍</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Vendor Status</p>
                      <p className="text-gray-800 font-medium">
                        {clinic.isAvailable ? "Active Vendor" : "Inactive Vendor"} • {clinic.vendorType.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Regulatory Credentials */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">Regulatory Credentials</h4>

                  {clinic.registrationNumber && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">📝</div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Vendor License Number</p>
                        <p className="text-gray-800 font-medium">{clinic.registrationNumber}</p>
                      </div>
                    </div>
                  )}

                  {clinic.companyRegistrationNumber && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🏢</div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Company Registration Number</p>
                        <p className="text-gray-800 font-medium">{clinic.companyRegistrationNumber}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0">🛡️</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Medicare Verification Status</p>
                      <p className="text-gray-800 font-medium capitalize">
                        {clinic.verificationStatus}
                      </p>
                      {clinic.verificationNotes && (
                        <p className="text-xs text-gray-400 font-normal">Notes: {clinic.verificationNotes}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Location map/coordinates details */}
            {clinic.address?.latitude && clinic.address?.longitude && (
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Practice Location Map
                </h3>
                <div className="rounded-2xl border border-gray-200 p-2 bg-white shadow-sm mb-6 overflow-hidden">
                  <iframe
                    title="Clinic Location Map"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${clinic.address.latitude},${clinic.address.longitude}&z=15&output=embed`}
                    className="rounded-xl w-full h-[350px]"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Doctors on Duty Section */}
            <div className="mb-12 pb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                    Doctors on Duty Today
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Qualified specialists currently available or scheduled at this clinic.
                  </p>
                </div>

              </div>

              {(!clinic.doctors || clinic.doctors.length === 0) ? (
                <div className="text-center py-8 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <Stethoscope className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 font-medium">No doctors currently registered at this clinic.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {clinic.doctors.map((doctor) => {
                    const isDuty = doctor.pivot?.on_duty === 1;
                    const shiftText = doctor.pivot?.shift ? `Shift ${doctor.pivot.shift}` : "Regular Shift";
                    return (
                      <div
                        key={doctor.id}
                        onClick={() => navigate(`/doctor/${doctor.slug || doctor.id}`)}
                        className="group relative bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 transition-all duration-300 hover:shadow-md flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          {/* Top profile part */}
                          <div className="flex gap-4 items-start mb-4">
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                              <img
                                src={doctor.photo || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"}
                                alt={doctor.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-bold text-gray-900 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">
                                  {doctor.name}
                                </h4>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                    isDuty
                                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                      : "bg-blue-50 text-blue-700 border border-blue-100"
                                  }`}
                                >
                                  {isDuty ? "On Duty" : "Off Duty"}
                                </span>
                              </div>
                               {doctor.specialist && (
                                <p className="text-xs font-semibold text-blue-600 mt-1">
                                  {doctor.specialist}
                                </p>
                              )}
                              {doctor.experience && (
                                <p className="text-[11px] text-gray-400 mt-0.5">
                                  {doctor.experience} Years Experience
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Middle detail fields */}
                          {doctor.pivot?.shift && (
                            <div className="space-y-2.5 py-3 border-t border-b border-gray-100 mb-4">
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                <Clock className="w-3.5 h-3.5 text-gray-400" />
                                <span className="font-medium">{shiftText}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom action button */}
                        <div
                          className="w-full py-2 bg-gray-50 text-gray-700 text-xs font-bold rounded-lg border border-gray-200 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all duration-300 flex items-center justify-center gap-1.5"
                        >
                          <Stethoscope className="w-3.5 h-3.5" />
                          View Profile & Consult
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-20 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-6">
                Visit {clinic.name}
              </h4>

              <p className="text-gray-600 text-sm mb-6">
                Quality healthcare for you and your family
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
                Call Clinic
              </button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Clinic Verification State</p>
                    <p className="font-semibold text-green-600 flex items-center gap-1.5 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                      {clinic.verified ? "Verified Practice" : "Registered Practice"}
                    </p>
                  </div>
                  {clinic.registrationNumber && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Registration Status</p>
                      <p className="font-semibold text-gray-900">
                        License: {clinic.registrationNumber}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#f8fbff] rounded-lg border border-[#2563EB]/20">
                <p className="text-xs text-gray-600">
                  <span className="font-bold text-[#2563EB]">✓</span> Registered & Licensed Clinic
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
