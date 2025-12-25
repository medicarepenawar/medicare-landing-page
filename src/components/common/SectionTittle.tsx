import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
    return (
        <h2 className={`text-5xl font-bold text-gray-900 mb-6 ${className}`}>
            {children}
        </h2>
    );
};