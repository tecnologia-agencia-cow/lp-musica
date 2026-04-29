'use client';

import { MessageSquare, Calendar, FileSignature } from 'lucide-react';
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
    <section className="bg-[#0A0035] text-center">
      <div className="max-w-[1280px] mx-auto py-24 px-4 md:px-8 flex flex-col justify-center items-center">
        <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6 leading-tight">
          Pronto para licenciar um acervo que cabe na sua operação?
        </h2>
        <p className="text-white/80 text-[18px] md:text-[22px] mb-12 max-w-3xl mx-auto leading-relaxed">
          Atendemos operações com 20+ PDVs no Brasil e no exterior. <br className="hidden md:block" />
          Uma conversa consultiva resolve se faz sentido pro seu negócio.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <Link 
            href="https://wa.me/your-number"
            className="w-full md:w-auto bg-[#22C55E] text-white px-8 py-5 rounded-[12px] font-bold text-[18px] flex items-center justify-center gap-3 hover:bg-[#1db954] transition-all cursor-pointer group"
          >
            <MessageSquare size={24} className="shrink-0" /> 
            <span>Falar no WhatsApp</span>
          </Link>
          
          <button 
            onClick={scrollToContact}
            className="w-full md:w-auto bg-white text-[#0A0035] px-8 py-5 rounded-[12px] font-bold text-[18px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-all cursor-pointer"
          >
            <Calendar size={24} className="shrink-0" /> 
            <span>Agendar Conversa Consultiva</span>
          </button>

          <button 
            onClick={scrollToContact}
            className="w-full md:w-auto bg-[#9333EA] text-white px-8 py-5 rounded-[12px] font-bold text-[18px] flex items-center justify-center gap-3 hover:bg-[#7e22ce] transition-all cursor-pointer"
          >
            <FileSignature size={24} className="shrink-0" /> 
            <span>Preencher Formulário</span>
          </button>
        </div>
      </div>
    </section>
  );
}
