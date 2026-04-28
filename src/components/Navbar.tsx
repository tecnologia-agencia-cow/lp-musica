'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[81px] bg-white/95 backdrop-blur-[6px] border-b border-[#F3F4F6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] box-border flex flex-col justify-center px-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image 
            src="/images/purple-logo.png" 
            alt="Músicas para Eventos" 
            width={180} 
            height={50} 
            className="h-auto"
          />
        </div>
        
        {/* Nav Links & Button */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={(e) => handleScroll(e, 'solucoes')} className="text-[#4B5563] hover:text-primary transition-colors font-bold text-[13px] tracking-wider uppercase cursor-pointer">Soluções</button>
            <button onClick={(e) => handleScroll(e, 'para-quem')} className="text-[#4B5563] hover:text-primary transition-colors font-bold text-[13px] tracking-wider uppercase cursor-pointer">Para quem é</button>
            <button onClick={(e) => handleScroll(e, 'cases')} className="text-[#4B5563] hover:text-primary transition-colors font-bold text-[13px] tracking-wider uppercase cursor-pointer">Cases</button>
            <button onClick={(e) => handleScroll(e, 'contato')} className="text-[#4B5563] hover:text-primary transition-colors font-bold text-[13px] tracking-wider uppercase cursor-pointer">Contato</button>
          </div>
          
          <Link 
            href="https://wa.me/your-number" 
            className="bg-primary text-white px-6 py-3.5 rounded-[8px] font-bold text-[13px] tracking-wider uppercase hover:bg-primary/90 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </nav>
  );
}
