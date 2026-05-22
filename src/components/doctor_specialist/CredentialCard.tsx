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

       
      </div>
    </section>
    );
};

export default CredentialCard;