import { Phone, MapPin, Navigation, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { motion } from 'motion/react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/919376263163?text=Hi%20Advance%20Clinic%20Vadodara!%20I%20want%20to%20inquire%20about%20booking%20a%20consultation.`;

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Contact & Find Advance Clinic
          </h2>
          <p className="text-neutral-500 font-medium">
            We are conveniently located in Karelibagh, Vadodara. Reach out directly via digital communication or drive directly to our clinical premises.
          </p>
        </div>

        {/* Contact layout grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Action Bars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-neutral-900">Clinic Directory</h3>
              
              {/* Address card */}
              <div className="flex gap-4 items-start p-5 rounded-2xl glass-panel border border-white/60 shadow-sm">
                <div className="p-2.5 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Clinic Address</p>
                  <p className="text-xs font-bold text-neutral-900 leading-relaxed">
                    71, Ambalal Park Rd, Karelibagh, Vadodara, Gujarat 390018
                  </p>
                  <p className="text-[10px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md font-bold inline-block shrink-0 mt-1">
                    📍 Landmark: Karelibagh, Vadodara
                  </p>
                </div>
              </div>

              {/* Telephone card */}
              <div className="flex gap-4 items-start p-5 rounded-2xl glass-panel-teal border border-white/65 shadow-sm">
                <div className="p-2.5 rounded-xl bg-teal-105 text-teal-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Phone Lines</p>
                  <a href={`tel:${CLINIC_INFO.phoneFormatted}`} className="text-sm font-extrabold text-neutral-900 block hover:text-sky-600 transition-colors">
                    +91 93762 63163
                  </a>
                  <p className="text-[10px] text-neutral-500 font-medium">Available for appointments during shifts</p>
                </div>
              </div>

              {/* Timings summary card */}
              <div className="p-5 rounded-2xl glass-panel-dark text-white space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">Weekly Clinical Schedules</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="opacity-80">Monday - Saturday</p>
                    <p className="font-extrabold text-sky-100">{CLINIC_INFO.timings.morning}</p>
                    <p className="font-extrabold text-sky-100">{CLINIC_INFO.timings.evening}</p>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <p className="opacity-80">Sundays</p>
                    <p className="font-extrabold text-rose-300">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick digital CTA Buttons */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">Instant Connections</p>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Dial Telephone button */}
                <a
                  href={`tel:${CLINIC_INFO.phoneFormatted}`}
                  className="p-4 rounded-xl border border-sky-200 hover:border-transparent bg-white hover:bg-sky-600 hover:text-white text-sky-700 font-bold text-center text-xs shadow-sm flex items-center justify-center gap-2 group transition-all"
                >
                  <Phone size={15} className="group-hover:scale-110 transition-transform" />
                  <span>Call Clinician</span>
                </a>

                {/* WhatsApp button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-emerald-200 hover:border-transparent bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 font-bold text-center text-xs shadow-sm flex items-center justify-center gap-2 group transition-all"
                >
                  <MessageSquare size={15} className="group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Google Maps Directions button */}
              <a
                href={CLINIC_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-center text-xs shadow-md shadow-sky-600/10 flex items-center justify-center gap-2 transition-all"
              >
                <Navigation size={15} />
                <span>Get Driving Directions on Map</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Map Embed Frame */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl bg-neutral-100 relative min-h-[350px]">
            <iframe
              src={CLINIC_INFO.mapEmbedUrl}
              title="Advance Clinic Map Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
