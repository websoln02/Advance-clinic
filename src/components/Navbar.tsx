import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, HeartPulse, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { getClinicStatus } from '../utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clinicStatus, setClinicStatus] = useState(getClinicStatus());

  // Periodically refresh clinic status
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setClinicStatus(getClinicStatus());
    }, 30000); // Check every 30s

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Location', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // offset for sticky header
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
    <header 
      style={{ contentVisibility: 'auto' }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel-heavy shadow-lg shadow-sky-950/5 border-b border-white/40 py-2.5' 
          : 'bg-white/30 backdrop-blur-md py-4 border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand / Icon */}
          <a href="#" className="flex items-center gap-2.5 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="bg-gradient-to-tr from-sky-500 to-blue-600 text-white p-2 rounded-xl shadow-md shadow-sky-400/20 group-hover:scale-105 transition-transform">
              <HeartPulse size={22} className="stroke-[2px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-neutral-900 tracking-tight leading-none flex items-center gap-1">
                Advance Clinic
              </span>
              <span className="text-[10px] text-sky-600 font-semibold tracking-wider uppercase">
                Care & Compassion • Vadodara
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.replace('#', ''));
                }}
                className="text-sm font-medium text-neutral-600 hover:text-sky-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Clinic Open/Closed Indicator & CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Indicator Badge */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${clinicStatus.badgeClass}`}>
              <span className={`h-2 w-2 rounded-full ${clinicStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'} shrink-0`} />
              <span>{clinicStatus.message}</span>
            </div>

            <a 
              href={`tel:${CLINIC_INFO.phoneFormatted}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-sky-600 transition-colors"
            >
              <Phone size={14} className="text-sky-500" />
              <span>+91 93762 63163</span>
            </a>

            <button
              onClick={() => scrollToSection('appointment')}
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:shadow-sky-500/20 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Controls: Live Status & Burger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Minimal Pulse Status Dot for mobile to save space */}
            <div 
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border ${clinicStatus.badgeClass}`}
              title={clinicStatus.message}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${clinicStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'}`} />
              <span>{clinicStatus.isOpen ? "Open" : "Closed"}</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-sky-600 hover:bg-sky-50/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-panel-heavy shadow-2xl border-b border-white/50 overflow-hidden animate-fade-in relative z-50">
          <div className="px-4 py-5 space-y-4 bg-gradient-to-b from-white/70 to-sky-50/10">
            {/* Live Timings Status Banner in Drawer */}
            <div className={`p-3 rounded-lg border flex items-center gap-2 ${clinicStatus.badgeClass}`}>
              <span className={`h-2.5 w-2.5 rounded-full ${clinicStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'} shrink-0`} />
              <div className="text-xs">
                <span className="font-bold">Advance Clinic Vadodara: </span>
                <span>{clinicStatus.message}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.replace('#', ''));
                  }}
                  className="p-3 text-center rounded-xl bg-white border border-neutral-100 text-sm font-semibold text-neutral-700 hover:text-sky-600 hover:border-sky-200 shadow-sm block"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Timings summary */}
            <div className="text-center p-3 rounded-xl bg-sky-50/50 text-[11px] text-sky-800 space-y-1">
              <p className="font-bold">Clinic Shift Timings:</p>
              <p>Morning: till 1:00 PM | Evening: 5:00 PM – 9:00 PM</p>
            </div>

            {/* Mobile Contact Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phoneFormatted}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-sky-200 text-sky-700 font-bold text-sm bg-white hover:bg-sky-50 transition-colors"
              >
                <Phone size={16} />
                <span>Call +91 93762 63163</span>
              </a>
              <button
                onClick={() => scrollToSection('appointment')}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 shadow-lg shadow-sky-500/20 transition-all"
              >
                <Calendar size={16} />
                <span>Book Instant Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
