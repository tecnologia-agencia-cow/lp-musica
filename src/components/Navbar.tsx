'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'SOLUÇÕES', id: 'solucoes' },
    { name: 'PARA QUEM É', id: 'para-quem-e' },
    { name: 'PLAYLISTS', id: 'playlists' },
    { name: 'CASES', id: 'cases' },
    { name: 'FAQ', id: 'faq' },
    { name: 'CONTATO', id: 'contato' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F5F5F7]/95 backdrop-blur-md shadow-sm' : 'bg-[#F5F5F7]'
      } border-b border-gray-200/50`}
      style={{ height: '81px' }}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image 
              src="/images/logo-nav.png" 
              alt="Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-[#4B5563] font-bold text-[13px] tracking-[1.5px] hover:text-[#6B21E0] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleScrollTo('contato')}
              className="bg-[#6B21E0] text-white px-6 py-3 rounded-[10px] font-bold text-[13px] tracking-[1px] hover:bg-[#5b1bc5] transition-all uppercase"
            >
              FALAR NO WHATSAPP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#1C1638]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#F5F5F7] border-t border-gray-200 py-6 px-4 shadow-lg">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-[#4B5563] font-bold text-[14px] tracking-[1px] text-left uppercase"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo('contato')}
              className="bg-[#6B21E0] text-white px-6 py-4 rounded-[10px] font-bold text-[14px] tracking-[1px] uppercase w-full"
            >
              FALAR NO WHATSAPP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
