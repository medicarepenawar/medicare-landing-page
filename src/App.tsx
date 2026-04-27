import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import VendorRegisterPage from "./pages/vendor/VendorRegisterPage";
import NurseRegisterPage from "./pages/nurse/NurseRegisterPage";
import LabAssistantRegisterPage from "./pages/labassistant/LabAssistantRegisterPage";
import TherapistRegisterPage from "./pages/therapist/TherapistRegisterPage";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import DoctorRegisterPage from "./pages/doctor/DoctorRegisterPage";
import { AboutUsPage } from "./components/home/AboutUs";
import { ContactUsPage } from "./components/home/ContactUs";
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
} from "./constants/constant";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";

import DoctorTermsAndConditions from "./components/terms/DoctorTermsAndConditions";
import NurseTermsAndConditions from "./components/terms/NurseTermsAndConditions";
import VendorTermsAndConditions from "./components/terms/VendorTermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ToastProvider } from "./components/common/ToastContainer";
import MarketplaceLanding from "./pages/marketplace_pharmacy/MarketplaceLanding";
import ProductDetail from "./pages/marketplace_pharmacy/ProductDetail";
import CartPage from "./pages/marketplace_pharmacy/CartPage";
import CheckoutPage from "./pages/marketplace_pharmacy/CheckoutPage";

function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path={DEV_URL} element={<Home />} />
        <Route path={HOME_PAGE_URL} element={<UnderConstruction />} />
        <Route path={MARKETPLACE_URL} element={<MarketplaceLanding />} />
        <Route path={MARKETPLACE_PRODUCT_URL} element={<ProductDetail />} />
        <Route path={MARKETPLACE_CART_URL} element={<CartPage />} />
        <Route path={MARKETPLACE_CHECKOUT_URL} element={<CheckoutPage />} />
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
        <Route path="/registration-success" element={<RegistrationSuccess />} />
      </Routes>
    </ToastProvider>
  );
}

export default App;
