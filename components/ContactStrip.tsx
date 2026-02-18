import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_LINK, GOOGLE_MAPS_LINK, ADDRESS } from '../constants';

const ContactStrip: React.FC = () => {
  return (
    <section className="bg-brand-dark py-16 border-t border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* WhatsApp Card */}
          <motion.a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group bg-[#150a1f] p-8 border border-white/5 hover:border-[#25D366] transition-all flex flex-col items-center text-center rounded-sm"
          >
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#25D366] transition-colors">
              <MessageCircle size={32} className="text-[#25D366] group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-white font-bold text-xl uppercase mb-2">Agende pelo Whats</h3>
            <p className="text-gray-400 text-sm mb-4">Atendimento rápido e personalizado.</p>
            <span className="text-[#25D366] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
              Chamar Agora <ArrowRight size={16} />
            </span>
          </motion.a>

          {/* Instagram Card */}
          <motion.a 
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group bg-[#150a1f] p-8 border border-white/5 hover:border-brand-pink transition-all flex flex-col items-center text-center rounded-sm"
          >
            <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-pink transition-colors">
              <Instagram size={32} className="text-brand-pink group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-bold text-xl uppercase mb-2">Siga o Movimento</h3>
            <p className="text-gray-400 text-sm mb-4">Inspirações diárias e nosso lifestyle.</p>
            <span className="text-brand-pink font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver Perfil <ArrowRight size={16} />
            </span>
          </motion.a>

          {/* Location Card */}
          <motion.a 
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group bg-[#150a1f] p-8 border border-white/5 hover:border-brand-cyan transition-all flex flex-col items-center text-center rounded-sm"
          >
            <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-cyan transition-colors">
              <MapPin size={32} className="text-brand-cyan group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-white font-bold text-xl uppercase mb-2">Visite o Espaço</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-[200px]">{ADDRESS}</p>
            <span className="text-brand-cyan font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
              Abrir Mapa <ArrowRight size={16} />
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default ContactStrip;