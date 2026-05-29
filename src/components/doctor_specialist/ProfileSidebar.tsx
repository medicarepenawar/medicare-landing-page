import type { Doctor } from "../../types/doctor_specialist";
import InfoRow from "./InfoRow";

const ProfileSidebar = ({ doctor }: { doctor: Doctor }) => {
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
          {doctor.isSpecialist && (
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm">
              Book Appointment
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
