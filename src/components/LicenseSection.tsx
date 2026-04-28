'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Music } from 'lucide-react';

const benefits = [
  {
    title: 'R$ 0 em royalties',
    desc: 'Acervo 100% livre de direitos autorais de execução pública.',
    icon: ShieldCheck,
  },
  {
    title: 'Documentação formal',
    desc: 'Licença emitida por unidade ou por evento — respaldo jurídico completo.',
    icon: FileText,
  },
  {
    title: 'Dois modelos disponíveis',
    desc: 'Recorrente mensal por loja ou m² para operações contínuas. Pontual por evento para feiras e exposições.',
    icon: Music,
  },
];

export function LicenseSection() {
  return (
    <section id="para-quem" className="py-32 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Column: Text */}
          <div className="flex-1">
            <h2 className="text-[42px] font-extrabold text-[#0a0026] mb-10 leading-[1.1]">
              Licencie um acervo musical <br />
              livre de direitos autorais e <br />
              <span className="relative inline-block">
                <div className="absolute bottom-0 left-0 w-full h-[8px] bg-[#6D28D9]" />
                <span className="relative">elimine esse custo de vez.</span>
              </span>
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl">
              Nosso acervo é composto por obras de titularidade própria, geridas individualmente pelo titular. O licenciamento é feito de forma direta entre titular e licenciado, conforme assegurado pela Lei 9.610/98 — Lei de Direitos Autorais. Você licencia e entrega ao seu cliente — ou ao seu evento — uma solução de áudio documentada, legal e sem nenhum custo de royalties.
            </p>
          </div>

          {/* Right Column: Benefits */}
          <div className="flex-1 flex flex-col gap-12">
            {benefits.map((b, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-[#6332CE]">
                  <b.icon size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#0a0026] mb-2">{b.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-[16px]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Part */}
        <div className="text-center mt-32 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0026]">
            Para quem é esta solução
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Rádio e mídia indoor', desc: 'Empresas que operam rádio ambiente para redes de lojas e precisam de acervo documentado para seus clientes.' },
            { title: 'Eventos/feiras', desc: 'Organizadores que querem eliminar o custo de direitos autorais em eventos de qualquer porte.' },
            { title: 'Varejo em rede', desc: 'Redes de lojas, franquias e multiunidades que precisam de padronização sonora sem custo de royalties.' },
            { title: 'Academias', desc: 'Redes de academias, studios de pilates e espaços de bem-estar com música ambiente contínua.' },
            { title: 'Saúde', desc: 'Redes de clínicas, farmácias, consultórios e hospitais que precisam de ambiente sonoro regulado e documentado.' },
            { title: 'Hotelaria', desc: 'Hotéis, pousadas, restaurantes e redes de alimentação com música ambiente em múltiplas unidades.' }
          ].map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl border-l-[4px] border-[#6D28D9] shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-bold text-[#0a0026] mb-3">{s.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Small Card */}
        <div className="w-[540px] max-w-full mx-auto h-[159px] bg-white/60 border border-[#E5E7EB] pt-[25px] px-[32px] pb-[32px] rounded-[16px] flex flex-col items-center gap-6">
          <h5 className="text-center text-sm font-bold text-[#0a0026] tracking-[0.2em] uppercase">
            Também Atendemos
          </h5>
          <div className="grid grid-cols-2 gap-y-4 gap-x-10">
            {['Restaurantes e bares', 'Supermercados', 'Coworkings', 'Estúdios de Yoga/Pilates'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-500 text-sm font-semibold whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-[#6D28D9]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
