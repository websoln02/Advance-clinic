import { Activity, ShieldAlert, HeartPulse, CheckSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function About() {
  const pillars = [
    {
      title: "Experienced Consultations",
      description: "Get diagnosed by certified and compassionate medical experts who take the time to evaluate symptoms deeply.",
    },
    {
      title: "Patient Care First",
      description: "Our staff prioritizes the physical comfort and mental relief of children, adults, and senior citizens alike.",
    },
    {
      title: "Affordable Care Packages",
      description: "Clinical services, basic diagnostics, and follow-up checks are reasonably priced so healthcare remains accessible.",
    },
    {
      title: "Personalized Attention",
      description: "Every body responds differently. We offer customized nutrition and lifestyle instructions alongside remedies.",
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo Grid & Local Stars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              {/* Highlight Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/30 to-teal-200/30 filter blur-xl rounded-3xl transform rotate-2 scale-102 -z-10" />
              
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Advance Clinic Room"
                className="rounded-3xl shadow-xl w-full h-[380px] object-cover object-center border-4 border-white"
                referrerPolicy="no-referrer"
              />

              {/* Floating review callout */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel-heavy rounded-2xl p-4 shadow-xl border border-white/60 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-neutral-900">Highly Rated in Karelibagh</p>
                  <p className="text-xs text-neutral-500">Based on 24 local patient evaluations</p>
                </div>
                <div className="glass-panel text-sky-850 px-3 py-1 text-xs font-bold rounded-lg border border-white/50">
                  4.5 ★ Rating
                </div>
              </div>
            </div>

            {/* Micro details grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel shadow-sm border border-white/50">
                <p className="text-2xl font-extrabold text-sky-600 block">100%</p>
                <p className="text-xs font-medium text-neutral-500 mt-0.5">Sanitized Premises</p>
              </div>
              <div className="p-4 rounded-2xl glass-panel-teal shadow-sm border border-white/50">
                <p className="text-2xl font-extrabold text-teal-650 block">Affordable</p>
                <p className="text-xs font-medium text-neutral-500 mt-0.5">Consultation Fees</p>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative and Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">ABOUT ADVANCE CLINIC</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Providing Trusted Healthcare Support with Personal Attention
              </h2>
            </div>

            <p className="text-neutral-605 text-base leading-relaxed">
              Located in the heart of Karelibagh, Vadodara, <strong>Advance Clinic</strong> has established itself as a cornerstone of modern primary healthcare and diagnosis. We believe that professional medical care must combine state-of-the-art diagnostic integrity with custom empathy.
            </p>
            <p className="text-neutral-605 text-base leading-relaxed">
              Whether you need routine disease consultations, infection therapies, hypertension checkups, pediatric immunization support, or continuous blood sugar management, our clinical setup is designed to accommodate your family with transparency, safety, and respect.
            </p>

            {/* Pillars list */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 pt-4">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 shrink-0 bg-sky-100/80 p-1 rounded-lg text-sky-600">
                    <CheckSquare size={16} className="stroke-[2.5px]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">{pillar.title}</h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-normal">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
