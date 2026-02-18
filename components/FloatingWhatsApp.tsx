import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20"></div>
      <MessageCircle size={32} color="white" fill="white" className="group-hover:scale-110 transition-transform" />
    </motion.a>
  );
};

export default FloatingWhatsApp;