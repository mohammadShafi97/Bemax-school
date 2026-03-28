import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Sparkles } from 'lucide-react';

const Academics = () => {
  return (
    <div className="pt-8 pb-20">
      <section className="bg-brand-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Academics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg"
          >
            A robust curriculum designed for holistic early childhood development.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Learning Structure (LP 1 to 4)</h2>
          <p className="text-lg text-slate-600">
            Our academic structure focuses on foundational literacy, numeracy, and environmental awareness, integrated with fun, play-based pedagogical methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((grade) => (
            <motion.div 
              key={`grade-${grade}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-blue hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 text-brand-blue p-3 rounded-xl flex-shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 ml-4">Standard {grade}</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                  <span>Foundational Language Skills (English, Malayalam)</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic Core Mathematics & Logical Reasoning</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                  <span>Environmental Science & General Awareness</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                  <span>Interactive Art, Craft, and Moral Science</span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="bg-slate-50 py-20 mt-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Teaching Methodology</h2>
              <p className="text-slate-600 text-lg mb-6">
                We believe that children learn best when they are actively engaged. Our teachers act as facilitators, guiding students through interactive lessons, group activities, and experiential learning processes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                  Play-way Method
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                  Activity-based Learning
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                  Continuous and Comprehensive Evaluation (CCE)
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 aspect-video bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 font-medium"
            >
              [ Classroom Activity Image ]
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
