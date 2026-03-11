import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Instagram, Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Service } from '../types';
import Button from './ui/Button';
import { WHATSAPP_LINK } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = service.galleryImages && service.galleryImages.length > 0 
    ? service.galleryImages 
    : [service.image];

  const paginate = (newDirection: number) => {
    const newIndex = imgIndex + newDirection;
    if (newIndex >= 0 && newIndex < images.length) {
        setImgIndex(newIndex);
    } else if (newIndex >= images.length) {
        setImgIndex(0); // Loop back to start
    } else if (newIndex < 0) {
        setImgIndex(images.length - 1); // Loop to end
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (images.length <= 1 || selectedImageIndex !== null) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [imgIndex, images.length, selectedImageIndex]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
      if (e.key === 'ArrowLeft') setSelectedImageIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, images.length]);

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
          
          {/* Left: Image / Gallery Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-pink/30 transform translate-x-4 translate-y-4 hidden md:block"></div>
            
            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden group cursor-grab active:cursor-grabbing">
                <motion.div
                    className="flex items-start"
                    animate={{ x: `-${imgIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        const swipeThreshold = 100; // Lower threshold for easier swipe

                        // Check if swipe is strong enough or drag distance is significant (e.g., > 25% of width approx, or just > 50px)
                        if (offset.x < -50 || (offset.x < 0 && swipe < -swipeThreshold)) {
                            paginate(1);
                        } else if (offset.x > 50 || (offset.x > 0 && swipe > swipeThreshold)) {
                            paginate(-1);
                        }
                    }}
                >
                    {images.map((img, idx) => {
                        const isActive = idx === imgIndex;
                        return (
                        <div 
                            key={idx} 
                            className="w-full flex-shrink-0 relative cursor-pointer border border-white/10 rounded-sm overflow-hidden"
                            onClick={() => handleImageClick(idx)}
                        >
                            <motion.img 
                                src={img} 
                                alt={`${service.title} ${idx + 1}`} 
                                className="w-full h-auto block pointer-events-none"
                                loading="lazy"
                                animate={{ 
                                    filter: isActive ? "grayscale(0%) brightness(1)" : "grayscale(80%) brightness(0.5)",
                                    opacity: isActive ? 1 : 0.6
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 pointer-events-none"></div>
                            
                            {/* Image Counter */}
                            {images.length > 1 && (
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full z-30 pointer-events-none border border-white/10">
                                    {idx + 1} / {images.length}
                                </div>
                            )}

                            {/* Dots Indicator */}
                            {images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
                                    {images.map((_, dotIdx) => (
                                        <div 
                                            key={dotIdx} 
                                            className={`w-2 h-2 rounded-full transition-colors ${dotIdx === idx ? 'bg-brand-pink' : 'bg-white/30'}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )})}
                </motion.div>
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
                  <span className="flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Agendar Horário
                  </span>
                </Button>
              </a>
            </div>

          </motion.div>
        </div>

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
                      loading="lazy"
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={handleCloseLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-brand-pink transition-colors z-50"
              onClick={handleCloseLightbox}
            >
              <X size={40} />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white hover:text-brand-cyan transition-colors z-50 p-2 bg-black/20 rounded-full hover:bg-black/50"
              onClick={handlePrevImage}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={images[selectedImageIndex]}
              alt="Full screen view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              loading="lazy"
            />

            <button
              className="absolute right-4 md:right-8 text-white hover:text-brand-cyan transition-colors z-50 p-2 bg-black/20 rounded-full hover:bg-black/50"
              onClick={handleNextImage}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ServiceDetail;