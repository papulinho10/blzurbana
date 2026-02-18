import React from 'react';
import Button from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { Timer, Star } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section className="py-20 bg-brand-pink relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-24 -left-24 w-64 h-64 border-[20px] border-brand-yellow rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-purple mix-blend-multiply filter blur-3xl opacity-60"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        <div className="md:w-1/2 text-white">
          <div className="flex items-center gap-2 text-brand-dark font-black tracking-widest text-sm uppercase mb-4 bg-white/20 w-fit px-4 py-1 backdrop-blur-sm">
            <Star size={16} fill="currentColor" />
            <span>First Experience</span>
          </div>
          
          <h2 className="font-black text-5xl md:text-7xl mb-6 leading-[0.9] uppercase transform -skew-x-2">
            Seja <br /> Única.
          </h2>
          
          <p className="text-white text-lg font-medium mb-8 max-w-md leading-relaxed">
            Sua primeira visita é o início de uma nova relação com sua autoimagem. 
            <br/><br/>
            Agende hoje e ganhe <span className="bg-brand-yellow text-brand-dark px-1 font-bold">15% OFF</span> + tratamento de brilho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-brand-dark text-white hover:bg-white hover:text-brand-pink shadow-none border-2 border-transparent hover:border-brand-dark">
                  Resgatar Desconto
              </Button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square md:w-[400px] md:h-[400px] bg-brand-cyan mx-auto overflow-hidden border-4 border-white transform rotate-3 hover:-rotate-3 transition-transform duration-500">
                <img 
                    src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2036&auto=format&fit=crop" 
                    alt="Close up woman" 
                    className="w-full h-full object-cover mix-blend-hard-light grayscale contrast-125"
                />
            </div>
            {/* Sticker */}
            <div className="absolute -bottom-6 -right-4 md:right-10 bg-brand-yellow text-brand-dark font-black rounded-full w-24 h-24 flex items-center justify-center text-center text-xs rotate-12 shadow-lg z-20">
                OFFERTA<br/>LIMITADA
            </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;