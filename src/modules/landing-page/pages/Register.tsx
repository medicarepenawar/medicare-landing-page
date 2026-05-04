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
    iconWrapClassName: "bg-blue-50",
    selectedClassName: "border-blue-500 bg-blue-50/70 shadow-blue-100",
  },
  {
    id: "nurse",
    label: "Nurse",
    helper: "Nursing care and patient support.",
    icon: nurseIcon,
    iconAlt: "Nurse",
    imageClassName: "p-5",
    iconWrapClassName: "bg-rose-50",
    selectedClassName: "border-rose-500 bg-rose-50/70 shadow-rose-100",
  },
  {
    id: "vendor",
    label: "Vendor",
    helper: "Healthcare vendor and facility services.",
    icon: hospitalIcon,
    iconAlt: "Vendor",
    imageClassName: "p-5",
    iconWrapClassName: "bg-indigo-50",
    selectedClassName: "border-indigo-500 bg-indigo-50/70 shadow-indigo-100",
  },
  {
    id: "labassistant",
    label: "Lab Assistant",
    helper: "Laboratory collection and test support.",
    icon: labAssistantIcon,
    iconAlt: "Lab Assistant",
    imageClassName: "p-4",
    iconWrapClassName: "bg-teal-50",
    selectedClassName: "border-teal-500 bg-teal-50/70 shadow-teal-100",
  },
  {
    id: "therapist",
    label: "Therapist",
    helper: "Therapy services and care follow-up.",
    icon: nurseIcon,
    iconAlt: "Therapist",
    imageClassName: "p-5",
    iconWrapClassName: "bg-amber-50",
    selectedClassName: "border-amber-500 bg-amber-50/70 shadow-amber-100",
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

  const selectedRoleOption = selectedRole ? roleOptions.find((role) => role.id === selectedRole) : undefined;
  const loginHref = selectedRole ? loginUrls[selectedRole] ?? "#" : "#";

  const handleContinue = () => {
    if (!selectedRole) {
      return;
    }

    navigate(registrationRoutes[selectedRole]);
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
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <div className="text-3xl font-black tracking-tight sm:text-4xl">
            <span className="text-blue-600">Medi</span>
            <span className="text-red-500">Care</span>
          </div>

          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm sm:flex">
            <ShieldCheck className="h-4 w-4 text-blue-600" aria-hidden="true" />
            Secure registration
          </div>
        </header>

        <section className="flex flex-1 flex-col justify-center py-8 lg:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Registration</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Choose your role</h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Select the role that matches your work profile to continue.
            </p>
          </div>

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
                  className={`group relative flex min-h-[238px] flex-col rounded-lg border bg-white p-5 text-center shadow-sm transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${
                    isSelected
                      ? `${role.selectedClassName} -translate-y-1 shadow-xl`
                      : "border-slate-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  } ${isInactive ? "opacity-60 hover:opacity-90" : ""}`}
                >
                  <span
                    className={`absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border transition ${
                      isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white text-transparent"
                    }`}
                  >
                    {isSelected ? <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> : null}
                  </span>

                  <div className="flex flex-1 flex-col items-center justify-between pt-5">
                    <div
                      className={`flex h-28 w-28 items-center justify-center rounded-full transition duration-200 ${
                        isInactive ? "bg-slate-100" : role.iconWrapClassName
                      }`}
                    >
                      <img
                        src={role.icon}
                        alt={role.iconAlt}
                        className={`h-full w-full object-contain transition duration-200 ${role.imageClassName} ${
                          isInactive ? "grayscale opacity-40" : "opacity-95 group-hover:scale-105"
                        }`}
                      />
                    </div>

                    <div className="mt-6">
                      <h2 className={`text-xl font-bold ${isInactive ? "text-slate-500" : "text-slate-950"}`}>{role.label}</h2>
                      <p className={`mt-2 min-h-[40px] text-sm leading-5 ${isInactive ? "text-slate-400" : "text-slate-500"}`}>
                        {role.helper}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    selectedRoleOption ? selectedRoleOption.iconWrapClassName : "bg-slate-100"
                  }`}
                >
                  {selectedRoleOption ? (
                    <img
                      src={selectedRoleOption.icon}
                      alt=""
                      className={`h-full w-full object-contain ${selectedRoleOption.imageClassName}`}
                    />
                  ) : (
                    <ShieldCheck className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Selected role</p>
                  <p className="text-base font-bold text-slate-950">{selectedRoleOption?.label ?? "No role selected"}</p>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                <a
                  href={loginHref}
                  onClick={handleLoginClick}
                  aria-disabled={!selectedRole}
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-semibold transition ${
                    selectedRole
                      ? "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                      : "pointer-events-none border-slate-200 bg-slate-50 text-slate-400"
                  }`}
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  Login here
                </a>

                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!selectedRole}
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-bold text-white transition ${
                    selectedRole
                      ? "bg-blue-600 shadow-lg shadow-blue-200 hover:bg-blue-700"
                      : "cursor-not-allowed bg-slate-300 text-slate-100"
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

      {showMobileLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-950">Use the mobile app</h2>
                  <p className="text-sm text-slate-500">{selectedRoleOption?.label ?? "This role"} login</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowMobileLoginModal(false)}
                aria-label="Close"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Login for this role is available through the Medicare One mobile app.
            </p>

            <button
              type="button"
              onClick={() => setShowMobileLoginModal(false)}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
