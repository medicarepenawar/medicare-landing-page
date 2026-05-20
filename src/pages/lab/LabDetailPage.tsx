import { useState } from "react";
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
import { Header } from "../../modules/landing-page/components/home/Header";
import { Footer } from "../../modules/landing-page/components/home/Footer";
import { getLabBySlug } from "../../modules/constants/labs";
import Toast from "../../components/common/Toast";

export default function LabDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const lab = getLabBySlug(slug || "");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  if (!lab) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="text-gray-600">Lab not found</div>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </main>
        <Footer companyProfile={undefined} servicesData={undefined} />
      </div>
    );
  }

  const handleBookAppointment = () => {
    setToastMessage("Appointment booking coming soon!");
    setShowToast(true);
  };

  const handleCall = () => {
    setToastMessage("Call feature coming soon!");
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8 pt-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 pt-4">
          <Link to="/" className="hover:text-[#2563EB]">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/main" className="hover:text-[#2563EB]">
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
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-sm mb-3">
                  ACCREDITED LABORATORY
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {lab.name}
                </h1>
                <p className="text-[#0b5f8c] font-semibold text-lg mb-1">
                  {lab.title}
                </p>
                <p className="text-gray-600 mb-6">{lab.specialization}</p>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${i < Math.floor(lab.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">
                    {lab.rating}/5
                  </span>
                  <span className="text-gray-500">
                    ({lab.totalReviews} reviews)
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">Experience</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {lab.experience.years}
                      <span className="text-sm text-gray-600 block">
                        {lab.experience.field}
                      </span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">
                        Certifications
                      </span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {lab.certifications.primary}
                      <span className="text-sm text-gray-600 block">
                        {lab.certifications.secondary}
                      </span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">
                        Turnaround Time
                      </span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {lab.turnaroundTime.standard}
                      <span className="text-sm text-gray-600 block">
                        {lab.turnaroundTime.urgent}
                      </span>
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FlaskConical className="w-5 h-5 text-[#2563EB]" />
                      <span className="text-sm text-gray-600">
                        Tests Available
                      </span>
                    </div>
                    <p className="font-bold text-gray-900">
                      {lab.testsOffered.length}+ Tests
                      <span className="text-sm text-gray-600 block">
                        Comprehensive Panels
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {lab.bio}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {lab.description}
              </p>
            </div>

            {/* Tests Offered */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tests & Services Offered
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {lab.testsOffered.map((test) => (
                  <div
                    key={test.id}
                    className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-2">{test.icon}</div>
                    <p className="font-medium text-gray-700 text-sm">
                      {test.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours & Coverage */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-200">
              {/* Operating Hours */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#2563EB]" />
                  Operating Hours
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2563EB] font-bold">✓</span>
                    {lab.operatingHours.type}
                  </li>
                  {lab.operatingHours.walkIn && (
                    <li className="flex items-center gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      Walk-in Available
                    </li>
                  )}
                  {lab.operatingHours.appointment && (
                    <li className="flex items-center gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      Appointment Booking
                    </li>
                  )}
                  {lab.operatingHours.homeCollection && (
                    <li className="flex items-center gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      Home Sample Collection
                    </li>
                  )}
                </ul>
              </div>

              {/* Service Coverage */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                  Service Coverage
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {lab.serviceCoverage.areas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#2563EB] font-bold">✓</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-[#f8fbff] p-6 rounded-lg border border-[#2563EB]/20 mb-12">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Pricing
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-[#0b5f8c]">
                  {lab.pricing.startingFrom}
                </span>
                <span className="text-gray-600">starting from</span>
              </div>
              <p className="text-sm text-gray-500">{lab.pricing.note}</p>
            </div>

            {/* Why Choose This Lab */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose {lab.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {lab.whyChoose.map((reason) => (
                  <div key={reason.id} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#2563EB]/10">
                        <span className="text-[#2563EB] font-bold">✓</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                    <p className="text-xs text-gray-500 mb-1">
                      Turnaround Time
                    </p>
                    <p className="font-semibold text-gray-900">
                      {lab.turnaroundTime.standard}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Experience</p>
                    <p className="font-semibold text-gray-900">
                      {lab.experience.years} {lab.experience.field}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Rating</p>
                    <p className="font-semibold text-gray-900">
                      {lab.rating}/5 from {lab.totalReviews} reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#f8fbff] rounded-lg border border-[#2563EB]/20">
                <p className="text-xs text-gray-600">
                  <span className="font-bold text-[#2563EB]">✓</span>{" "}
                  {lab.certifications.primary}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  <span className="font-bold text-[#2563EB]">✓</span> Backed by
                  Medicare Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer companyProfile={undefined} servicesData={undefined} />

      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
