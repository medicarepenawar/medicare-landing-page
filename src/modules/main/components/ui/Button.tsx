import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "emergency";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-[#2563EB] hover:shadow-lg hover:shadow-[#2563EB]/30 focus:ring-[#2563EB]",
    secondary:
      "bg-white text-gray-900 border border-gray-100/50 hover:border-[#2563EB]/20 hover:shadow-md focus:ring-gray-300",
    ghost:
      "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-200",
    emergency:
      "bg-[#EF4444] text-white hover:bg-red-600 hover:shadow-lg hover:shadow-[#EF4444]/30 focus:ring-[#EF4444]",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
