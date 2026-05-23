import { HeartPulse, Github, Facebook, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function Footer() {
  const years = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-sky-950 text-white pt-16 pb-24 md:pb-12 border-t border-sky-900 overflow-hidden relative">
      {/* Absolute decorative pattern background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Clinic Brand Bio */}
          <div className="md:col-span-5 space-y-5">
            <a href="#" className="flex items-center gap-2.5" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="bg-sky-500 text-white p-2 rounded-xl">
                <HeartPulse size={20} />
              </div>
              <span className="font-bold text-lg tracking-tight">Advance Clinic</span>
            </a>
            <p className="text-xs text-sky-200/70 leading-relaxed max-w-sm font-medium">
              We provide professional medical consultations, screening, and diagnostic solutions with compassion and care. Certified by hundreds of local families in Karelibagh, Vadodara, Gujarat.
            </p>
            {/* Short highlight badge */}
            <div className="inline-block bg-sky-900/60 text-sky-300 border border-sky-800 text-[10px] font-semibold py-1 px-3 rounded-full">
              ⭐ Rated 4.5 ★ by 24 happy patients
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-450 border-b border-sky-900 pb-2">Medical Directory</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-sky-200/70 font-semibold font-sans">
              <button onClick={() => handleLinkClick('about')} className="text-left hover:text-white transition-colors">About Us</button>
              <button onClick={() => handleLinkClick('services')} className="text-left hover:text-white transition-colors">Services</button>
              <button onClick={() => handleLinkClick('why-choose-us')} className="text-left hover:text-white transition-colors">Why us</button>
              <button onClick={() => handleLinkClick('gallery')} className="text-left hover:text-white transition-colors">Gallery</button>
              <button onClick={() => handleLinkClick('reviews')} className="text-left hover:text-white transition-colors">Reviews</button>
              <button onClick={() => handleLinkClick('faq')} className="text-left hover:text-white transition-colors">FAQs</button>
              <button onClick={() => handleLinkClick('contact')} className="text-left hover:text-white transition-colors">Directions</button>
              <button onClick={() => handleLinkClick('appointment')} className="text-left hover:text-white transition-colors font-bold text-sky-400">Book visit</button>
            </div>
          </div>

          {/* Column 3: Contact Details footer */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-450 border-b border-sky-900 pb-2">Location & Phone</h4>
            <ul className="space-y-3 text-xs text-sky-200/70 font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-sky-400 shrink-0 mt-0.5" />
                <span>71, Ambalal Park Rd, Karelibagh, Vadodara, Gujarat 390018</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneFormatted}`} className="hover:text-white transition-colors font-bold">
                  +91 93762 63163
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="text-sky-400 shrink-0" />
                <span>Shift Operations: Mon - Sat (Closed Sunday)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-sky-900/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sky-200/50 font-semibold text-center">
          <p>© {years} Advance Clinic (Karelibagh, Vadodara). All rights reserved.</p>
          
          {/* Social media links */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200/30">Connect</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-1">
              <Facebook size={16} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold">
              Google Maps Reviews (24+ Stars)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
