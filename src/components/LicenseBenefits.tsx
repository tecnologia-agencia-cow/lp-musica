'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Layout } from 'lucide-react';

const benefits = [
  {
    title: 'Zero cobrança recorrente de direitos autorais',
    desc: 'Acervo royalty-free de execução pública. Você paga a licença e usa em todos os PDVs do contrato — sem boletos extras a cada mês.',
    icon: ShieldCheck,
  },
  {
    title: 'Documentação formal por unidade',
    desc: 'Licença emitida diretamente pelo titular, por PDV ou por evento. Respaldo jurídico completo para apresentar ao seu cliente final ou em qualquer fiscalização.',
    icon: FileText,
  },
  {
    title: 'Modelo consultivo, dois formatos',
    desc: 'Recorrente mensal por PDV para operações contínuas (a partir de 20 pontos). Pontual por evento para feiras e exposições. A licença é desenhada na conversa, não no carrinho.',
    icon: Layout,
  },
];

export function LicenseBenefits() {
  return (
    <section className="py-32 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Column: Text */}
          <div className="flex-1">
            <h2 className="text-[42px] font-extrabold text-[#0a0026] mb-10 leading-[1.1]">
              Licencie um acervo <br />
              profissional sem cobranças <br />
              mensais de <span className="relative inline-block">
                <div className="absolute bottom-1 left-0 w-full h-[6px] bg-[#6B21E0]" />
                <span className="relative">direitos autorais.</span>
              </span>
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl">
              Nosso acervo é composto por mais de 3.000 obras originais de titularidade própria, 
              com mais de 40 faixas novas adicionadas todo mês. O licenciamento é direto entre 
              titular e licenciado — sem intermediários, sem repasse mensal a terceiros. 
              Você licencia, integra na sua operação e entrega ao seu cliente uma solução 
              documentada de ponta a ponta.
            </p>
          </div>

          {/* Right Column: Benefits */}
          <div className="flex-1 flex flex-col gap-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <benefit.icon className="text-[#6B21E0]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0a0026] mb-2">{benefit.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
