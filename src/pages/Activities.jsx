import React from 'react';
import { motion } from 'framer-motion';

const ActivitySection = ({ title, description, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16 border-b border-slate-100 last:border-0`}>
    <motion.div 
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="md:w-1/2"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-lg text-slate-600">{description}</p>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="md:w-1/2 w-full aspect-[4/3] bg-slate-100 rounded-2xl shadow-inner flex items-center justify-center text-slate-400 font-medium"
    >
      [ {title} Image ]
    </motion.div>
  </div>
);

const Activities = () => {
  return (
    <div className="pt-8 pb-20">
      <section className="bg-brand-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Extra Activities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg"
          >
            Nurturing talents beyond textbooks.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ActivitySection 
          title="Sports and Physical Education" 
          description="Physical activity is crucial for growing children. We have regular PE classes, outdoor games, and a safe playground to ensure students remain active and healthy. Basic coaching in athletics and team games is provided to build teamwork."
        />
        <ActivitySection 
          title="Arts & Crafts" 
          description="Creativity knows no bounds. Our arts programs let children experiment with colors, materials, and their imagination, improving their fine motor skills and creative expression."
          reverse
        />
        <ActivitySection 
          title="Music & Dance" 
          description="Rhythm and movement are essential for cognitive development. Students learn basic vocals, rhymes, and simple dance routines, fostering confidence and a sense of cultural appreciation."
        />
        <ActivitySection 
          title="Club Activities" 
          description="We run various mini-clubs - Eco Club, Reading Club, and Science Explorers - where students engage in hands-on activities, from planting seeds to conducting simple, safe experiments."
          reverse
        />
      </section>
    </div>
  );
};

export default Activities;
