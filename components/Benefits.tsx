import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="conceito" className="py-24 bg-brand-darker relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#39ADDD_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24">
          {/* Highlight Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative w-fit">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-t-4 border-l-4 border-brand-cyan z-0"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border-b-4 border-r-4 border-brand-pink z-0"></div>
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-brand-purple blur-3xl opacity-50 z-0 pointer-events-none"></div>

              <div 
                className="relative z-10 w-fit rounded-xl overflow-hidden border border-white/10 shadow-2xl group bg-black"
              >
                <img
                  src="https://i.postimg.cc/kMcVrS8Y/trabalho-novo-6.avif"
                  alt="Beleza Urbana Conceito"
                  className="w-auto h-auto max-h-[70vh] max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 pointer-events-none"></div>

              {/* Custom Branding / Text on Image */}
              <div className="absolute top-6 left-6 pointer-events-none flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></div>
                  <span className="text-white font-bold tracking-[0.2em] text-xs uppercase drop-shadow-md">Beleza Urbana</span>
              </div>
            </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="max-w-xl">
                <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-6 leading-tight">
                    Essência <span className="text-brand-pink">Não</span><br/>
                    Convencional
                </h2>
                <div className="h-2 w-24 bg-brand-yellow mb-8"></div>
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                    Dinamismo e diversidade são os pilares que sustentam nossa visão de beleza. Quebramos padrões para revelar a sua verdadeira identidade.
                </p>
            </div>
          </motion.div>
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
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full transition-all" style={{ background: 'radial-gradient(circle, rgba(131,3,175,0.15) 0%, rgba(131,3,175,0) 70%)' }}></div>
              
              <motion.div 
                className="inline-flex items-center justify-center w-14 h-14 bg-brand-cyan/10 text-brand-cyan mb-6 group-hover:bg-brand-cyan group-hover:text-black transition-all rounded-none transform -rotate-3 group-hover:rotate-0"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5 
                }}
              >
                <benefit.icon size={28} strokeWidth={2.5} />
              </motion.div>
              
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