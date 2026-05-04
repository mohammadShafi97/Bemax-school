"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  delay?: number;
  bg?: "white" | "slate" | "primary";
}

const bgColors = {
  white: "bg-white",
  slate: "bg-slate-50",
  primary: "bg-primary-900 text-white",
};

const Section = ({
  children,
  className = "",
  id,
  style,
  kicker,
  title,
  subtitle,
  delay = 0,
  bg = "white",
}: SectionProps) => {
  return (
    <section
      id={id}
      style={style}
      className={`py-20 md:px-[100px] md:py-32 ${bgColors[bg]} overflow-hidden ${className}`}
    >
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {(kicker || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
            className="text-center mb-16 md:mb-24"
          >
            {kicker && (
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-4">
                {kicker}
              </div>
            )}
            {title && (
              <h2
                className={`text-3xl md:text-5xl font-black mb-6 ${bg === "primary" ? "text-white" : "text-slate-900"}`}
              >
                {title.split(" ").map((word, i, arr) => (
                  <span
                    key={i}
                    className={i === arr.length - 1 ? "text-accent" : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-lg md:text-xl max-w-3xl mx-auto ${bg === "primary" ? "text-primary-100" : "text-slate-600"}`}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
