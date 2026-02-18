import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-brand-dark relative overflow-hidden">
      
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-purple/10 skew-x-[-20deg] transform origin-top hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
        >
          <div className="relative z-10 border-4 border-white p-2 transform -rotate-3 bg-brand-pink">
               <img 
                src="https://images.unsplash.com/photo-1574719967693-59677b102607?q=80&w=1287&auto=format&fit=crop" 
                alt="Manifesto Visual" 
                className="w-full h-auto grayscale contrast-125 mix-blend-multiply"
            />
          </div>
          {/* Back Square */}
          <div className="absolute top-6 left-6 w-full h-full bg-brand-cyan border-4 border-black z-0 rotate-3"></div>
          
          <div className="absolute -bottom-10 -left-6 bg-brand-yellow text-black p-6 font-black uppercase text-xl shadow-[8px_8px_0px_#fff] transform rotate-2 z-20">
             Beleza<br/>Sem<br/>Regras
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
        >
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm mb-2 block">Nosso Manifesto</span>
          <h2 className="font-black text-5xl md:text-6xl text-white mb-8 leading-[0.9] uppercase">
            Quebra de <br/> <span className="text-outline">Padrões</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 font-medium text-lg leading-relaxed">
            <p>
              Em um mundo que tenta nos colocar em caixas, <strong>Beleza Urbana</strong> é o grito de liberdade. 
              Nascemos em Gramado para desafiar o convencional.
            </p>
            <p>
              Não seguimos tendências cegamente. Criamos identidade. Acreditamos que a beleza real mora na diversidade, 
              no caos organizado da cidade e na singularidade de cada rosto.
            </p>
            <p>
              Aqui, unimos o <span className="text-brand-cyan">exterior e o interior</span>. 
              Sua imagem é sua voz, e nós estamos aqui para amplificá-la.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
             <div className="w-16 h-16 border-2 border-brand-pink rounded-full flex items-center justify-center text-2xl">B</div>
             <div className="w-16 h-16 border-2 border-brand-purple rounded-full flex items-center justify-center text-2xl">L</div>
             <div className="w-16 h-16 border-2 border-brand-cyan rounded-full flex items-center justify-center text-2xl">Z</div>
          </div>
          
          <div className="mt-10">
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button>Faça Parte do Movimento</Button>
             </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;