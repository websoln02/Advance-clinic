import { Phone, Calendar, Star, Users, Award, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollToBooking = () => {
    const element = document.getElementById('appointment');
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-sky-50/70 via-sky-50/20 to-white pt-6 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Decorative Blur Bio-Blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Short Tagline Accent */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 glass-panel text-sky-850 font-bold text-xs py-1.5 px-3.5 rounded-full"
            >
              <Award size={13} className="text-sky-600" />
              <span>PRIMARY HEALTHCARE PARTNER IN VADODARA</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight"
            >
              Advanced Healthcare with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">Compassion & Care</span>
            </motion.h1>

            {/* Sub-Header Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Your health is our utmost priority. Advance Clinic offers experienced physician consultations, specialized diagnosis, and treatment for fevers, diabetes, hypertension, and overall family wellness in Karelibagh, Vadodara.
            </motion.p>

            {/* CTA Interaction Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={handleScrollToBooking}
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-sky-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneFormatted}`}
                className="w-full sm:w-auto bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-sky-300 text-neutral-800 font-bold text-base px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} className="text-sky-600 animate-bounce" />
                <span>Call Clinic Now</span>
              </a>
            </motion.div>

            {/* Highlight Badges / Quick Trust Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 sm:pt-8 border-t border-neutral-100 flex flex-wrap justify-center lg:justify-start items-center gap-y-3 gap-x-6 text-sm text-neutral-500 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>Safe & Sanitized Premises</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart size={18} className="text-rose-500 animate-pulse" />
                <span>Personalized Family Focus</span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Stack Visual Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Behind Circle Aspect */}
            <div className="absolute w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-sky-450/10 to-blue-500/10 -z-10 blur-xl" />

            {/* Doctor Photo Holder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-80 sm:w-96 h-[400px] sm:h-[460px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-sky-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                alt="Advance Clinic Doctor Consultation"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent" />
            </motion.div>

            {/* FLOAT CARD 1: 4.5 Stars Rating Highlight */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
              className="absolute -top-4 -right-2 sm:-right-6 glass-panel-heavy rounded-2xl p-3.5 shadow-2xl border border-white/60 flex items-center gap-3 max-w-[190px]"
            >
              <div className="bg-amber-100 p-2.5 rounded-xl text-amber-500">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-neutral-900 leading-none">{CLINIC_INFO.rating} ★</p>
                <p className="text-[10px] text-neutral-500 font-semibold mt-1">24 Google Reviews</p>
              </div>
            </motion.div>

            {/* FLOAT CARD 2: Experienced Medical Care */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
              className="absolute bottom-20 -left-2 sm:-left-8 glass-panel-heavy rounded-2xl p-4 shadow-xl border border-white/60 flex items-center gap-3 max-w-[210px]"
            >
              <div className="bg-sky-100 p-2.5 rounded-xl text-sky-600">
                <Award size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900 leading-none">Experienced</p>
                <p className="text-xs font-semibold text-neutral-900 mt-1">Medical Care</p>
                <p className="text-[10px] text-sky-600 font-extrabold mt-0.5">Clinical Excellence</p>
              </div>
            </motion.div>

            {/* FLOAT CARD 3: Trusted by Locals */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
              className="absolute -bottom-5 right-6 sm:right-10 bg-gradient-to-r from-sky-600/95 to-blue-700/95 text-white rounded-2xl p-3.5 shadow-lg flex items-center gap-3 border border-white/25 backdrop-blur-md"
            >
              <div className="bg-white/20 p-1.5 rounded-lg text-white">
                <Users size={16} />
              </div>
              <div>
                <p className="text-xs font-bold leading-none">Trusted by Local Families</p>
                <p className="text-[10px] text-sky-100 mt-1">Karelibagh & Vadodara</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
