"use client";

import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe } from 'react-icons/fi';
import { FaBookReader } from 'react-icons/fa';

export default function Legacy() {
  return (
    <section id="legacy" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Backed by an <span className="text-primary-600">Educational Giant</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto mt-6 leading-relaxed">
            When you choose BE MAX KIDS & PUBLIC SCHOOL, you aren't just choosing a school; you are stepping into a legacy of unparalleled excellence. As a proud initiative of the Bemax Group of Institutions, we bring world-class, premium education to your child at a highly affordable fee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "12+ Years", subtitle: "of Excellence", desc: "Unchallenged leadership in the education sector.", icon: FiAward },
            { title: "1 Lakh+", subtitle: "Global Winners", desc: "Successfully molded over 100,000 professionals worldwide.", icon: FiUsers },
            { title: "Elite", subtitle: "Partnerships", desc: "Proud partners of IDP IELTS, British Council, and Pearson (PTE).", icon: FiGlobe },
            { title: "Premium", subtitle: "Education", desc: "AI classrooms and international language training without financial stress.", icon: FaBookReader }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-primary-50 p-8 rounded-[2rem] border border-primary-100/50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <stat.icon size={30} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.title}</h3>
              <h4 className="text-lg font-bold text-accent mb-3">{stat.subtitle}</h4>
              <p className="text-slate-600 font-medium leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
