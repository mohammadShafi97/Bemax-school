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
  { id: 1, type: "image", src: "/images/placeholders/tree.jpg", category: "Innovation & AI", caption: "My Talking Tree interacting with students." },
  { id: 2, type: "image", src: "/images/placeholders/mat.jpg", category: "Innovation & AI", caption: "Students learning through movement on the Magik Mat." },
  { id: 3, type: "image", src: "/images/placeholders/smart.jpg", category: "Innovation & AI", caption: "Interactive sessions in our Smart Classrooms." },
  
  // Campus Life
  { id: 4, type: "video", src: "/videos/placeholders/train.mp4", category: "Campus Life", caption: "The BE MAX Express in action!" },
  { id: 5, type: "image", src: "/images/placeholders/park.jpg", category: "Campus Life", caption: "Kids enjoying the modern Kids Park." },
  { id: 6, type: "image", src: "/images/placeholders/radio.jpg", category: "Campus Life", caption: "Behind-the-scenes at School FM Radio." },

  // Academics
  { id: 7, type: "image", src: "/images/placeholders/class.jpg", category: "Academics", caption: "Hands-on projects and group discussions." },
  { id: 8, type: "image", src: "/images/placeholders/lang.jpg", category: "Academics", caption: "Individualized language lab sessions." },
  { id: 9, type: "image", src: "/images/placeholders/library.jpg", category: "Academics", caption: "Exploring the International Library." },

  // Extracurriculars
  { id: 10, type: "image", src: "/images/placeholders/sports.jpg", category: "Extracurriculars", caption: "Horse riding and skating sessions." },
  { id: 11, type: "image", src: "/images/placeholders/dance.jpg", category: "Extracurriculars", caption: "Dance performances and music classes." },
  { id: 12, type: "image", src: "/images/placeholders/club.jpg", category: "Extracurriculars", caption: "Drama Club rehearsals in progress." },

  // Health
  { id: 13, type: "image", src: "/images/placeholders/health.jpg", category: "Health & Safety", caption: "Periodical check-ups by our school nurse." },
  { id: 14, type: "image", src: "/images/placeholders/bus.jpg", category: "Health & Safety", caption: "Secure transport fleet serving a 15km radius." },
  { id: 15, type: "image", src: "/images/placeholders/ida.jpg", category: "Health & Safety", caption: "Proud members of IDA LEAP." },
];

const categories = ["All", "Innovation & AI", "Campus Life", "Academics", "Extracurriculars", "Health & Safety", "Videos"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredGallery = galleryData.filter(item => {
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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200 group-hover:scale-105 transition-transform duration-500">
                  {item.type === "video" ? <FiPlay size={48} /> : <span>[ Image: {item.category} ]</span>}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <p className="text-white font-medium text-sm">{item.caption}</p>
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
            className="fixed inset-0 z-[100] bg-primary-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              onClick={(e) => { e.stopPropagation(); setSelectedMedia(null); }}
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
                <div className="w-full h-full flex flex-col items-center justify-center text-white/50">
                   <p>[ Full Resolution Image Placeholder for: {selectedMedia.src} ]</p>
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">{selectedMedia.category}</span>
                <p className="text-white text-lg font-medium">{selectedMedia.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
