import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import Button from './ui/Button';

const Testimonials: React.FC = () => {
  const googleReviewsLink = "https://www.google.com/search?sca_esv=89aaa52b873f06b6&rlz=1C1ONGR_enBR1153BR1153&sxsrf=ANbL-n71UKEpow04cUJNPcVJmLOmU27KqQ:1770322938442&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT23_PWVJ8BZ0JRW-9VYc_D8Fh20_FLX1xPKEvf4BCtHGgaqI-t8bdi2crnvLFprDlpFp3Ru8ZHh7Sdzm0UZ7gjizg-WbB9vqVzD6b5OMrcdLMVqpdowDc3lJI6vI-9R2mN_6_A%3D&q=Sal%C3%A3o+de+Beleza+Gramado+-+Beleza+Urbana+Coment%C3%A1rios&sa=X&ved=2ahUKEwj1n4jvlsOSAxWJqZUCHcEANBcQ0bkNegQIIxAH&biw=1536&bih=703&dpr=1.25";

  return (
    <section id="vibe" className="py-24 bg-[#08020D] relative overflow-hidden">
        {/* Neon Lines BG */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8303af20_1px,transparent_1px),linear-gradient(to_bottom,#8303af20_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl md:text-5xl text-white mb-4 uppercase">Quem vive a <span className="text-brand-cyan">Vibe</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#150a1f] p-8 border border-white/5 relative hover:border-brand-purple transition-all group">
              <Quote className="absolute top-4 right-4 text-brand-purple opacity-20 group-hover:opacity-100 transition-opacity" size={64} />
              
              <div className="flex gap-1 mb-6 text-brand-yellow">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 font-medium mb-8 relative z-10 leading-relaxed min-h-[80px]">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-purple rounded-full flex items-center justify-center text-white font-black text-xl">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase">{testimonial.name}</h4>
                  <span className="text-xs text-brand-cyan font-bold tracking-widest uppercase">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group border-white text-white hover:border-brand-yellow hover:text-brand-yellow">
                    Ver avaliações reais no Google
                    <ExternalLink size={16} className="ml-2 group-hover:scale-110 transition-transform" />
                </Button>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;