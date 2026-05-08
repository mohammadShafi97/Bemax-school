"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { FiRadio, FiSmile, FiMusic, FiHeart, FiActivity } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function BeyondAcademicsPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        imagePath="/arts.jpg"
        title={"Where Every Child\nTakes the Spotlight."}
        subtitle="At BE MAX Kids & Public School, we believe that learning is more than academic achievement. With our commitment to 100% student participation, we ensure every child discovers their unique passions outside the traditional classroom."
        primaryAction={{ text: "Book a Campus Tour", href: "/contact" }}
      />

      <Section
        title="Experiences You Won't Find Anywhere Else"
        subtitle="We have heavily invested in unique facilities that make campus life vibrant, joyful, and highly educational."
        bg="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedCard className="p-0 overflow-hidden " hoverEffect="glow">
            <div className="h-64 relative flex items-center justify-center  text-slate-400">
              <Image
                src="/fm.jpg"
                alt="Smart Ecosystem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-3xl"
              />{" "}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FiRadio className="text-accent" /> School FM Radio
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our school radio station helps to engage students, faculty, and
                the community. It serves as a platform for educational,
                cultural, and recreational activities. Through FM radio,
                students can develop communication, technical, and creative
                skills by producing and broadcasting programs like
                announcements, music, interviews, debates, and educational
                content.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard className="p-0 overflow-hidden" hoverEffect="glow">
            <div className="h-64 relative overflow-hidden  flex items-center justify-center text-slate-400">
              <Image
                src="/train.jpg"
                alt="Smart Ecosystem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FiSmile className="text-accent" /> The BE MAX Express & Kids
                Park
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We believe going to school should be an adventure! Our expansive
                Kids Park features a custom trackless toy train ride, ensuring
                our youngest learners start their mornings with joy, laughter,
                and zero separation anxiety.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      <Section title="Building Strength, Discipline, and Teamwork" bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedCard delay={0.1} className="hover:bg-sky-100">
            <div className="text-4xl mb-4 text-primary-500">🏊</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Swimming</h3>
            <p className="text-slate-600 text-sm">
              Beneficial to your child's health, enjoyment, and self-confidence.
              Swimming ameliorates mood disorders and has been shown to improve
              memory function.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="hover:bg-gray-100">
            <div className="text-4xl mb-4 text-accent">🥋</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Karate</h3>
            <p className="text-slate-600 text-sm">
              Enhances coordination, flexibility, and strength. The structured
              environment fosters teamwork, discipline, goal-setting, and
              promotes mental well-being.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="hover:bg-yellow-100">
            <div className="text-4xl mb-4 text-primary-500">🧘</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Yoga Club</h3>
            <p className="text-slate-600 text-sm">
              Free Yoga classes for students to promote physical and mental
              well-being, enhance flexibility, improve posture, and boost
              concentration.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.4} className="hover:bg-green-100">
            <div className="text-4xl mb-4 text-accent">🏇</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Premium Sports
            </h3>
            <p className="text-slate-600 text-sm">
              We offer exclusive training in Horse Riding and Skating to build
              balance, courage, and unique athletic skills.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.5} className="lg:col-span-2 hover:bg-lime-100">
            <div className="text-4xl mb-4 text-primary-500">
              <FiActivity />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Indoor & Outdoor Games
            </h3>
            <p className="text-slate-600 text-sm">
              Our campus features facilities for Cricket and Basketball, as well
              as engaging indoor games like Chess, Foosball, and Carrom.
            </p>
          </AnimatedCard>
        </div>
      </Section>

      <Section title="Unleashing Inner Creativity" bg="slate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative overflow-hidden bg-slate-300 rounded-2xl flex items-center justify-center text-slate-500">
              <Image
                src="/drama.jpg"
                alt="Smart Ecosystem"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 mt-8">
              <Image
                src="/dance.jpg"
                alt="Smart Ecosystem"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative overflow-hidden bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 -mt-8">
              <Image
                src="/music.jpg"
                alt="Smart Ecosystem"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-left"
              />
            </div>
            <div className="aspect-square relative overflow-hidden bg-slate-300 rounded-2xl flex items-center justify-center text-slate-500">
              <Image
                src="/drawing.jpg"
                alt="Smart Ecosystem"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:scale-105 ease-in-out duration-200">
              <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <span className="text-xl">🎭</span> School Drama Club
              </h4>
              <p className="text-slate-600 text-sm">
                Whether you're passionate about acting, directing, or backstage
                management, our club offers a welcoming space. Students
                participate in plays and workshops.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:scale-105 ease-in-out duration-200">
              <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <span className="text-xl">💃</span> Dance
              </h4>
              <p className="text-slate-600 text-sm">
                An opportunity for a child to create and be responsive to music,
                to feel something through rhythm, expressing themselves
                confidently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:scale-105 ease-in-out duration-200">
              <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <FiMusic className="text-accent" /> Music
              </h4>
              <p className="text-slate-600 text-sm">
                Improves language skills. With varied sounds and lyrics,
                students are exposed to vocabulary, creating a foundation for
                language understanding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:scale-105 ease-in-out duration-200">
              <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <span className="text-xl">🎨</span> Drawing & Clay Modelling
              </h4>
              <p className="text-slate-600 text-sm">
                Focusing on enhancing artistic abilities, teaching techniques
                like sketching, shading, and painting to encourage
                self-expression.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Shaping Good Human Beings" bg="primary">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary-100 text-lg">
            Our ultimate goal is to cultivate both intellect and character,
            ensuring every student keeps up with our academic excellence in a
            completely stress-free environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center">
            <FiHeart className="text-accent text-4xl mx-auto mb-4" />
            <h4 className="font-bold text-white text-lg mb-3">Moral Classes</h4>
            <p className="text-primary-100 text-sm">
              Highlighting the importance of social responsibility and family
              relationships, guiding students to become compassionate global
              citizens.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center">
            <div className="text-4xl mx-auto mb-4 text-white">🏫</div>
            <h4 className="font-bold text-white text-lg mb-3">
              Special Evening Clubs
            </h4>
            <p className="text-primary-100 text-sm">
              Dedicated clubs offer specialized support to students with
              learning difficulties, guiding them toward academic excellence and
              personal growth.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center">
            <div className="text-4xl mx-auto mb-4 text-white">🧮</div>
            <h4 className="font-bold text-white text-lg mb-3">
              Skill Development
            </h4>
            <p className="text-primary-100 text-sm">
              We offer dedicated Abacus training to boost cognitive skills,
              mental math speed, and overall analytical proficiency.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            See Our Vibrant Campus in Action!
          </h3>
          <Link
            href="/gallery"
            className="bg-white text-primary-900 px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all"
          >
            View Our Gallery
          </Link>
        </div>
      </Section>
    </div>
  );
}
