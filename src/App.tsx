import { Routes, Route } from "react-router-dom";
import Register from "./modules/landing-page/pages/Register";
import VendorRegisterPage from "./pages/vendor/VendorRegisterPage";
import NurseRegisterPage from "./pages/nurse/NurseRegisterPage";
import NurseDetailPage from "./pages/nurse/NurseDetailPage";
import TherapistDetailPage from "./pages/therapist/TherapistDetailPage";
import LabDetailPage from "./pages/lab/LabDetailPage";
import ClinicDetailPage from "./pages/clinic/ClinicDetailPage";
import AmbulanceDetailPage from "./pages/ambulance/AmbulanceDetailPage";
import LabAssistantRegisterPage from "./pages/labassistant/LabAssistantRegisterPage";
import TherapistRegisterPage from "./pages/therapist/TherapistRegisterPage";
import RegistrationSuccess from "./modules/landing-page/pages/RegistrationSuccess";
import DoctorRegisterPage from "./pages/doctor/DoctorRegisterPage";
import { AboutUsPage } from "./modules/landing-page/components/home/AboutUs";
import { ContactUsPage } from "./modules/landing-page/components/home/ContactUs";
import {
  REGISTER_URL,
  DOCTOR_REGISTER_URL,
  VENDOR_REGISTER_URL,
  NURSE_REGISTER_URL,
  LAB_ASSISTANT_REGISTER_URL,
  THERAPIST_REGISTER_URL,
  HOME_PAGE_URL,
  DOCTOR_TERMS_AND_CONDITIONS_URL,
  NURSE_TERMS_AND_CONDITIONS_URL,
  VENDOR_TERMS_AND_CONDITIONS_URL,
  ABOUT_US_URL,
  CONTACT_US_URL,
  PRIVACY_POLICY_URL,
  DEV_URL,
  MARKETPLACE_URL,
  MARKETPLACE_PRODUCT_URL,
  MARKETPLACE_CART_URL,
  MARKETPLACE_CHECKOUT_URL,
  MARKETPLACE_PRESCRIPTION_URL,
  DOCTOR_SPECIALIST_URL,
  NURSE_DETAIL_URL,
  LAB_DETAIL_URL,
  CLINIC_DETAIL_URL,
  CLINIC_LANDING_URL,
  NURSES_LIST_URL,
  DOCTORS_LIST_URL,
  DOCTOR_LIST_URL_ALT,
  CLINICS_LIST_URL,
  LABS_LIST_URL,
  PHARMACIES_LIST_URL,
  THERAPIST_DETAIL_URL,
  THERAPISTS_LIST_URL,
  THERAPIST_LIST_URL_ALT,
  AMBULANCE_DETAIL_URL,
  AMBULANCES_LIST_URL,
} from "./constants/constant";
import MainPage from "./modules/main/pages/MainPage";
import Home from "./modules/landing-page/pages/Home";
import UnderConstruction from "./modules/landing-page/pages/UnderConstruction";
import DirectoryCategoryPage from "./pages/directory/DirectoryCategoryPage";

import DoctorTermsAndConditions from "./modules/landing-page/components/terms/DoctorTermsAndConditions";
import NurseTermsAndConditions from "./modules/landing-page/components/terms/NurseTermsAndConditions";
import VendorTermsAndConditions from "./modules/landing-page/components/terms/VendorTermsAndConditions";
import PrivacyPolicy from "./modules/landing-page/pages/PrivacyPolicy";
import { ToastProvider } from "./components/common/ToastContainer";
import MarketplaceLanding from "./pages/marketplace_pharmacy/MarketplaceLanding";
import ProductDetail from "./pages/marketplace_pharmacy/ProductDetail";
import CartPage from "./pages/marketplace_pharmacy/CartPage";
import CheckoutPage from "./pages/marketplace_pharmacy/CheckoutPage";
import UploadPrescriptionPage from "./pages/marketplace_pharmacy/UploadPrescriptionPage";
import ClinicPage from "./pages/clinic/ClinicPage";
import DoctorSpecialist from "./pages/doctor_specialist/DoctorSpecialistPage";


