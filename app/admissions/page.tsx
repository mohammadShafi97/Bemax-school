"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiAward,
  FiPhoneCall,
} from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdmissionsPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        imagePath="/tree.webp"
        title={"Welcome to the\nBE MAX Family."}
        subtitle="Step into a world of unparalleled education, where joy, technology, and holistic growth come together. We invite students from all backgrounds to join a community that celebrates every child's unique potential."
        primaryAction={{ text: "Apply Online Now", href: "#apply" }}
        secondaryAction={{ text: "Book a Campus Tour", href: "/contact" }}
      />

      <Section
        title="Growing Bigger and Better"
        subtitle="Exciting Announcement for 2027!"
        bg="white"
      >
        <div className="bg-primary-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-primary-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block bg-accent/20 border border-accent/50 text-accent font-bold px-4 py-2 rounded-full mb-6 text-sm uppercase tracking-wider">
                Coming in 2027
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Our New Mega-Campus in Thazhuthala, Kottiyam!
              </h3>
              <p className="text-primary-100 text-lg leading-relaxed mb-6">
                While our students currently enjoy the vibrant, tech-enabled
                environment of our Mevaram campus, we are thrilled to share
                massive news with our community.
              </p>
              <p className="text-primary-100 text-lg leading-relaxed">
                This upcoming facility will bring even more world-class
                amenities, advanced sports infrastructure, and innovative
                learning spaces to Kollam, ensuring our students have the
                ultimate environment to thrive as we expand into higher
                secondary education.
              </p>
            </div>
            <div className="h-64 relative overflow-hidden md:h-[400px] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-primary-200">
              <Image
                src="/hero-5.jpg"
                alt="Smart Ecosystem"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Programs Currently Offered"
        subtitle="Nurturing Leaders from Day One"
        bg="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedCard hoverEffect="lift" className="text-center">
            <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 text-2xl">
              🧸
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Early Years
            </h3>
            <p className="text-slate-600 mb-6">Play School, LKG, and UKG.</p>
            <p className="text-sm text-slate-500 italic">
              Focused on play-based learning and early developmental milestones
              in a joyous environment.
            </p>
          </AnimatedCard>

          <AnimatedCard hoverEffect="lift" className="text-center">
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 text-2xl">
              📚
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Primary Grades
            </h3>
            <p className="text-slate-600 mb-6">Grade 1 to Grade 5.</p>
            <p className="text-sm text-slate-500 italic">
              Building strong academic foundations integrated with technology
              and extracurricular activities.
            </p>
          </AnimatedCard>
        </div>
        <p className="text-center mt-8 text-slate-500 text-sm italic max-w-2xl mx-auto">
          (Note: We are progressively upgrading our classes each year, with the
          clear vision of offering a complete educational journey right up to
          Plus Two / Grade 12!)
        </p>
      </Section>

      <Section title="Our Admission Philosophy" bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <FiCheckCircle className="text-accent text-3xl mb-4" />
            <h4 className="font-bold text-xl mb-3 text-slate-900">
              Merit & Inclusivity
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Admissions to BEMAX Public School are open to students from all
              backgrounds. We celebrate diversity.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <FiAward className="text-primary-600 text-3xl mb-4" />
            <h4 className="font-bold text-xl mb-3 text-slate-900">
              Beyond Test Scores
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              We follow a holistic review process that considers academic
              achievements, personal qualities, and extracurricular involvement.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <FiCalendar className="text-accent text-3xl mb-4" />
            <h4 className="font-bold text-xl mb-3 text-slate-900">
              Continuous Policy
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Admission is open throughout the academic year, allowing students
              to enroll beyond the standard May deadline.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="The 4-Step Admission Process"
        subtitle="How to Apply - We have made our enrollment process as stress-free as our classrooms!"
        bg="slate"
      >
        <div className="max-w-4xl mx-auto space-y-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-primary-200"></div>

          {[
            {
              step: 1,
              title: "Get to Know Us (The Campus Tour)",
              desc: "Seeing is believing. Book a campus tour to experience our Smart Classrooms, meet our AI Talking Tree, and let your little one take a joyful ride on the BE MAX Express Toy Train!",
            },
            {
              step: 2,
              title: "Submit Your Enquiry / Application",
              desc: "Please visit our website or contact our admissions office for more information on how to apply.",
            },
            {
              step: 3,
              title: "Student Interaction & Holistic Review",
              desc: "We host a warm, informal interaction with the child and parents to understand your child's learning style, interests, and how we can best support their journey.",
            },
            {
              step: 4,
              title: "Enrollment & Welcome",
              desc: "Once reviewed, you will receive an admission offer. Complete the fee payment to secure your child's seat and receive their official BE MAX Welcome Kit!",
            },
          ].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              key={i}
              className="flex flex-col md:flex-row gap-6 items-start relative z-10"
            >
              <div className="w-16 h-16 shrink-0 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-black shadow-lg border-4 border-slate-50">
                {item.step}
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="The BE MAX Scholarship Program" bg="primary">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
            <FiAward className="text-5xl text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Empowering Exceptional Talent
          </h3>
          <p className="text-primary-100 text-lg mb-8 leading-relaxed">
            At BE MAX Public School, we believe that world-class education
            should be accessible to deserving students.
          </p>
          <ul className="text-left text-primary-100 space-y-4 mb-10 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <FiCheckCircle className="text-accent" />
              </div>
              <span>
                We organize scholarship tests to identify students with
                exceptional abilities and promote equal opportunities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1">
                <FiCheckCircle className="text-accent" />
              </div>
              <span>
                Scholarships may be awarded based on merit, financial need, or
                specific criteria set by the school.
              </span>
            </li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-900 px-8 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all"
          >
            Register for Scholarship Test
          </Link>
        </div>
      </Section>

      <Section
        id="apply"
        title="We Are Here to Help"
        subtitle="Contact the Admissions Desk"
        bg="white"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                <FiMapPin className="text-accent" /> Current Campus
              </h4>
              <p className="text-slate-600 text-sm ml-6">
                Mevaram, Thattamala P.O, Kollam.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                <FiMapPin className="text-accent" /> Upcoming 2027 Campus
              </h4>
              <p className="text-slate-600 text-sm ml-6">
                Thazhuthala, Kottiyam.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                <FiPhoneCall className="text-accent" /> Admissions Helpline
              </h4>
              <p className="text-slate-600 text-sm ml-6">
                0474 2920263, 9446 898543, 9446 898 549
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/contact"
              className="w-full text-center bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Fill Out Quick Enquiry Form
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
