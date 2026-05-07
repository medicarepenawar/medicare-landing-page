import React from "react";
import { motion } from "framer-motion";
import type { StatItem } from "../../types";

interface StatCardProps {
  item: StatItem;
  index?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="relative p-8 text-center"
    >
      <p className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
        {item.value}
      </p>
      <p className="mt-2 text-sm text-gray-500 font-medium">
        {item.label}
      </p>
    </motion.div>
  );
};
