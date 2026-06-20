"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlay } from "react-icons/fi";
import Image from "next/image";

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  category: string;
  caption: string;
};

const galleryData: MediaItem[] = [
  // Innovation & AI
  {
    id: 1,
    type: "image",
    src: "/tree.webp",
    category: "Innovation & AI",
    caption: "My Talking Tree interacting with students.",
  },
  {
    id: 2,
    type: "image",
    src: "/mat.jpg",
    category: "Innovation & AI",
    caption: "Students learning through movement on the Magik Mat.",
  },
  {
    id: 3,
    type: "image",
    src: "/smart.jpg",
    category: "Innovation & AI",
    caption: "Interactive sessions in our Smart Classrooms.",
  },
  {
    id: 19,
    type: "image",
    src: "/train.jpg",
    category: "Innovation & AI",
    caption: "The Bemax Express.",
  },
  {
    id: 9,
    type: "image",
    src: "/hero-5.jpg",
    category: "Innovation & AI",
    caption: "Interactive and joyful learning environment.",
  },

  // Campus Life
  {
    id: 4,
    type: "image",
    src: "/express.JPG",
    category: "Campus Life",
    caption: "The BE MAX Express in action!",
  },
  {
    id: 5,
    type: "image",
    src: "/hero-1.jpg",
    category: "Campus Life",
    caption: "Vibrant campus life and modern facilities.",
  },
  {
    id: 6,
    type: "image",
    src: "/fm.jpg",
    category: "Campus Life",
    caption: "Engaging with School FM Radio.",
  },
  {
    id: 17,
    type: "image",
    src: "/hero-4.jpg",
    category: "Campus Life",
    caption: "Engaging with School Talking Tree.",
  },
  // Academics
  {
    id: 7,
    type: "image",
    src: "/hero-2.jpg",
    category: "Academics",
    caption: "Focused academic excellence.",
  },
  {
    id: 8,
    type: "image",
    src: "/hero-3.jpg",
    category: "Academics",
    caption: "Individualized learning experiences.",
  },
  {
    id: 18,
    type: "image",
    src: "/last.jpg",
    category: "Academics",
    caption: "Convocation Ceremony",
  },
  {
    id: 21,
    type: "image",
    src: "/gallery-2.jpg",
    category: "Academics",
    caption: "Group picture with the MD and principal",
  },

  // Extracurriculars
  {
    id: 10,
    type: "image",
    src: "/activity.jpg",
    category: "Extracurriculars",
    caption: "Exciting extracurricular activities.",
  },
  {
    id: 11,
    type: "image",
    src: "/dance.jpg",
    category: "Extracurriculars",
    caption: "Dance performances and cultural events.",
  },
  {
    id: 12,
    type: "image",
    src: "/drama.jpg",
    category: "Extracurriculars",
    caption: "Drama and theatrical arts.",
  },
  {
    id: 13,
    type: "image",
    src: "/arts.jpg",
    category: "Extracurriculars",
    caption: "Arts and creative expression.",
  },
  {
    id: 14,
    type: "image",
    src: "/drawing.jpg",
    category: "Extracurriculars",
    caption: "Drawing and painting sessions.",
  },
  {
    id: 15,
    type: "image",
    src: "/music.jpg",
    category: "Extracurriculars",
    caption: "Music classes and vocal training.",
  },
  {
    id: 20,
    type: "image",
    src: "/gallery-1.jpg",
    category: "Extracurriculars",
    caption: "Award Function.",
  },
  {
    id: 24,
    type: "image",
    src: "/gallery-5.jpg",
    category: "Extracurriculars",
    caption: "Theyyam Performance.",
  },
  {
    id: 25,
    type: "image",
    src: "/gallery-6.jpg",
    category: "Extracurriculars",
    caption: "Carroms Competition.",
  },
  {
    id: 26,
    type: "image",
    src: "/gallery-7.jpg",
    category: "Extracurriculars",
    caption: "Fancy Dress competiton",
  },
  {
    id: Date.now(),
    type: "image",
    src: "/cricket.jpg",
    category: "Extracurriculars",
    caption: "cricket game",
  },
  {
    id: 27,
    type: "image",
    src: "/gallery-8.jpg",
    category: "Extracurriculars",
    caption: "Food Fest",
  },
  {
    id: 30,
    type: "image",
    src: "/anual-1.jpg",
    category: "Extracurriculars",
    caption: "Annual Day Dance Performance",
  },
  {
    id: 31,
    type: "image",
    src: "/anual-2.jpg",
    category: "Extracurriculars",
    caption: "Vibrant Stage Celebrations",
  },
  {
    id: 32,
    type: "image",
    src: "/anual-3.jpg",
    category: "Extracurriculars",
    caption: "Annual Cultural Fest",
  },
  {
    id: 33,
    type: "image",
    src: "/anual-4.jpg",
    category: "Extracurriculars",
    caption: "Expressive Classical Stage Performance",
  },
  {
    id: 34,
    type: "image",
    src: "/anual-5.jpg",
    category: "Extracurriculars",
    caption: "Vibrant Costumes & Stage Formations",
  },

  // Health
  {
    id: 16,
    type: "image",
    src: "/councelling.jpg",
    category: "Health & Safety",
    caption: "Student counselling and overall well-being.",
  },
  {
    id: 22,
    type: "image",
    src: "/gallery-3.jpg",
    category: "Health & Safety",
    caption: "Students in Dental Section",
  },
  {
    id: 23,
    type: "image",
    src: "/gallery-4.jpg",
    category: "Health & Safety",
    caption: "Students in Excercising section",
  },
  {
    id: 29,
    type: "image",
    src: "/gallery-9.jpg",
    category: "Health & Safety",
    caption: "Parents and Students councelling",
  },
];

const categories = [
  "All",
  "Innovation & AI",
  "Campus Life",
  "Academics",
  "Extracurriculars",
  "Health & Safety",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredGallery = galleryData.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Videos") return item.type === "video";
    return item.category === activeCategory;
  });

  return (
    <div className="overflow-hidden">
      <PageHeader
        imagePath="/express.JPG"
        title={"Glimpses of a Joyful\nLearning Journey."}
        subtitle="Explore visual proof of the vibrant, high-tech, and joyful life at BE MAX Kids & Public School."
      />

      <Section bg="white" className="min-h-screen">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative aspect-square bg-slate-200 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Visual */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200 group-hover:scale-105 transition-transform duration-500">
                  {item.type === "video" ? (
                    <FiPlay size={48} />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <p className="text-white font-medium text-sm">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-primary-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
            >
              <FiX size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "video" ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/50 space-y-4">
                  <FiPlay size={64} className="text-white/30" />
                  <p>[ Video Player Placeholder for: {selectedMedia.src} ]</p>
                </div>
              ) : (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">
                  {selectedMedia.category}
                </span>
                <p className="text-white text-lg font-medium">
                  {selectedMedia.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
