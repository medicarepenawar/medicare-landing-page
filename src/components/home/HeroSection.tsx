import React from 'react';
import { Button } from '../common/Button';
import { DashboardPreview } from './DashboardPreview';

export const HeroSection: React.FC = () => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Healthcare Service<br />
                        Wherever You Are
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Connecting patients with healthcare providers through innovative technology
                    </p>
                    <Button size="lg" icon>
                        Get Started
                    </Button>
                </div>

                <DashboardPreview />
            </div>
        </section>
    );
};