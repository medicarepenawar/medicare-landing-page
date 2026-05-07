import React from "react";
import { motion } from "framer-motion";
import { fadeUp, blurReveal } from "../animations/motion";
import { cn } from "../../utils/cn";

interface AnimatedRevealProps {
  children: React.ReactNode;
  variant?: "fadeUp" | "blur";
  className?: string;
  delay?: number;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
}) => {
  const variants = variant === "blur" ? blurReveal : fadeUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