function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path={DEV_URL} element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path={HOME_PAGE_URL} element={<UnderConstruction />} />
        <Route path={MARKETPLACE_URL} element={<MarketplaceLanding />} />
        <Route path="/marketplace/pharmacy/:pharmacySlug?" element={<MarketplaceLanding />} />
        <Route path={MARKETPLACE_PRODUCT_URL} element={<ProductDetail />} />
        <Route path={MARKETPLACE_CART_URL} element={<CartPage />} />
        <Route path={MARKETPLACE_CHECKOUT_URL} element={<CheckoutPage />} />
        <Route path={MARKETPLACE_PRESCRIPTION_URL} element={<UploadPrescriptionPage />} />
        <Route path={NURSE_DETAIL_URL} element={<NurseDetailPage />} />
        <Route path={LAB_DETAIL_URL} element={<LabDetailPage />} />
        <Route path={CLINIC_DETAIL_URL} element={<ClinicDetailPage />} />
        <Route path={THERAPIST_DETAIL_URL} element={<TherapistDetailPage />} />
        <Route path={AMBULANCE_DETAIL_URL} element={<AmbulanceDetailPage />} />
        <Route path={REGISTER_URL} element={<Register />} />
        <Route path={DOCTOR_REGISTER_URL} element={<DoctorRegisterPage />} />
        <Route path={VENDOR_REGISTER_URL} element={<VendorRegisterPage />} />
        <Route path={NURSE_REGISTER_URL} element={<NurseRegisterPage />} />
        <Route path={LAB_ASSISTANT_REGISTER_URL} element={<LabAssistantRegisterPage />} />
        <Route path={THERAPIST_REGISTER_URL} element={<TherapistRegisterPage />} />
        <Route path={ABOUT_US_URL} element={<AboutUsPage />} />
        <Route path={CONTACT_US_URL} element={<ContactUsPage />} />

        <Route path={DOCTOR_TERMS_AND_CONDITIONS_URL} element={<DoctorTermsAndConditions />} />
        <Route path={NURSE_TERMS_AND_CONDITIONS_URL} element={<NurseTermsAndConditions />} />
        <Route path={VENDOR_TERMS_AND_CONDITIONS_URL} element={<VendorTermsAndConditions />} />
        <Route path={PRIVACY_POLICY_URL} element={<PrivacyPolicy />} />
        <Route path={CLINIC_LANDING_URL} element={<ClinicPage />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />

        <Route path={DOCTOR_SPECIALIST_URL} element={<DoctorSpecialist />} />

        {/* Category List Routes */}
        <Route path={NURSES_LIST_URL} element={<DirectoryCategoryPage category="Nurse" />} />
        <Route path={DOCTORS_LIST_URL} element={<DirectoryCategoryPage category="Doctor" />} />
        <Route path={DOCTOR_LIST_URL_ALT} element={<DirectoryCategoryPage category="Doctor" />} />
        <Route path={CLINICS_LIST_URL} element={<DirectoryCategoryPage category="Clinic" />} />
        <Route path={LABS_LIST_URL} element={<DirectoryCategoryPage category="Lab" />} />
        <Route path={PHARMACIES_LIST_URL} element={<DirectoryCategoryPage category="Vendor" />} />
        <Route path={THERAPISTS_LIST_URL} element={<DirectoryCategoryPage category="Therapist" />} />
        <Route path={THERAPIST_LIST_URL_ALT} element={<DirectoryCategoryPage category="Therapist" />} />
        <Route path={AMBULANCES_LIST_URL} element={<DirectoryCategoryPage category="Ambulance" />} />
      </Routes>
    </ToastProvider>
  );
}

export default App;
