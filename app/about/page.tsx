"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  FiTarget,
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const y3 = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y5 = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <div className="overflow-hidden">
      <PageHeader
        imagePath="/hero-2.jpg"
        title={"A Legacy of Excellence.\nWe Are BE MAX."}
        subtitle="BE MAX Kids & Public School is a pioneering venture of the prestigious BE MAX Group of Institutions, renowned for its commitment to academic excellence in India."
      />

      <Section
        title="12 Years of Trust. 100,000+ Success Stories."
        subtitle="Built upon a phenomenal 12-year legacy, we bring a wealth of educational expertise to Kollam."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FiGlobe className="text-accent" /> The BE MAX Ecosystem
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our school provides an integrated educational environment backed
              by a massive ecosystem that empowers learners at every stage of
              their lives. Our sister organizations include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <strong className="text-slate-900">Be Max Academy:</strong>{" "}
                  Our premier coaching division with over a decade of excellence
                  in language training.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <strong className="text-slate-900">
                    Be Max Global Solutions:
                  </strong>{" "}
                  Empowering students to reach their international career goals.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <strong className="text-slate-900">
                    Be Max Publications:
                  </strong>{" "}
                  Delivering high-quality educational resources.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <strong className="text-slate-900">
                    Be Max Learning App:
                  </strong>{" "}
                  Bringing digital learning solutions directly to students'
                  fingertips.
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[450px] z-30 w-full" ref={scrollRef}>
            <motion.div
              style={{ y: y1, x: -20, rotate: -10 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 100 }}
              className="absolute inset-0 m-auto w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white cursor-pointer bg-slate-100 z-10 transition-colors"
            >
              <Image
                src="/smart.jpg"
                alt="Smart Ecosystem"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y2, x: 15, rotate: 6 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 100 }}
              className="absolute inset-0 m-auto w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white cursor-pointer bg-slate-100 z-20 transition-colors"
            >
              <Image
                src="/hero-3.jpg"
                alt="Learning Ecosystem"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y3, x: -10, rotate: -5 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 100 }}
              className="absolute inset-0 m-auto w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white cursor-pointer bg-slate-100 z-30 transition-colors"
            >
              <Image
                src="/express.JPG"
                alt="The Express"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y4, x: 25, rotate: 12 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 100 }}
              className="absolute inset-0 m-auto w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white cursor-pointer bg-slate-100 z-40 transition-colors"
            >
              <Image
                src="/activity.jpg"
                alt="Student Activity"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y5, x: 5, rotate: -3 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 100 }}
              className="absolute inset-0 m-auto w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white cursor-pointer bg-slate-100 z-50 transition-colors"
            >
              <Image
                src="/councelling.jpg"
                alt="Student Counseling"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-center">
            Global Partnerships & Accreditations
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/cam.png"
              alt="Cambridge University Press"
              width={180}
              height={60}
              className="h-10 md:h-16 w-auto object-contain transition-all"
            />
            <Image
              src="/idp.png"
              alt="IDP Australia"
              width={150}
              height={60}
              className="h-10 md:h-16 w-auto object-contain transition-all"
            />
            <Image
              src="/bc.png"
              alt="British Council"
              width={180}
              height={60}
              className="h-10 md:h-16 w-auto object-contain transition-all"
            />
            <Image
              src="/pte.png"
              alt="Pearson PTE"
              width={150}
              height={60}
              className="h-10 md:h-16 w-auto object-contain transition-all"
            />
            <Image
              src="/toefl.jpg"
              alt="TOEFL"
              width={150}
              height={60}
              className="h-10 md:h-16 w-auto object-contain transition-all"
            />
            <Image
              src="/cert.png"
              alt="LanguageCert"
              width={180}
              height={60}
              className="h-10 md:h-16 w-auto object-contain transition-all"
            />
            <Image
              src="/oet.png"
              alt="OET"
              width={120}
              height={60}
              className="h-10 md:h-16 w-auto object-contain transition-all"
            />
          </div>
        </div>
      </Section>

      <Section title="Our Vision & Mission" bg="slate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedCard hoverEffect="glow" className="hover:scale-105">
            <FiTarget className="text-accent text-4xl mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              BE MAX Kids & Public School aspires to be a leading educational
              institution, promoting a diverse and innovative learning
              environment to develop critical thinking and personal growth. We
              aim to nurture lifelong learners and responsible citizens,
              utilizing strategies such as a rigorous curriculum, an inclusive
              culture, and advanced facilities.
            </p>
          </AnimatedCard>

          <AnimatedCard hoverEffect="glow" className="hover:scale-105">
            <FiAward className="text-primary-600 text-4xl mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our pursuit is to provide top-quality education in line with
              global standards, accelerating students' productivity and
              responsibility within their families and communities.
            </p>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <strong>Character First:</strong> Creating a supportive
                environment where students feel empowered to tackle life's
                challenges.
              </li>
              <li>
                <strong>Holistic Growth:</strong> Through our comprehensive
                approach involving academics, sports, arts, and community
                engagement.
              </li>
            </ul>
          </AnimatedCard>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          Our Four Core Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white hover:bg-blue-200 hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-xl font-bold mb-2 text-primary-600">
              01. Academic Excellence
            </div>
            <p className="text-sm text-slate-600">
              CBSE syllabus aligned with international standards in a
              stress-free environment.
            </p>
          </div>
          <div className="bg-white hover:bg-red-100 hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-xl font-bold mb-2 text-accent">
              02. Multi-Linguistic
            </div>
            <p className="text-sm text-slate-600">
              Flawless fluency training in English, German, French, and Arabic.
            </p>
          </div>
          <div className="bg-white hover:bg-blue-100 hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-xl font-bold mb-2 text-primary-600">
              03. Extracurriculars
            </div>
            <p className="text-sm text-slate-600">
              100% participation in holistic development including sports and
              arts.
            </p>
          </div>
          <div className="bg-white hover:bg-red-100 hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-xl font-bold mb-2 text-accent">
              04. Character Building
            </div>
            <p className="text-sm text-slate-600">
              Instilling strong moral values, empathy, and social
              responsibility.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Guided by Visionaries"
        subtitle="Meet the leadership team shaping the future of education at BE MAX."
        bg="white"
      >
        <div className="space-y-12">
          {/* Leader 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-full md:w-1/4 aspect-square bg-slate-200 rounded-2xl shrink-0 flex items-center justify-center text-slate-400">
              [ Chairman Photo ]
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Mr. Shan Shoukath
              </h3>
              <p className="text-accent font-semibold mb-4">Chairman</p>
              <blockquote className="italic text-slate-600 text-lg mb-4 border-l-4 border-primary-300 pl-4">
                "Investing in education is like securing a passport to the
                future, as it is the individuals who equip themselves today that
                will shape tomorrow."
              </blockquote>
              <p className="text-slate-600 leading-relaxed text-sm">
                "As we embark on a new academic year at BEMAX Public School, I
                am thrilled to witness the dawn of yet another chapter in our
                journey of educational excellence. With a legacy of over a
                decade in language coaching and an incredible success history,
                we stride forward with confidence, guided by our commitment to
                nurture young minds. Our mission is to install social and family
                values in students from early years through Grade 12, alongside
                a strong emphasis on English language proficiency. I assure you
                of our steadfast dedication to develop well-rounded, socially
                responsible individuals."
              </p>
            </div>
          </div>

          {/* Leader 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-full md:w-1/4 aspect-square bg-slate-200 rounded-2xl shrink-0 flex items-center justify-center text-slate-400">
              [ Director Photo ]
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Mrs. Surmi Shan
              </h3>
              <p className="text-accent font-semibold mb-4">Director</p>
              <blockquote className="italic text-slate-600 text-lg mb-4 border-l-4 border-accent pl-4">
                "The aim of genuine education is the cultivation of both
                intellect and character."
              </blockquote>
              <p className="text-slate-600 leading-relaxed text-sm">
                "As the Director of BE MAX Public School, I am delighted to
                affirm our unwavering dedication to delivering outstanding
                education, developing an environment where each student
                flourishes intellectually, socially, and emotionally. Alongside
                diverse extracurricular activities and community involvement, I
                am confident that your experience with us will be enriching."
              </p>
            </div>
          </div>

          {/* Leader 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-full md:w-1/4 aspect-square bg-slate-200 rounded-2xl shrink-0 flex items-center justify-center text-slate-400">
              [ Principal Photo ]
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Mrs. Vanaja Kumari S
              </h3>
              <p className="text-accent font-semibold mb-4">Principal</p>
              <blockquote className="italic text-slate-600 text-lg mb-4 border-l-4 border-primary-300 pl-4">
                "Education isn't simply a preparation for existence; it
                constitutes life's essence in itself."
              </blockquote>
              <p className="text-slate-600 leading-relaxed text-sm">
                "Education is the cornerstone of progress, growth, and
                empowerment. At BE MAX Public School, we believe that learning
                is more than academic achievement—it's about nurturing curiosity
                and fostering values that prepare our students to excel in an
                ever-changing world. Our mission is to create a supportive
                environment where every child feels inspired to dream and
                achieve their full potential."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
