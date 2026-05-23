import { Clock, Calendar, AlertTriangle, Coffee } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { getClinicStatus } from '../utils';
import { useState, useEffect } from 'react';

export default function Timings() {
  const [status, setStatus] = useState(getClinicStatus());

  useEffect(() => {
    const handle = setInterval(() => {
      setStatus(getClinicStatus());
    }, 15000);
    return () => clearInterval(handle);
  }, []);

  const weekdayTimings = [
    { shift: "Morning Clinic Consultation", hours: CLINIC_INFO.timings.morning, note: "Physician Consultations & General Diagnostic Screening" },
    { shift: "Afternoon Intermission", hours: "1:00 PM – 5:00 PM", note: "Clinic resting state, phone bookings open", isBreak: true },
    { shift: "Evening Clinic Consultation", hours: CLINIC_INFO.timings.evening, note: "Chronic Disease follows, Fever and Child Health Guidance" },
  ];

  return (
    <section id="timings" className="py-16 bg-gradient-to-b from-white to-sky-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header block */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">CLINICAL OPERATIONAL HOURS</span>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">Shift Schedules & Availability</h2>
          <p className="text-neutral-500 text-xs font-semibold leading-relaxed">
            Please refer to the schedules below to configure appointments or plan minor walk-ins directly in Vadodara.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Live Status Display Card */}
          <div className="md:col-span-4 glass-panel-heavy p-8 rounded-[2.5rem] border border-white/60 shadow-lg flex flex-col justify-between text-center relative overflow-hidden">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-sky-500" />
            
            <div className="space-y-6 pt-4">
              <span className="text-[10px] bg-sky-50 text-sky-700 font-extrabold px-3 py-1.5 rounded-full border border-sky-100 uppercase tracking-widest">
                Live Status Tracker
              </span>

              {/* Pulsing indicator */}
              <div className="flex flex-col items-center justify-center space-y-3 pt-2">
                <span className={`h-16 w-16 rounded-full flex items-center justify-center ${
                  status.isOpen ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                }`}>
                  <Clock size={32} className={status.isOpen ? 'animate-pulse' : ''} />
                </span>
                
                <h3 className={`text-2xl font-black ${
                  status.isOpen ? 'text-emerald-700' : 'text-neutral-700'
                }`}>
                  {status.isOpen ? 'Clinic is Open' : 'Clinic is Closed'}
                </h3>
                
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[220px] font-medium">
                  {status.message}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100/60 text-center space-y-1">
              <span className="text-[10px] text-neutral-400 font-bold block uppercase tracking-wider">Need Immediate Checkup?</span>
              <a href={`tel:${CLINIC_INFO.phoneFormatted}`} className="text-base font-extrabold text-sky-600 hover:text-sky-700 hover:underline">
                Call +91 93762 63163
              </a>
            </div>
          </div>

          {/* Right Column: Modern Timeline Card Grid */}
          <div className="md:col-span-8 glass-panel p-8 rounded-[2.5rem] border border-white/50 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-extrabold text-neutral-900 text-base flex items-center gap-2">
                <Calendar size={18} className="text-sky-600" />
                <span>Monday to Saturday Schedule</span>
              </h3>

              <div className="space-y-4">
                {weekdayTimings.map((time, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                      time.isBreak 
                        ? 'bg-neutral-50/40 border-neutral-150 text-neutral-500' 
                        : 'glass-panel-heavy border border-white/60 shadow-sm hover:border-sky-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`p-2 rounded-xl mt-0.5 shrink-0 ${
                        time.isBreak ? 'bg-neutral-100 text-neutral-400' : 'bg-sky-55/70 text-sky-600'
                      }`}>
                        {time.isBreak ? <Coffee size={16} /> : <Clock size={16} />}
                      </span>
                      <div>
                        <h4 className="font-extrabold text-neutral-900 text-xs sm:text-sm">{time.shift}</h4>
                        <p className="text-[10px] text-neutral-500 mt-0.5 leading-normal">{time.note}</p>
                      </div>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <span className={`text-xs sm:text-sm font-black tracking-tight ${
                        time.isBreak ? 'text-neutral-400' : 'text-sky-700'
                      }`}>
                        {time.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sunday Alert banner */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold flex items-center gap-2.5">
              <AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0" />
              <span>
                <strong>Sunday Closed:</strong> The physical clinic in Karelibagh is closed on Sundays for systematic sanitization. Phone lines accept appointment queries for the upcoming week.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
