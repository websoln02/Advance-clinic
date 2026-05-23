import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Calendar, Phone, ClipboardList, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { Appointment } from '../types';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    symptoms: ''
  });

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Suffix/Time slot choices predicated on real clinic hours
  const morningSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"];
  const eveningSlots = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

  // Fetch local appointments on mount
  useEffect(() => {
    const saved = localStorage.getItem('advance_clinic_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const currentISTDate = () => {
    const istNow = new Date(new Date().getTime() + 3600000 * 5.5);
    return istNow.toISOString().split('T')[0];
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    const { name, phone, date, time, symptoms } = formData;

    if (!name.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit Indian phone number');
      return;
    }
    if (!date) {
      setErrorMsg('Please choose a preferred date');
      return;
    }

    const newAppointment: Appointment = {
      id: "APT_" + Math.random().toString(36).substring(2, 9).toUpperCase(),
      name,
      phone,
      date,
      time,
      symptoms: symptoms.trim() || "Routine Checkup",
      status: 'confirmed', // Highly encouraging for local clinic to auto-confirm
      createdAt: new Date().toISOString()
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem('advance_clinic_appointments', JSON.stringify(updated));

    setSuccessMsg(`Congratulations, ${name}! Your clinic consultation on ${date} at ${time} is requested and auto-confirmed. We will message you.`);
    
    // Clear state inputs but retain name/phone for easier subsequent family bookings
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '10:00 AM',
      symptoms: ''
    });

    // Scroll slightly to see success massage or dashboard
    const listElem = document.getElementById('my-appointments-headline');
    if (listElem) {
      setTimeout(() => {
        listElem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleCancelAppointment = (id: string) => {
    const updated = appointments.map(apt => 
      apt.id === id ? { ...apt, status: 'cancelled' as const } : apt
    );
    setAppointments(updated);
    localStorage.setItem('advance_clinic_appointments', JSON.stringify(updated));
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-sky-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Section embedded */}
        <div className="bg-gradient-to-tr from-sky-600/95 to-blue-700/95 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden border border-white/15 backdrop-blur-md">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest bg-white/20 text-white py-1 px-3 rounded-full uppercase">Priority Service</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Need Urgent Consultation? Book Online Today</h2>
            <p className="text-sm sm:text-base text-sky-100 font-medium">
              Advance Clinic supports instant bookings. Fill up this short form, choose your preferred timing, and check-in to skip the waiting queue directly at Karelibagh.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Block / Left Detail Column */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-[2.5rem] shadow-xl border border-white/60">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block mb-2">APPOINTMENT RESERVATION</span>
            <h3 className="text-2xl font-extrabold text-neutral-900 mb-6">Schedule Your Visit</h3>

            {/* Error notifications */}
            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs font-semibold flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Success notification */}
            {successMsg && (
              <div className="mb-6 p-5 bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-2xl text-xs font-semibold flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {/* Name and Phone Input */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Full Patient Name</label>
                  <div className="relative">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Mobile Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-bold text-xs">+91</span>
                    <input
                      name="phone"
                      id="phone"
                      type="tel"
                      maxLength={10}
                      placeholder="9376? ?????"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Date and Time slots */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Preferred Booking Date</label>
                  <input
                    name="date"
                    id="date"
                    type="date"
                    min={currentISTDate()}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Preferred Slot Time</label>
                  <select
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-transparent transition-all"
                  >
                    <optgroup label="Morning Shift (10 AM - 1 PM)">
                      {morningSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </optgroup>
                    <optgroup label="Evening Shift (5 PM - 9 PM)">
                      {eveningSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Symptoms / Custom notes */}
              <div className="space-y-2">
                <label htmlFor="symptoms" className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Describe Symptoms or General Message</label>
                <textarea
                  name="symptoms"
                  id="symptoms"
                  rows={4}
                  placeholder="e.g. Running fever since last night, severe hypertension screening, regular BP review, child consultation..."
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm py-4 rounded-xl shadow-lg hover:shadow-sky-500/10 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <ClipboardList size={16} />
                <span>Submit & Confirm Appointment</span>
              </button>

            </form>
          </div>

          {/* Right Column: User's Booking Dashboard / Real feedback */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-white/60 text-neutral-800 space-y-4">
              <h4 className="font-extrabold text-neutral-900 text-base flex items-center gap-2">
                <Clock size={18} className="text-sky-600" />
                <span>Our Timing Guidelines</span>
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                Advance Clinic timing parameters are strictly optimized for Karelibagh residents:
              </p>
              
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs py-1 border-b border-sky-100 font-semibold text-neutral-900">
                  <span>Shift Hour morning:</span>
                  <span className="text-sky-700 font-bold">{CLINIC_INFO.timings.morning}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-sky-100 font-semibold text-neutral-900">
                  <span>Shift Hour Evening:</span>
                  <span className="text-sky-700 font-bold">{CLINIC_INFO.timings.evening}</span>
                </div>
                <div className="flex justify-between text-xs py-1 font-semibold text-neutral-900">
                  <span>Sunday Availability:</span>
                  <span className="text-red-600 font-bold">{CLINIC_INFO.timings.sunday}</span>
                </div>
              </div>

              <div className="p-4 glass-panel rounded-2xl text-[11px] text-sky-850 leading-relaxed font-semibold">
                🔔 <strong>Pre-Booking Note:</strong> You will receive a direct WhatsApp confirm notification or confirmation call relative to your designated Slot choice. Feel free to call +91 93762 63163 for prompt check-ins.
              </div>
            </div>

            {/* My Active Bookings Local dashboard list */}
            <div className="glass-panel-heavy p-6 sm:p-8 rounded-[2rem] border border-white/60 shadow-lg">
              <h4 id="my-appointments-headline" className="font-extrabold text-neutral-900 text-base mb-4 flex items-center justify-between">
                <span>My Appointments ({appointments.filter(a => a.status !== 'cancelled').length})</span>
                <span className="text-[10px] text-sky-600 bg-sky-50 py-1 px-2.5 rounded-full font-bold">Local Storage</span>
              </h4>

              {appointments.length > 0 ? (
                <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                  {appointments.map((apt) => (
                    <div 
                      key={apt.id}
                      className={`p-4 rounded-2xl border text-xs space-y-2 transition-all ${
                        apt.status === 'cancelled' 
                          ? 'border-neutral-100 bg-neutral-50/50 opacity-60' 
                          : 'border-sky-100 bg-sky-50/20'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-extrabold text-neutral-900 text-xs">{apt.name}</p>
                          <p className="text-[10px] text-neutral-500 font-medium mt-0.5">{apt.phone}</p>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                          apt.status === 'confirmed' 
                            ? 'bg-emerald-100 text-emerald-850'
                            : apt.status === 'cancelled'
                            ? 'bg-neutral-200 text-neutral-600'
                            : 'bg-amber-100 text-amber-850'
                        }`}>
                          {apt.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-neutral-600 font-semibold bg-white p-2 rounded-lg border border-neutral-100/50">
                        <div className="flex items-center gap-1">
                          <span className="text-neutral-400 font-normal">Date:</span>
                          <span className="text-neutral-800 font-bold">{apt.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-neutral-400 font-normal">Slot:</span>
                          <span className="text-sky-700 font-bold">{apt.time}</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-neutral-500 italic mt-1 line-clamp-1 font-medium">
                        "{apt.symptoms}"
                      </p>

                      {apt.status === 'confirmed' && (
                        <div className="pt-1 flex justify-end">
                          <button
                            onClick={() => handleCancelAppointment(apt.id)}
                            className="text-[10px] font-bold text-red-600 hover:text-red-700 transition-colors"
                          >
                            Cancel Visit
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-neutral-400 text-xs space-y-1">
                  <p className="font-semibold text-neutral-500">No custom bookings created yet.</p>
                  <p className="text-[10px]">Use the clinic wizard slot form above to configure one.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
