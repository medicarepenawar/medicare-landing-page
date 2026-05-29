// ============================================================
// DoctorSpecialistPage.tsx
// ============================================================
// KONSEP REACT yang dipakai di file ini:
//   1. TYPE / INTERFACE  → Mendefinisikan "bentuk" data (TypeScript)
//   2. DATA / STATE      → Data statis (nanti bisa diganti fetch API)
//   3. SUB-COMPONENTS    → Komponen kecil yang bisa dipakai ulang
//   4. MAIN COMPONENT    → Komponen utama yang merangkai semuanya
//   5. PROPS             → Data yang dikirim dari parent ke child
// ============================================================

import React from "react";

// ─────────────────────────────────────────────────────────────
// 1. TYPE DEFINITIONS
//    TypeScript interface = "kontrak" bentuk data.
//    Seperti blueprint sebelum membangun rumah.
// ─────────────────────────────────────────────────────────────

interface Education {
  year: string;
  degree: string;
  university: string;
  major: string;
  isLatest: boolean; // Untuk memberi warna berbeda pada item terbaru
}

interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  priceLabel: string;
}

interface Doctor {
  name: string;
  specialty: string;
  hospital: string;
  gender: string;
  nationality: string;
  phone: string;
  tags: string[];
  bio: string;
  mmcNumber: string;
  apcNumber: string;
  apcExpiry: string;
  isApcExpired: boolean;
  address: {
    hospitalName: string;
    street: string;
    city: string;
  };
  education: Education[];
  services: Service[];
  imageUrl: string;
}

// ─────────────────────────────────────────────────────────────
// 2. DATA (Mock / Static Data)
//    Di dunia nyata, data ini datang dari API (useEffect + fetch).
//    Untuk belajar, kita hardcode dulu agar fokus ke struktur komponen.
// ─────────────────────────────────────────────────────────────

const doctorData: Doctor = {
  name: "Dr. Adrian Wijaya",
  specialty: "Cardiothoracic Specialist",
  hospital: "Heart & Vascular Center, Siloam Hospitals",
  gender: "Male",
  nationality: "Indonesian",
  phone: "+62 811-2345-6789",
  tags: ["Surgery", "15+ Years Exp."],
  bio: "Dr. Adrian Wijaya is a highly distinguished Cardiothoracic Surgeon with a decade and a half of clinical excellence. Specializing in minimally invasive cardiac surgery and robotic-assisted procedures, he has successfully performed over 1,200 complex surgeries. His patient-centric approach combines cutting-edge medical technology with compassionate care to ensure the best possible outcomes for cardiovascular patients.",
  mmcNumber: "120.445.67.89",
  apcNumber: "APC/2024/SPEC-9921",
  apcExpiry: "Dec 31, 2024",
  isApcExpired: true,
  address: {
    hospitalName: "Siloam Hospitals Lippo Village",
    street: "Jl. Siloam No. 6, Lippo Karawaci",
    city: "Tangerang, Banten, 15811",
  },
  education: [
    {
      year: "2015",
      degree: "Specialist Graduate",
      university: "University of Indonesia",
      major: "Cardiothoracic & Vascular Surgery",
      isLatest: true,
    },
    {
      year: "2009",
      degree: "Medical Degree",
      university: "Airlangga University",
      major: "Bachelor of Medicine",
      isLatest: false,
    },
  ],
  services: [
    {
      id: 1,
      name: "Specialist Consultation",
      description:
        "Comprehensive heart assessment including history review and physical examination.",
      duration: "45 - 60 mins",
      price: "Rp 750.000",
      priceLabel: "Starting Price",
    },
    {
      id: 2,
      name: "Second Surgical Opinion",
      description:
        "In-depth review of existing medical records and surgical planning advice.",
      duration: "90 mins",
      price: "Rp 1.250.000",
      priceLabel: "Standard Rate",
    },
    {
      id: 3,
      name: "Echocardiogram Review",
      description:
        "Diagnostic interpretation of cardiac imaging results and clinical recommendation.",
      duration: "30 mins",
      price: "Rp 500.000",
      priceLabel: "Per Review",
    },
  ],
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3evB2KFAuXphZ5q32s49G0OoRpUHaZrmb6yH7PML3lTK79wvQruS0BWJXlV_ijsVsy6bc50dla9HyNjEOmB3j1QB6FV27Pifr1WphvrInhpWQNYke5rQfWOeYBNjWgikQV3HNnbT5tOuEp6vncUETTMDulZTTMj1XP3JRheexTKEzW1L2RTxWsLZ1Jn6ZcOngWGHYaB3Sk_YWAc49K7QvzQ00WiYti2Zq89jhnZU19Wee8UK2IqKYoB50d6yD9KPCaxDrAmQ-O8Yt",
};

