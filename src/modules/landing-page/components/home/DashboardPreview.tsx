import React from 'react';
import visitClinicImg from '../../assets/img/home/visitclinic.png';

interface MenuItem {
    icon: string;
    label: string;
    active?: boolean;
}

export const DashboardPreview: React.FC = () => {
    return (
        <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <BrowserChrome />
                <div className="flex">
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </div>
    );
};

const BrowserChrome: React.FC = () => (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-2">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 text-center">
            <span className="text-sm font-semibold text-blue-600">MediCare</span>
        </div>
    </div>
);

const Sidebar: React.FC = () => {
    const menuItems: MenuItem[] = [
        { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Dashboard' },
        { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Billing' },
        { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'History', active: true },
        { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Manage Doctor' },
        { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', label: 'Manage Item' },
        { icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Reports' }
    ];

    return (
        <div className="w-56 bg-white border-r border-gray-200 p-6 space-y-2">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ${
                        item.active
                            ? 'text-blue-600 bg-blue-50 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="text-sm">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

const MainContent: React.FC = () => {
    return (
        <div className="flex-1 p-8 bg-gray-50/50">
            <div className="grid grid-cols-2 gap-6 mb-6">
                <ClinicDetailsCard />
                <LoggedInCard />
            </div>
            <HistorySection />
        </div>
    );
};

const ClinicDetailsCard: React.FC = () => (
    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
        <div className="flex gap-4">
            <img
                src={visitClinicImg}
                alt="Clinic"
                className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                    POLIKLINIK PENAWAR JANAELEKTRIK<br />SULTAN ISKANDAR
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                    Group: KUMPULAN PERUBATAN PENAWAR SDN BHD<br />
                    Email: janaelektriksipoliklinik@penawar.com
                </p>
                <p className="text-xs text-gray-500">
                    JSTEER JANAELEKTRIK SULTAN ISKANDAR RAHAMAN PENJAMAN<br />
                    TNB 81700 PASIR GUDANG JOHOR
                </p>
            </div>
        </div>
    </div>
);

const LoggedInCard: React.FC = () => (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Logged In As</h4>
        <p className="text-sm font-bold text-gray-900 mb-3">
            POLIKLINIK PENAWAR JANAELEKTRIK SULTAN ISKANDAR
        </p>
        <div className="bg-blue-50 rounded-lg p-3 mb-3">
            <p className="text-xs text-blue-800 font-medium">
                Current Doctor [1] On Duty
            </p>
        </div>
        <p className="text-sm font-semibold text-gray-900">
            DR. MOHD KHAIRUL BIN MANSOR
        </p>
    </div>
);

const HistorySection: React.FC = () => (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6">History</h3>
        <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm text-gray-600">Date Range:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>01</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Desember</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>2024</option>
            </select>
            <span className="text-sm text-gray-600">to</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>01</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Desember</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>2025</option>
            </select>
        </div>
        <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-gray-600">Status:</span>
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm flex-1 max-w-xs">
                <option>Show All Status</option>
            </select>
        </div>
    </div>
);