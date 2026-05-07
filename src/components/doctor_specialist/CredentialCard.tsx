import type { Doctor } from "../../types/doctor_specialist";
import CredentialItem from "./CredentialItem";

const CredentialCard = ({doctor}: {doctor: Doctor}) => {
    return (
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-blue-600">badge</span>
        <h2 className="text-xl font-semibold text-gray-900">Credentials</h2>
      </div>

      <div className="space-y-4">
        <CredentialItem label="MMC Number" value={doctor.mmcNumber} />
        <CredentialItem label="APC Number" value={doctor.apcNumber} />

        {/* Kondisional Rendering: tampilkan gaya berbeda jika expired */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            APC Expiration
          </span>
          <span
            className={`text-sm font-semibold flex items-center gap-1 ${
              doctor.isApcExpired ? "text-red-500" : "text-green-600"
            }`}
          >
            <span className="material-symbols-outlined text-base">event</span>
            {doctor.apcExpiry}
          </span>
        </div>
      </div>
    </section>
    );
};

export default CredentialCard;