"use client";

import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { FiCpu, FiMonitor, FiCode, FiBook, FiGlobe, FiSmile, FiBookOpen } from "react-icons/fi";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className="overflow-hidden">
      <Hero
        title={"Future-Ready Learning,\nPowered by Joy."}
        subtitle="At BE MAX Public School, we don't just teach the syllabus; we prepare students for the digital world. Experience a stress-free, student-centered curriculum that blends traditional academic rigor with futuristic Artificial Intelligence."
        primaryAction={{ text: "Apply for Admissions", href: "/admissions" }}
      />

      <Section title="Classrooms of the Future" subtitle="We are proud to be Kollam's pioneer in introducing next-generation educational technology directly into the daily curriculum. We merge traditional learning with modern technology for an all-rounded education." bg="slate">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard delay={0.1} className="flex flex-col">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">My Talking Tree</h3>
            <p className="text-slate-600 text-sm flex-grow">
              Say hello to our AI-integrated robotic tree that brings joy and interactivity to children's learning. This tree engages children with fun educational content by seamlessly connecting to the screen. It serves as a dynamic learning platform that can be personalized.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="flex flex-col">
            <div className="text-4xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">The Magik Mat</h3>
            <p className="text-slate-600 text-sm flex-grow">
              Moving beyond traditional desks, the Magik Mat enhances learning with fun educational games focused on numbers and the alphabet. By jumping on letters, children solve quizzes that foster mind-body coordination.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="flex flex-col">
            <div className="text-4xl mb-4 text-primary-500"><FiMonitor /></div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Smart Classrooms</h3>
            <p className="text-slate-600 text-sm flex-grow">
              Experience education in Smart Classrooms equipped with the latest interactive panels that transform traditional lessons into engaging interactive sessions.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.4} className="flex flex-col">
            <div className="text-4xl mb-4 text-accent"><FiCpu /></div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Robotics & Coding</h3>
            <p className="text-slate-600 text-sm flex-grow">
              We prepare students for the future with robotics and coding programs designed to teach essential technical skills, encouraging innovation and creativity from an early age.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.5} className="flex flex-col lg:col-span-2">
            <div className="text-4xl mb-4 text-primary-600"><FiCode /></div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Advanced Computer Lab</h3>
            <p className="text-slate-600 text-sm">
              Our Computer Lab provides comprehensive training from basic to advanced computing skills, ensuring students are tech-savvy and future-ready. We believe in practical, hands-on digital literacy.
            </p>
          </AnimatedCard>
        </div>
      </Section>

      <Section title="A Holistic, Activity-Oriented Approach" bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0"><FiBook /></div>
              <div>
                <h4 className="font-bold text-slate-900">Holistic Curriculum</h4>
                <p className="text-sm text-slate-600 mt-1">We dive deep into enhancing each student's knowledge, fostering critical thinking skills, and developing problem-solving techniques.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0"><FiSmile /></div>
              <div>
                <h4 className="font-bold text-slate-900">Activity-Oriented Learning</h4>
                <p className="text-sm text-slate-600 mt-1">Learning comes alive through hands-on experiences, helping students grasp concepts better and encouraging active participation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">Aa</div>
              <div>
                <h4 className="font-bold text-slate-900">Jolly Phonics & Cursive Writing</h4>
                <p className="text-sm text-slate-600 mt-1">We develop phonetic understanding through Jolly Phonics. Fine motor skills are fostered with cursive letter writing classes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">∑</div>
              <div>
                <h4 className="font-bold text-slate-900">Maths & Science Labs</h4>
                <p className="text-sm text-slate-600 mt-1">We build strong mathematical foundations through an advanced Maths Lab and Abacus training, alongside state-of-the-art Science Lab experiments.</p>
              </div>
            </div>
          </div>
          <div className="h-[500px] bg-slate-200 rounded-[2rem] flex items-center justify-center text-slate-400">
             [ Activity Learning Image ]
          </div>
        </div>
      </Section>

      <Section title="Mastering Global Communication" bg="primary">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary-100 text-lg">
            Communication is key in a global world. At BE MAX, we ensure our students speak with confidence and international flair, guided by our TESOL and CELTA certified teachers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
            <FiGlobe className="text-accent text-3xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Multi-Foreign Language Training</h3>
            <p className="text-primary-100 text-sm">
              Our program includes English, German, Arabic, and French, ensuring students gain proficiency and cultural understanding in each language.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
            <div className="text-accent text-2xl font-black mb-4">ELSAP</div>
            <h3 className="text-xl font-bold text-white mb-3">English Language Skill Acceleration</h3>
            <p className="text-primary-100 text-sm">
              Elevate English proficiency with this exclusive program, crafted by the IELTS department of BEMAX. Features one-on-one speaking sessions.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
            <FiBookOpen className="text-accent text-3xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Native Language Clubs</h3>
            <p className="text-primary-100 text-sm">
              Alongside our global languages, specialized Malayalam and Hindi clubs cultivate language proficiency, enhancing communication skills in native dialects.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Beyond the Textbook" subtitle="Cultivating Intellect and Character" bg="slate">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <AnimatedCard hoverEffect="lift">
            <div className="text-4xl mb-4 text-primary-600 flex justify-center"><FiBookOpen /></div>
            <h4 className="font-bold text-slate-900 mb-2">International Library</h4>
            <p className="text-sm text-slate-600">Hosting thousands of books across genres to nurture reading habits and reduce screen time.</p>
          </AnimatedCard>
          <AnimatedCard hoverEffect="lift">
            <div className="text-4xl mb-4 text-accent flex justify-center">❤️</div>
            <h4 className="font-bold text-slate-900 mb-2">Moral Classes</h4>
            <p className="text-sm text-slate-600">Highlighting the importance of social responsibility and family relationships, guiding students to become compassionate.</p>
          </AnimatedCard>
          <AnimatedCard hoverEffect="lift">
            <div className="text-4xl mb-4 text-primary-600 flex justify-center">🏫</div>
            <h4 className="font-bold text-slate-900 mb-2">Special Evening Clubs</h4>
            <p className="text-sm text-slate-600">Dedicated clubs offer specialized support to students with learning difficulties toward academic excellence.</p>
          </AnimatedCard>
        </div>
        
        <div className="mt-16 text-center">
           <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to Experience the BE MAX Difference?</h3>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/admissions" className="bg-accent text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all">
               Apply for Admissions Now
             </Link>
             <Link href="/beyond-academics" className="bg-white text-slate-800 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all">
               View Extracurricular Activities
             </Link>
           </div>
        </div>
      </Section>
    </div>
  );
}
