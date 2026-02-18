import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-brand-dark pt-16 md:pt-0">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-pink rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>
      
      {/* Dynamic Image Overlay */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop"
            alt="Urban Beauty Model"
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
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
                <img 
                    src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Urban Style"
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