import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, LogIn, ShieldCheck, Smartphone, X } from "lucide-react";
import doctorIcon from "../../../assets/img/icon-doctor.svg";
import nurseIcon from "../../../assets/img/icon-nurse.svg";
import hospitalIcon from "../../../assets/img/icon-hospital.svg";
import labAssistantIcon from "../../../assets/img/icon-lab-assistant.png";
import {
  DOCTOR_REGISTER_URL,
  VENDOR_REGISTER_URL,
  NURSE_REGISTER_URL,
  LAB_ASSISTANT_REGISTER_URL,
  THERAPIST_REGISTER_URL,
  DOCTOR_REGISTRATION_SUCCESS_URL,
  VENDOR_REGISTRATION_SUCCESS_URL,
} from "../../../constants/constant";
import { usePageTitle } from "../../../hooks/usePageTitle";

type RoleId = "doctor" | "nurse" | "vendor" | "labassistant" | "therapist";

interface RoleOption {
  id: RoleId;
  label: string;
  helper: string;
  icon: string;
  iconAlt: string;
  imageClassName: string;
  iconWrapClassName: string;
  selectedClassName: string;
}

const roleOptions: RoleOption[] = [
  {
    id: "doctor",
    label: "Doctor",
    helper: "Clinical care and medical consultation.",
    icon: doctorIcon,
    iconAlt: "Doctor",
    imageClassName: "p-5",
    iconWrapClassName: "bg-[#2563EB]/10",
    selectedClassName: "border-[#2563EB] bg-[#2563EB]/5 shadow-lg shadow-[#2563EB]/10",
  },
  {
    id: "nurse",
    label: "Nurse",
    helper: "Nursing care and patient support.",
    icon: nurseIcon,
    iconAlt: "Nurse",
    imageClassName: "p-5",
    iconWrapClassName: "bg-rose-50",
    selectedClassName: "border-rose-500 bg-rose-50/70 shadow-lg shadow-rose-100",
  },
  {
    id: "vendor",
    label: "Vendor",
    helper: "Healthcare vendor and facility services.",
    icon: hospitalIcon,
    iconAlt: "Vendor",
    imageClassName: "p-5",
    iconWrapClassName: "bg-indigo-50",
    selectedClassName: "border-indigo-500 bg-indigo-50/70 shadow-lg shadow-indigo-100",
  },
  {
    id: "labassistant",
    label: "Lab Assistant",
    helper: "Laboratory collection and test support.",
    icon: labAssistantIcon,
    iconAlt: "Lab Assistant",
    imageClassName: "p-4",
    iconWrapClassName: "bg-teal-50",
    selectedClassName: "border-teal-500 bg-teal-50/70 shadow-lg shadow-teal-100",
  },
  {
    id: "therapist",
    label: "Therapist",
    helper: "Therapy services and care follow-up.",
    icon: nurseIcon,
    iconAlt: "Therapist",
    imageClassName: "p-5",
    iconWrapClassName: "bg-amber-50",
    selectedClassName: "border-amber-500 bg-amber-50/70 shadow-lg shadow-amber-100",
  },
];

const registrationRoutes: Record<RoleId, string> = {
  doctor: DOCTOR_REGISTER_URL,
  nurse: NURSE_REGISTER_URL,
  vendor: VENDOR_REGISTER_URL,
  labassistant: LAB_ASSISTANT_REGISTER_URL,
  therapist: THERAPIST_REGISTER_URL,
};

const loginUrls: Partial<Record<RoleId, string>> = {
  doctor: DOCTOR_REGISTRATION_SUCCESS_URL,
  vendor: VENDOR_REGISTRATION_SUCCESS_URL,
};

