import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Trophy, ChevronRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    variants={fadeIn}
    className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
  >
    <div className="h-16 w-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600 mb-4 flex-grow">{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left z-10"
            >
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-brand-blue font-medium text-sm mb-6 border border-blue-100"
              >
                <span className="flex h-2 w-2 rounded-full bg-brand-red mr-2"></span>
                Admissions Open for 2026-27
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
              >
                The Great <br />
                <span className="text-brand-blue">Lorem</span> Ipsum
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Welcome to ABCD School, where we nurture young minds from LP 1
                to 4 with a blend of modern academics and holistic
                extracurriculars.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-xl font-bold text-white bg-brand-blue hover:bg-blue-800 shadow-lg hover:shadow-blue-900/20 transition-all flex items-center justify-center"
                >
                  Discover Our School
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl font-bold text-brand-blue bg-white border-2 border-slate-200 hover:border-brand-blue hover:bg-blue-50 transition-all text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image/Graphic Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-blue-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red to-red-400 rounded-3xl transform -rotate-3 opacity-20"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                    [ School Kids Learning Image ]
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 h-16 w-16 bg-blue-100 rounded-full mix-blend-multiply opacity-70 blur-xl"></div>
                  <div className="absolute bottom-4 right-4 h-24 w-24 bg-red-100 rounded-full mix-blend-multiply opacity-70 blur-xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative path */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose ABCD?
            </h2>
            <p className="text-lg text-slate-600">
              We provide an environment that fosters creativity, critical
              thinking, and character building during the most crucial early
              years of education.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={BookOpen}
              title="Modern Curriculum"
              description="Our comprehensive syllabus focuses on interactive and conceptual learning tailored for growing minds."
            />
            <FeatureCard
              icon={Users}
              title="Expert Faculty"
              description="Highly experienced and caring teachers dedicated to nurturing your child's individual potential."
            />
            <FeatureCard
              icon={Trophy}
              title="Holistic Activities"
              description="A balanced mix of sports, arts, and cultural activities to ensure all-round student development."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mx-4 sm:mx-6 lg:mx-8 mb-20 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-blue"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-red opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Give Your Child The Best Start
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Admissions are now open for LP 1 to 4. Join the family today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 rounded-xl font-bold text-brand-blue bg-white hover:bg-slate-50 transition-colors shadow-xl"
          >
            Apply For Admission Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
