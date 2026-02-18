import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import Button from './ui/Button';
import { WHATSAPP_LINK, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="font-black text-4xl md:text-6xl text-white mb-6 uppercase">Ready to Glow?</h2>
        <p className="text-gray-400 mb-8 text-lg font-medium">
          A sua melhor versão te espera no centro de Gramado.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="px-12 py-5 text-lg">Agendar Agora</Button>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex flex-col leading-none font-black tracking-tighter mb-6">
              <span className="text-2xl text-white">BELEZA</span>
              <span className="text-2xl text-brand-pink">URBANA</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Não é só um salão. É um manifesto de liberdade e estilo em Gramado.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/blzaurbana_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-pink hover:text-white transition-all">
                <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-cyan hover:text-black transition-all">
                <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-6">Menu</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
                <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm font-bold uppercase">{link.name}</a>
                </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-pink flex-shrink-0" />
              <span>Avelino Alves de Moraes, 88 - Centro<br/>Gramado - RS, 95670-000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-cyan flex-shrink-0" />
              <span>(54) 99954-1257</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-brand-purple flex-shrink-0" />
              <span>Ter - Sáb: 09h às 20h</span>
            </li>
          </ul>
        </div>

        {/* Map Placeholder */}
        <div className="h-48 bg-[#1a1a1a] relative overflow-hidden group">
             <img 
                src="https://picsum.photos/400/300?blur=4" 
                alt="Mapa" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-xs font-bold uppercase tracking-widest text-white border-2 border-brand-cyan px-4 py-2 hover:bg-brand-cyan hover:text-black transition-colors">Google Maps</span>
             </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-bold uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} Beleza Urbana. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Dinamismo • Diversidade • União</p>
      </div>
    </footer>
  );
};

export default Footer;