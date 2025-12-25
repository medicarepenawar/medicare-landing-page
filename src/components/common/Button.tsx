import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    icon?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    icon = false,
    className = ''
}) => {
    const baseStyles = 'rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl';
    
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-white text-blue-600 hover:bg-gray-50'
    };
    
    const sizes = {
        sm: 'px-6 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-12 py-5 text-lg'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
            {icon && <ArrowRight className="w-5 h-5" />}
        </button>
    );
};