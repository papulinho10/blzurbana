import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="conceito" className="py-24 bg-brand-darker relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#39ADDD_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="font-black text-4xl md:text-6xl text-white uppercase mb-4 leading-none">
                    Essência <span className="text-brand-pink">Não</span><br/>
                    Convencional
                </h2>
                <div className="h-2 w-24 bg-brand-yellow"></div>
            </div>
            <p className="text-gray-400 max-w-sm text-right font-medium">
                Dinamismo e diversidade são os pilares que sustentam nossa visão de beleza.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#121212] p-8 border-2 border-transparent hover:border-brand-purple transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/10 rounded-full blur-2xl group-hover:bg-brand-purple/30 transition-all"></div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-cyan/10 text-brand-cyan mb-6 group-hover:bg-brand-cyan group-hover:text-black transition-all rounded-none transform -rotate-3 group-hover:rotate-0">
                <benefit.icon size={28} strokeWidth={2.5} />
              </div>
              
              <h3 className="font-bold text-xl text-white mb-3 uppercase tracking-wide">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-pink to-brand-yellow group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;