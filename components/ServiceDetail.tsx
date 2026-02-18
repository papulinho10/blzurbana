import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Instagram, Camera } from 'lucide-react';
import { Service } from '../types';
import Button from './ui/Button';
import { WHATSAPP_LINK } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mouse drag handlers for Desktop "pull" feel
  const handleMouseDown = (e: React.MouseEvent) => {
    if(!scrollContainerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    // Aumentado pt-24 para pt-32 (padding top) para evitar sobreposição do header
    <div className="pt-32 min-h-screen bg-brand-dark pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-brand-cyan transition-colors mb-8 uppercase text-sm font-bold tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar ao Menu
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-pink/30 transform translate-x-4 translate-y-4 hidden md:block"></div>
            {/* Alterado aspect ratio para mobile: aspect-video no mobile, aspect-[3/4] no desktop */}
            <div className="relative aspect-video md:aspect-[3/4] overflow-hidden border border-white/10 bg-[#1a1a1a] group rounded-sm">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-yellow"></span>
              <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs md:text-sm">Serviço Premium</span>
            </div>

            {/* Ajuste de tamanho de fonte para mobile: text-4xl no mobile, text-7xl no desktop */}
            <h1 className="font-black text-4xl md:text-5xl lg:text-7xl text-white uppercase mb-8 leading-[0.9]">
              {service.title}
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 font-medium">
              {service.fullDescription}
            </p>

            <div className="mb-12">
              <h3 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4 text-sm md:text-base">O que inclui</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-3 text-gray-400 group text-sm md:text-base"
                  >
                    <CheckCircle2 size={20} className="text-brand-purple flex-shrink-0 group-hover:text-brand-yellow transition-colors mt-0.5" />
                    <span className="group-hover:text-white transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button fullWidth>
                  <Calendar size={18} className="mr-2" />
                  Agendar Horário
                </Button>
              </a>
            </div>

          </motion.div>
        </div>

        {/* Gallery Section with Pull-to-Scroll */}
        {service.galleryImages && service.galleryImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
             <div className="flex items-center gap-3 mb-8">
                <Camera className="text-brand-cyan" size={24} />
                <h3 className="text-2xl font-black text-white uppercase">Inspirações</h3>
             </div>
             
             {/* Horizontal Scroll Container */}
             {/* Added event listeners for mouse drag and scrollbar-hide class */}
             <div 
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`flex overflow-x-auto gap-4 pb-6 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 ${isDown ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory'}`}
             >
                {service.galleryImages.map((img, idx) => (
                  /* Reduzi o tamanho das imagens da galeria no mobile para w-[200px] h-[260px] */
                  <div key={idx} className="flex-shrink-0 w-[200px] h-[260px] md:w-[300px] md:h-[400px] snap-center border border-white/10 bg-[#1a1a1a] relative group overflow-hidden select-none">
                    <img 
                      src={img} 
                      alt={`${service.title} inspiration ${idx + 1}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest">Beleza Urbana</span>
                    </div>
                  </div>
                ))}
             </div>
             <p className="text-center text-xs text-gray-500 mt-2 md:hidden">Deslize para ver mais</p>
          </motion.div>
        )}

        {/* Collaborators Section */}
        {service.collaborators && service.collaborators.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-16"
          >
            <div className="text-center mb-12">
              <span className="text-brand-pink font-bold uppercase tracking-widest text-xs md:text-sm">Nosso Time</span>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase mt-2">Quem Faz Acontecer</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {service.collaborators.map((collab) => (
                <div key={collab.id} className="group relative w-full sm:w-[280px] bg-[#150a1f] border border-white/5 p-6 flex flex-col items-center hover:border-brand-purple transition-colors">
                  
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-brand-pink to-brand-cyan mb-4 group-hover:scale-105 transition-transform">
                    <img 
                      src={collab.image} 
                      alt={collab.name} 
                      className="w-full h-full rounded-full object-cover border-4 border-[#150a1f]"
                    />
                  </div>
                  
                  <h4 className="text-white font-bold text-xl uppercase mb-1">{collab.name}</h4>
                  <span className="text-gray-400 text-sm font-medium mb-6">{collab.role}</span>
                  
                  <a 
                    href={collab.instagramLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-cyan hover:text-white transition-colors text-sm font-bold uppercase tracking-wide border border-brand-cyan/30 hover:bg-brand-cyan hover:border-brand-cyan px-4 py-2 w-full justify-center"
                  >
                    <Instagram size={16} />
                    {collab.instagramHandle}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default ServiceDetail;