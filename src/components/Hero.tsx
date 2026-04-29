'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export function Hero() {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Dark Purple Overlay */}
      <div className="absolute inset-0 bg-[#0a0026]/70 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-left flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <h1 className="max-w-[800px] text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6 text-left">
                Acervo musical royalty-free <br />
                para operações com 20+ <br />
                pontos de venda.
              </h1>
              <div className="max-w-[529px] h-[181px] mb-8 text-left">
                <p 
                  className="text-[24px] text-white/90 leading-[32px] font-medium"
                  style={{ fontFamily: 'var(--font-roboto)' }}
                >
                  Para operadores de rádio indoor, mídia ambiente, redes de varejo e produtoras de eventos no Brasil e no exterior. Modelo consultivo, documentação completa de uso comercial, sem cobranças mensais de direitos autorais.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
                <button 
                  onClick={(e) => handleScroll(e, 'playlists')}
                  className="w-full sm:w-auto bg-[#7C3AED] text-white px-10 py-3.5 rounded-lg font-bold text-lg hover:bg-[#6D28D9] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Ouvir o Catálogo <span className="text-xl">→</span>
                </button>
                <Link 
                  href="https://wa.me/your-number"
                  className="w-full sm:w-auto bg-white text-[#1C1638] px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  Falar no WhatsApp <MessageCircle size={24} className="text-[#25D366]" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[445.34px] h-[606px] backdrop-blur-[24px] border border-white/10 p-8 pt-10 pb-12 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] isolate flex flex-col overflow-hidden"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <h3 
              className="text-[24px] font-bold text-white mb-2 max-w-[379.33px] h-[32px] leading-[32px]"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Receba uma amostra do acervo
            </h3>
            <p className="text-white/70 text-sm mb-6">Atendemos operações a partir de 20 PDVs.</p>
            
            <form className="flex flex-col gap-2.5">
              <input 
                type="text" 
                placeholder="Nome Completo"
                className="w-[379.33px] h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="text" 
                placeholder="Empresa"
                className="w-[379.33px] h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="tel" 
                placeholder="WhatsApp"
                className="w-[379.33px] h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="E-mail corporativo"
                className="w-[379.33px] h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="text" 
                placeholder="Você é..."
                className="w-[379.33px] h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="text" 
                placeholder="Quantos PDVs hoje?"
                className="w-[379.33px] h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              
              <button 
                type="submit"
                className="w-[379.33px] bg-[#7C3AED] text-white py-4 mt-2 rounded-lg font-bold text-lg hover:bg-[#6D28D9] transition-all active:scale-[0.98] cursor-pointer"
              >
                Receber Amostra
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
