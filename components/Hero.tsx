import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-brand-dark pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(131,3,175,0.8) 0%, rgba(131,3,175,0) 70%)' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(225,78,114,0.8) 0%, rgba(225,78,114,0) 70%)' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>
      
      {/* Dynamic Image Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
          <img 
            src="https://i.postimg.cc/LsCy05Dg/interior-completo.avif"
            alt="Urban Beauty Model"
            className="w-full h-full object-cover opacity-20 grayscale"
            fetchPriority="high"
            loading="eager"
          />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <motion.div 
            className="md:col-span-8 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-brand-yellow animate-pulse" />
            <span className="text-brand-cyan font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
              Gramado • Brasil
            </span>
          </div>
          
          {/* Ajuste de responsividade do título */}
          <h1 className="font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            Beleza <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-cyan">
              Urbana
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-xl mb-10 font-medium border-l-4 border-brand-yellow pl-6">
            Liberdade. Leveza. Quebra de padrões. <br/>
            Se amar do jeito que se é.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button>
                Agendar Horário <ArrowRight size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Decorative Side Element */}
        <motion.div 
            className="hidden md:block md:col-span-4 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
             <div className="relative w-full aspect-[3/4] border-4 border-brand-cyan transform rotate-6">
                <motion.img 
                    src="https://i.postimg.cc/qBFQFvYn/Cabecalho-(Post-para-Instagram-(45))-(1).png" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Urban Style"
                    fetchPriority="high"
                    loading="eager"
                    animate={{ 
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <div className="absolute -bottom-10 -left-10 bg-brand-pink text-white font-black text-4xl p-4 transform -rotate-6 shadow-[8px_8px_0px_#8303AF]">
                    BLZ<br/>URB
                </div>
             </div>
        </motion.div>

      </div>
      
      {/* Scroll Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:flex items-center gap-4 rotate-90 origin-right translate-x-8"
      >
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-cyan">Explore a essência</span>
        <div className="w-12 h-[2px] bg-brand-cyan"></div>
      </motion.div>
    </section>
  );
};

export default Hero;