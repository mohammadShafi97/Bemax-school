"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  FiHeart,
  FiUserCheck,
  FiShield,
  FiSmile,
  FiActivity,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function StudentSupportPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        imagePath="/mat.jpg"
        title={"A Safe Haven for\nGrowth and Well-Being."}
        subtitle="At BE MAX Kids & Public School, we understand that a child must feel safe, supported, and understood in order to truly thrive. We are deeply committed to providing an inclusive environment equipped with comprehensive health, emotional, and academic support systems."
      />

      <Section
        title="Empowering Every Learner"
        subtitle="We celebrate neurodiversity and varying learning paces. Our dedicated support infrastructure ensures that students with special needs receive the exact tools and guidance they require."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedCard hoverEffect="lift">
            <h4 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-accent">01.</span> Individualized Education
              Programs (IEPs)
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tailored education plans developed for each student with special
              needs, outlining personalized goals, and modifications needed to
              succeed in the academic environment.
            </p>
          </AnimatedCard>
          <AnimatedCard hoverEffect="lift">
            <h4 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-accent">02.</span> Special Education
              Teachers
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trained professionals who work closely with students requiring
              additional support, both in special education settings and
              mainstream classrooms.
            </p>
          </AnimatedCard>
          <AnimatedCard hoverEffect="lift">
            <h4 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-accent">03.</span> Resource Rooms
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dedicated spaces where students with special needs can receive
              instruction, interventions, and support services in a more focused
              environment than the general classroom.
            </p>
          </AnimatedCard>
          <AnimatedCard hoverEffect="lift">
            <h4 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-accent">04.</span> Assistive Technology
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Devices and software designed to help students with disabilities
              in their learning processes, such as speech-to-text software or
              electronic reading devices.
            </p>
          </AnimatedCard>
        </div>
      </Section>

      <Section title="Nurturing Mental and Emotional Health" bg="slate">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] relative overflow-hidden bg-slate-200 rounded-4xl flex items-center justify-center text-slate-400">
            <Image
              src="/councelling.jpg"
              alt="Smart Ecosystem"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-slate-600 mb-6">
              Emotional well-being is the foundation of a successful student. We
              provide direct access to professional therapy and counseling right
              on campus:
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="mt-1">
                <FiHeart className="text-accent text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Counseling and Therapy Services
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Emotional and psychological support through school counselors,
                  psychologists, and therapists to address behavioral issues,
                  social skills, and emotional well-being.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="mt-1">
                <FiSmile className="text-primary-500 text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Speech and Language Therapy
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Support for students with speech or language disorders to
                  improve their communication skills.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="mt-1">
                <FiActivity className="text-accent text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Physical and Occupational Therapy
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Services aimed at improving students' physical capabilities
                  and motor skills, enhancing their ability to participate in
                  school activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="School Health Clinic"
        subtitle="Prioritizing Physical Health & Hygiene"
        bg="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h4 className="text-lg font-bold text-white mb-2">
              👩‍⚕️ Dedicated School Health Nurse
            </h4>
            <p className="text-sm text-primary-100">
              Qualified nurse on campus to provide immediate care, first aid,
              and daily health monitoring.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h4 className="text-lg font-bold text-white mb-2">
              🩺 Periodical Check-ups
            </h4>
            <p className="text-sm text-primary-100">
              Frequent health check-ups, including specialized medical and
              dental screenings to monitor student health.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h4 className="text-lg font-bold text-white mb-2">
              🍎 Nutritional Diet Plans
            </h4>
            <p className="text-sm text-primary-100">
              Structured nutritional programs and customized diet plans that
              promote healthy eating habits.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h4 className="text-lg font-bold text-white mb-2">
              🏃‍♂️ Wellness Programs
            </h4>
            <p className="text-sm text-primary-100">
              Fitness and wellness programs, alongside health and hygiene
              awareness campaigns.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 md:col-span-2">
            <h4 className="text-lg font-bold text-white mb-2">
              🤝 Mental Health Collaboration
            </h4>
            <p className="text-sm text-primary-100">
              Integrated mental health support and active collaboration with
              health professionals to run specific health campaigns and drives.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Academic Support & Collaboration" bg="white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-600 italic">
            "We believe that a child's evenings should be spent with family, not
            at outside tuition centers."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mb-4">
              <FiUserCheck />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">
              Special Evening Clubs
            </h4>
            <p className="text-sm text-slate-600">
              Dedicated clubs offer specialized support to students with
              learning difficulties, guiding them toward academic excellence.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto bg-accent/10 text-accent rounded-full flex items-center justify-center text-2xl mb-4">
              <FiHeart />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">
              Parent-Teacher Collaboration
            </h4>
            <p className="text-sm text-slate-600">
              Regular meetings and communications with parents to ensure they
              are informed of progress and to discuss support at home.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mb-4">
              <FiShield />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Staff Training</h4>
            <p className="text-sm text-slate-600">
              Professional development for teachers to ensure they have the
              skills to support students with diverse needs effectively.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Safe and Reliable Journeys"
        subtitle="Our school provides a safe, reliable, and efficient transportation system to ensure your child's convenience and peace of mind."
        bg="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard className="text-center">
            <div className="text-4xl mb-4 text-accent">🚌</div>
            <h4 className="font-bold text-slate-900 mb-2">Wide Coverage</h4>
            <p className="text-sm text-slate-600">
              Secured bus transportation facilities within a 15-kilometre
              coverage radius for your young ones.
            </p>
          </AnimatedCard>
          <AnimatedCard className="text-center">
            <div className="text-4xl mb-4 text-primary-500">🛡️</div>
            <h4 className="font-bold text-slate-900 mb-2">Modern Safety</h4>
            <p className="text-sm text-slate-600">
              Well-maintained fleet equipped with modern safety features,
              operated by experienced drivers and attendants.
            </p>
          </AnimatedCard>
          <AnimatedCard className="text-center">
            <div className="text-4xl mb-4 text-accent">📍</div>
            <h4 className="font-bold text-slate-900 mb-2">Convenience</h4>
            <p className="text-sm text-slate-600">
              Flexible routes covering key areas, ensuring timely pickups and
              drop-offs.
            </p>
          </AnimatedCard>
        </div>
      </Section>
    </div>
  );
}
