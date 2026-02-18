import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';
import Button from './ui/Button';

interface HeaderProps {
    onNavigateHome?: () => void;
    isHomePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, isHomePage = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (!isHomePage && onNavigateHome) {
        e.preventDefault();
        onNavigateHome();
        // Wait for state update then scroll
        setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onNavigateHome) onNavigateHome();
      window.scrollTo(0, 0);
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Conceptualization */}
        <a href="#" onClick={handleLogoClick} className="flex flex-col leading-none font-black tracking-tighter hover:opacity-80 transition-opacity group">
          <div className="flex items-end">
            <span className="text-4xl text-white">B</span>
            <span className="text-4xl text-brand-yellow -ml-1 mb-1">.</span>
            <span className="text-4xl text-white">Z</span>
          </div>
          <div className="flex -mt-2 text-3xl">
            <span className="text-brand-pink">U</span>
            <span className="text-white">R</span>
            <span className="text-brand-yellow">B</span>
          </div>
          <span className="text-[0.6rem] tracking-[0.2em] mt-1 text-white group-hover:text-brand-cyan transition-colors">BELEZA URBANA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(link.href, e)}
              className="text-sm font-bold text-gray-300 hover:text-brand-cyan transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-pink transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-6 py-2 text-xs">
                Agendar
              </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-brand-pink transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl h-screen">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-black text-white hover:text-brand-cyan py-4 border-b border-white/5 uppercase"
              onClick={(e) => handleNavClick(link.href, e)}
            >
              {link.name}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
            <Button fullWidth variant="primary">Agendar Agora</Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;