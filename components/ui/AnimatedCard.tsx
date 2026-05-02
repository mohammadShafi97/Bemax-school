"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverEffect?: "scale" | "lift" | "glow" | "tiltRight";
}

const hoverStyles = {
  scale: "hover:scale-[1.03] hover:shadow-xl",
  lift: "hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/20",
  glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-primary-300",
  tiltRight: "hover:-translate-y-3 hover:rotate-2 hover:shadow-2xl hover:shadow-primary-500/20",
};

const AnimatedCard = ({ children, delay = 0, className = "", hoverEffect = "lift" }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg transition-all duration-300 ${hoverStyles[hoverEffect]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
