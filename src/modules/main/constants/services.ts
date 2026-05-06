import type { FeatureItem, ExperienceStep, StatItem } from "../types";

export const stats: StatItem[] = [
  {
    id: "stat-1",
    value: "500+",
    label: "Verified Professionals",
  },
  {
    id: "stat-2",
    value: "120+",
    label: "Partner Clinics",
  },
  {
    id: "stat-3",
    value: "24/7",
    label: "Emergency Response",
  },
  {
    id: "stat-4",
    value: "50K+",
    label: "Active Patients",
  },
];

export const features: FeatureItem[] = [
  {
    id: "feat-1",
    icon: "Clock",
    title: "Real-Time Availability",
    description:
      "See live availability of healthcare professionals and book appointments instantly without waiting.",
  },
  {
    id: "feat-2",
    icon: "ShieldCheck",
    title: "Verified Providers",
    description:
      "Every professional on our platform is thoroughly vetted, licensed, and continuously reviewed.",
  },
  {
    id: "feat-3",
    icon: "Siren",
    title: "Emergency Support",
    description:
      "Access 24/7 emergency services with one tap. Ambulance dispatch and hotline always ready.",
  },
  {
    id: "feat-4",
    icon: "Lock",
    title: "Secure Health Records",
    description:
      "Your medical records are encrypted and accessible only to you and your authorized providers.",
  },
  {
    id: "feat-5",
    icon: "MapPin",
    title: "Smart Location Matching",
    description:
      "Find the nearest healthcare professionals and facilities based on your current location.",
  },
  {
    id: "feat-6",
    icon: "CalendarCheck",
    title: "Appointment Scheduling",
    description:
      "Schedule, reschedule, or cancel appointments seamlessly with automated reminders.",
  },
];

export const experienceSteps: ExperienceStep[] = [
  {
    id: "exp-1",
    step: 1,
    title: "Search",
    description:
      "Find trusted healthcare professionals, clinics, and pharmacies near you with our intelligent search.",
    icon: "Search",
  },
  {
    id: "exp-2",
    step: 2,
    title: "Connect",
    description:
      "Review profiles, check availability, and connect directly with your chosen healthcare provider.",
    icon: "Users",
  },
  {
    id: "exp-3",
    step: 3,
    title: "Receive Care",
    description:
      "Get the care you need — in-clinic, at home, or through telehealth — all within one ecosystem.",
    icon: "Heart",
  },
];
