import { useState } from 'react';
import { 
  Stethoscope, 
  Thermometer, 
  Activity, 
  Users, 
  HeartPulse, 
  Syringe, 
  ShieldAlert, 
  MessageSquareHeart, 
  Search,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data';
import { motion } from 'motion/react';

// Icon Map resolver
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Thermometer': return <Thermometer className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Users': return <Users className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Syringe': return <Syringe className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'MessageSquareHeart': return <MessageSquareHeart className={className} />;
    default: return <Stethoscope className={className} />;
  }
};

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceSelect = (serviceTitle: string) => {
    // Populate form and scroll
    const symptomField = document.getElementById('symptoms') as HTMLTextAreaElement;
    if (symptomField) {
      symptomField.value = `I would like to inquire regarding ${serviceTitle}. `;
      // Trigger a change event so state updates
      const event = new Event('input', { bubbles: true });
      symptomField.dispatchEvent(event);
    }
    
    // Scroll smoothly to appointment
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
    <section id="services" className="py-20 bg-gradient-to-b from-sky-50/20 to-sky-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">OUR MEDICAL DISCIPLINES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Premium Healthcare Services Tailored to You
          </h2>
          <p className="text-neutral-500 font-medium">
            Advance Clinic provides accurate screening, treatments, and continuous advisory boards. Tap any medical card below to immediately queue up an appointment.
          </p>

          {/* Minimal Search bar filter */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search illnesses or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl text-xs placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass-panel rounded-3xl p-6 border border-white/55 hover:border-white/90 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white/70 to-sky-50/10 hover:to-sky-50/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Styled Icon */}
                  <div className="mb-4 inline-flex p-3 rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-inner">
                    <ServiceIcon name={service.iconName} className="h-6 w-6 stroke-[1.8px]" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-base font-bold text-neutral-950 tracking-tight mb-2 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA Hook */}
                <div className="pt-5 mt-4 border-t border-neutral-150/50 flex items-center justify-between">
                  <span className="text-[10px] text-sky-700 font-extrabold uppercase tracking-wider">Book Care</span>
                  <button
                    onClick={() => handleServiceSelect(service.title)}
                    className="text-neutral-400 group-hover:text-sky-600 hover:scale-110 p-1 rounded-lg hover:bg-sky-100/50 transition-all flex items-center gap-1 text-xs"
                    title={`Request appointment for ${service.title}`}
                  >
                    <span className="sr-only">Book Appointment</span>
                    <ArrowRight size={14} className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 p-6 rounded-3xl bg-neutral-50 border border-neutral-100 space-y-2">
              <p className="font-bold text-neutral-800 text-sm">No services matched your query</p>
              <p className="text-xs text-neutral-500 font-medium">Try typing words like 'BP', 'diabetes', 'fever' or 'checkup'</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs font-bold text-sky-600 hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
