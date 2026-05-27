"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imagePath?: string;
  primaryAction?: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
}

const PageHeader = ({
  title,
  subtitle,
  imagePath,
  primaryAction,
  secondaryAction,
}: PageHeaderProps) => {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-primary-900">
      {/* Background Image or Gradient */}
      <div className="absolute inset-0 z-0">
        {imagePath ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imagePath})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-linear-to-t from-primary-900 via-primary-900/40 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary-900 via-primary-800 to-slate-900" />
        )}
      </div>

      <div className="relative z-10 max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
            {title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-primary-100 max-w-3xl mx-auto font-medium drop-shadow-md mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {(primaryAction || secondaryAction) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
          >
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="w-fit sm:w-auto bg-accent text-white md:px-8 md:py-4 p-3 rounded-full font-bold shadow-[0_0_15px_rgba(244,63,94,0.3)] hover:-translate-y-1 transition-all text-sm md:text-base"
              >
                {primaryAction.text}
              </Link>
            )}
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="w-fit sm:w-auto glass text-white md:px-8 md:py-4 p-3 rounded-full font-bold border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all text-sm md:text-base"
              >
                {secondaryAction.text}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
