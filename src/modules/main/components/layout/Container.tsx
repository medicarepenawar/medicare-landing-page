import React from "react";
import { cn } from "../../utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
};
