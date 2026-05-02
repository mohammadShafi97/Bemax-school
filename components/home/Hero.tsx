"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FiStar, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  const images = [
    'url("/hero-1.png")',
    'url("/hero-2.png")',
    'url("/hero-3.png")',
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-no-repeat bg-center  bg-cover overflow-hidden bg-primary-900"
      style={{
        backgroundImage: images[activeIndex],
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Parallax Background */}
      {/* <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full">
        <img
          src="/assets/hero_bg.png"
          alt="School Campus"
          className="object-cover w-full h-full opacity-60 mix-blend-overlay"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop";
          }} // Fallback if no hero_bg.png
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/40 to-primary-900/90"></div>
      </motion.div> */}

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 shadow-2xl backdrop-blur-md bg-white/10 border border-white/20"
        >
          <FiStar className="text-accent h-[18px] w-[18px]" />
          <span className="text-sm font-bold tracking-widest text-[#f8fafc] uppercase">
            Admissions Open 2026-2027
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 drop-shadow-2xl"
        >
          Raising Global{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] to-accent drop-shadow-none">
            Leaders.
          </span>
          <br />
          Grounded in Values.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md font-medium"
        >
          Welcome to <strong>BE MAX KIDS & PUBLIC SCHOOL</strong>. A futuristic,
          stress-free learning ecosystem backed by the 12+ year legacy of the
          Bemax Group. We build confident, multi-lingual global citizens in a
          campus that feels exactly like a second home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(244,63,94,0.4)] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg">
            Book a Campus Tour <FiArrowRight size={22} />
          </button>
          <button className="glass text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg tracking-wide border border-white/40 shadow-xl backdrop-blur-md">
            Apply for Admissions
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-[32px] h-[54px] rounded-full border-2 border-white/50 flex justify-center p-2 shadow-sm">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>

      {/* Custom CSS for gradient text drop-shadow hack since bg-clip-text removes shadow */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        h1 span.text-transparent {
           filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));
        }
      `,
        }}
      />
    </section>
  );
}
