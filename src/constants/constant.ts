// API Base URL
export const BASE_API_URL = "https://api.medicare.com.my/api";

// Internal Routes
export const HOME_PAGE_URL = "/";
export const REGISTER_URL = "/register";
export const REGISTRATION_SUCCESS_URL = "/registration-success";
export const ABOUT_US_URL = "/about";
export const CONTACT_US_URL = "/contact";
export const MARKETPLACE_URL = "/pharmacy/mukminpharmacy";
export const MARKETPLACE_PRODUCT_URL = "/pharmacy/mukminpharmacy/product/:id";
export const MARKETPLACE_CART_URL = "/pharmacy/mukminpharmacy/cart";
export const MARKETPLACE_CHECKOUT_URL = "/pharmacy/mukminpharmacy/checkout";
export const MARKETPLACE_PRESCRIPTION_URL = "/pharmacy/mukminpharmacy/upload-prescription";
export const DOCTOR_SPECIALIST_URL = "/doctor-specialist/:slug";
export const NURSE_DETAIL_URL = "/nurse/:slug";
export const LAB_DETAIL_URL = "/lab/:slug";
export const CLINIC_DETAIL_URL = "/clinic/:slug";
export const THERAPIST_DETAIL_URL = "/therapist/:slug";
export const AMBULANCE_DETAIL_URL = "/ambulance/:slug";

export const NURSES_LIST_URL = "/nurses";
export const THERAPISTS_LIST_URL = "/therapists";
export const THERAPIST_LIST_URL_ALT = "/therapist";
export const DOCTORS_LIST_URL = "/specialist-doctors";
export const DOCTOR_LIST_URL_ALT = "/specialist-doctor";
export const CLINICS_LIST_URL = "/clinics";
export const LABS_LIST_URL = "/labs";
export const PHARMACIES_LIST_URL = "/pharmacies";
export const AMBULANCES_LIST_URL = "/ambulances";

export const DEV_URL = "hidden-dev";

// Register Routesa
export const DOCTOR_REGISTER_URL = "/register/doctor";
export const VENDOR_REGISTER_URL = "/register/vendor";
export const NURSE_REGISTER_URL = "/register/nurse";
export const LAB_ASSISTANT_REGISTER_URL = "/register/lab-assistant";
export const THERAPIST_REGISTER_URL = "/register/therapist";

// Terms and Conditions Routes
export const TERMS_AND_CONDITIONS_URL = "/terms";
export const DOCTOR_TERMS_AND_CONDITIONS_URL = "/terms/doctor";
export const VENDOR_TERMS_AND_CONDITIONS_URL = "/terms/vendor";
export const NURSE_TERMS_AND_CONDITIONS_URL = "/terms/nurse";
export const LAB_ASSISTANT_TERMS_AND_CONDITIONS_URL = "/terms/nurse";
export const THERAPIST_TERMS_AND_CONDITIONS_URL = "/terms/nurse";
export const PRIVACY_POLICY_URL = "/policy";

// Clinic Landing Page
export const CLINIC_LANDING_URL = "/clinic/:slug";

// External Login URLs (after successful registration)
export const DOCTOR_REGISTRATION_SUCCESS_URL = "https://dms.medicarebackend.com/login";
export const VENDOR_REGISTRATION_SUCCESS_URL = "https://vendor.medicarebackend.com/vendor/login";
export const NURSE_REGISTRATION_SUCCESS_URL = ""; // Nurse login is via mobile app only
export const LAB_ASSISTANT_REGISTRATION_SUCCESS_URL = ""; // Lab Assistant login is via mobile app only
export const THERAPIST_REGISTRATION_SUCCESS_URL = ""; // Therapist login is via mobile app only
