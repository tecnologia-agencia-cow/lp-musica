'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

const testimonials = [
  {
    text: "“Conseguimos uma redução drástica nos custos operacionais da Interaudio ao eliminar as taxas de direitos autorais. O acervo é vasto, de altíssima qualidade e nos dá total segurança jurídica para expandir nossa rede.”",
    author: "Edson",
    sub: "Interaudio · Soluções em Áudio",
    image: "/images/testimonials/edson.png"
  },
  {
    text: "“A MariSom buscava uma solução que unisse custo-benefício e excelência sonora. Encontramos o parceiro ideal. A documentação é impecável e o licenciamento direto facilitou nossa expansão.”",
    author: "Renato",
    sub: "MariSom · Mídia Ambiente",
    image: "/images/testimonials/marisom-logo.png"
  },
  {
    text: "“A economia de 90% em taxas de direitos autorais foi o ponto de virada para nossa rede. Hoje operamos com 100% de conformidade legal e uma trilha sonora que reforça nossa identidade de marca.”",
    author: "Parceiro Licenciado",
    sub: "Rede de Varejo · Brasil",
    image: null
  }
];

export function Testimonials() {
  return (
    <section id="cases"
      className="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Dark Purple Overlay (Same as Hero) */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#3B0F8CD9' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-bold text-white leading-tight mb-4"
          >
            Multimilhões em economia
          </motion.h2>
          <p className="text-[18px] md:text-[20px] text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
            gerada para nossos parceiros ao longo de mais de 10 anos atendendo o mercado nacional e internacional. É a economia que você passa a oferecer aos seus clientes ao licenciar nosso acervo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-1 min-h-[280px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[24px] flex flex-col justify-between"
            >
              <p className="text-white/90 text-[16px] leading-relaxed italic mb-8">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9]" />
                <div>
                  <h4 className="text-white text-[14px] font-bold">{t.author}</h4>
                  <p className="text-white/50 text-[12px]">{t.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
