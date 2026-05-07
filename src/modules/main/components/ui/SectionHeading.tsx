import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4",
            dark ? "text-blue-400" : "text-[#1D4ED8]"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1]",
          dark ? "text-white" : "text-[#111111]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-gray-400" : "text-[#666666]"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
