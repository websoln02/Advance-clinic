import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function FloatingCTA() {
  const whatsappUrl = `https://wa.me/919376263163?text=Hi%20Advance%20Clinic%20Vadodara!%20I%20want%2520to%2520book%2520an%2520appointment.`;

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
    <>
      {/* 
        Floating WhatsApp button (always visible)
        Positioned slightly higher on mobile to prevent blocking by Mobile Bottom Navigation Bar
      */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed z-30 bottom-24 right-5 sm:bottom-6 sm:right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-108 active:scale-95 transition-all flex items-center justify-center border border-emerald-400/30 group"
      >
        {/* Hover Support tooltip banner */}
        <span className="absolute right-full mr-3 bg-white text-neutral-800 text-[10px] font-bold py-1.5 px-3 rounded-xl shadow-lg border border-neutral-100 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          💬 Chat with clinic on WhatsApp
        </span>
        <MessageSquare size={22} className="stroke-[2.5px]" />
      </a>

      {/* 
        Sticky Mobile Bottom Action Bar
        Visible ONLY on screens smaller than lg (desktop)
      */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-35 glass-panel-heavy border-t border-white/50 shadow-2xl px-3 py-2.5 grid grid-cols-2 gap-2">
        {/* Left Option: Call clinic */}
        <a
          href={`tel:${CLINIC_INFO.phoneFormatted}`}
          className="flex items-center justify-center gap-2 py-3 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 font-extrabold text-xs rounded-xl transition-all"
        >
          <Phone size={14} className="text-sky-600" />
          <span>Call Clinic</span>
        </a>

        {/* Right Option: Book slot */}
        <button
          onClick={handleScrollToBooking}
          className="flex items-center justify-center gap-2 py-3 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-sky-500/10 transition-all"
        >
          <Calendar size={14} />
          <span>Book Visit</span>
        </button>
      </div>
    </>
  );
}
