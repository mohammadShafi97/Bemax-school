"use client";

import { motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';
import { FaRobot, FaBrain } from 'react-icons/fa';

export default function Difference() {
  return (
    <section id="difference" className="py-32 bg-primary-50/50 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Why Parents Love <span className="text-accent relative inline-block mt-2">BEMAX<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.5C52.5 -1.5 148.5 -1.5 197.5 5.5" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round"/></svg></span>
          </h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
            We proactively solve the biggest challenges in modern parenting and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              quote: "I worry about my child's English.",
              solution: "With daily AI-generated podcast homework, ELSAP training, and IELTS experts, your child will speak with international fluency and zero hesitation.",
              icon: FiGlobe,
              color: "text-blue-600"
            },
            {
              quote: "I hate the morning transportation rush.",
              solution: "Our massive 25-km transport radius with dedicated on-board caretakers gives you complete morning peace of mind.",
              icon: FaRobot,
              color: "text-emerald-600"
            },
            {
              quote: "My child is stressed by endless homework.",
              solution: "Our activity-oriented classrooms teach concepts deeply during school hours, leaving home time for family and play.",
              icon: FaBrain,
              color: "text-orange-600"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative group"
            >
               <div className="absolute top-0 right-10 -translate-y-1/2 w-14 h-14 bg-white border border-slate-100 text-accent rounded-full flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-6 italic border-l-4 border-accent pl-4 pr-4 leading-snug">
                 "{item.quote}"
               </h3>
               <p className="text-lg text-slate-600 font-medium leading-relaxed">
                 <strong className={item.color}>We fix that.</strong> {item.solution}
               </p>
            </motion.div>
          ))}
        </div>
       </div>
    </section>
  );
}
