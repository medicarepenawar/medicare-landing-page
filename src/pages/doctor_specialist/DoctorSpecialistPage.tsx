import { useParams, useNavigate } from "react-router-dom";
import EducationCard from "../../components/doctor_specialist/EducationCard";
import ProfileSidebar from "../../components/doctor_specialist/ProfileSidebar";
import CredentialCard from "../../components/doctor_specialist/CredentialCard";
import type { Doctor } from "../../types/doctor_specialist";
import { useEffect, useState } from "react";
import { getDoctorBySlug } from "../../services/doctorSpecialistService";
import { Navbar } from "../../modules/main/components/layout/Navbar";
import { Footer } from "../../modules/main/components/layout/Footer";

const DoctorSpecialist = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    getDoctorBySlug(slug)
      .then(setDoctor)
      .catch(() => setDoctor(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 font-medium animate-pulse">Loading Doctor profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-md text-center space-y-4">
            <span className="material-symbols-outlined text-red-500 text-5xl">warning</span>
            <h2 className="text-xl font-bold text-gray-900">Profile Not Found</h2>
            <p className="text-gray-500">The requested doctor profile could not be found or is currently unavailable.</p>
            <button
              onClick={() => navigate("/main")}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Back to Directory
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    // <div className="grid md:grid-cols-12 gap-6 p-6">
    //   <ProfileSidebar doctor={doctor} />

    //   <div className="md:col-span-8 space-y-6">
    //     <p>{doctor.bio}</p>

    //     <CredentialCard doctor={doctor} />
    //     <EducationCard data={doctor.education} />

    //     {doctor.services.map((s) => (
    //       <ServiceCard key={s.id} service={s} />
    //     ))}
    //   </div>
    // </div>

    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* ── MAIN CONTENT ── */}
      <main className="flex-grow max-w-7xl mx-auto px-5 md:px-16 py-8 pt-28 md:pt-36 w-full">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-6 text-sm font-sans cursor-pointer"
        >
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
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Overview</h2>
              <p className="text-gray-500 leading-relaxed">{doctor.bio}</p>
            </section>

            {/* Credentials & Education */}
            <div className={`grid grid-cols-1 ${doctor.education && doctor.education.length > 0 ? "md:grid-cols-2" : ""} gap-6`}>
              {doctor.education && doctor.education.length > 0 && (
                <EducationCard data={doctor.education} />
              )}
              <CredentialCard doctor={doctor} />
            </div>

            {/* Services & Pricing */}
            {/* <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">payments</span>
                  <h2 className="text-xl font-semibold text-gray-900">Services & Pricing</h2>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">Consultation Packages</span>
              </div>

              <div className="space-y-3">
                {doctor.services.map((service) => (
                  // key wajib ada saat render list!
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorSpecialist;
