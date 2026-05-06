import React from "react";
import { cn } from "../../utils/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  id,
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 lg:py-40 overflow-hidden",
        dark ? "bg-[#0A0A0A]" : "bg-transparent",
        className
      )}
    >
      {children}
    </section>
  );
};
