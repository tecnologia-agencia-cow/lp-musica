'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export function Hero() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    perfil: '',
    pdvs: ''
  });

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Solicitação de Amostra - Hero*
---
*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email}
*Perfil:* ${formData.perfil}
*PDVs:* ${formData.pdvs}
---
Olá, gostaria de receber a amostra do acervo musical.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551980151245?text=${encodedMessage}`;
    
    // Redirect to success page instead of opening WhatsApp immediately
    router.push('/sucesso');
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
              <div className="max-w-[529px] mb-8 text-left">
                <p 
                  className="text-lg md:text-[24px] text-white/90 leading-relaxed md:leading-[32px] font-medium"
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
                  href="https://wa.me/5551980151245"
                  className="w-full sm:w-auto bg-white text-[#1C1638] px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 cursor-pointer overflow-hidden group"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 shrink-0">
                    <Image src="/images/whatsapp-avatar.jpg" alt="Avatar" width={32} height={32} className="object-cover" />
                  </div>
                  <span>Falar no WhatsApp</span>
                  <MessageCircle size={24} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[445.34px] min-h-[606px] backdrop-blur-[24px] border border-white/10 p-6 md:p-8 pt-10 pb-12 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] isolate flex flex-col overflow-hidden"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <h3 
              className="text-[24px] font-bold text-white mb-2 leading-tight"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
              Receba uma amostra do acervo
            </h3>
            <p className="text-white/70 text-sm mb-6">Atendemos operações a partir de 20 PDVs.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-full">
              <input 
                type="text" 
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome Completo"
                className="w-full h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="text" 
                name="empresa"
                required
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                className="w-full h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="tel" 
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WhatsApp"
                className="w-full h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail corporativo"
                className="w-full h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="text" 
                name="perfil"
                required
                value={formData.perfil}
                onChange={handleChange}
                placeholder="Você é..."
                className="w-full h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input 
                type="text" 
                name="pdvs"
                required
                value={formData.pdvs}
                onChange={handleChange}
                placeholder="Quantos PDVs hoje?"
                className="w-full h-[48px] pt-[14px] pb-[15px] px-4 bg-[#FFFFFFCC] border-none rounded-[8px] text-[#4B4B61] font-medium placeholder:text-[#8E8E9C] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              
              <button 
                type="submit"
                className="w-full bg-[#7C3AED] text-white py-4 mt-2 rounded-lg font-bold text-lg hover:bg-[#6D28D9] transition-all active:scale-[0.98] cursor-pointer"
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
