import type { Doctor } from "../../types/doctor_specialist";
import InfoRow from "./InfoRow";

const ProfileSidebar = ({ doctor, onBookClick }: { doctor: Doctor; onBookClick?: () => void }) => {
  return (
    <aside className="lg:col-span-4 space-y-4">
      {/* Card Profil Utama */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        {/* Foto - Shrunk to fit without scrolling */}
        <div className="h-48 md:h-52 w-full bg-gray-100 relative">
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-5 space-y-4">
          {/* Nama & Spesialisasi */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="font-poppins text-xl font-bold text-gray-900">{doctor.name}</h1>
              {/* Icon "verified" dari Google Material Symbols */}
              <span className="material-symbols-outlined text-blue-600 text-xl fill">
                verified
              </span>
            </div>
            <p className="text-blue-600 font-semibold text-sm">{doctor.specialty}</p>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              {doctor.hospital}
            </p>
          </div>

          {/* Tags / Badge */}
          <div className="flex flex-wrap gap-1.5">
            {doctor.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tombol Booking - Moved up to be extremely prominent and accessible without scrolling */}
          {doctor.isSpecialist && (
            <button 
              onClick={onBookClick}
              className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 text-sm"
            >
              <span className="material-symbols-outlined text-base">calendar_month</span>
              Book Appointment
            </button>
          )}

          {/* Detail Informasi */}
          <div className="pt-3.5 border-t border-gray-100 space-y-2">
            <InfoRow label="Gender" value={doctor.gender} />
            <InfoRow label="Nationality" value={doctor.nationality} />
            <InfoRow label="Phone" value={doctor.phone} />
          </div>

          {/* Practice Address */}
          <div className="pt-3.5 border-t border-gray-100 space-y-1.5">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Practice Address
            </h3>
            <div className="space-y-0.5">
              <p className="font-semibold text-gray-900 text-xs">{doctor.address.hospitalName}</p>
              <p className="text-gray-500 text-[11px]">{doctor.address.street}</p>
              <p className="text-gray-500 text-[11px]">{doctor.address.city}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
