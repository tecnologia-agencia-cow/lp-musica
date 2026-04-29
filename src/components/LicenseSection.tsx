'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const otherSegments = [
  'Redes de varejo e franquias com 20+ unidades',
  'Redes de hotelaria, alimentação e bares',
  'Redes de saúde, clínicas e farmácias',
  'Produtoras de eventos, feiras e exposições',
  'Redes de academias, studios e bem-estar',
  'Redes de educação, transportes, coworkings, concessionárias e pet shops',
];

export function LicenseSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="para-quem-e" className="py-32 bg-[#110D26] text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-[64px] font-bold text-center mb-16 leading-[36px]">
          Para quem é
        </h2>

        {/* Main Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#1C1638] rounded-r-[16px] overflow-hidden mb-8 flex mx-auto max-w-[936px] min-h-[384px]"
        >
          {/* Accent Stripe */}
          <div className="w-[6px] bg-[#A78BFA] shrink-0" />
          
          <div className="p-[56px] flex-1 flex flex-col justify-center">
            <h3 className="text-3xl md:text-[32px] font-bold mb-6 leading-tight">
              Operadores de rádio indoor e mídia ambiente
            </h3>
            <p className="text-white/70 text-[20px] leading-[28px] mb-6 font-normal">
              Empresas que operam ambientação musical para múltiplos PDVs e querem oferecer um 
              diferencial real aos seus clientes — sem repassar a conta do licenciamento mensal.
            </p>
            <p className="text-[#FFFFFF] font-bold text-[20px] leading-[28px] mb-10">
              Atendemos operações a partir de 20 PDVs ativos, no Brasil e no exterior.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="flex items-center justify-start gap-2 bg-[#6B21E0] text-white py-4 px-8 rounded-[12px] hover:bg-[#5b1bc5] transition-all cursor-pointer group h-[60px] w-full md:w-[361.88px] text-left"
            >
              <span className="whitespace-nowrap font-bold text-[18px] leading-[28px]">Falar com nosso time consultivo</span>
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </motion.div>

        {/* Other Segments Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border border-white/10 rounded-[16px] p-[40px] bg-[#1C163880] mx-auto max-w-[936px] min-h-[270px] backdrop-blur-sm"
        >
          <h4 className="text-[#A78BFA] font-bold text-[14px] leading-[20px] tracking-[2.8px] uppercase mb-8">
            TAMBÉM ATENDEMOS:
          </h4>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {otherSegments.map((segment, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#A78BFA] shrink-0 mt-0.5" />
                <p className="text-white/80 text-[16px] leading-[24px]">
                  {segment}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
