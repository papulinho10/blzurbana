import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl text-white mb-4 uppercase">Dúvidas?</h2>
          <p className="text-brand-cyan font-bold uppercase tracking-widest">A gente explica.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={item.id} className="border border-white/10 bg-[#121212]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group"
              >
                <span className="text-lg text-white font-bold group-hover:text-brand-pink transition-colors">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-yellow flex-shrink-0" />
                ) : (
                  <Plus className="text-brand-cyan flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 font-medium leading-relaxed border-t border-white/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;