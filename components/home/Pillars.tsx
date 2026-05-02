"use client";

import { motion } from 'framer-motion';
import { FaBrain, FaRunning } from 'react-icons/fa';
import { FiCheckCircle, FiGlobe, FiShield, FiArrowRight } from 'react-icons/fi';

export default function Pillars() {
  return (
    <section id="pillars" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            The BEMAX Vision:<br/> <span className="text-primary-600 mt-2 block">Shaping the Future, Protecting Childhood</span>
          </h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto mt-6">
            Our curriculum is designed to solve the biggest worries of modern parenting: heavy homework, screen addiction, and safety.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
           {/* Pillar 1 */}
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 relative w-full"
             >
                <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                   <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Stress Free Learning" className="object-cover w-full h-full" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 text-white font-bold text-lg shadow-xl">
                         AI-Powered Smart Campus
                      </div>
                   </div>
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 space-y-6"
             >
               <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                 <FaBrain size={30} />
               </div>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">1. Stress-Free Academic Excellence</h2>
               <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                 We replace rote memorization with hands-on, activity-based CBSE learning in an AI-powered smart campus.
               </p>
               <ul className="space-y-4 pt-2">
                 {[
                   <><strong className="text-slate-900">Flawless Foundation:</strong> Expert Jolly Phonics training from LKG all the way to Class 5.</>,
                   <><strong className="text-slate-900">No Burnout:</strong> A strict "Less Homework, More Productivity" policy so kids can enjoy their evenings.</>,
                   <><strong className="text-slate-900">Tech-Driven:</strong> STEM Robotics, AI Smart Classrooms, and an International Library.</>
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-blue-200">
                     <FiCheckCircle className="text-blue-500 shrink-0 mt-1" size={24} />
                     <span className="text-slate-700 text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
             </motion.div>
           </div>

           {/* Pillar 2 */}
           <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 relative w-full"
             >
                <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                   <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Multi-Language Fluency" className="object-cover w-full h-full" />
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 space-y-6"
             >
               <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                 <FiGlobe size={30} />
               </div>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">2. Global Multi-Language Fluency</h2>
               <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                 <strong className="text-emerald-700 bg-emerald-100 px-2 py-1 rounded inline-block mb-2 text-sm uppercase tracking-wider">Our Biggest USP</strong><br/>
                 We don't just teach the syllabus; we create highly confident polyglots.
               </p>
               <ul className="space-y-4 pt-2">
                 {[
                   <><strong className="text-slate-900">Driven by Experts:</strong> Fluency programs spearheaded by in-house IELTS trainers.</>,
                   <><strong className="text-slate-900">Start Early:</strong> Custom English Garden KG books published exclusively by Bemax.</>,
                   <><strong className="text-slate-900">Conquer Stage Fright:</strong> Daily 30-minute speaking sessions and a student-run School FM Radio.</>,
                   <><strong className="text-slate-900">Beyond English:</strong> Free professional German (A1-B2), Hindi, and optional Arabic training.</>
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-emerald-200">
                     <FiCheckCircle className="text-emerald-500 shrink-0 mt-1" size={24} />
                     <span className="text-slate-700 text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
             </motion.div>
           </div>

           {/* Pillar 3 */}
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 relative w-full"
             >
                <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                   <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop" alt="Physical Development" className="object-cover w-full h-full" />
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 space-y-6"
             >
               <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                 <FaRunning size={30} />
               </div>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">3. Holistic Skill & Physical Development</h2>
               <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                 We actively replace digital screen time with real-world action, building physically tough and mentally sharp leaders.
               </p>
               <ul className="space-y-4 pt-2">
                 {[
                   <><strong className="text-slate-900">Free In-House Training:</strong> Yoga, Abacus, Music, Dance, and Arts built into the curriculum.</>,
                   <><strong className="text-slate-900">Premium Sports:</strong> Expert-led Karate, Swimming, Skating, and elite Horse Riding.</>,
                   <><strong className="text-slate-900">100% Participation:</strong> A strict 'No Partiality' policy where every single child performs on stage.</>
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-orange-200">
                     <FiCheckCircle className="text-orange-500 shrink-0 mt-1" size={24} />
                     <span className="text-slate-700 text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
             </motion.div>
           </div>

           {/* Pillar 4 */}
           <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 relative w-full"
             >
                <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                   <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Total Safety" className="object-cover w-full h-full" />
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="lg:w-1/2 space-y-6"
             >
               <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                 <FiShield size={30} />
               </div>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">4. Character, Discipline & Total Safety</h2>
               <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                 Academic brilliance means nothing without a strong moral compass.
               </p>
               <ul className="space-y-4 pt-2">
                 {[
                   <><strong className="text-slate-900">A Home Away From Home:</strong> Our teachers and caretakers act as your child's extended family.</>,
                   <><strong className="text-slate-900">Unmatched Protection:</strong> Dedicated School Psychologist, strict anti-abuse awareness, and profound family value education.</>,
                   <><strong className="text-slate-900">Stress-Free Commute:</strong> Safe, highly secure school buses covering a 25-km radius, with caretakers on every single bus to ensure doorstep-to-school safety.</>
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-rose-200">
                     <FiCheckCircle className="text-rose-500 shrink-0 mt-1" size={24} />
                     <span className="text-slate-700 text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
               
               <div className="pt-8">
                 <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary-600/30 hover:-translate-y-1 hover:bg-primary-700 transition-all flex items-center gap-2">
                   Explore Our Curriculum in Detail <FiArrowRight size={20} />
                 </button>
               </div>
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
