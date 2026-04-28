'use client';

import { MessageCircle, Calendar, FileEdit } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#1E0F5C] text-center">
      <div className="max-w-[1280px] mx-auto min-h-[423px] pt-[96px] pb-[96px] px-[40px] flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6 leading-tight">
          Pronto para eliminar esse custo da sua operação?
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Sem compromisso. Uma conversa de 20 minutos já <br className="hidden md:block" />
          define se faz sentido para o seu negócio.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            href="https://wa.me/your-number"
            className="w-full md:w-auto bg-[#22C55E] text-white px-10 py-5 rounded-[16px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#16a34a] transition-all cursor-pointer"
          >
            <MessageCircle size={24} /> WhatsApp
          </Link>
          
          <button 
            onClick={scrollToContact}
            className="w-full md:w-auto bg-white text-[#0a0026] px-10 py-5 rounded-[16px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all cursor-pointer"
          >
            <Calendar size={24} /> Agendar conversa
          </button>

          <button 
            onClick={scrollToContact}
            className="w-full md:w-auto bg-[#9333EA] text-white px-10 py-5 rounded-[16px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#7e22ce] transition-all cursor-pointer"
          >
            <FileEdit size={24} /> Preencher formulário
          </button>
        </div>
      </div>
    </section>
  );
}
