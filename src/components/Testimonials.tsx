import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-sky-50/10 via-sky-50/20 to-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">PATIENT TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            What Our Patients Say About Advance Clinic
          </h2>
          <p className="text-neutral-500 font-medium">
            Read real, heartfelt feedback from individuals and families in Vadodara whom we have had the privilege to treat.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Review Rating Stars */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < review.rating ? "currentColor" : "none"} 
                      className={i < review.rating ? "text-amber-400" : "text-neutral-250"}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs text-neutral-600 italic leading-relaxed font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Bottom bio info */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 leading-none">{review.name}</h4>
                  <span className="text-[10px] text-neutral-400 mt-1 block">{review.date}</span>
                </div>
                {/* Healthcare Tag */}
                <span className="inline-block bg-sky-50 text-sky-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-sky-100">
                  {review.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
