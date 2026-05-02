"use client";

import { motion } from 'framer-motion';
import { FaBuilding, FaFlask, FaBookReader, FaLandmark, FaStethoscope } from 'react-icons/fa';
import { FiMusic } from 'react-icons/fi';

export default function Facilities() {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">World-Class <span className="text-accent relative inline-block">Facilities<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.5C52.5 -1.5 148.5 -1.5 197.5 5.5" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round"/></svg></span></h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto mt-8">
            Our campus is equipped with state-of-the-art amenities to stimulate learning, creativity, and physical health.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[
            { id: 1, icon: FaBuilding, title: 'Smart Classrooms', desc: 'Interactive panels and modern learning tools connected to the cloud.', color: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' },
            { id: 2, icon: FaFlask, title: 'Science Labs', desc: 'Fully equipped physics, chemistry, and biology labs for hands-on learning.', color: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' },
            { id: 3, icon: FaBookReader, title: 'Intl. Library', desc: 'Over 10,000+ volumes of diverse books and extensive digital media.', color: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' },
            { id: 4, icon: FaLandmark, title: 'Sports Complex', desc: 'Indoor & outdoor stadiums designed for holistic physical growth.', color: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' },
            { id: 5, icon: FaStethoscope, title: 'Health Clinic', desc: 'Dedicated school nurse and state-of-the-art nutritional labs.', color: 'bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' },
            { id: 6, icon: FiMusic, title: 'Arts & Music Studio', desc: 'Fostering creativity, emotional expression, and artistic mastery.', color: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white' }
          ].map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white p-10 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 text-left cursor-pointer"
            >
              <div className={`w-16 h-16 ${facility.color} transition-colors duration-500 rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                <facility.icon size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{facility.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
