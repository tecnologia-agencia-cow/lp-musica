'use client';

import Image from 'next/image';
import { Box, Music } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Logo & Info */}
          <div>
            <div className="mb-8">
              <Image 
                src="/images/white-logo.png" 
                alt="Músicas para Eventos" 
                width={220} 
                height={60} 
                className="h-auto"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-400 text-sm">
              <p>musicalivrededireitos.com.br</p>
              <p>Licenciamento de acervo musical livre de direitos autorais</p>
              <p>contato@musicalivrededireitos.com.br</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-lg mb-2">INÍCIO</h5>
            <button onClick={(e) => handleScroll(e, 'solucoes')} className="text-left text-gray-400 hover:text-white transition-colors cursor-pointer">Soluções</button>
            <button onClick={(e) => handleScroll(e, 'para-quem')} className="text-left text-gray-400 hover:text-white transition-colors cursor-pointer">Para Quem É</button>
            <button onClick={(e) => handleScroll(e, 'como-funciona')} className="text-left text-gray-400 hover:text-white transition-colors cursor-pointer">Como Funciona</button>
            <button onClick={(e) => handleScroll(e, 'contato')} className="text-left text-gray-400 hover:text-white transition-colors cursor-pointer">Contato</button>
          </div>
        </div>
...

        {/* Disclaimer Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-gray-400 text-sm leading-relaxed">
            Este acervo é composto por obras de titularidade própria, licenciadas diretamente pelo titular conforme a Lei 9.610/98. O licenciamento direto entre titular e licenciado desobriga o pagamento de taxas a entidades coletoras para as obras deste acervo. Este site e seus serviços não têm vínculo com nenhuma entidade coletora de direitos autorais.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-[11px] text-gray-500">
          <p>© 2024 músicas para eventos. Todos os direitos reservados.</p>
          <div className="text-right flex flex-col gap-1 max-w-[400px]">
            <p className="font-bold text-gray-400">Sub-tagline ROYALTY FREE</p>
            <p>
              Isenção de taxas válida para as obras contidas em nosso catálogo exclusivo conforme legislação vigente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
