'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "“Conseguimos reter clientes que estavam saindo por causa do custo da música ambiente. Hoje entregamos uma solução documentada, com margem melhor para nós.”",
    author: "Parceiro Licenciado",
    sub: "Empresa de rádio indoor · São Paulo"
  },
  {
    text: "“O acervo virou diferencial de vendas. Os clientes pedem para fechar na mesma conversa.”",
    author: "Parceiro Licenciado",
    sub: "Mídia indoor para redes de franquias · Sul do Brasil"
  },
  {
    text: '"Economia de 90% em relação ao que gastaríamos com taxas de direitos autorais. Mais de R$50.000 economizados em um único evento."',
    author: "Operador",
    sub: "Mídia Indoor · Brasil"
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
