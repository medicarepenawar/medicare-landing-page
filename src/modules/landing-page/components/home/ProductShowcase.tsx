import React from 'react';
import mobileAppImg from '../../assets/img/home/mobileApp.png';
import webAppImg from '../../assets/img/home/webApp.png';

export const ProductShowcase: React.FC = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Experience Healthcare at Your Fingertips
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <MobileAppCard />
                    <WebPlatformCard />
                </div>
            </div>
        </section>
    );
};

const MobileAppCard: React.FC = () => (
    <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-12">
        <div className="mb-8">
            <img
                src={mobileAppImg}
                alt="Mobile App"
                className="w-full h-auto rounded-2xl shadow-2xl"
            />
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">Mobile App For Patients</h3>
        <p className="text-blue-100 text-lg leading-relaxed">
            Access your complete healthcare journey from anywhere. Book appointments, view test results, 
            manage prescriptions, and stay connected with your healthcare providers.
        </p>
    </div>
);

const WebPlatformCard: React.FC = () => (
    <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-400 to-red-400 p-12">
        <div className="mb-8">
            <img
                src={webAppImg}
                alt="Web Platform"
                className="w-full h-auto rounded-2xl shadow-2xl"
            />
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">Web Platform for Healthcare Vendor</h3>
        <p className="text-red-100 text-lg leading-relaxed">
            Powerful web dashboard for healthcare providers to manage patient records, schedule appointments, 
            track treatments, and streamline clinic operations.
        </p>
    </div>
);