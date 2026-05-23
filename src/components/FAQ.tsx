import { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1'); // Show first FAQ open by default

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-sky-50/20 to-sky-50/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Queries & Guidance Center
          </h2>
          <p className="text-neutral-500 font-medium text-sm">
            Everything you need to know about setting up consultations, shifts, prescriptions, and emergencies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`transition-all duration-300 overflow-hidden rounded-2xl ${
                  isOpen 
                    ? 'glass-panel-heavy border-white/70 shadow-lg ring-1 ring-sky-300/10' 
                    : 'glass-panel border-white/50 shadow-sm'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-start gap-4 focus:outline-none focus:bg-sky-50/10"
                >
                  <div className="flex gap-3 items-start">
                    <span className="mt-0.5 shrink-0 text-sky-600">
                      <HelpCircle size={18} className="stroke-[2.2px]" />
                    </span>
                    <h3 className="text-sm font-bold text-neutral-900 tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="shrink-0 text-neutral-400 mt-1">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Animated Drawer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-neutral-100/50 text-xs text-neutral-600 leading-relaxed font-semibold">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