const Register: React.FC = () => {
  usePageTitle("Select Role");
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<RoleId | null>(null);
  const [showMobileLoginModal, setShowMobileLoginModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const selectedRoleOption = selectedRole ? roleOptions.find((role) => role.id === selectedRole) : undefined;
  const loginHref = selectedRole ? (loginUrls[selectedRole] ?? "#") : "#";

  const handleContinue = () => {
    if (!selectedRole || isAnimating) {
      return;
    }

    setIsAnimating(true);

    // Tunggu animasi selesai lalu navigasi
    setTimeout(() => {
      navigate(registrationRoutes[selectedRole]);
    }, 500);
  };

  const handleLoginClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!selectedRole) {
      event.preventDefault();
      return;
    }

    if (!loginUrls[selectedRole]) {
      event.preventDefault();
      setShowMobileLoginModal(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* --- Ambient Background Blobs --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF4444]/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* --- Floating Decorative Elements --- */}
      <FloatingIcons />

      {/* --- Swipe Animation Overlay --- */}
      <div
        className={`fixed inset-0 z-[100] transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isAnimating ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Background layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#EF4444]" />
        
        {/* Decorative blobs inside overlay */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-[60px]" />

        {/* Content */}
        <div className="relative flex h-full items-center justify-center">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg className="h-6 w-6 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold tracking-wide">Setting up your registration</p>
            <p className="mt-1 text-sm text-white/60">Please wait a moment...</p>
          </div>
        </div>
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* --- Header --- */}
        <header className="flex items-center justify-between gap-4">
          <div className="text-3xl font-black tracking-tight sm:text-4xl">
            <span className="text-[#2563EB]">Medi</span>
            <span className="text-[#EF4444]">Care</span>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-md sm:flex">
            <ShieldCheck className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
            Secure registration
          </div>
        </header>

        {/* --- Main Content --- */}
        <section className="flex flex-1 flex-col justify-center py-8 lg:py-10">
          {/* Hero Text */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-block rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              Registration
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">role</span>
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-500 sm:text-lg">
              Select the role that matches your work profile to continue.
            </p>
          </div>

          {/* Role Cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {roleOptions.map((role) => {
              const isSelected = selectedRole === role.id;
              const isInactive = selectedRole !== null && !isSelected;

              return (
                <button
                  key={role.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedRole(role.id)}
                  className={`group relative flex min-h-[238px] flex-col rounded-2xl border bg-white/70 p-5 text-center backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2563EB]/20 ${
                    isSelected
                      ? `${role.selectedClassName} -translate-y-1.5 border-2`
                      : "border-white/60 hover:-translate-y-1 hover:border-gray-200 hover:bg-white/90 hover:shadow-xl"
                  } ${isInactive ? "opacity-50 hover:opacity-75" : ""}`}
                >
                  {/* Radio indicator */}
                  <span
                    className={`absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-[#2563EB] bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30"
                        : "border-gray-200 bg-white text-transparent group-hover:border-gray-300"
                    }`}
                  >
                    {isSelected ? <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> : null}
                  </span>

                  <div className="flex flex-1 flex-col items-center justify-between pt-5">
                    <div
                      className={`flex h-28 w-28 items-center justify-center rounded-full transition-all duration-300 ${
                        isSelected
                          ? role.iconWrapClassName + " shadow-lg"
                          : isInactive
                          ? "bg-gray-100"
                          : "bg-gray-50 group-hover:bg-gray-100"
                      }`}
                    >
                      <img
                        src={role.icon}
                        alt={role.iconAlt}
                        className={`h-full w-full object-contain transition-all duration-300 ${role.imageClassName} ${
                          isInactive ? "grayscale opacity-30" : "opacity-90 group-hover:scale-105"
                        }`}
                      />
                    </div>

                    <div className="mt-6">
                      <h2 className={`text-xl font-bold transition-colors duration-300 ${isInactive ? "text-gray-400" : "text-gray-900"}`}>
                        {role.label}
                      </h2>
                      <p className={`mt-2 min-h-[40px] text-sm leading-5 transition-colors duration-300 ${isInactive ? "text-gray-300" : "text-gray-500"}`}>
                        {role.helper}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-8 rounded-2xl border border-white/60 bg-white/70 p-5 backdrop-blur-md shadow-lg shadow-gray-200/50">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">Selected role</p>
                <p className="text-base font-bold text-gray-900">{selectedRoleOption?.label ?? "No role selected"}</p>
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                <a
                  href={loginHref}
                  onClick={handleLoginClick}
                  aria-disabled={!selectedRole}
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition-all duration-300 ${
                    selectedRole
                      ? "border-gray-200 bg-white/70 text-gray-700 hover:border-[#2563EB]/30 hover:text-[#2563EB] hover:shadow-md"
                      : "pointer-events-none border-gray-200 bg-gray-50/50 text-gray-300"
                  }`}
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  Login here
                </a>

                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!selectedRole}
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-white transition-all duration-300 ${
                    selectedRole
                      ? "bg-gray-900 shadow-lg shadow-gray-900/20 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/30 hover:-translate-y-0.5"
                      : "cursor-not-allowed bg-gray-300 text-gray-100"
                  }`}
                >
                  Continue
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Login Modal */}
      {showMobileLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/60 bg-white/90 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] shadow-sm">
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Use the mobile app</h2>
                  <p className="text-sm text-gray-500">{selectedRoleOption?.label ?? "This role"} login</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowMobileLoginModal(false)}
                aria-label="Close"
                className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-5 leading-7 text-gray-600">Login for this role is available through the Medicare One mobile app.</p>

            <button
              type="button"
              onClick={() => setShowMobileLoginModal(false)}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-gray-900 px-5 text-sm font-bold text-white transition hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#2563EB]/20"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// --- Floating Medical Icons ---
const FloatingIcons: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Shield icon - top right */}
    <div className="absolute top-20 right-20 opacity-15 animate-float" style={{ animationDuration: "7s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#2563EB] w-20 h-20">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    </div>

    {/* Hospital icon - bottom left */}
    <div className="absolute bottom-32 left-16 opacity-15 animate-float" style={{ animationDuration: "8s", animationDelay: "1s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#EF4444] w-16 h-16">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    </div>

    {/* Plus circle - middle right */}
    <div className="absolute top-1/2 right-10 opacity-10 animate-float" style={{ animationDuration: "9s", animationDelay: "2s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#2563EB] w-14 h-14">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    {/* Heart icon - top left */}
    <div className="absolute top-40 left-10 opacity-10 animate-float" style={{ animationDuration: "6.5s", animationDelay: "0.5s" }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#EF4444] w-12 h-12">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  </div>
);

export default Register;
