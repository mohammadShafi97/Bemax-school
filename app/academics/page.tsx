"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  FiCpu,
  FiMonitor,
  FiCode,
  FiBook,
  FiGlobe,
  FiSmile,
  FiBookOpen,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function AcademicsPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        imagePath="/smart.jpg"
        title={"Future-Ready Learning,\nPowered by Joy."}
        subtitle="At BE MAX Public School, we don't just teach the syllabus; we prepare students for the digital world. Experience a stress-free, student-centered curriculum that blends traditional academic rigor with futuristic Artificial Intelligence."
        primaryAction={{ text: "Apply for Admissions", href: "/admissions" }}
      />

      <Section
        title="Classrooms of the Future"
        subtitle="We are proud to be Kollam's pioneer in introducing next-generation educational technology directly into the daily curriculum. We merge traditional learning with modern technology for an all-rounded education."
        bg="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard
            delay={0.1}
            className="relative overflow-hidden flex flex-col min-h-[380px] group border-none shadow-xl"
            hoverEffect="lift"
          >
            <Image
              src="/tree.webp"
              alt="My Talking Tree"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="relative z-10 flex flex-col h-full grow justify-end text-white">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">🌳</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                My Talking Tree
              </h3>
              <p className="text-slate-200 text-sm grow leading-relaxed">
                Say hello to our AI-integrated robotic tree that brings joy and
                interactivity to children's learning. This tree engages children
                with fun educational content by seamlessly connecting to the
                screen. It serves as a dynamic learning platform that can be
                personalized.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.2}
            className="relative overflow-hidden flex flex-col min-h-[380px] group border-none shadow-xl"
            hoverEffect="lift"
          >
            <Image
              src="/mat.jpg"
              alt="The Magik Mat"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="relative z-10 flex flex-col h-full grow justify-end text-white">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">🏃‍♂️</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                The Magik Mat
              </h3>
              <p className="text-slate-200 text-sm grow leading-relaxed">
                Moving beyond traditional desks, the Magik Mat enhances learning
                with fun educational games focused on numbers and the alphabet. By
                jumping on letters, children solve quizzes that foster mind-body
                coordination.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.3}
            className="relative overflow-hidden flex flex-col min-h-[380px] group border-none shadow-xl"
            hoverEffect="lift"
          >
            <Image
              src="/smart.jpg"
              alt="Smart Classrooms"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="relative z-10 flex flex-col h-full grow justify-end text-white">
              <div className="text-4xl mb-4 text-primary-300 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                <FiMonitor />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Smart Classrooms
              </h3>
              <p className="text-slate-200 text-sm grow leading-relaxed">
                Experience education in Smart Classrooms equipped with the latest
                interactive panels that transform traditional lessons into
                engaging interactive sessions.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.4}
            className="relative overflow-hidden flex flex-col min-h-[380px] group border-none shadow-xl"
            hoverEffect="lift"
          >
            <Image
              src="/robotics.jpg"
              alt="Robotics & Coding"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="relative z-10 flex flex-col h-full grow justify-end text-white">
              <div className="text-4xl mb-4 text-accent transform group-hover:scale-110 transition-transform duration-300 origin-left">
                <FiCpu />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Robotics & Coding
              </h3>
              <p className="text-slate-200 text-sm grow leading-relaxed">
                We prepare students for the future with robotics and coding
                programs designed to teach essential technical skills, encouraging
                innovation and creativity from an early age.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.5}
            className="relative overflow-hidden flex flex-col lg:col-span-2 min-h-[380px] group border-none shadow-xl"
            hoverEffect="lift"
          >
            <Image
              src="/activity.jpg"
              alt="Advanced Computer Lab"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="relative z-10 flex flex-col h-full grow justify-end text-white">
              <div className="text-4xl mb-4 text-primary-300 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                <FiCode />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Advanced Computer Lab
              </h3>
              <p className="text-slate-200 text-sm grow leading-relaxed">
                Our Computer Lab provides comprehensive training from basic to
                advanced computing skills, ensuring students are tech-savvy and
                future-ready. We believe in practical, hands-on digital literacy.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      <Section title="A Holistic, Activity-Oriented Approach" bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                <FiBook />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Holistic Curriculum
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  We dive deep into enhancing each student's knowledge,
                  fostering critical thinking skills, and developing
                  problem-solving techniques.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <FiSmile />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Activity-Oriented Learning
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Learning comes alive through hands-on experiences, helping
                  students grasp concepts better and encouraging active
                  participation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                Aa
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Jolly Phonics & Cursive Writing
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  We develop phonetic understanding through Jolly Phonics. Fine
                  motor skills are fostered with cursive letter writing classes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                ∑
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Maths & Science Labs
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  We build strong mathematical foundations through an advanced
                  Maths Lab and Abacus training, alongside state-of-the-art
                  Science Lab experiments.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[500px] bg-slate-200 overflow-hidden relative rounded-2xl flex items-center justify-center text-slate-400">
            <Image
              src="/activity.jpg"
              alt="Smart Ecosystem"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Section>

      <Section title="Mastering Global Communication" bg="primary">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary-100 text-lg">
            Communication is key in a global world. At BE MAX, we ensure our
            students speak with confidence and international flair, guided by
            our TESOL and CELTA certified teachers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
            <FiGlobe className="text-accent text-3xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Multi-Foreign Language Training
            </h3>
            <p className="text-primary-100 text-sm">
              Our program includes English, German, Arabic, and French, ensuring
              students gain proficiency and cultural understanding in each
              language.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
            <div className="text-accent text-2xl font-black mb-4">ELSAP</div>
            <h3 className="text-xl font-bold text-white mb-3">
              English Language Skill Acceleration
            </h3>
            <p className="text-primary-100 text-sm">
              Elevate English proficiency with this exclusive program, crafted
              by the IELTS department of BEMAX. Features one-on-one speaking
              sessions.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
            <FiBookOpen className="text-accent text-3xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Native Language Clubs
            </h3>
            <p className="text-primary-100 text-sm">
              Alongside our global languages, specialized Malayalam and Hindi
              clubs cultivate language proficiency, enhancing communication
              skills in native dialects.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Jolly Phonics: The Joy of Reading"
        subtitle="A child-centered, multi-sensory approach to reading and writing that builds core phonics skills in a fun and active way."
        bg="white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="h-[450px] relative rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/jolly_phonics.png"
              alt="Jolly Phonics Classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay card edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div className="prose prose-slate">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Empowering Early Readers
              </h3>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Jolly Phonics is a globally-renowned, multi-sensory program that teaches children how to read and write using synthetic phonics. Rather than memorizing words, children learn the letter sounds, enabling them to decode any word they encounter.
              </p>
            </div>

            {/* Phonics Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-3">1</div>
                <h4 className="font-bold text-slate-900 text-base">42 Letter Sounds</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Learning the 42 letter sounds, taught in 7 groups through actions and songs.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-3">2</div>
                <h4 className="font-bold text-slate-900 text-base">Letter Formation</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Using multi-sensory methods to guide fine motor control for cursive writing.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-3">3</div>
                <h4 className="font-bold text-slate-900 text-base">Blending Sounds</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Combining sounds to easily decode and read unfamiliar words.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-3">4</div>
                <h4 className="font-bold text-slate-900 text-base">Segmenting Words</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Hearing individual sounds in words to spell them accurately.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-primary-50 border border-primary-100/30 flex gap-4 items-center">
              <div className="text-3xl">🗣️</div>
              <div>
                <h4 className="font-bold text-primary-900 text-sm">International Standard Learning</h4>
                <p className="text-xs text-primary-700 mt-0.5">
                  Integrated directly into our primary classes with guidance from TESOL & IELTS specialized teachers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Find Your Circle: Our Clubs"
        subtitle="Unleash your potential, connect with peers, and level up your skills in our student-led clubs."
        bg="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Malayalam Club */}
          <AnimatedCard
            delay={0.05}
            hoverEffect="glow"
            className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl filter drop-shadow-lg">✍️</span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 shadow-inner">
                Linguistic & Culture
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-accent transition-colors">
              Malayalam Club
            </h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Explore the beauty of Kerala's heritage, literature, and poetry. Cultivate native speaking eloquence, creative writing, and local pride.
            </p>
          </AnimatedCard>

          {/* English Club */}
          <AnimatedCard
            delay={0.1}
            hoverEffect="glow"
            className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl filter drop-shadow-lg">🎤</span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 shadow-inner">
                Global Fluency
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-sky-300 transition-colors">
              English Club
            </h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Master debate, presentation skills, and fluency. Spearheaded by IELTS mentors to ensure confident public speaking.
            </p>
          </AnimatedCard>

          {/* Special Evening Clubs */}
          <AnimatedCard
            delay={0.15}
            hoverEffect="glow"
            className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl filter drop-shadow-lg">🌙</span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-500/20 text-violet-200 border border-violet-400/30 shadow-inner">
                Academic Support
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-violet-300 transition-colors">
              Special Evening Clubs
            </h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Dedicated coaching support in math, science labs, and homework check-ins, creating a collaborative environment after hours.
            </p>
          </AnimatedCard>

          {/* Sports Club */}
          <AnimatedCard
            delay={0.2}
            hoverEffect="glow"
            className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl filter drop-shadow-lg">🏆</span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-green-500/20 text-green-200 border border-green-400/30 shadow-inner">
                Athletic Elite
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-green-300 transition-colors">
              Sports Club
            </h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Focus on physical agility, fitness, team tactics, and active tournament training for football, cricket, and swimming.
            </p>
          </AnimatedCard>

          {/* Arts Club */}
          <AnimatedCard
            delay={0.25}
            hoverEffect="glow"
            className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl filter drop-shadow-lg">🎨</span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 shadow-inner">
                Creative Studio
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-amber-300 transition-colors">
              Arts Club
            </h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Dive into sketching, shading, painting, and clay modelling. Showcase your creations in school galleries and state contests.
            </p>
          </AnimatedCard>

          {/* Yoga Club */}
          <AnimatedCard
            delay={0.3}
            hoverEffect="glow"
            className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl filter drop-shadow-lg">🧘</span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 border border-pink-400/30 shadow-inner">
                Mind & Body Zen
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-pink-300 transition-colors">
              Yoga Club
            </h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Develop flexibility, mental well-being, and posture control. Breathe, flow, and align mind with body.
            </p>
          </AnimatedCard>
        </div>
      </Section>

      <Section
        title="Beyond the Textbook"
        subtitle="Cultivating Intellect and Character"
        bg="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <AnimatedCard hoverEffect="lift" className="hover:bg-violet-100">
            <div className="text-4xl mb-4 text-primary-600 flex justify-center">
              <FiBookOpen />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">
              International Library
            </h4>
            <p className="text-sm text-slate-600">
              Hosting thousands of books across genres to nurture reading habits
              and reduce screen time.
            </p>
          </AnimatedCard>
          <AnimatedCard hoverEffect="lift" className="hover:bg-red-100">
            <div className="text-4xl mb-4 text-accent flex justify-center">
              ❤️
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Moral Classes</h4>
            <p className="text-sm text-slate-600">
              Highlighting the importance of social responsibility and family
              relationships, guiding students to become compassionate.
            </p>
          </AnimatedCard>
          <AnimatedCard hoverEffect="lift" className="hover:bg-amber-100">
            <div className="text-4xl mb-4 text-primary-600 flex justify-center">
              🏫
            </div>
            <h4 className="font-bold text-slate-900 mb-2">
              Special Evening Clubs
            </h4>
            <p className="text-sm text-slate-600">
              Dedicated clubs offer specialized support to students with
              learning difficulties toward academic excellence.
            </p>
          </AnimatedCard>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Ready to Experience the BE MAX Difference?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all"
            >
              Apply for Admissions Now
            </Link>
            <Link
              href="/beyond-academics"
              className="bg-white text-slate-800 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all"
            >
              View Extracurricular Activities
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
