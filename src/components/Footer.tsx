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
          <div className="flex flex-col gap-8">
            <div>
              <Image 
                src="/images/logo-footer.png" 
                alt="Músicas para Eventos" 
                width={220} 
                height={60} 
                className="h-auto"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-500 text-[14px]">
              <p>musicalivrededireitos.com.br</p>
              <p>Licenciamento de acervo musical royalty-free para operações</p>
              <p>com 20+ PDVs.</p>
              <p>contato@musicalivrededireitos.com.br</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-[14px] tracking-[1.4px] mb-4 uppercase">INÍCIO</h5>
            <button onClick={(e) => handleScroll(e, 'solucoes')} className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer text-[14px]">Soluções</button>
            <button onClick={(e) => handleScroll(e, 'para-quem-e')} className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer text-[14px]">Para Quem É</button>
            <button onClick={(e) => handleScroll(e, 'playlists')} className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer text-[14px]">Playlists</button>
            <button onClick={(e) => handleScroll(e, 'como-funciona')} className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer text-[14px]">Como Funciona</button>
            <button onClick={(e) => handleScroll(e, 'cases')} className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer text-[14px]">Cases</button>
            <button onClick={(e) => handleScroll(e, 'faq')} className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer text-[14px]">FAQ</button>
            <button onClick={(e) => handleScroll(e, 'contato')} className="text-left text-gray-500 hover:text-white transition-colors cursor-pointer text-[14px]">Contato</button>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-gray-500 text-[13px] leading-relaxed">
            Este acervo é composto por obras originais de titularidade própria, licenciadas diretamente pelo titular conforme a Lei nº 9.610/98. O licenciamento direto entre titular e licenciado dispensa pagamentos adicionais a entidades coletoras pelas obras deste acervo. Este site e seus serviços não têm vínculo com qualquer entidade coletora de direitos autorais.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-[11px] text-gray-600">
          <p>© 2024 músicas para eventos. Todos os direitos reservados.</p>
          <div className="text-right flex flex-col gap-1 max-w-[400px]">
            <p className="font-bold text-gray-500">Sub-tagline ROYALTY FREE</p>
            <p>
              Isenção de taxas válida para as obras contidas em nosso catálogo exclusivo conforme legislação vigente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
