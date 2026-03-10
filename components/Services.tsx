import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import Button from './ui/Button';
import { Coffee, Camera, Sunset } from 'lucide-react';

interface ServicesProps {
  onServiceClick?: (id: number) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="servicos" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Nosso Menu</span>
            <h2 className="font-black text-4xl md:text-6xl text-white uppercase">Beleza Urbana</h2>
          </div>
          <div className="hidden md:flex gap-2">
             <div className="w-4 h-4 bg-brand-pink rounded-full"></div>
             <div className="w-4 h-4 bg-brand-purple rounded-full"></div>
             <div className="w-4 h-4 bg-brand-cyan rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              /* Alterado h-[450px] para h-[350px] md:h-[450px] para diminuir no mobile */
              className="group relative h-[350px] md:h-[450px] cursor-pointer"
              onClick={() => onServiceClick && onServiceClick(service.id)}
            >
              {/* Card Container */}
              <div className="absolute inset-0 bg-gray-800 transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 border border-white/10 z-0"></div>
              
              <motion.div 
                className="absolute inset-0 z-10 overflow-hidden bg-black border border-white/5"
                whileInView={{ borderColor: '#E14E72' }}
                viewport={{ amount: 0.6 }}
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0.6, grayscale: 1, scale: 1 }}
                  whileInView={{ opacity: 1, grayscale: 0, scale: 1.1 }}
                  viewport={{ amount: 0.6 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.h3 
                    className="font-black text-2xl text-white mb-2 uppercase leading-none"
                    initial={{ y: 0 }}
                    whileInView={{ y: -20 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.div 
                    className="h-1 bg-brand-cyan mb-4" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.p 
                    className="text-gray-300 text-sm mb-4 font-medium line-clamp-2 md:line-clamp-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.span 
                    className="text-xs font-bold text-brand-yellow uppercase tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    + Ver Detalhes
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* New Bar & Atmosphere Section */}
        <div className="mt-20 border-t border-white/10 pt-16">
            <div className="text-center mb-12">
                <span className="text-brand-pink font-bold uppercase tracking-widest text-sm">Experiência Completa</span>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase mt-2">Muito Mais Que Beleza</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Bar/Lancheria */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group bg-[#150a1f] border border-white/10 hover:border-brand-purple transition-all duration-500 rounded-sm overflow-hidden flex flex-col"
                >
                    <div className="relative h-64 overflow-hidden">
                        <motion.img 
                            src="https://i.postimg.cc/1Xg8SCDp/bar-neon.avif" 
                            alt="Bar Neon Beleza Urbana" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            whileInView={{ scale: 1.1 }}
                            transition={{ duration: 1.5 }}
                        />
                         <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div 
                                className="w-10 h-10 bg-brand-purple/20 flex items-center justify-center rounded-full text-brand-purple"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            >
                                <Coffee size={20} />
                            </motion.div>
                            <h3 className="text-2xl font-black text-white uppercase">Bar & Lancheria <span className="text-brand-purple">Exclusivos</span></h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            Relaxe em nosso bar enquanto cuida da sua beleza! Um ambiente descontraído com neon vibrante, onde servimos drinks especiais, águas, refrigerantes e lanches deliciosos para tornar sua experiência ainda mais prazerosa.
                        </p>
                    </div>
                </motion.div>

                {/* Vista/Fotos */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group bg-[#150a1f] border border-white/10 hover:border-brand-yellow transition-all duration-500 rounded-sm overflow-hidden flex flex-col"
                >
                    <div className="relative h-64 overflow-hidden">
                         <motion.img 
                            src="https://i.postimg.cc/dVRLJTTw/por-do-sol.avif" 
                            alt="Vista do Pôr do Sol" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            whileInView={{ scale: 1.1 }}
                            transition={{ duration: 1.5 }}
                        />
                         <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                             <motion.div 
                                className="w-10 h-10 bg-brand-yellow/20 flex items-center justify-center rounded-full text-brand-yellow"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Sunset size={20} />
                            </motion.div>
                            <h3 className="text-2xl font-black text-white uppercase">Vista <span className="text-brand-yellow">Espetacular</span></h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            Nossa localização privilegiada oferece uma vista deslumbrante do pôr do sol mais fantástico de Gramado. Além disso, cada canto do nosso salão foi pensado para ser um lugar espetacular para tirar fotos incríveis.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
        
        <div className="mt-16 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-white border-white hover:border-brand-yellow hover:text-brand-yellow w-full md:w-auto">Falar com Especialista</Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;