import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Page Header */}
      <section className="bg-brand-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg"
          >
            Discover our rich history and our dedication to providing the
            maximum learning experience.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-slate-600"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <p>
              ABCD School was established with a singular vision: to impart
              quality education combined with moral values, ensuring a holistic
              development pattern for our young students. Based in California,
              USA, we are an LP school catering to classes 1 to 4.
            </p>
            <p className="mt-4">
              We believe that early childhood education forms the bedrock of a
              child's character and intellectual capacity. Thus, we have
              designed a rich curriculum that blends traditional values with
              modern pedagogical techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center text-slate-400 font-medium shadow-inner relative overflow-hidden"
          >
            [ School Building Image ]
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue"
          >
            <Eye className="w-12 h-12 text-brand-blue mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600">
              To be a beacon of educational excellence in California, fostering
              bright, curious, and compassionate individuals who are
              well-equipped to face the challenges of tomorrow with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-red"
          >
            <Target className="w-12 h-12 text-brand-red mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600">
              To provide the "Ultimate Learning" through a supportive
              environment, dedicated educators, and comprehensive programs that
              cater to intellectual, emotional, and social growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 relative">
          <Award className="absolute top-8 right-8 w-16 h-16 text-blue-100" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Message from the Principal
          </h2>
          <blockquote className="text-lg italic text-slate-600 border-l-4 border-brand-blue pl-6 mb-6">
            "Education is not just about the transfer of knowledge; it's about
            igniting a lifelong passion for discovery. At ABCD, we strive to
            make every day a new learning adventure for our children, ensuring
            they build a strong foundation for their future."
          </blockquote>
          <div>
            <p className="font-bold text-slate-900">- Principal's Name</p>
            <p className="text-sm text-slate-500">ABCD School</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
