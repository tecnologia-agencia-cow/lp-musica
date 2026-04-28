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
      <div className="absolute inset-0 bg-[#0a0026]/85 z-0" />

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
                Acervo musical 100%&nbsp;livre <br className="hidden md:block" />
                de direitos autorais para <br className="hidden md:block" />
                empresas e eventos.
              </h1>
              <div className="max-w-[700px] mb-8 text-left">
                <p className="text-lg md:text-xl text-white/90 leading-tight font-medium">
                  Para donos de rádio indoor, mídia ambiente, <br className="hidden md:block" />
                  redes de lojas, eventos e feiras: licenciamento <br className="hidden md:block" />
                  documentado, legal e sem royalties.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
                <button 
                  onClick={(e) => handleScroll(e, 'solucoes')}
                  className="w-full sm:w-auto bg-[#6332CE] text-white px-10 py-3.5 rounded-lg font-bold text-lg hover:bg-[#5225b1] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Conhecer <span className="text-xl">→</span>
                </button>
                <Link 
                  href="https://wa.me/your-number"
                  className="w-full sm:w-auto bg-white text-[#0a0026] px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  Falar no WhatsApp <MessageCircle size={24} className="text-[#25D366]" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[445.34px] h-[446px] bg-white/[0.03] backdrop-blur-[24px] border border-white/10 p-8 pt-8 pb-10 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] isolate flex flex-col overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Solicite um Orçamento</h3>
            
            <form className="flex flex-col gap-2.5">
              <input 
                type="text" 
                placeholder="Seu nome"
                className="w-full px-6 py-[14px] bg-[#D9D9E3] border-none rounded-xl text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="E-mail corporativo"
                className="w-full px-6 py-[14px] bg-[#D9D9E3] border-none rounded-xl text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="tel" 
                placeholder="Telefone / WhatsApp"
                className="w-full px-6 py-[14px] bg-[#D9D9E3] border-none rounded-xl text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <div className="relative">
                <select 
                  className="w-full px-6 py-[14px] bg-[#D9D9E3] border-none rounded-xl text-[#8E8E9C] font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                >
                  <option>Você é...</option>
                  <option>Empresa</option>
                  <option>Produtor de Eventos</option>
                  <option>Outro</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#8E8E9C]">
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#6332CE] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#5225b3] transition-all active:scale-[0.98] cursor-pointer"
              >
                Receber Proposta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
