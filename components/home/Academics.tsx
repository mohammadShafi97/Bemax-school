"use client";

import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiGlobe } from 'react-icons/fi';

export default function Academics() {
  return (
    <section id="academics" className="py-32 bg-primary-900 relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Academic <span className="text-accent">Excellence</span></h2>
          <p className="text-primary-200 text-xl font-medium max-w-2xl mx-auto mt-6">
            A comprehensive educational journey from early childhood to young adulthood, designed to maximize student potential under the BE MAX syllabus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Program 1 */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
           >
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/50">
                 <FiBookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Kindergarten</h3>
              <p className="text-primary-100 text-lg">Focuses on sensory development, play-based learning, and foundational social skills exclusively with custom English Garden books.</p>
           </motion.div>

           {/* Program 2 */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
           >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                 <FiUsers size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Primary & Middle</h3>
              <p className="text-primary-100 text-lg">Building strong academic fundamentals while encouraging curiosity, stress-free learning, and hands-on activities.</p>
           </motion.div>

           {/* Program 3 */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
           >
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/50">
                 <FiGlobe size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secondary School</h3>
              <p className="text-primary-100 text-lg">Rigorous preparation for university, focusing on leadership, specialized subjects, and global language readiness.</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
