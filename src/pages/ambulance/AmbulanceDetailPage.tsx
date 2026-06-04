import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Phone,
  Clock,
  Shield,
  Check,
  Award,
  Activity,
  Truck,
  Users,
  ChevronRight,
  AlertCircle,
  Zap,
  X,
  Smartphone,
} from "lucide-react";
import { getAmbulanceBySlug } from "../../services/ambulanceService";
import type { Ambulance } from "../../types/ambulance";
import Toast from "../../components/common/Toast";

export default function AmbulanceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [ambulance, setAmbulance] = useState<Ambulance | null>(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showAppModal, setShowAppModal] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getAmbulanceBySlug(slug)
      .then(setAmbulance)
      .catch((err) => {
        console.error("Failed to load ambulance profile:", err);
        setAmbulance(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-600 font-semibold animate-pulse">Initializing Emergency Ambulance Portal...</p>
        </div>
      </div>
    );
  }

  if (!ambulance) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Provider Not Found</h2>
          <p className="text-slate-500 mb-6">The requested ambulance service provider could not be located in our registry.</p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-colors shadow-md"
          >
            Back to Medicare Directory
          </button>
        </div>
      </div>
    );
  }

  const formattedPhone = ambulance.phoneNumber || "+6012-345 6789";

  const handleBookAmbulance = () => {
    setShowAppModal(true);
  };

  const handleSupportContact = () => {
    setToastMessage("Direct support routing active. Connecting...");
    setShowToast(true);
    setTimeout(() => {
      window.location.href = `tel:${formattedPhone.replace(/[^0-9+]/g, "")}`;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none overflow-x-hidden relative">
      {/* 1. TOP BAR */}
      <div className="bg-[#0b1b3d] text-white text-xs md:text-[13px] py-2.5 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-white/10 z-30">
        <div className="flex items-center gap-1.5 font-medium text-slate-200">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>Medicare Ambulance Dispatch Network</span>
          <span className="text-white/30 px-1.5">|</span>
          <span className="text-red-400 font-bold uppercase tracking-wider text-[10px] bg-red-500/10 px-2 py-0.5 rounded-md">Order via Medicare App</span>
        </div>
        <div className="flex items-center gap-6 font-semibold">
          <button onClick={handleSupportContact} className="hover:text-red-400 transition-colors flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            Support Hotline: <span className="text-white">{formattedPhone}</span>
          </button>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="bg-white sticky top-0 shadow-[0_2px_15px_rgba(0,0,0,0.06)] z-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex justify-between items-center">
          {/* Logo with star of life */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-[#0b1b3d] p-2.5 rounded-xl shadow-md text-white group-hover:scale-105 transition-transform duration-300">
              <Activity className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-xl md:text-2xl font-black tracking-tight text-[#0b1b3d] block leading-none">
                MEDICARE <span className="text-red-600 font-extrabold text-[17px] md:text-xl">EMS</span>
              </span>
              <span className="text-[9px] text-[#0b1b3d]/60 font-bold uppercase tracking-wider block mt-0.5">
                CARE • COMPASSION • COMMITMENT
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-7 font-bold text-[#0b1b3d]/90 text-[14px]">
            <Link to="/" className="text-red-600 hover:text-red-700 relative after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-red-600">Home</Link>
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-red-600 transition-colors">About Us</a>
            <a href="#types" className="hover:text-red-600 transition-colors">Ambulance Types</a>
            <a href="#coverage" className="hover:text-red-600 transition-colors">Coverage</a>
            <a href="#testimonials" className="hover:text-red-600 transition-colors">Reviews</a>
          </nav>

          {/* Download App CTA button */}
          <button
            onClick={handleBookAmbulance}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs md:text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group transform active:scale-95"
          >
            <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            DOWNLOAD APP
          </button>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0f2347] via-[#0b1b3d] to-[#040c1e] text-white pt-16 pb-20 md:py-24 px-4 md:px-12 overflow-hidden border-b border-white/5">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        {/* Glow orb */}
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-red-600/10 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero text content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-red-600/25 border border-red-500/30 text-red-400 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-inner">
                <Truck className="w-3.5 h-3.5" />
                24/7 Digital Dispatch Network
              </span>
              <h1 className="text-4xl md:text-[54px] font-black tracking-tight leading-[1.08] text-white uppercase">
                {ambulance.name.replace(/sdn bhd/gi, "").trim()}{" "}
                <span className="text-red-500 block mt-1 drop-shadow-md">Ambulance Services</span>
              </h1>
            </div>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              {ambulance.description || "Fast response. Professional care. We are always ready when you need us for any critical emergency or medical transfer."}
            </p>

            {/* Icons grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                <div className="p-2 bg-red-600/20 text-red-400 rounded-xl"><Clock className="w-5 h-5" /></div>
                <div className="text-left"><p className="text-[12px] font-bold text-white leading-tight">24/7 App</p><p className="text-[10px] text-slate-400">Always Standby</p></div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                <div className="p-2 bg-red-600/20 text-red-400 rounded-xl"><Zap className="w-5 h-5" /></div>
                <div className="text-left"><p className="text-[12px] font-bold text-white leading-tight">Fast Match</p><p className="text-[10px] text-slate-400">Within Minutes</p></div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                <div className="p-2 bg-red-600/20 text-red-400 rounded-xl"><Users className="w-5 h-5" /></div>
                <div className="text-left"><p className="text-[12px] font-bold text-white leading-tight">GPS Track</p><p className="text-[10px] text-slate-400">Live Map</p></div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                <div className="p-2 bg-red-600/20 text-red-400 rounded-xl"><Shield className="w-5 h-5" /></div>
                <div className="text-left"><p className="text-[12px] font-bold text-white leading-tight">Verify Crew</p><p className="text-[10px] text-slate-400">MOH Licensed</p></div>
              </div>
            </div>

            {/* App download promo action buttons */}
            <div className="bg-gradient-to-r from-red-600/20 to-transparent border border-red-500/25 p-5 rounded-2xl max-w-xl text-left space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white uppercase flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-red-500" />
                  Instant Booking via Medicare App
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                  For automated live coordinates tracking, guaranteed paramedic response, and upfront pricing, booking must be requested through our mobile application.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleBookAmbulance}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-lg shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  ORDER AMBULANCE NOW
                </button>
                <button
                  onClick={handleBookAmbulance}
                  className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
                >
                  HOW TO BOOK
                </button>
              </div>
            </div>
          </div>

          {/* Hero ambulance image container */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Glowing ring backdrop */}
            <div className="absolute inset-0 bg-red-600/10 rounded-full blur-[100px] scale-75 animate-pulse"></div>
            <div className="relative z-10 w-full max-w-lg aspect-[4/3] rounded-3xl p-1 bg-gradient-to-tr from-white/10 to-white/30 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <img
                src={ambulance.photo[0] || "https://images.unsplash.com/photo-1587113997559-018787fdeab6?auto=format&fit=crop&q=80&w=800"}
                alt={ambulance.name}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section id="services" className="py-20 bg-white border-b border-slate-100 scroll-mt-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest block mb-2">Professional Care Categories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">OUR AMBULANCE SERVICES</h2>
            <p className="text-slate-500 font-medium mt-3">We provide comprehensive medical transfer solutions tailored to client needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-red-600/25 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform shadow-inner">🚑</div>
                <h3 className="text-lg font-bold text-slate-800">EMERGENCY AMBULANCE</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Immediate emergency medical transportation with certified advanced medical care equipment on board.</p>
              </div>
              <button onClick={handleBookAmbulance} className="text-red-600 font-bold text-xs mt-6 flex items-center gap-1 hover:text-red-700">BOOK VIA APP <ChevronRight className="w-3.5 h-3.5" /></button>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-red-600/25 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform shadow-inner">🏥</div>
                <h3 className="text-lg font-bold text-slate-800">NON-EMERGENCY TRANSFER</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Safe hospital appointment, clinic discharges, medical outpatient visits, dialysis transport, and routine bed-bound patient transfer.</p>
              </div>
              <button onClick={handleBookAmbulance} className="text-red-600 font-bold text-xs mt-6 flex items-center gap-1 hover:text-red-700">BOOK VIA APP <ChevronRight className="w-3.5 h-3.5" /></button>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-red-600/25 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform shadow-inner">🏟️</div>
                <h3 className="text-lg font-bold text-slate-800">EVENT MEDICAL STANDBY</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Expert stand-by teams and vehicles for sporting events, exhibitions, corporate functions, festivals, and public gatherings.</p>
              </div>
              <button onClick={handleBookAmbulance} className="text-red-600 font-bold text-xs mt-6 flex items-center gap-1 hover:text-red-700">GET EVENT QUOTE <ChevronRight className="w-3.5 h-3.5" /></button>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-red-600/25 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform shadow-inner">🗺️</div>
                <h3 className="text-lg font-bold text-slate-800">INTERSTATE & ROAD TRANSFERS</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Long-distance and intercity professional patient medical transfer across states inside Malaysia.</p>
              </div>
              <button onClick={handleBookAmbulance} className="text-red-600 font-bold text-xs mt-6 flex items-center gap-1 hover:text-red-700">INQUIRE RATES <ChevronRight className="w-3.5 h-3.5" /></button>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-red-600/25 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform shadow-inner">🧑‍⚕️</div>
                <h3 className="text-lg font-bold text-slate-800">MEDICAL ESCORT & STAFFING</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Professional nurse, physician, or paramedic escort and monitoring during private transfers.</p>
              </div>
              <button onClick={handleBookAmbulance} className="text-red-600 font-bold text-xs mt-6 flex items-center gap-1 hover:text-red-700">REQUEST ESCORT <ChevronRight className="w-3.5 h-3.5" /></button>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-50 border border-slate-100 hover:border-red-600/25 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform shadow-inner">🧪</div>
                <h3 className="text-lg font-bold text-slate-800">OXYGEN & LIFE SUPPORT</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">Oxygen-assisted high-flow transportation designed specifically for patients requiring constant monitoring.</p>
              </div>
              <button onClick={handleBookAmbulance} className="text-red-600 font-bold text-xs mt-6 flex items-center gap-1 hover:text-red-700">REQUEST DISPATCH <ChevronRight className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT MEDICARE EMS & WHY CHOOSE US */}
      <section id="about" className="py-20 bg-slate-50 border-b border-slate-100 scroll-mt-16 text-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Description */}
          <div className="lg:col-span-4 text-left space-y-6">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest block">About our values</span>
            <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">ABOUT OUR EMERGENCY DIVISION</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              We operate a world-class fleet designed to provide the highest standards of safety, professional care, and speed. Dedicated to patient survival and comfort, we ensure seamless bedside-to-bedside support.
            </p>
            
            {/* Triple Values Row */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="bg-white border border-slate-200/60 p-3 rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mx-auto mb-1.5 font-black text-sm">❤️</div>
                <p className="text-xs font-bold text-slate-800">Care</p>
              </div>
              <div className="bg-white border border-slate-200/60 p-3 rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mx-auto mb-1.5 font-black text-sm">🤝</div>
                <p className="text-xs font-bold text-slate-800">Compassion</p>
              </div>
              <div className="bg-white border border-slate-200/60 p-3 rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mx-auto mb-1.5 font-black text-sm">🛡️</div>
                <p className="text-xs font-bold text-slate-800">Commitment</p>
              </div>
            </div>
          </div>

          {/* Middle Block: Dynamic Team Image */}
          <div className="lg:col-span-4 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100 aspect-square">
            <img
              src="https://images.unsplash.com/photo-1626314846428-10e7379f3fba?auto=format&fit=crop&q=80&w=600"
              alt="Ambulance Interior Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Block: Why Choose Us list */}
          <div className="lg:col-span-4 text-left space-y-6">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest block">Core Strengths</span>
            <h2 className="text-3xl font-extrabold text-slate-800">WHY CHOOSE US</h2>
            
            <ul className="space-y-3.5 text-sm font-semibold text-slate-600">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-[#25D366]/10 text-[#25D366] rounded-md mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <span>Fast emergency matches directly via the Mobile App</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-[#25D366]/10 text-[#25D366] rounded-md mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <span>Live GPS location tracking of the dispatched crew</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-[#25D366]/10 text-[#25D366] rounded-md mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <span>Trained & certified active medical rescue crew</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-[#25D366]/10 text-[#25D366] rounded-md mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <span>Fully equipped & modern medical fleet vehicles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-[#25D366]/10 text-[#25D366] rounded-md mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <span>Fair, transparent upfront pricing structures on screen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-[#25D366]/10 text-[#25D366] rounded-md mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <span>Thousands of successful app bookings logged securely</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. OUR AMBULANCE TYPES */}
      <section id="types" className="py-20 bg-white border-b border-slate-100 scroll-mt-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest block mb-2">Advanced Medical Fleets</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">OUR AMBULANCE TYPES</h2>
            <p className="text-slate-500 font-medium mt-3">Vehicles fully structured for patient-centric clinical safety.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fleet 1 */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col group text-left">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80&w=400"
                  alt="Basic Life Support"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-800">BASIC LIFE SUPPORT (BLS)</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">Suitable for stable, non-critical medical patient transfers with basic equipment support.</p>
                  <ul className="text-[11px] text-slate-600 font-bold space-y-1 pt-2">
                    <li>• Oxygen Supply System</li>
                    <li>• Basic Stretcher Equipment</li>
                    <li>• Non-Critical Monitoring Devices</li>
                  </ul>
                </div>
                <button onClick={handleBookAmbulance} className="w-full bg-[#0b1b3d] text-white py-2.5 rounded-xl font-bold mt-6 text-xs hover:bg-[#142d5e] transition-colors text-center">BOOK VIA MEDICARE APP</button>
              </div>
            </div>

            {/* Fleet 2 */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col group text-left">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400"
                  alt="Advanced Life Support"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-800">ADVANCED LIFE SUPPORT (ALS)</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">ICU standard equipment designed for critical or intensive patient transfer support.</p>
                  <ul className="text-[11px] text-slate-600 font-bold space-y-1 pt-2">
                    <li>• Advanced Cardiac Monitors</li>
                    <li>• Ventilator & Defibrillator Systems</li>
                    <li>• Experienced Medical Specialist Escorts</li>
                  </ul>
                </div>
                <button onClick={handleBookAmbulance} className="w-full bg-[#0b1b3d] text-white py-2.5 rounded-xl font-bold mt-6 text-xs hover:bg-[#142d5e] transition-colors text-center">BOOK VIA MEDICARE APP</button>
              </div>
            </div>

            {/* Fleet 3 */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col group text-left">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400"
                  alt="Event Standby Unit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-800">EVENT STANDBY UNIT</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">Specialized medical deployment for crowds, sports, events, and functions standby.</p>
                  <ul className="text-[11px] text-slate-600 font-bold space-y-1 pt-2">
                    <li>• Rapid Response First-Aid Kits</li>
                    <li>• Stretcher & Triage Gear</li>
                    <li>• Full Communication Link Operations</li>
                  </ul>
                </div>
                <button onClick={handleBookAmbulance} className="w-full bg-[#0b1b3d] text-white py-2.5 rounded-xl font-bold mt-6 text-xs hover:bg-[#142d5e] transition-colors text-center">BOOK VIA MEDICARE APP</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COVERAGE, HOW IT WORKS, & TESTIMONIALS */}
      <section id="coverage" className="py-20 bg-slate-50 scroll-mt-16 text-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          
          {/* A. COVERAGE AREA BLOCK */}
          <div className="lg:col-span-4 text-left space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest block">Local Response Scope</span>
              <h3 className="text-2xl font-black text-[#0b1b3d] tracking-tight">COVERAGE AREAS</h3>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                Operating immediately out of <strong>{ambulance.address?.city || "Al Ashah"}</strong>, <strong>{ambulance.address?.state || "Johor"}</strong>.
              </p>
              
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-600 pt-2">
                <li className="flex items-center gap-1.5">• Johor Bahru</li>
                <li className="flex items-center gap-1.5">• Pasir Gudang</li>
                <li className="flex items-center gap-1.5">• Kota Tinggi</li>
                <li className="flex items-center gap-1.5">• Mersing</li>
                <li className="flex items-center gap-1.5">• Melaka</li>
                <li className="flex items-center gap-1.5">• Kuala Lumpur</li>
              </ul>
            </div>

            {/* Embedded Live Map */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-1 h-44 overflow-hidden mt-6 shadow-inner">
              <iframe
                title="Ambulance Live Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  ambulance.address?.latitude && ambulance.address?.longitude
                    ? `https://maps.google.com/maps?q=${ambulance.address.latitude},${ambulance.address.longitude}&z=13&output=embed`
                    : `https://maps.google.com/maps?q=${encodeURIComponent(ambulance.address?.city || ambulance.name)}&z=13&output=embed`
                }
                className="rounded-xl w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* B. HOW IT WORKS FLOW */}
          <div className="lg:col-span-4 text-left space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest block">Clear App workflow</span>
              <h3 className="text-2xl font-black text-[#0b1b3d] tracking-tight">HOW TO BOOK</h3>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">Book a paramedic response in four simple digital steps:</p>
            </div>
            
            <div className="space-y-4 mt-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0b1b3d] text-white flex items-center justify-center font-bold text-xs">1</div>
                <div>
                  <p className="text-xs font-black text-[#0b1b3d]">DOWNLOAD MEDICARE APP</p>
                  <p className="text-[10px] text-slate-500">Download the Medicare App from Google Play or Apple App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0b1b3d] text-white flex items-center justify-center font-bold text-xs">2</div>
                <div>
                  <p className="text-xs font-black text-[#0b1b3d]">INPUT DATA & LOCATION</p>
                  <p className="text-[10px] text-slate-500">Select ambulance category, specify symptoms, and share GPS coordinates</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0b1b3d] text-white flex items-center justify-center font-bold text-xs">3</div>
                <div>
                  <p className="text-xs font-black text-[#0b1b3d]">INSTANT APP MATCHING</p>
                  <p className="text-[10px] text-slate-500">Our smart algorithm matches you with the nearest paramedic crew immediately</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0b1b3d] text-white flex items-center justify-center font-bold text-xs">4</div>
                <div>
                  <p className="text-xs font-black text-[#0b1b3d]">TRACK LIVE GPS DISPATCH</p>
                  <p className="text-[10px] text-slate-500">Follow your ambulance in real-time as they navigate safely to your door</p>
                </div>
              </div>
            </div>
          </div>

          {/* C. CLIENTS TESTIMONIALS */}
          <div id="testimonials" className="lg:col-span-4 text-left space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between scroll-mt-16">
            <div className="space-y-4">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest block">Patient Trust reviews</span>
              <h3 className="text-2xl font-black text-[#0b1b3d] tracking-tight">WHAT OUR CLIENTS SAY</h3>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">Direct patient reviews on dispatch speed and treatment:</p>
            </div>
            
            <div className="space-y-4 mt-6 flex-1 flex flex-col justify-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <p className="text-xs font-semibold text-slate-600 italic">"Extremely rapid dispatch and patient handling. Paramedic crew was highly professional and compassionate!"</p>
                <p className="text-[10px] font-black text-slate-700">- Nurul H. • Johor Bahru</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <p className="text-xs font-semibold text-slate-600 italic">"Clean ambulance, fully equipped life support, and highly experienced medics. Very helpful during hospital discharge transfer!"</p>
                <p className="text-[10px] font-black text-slate-700">- Ahmad R. • Kuala Lumpur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PANEL & PARTNERS & CREDENTIALS */}
      <section className="py-16 bg-white border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Panel partners logos */}
          <div className="text-left space-y-4">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest block">Associated Insurance Panels</span>
            <h3 className="text-xl font-black text-[#0b1b3d]">PANELS & PARTNERS</h3>
            <p className="text-slate-500 text-xs font-semibold">We accept all major panel coverages in Malaysia.</p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <span className="text-base font-extrabold text-slate-400 select-none tracking-widest uppercase">PERKESO</span>
              <span className="text-base font-extrabold text-[#2563EB]/40 select-none tracking-wider uppercase">MiCARE</span>
              <span className="text-base font-extrabold text-emerald-500/40 select-none tracking-widest uppercase">PMCare</span>
              <span className="text-base font-extrabold text-red-500/40 select-none tracking-widest uppercase">eTiQa</span>
            </div>
          </div>

          {/* Credentials details */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 text-left space-y-3.5">
            <h4 className="text-sm font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-red-500" />
              REGISTRATION & MOH CREDENTIALS
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">MOH License No</p>
                <p className="text-slate-800 font-black mt-0.5">{ambulance.mohLicenseNumber || "MOH-REG-09789"}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Company Reg No</p>
                <p className="text-slate-800 font-black mt-0.5">{ambulance.companyRegistrationNumber || "SDN-BHD-12312"}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Medicare Verification</p>
                <p className="text-green-600 font-black mt-0.5 capitalize flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                  {ambulance.verificationStatus}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Operation Status</p>
                <p className="text-slate-800 font-black mt-0.5">{ambulance.isAvailable ? "Active Service" : "Inactive"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM ACTION FOOTER BAR */}
      <footer className="bg-[#0b1b3d] text-white py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left z-10 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg"><Activity className="w-6 h-6 animate-pulse" /></div>
          <div>
            <p className="text-lg font-black tracking-tight uppercase">Order Ambulance via Medicare App</p>
            <p className="text-xs text-slate-300 font-semibold mt-0.5">Please download our mobile app to request rapid dispatch safely.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleBookAmbulance}
            className="bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3 rounded-xl text-xs tracking-wider transition-all duration-300 shadow-lg shadow-red-600/30 flex items-center gap-1.5"
          >
            <Smartphone className="w-4 h-4" />
            BOOK AMBULANCE NOW
          </button>
          <button
            onClick={handleSupportContact}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black px-6 py-3 rounded-xl text-xs tracking-wider transition-colors"
          >
            SUPPORT ASSISTANCE
          </button>
        </div>
      </footer>

      {/* 10. FLOATING WHATSAPP SUPPORT BUTTON */}
      <button
        onClick={handleBookAmbulance}
        className="fixed bottom-6 right-6 z-30 bg-red-600 hover:bg-red-700 hover:scale-110 active:scale-95 text-white p-4 rounded-full shadow-[0_4px_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center"
        title="Book via Medicare App"
      >
        <Smartphone className="w-6 h-6" />
      </button>

      {/* 11. MEDICARE APP DOWNLOAD MODAL */}
      {showAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowAppModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-10 border border-slate-100 z-10 transform scale-100 transition-all duration-300 overflow-hidden text-center">
            {/* Background absolute decor orbs */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>

            {/* Close Button */}
            <button
              onClick={() => setShowAppModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Smartphone className="w-10 h-10 text-red-600 animate-bounce" />
            </div>

            {/* Header info */}
            <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight uppercase">
              Book Ambulance via Medicare App
            </h3>
            <p className="text-sm text-slate-500 font-semibold mt-3 leading-relaxed">
              To request rapid paramedic dispatch, calculate upfront fares, and track your medical team live, please download the Medicare mobile application.
            </p>

            {/* Visual QR Code Mock */}
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl my-6 flex items-center justify-center gap-4 max-w-[280px] mx-auto">
              <div className="w-16 h-16 bg-white border border-slate-200 p-1 flex items-center justify-center rounded-lg shadow-sm">
                {/* Visual Representation of QR Code */}
                <div className="grid grid-cols-4 gap-1 w-full h-full opacity-80">
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                </div>
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-slate-800 leading-tight">SCAN TO DOWNLOAD</p>
                <p className="text-[10px] text-slate-400 font-bold mt-0.5">Compatible with iOS & Android smartphones</p>
              </div>
            </div>

            {/* Platform Download Badges */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* Apple Store */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setToastMessage("Redirecting to App Store...");
                  setShowToast(true);
                }}
                className="w-full sm:w-auto inline-flex items-center gap-2 bg-black hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[9px] font-semibold text-slate-300">Download on the</div>
                  <div className="text-[13px] font-black mt-0.5">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setToastMessage("Redirecting to Google Play...");
                  setShowToast(true);
                }}
                className="w-full sm:w-auto inline-flex items-center gap-2 bg-black hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[9px] font-semibold text-slate-300">GET IT ON</div>
                  <div className="text-[13px] font-black mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
