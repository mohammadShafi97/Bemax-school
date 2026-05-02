"use client";

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">Get In <span className="text-primary-600">Touch</span></h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto mt-4">
            Have questions about admissions or want to schedule a campus tour? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Contact Info */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-10"
           >
              <div className="flex items-start gap-6 group">
                 <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <FiMapPin size={26} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Campus Location</h4>
                    <p className="text-slate-600 text-lg">123 Education Boulevard,<br/>Knowledge City, Kerala, 12345</p>
                 </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <FiPhone size={26} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Phone</h4>
                    <p className="text-slate-600 text-lg">+91 98765 43210<br/>+91 98765 43211</p>
                 </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <FiMail size={26} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Email</h4>
                    <p className="text-slate-600 text-lg">admissions@bemax.edu<br/>info@bemax.edu</p>
                 </div>
              </div>
           </motion.div>

           {/* Form */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#f8fafc] p-10 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
              
              <form className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">First Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Last Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Doe" />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="I would like to enquire about..."></textarea>
                 </div>

                 <button type="button" className="w-full bg-primary-600 text-white font-bold text-lg py-5 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 mt-4">
                   Submit Enquiry <FiArrowRight size={20} />
                 </button>
              </form>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