// ─────────────────────────────────────────────────────────────
// 3. SUB-COMPONENTS
//    Pecah UI menjadi bagian-bagian kecil yang punya 1 tanggung jawab.
//    Prinsip: "Single Responsibility" — 1 komponen = 1 tugas.
//
//    PROPS = parameter yang dikirim ke komponen.
//    Seperti argumen fungsi biasa.
// ─────────────────────────────────────────────────────────────

// ── 3a. ProfileSidebar ──────────────────────────────────────
//    Menerima seluruh object doctor sebagai props
interface ProfileSidebarProps {
  doctor: Doctor;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ doctor }) => {
  return (
    <aside className="md:col-span-4 space-y-6">
      {/* Card Profil Utama */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        {/* Foto */}
        <div className="aspect-square w-full bg-gray-100">
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">
          {/* Nama & Spesialisasi */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="font-poppins text-2xl font-bold text-gray-900">{doctor.name}</h1>
              {/* Icon "verified" dari Google Material Symbols */}
              <span className="material-symbols-outlined text-blue-600 text-2xl fill">
                verified
              </span>
            </div>
            <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-base">location_on</span>
              {doctor.hospital}
            </p>
          </div>

          {/* Tags / Badge */}
          <div className="flex flex-wrap gap-2">
            {/*
              .map() = cara React me-render daftar/array.
              Setiap item WAJIB punya "key" yang unik.
            */}
            {doctor.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detail Informasi */}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <InfoRow label="Gender" value={doctor.gender} />
            <InfoRow label="Nationality" value={doctor.nationality} />
            <InfoRow label="Phone" value={doctor.phone} />
          </div>

          {/* Practice Address */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Practice Address
            </h3>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900 text-sm">{doctor.address.hospitalName}</p>
              <p className="text-gray-500 text-xs">{doctor.address.street}</p>
              <p className="text-gray-500 text-xs">{doctor.address.city}</p>
            </div>
          </div>

          {/* Tombol Booking */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm">
            Book Appointment
          </button>
        </div>
      </div>
    </aside>
  );
};

// ── 3b. InfoRow ──────────────────────────────────────────────
//    Komponen kecil untuk baris label + value.
//    Contoh PROPS SEDERHANA: hanya menerima string.
interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-900 font-medium">{value}</span>
    </div>
  );
};

// ── 3c. CredentialsCard ──────────────────────────────────────
interface CredentialsCardProps {
  mmcNumber: string;
  apcNumber: string;
  apcExpiry: string;
  isApcExpired: boolean;
}

const CredentialsCard: React.FC<CredentialsCardProps> = ({
  mmcNumber,
  apcNumber,
  apcExpiry,
  isApcExpired,
}) => {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-blue-600">badge</span>
        <h2 className="text-xl font-semibold text-gray-900">Credentials</h2>
      </div>

      <div className="space-y-4">
        <CredentialItem label="MMC Number" value={mmcNumber} />
        <CredentialItem label="APC Number" value={apcNumber} />

        {/* Kondisional Rendering: tampilkan gaya berbeda jika expired */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            APC Expiration
          </span>
          <span
            className={`text-sm font-semibold flex items-center gap-1 ${
              isApcExpired ? "text-red-500" : "text-green-600"
            }`}
          >
            <span className="material-symbols-outlined text-base">event</span>
            {apcExpiry}
          </span>
        </div>
      </div>
    </section>
  );
};

// ── 3d. CredentialItem ───────────────────────────────────────
interface CredentialItemProps {
  label: string;
  value: string;
}

const CredentialItem: React.FC<CredentialItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-1 pb-4 border-b border-gray-100">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        {label}
      </span>
      <span className="text-sm font-bold text-gray-900">{value}</span>
    </div>
  );
};

// ── 3e. EducationCard ────────────────────────────────────────
interface EducationCardProps {
  education: Education[];
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-blue-600">school</span>
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
      </div>

