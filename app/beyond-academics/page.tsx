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

      <Section title="Vibrant Co-Curricular & Extra-Curricular Activities" bg="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatedCard delay={0.05} className="hover:bg-sky-50">
            <div className="text-4xl mb-4">🏊</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Swimming</h3>
            <p className="text-slate-600 text-sm">
              Enhances core strength, cardiovascular health, and water safety skills in a supportive, professional environment.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.1} className="hover:bg-slate-50">
            <div className="text-4xl mb-4">🥋</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Karate</h3>
            <p className="text-slate-600 text-sm">
              Builds self-defense techniques, physical fitness, mental discipline, and respect for self and others.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.15} className="hover:bg-amber-50">
            <div className="text-4xl mb-4">🧘</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Yoga Club</h3>
            <p className="text-slate-600 text-sm">
              Promotes mindfulness, flexibility, and concentration through physical postures and breathing exercises.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="hover:bg-orange-50">
            <div className="text-4xl mb-4">🏇</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Horse Riding</h3>
            <p className="text-slate-600 text-sm">
              Develops posture, balance, coordination, and confidence while bonding with animals in a safe, guided setting.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.25} className="hover:bg-indigo-50">
            <div className="text-4xl mb-4">🛼</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Skating</h3>
            <p className="text-slate-600 text-sm">
              Improves lower-body strength, reflexes, and balance through fun, expert-led training sessions on wheels.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="hover:bg-violet-50">
            <div className="text-4xl mb-4">♟️</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Chess</h3>
            <p className="text-slate-600 text-sm">
              Stimulates logical reasoning, problem-solving, and patience, helping students think steps ahead.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.35} className="hover:bg-emerald-50">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Carroms</h3>
            <p className="text-slate-600 text-sm">
              Refines hand-eye coordination, precision, and strategic thinking in a fun, friendly indoor environment.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.4} className="hover:bg-green-50">
            <div className="text-4xl mb-4">🏏</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Cricket</h3>
            <p className="text-slate-600 text-sm">
              Teaches batting, bowling, and teamwork, fostering discipline and cooperative game strategies.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.45} className="hover:bg-emerald-50">
            <div className="text-4xl mb-4">⚽</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Football</h3>
            <p className="text-slate-600 text-sm">
              Builds endurance, speed, and strategic thinking while playing and mastering team coordination on the field.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.5} className="hover:bg-orange-50">
            <div className="text-4xl mb-4">🏀</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Basketball</h3>
            <p className="text-slate-600 text-sm">
              Improves agility, physical conditioning, and spatial awareness with dribbling and shooting practice.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.55} className="hover:bg-pink-50">
            <div className="text-4xl mb-4">💃</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Dance</h3>
            <p className="text-slate-600 text-sm">
              Expresses emotion and creativity through movement, learning various traditional and contemporary styles.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.6} className="hover:bg-teal-50">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Art</h3>
            <p className="text-slate-600 text-sm">
              Nurtures creative self-expression and fine motor skills through drawing, clay modelling, and painting.
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

      <Section
        title="Noticeboard: Arts & Dance Spotlight"
        subtitle="Catch the vibe! Flip through polaroids from our annual day celebrations, classical dance stages, and creative arts workshops."
        bg="primary"
        className="!bg-linear-to-br !from-slate-950 !via-purple-950 !to-rose-950"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Item 1: anual-1.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs -rotate-2 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-200/30 backdrop-blur-2xs border border-white/10 -rotate-12 shadow-xs z-10" />
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/anual-1.jpg"
                alt="Annual Day Performance"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Annual Day Rhythms 🌟
            </p>
          </div>

          {/* Item 2: anual-2.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs rotate-3 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl z-10 filter drop-shadow-xs select-none">📌</div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/anual-2.jpg"
                alt="Dance Spotlight"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Vibrant Group Dance 💃
            </p>
          </div>

          {/* Item 3: anual-3.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs -rotate-3 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-sky-200/30 backdrop-blur-2xs border border-white/10 rotate-6 shadow-xs z-10" />
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/anual-3.jpg"
                alt="Stage Energy"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Spotlight Magic ✨
            </p>
          </div>

          {/* Sticky Note 1: Yellow paper */}
          <div className="relative bg-yellow-100/90 backdrop-blur-2xs p-6 shadow-xl rounded-sm border-l-4 border-yellow-400 rotate-2 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-[4/3]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl z-10 filter drop-shadow-xs select-none">📌</div>
            <div className="grow flex flex-col justify-center text-center">
              <p className="font-mono text-slate-800 text-sm font-semibold leading-relaxed">
                "To dance is to be out of yourself. Larger, more beautiful, more powerful."
              </p>
            </div>
            <p className="font-mono text-xs text-slate-500 text-right mt-4">— Agnes de Mille</p>
          </div>

          {/* Item 4: anual-4.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs rotate-2 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-pink-200/30 backdrop-blur-2xs border border-white/10 -rotate-6 shadow-xs z-10" />
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/anual-4.jpg"
                alt="Creative Expression"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Grace & Expression 🌸
            </p>
          </div>

          {/* Item 5: anual-5.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs -rotate-4 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl z-10 filter drop-shadow-xs select-none">📌</div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/anual-5.jpg"
                alt="Colorful Costumes"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Carnival Vibes 🎉
            </p>
          </div>

          {/* Item 6: arts.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs rotate-3 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-lime-200/30 backdrop-blur-2xs border border-white/10 -rotate-12 shadow-xs z-10" />
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/arts.jpg"
                alt="Fine Arts"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              The Creative Canvas 🎨
            </p>
          </div>

          {/* Sticky Note 2: Pink paper */}
          <div className="relative bg-pink-100/90 backdrop-blur-2xs p-6 shadow-xl rounded-sm border-l-4 border-pink-400 -rotate-3 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-[4/3]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl z-10 filter drop-shadow-xs select-none">📌</div>
            <div className="grow flex flex-col justify-center text-center">
              <p className="font-mono text-slate-800 text-sm font-semibold leading-relaxed">
                "Art washes away from the soul the dust of everyday life."
              </p>
            </div>
            <p className="font-mono text-xs text-slate-500 text-right mt-4">— Pablo Picasso</p>
          </div>

          {/* Item 7: dance.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs -rotate-2 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl z-10 filter drop-shadow-xs select-none">📌</div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/dance.jpg"
                alt="Classical Dance"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Grace & Poise 💃
            </p>
          </div>

          {/* Item 8: drama.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs rotate-4 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-violet-200/30 backdrop-blur-2xs border border-white/10 rotate-12 shadow-xs z-10" />
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/drama.jpg"
                alt="Theater & Drama"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Dramatic Expressions 🎭
            </p>
          </div>

          {/* Item 9: gallery-5.jpg */}
          <div className="relative bg-white p-4 pb-8 shadow-xl border border-slate-200/30 rounded-xs -rotate-2 hover:rotate-0 hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-300 group cursor-pointer lg:col-span-1 md:col-span-2 lg:mx-0 md:max-w-md md:mx-auto w-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-rose-200/30 backdrop-blur-2xs border border-white/10 -rotate-6 shadow-xs z-10" />
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-4">
              <Image
                src="/gallery-5.jpg"
                alt="Theyyam performance"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-mono italic text-slate-700 text-xs md:text-sm tracking-wide text-center">
              Theyyam Performance 👹
            </p>
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
