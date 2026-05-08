"use client";

import Hero from "@/components/ui/Hero";
import ParentAppeal from "@/components/home/ParentAppeal";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiCheckCircle,
  FiGlobe,
  FiAward,
  FiBook,
  FiHeart,
  FiActivity,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import CountUp from "react-countup";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [deckOrder, setDeckOrder] = useState([0, 1, 2, 3, 4, 5]);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y5 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y6 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const deckCards = [
    { id: 0, src: "/tree.webp", alt: "Talking Tree", y: y1, x: -30, rotate: -12 },
    { id: 1, src: "/smart.jpg", alt: "Smart Classroom", y: y3, x: 20, rotate: 8 },
    { id: 2, src: "/mat.jpg", alt: "Magik Mat", y: y2, x: -10, rotate: -5 },
    { id: 3, src: "/hero-2.jpg", alt: "Campus Life", y: y4, x: 30, rotate: 12 },
    { id: 4, src: "/music.jpg", alt: "Music Class", y: y5, x: -20, rotate: -3, imageClass: "object-right" },
    { id: 5, src: "/hero-4.jpg", alt: "Student Activity", y: y6, x: 10, rotate: 6 },
  ];

  const handleSwipe = () => {
    setDeckOrder((prev) => {
      const newOrder = [...prev];
      const topCard = newOrder.pop();
      if (topCard !== undefined) {
        newOrder.unshift(topCard);
      }
      return newOrder;
    });
  };

  return (
    <div className="overflow-hidden">
      {/* SECTION 1: THE HERO BANNER */}
      <Hero
        title={"Empowering the Future,\nStress-Free."}
        subtitle="Welcome to BE MAX Public School, Kollam. We provide a caring yet demanding educational environment designed to help students reach their maximum potential. Step into a world of unparalleled education, where each student is at the center of a holistic growth experience."
        primaryAction={{ text: "Apply for Admissions", href: "/admissions" }}
        secondaryAction={{ text: "Book a Campus Tour", href: "/contact" }}
      />

      {/* SECTION 1.5: PARENT APPEAL */}
      <ParentAppeal />

      {/* SECTION 2: THE TRUST & LEGACY BAR */}
      <div className="bg-white md:px-[100px] py-16 md:py-20 border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">
              The BE MAX <span className="text-accent">Legacy</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">
              A decade of shaping futures, building character, and empowering
              global citizens through exceptional educational experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-black text-accent mb-2">
                <CountUp end={12} suffix="+" enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-sm font-semibold text-slate-600">
                Years of Educational Excellence
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-black text-accent mb-2">
                <CountUp end={100} suffix="k+" enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-sm font-semibold text-slate-600">
                Students Nurtured Globally
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-black text-primary-600 mb-2">
                IDA LEAP
              </div>
              <div className="text-sm font-semibold text-slate-600">
                National Recognition Member
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-black text-primary-600 mb-2">
                <CountUp end={7} suffix="+" enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-sm font-semibold text-slate-600">
                Global Partnerships
              </div>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 text-center opacity-70">
            <p className="text-sm font-medium mb-4 text-slate-500 uppercase tracking-wider">
              In Partnership With
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/cam.png"
                alt="Cambridge University Press"
                width={180}
                height={60}
                className="h-10 md:h-16 w-auto object-contain  transition-all"
              />
              <Image
                src="/idp.png"
                alt="IDP Australia"
                width={150}
                height={60}
                className="h-10 md:h-16 w-auto object-contain  transition-all"
              />
              <Image
                src="/bc.png"
                alt="British Council"
                width={180}
                height={60}
                className="h-10 md:h-16 w-auto object-contain  transition-all"
              />
              <Image
                src="/pte.png"
                alt="Pearson PTE"
                width={150}
                height={60}
                className="h-10 md:h-16 w-auto object-contain  transition-all"
              />
              <Image
                src="/toefl.jpg"
                alt="TOEFL"
                width={150}
                height={60}
                className="h-10 md:h-16 w-auto object-contain  transition-all"
              />
              <Image
                src="/cert.png"
                alt="LanguageCert"
                width={180}
                height={60}
                className="h-10 md:h-16 w-auto object-contain  transition-all"
              />
              <Image
                src="/oet.png"
                alt="OET"
                width={120}
                height={60}
                className="h-10 md:h-16 w-auto object-contain  transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: THE 4 PILLARS OF BE MAX */}
      <Section
        title="Discover the BE MAX Advantage"
        subtitle="Our core foundation is built upon four distinctive pillars that ensure your child receives an unparalleled, future-ready education."
        bg="slate"
        className="md:px-[100px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCard
            delay={0.1}
            hoverEffect="tiltRight"
            className="hover:bg-blue-200"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
              <FiBook size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Academic Excellence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We offer a comprehensive CBSE syllabus aligned with international
              standards. With smart classrooms and dedicated clubs, we guide
              students toward excellence without stress.
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={0.2}
            hoverEffect="tiltRight"
            className="hover:bg-red-200"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
              <FiGlobe size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Multi-Linguistic Fluency
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Led by TESOL and CELTA-certified teachers, our program includes
              English, German, Arabic, and French, featuring the ELSAP program
              for skill acceleration.
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={0.3}
            hoverEffect="tiltRight"
            className="hover:bg-blue-200"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
              <FiActivity size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Extracurricular Excellence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              100% participation in holistic development. Activities include
              horse riding, swimming, skating, Karate, dance, music, Abacus,
              Yoga, and clay modelling.
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={0.4}
            hoverEffect="tiltRight"
            className="hover:bg-red-200"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
              <FiHeart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Character & Moral Values
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cultivation of intellect and character. Dedicated moral classes
              highlight social responsibility and family relationships, shaping
              compassionate global citizens.
            </p>
          </AnimatedCard>
        </div>
      </Section>

      {/* SECTION 3.5: WHY US */}
      <Section
        kicker="WHY US"
        title="Unlocking Every Child's Unique Genius"
        subtitle="Because your child is an individual, not just a roll number. Discover our student-centered approach to holistic growth."
        bg="white"
        className="md:px-[100px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard
            delay={0.1}
            hoverEffect="scale"
            className="border-t-4 border-t-primary-500 hover:bg-blue-200"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xl shrink-0">
                <FiActivity />
              </span>
              "Stress-Free" & Activity-Oriented
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  The "Light-Bag" Promise
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  We believe a child's shoulders should carry dreams, not heavy
                  textbooks. Our digital integration and activity-based models
                  mean lighter backpacks and more energy for actual learning.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  No-Homework Weekends
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Weekends are for family, rest, and play. All core academic
                  reinforcement happens during our dedicated weekday school
                  hours.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  Experiential Learning Zones
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  We replace rote memorization with "learning by doing." Whether
                  it's planting seeds in a garden or building shapes in the
                  Maths Lab, concepts are experienced physically before they are
                  read in a book.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.2}
            hoverEffect="scale"
            className="border-t-4 border-t-accent hover:bg-red-200"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl shrink-0">
                <FiUsers />
              </span>
              "Student-Centered" Approach
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  Multiple Intelligences Mapping
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Not every child learns the same way. We actively identify
                  whether your child is a visual, auditory, or kinesthetic
                  (hands-on) learner, adapting our teaching styles to their
                  natural strengths.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  Growth Portfolios
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Instead of just a sheet of grades, we build a continuous
                  portfolio of your child’s creative projects, speaking
                  milestones, and personal victories to track their true
                  holistic growth.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.3}
            hoverEffect="scale"
            className="border-t-4 border-t-primary-500 hover:bg-blue-200"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xl shrink-0">
                <FiCheckCircle />
              </span>
              "100% Participation" Guarantee
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  The "No-Bench" Sports Policy
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  At BE MAX, there is no "A-team" that plays while others watch.
                  Every single child gets active field time to build
                  sportsmanship, teamwork, and physical fitness.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  CCA Discovery Rotation
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Unsure what your child is naturally good at? Our Co-Curricular
                  Activity (CCA) rotation ensures every student tries their hand
                  at music, drama, sports, and arts before specializing in what
                  they love most.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.4}
            hoverEffect="scale"
            className="border-t-4 border-t-accent hover:bg-red-200"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl shrink-0">
                <FiGlobe />
              </span>
              The BE MAX Legacy
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  "Mini-TED" Public Speaking
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  We train students to conquer stage fright early. From
                  presenting morning assemblies to hosting debates, we build
                  fearless public speakers.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  Immersive Language Zones
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Leveraging our legacy as India’s leading language experts, our
                  campus features English-immersion activities where students
                  naturally converse and think in English, rather than just
                  studying it as a subject.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  Real-World Broadcasting
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Utilizing our School FM Radio, students practice their
                  communication skills by writing scripts, hosting interviews,
                  and broadcasting to the campus—turning language learning into
                  a thrilling real-world experience.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* SECTION 4: AI & INNOVATION SHOWCASE */}
      <Section bg="white" className="md:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
              Merging Tradition with{" "}
              <span className="text-accent">Tomorrow's Technology</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Stay ahead with our AI-integrated curriculum that equips students
              with the knowledge they need to thrive in a digital world. We
              feature cutting-edge tools designed to make learning immersive.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  🌳
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    My Talking Tree
                  </h4>
                  <p className="text-slate-600 mt-2 text-sm">
                    An Al-integrated robotic tree that brings joy and
                    interactivity to children's learning by seamlessly
                    connecting to the screen.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  🏃‍♂️
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Magik Mat
                  </h4>
                  <p className="text-slate-600 mt-2 text-sm">
                    Enhances learning with fun educational games focused on
                    numbers and the alphabet. Fosters mind-body coordination.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  💻
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Smart Classrooms & Labs
                  </h4>
                  <p className="text-slate-600 mt-2 text-sm">
                    Experience education equipped with the latest interactive
                    panels, Robotics, Coding, and an advanced Computer Lab.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/academics"
              className="mt-10 inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary-700 transition-all"
            >
              Explore Academics & AI
            </Link>
          </motion.div>

          <div className="relative h-[600px] z-40 w-full" ref={scrollRef}>
            {deckOrder.map((cardIndex, i) => {
              const card = deckCards[cardIndex];
              const isTop = i === deckOrder.length - 1;
              return (
                <motion.div
                  key={card.id}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (Math.abs(info.offset.x) > 50) {
                      handleSwipe();
                    }
                  }}
                  onClick={() => {
                    if (isTop) handleSwipe();
                  }}
                  style={{ y: card.y, x: card.x, rotate: card.rotate, zIndex: (i + 1) * 10 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 100 }}
                  whileTap={{ scale: 1.05, rotate: 0, zIndex: 100 }}
                  className={`absolute inset-0 m-auto w-[65%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-slate-100 transition-colors ${isTop ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover ${card.imageClass || ""}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* SECTION 5: CAMPUS LIFE & HAPPINESS */}
      <Section
        title="Where Every Morning is an Adventure"
        subtitle="At BE MAX, education extends far beyond textbooks. We believe that coming to school should be the most exciting part of a child's day."
        bg="slate"
        className="md:px-[100px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard
            delay={0.1}
            hoverEffect="scale"
            className="p-0 overflow-hidden group"
          >
            <div className="h-64 md:h-72 relative overflow-hidden bg-slate-100">
              <Image
                src="/train.jpg"
                alt="The BE MAX Express"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-left transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 transition-colors duration-300 group-hover:text-accent">
                <span className="text-2xl">🚂</span> The BE MAX Express
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our expansive Kids Park features a custom trackless toy train
                ride, ensuring a tear-free start for our Kindergarteners.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.2}
            hoverEffect="scale"
            className="p-0 overflow-hidden group"
          >
            <div className="h-64 md:h-72 relative overflow-hidden bg-slate-100">
              <Image
                src="/fm.jpg"
                alt="School FM"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 transition-colors duration-300 group-hover:text-accent">
                <span className="text-2xl">🎙️</span> School FM
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our school radio station serves as a platform for educational,
                cultural, and recreational activities and broadcasts.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={0.3}
            hoverEffect="scale"
            className="p-0 overflow-hidden group"
          >
            <div className="h-64 md:h-72 relative overflow-hidden bg-slate-100">
              <Image
                src="/arts.jpg"
                alt="Arts & Sports"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2 transition-colors duration-300 group-hover:text-accent">
                <span className="text-2xl">🎭</span> Arts & Sports
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unleash creativity in our Drama Club, or build physical strength
                on our basketball courts, cricket pitches, and foosball tables.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* SECTION 6: NEWS & CAMPUS UPDATES */}
      <Section
        bg="primary"
        title="What’s Happening at BE MAX?"
        subtitle="Stay updated with the latest news, achievements, and events on campus."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              icon: "🏆",
              title: "New Achievement",
              text: "BE MAX Public School is now a formal member of IDA LEAP. We are committed to #UnitingForEducation.",
            },
            {
              icon: "🚂",
              title: "The BE MAX Express",
              text: "Our brand-new trackless toy train has arrived! Transforming school mornings into adventures.",
            },
            {
              icon: "🏥",
              title: "Health First",
              text: "Announcing our new comprehensive Nutritional Program with customized diet plans and check-ups.",
            },
            {
              icon: "🏗️",
              title: "Vision 2027",
              text: "Construction is underway for our Thazhuthala Mega-Campus. State-of-the-art facilities coming soon!",
            },
          ].map((news, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col h-full"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-6 bg-white/20 w-16 h-16 rounded-full flex items-center justify-center shadow-inner">
                {news.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {news.title}
              </h4>
              <p className="text-primary-100 text-sm leading-relaxed grow">
                {news.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 7: PARENT TESTIMONIALS */}
      <Section title="Voices of Our Community" bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "The transformation in my son is amazing. He used to cry every morning, but now he asks to go to school just to ride the BE MAX Express! The stress-free environment is real.",
              author: "Anjali M., Parent (Grade 1)",
            },
            {
              quote:
                "I was worried about my daughter's English fluency. Within months of the ELSAP program, her confidence has soared. The personalized attention from the teachers is unmatched in Kollam.",
              author: "Dr. Rajesh K., Parent (UKG)",
            },
            {
              quote:
                "As a working parent, the Weekend Clubs and in-house therapy services are a blessing. No more running around for extra tuitions or speech therapy. Everything is under one roof.",
              author: "Saira B., Parent (Grade 3)",
            },
          ].map((testi, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.2}
              hoverEffect="glow"
              className="relative"
            >
              <div className="text-6xl text-primary-100 absolute top-3 left-4 z-0 leading-none">
                "
              </div>
              <div className="relative z-10">
                <p className="text-slate-600 italic mb-6 text-sm md:text-base leading-relaxed">
                  "{testi.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold">
                    {testi.author.charAt(0)}
                  </div>
                  <p className="font-bold text-slate-900 text-sm">
                    {testi.author}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* SECTION 8: INCLUSION & SUPPORT SERVICES */}
      <Section
        bg="slate"
        className="relative overflow-hidden bg-cover bg-no-repeat md:bg-left bg-top-left"
        style={{
          backgroundImage: 'url("/last.jpg")',
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-black to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl z-10 md:text-5xl font-black mb-6 text-white leading-tight">
            Every Child Learns Differently.{" "}
            <span className="text-accent block mt-2">We Support Them All.</span>
          </h2>
          <p className="text-lg text-white mb-12">
            We are committed to providing an environment where every student is
            inspired to explore and succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
              <FiCheckCircle className="text-accent text-3xl mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">
                Tailored Support
              </h4>
              <p className="text-slate-600 text-sm">
                Individualized Education Programs (IEPs) outline personalized
                goals for students with special needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
              <FiUsers className="text-primary-500 text-3xl mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">
                Counseling & Therapy
              </h4>
              <p className="text-slate-600 text-sm">
                Emotional support through school counselors, plus access to
                physical, occupational, and speech therapy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
              <FiGlobe className="text-accent text-3xl mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">
                Secure Transportation
              </h4>
              <p className="text-slate-600 text-sm">
                Safe, reliable transportation system covering a 15-kilometer
                radius, equipped with modern safety features.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