      <div className="space-y-4">
        {education.map((item, index) => (
          // Gunakan index sebagai key hanya jika data tidak punya ID unik
          <div key={index} className="relative pl-6">
            {/* Garis vertikal timeline */}
            {index < education.length - 1 && (
              <div className="absolute left-[3px] top-4 bottom-[-16px] w-0.5 bg-blue-100" />
            )}
            {/* Titik bulat di timeline */}
            <div
              className={`absolute left-[-2px] top-1.5 w-3 h-3 rounded-full border-2 ${
                item.isLatest
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white border-gray-300"
              }`}
            />
            <span
              className={`text-sm font-bold ${
                item.isLatest ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {item.degree} ({item.year})
            </span>
            <p className="text-sm font-semibold text-gray-800">{item.university}</p>
            <p className="text-xs text-gray-400">{item.major}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ── 3f. ServiceCard ──────────────────────────────────────────
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Info Layanan */}
      <div className="space-y-1">
        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h4>
        <p className="text-sm text-gray-500 max-w-lg">{service.description}</p>
        <span className="text-xs text-gray-400 flex items-center gap-1 pt-1">
          <span className="material-symbols-outlined text-sm">schedule</span>
          {service.duration}
        </span>
      </div>

      {/* Harga */}
      <div className="text-right flex-shrink-0">
        <p className="text-xl font-bold text-blue-600">{service.price}</p>
        <p className="text-xs text-gray-400">{service.priceLabel}</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 4. MAIN COMPONENT
//    Ini adalah komponen utama yang di-export dan di-route di App.tsx.
//    Tugasnya: mengambil data + merangkai semua sub-komponen.
//
//    ALUR DATA REACT (one-way data flow):
//    doctorData → DoctorSpecialistPage → props → sub-komponen
//    Data selalu mengalir dari ATAS ke BAWAH (parent → child).
// ─────────────────────────────────────────────────────────────

const DoctorSpecialistPage: React.FC = () => {
  // Dalam aplikasi nyata, data diambil dari API di sini:
  //
  //   const [doctor, setDoctor] = useState<Doctor | null>(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //
  //   useEffect(() => {
  //     fetch(`/api/doctors/${id}`)
  //       .then(res => res.json())
  //       .then(data => setDoctor(data))
  //       .finally(() => setIsLoading(false));
  //   }, [id]);
  //
  // Untuk sekarang, kita pakai data statis dari atas:
  const doctor = doctorData;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      

      {/* ── MAIN CONTENT ── */}
      <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 w-full">
        {/* Tombol Kembali */}
        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-6 text-sm font-sans">
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Medical Directory
        </button>

        {/* ── GRID LAYOUT UTAMA ──
            Layout ini memisahkan sidebar (kiri) dan konten (kanan).
            md:grid-cols-12 = 12 kolom di layar medium ke atas.
            Sidebar: 4 kolom, Konten: 8 kolom.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* ── SIDEBAR ── */}
          {/* Props dikirim seperti atribut HTML: doctor={doctor} */}
          <ProfileSidebar doctor={doctor} />

          {/* ── KONTEN KANAN ── */}
          <div className="md:col-span-8 space-y-6">

            {/* Professional Overview */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Overview
              </h2>
              <p className="text-gray-500 leading-relaxed">{doctor.bio}</p>
            </section>

            {/* Credentials & Education */}
            <div className={`grid grid-cols-1 ${doctor.education && doctor.education.length > 0 ? "md:grid-cols-2" : ""} gap-6`}>
              {doctor.education && doctor.education.length > 0 && (
                <EducationCard education={doctor.education} />
              )}
              <CredentialsCard
                mmcNumber={doctor.mmcNumber}
                apcNumber={doctor.apcNumber}
                apcExpiry={doctor.apcExpiry}
                isApcExpired={doctor.isApcExpired}
              />
            </div>

            {/* Services & Pricing */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">payments</span>
                  <h2 className="text-xl font-semibold text-gray-900">Services & Pricing</h2>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                  Consultation Packages
                </span>
              </div>

              {/* Render daftar layanan menggunakan .map() */}
              <div className="space-y-3">
                {doctor.services.map((service) => (
                  // key wajib ada saat render list!
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-16 max-w-7xl mx-auto gap-4">
          <div>
            <p className="font-bold text-gray-900 text-lg">ClinicalConnect</p>
            <p className="text-xs text-gray-400">© 2024 ClinicalConnect. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Terms of Service", "Privacy Policy", "Support Contact", "HIPAA Compliance"].map(
              (link) => (
                <a key={link} href="#" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 5. EXPORT
//    Wajib di-export agar bisa di-import di App.tsx / router.
// ─────────────────────────────────────────────────────────────
export default DoctorSpecialistPage;