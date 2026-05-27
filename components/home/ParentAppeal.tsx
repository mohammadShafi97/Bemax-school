"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiBook, FiStar, FiHeart, FiActivity } from "react-icons/fi";

const ParentAppeal = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5; // range: -0.5 to 0.5
    const y = (clientY - top) / height - 0.5; // range: -0.5 to 0.5
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax transform values for different objects
  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-60, 60]);
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-60, 60]);

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40]);
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40]);

  const x3 = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const y3 = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]);

  const x4 = useTransform(smoothMouseX, [-0.5, 0.5], [80, -80]);
  const y4 = useTransform(smoothMouseY, [-0.5, 0.5], [-80, 80]);

  return (
    <section
      className="relative py-24 bg-linear-to-b from-white to-slate-50 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Animated Objects */}
      <motion.div
        style={{ x: x1, y: y1 }}
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-[5%] md:left-[10%] text-accent/20"
      >
        <FiStar size={64} />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2 }}
        animate={{
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-[10%] md:right-[15%] text-primary-600/20"
      >
        <FiBook size={80} />
      </motion.div>
      <motion.div
        style={{ x: x3, y: y3 }}
        animate={{
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-[85%] md:left-[80%] text-green-400/20"
      >
        <FiActivity size={56} />
      </motion.div>
      <motion.div
        style={{ x: x4, y: y4 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-[25%] md:right-[30%] text-rose-400/20"
      >
        <FiHeart size={48} />
      </motion.div>

      {/* Floating orbs for extra new-gen feel */}
      <motion.div
        style={{ x: x2, y: y1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"
      />
      <motion.div
        style={{ x: x1, y: y2 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
        >
          Are you a parent looking for the{" "}
          <span className="text-accent relative inline-block">
            best school
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5.5C52.5 -1.5 148.5 -1.5 197.5 5.5"
                stroke="#f43f5e"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          for your kid?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white pointer-events-auto"
        >
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 font-medium">
            One that provides{" "}
            <span className="text-primary-600 font-bold">
              top-tier academics
            </span>{" "}
            in a <span className="text-accent font-bold">stress-free</span>{" "}
            learning environment while enhancing their critical thinking
            capacity, creativity, language fluency, soft skills, arts, and
            sports, all while building good character?
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-2xl md:text-3xl font-black text-slate-900 mb-8">
              Then you are in the right place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block bg-primary-50/80 text-primary-900 px-6 py-5 rounded-2xl border border-primary-100 shadow-inner"
          >
            <p className="text-base md:text-lg leading-relaxed font-semibold">
              Welcome to{" "}
              <span className="text-primary-700 font-black">
                BE MAX Kids & Public School
              </span>
              , a pioneering project of the BE MAX Group of Institutions. We are
              dedicated to providing an integrated educational environment where
              joy and innovation meet.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParentAppeal;
