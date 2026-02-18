import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera } from 'lucide-react';

// Fotos dos Trabalhos (Cabelo, Make, Unhas)
const workImages = [
  "https://i.postimg.cc/66LZ9gsd/trabalho-novo-1.avif",
  "https://i.postimg.cc/d1c7Fm4N/trabalho-novo-4.avif",
  "https://i.postimg.cc/kMcVrS8Y/trabalho-novo-6.avif",
  "https://i.postimg.cc/QdRCgJGS/trabalho-novo-5.avif",
  "https://i.postimg.cc/8cPzkyWX/trabalho-novo-2.avif",
];

// Fotos do Ambiente (Espaço físico, decoração)
const environmentImages = [
  "https://i.postimg.cc/ZqTFmmnr/fachada.avif", // Fachada
  "https://i.postimg.cc/LsCy05Dg/interior-completo.avif", // Interior Completo
  "https://i.postimg.cc/8cWt5HSn/interior-principal.avif", // Interior Principal
  "https://i.postimg.cc/KYzfLFbG/area-lavagem.avif", // Area Lavagem
  "https://i.postimg.cc/1Xg8SCDp/bar-neon.avif", // Bar
  "https://i.postimg.cc/dVRLJTTw/por-do-sol.avif", // Vista
];

type TabType = 'environment' | 'works';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('works');

  const imagesToDisplay = activeTab === 'works' ? workImages : environmentImages;

  // Variantes para o efeito de pulsar e revelar cor
  const imageCardVariants = {
    // Estado inicial de entrada (para a troca de abas)
    enter: { 
      opacity: 0, 
      scale: 0.8 
    },
    // Estado "Pulsar em Preto e Branco" (Quando distante do foco ou inativo)
    pulsingBW: {
      opacity: 0.8,
      filter: "grayscale(100%) brightness(0.8)",
      // Keyframes para o pulsar (escala)
      scale: [0.95, 1, 0.95],
      transition: {
        scale: {
          repeat: Infinity,
          duration: 4, // Mais lento (4 segundos)
          ease: "easeInOut"
        },
        filter: { duration: 0.5 },
        opacity: { duration: 0.5 }
      }
    },
    // Estado "Colorido" (Quando aproxima/entra na tela)
    revealColor: {
      opacity: 1,
      filter: "grayscale(0%) brightness(1)",
      // Mantém o pulsar mesmo colorido
      scale: [0.95, 1, 0.95], 
      transition: {
        scale: {
          repeat: Infinity,
          duration: 4, // Mesma velocidade para não "pular"
          ease: "easeInOut"
        },
        filter: { duration: 0.8, ease: "easeOut" }
      }
    },
    // Saída (para troca de abas)
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="galeria" className="py-24 bg-brand-darker relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-black text-4xl md:text-5xl text-white uppercase mb-4">
              {activeTab === 'works' ? 'Nosso ' : 'Nosso '}
              <span className="text-brand-pink">{activeTab === 'works' ? 'Portfolio' : 'Espaço'}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan mb-8"></div>
            
            <p className="text-gray-400 max-w-lg font-medium">
              {activeTab === 'works' 
                ? "Confira os resultados incríveis de quem passou por aqui." 
                : "Um ambiente pensado para o seu bem-estar, com bar, vista e muito estilo."}
            </p>
        </div>

        {/* Botões de Alternância (Tabs) */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('environment')}
            className={`px-8 py-3 uppercase font-bold tracking-wider text-sm transition-all duration-300 transform skew-x-[-10deg] border-2 ${
              activeTab === 'environment'
                ? 'bg-brand-cyan text-black border-brand-cyan shadow-[0_0_15px_rgba(57,173,221,0.5)]'
                : 'bg-transparent text-gray-400 border-gray-700 hover:border-brand-cyan hover:text-white'
            }`}
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-2">
              <Camera size={18} /> Ambiente
            </span>
          </button>

          <button
            onClick={() => setActiveTab('works')}
            className={`px-8 py-3 uppercase font-bold tracking-wider text-sm transition-all duration-300 transform skew-x-[-10deg] border-2 ${
              activeTab === 'works'
                ? 'bg-brand-pink text-white border-brand-pink shadow-[0_0_15px_rgba(225,78,114,0.5)]'
                : 'bg-transparent text-gray-400 border-gray-700 hover:border-brand-pink hover:text-white'
            }`}
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-2">
              <Sparkles size={18} /> Trabalhos
            </span>
          </button>
        </div>

        {/* Grid de Imagens - Aumentado número de colunas para diminuir tamanho das fotos */}
        <motion.div 
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode='popLayout'>
            {imagesToDisplay.map((src, index) => (
              <motion.div
                layout
                key={`${activeTab}-${index}`} // Chave única
                
                // Configuração de animação
                variants={imageCardVariants}
                initial="enter"
                animate="pulsingBW" // Estado padrão (Pulsando B&W)
                whileInView="revealColor" // Estado quando visível (Colorido + Pulsando)
                exit="exit"
                
                // Configuração do gatilho de scroll
                viewport={{ 
                    once: false, 
                    amount: 0.5, 
                    margin: "0px 0px -100px 0px"
                }}
                
                className="break-inside-avoid relative group overflow-hidden border-2 border-transparent transition-all rounded-sm bg-[#1a1a1a]"
              >
                <img 
                  src={src} 
                  alt={`Beleza Urbana - ${activeTab} ${index}`} 
                  className="w-full h-auto"
                />
                
                {/* Overlay Informativo (Ainda útil para mostrar texto) */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest block mb-1">
                        {activeTab === 'works' ? 'Beleza Urbana' : 'Experience'}
                      </span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;