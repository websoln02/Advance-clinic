import { 
  UserCheck, 
  Smile, 
  IndianRupee, 
  CalendarDays, 
  Sparkles, 
  Award 
} from 'lucide-react';
import { CHOICE_REASONS } from '../data';
import { motion } from 'motion/react';

// Icon mapper for choice reasons
const ChoiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Smile': return <Smile className={className} />;
    case 'IndianRupee': return <IndianRupee className={className} />;
    case 'CalendarDays': return <CalendarDays className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Award': return <Award className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-teal-50 rounded-l-full mix-blend-multiply opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">WHY CHOOSE US</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Setting New Baselines in Local Clinical Care
          </h2>
          <p className="text-neutral-500 font-medium">
            At Advance Clinic, patients are never just file numbers. We craft a calm, reliable, and premium wellness pathway designed around physical recovery.
          </p>
        </div>

        {/* Feature Grid with Hover Animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHOICE_REASONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative p-8 glass-panel border border-white/50 hover:border-white/90 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="inline-flex p-3.5 rounded-2xl bg-white border border-neutral-100 text-sky-600 group-hover:bg-gradient-to-tr group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                  <ChoiceIcon name={item.iconName} className="h-6 w-6 stroke-[1.8px]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Subtle top decorative progress-bar-like accent during hover */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Patient Highlights Banner inside section */}
        <div className="mt-16 p-8 rounded-[2rem] glass-panel-dark text-white relative overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle graphical glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl" />
          
          <div className="grid md:grid-cols-3 gap-8 text-center items-center relative z-10">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold block">24+</span>
              <span className="text-xs text-sky-200 font-medium">Verified Reviews on Google Maps</span>
            </div>
            <div className="space-y-1 border-y md:border-y-0 md:border-x border-sky-800 py-4 md:py-0">
              <span className="text-3xl sm:text-4xl font-extrabold block">4.5★</span>
              <span className="text-xs text-sky-200 font-medium">Average Patient Rating</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold block">100%</span>
              <span className="text-xs text-sky-200 font-medium">Commitment to Ethical Practice</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
