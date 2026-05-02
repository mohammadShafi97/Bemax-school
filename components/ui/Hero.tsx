"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  imagePath?: string;
  videoPath?: string;
  primaryAction?: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
}

const Hero = ({
  title,
  subtitle,
  imagePath,
  videoPath,
  primaryAction,
  secondaryAction,
}: HeroProps) => {
  const images = [
    'url("/hero-1.jpg")',
    'url("/hero-2.jpg")',
    'url("/hero-3.jpg")',
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      style={{
        backgroundImage: images[activeIndex],
        transition: "background-image 1s ease-in-out",
      }}
      className="relative min-h-screen flex items-center bg-cover bg-no-repeat bg-center justify-center pt-20 overflow-hidden bg-primary-900"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-black to-transparent"></div>
      {/* Background Media */}
      {/* <div className="absolute inset-0 z-0">
        {videoPath ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={videoPath} type="video/mp4" />
          </video>
        ) : (
          <div className="relative w-full h-full">
            {imagePath ? (
              <Image
                src={imagePath}
                alt="Hero Background"
                fill
                priority
                className="object-cover opacity-40"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900" />
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent" />
      </div> */}

      <div className="relative z-10 max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl font-black text-white mb-6 tracking-wider drop-shadow-xl leading-tight">
            {title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base text-primary-100 max-w-3xl mx-auto mb-10 font-medium drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        {(primaryAction || secondaryAction) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="w-fit sm:w-auto bg-accent text-white md:px-8 md:py-4 p-2 rounded-full font-bold shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:-translate-y-1 transition-all text-lg"
              >
                {primaryAction.text}
              </Link>
            )}
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="w-fit sm:w-auto glass text-white md:px-8 md:py-4 p-2 rounded-full font-bold border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all text-lg"
              >
                {secondaryAction.text}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce sm:block hidden"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
