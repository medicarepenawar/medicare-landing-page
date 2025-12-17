import React from 'react';
import doctorImg from '../../assets/img/home/doctor.png';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

export const FeaturesSection: React.FC = () => {
    const features: Feature[] = [
        {
            icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
            title: 'Easy Mobile Access',
            description: 'Book appointments, view medical records, and communicate with doctors directly from your mobile device.'
        },
        {
            icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
            title: 'Clinic Management',
            description: 'Comprehensive web platform for healthcare providers to manage patients, appointments, and medical records.'
        },
        {
            icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            title: 'Secure & Private',
            description: 'Your health data is protected with enterprise-grade security and HIPAA compliance.'
        }
    ];

    return (
        <section className="py-20 px-6 bg-white/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        What Makes Medicare The<br />Best Choice For You?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img
                            src={doctorImg}
                            alt="Healthcare Professionals"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="space-y-10">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
    <div className="flex gap-6">
        <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);