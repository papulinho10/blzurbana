import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const Benefits: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Play when 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
            console.log("Autoplay prevented by browser");
          });
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="conceito" className="py-24 bg-brand-darker relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#39ADDD_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Highlight Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto mb-24"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-t-4 border-l-4 border-brand-cyan z-0"></div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border-b-4 border-r-4 border-brand-pink z-0"></div>
          <div className="absolute top-1/2 -right-12 w-24 h-24 bg-brand-purple blur-3xl opacity-50 z-0"></div>

          <div 
            className="relative z-10 w-full bg-black border border-white/10 shadow-2xl cursor-pointer group overflow-hidden rounded-xl flex justify-center items-center"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/api/video"
              className="w-full h-auto max-h-[85vh] object-contain transition-transform duration-700 group-hover:scale-105"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 pointer-events-none"></div>

            {/* Custom Branding / Text on Video */}
            <div className="absolute top-6 left-6 pointer-events-none flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></div>
                <span className="text-white font-bold tracking-[0.2em] text-xs uppercase drop-shadow-md">Beleza Urbana</span>
            </div>

            {/* Mute Button */}
            <button 
              onClick={toggleMute}
              className="absolute bottom-6 right-6 bg-black/40 hover:bg-brand-pink text-white p-3 rounded-full backdrop-blur-md transition-all z-20 border border-white/10 hover:border-brand-pink"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Center Play/Pause Icon */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${!isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100'}`}>
              <div className="bg-black/40 backdrop-blur-md w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full text-white border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {!isPlaying ? <Play size={32} className="ml-1 md:ml-2" fill="currentColor" /> : <Pause size={32} fill="currentColor" />}
              </div>
            </div>
          </div>
        </motion.div>

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