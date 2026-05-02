"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-50 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full aspect-[4/5] lg:aspect-auto lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-primary-600/10 rounded-[3rem] transform -rotate-3 scale-105 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="School Building" 
              className="relative rounded-[3rem] shadow-2xl object-cover h-full w-full z-10"
            />
            <div className="absolute -bottom-8 -right-8 glass-dark p-8 rounded-3xl z-20 shadow-2xl hidden md:block backdrop-blur-xl bg-primary-900/90 max-w-[250px]">
              <p className="text-xl font-bold text-white leading-snug">Empowering minds with legacy.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Our <span className="text-primary-600">Story.</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              Established with a vision to create a conducive environment for holistic learning, BE MAX KIDS & PUBLIC SCHOOL focuses on nurturing self-reliant, confident, and responsible global citizens.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We blend traditional moral values with a progressive, modern curriculum. Our educators are dedicated to finding and polishing the unique potential hidden within every child, ensuring they are fully equipped for the challenges of tomorrow.
            </p>
            <div className="pt-4 flex gap-8">
               <div>
                  <h4 className="text-4xl font-black text-accent drop-shadow-sm mb-1">1L+</h4>
                  <span className="font-semibold text-slate-500 uppercase tracking-widest text-sm">Alumni</span>
               </div>
               <div>
                  <h4 className="text-4xl font-black text-primary-600 drop-shadow-sm mb-1">50+</h4>
                  <span className="font-semibold text-slate-500 uppercase tracking-widest text-sm">Expert Faculty</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
