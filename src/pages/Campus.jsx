import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Book, Palette, Bus } from 'lucide-react';

const FacilityCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-6 rounded-2xl shadow border border-slate-100 flex flex-col items-start"
  >
    <div className="p-3 bg-red-50 text-brand-red rounded-xl mb-4">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </motion.div>
);

const Campus = () => {
  return (
    <div className="pt-8 pb-20">
      <section className="bg-brand-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Campus Facilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg"
          >
            Safe, engaging, and equipped for modern learning.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Second Home for Your Child</h2>
            <p className="text-lg text-slate-600 mb-4">
              Our campus is designed specifically keeping LP students (Classes 1-4) in mind. The infrastructure emphasizes safety, hygiene, and an engaging atmosphere to make learning fun.
            </p>
            <p className="text-lg text-slate-600">
              Bright, airy classrooms and vast play areas provide the perfect setting for young minds to explore and express themselves freely.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video bg-slate-100 rounded-2xl shadow-inner flex items-center justify-center text-slate-400 font-medium"
          >
            [ Campus Overview Image ]
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FacilityCard 
            icon={Monitor} 
            title="Smart Classrooms" 
            description="Interactive whiteboards and digital learning tools to make subjects come alive." 
            delay={0.1} 
          />
          <FacilityCard 
            icon={Book} 
            title="Kids Library" 
            description="A vast collection of storybooks, pictorial dictionaries, and early reading materials." 
            delay={0.2} 
          />
          <FacilityCard 
            icon={Palette} 
            title="Activity Room" 
            description="Dedicated space for arts, crafts, music, and indoor educational games." 
            delay={0.3} 
          />
          <FacilityCard 
            icon={Bus} 
            title="Safe Transport" 
            description="GPS-enabled school buses covering major routes with attendant staff." 
            delay={0.4} 
          />
        </div>
      </section>
    </div>
  );
};

export default Campus;
