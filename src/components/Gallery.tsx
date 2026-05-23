import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Image, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Group categories dynamically
  const categories = ['All', 'Consultation Room', 'Reception Area', 'Clinical Area', 'Facility', 'Equipment'];

  // Match categorizations
  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">CLINICAL INFRASTRUCTURE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Explore Advance Clinic Premises
          </h2>
          <p className="text-neutral-500 font-medium">
            We operate fully customized, sanitized, and advanced diagnostics chambers inside Karelibagh to guarantee medical precision and mental calmness.
          </p>

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all backdrop-blur-md ${
                  filter === cat 
                    ? 'bg-sky-650/90 text-white border-white/40 shadow-lg shadow-sky-600/10' 
                    : 'glass-panel text-neutral-600 border-white/50 hover:border-white/90 hover:bg-white/55'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveImage(item.imageUrl)}
                className="group relative h-64 rounded-3xl overflow-hidden cursor-zoom-in border border-white/30 shadow-md transition-all"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-sky-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Focus Zoom indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} className="text-sky-700 font-bold" />
                </div>

                {/* Content Overlay text bottom */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel-heavy rounded-2xl p-4 shadow-lg border border-white/60 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] text-sky-600 font-extrabold uppercase tracking-wider">{item.category}</span>
                  <p className="text-xs font-bold text-neutral-900 mt-0.5 leading-snug">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Screen Image Lightbox Modal */}
        {activeImage && (
          <div 
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden rounded-3xl">
              <img
                src={activeImage}
                alt="Zoomed View"
                className="w-full h-full object-contain mx-auto rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/55 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold">
                Tap anywhere to exit full view
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
