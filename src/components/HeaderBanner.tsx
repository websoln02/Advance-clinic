import { Phone, Clock, MapPin, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { motion } from 'motion/react';

export default function HeaderBanner() {
  return (
    <div className="bg-gradient-to-r from-sky-950 to-blue-900 text-white py-2 px-4 shadow-sm relative z-50 overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Urgent Announcement / Emergency Indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.span 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ type: 'tween', duration: 1.5, repeat: Infinity }}
            className="flex h-2.5 w-2.5 rounded-full bg-red-500 ring-4 ring-red-500/30"
          />
          <span className="font-semibold uppercase tracking-wider text-[10px] bg-red-600 px-1.5 py-0.5 rounded text-white flex items-center gap-1 shrink-0">
            <AlertCircle size={10} /> Emergency Support Available
          </span>
          <span className="text-sky-100 font-medium">
            Immediate Consult: <a href={`tel:${CLINIC_INFO.phoneFormatted}`} className="underline hover:text-white font-bold transition-colors">{CLINIC_INFO.phone}</a>
          </span>
        </div>

        {/* Essential Info Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sky-200">
          <div className="flex items-center gap-1">
            <MapPin size={12} className="text-sky-400 shrink-0" />
            <span>Karelibagh, Vadodara</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} className="text-sky-400 shrink-0" />
            <span>Mon–Sat: 10 AM–1 PM, 5 PM–9 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
