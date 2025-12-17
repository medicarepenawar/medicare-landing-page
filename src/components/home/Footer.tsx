import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-800">
                    <div className="mb-6 md:mb-0">
                        <div className="text-3xl font-bold mb-4">
                            <span className="text-blue-400">Medi</span>
                            <span className="text-red-400">Care</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">23-29, Jalan Sena 1, Taman Rinting, 81750</p>
                        <p className="text-gray-400 text-sm">Masai, Johor, Malaysia</p>
                    </div>

                    <div className="flex gap-10">
                        <a href="#privacy" className="text-gray-400 hover:text-white transition font-medium">
                            Privacy Policy
                        </a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition font-medium">
                            Contact Us
                        </a>
                        <a href="#careers" className="text-gray-400 hover:text-white transition font-medium">
                            Careers
                        </a>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm">
                    Medicare © 2025. All rights reserved
                </div>
            </div>
        </footer>
    );
};